"use client";
import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaSkype,
  FaTelegramPlane,
} from "react-icons/fa";
import { useState } from "react";
import Footer from "../footer";

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    url: "https://api.whatsapp.com/send?phone=23777147924",
    color: "text-green-500 hover:text-green-400",
    ariaLabel: "WhatsApp",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/tresor-ngahame-0004a5287/",
    color: "text-blue-700 hover:text-blue-500",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <FaSkype />,
    url: "https://join.skype.com/invite/NCSmqwtf73CH",
    color: "text-blue-500 hover:text-blue-400",
    ariaLabel: "Skype",
  },
  {
    icon: <FaTelegramPlane />,
    url: "https://t.me/muntini1",
    color: "text-blue-400 hover:text-blue-300",
    ariaLabel: "Telegram",
  },
];

const Contact = () => {
  const [iconAnimating, setIconAnimating] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      <div
        onMouseEnter={() => setIconAnimating(false)}
        className="flex flex-col items-center space-y-4"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            style={{
              animation: `${
                iconAnimating ? "animate-icons 2s ease-in-out infinite" : ""
              }`,
              animationDelay: `${iconAnimating ? `calc(0.1s * ${index})` : ""}`,
              animationPlayState: "running",
            }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} flex items-center transition duration-200`}
            aria-label={link.ariaLabel}
          >
            <span className="text-4xl">{link.icon}</span>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
