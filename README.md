# Mainak Das | Portfolio

A sleek, interactive 3D portfolio showcasing my projects and professional progression.

## ✨ Features
* **Visuals:** Dark theme, glassmorphism, and ambient lighting.
* **Motion:** Smooth scrolly-telling and custom transition effects.
* **Projects:** Bento-style grid featuring video previews and detailed modals.
* **Timeline:** Interactive career and education history.
* **Extras:** Infinite testimonial marquee and full mobile responsiveness.
* **Contact:** Built-in direct messaging via Nodemailer.

## 🛠️ Tech Stack
* **Core:** [Next.js 16](https://nextjs.org/) (App Router), TypeScript
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Animation & 3D:** [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
* **Media:** Custom/Lucide SVGs, [FFmpeg](https://ffmpeg.org/), HTML5 Video

## 📂 Structure

```text
├── src/
│   ├── app/         # Next.js routes
│   ├── components/  # Reusable UI elements
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Shared utilities
│   └── styles/      # Global styling & Tailwind config
├── public/          # Static assets
└── .env.local       # Local secrets
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mainak-Das/My-3D-Portfolio.git
   cd My-3D-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary variables for email services (if applicable):
   ```env
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_app_password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the built production application.
- `npm run lint`: Runs ESLint for code quality checks.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mainak-Das/My-3D-Portfolio/issues).
