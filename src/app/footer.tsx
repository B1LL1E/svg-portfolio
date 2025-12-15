// src/app/footer.tsx
import { SocialMedia } from "./socialmedia";

export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto mt-24 py-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
      
      {/* Lewa strona: Copyright */}
      <div className="mb-4 md:mb-0">
        <p>© 2025 SVGVFX. All rights reserved.</p>
      </div>

      {/* Prawa strona: Twoje ikonki (użyte ponownie!) */}
      {/* Skalujemy je trochę (scale-90), żeby w stopce były nieco mniejsze */}
      <div className="scale-90">
        <SocialMedia />
      </div>

    </footer>
  );
}