"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";
import DesktopHeroText from "@/components/DesktopHeroText";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <ScrollyVideo src="/sequences" frameCount={120}>
        {(progress: any) => (
          <>
            <Overlay scrollYProgress={progress} />
            <DesktopHeroText scrollYProgress={progress} />
          </>
        )}
      </ScrollyVideo>
    </div>
  );
}
