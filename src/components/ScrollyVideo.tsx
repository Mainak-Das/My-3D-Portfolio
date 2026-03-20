"use client";

import { useScroll, useSpring, useMotionValueEvent, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

export interface ScrollyVideoProps {
  src: string;
  frameCount?: number;
  children?: (progress: any) => ReactNode;
}

export default function ScrollyVideo({ src, frameCount = 120, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < frameCount; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          // Pad index with leading zeros (e.g., 000, 001, ..., 099, 100)
          const paddedIndex = i.toString().padStart(3, "0");
          img.src = `${src}/frame_${paddedIndex}.webp`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${src}/frame_${paddedIndex}.webp`);
            resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, [src, frameCount]);

  // Render frame based on scroll
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[index];

    if (!canvas || !ctx || !img) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect ratio to cover (object-cover behavior)
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    // Shift frames slightly to the right on mobile/tablet to center subject
    if (window.innerWidth < 768) { // Mobile
      offsetX += window.innerWidth * 0.15;
    }
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame after resize
        const currentProgress = springScroll.get();
        // On desktop (>=1024px) no overlay, so start video immediately; on mobile/tablet delay start
        const startThreshold = window.innerWidth >= 1024 ? 0 : 0.25;

        let progress = 0;
        if (currentProgress > startThreshold) {
          progress = (currentProgress - startThreshold) / (1 - startThreshold);
        }
        progress = Math.max(0, Math.min(1, progress));

        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(progress * frameCount)
        );
        if (isLoaded && images.length > 0) {
          renderFrame(frameIndex);
        }
      }
    };

    handleResize(); // Initial resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images, frameCount, springScroll]);


  // Update video time (frame) based on scroll
  useMotionValueEvent(springScroll, "change", (latest: number) => {
    if (!isLoaded || images.length === 0) return;

    // On desktop (>=1024px) no overlay, start immediately; on mobile/tablet delay start
    const startThreshold = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : 0.25;
    let progress = 0;
    if (latest > startThreshold) {
      progress = (latest - startThreshold) / (1 - startThreshold);
    }
    // ensure progress is within 0-1
    progress = Math.max(0, Math.min(1, progress));

    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(progress * frameCount)
    );

    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      renderFrame(0);
    }
  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        {/* Render children (Overlay) passing the springScroll value */}
        {children && children(springScroll)}
      </div>
    </div>
  );
}
