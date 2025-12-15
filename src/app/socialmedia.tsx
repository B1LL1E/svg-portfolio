// src/app/socialmedia.tsx
import { Instagram, Mail, Twitch, Youtube } from "lucide-react";

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-6">
      
      {/* Instagram */}
      {/* <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition-colors duration-200"
      >
        <Instagram size={24} />
      </a>  */}

      {/*Twich */}
      
      <a
        href="https://www.twitch.tv/svgvfx/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition-colors duration-200"
        >
        <Twitch/>
      </a>

      {/* YouTube */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition-colors duration-200"
      >
        <Youtube size={24} />
      </a>

      {/* Mail */}
      <a
        href="mailto:kontakt@twojdomena.pl"
        className="text-neutral-400 hover:text-white transition-colors duration-200"
      >
        <Mail size={24} />
      </a>

      <a
        href="https://www.twitch.tv/svgvfx/">

      </a>
    </div>
  );
}