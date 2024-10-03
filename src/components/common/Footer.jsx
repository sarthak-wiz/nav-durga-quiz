import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Creator Info */}
          <div>
            <p className="text-gray-600">
              Created with devotion by
            </p>
            <p className="text-lg font-semibold text-primary-dark">
              Sarthak Jain
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/sarthak-jain-32b114228/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-dark transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/sarthxk20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-dark transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://github.com/sarthak-wiz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-dark transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Nav Durga Quiz. All rights reserved.</p>
            <p className="mt-1">
              Made with respect for Hindu culture and traditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}