import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const LayoutSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true },
    { name: "Service", active: false },
    { name: "Feature", active: false },
    { name: "Product", active: false },
    { name: "Testimonial", active: false },
    { name: "FAQ", active: false },
  ];

  return (
    <header className="w-full h-[84px] bg-neutralsilver flex items-center justify-between px-[105px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-[35px] h-6" alt="Icon" src="/icon-3.svg" />
        <img
          className="w-[111.49px] h-[20.66px]"
          alt="Nexcent"
          src="/nexcent.svg"
        />
      </div>

      {/* Navigation */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex items-center gap-[50px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`w-fit font-${item.active ? "body-medium-body-2" : "body-regular-body-2"} text-text-gray-900 text-[length:var(--body-${item.active ? "medium" : "regular"}-body-2-font-size)] tracking-[var(--body-${item.active ? "medium" : "regular"}-body-2-letter-spacing)] leading-[var(--body-${item.active ? "medium" : "regular"}-body-2-line-height)] [font-style:var(--body-${item.active ? "medium" : "regular"}-body-2-font-style)]`}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth buttons */}
      <div className="flex items-center gap-3.5">
        <Button
          variant="ghost"
          className="px-5 py-2.5 bg-neutralsilver rounded-md font-label-medium-label text-brandprimary"
        >
          Login
        </Button>
        <Button className="px-5 py-2.5 bg-brandprimary rounded-md font-label-medium-label text-default-white">
          Sign up
        </Button>
      </div>
    </header>
  );
};
