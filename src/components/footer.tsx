import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [quote] = useState('"The only way to do great work is to love what you do." — Steve Jobs');

  return (
    <footer className="bg-[#90AEAD] border-t-8 border-white/10">
      <div className="container mx-auto px-6 sm:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Contact Info */}
          <div className="space-y-4">
            <Typography variant="h5" className="!text-gray-100 font-bold mb-4">
              Let us Connect
            </Typography>
            <div className="flex flex-col gap-2 text-base">
              <Typography className="!text-gray-100">📍 Mombasa, Kenya</Typography>
              <a href="mailto:wanjikusofia858@gmail.com" className="!text-gray-100 hover:!text-white">
                📩 wanjikusofia858@gmail.com
              </a>
              <Typography className="!text-gray-100">📞 +254 712 345 678</Typography>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <Typography variant="h5" className="!text-gray-100 font-bold mb-4">
              Reach Me
            </Typography>
            <div className="flex space-x-6 justify-center">
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.16 9.16 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 2.1a4.52 4.52 0 001.4 6.03 4.41 4.41 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.05 9.05 0 012 19.54a12.78 12.78 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.85 0-.2 0-.39-.01-.58A9.2 9.2 0 0023 3z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/wanjikusofia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-800 transition-transform transform hover:scale-110"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                      3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 
                      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 
                      3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 
                      0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 
                      0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 
                      2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.657 1.653.244 2.873.12 
                      3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                      5.92.43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 
                      0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://ke.linkedin.com/in/wanjiku-sofia-b87852345"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M20.452 20.452H17.21v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 
                      0-2.137 1.446-2.137 2.939v5.669H9.977V9h3.112v1.561h.045c.434-.823 
                      1.494-1.688 3.074-1.688 3.289 0 3.893 2.165 3.893 4.977v6.602zM5.337 
                      7.433c-1.004 0-1.816-.813-1.816-1.817 0-1.003.812-1.816 
                      1.816-1.816 1.003 0 1.816.813 1.816 1.816 0 1.004-.813 1.817-1.816 
                      1.817zM6.768 20.452H3.897V9h2.871v11.452zM22.225 
                      0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 
                      24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 
                      0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex items-center justify-center">
            <Typography className="text-gray-100 italic text-center text-base font-light leading-relaxed">
              &quot;{quote}&quot;
            </Typography>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography className="!text-gray-100 text-sm">
              &copy; {CURRENT_YEAR}. All rights reserved.
            </Typography>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Typography className="!text-gray-100 hover:!text-white cursor-pointer">
                Privacy Policy
              </Typography>
              <Typography className="!text-gray-100 hover:!text-white cursor-pointer">
                Terms of Service
              </Typography>
              <Typography className="!text-gray-100 hover:!text-white cursor-pointer">
                Cookies Settings
              </Typography>
            </div>
          </div>
          <div className="text-center mt-4">
            <Typography className="!text-gray-100 text-sm">
              Crafted with 💛 by Sophia Wanjiku
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
