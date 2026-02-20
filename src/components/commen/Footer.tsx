import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-text-muted">
        <p>© 2025 Screenscope. Open Source.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/iamayushkarma/screenscope"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text-secondary transition-colors"
          >
            <Github className="size-3.5" />
            GitHub
          </a>
          <a
            href="#how-it-works"
            className="hover:text-text-secondary  transition-colors"
          >
            How it works
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
