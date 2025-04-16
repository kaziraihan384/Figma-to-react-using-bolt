import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define data for client logos
const clientLogos = [
  { src: "/logo-2.svg", alt: "Logo" },
  { src: "/logo-5.svg", alt: "Logo" },
  { src: "/logo-1.svg", alt: "Logo" },
  { src: "/logo.svg", alt: "Logo" },
  { src: "/logo-3.svg", alt: "Logo" },
  { src: "/logo-4.svg", alt: "Logo" },
  { src: "/logo-1.svg", alt: "Logo" },
];

// Define data for feature cards
const featureCards = [
  {
    icon: "/icon-1.svg",
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/group-1-1.png",
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/group-2-1.png",
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-10">
{/* Hero Banner */}
      <div className="flex items-center gap-[104px] px-36 py-24 w-full bg-neutralsilver">
<div className="flex flex-col items-start gap-8 flex-1">
<div className="flex flex-col items-start gap-4 w-full">
<h1 className="font-heading-headline-1 text-neutraldgrey tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] text-[length:var(--heading-headline-1-font-size)]">
<span className="text-[#4d4d4d]">Lessons and insights </span>
<span className="text-[#4caf4f]">from 8 years</span>
</h1>
<p className="font-body-regular-body-2 text-[#717171] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)]">
Where to grow your business as a photographer: site or social media?
            </p>
</div>
<Button className="bg-brandprimary text-neutralwhite px-8 py-3.5 rounded font-body-medium-body-2">
Register
          </Button>
</div>
<div className="relative w-[391px] h-[407px]">
<div className="absolute w-[139px] h-[274px] top-[119px] left-[252px]">
<img
              className="absolute w-[109px] h-[63px] top-[211px] left-[30px]"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10-2.svg"
            />
<div className="absolute w-[126px] h-[257px] top-0 left-0">
<div className="h-[257px]">
<div className="relative w-[126px] h-[257px]">
<img
                    className="absolute w-[72px] h-40 top-[97px] left-[43px]"
                    alt="Freepik bottom"
                    src="/freepik--bottom--inject-10.png"
                  />
<div className="absolute w-[126px] h-[126px] top-0 left-0">
<div className="relative h-[126px]">
<img
                        className="absolute w-[71px] h-11 top-[33px] left-0"
                        alt="Vector"
                        src="/vector-10.svg"
                      />
<img
                        className="absolute w-[31px] h-7 top-11 left-[42px]"
                        alt="Vector"
                        src="/vector-34.svg"
                      />
<img
                        className="absolute w-2.5 h-[11px] top-[41px] left-1"
                        alt="Vector"
                        src="/vector-6.svg"
                      />
<img
                        className="absolute w-[5px] h-[7px] top-[60px] left-[38px]"
                        alt="Vector"
                        src="/vector-2.svg"
                      />
<img
                        className="absolute w-[49px] h-[66px] top-[43px] left-[60px]"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
<img
                        className="absolute w-[37px] h-[37px] top-0 left-[62px]"
                        alt="Vector"
                        src="/vector-26.svg"
                      />
<img
                        className="absolute w-[35px] h-[41px] top-2.5 left-[66px]"
                        alt="Vector"
                        src="/vector-19.svg"
                      />
<img
                        className="absolute w-3 h-2 top-[34px] left-[77px]"
                        alt="Vector"
                        src="/vector-56.svg"
                      />
<img
                        className="absolute w-[3px] h-[3px] top-[22px] left-[79px]"
                        alt="Vector"
                        src="/vector-14.svg"
                      />
<img
                        className="absolute w-[3px] h-[3px] top-[17px] left-20"
                        alt="Vector"
                        src="/vector-27.svg"
                      />
<img
                        className="absolute w-[5px] h-1 top-[30px] left-[76px]"
                        alt="Vector"
                        src="/vector-15.svg"
                      />
<img
                        className="absolute w-[3px] h-[3px] top-[31px] left-[78px]"
                        alt="Vector"
                        src="/vector-12.svg"
                      />
<img
                        className="absolute w-[3px] h-0.5 top-[17px] left-[67px]"
                        alt="Vector"
                        src="/vector-54.svg"
                      />
<img
                        className="absolute w-[3px] h-[3px] top-[21px] left-[68px]"
                        alt="Vector"
                        src="/vector-20.svg"
                      />
<img
                        className="absolute w-[5px] h-[9px] top-[21px] left-[70px]"
                        alt="Vector"
                        src="/vector-9.svg"
                      />
<img
                        className="absolute w-[52px] h-[76px] top-[46px] left-[74px]"
                        alt="Vector"
                        src="/vector-33.svg"
                      />
<img
                        className="absolute w-[7px] h-0.5 top-[89px] left-[109px]"
                        alt="Vector"
                        src="/vector-67.svg"
                      />
<img
                        className="absolute w-[23px] h-9 top-[46px] left-[99px]"
                        alt="Vector"
                        src="/vector-36.svg"
                      />
<img
                        className="absolute w-[71px] h-[27px] top-[99px] left-[21px]"
                        alt="Vector"
                        src="/vector-29.svg"
                      />
<img
                        className="absolute w-[71px] h-[27px] top-[99px] left-[21px]"
                        alt="Group"
                        src="/group-6.png"
                      />
<img
                        className="absolute w-[71px] h-[27px] top-[99px] left-[21px]"
                        alt="Group"
                        src="/group-7.png"
                      />
<img
                        className="absolute w-[71px] h-[41px] top-[84px] left-5"
                        alt="Vector"
                        src="/vector-130.svg"
                      />
<img
                        className="absolute w-[71px] h-[41px] top-[84px] left-5"
                        alt="Group"
                        src="/group-8.png"
                      />
<img
                        className="absolute w-[54px] h-[30px] top-[92px] left-[26px]"
                        alt="Vector"
                        src="/vector-24.svg"
                      />
<img
                        className="absolute w-[54px] h-[30px] top-[92px] left-[26px]"
                        alt="Group"
                        src="/group-9.png"
                      />
<img
                        className="absolute w-[19px] h-[11px] top-[93px] left-[54px]"
                        alt="Vector"
                        src="/vector-23.svg"
                      />
<img
                        className="absolute w-[19px] h-[11px] top-[94px] left-[54px]"
                        alt="Vector"
                        src="/vector-25.svg"
                      />
<img
                        className="absolute w-[19px] h-[11px] top-[94px] left-[54px]"
                        alt="Group"
                        src="/group-10.png"
                      />
<img
                        className="absolute w-[46px] h-[27px] top-[99px] left-[21px]"
                        alt="Vector"
                        src="/vector-21.svg"
                      />
<img
                        className="absolute w-[46px] h-[27px] top-[99px] left-[21px]"
                        alt="Group"
                        src="/group-11.png"
                      />
<img
                        className="absolute w-[46px] h-[27px] top-[99px] left-[21px]"
                        alt="Group"
                        src="/group-12.png"
                      />
<img
                        className="absolute w-[53px] h-14 top-[69px] left-[13px]"
                        alt="Vector"
                        src="/vector-17.svg"
                      />
<img
                        className="absolute w-[53px] h-14 top-[69px] left-[13px]"
                        alt="Group"
                        src="/group-13.png"
                      />
<img
                        className="absolute w-[52px] h-[57px] top-[68px] left-3.5"
                        alt="Vector"
                        src="/vector-16.svg"
                      />
<img
                        className="absolute w-[52px] h-[57px] top-[68px] left-3.5"
                        alt="Group"
                        src="/group-14.png"
                      />
<img
                        className="absolute w-[7px] h-[31px] top-[93px] left-[60px]"
                        alt="Vector"
                        src="/vector-22.svg"
                      />
<img
                        className="absolute w-[7px] h-[31px] top-[93px] left-[60px]"
                        alt="Vector"
                        src="/vector-22.svg"
                      />
<img
                        className="absolute w-[7px] h-[31px] top-[93px] left-[60px]"
                        alt="Vector"
                        src="/vector-22.svg"
                      />
<img
                        className="absolute w-2 h-2 top-[94px] left-[33px]"
                        alt="Vector"
                        src="/vector-70.svg"
                      />
<img
                        className="absolute w-[21px] h-[11px] top-[106px] left-[72px]"
                        alt="Vector"
                        src="/vector-40.svg"
                      />
</div>
</div>
</div>
</div>
</div>
</div>
<img
            className="absolute w-24 h-[57px] top-[350px] left-[107px]"
            alt="Freepik shadow"
            src="/freepik--shadow--inject-10-1.svg"
          />
<div className="absolute w-[239px] h-[343px] top-0 left-0">
<img
              className="absolute w-[195px] h-[113px] top-[230px] left-0"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10-4.svg"
            />
<img
              className="absolute w-[166px] h-[188px] top-[57px] left-[38px]"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10.png"
            />
<div className="absolute w-[194px] h-[269px] top-[52px] left-px bg-[url(/freepik--monitor--inject-10.png)] bg-[100%_100%]" />
<div className="absolute w-[220px] h-[287px] top-0 left-[19px]">
<div className="relative h-[287px]">
<div className="absolute w-[183px] h-[241px] top-0 left-[11px]">
<div className="relative h-[241px]">
<div className="absolute w-[183px] h-[241px] top-0 left-0">
<div className="relative h-[241px]">
<img
                          className="w-[182px] h-[238px] top-0.5 absolute left-0"
                          alt="Freepik window"
                          src="/freepik--window--inject-10.png"
                        />
<img
                          className="absolute w-[179px] h-[239px] top-0.5 left-[3px]"
                          alt="Freepik outline"
                          src="/freepik--outline--inject-10.svg"
                        />
<div className="absolute w-[183px] h-[116px] top-0 left-0 bg-[url(/vector-113.svg)] bg-[100%_100%]">
<div className="relative h-[116px] bg-[url(/vector-113.svg)] bg-[100%_100%]">
<img
                              className="absolute w-[179px] h-[114px] top-0.5 left-[3px]"
                              alt="Vector"
                              src="/vector-98.svg"
                            />
<img
                              className="absolute w-[3px] h-1.5 top-3.5 left-[163px]"
                              alt="Vector"
                              src="/vector-99.svg"
                            />
<img
                              className="absolute w-[3px] h-1.5 top-[11px] left-[169px]"
                              alt="Vector"
                              src="/vector-96.svg"
                            />
<img
                              className="absolute w-[3px] h-1.5 top-[7px] left-[175px]"
                              alt="Vector"
                              src="/vector-96.svg"
                            />
<img
                              className="absolute w-[181px] h-[105px] top-0 left-px"
                              alt="Vector"
                              src="/vector-49.svg"
                            />
<img
                              className="absolute w-[181px] h-[105px] top-0 left-px"
                              alt="Group"
                              src="/group.png"
                            />
</div>
</div>
</div>
</div>
<img
                      className="absolute w-24 h-[127px] top-[77px] left-5"
                      alt="Freepik flowchart"
                      src="/freepik--flowchart--inject-10.png"
                    />
</div>
</div>
<div className="absolute w-[89px] h-[179px] top-6 left-[131px]">
<div className="relative h-[179px]">
<div className="w-[89px] h-[179px] top-0 absolute left-0">
<div className="relative h-[179px]">
<img
                          className="absolute w-[85px] h-[177px] top-0.5 left-1"
                          alt="Vector"
                          src="/vector-107.svg"
                        />
<img
                          className="absolute w-[85px] h-[177px] top-0.5 left-1"
                          alt="Vector"
                          src="/vector-5.svg"
                        />
<img
                          className="absolute w-[85px] h-[177px] top-0.5 left-1"
                          alt="Group"
                          src="/group-1.png"
                        />
<img
                          className="absolute w-[88px] h-[63px] top-0 left-0"
                          alt="Vector"
                          src="/vector-1.svg"
                        />
<img
                          className="absolute w-[85px] h-[61px] top-0.5 left-1"
                          alt="Vector"
                          src="/vector-3.svg"
                        />
<img
                          className="absolute w-[87px] h-[50px] top-0 left-px"
                          alt="Group"
                          src="/group-2.png"
                        />
<img
                          className="absolute w-[5px] h-[15px] top-12 left-0"
                          alt="Vector"
                          src="/vector.svg"
                        />
<img
                          className="absolute w-[3px] h-1.5 top-[15px] left-[69px]"
                          alt="Vector"
                          src="/vector-114.svg"
                        />
<img
                          className="absolute w-[3px] h-1.5 top-3 left-[75px]"
                          alt="Vector"
                          src="/vector-96.svg"
                        />
<img
                          className="absolute w-[3px] h-1.5 top-2 left-[81px]"
                          alt="Vector"
                          src="/vector-96.svg"
                        />
<img
                          className="absolute w-[5px] h-[118px] top-[61px] left-0"
                          alt="Vector"
                          src="/vector-132.svg"
                        />
</div>
</div>
<img
                      className="absolute w-[71px] h-[130px] top-9 left-[11px]"
                      alt="Freepik code inject"
                      src="/freepik--code--inject-10.png"
                    />
</div>
</div>
<img
                  className="absolute w-[31px] h-[55px] top-[228px] left-0"
                  alt="Freepik shadow"
                  src="/freepik--shadow--inject-10-5.svg"
                />
<img
                  className="absolute w-[23px] h-[26px] top-[158px] left-0"
                  alt="Freepik shadow"
                  src="/freepik--shadow--inject-10-6.svg"
                />
<img
                  className="absolute w-[23px] h-[26px] top-[183px] left-0"
                  alt="Freepik shadow"
                  src="/freepik--shadow--inject-10-7.svg"
                />
<img
                  className="absolute w-[23px] h-[26px] top-52 left-0"
                  alt="Freepik shadow"
                  src="/freepik--shadow--inject-10-3.svg"
                />
<div className="absolute w-9 h-[58px] top-[229px] left-1 bg-[url(/freepik--speach-bubble--inject-10.png)] bg-[100%_100%]">
<img
                    className="absolute w-7 h-7 top-4 left-1.5"
                    alt="Freepik inject"
                    src="/freepik----inject-10.png"
                  />
</div>
<div className="absolute w-[26px] h-7 top-[159px] left-1">
<div className="relative h-7">
<div className="absolute w-[26px] h-7 top-0 left-0">
<div className="h-7">
<div className="w-[26px] h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<div className="relative h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<img
                              className="absolute w-[26px] h-[15px] top-0 left-0"
                              alt="Vector"
                              src="/vector-7.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Vector"
                              src="/vector-121.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Group"
                              src="/group-3.png"
                            />
</div>
</div>
</div>
</div>
<img
                      className="absolute w-1 h-2 top-3.5 left-[7px]"
                      alt="Vector"
                      src="/vector-102.svg"
                    />
<img
                      className="absolute w-1 h-2 top-[11px] left-3"
                      alt="Vector"
                      src="/vector-126.svg"
                    />
<img
                      className="absolute w-1 h-2 top-2 left-[17px]"
                      alt="Vector"
                      src="/vector-118.svg"
                    />
</div>
</div>
<div className="top-[184px] absolute w-[26px] h-7 left-1">
<div className="relative h-7">
<div className="absolute w-[26px] h-7 top-0 left-0">
<div className="h-7">
<div className="w-[26px] h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<div className="relative h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<img
                              className="absolute w-[26px] h-[15px] top-0 left-0"
                              alt="Vector"
                              src="/vector-7.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Vector"
                              src="/freepik--shadow--inject-10-3.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Group"
                              src="/group-4.png"
                            />
</div>
</div>
</div>
</div>
<img
                      className="absolute w-1 h-2.5 top-3.5 left-[5px]"
                      alt="Vector"
                      src="/vector-125.svg"
                    />
<img
                      className="absolute w-1 h-[9px] top-3 left-2.5"
                      alt="Vector"
                      src="/vector-106.svg"
                    />
<img
                      className="absolute w-[5px] h-2.5 top-2 left-[15px]"
                      alt="Vector"
                      src="/vector-127.svg"
                    />
<img
                      className="absolute w-1 h-2 top-[7px] left-[21px]"
                      alt="Vector"
                      src="/vector-124.svg"
                    />
</div>
</div>
<div className="top-[209px] absolute w-[26px] h-7 left-1">
<div className="relative h-7">
<div className="absolute w-[26px] h-7 top-0 left-0">
<div className="h-7">
<div className="w-[26px] h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<div className="relative h-7 bg-[url(/vector-8.svg)] bg-[100%_100%]">
<img
                              className="absolute w-[26px] h-[15px] top-0 left-0"
                              alt="Vector"
                              src="/vector-7.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Vector"
                              src="/freepik--shadow--inject-10-6.svg"
                            />
<img
                              className="absolute w-[23px] h-[26px] top-0.5 left-[3px]"
                              alt="Group"
                              src="/group-5.png"
                            />
</div>
</div>
</div>
</div>
<img
                      className="absolute w-1 h-2 top-[13px] left-2"
                      alt="Vector"
                      src="/vector-18.svg"
                    />
<img
                      className="absolute w-[3px] h-1.5 top-3 left-[13px]"
                      alt="Vector"
                      src="/vector-11.svg"
                    />
<img
                      className="absolute w-1 h-1.5 top-2.5 left-[17px]"
                      alt="Vector"
                      src="/vector-42.svg"
                    />
</div>
</div>
</div>
</div>
</div>
<div className="absolute w-7 h-9 top-[68px] left-[258px]">
<div className="relative h-9 bg-[url(/freepik--speech-bubble--inject-10.png)] bg-[100%_100%]">
<img
                className="absolute w-3 h-[19px] top-2.5 left-[13px]"
                alt="Freepik x inject"
                src="/freepik--x--inject-10.svg"
              />
</div>
</div>
</div>
</div>
{/* Clients Section */}
      <div className="flex flex-col w-full items-center gap-4 px-36 py-0">
<div className="flex flex-col w-full max-w-[1110px] gap-2 items-center">
<h2 className="font-heading-headline-2 text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] text-center tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)]">
Our Clients
          </h2>
<p className="font-body-regular-body-2 text-[#717171] text-[length:var(--body-regular-body-2-font-size)] text-center tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)]">
We have been working with some Fortune 500+ clients
          </p>
</div>
<div className="flex justify-between items-center w-full h-[98px]">
{clientLogos.map((logo, index) => (
            <div key={index} className="relative w-12 h-12 rounded-lg">
<img
                className={`absolute ${
                  index === 0
                    ? "w-10 h-10 top-1 left-1"
                    : index === 1
                    ? "w-10 h-7 top-2.5 left-1"
                    : index === 2 || index === 6
                    ? "w-[55px] h-[30px] top-[9px] left-[-3px]"
                    : index === 3
                    ? "w-[47px] h-[29px] top-2.5 left-px"
                    : index === 4
                    ? "w-[41px] h-[27px] top-[11px] left-1"
                    : "w-[52px] h-5 top-3.5 -left-0.5"
                }`}
                alt={logo.alt}
                src={logo.src}
              />
</div>
))}
        </div>
</div>
{/* Features Section */}
      <div className="flex flex-col w-full gap-4">
<div className="flex flex-col w-full gap-2 items-center">
<h2 className="w-[542px] text-neutraldgrey text-center font-heading-headline-2 text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)]">
Manage your entire community in a single system
          </h2>
<p className="w-full font-body-regular-body-2 text-[#717171] text-[length:var(--body-regular-body-2-font-size)] text-center tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)]">
Who is Nextcent suitable for?
          </p>
</div>
<div className="flex w-full items-center justify-between px-36 py-0">
{featureCards.map((card, index) => (
            <Card key={index} className="w-[299px] bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133]">
<CardContent className="flex flex-col items-center gap-2 px-8 py-6">
<div className="flex flex-col items-center gap-4 w-full">
<div className="relative w-[65px] h-14">
<div className="absolute w-[50px] h-[49px] top-[7px] left-[15px] bg-tintt-5 rounded-[18px_5px_10px_5px] -rotate-180" />
{index === 0 ? (
                      <img
                        className="absolute w-12 h-12 top-0 left-0"
                        alt="Icon"
                        src={card.icon}
                      />
) : (
                      <div className="absolute w-12 h-12 top-0 left-0">
<img
                          className={`absolute ${
                            index === 1
                              ? "w-9 h-[30px] top-[9px] left-1.5"
                              : "w-8 h-[30px] top-[9px] left-2"
                          }`}
                          alt="Group"
                          src={card.icon}
                        />
</div>
)}
                  </div>
<h3 className="font-heading-headline-3 text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] text-center tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)]">
{card.title}
                  </h3>
</div>
<p className="font-body-regular-body-3 text-[#717171] text-[length:var(--body-regular-body-3-font-size)] text-center tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]">
{card.description}
                </p>
</CardContent>
</Card>
))}
        </div>
</div>
</section>
  );
};