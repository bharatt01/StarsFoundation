import React from "react";
import { SocialIcon } from "react-social-icons";

export default function HeaderTop() {
  return (
    <div className="bg-white py-3 border-b border-gray-100 text-[#0757a0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* MOBILE VIEW */}
        <div className="flex flex-col md:hidden">
          {/* First line - Logo, Name, Icons */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="StarFoundation Logo"
                className="w-14 h-14 object-contain"
                draggable={false}
              />
              <h1 className="text-xl font-bold tracking-wide whitespace-nowrap">
                STARS FOUNDATION
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <SocialIcon
                url="https://instagram.com/starfoundation"
                bgColor="transparent"
                fgColor="#0757a0"
                style={{ height: 26, width: 26 }}
              />
              <SocialIcon
                url="https://facebook.com/starfoundation"
                bgColor="transparent"
                fgColor="#0757a0"
                style={{ height: 26, width: 26 }}
              />
              <SocialIcon
                url="https://youtube.com/starfoundation"
                bgColor="transparent"
                fgColor="#0757a0"
                style={{ height: 26, width: 26 }}
              />
            </div>
          </div>

          {/* Second line - Contact Info */}
          <div className="flex items-center justify-center gap-6 mt-2 text-sm font-medium flex-wrap">
            <p>
              <span>Call: </span>
              <a
                href="tel:+917678414989"
                className="underline hover:text-[#9ac531]"
              >
                +91 7678414989
              </a>
            </p>
            <p>
              <span>Email: </span>
              <a
                href="mailto:info@starfoundation.org"
                className="underline hover:text-[#9ac531]"
              >
                info@starfoundation.org
              </a>
            </p>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex flex-wrap items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src="/images/logo.png"
              alt="StarFoundation Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              draggable={false}
            />
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wide whitespace-nowrap">
              STARS FOUNDATION
            </h1>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-base sm:text-lg font-medium">
            <p>
              <span>Call: </span>
              <a
                href="tel:+917678414989"
                className="underline hover:text-[#9ac531]"
              >
                +91 7678414989
              </a>
            </p>
            <p>
              <span>Email: </span>
              <a
                href="mailto:info@starfoundation.org"
                className="underline hover:text-[#9ac531]"
              >
                info@starfoundation.org
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            <SocialIcon
              url="https://instagram.com/starfoundation"
              bgColor="transparent"
              fgColor="#0757a0"
              style={{ height: 34, width: 34 }}
            />
            <SocialIcon
              url="https://facebook.com/starfoundation"
              bgColor="transparent"
              fgColor="#0757a0"
              style={{ height: 34, width: 34 }}
            />
            <SocialIcon
              url="https://youtube.com/starfoundation"
              bgColor="transparent"
              fgColor="#0757a0"
              style={{ height: 34, width: 34 }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
