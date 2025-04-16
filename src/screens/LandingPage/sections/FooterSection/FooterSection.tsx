import { ArrowRightIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    "About us",
    "Blog",
    "Contact us",
    "Pricing",
    "Testimonials",
  ];

  // Support links data
  const supportLinks = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];

  // Social media icons data
  const socialIcons = [
    "/social-icons-2.svg",
    "/social-icons-3.svg",
    "/social-icons-1.svg",
    "/social-icons.svg",
  ];

  return (
    <footer className="flex flex-col items-start w-full bg-transparent">
      {/* CTA Section */}
      <div className="flex flex-col w-full items-center gap-8 px-0 py-8 bg-neutralsilver">
        <h2 className="w-[887px] font-heading-headline-1 font-[number:var(--heading-headline-1-font-weight)] text-neutralblack text-[length:var(--heading-headline-1-font-size)] text-center tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] [font-style:var(--heading-headline-1-font-style)]">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <Button className="gap-2 px-8 py-3.5 bg-brandprimary rounded">
          <span className="font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-neutralwhite text-[length:var(--body-medium-body-2-font-size)] text-center tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-2-font-style)]">
            Get a Demo
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Main Footer Section */}
      <div className="flex items-start gap-[125px] px-[165px] py-16 w-full bg-neutralblack">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-start gap-10 overflow-hidden">
          {/* Logo */}
          <div className="flex items-center gap-[9.89px]">
            <img
              className="w-[43.27px] h-[29.67px]"
              alt="Icon"
              src="/icon-3.svg"
            />
            <img
              className="w-[137.84px] h-[25.54px]"
              alt="Nexcent"
              src="/nexcent-1.svg"
            />
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2">
            <p className="w-[350px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="w-[350px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              All rights reserved
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-start gap-4">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-8 h-8"
                alt="Social icons"
                src={icon}
              />
            ))}
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="flex items-start gap-[30px]">
          {/* Company Links */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="w-40 font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
              Company
            </h4>
            <div className="flex flex-col items-start gap-3">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="w-40 font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
              Support
            </h4>
            <div className="flex flex-col items-start gap-3">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-start gap-6 overflow-hidden">
            <h4 className="w-40 font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
              Stay up to date
            </h4>
            <div className="relative w-[257px] h-10">
              <div className="relative w-[255px] h-10 rounded-lg">
                <Input
                  className="w-[255px] h-10 bg-default-white bg-opacity-20 rounded-lg"
                  placeholder="Your email address"
                />
                <SendIcon className="absolute w-[18px] h-[18px] top-[11px] right-[12px] text-text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
