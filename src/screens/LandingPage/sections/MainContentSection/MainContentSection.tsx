import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for statistics section
const statsData = [
  {
    icon: "/icon.svg",
    number: "2,245,341",
    label: "Members",
  },
  {
    icon: "/group-2-2.png",
    iconClass: "w-8 h-[30px] mx-auto my-[9px]",
    number: "46,328",
    label: "Clubs",
  },
  {
    icon: "/icon-5.svg",
    number: "828,867",
    label: "Event Bookings",
  },
  {
    icon: "/icon-2.svg",
    number: "1,926,436",
    label: "Payments",
  },
];

// Data for partner logos
const partnerLogos = [
  { src: "/logo-2.svg", bgClass: "bg-tintt-5", imgClass: "w-10 h-10" },
  {
    src: "/logo-5.svg",
    bgClass: "bg-neutralsilver",
    imgClass: "w-10 h-7 mt-2.5",
  },
  {
    src: "/logo-1.svg",
    bgClass: "bg-neutralsilver",
    imgClass: "w-[55px] h-[30px] mt-[9px]",
  },
  {
    src: "/logo.svg",
    bgClass: "bg-neutralsilver",
    imgClass: "w-[47px] h-[29px] mt-2.5",
  },
  {
    src: "/logo-3.svg",
    bgClass: "bg-neutralsilver",
    imgClass: "w-[41px] h-[27px] mt-[11px]",
  },
  {
    src: "/logo-4.svg",
    bgClass: "bg-neutralsilver",
    imgClass: "w-[52px] h-5 mt-3.5",
  },
];

// Data for blog cards
const blogCards = [
  {
    image: "/image-18.png",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "/image-19.png",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "/image-20.png",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-12 w-full">
      {/* First content section with illustration */}
      <div className="w-full overflow-x-auto">
        <div className="flex w-full items-center justify-between px-36 py-0">
          <div className="relative w-[442px] h-[433px]">
            <div className="relative h-[329px] top-[52px]">
              <div className="relative w-[442px] h-[329px]">
                <img
                  className="absolute w-[442px] h-[311px] top-0 left-0"
                  alt="Background complete"
                />
                <img
                  className="absolute w-[259px] h-[199px] top-[23px] left-[93px]"
                  alt="Background simple"
                />
                <img
                  className="absolute w-[342px] h-5 top-[309px] left-[50px]"
                  alt="Shadow"
                  src="/shadow.png"
                />
                <img
                  className="absolute w-[102px] h-[284px] top-[38px] left-[254px]"
                  alt="Character"
                  src="/character-2.png"
                />
                <img
                  className="absolute w-[123px] h-[227px] top-3.5 left-[167px]"
                  alt="Screen"
                  src="/screen.png"
                />
                <img
                  className="absolute w-[79px] h-[231px] top-[91px] left-24"
                  alt="Character"
                  src="/character-1.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[661px] items-start gap-8">
            <div className="flex flex-col w-[601px] items-start gap-4">
              <h2 className="self-stretch font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="self-stretch font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#717171] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>

            <Button className="px-8 py-3.5 bg-brandprimary rounded">
              <span className="font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-neutralwhite text-[length:var(--body-medium-body-2-font-size)] text-center tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-2-font-style)]">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <div className="flex w-full items-center justify-between px-36 py-16 bg-neutralsilver">
        <div className="flex flex-col w-[540px] items-start gap-2">
          <div className="flex flex-col items-start gap-2">
            <h2 className="w-[408px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)] text-[length:var(--heading-headline-2-font-size)]">
              <span className="text-[#4d4d4d]">Helping a local </span>
              <span className="text-[#4caf4f]">business reinvent itself</span>
            </h2>
          </div>
          <p className="self-stretch text-text-gray-900 font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-2 gap-[30px]">
            {statsData.slice(0, 2).map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                {stat.iconClass ? (
                  <div className="relative w-12 h-12">
                    <img
                      className={stat.iconClass}
                      alt="Icon"
                      src={stat.icon}
                    />
                  </div>
                ) : (
                  <img className="w-12 h-12" alt="Icon" src={stat.icon} />
                )}
                <div className="flex flex-col items-start">
                  <div className="w-[191px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                    {stat.number}
                  </div>
                  <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-[#717171] font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {statsData.slice(2, 4).map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <img className="w-12 h-12" alt="Icon" src={stat.icon} />
                <div className="flex flex-col items-start">
                  <div className="w-[191px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                    {stat.number}
                  </div>
                  <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-[#717171] font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second content section with illustration */}
      <div className="w-full overflow-x-auto">
        <div className="flex w-full items-center justify-between px-36 py-0">
          <div className="relative w-[441.53px] h-[433.4px]">
            <div className="relative w-[442px] h-[434px]">
              <img
                className="absolute w-[442px] h-[381px] top-0 left-0"
                alt="Background complete"
              />
              <img
                className="absolute w-80 h-[298px] top-[88px] left-12"
                alt="Background simple"
              />
              <img
                className="absolute w-[321px] h-px top-[433px] left-14"
                alt="Floor"
                src="/floor.png"
              />
              <img
                className="absolute w-[86px] h-[148px] top-[196px] left-[287px]"
                alt="Plant"
                src="/plant.png"
              />
              <img
                className="absolute w-[86px] h-[103px] top-[5px] left-[282px]"
                alt="Padlock"
                src="/padlock.png"
              />
              <div className="absolute w-[158px] h-[345px] top-[51px] left-[163px]">
                <div className="relative w-[156px] h-[345px]">
                  <img
                    className="absolute w-[149px] h-[304px] top-0 left-0"
                    alt="Vector"
                    src="/vector-39.svg"
                  />
                  <img
                    className="absolute w-[136px] h-[284px] top-[9px] left-[7px]"
                    alt="Vector"
                    src="/vector-41.svg"
                  />
                  <img
                    className="absolute w-20 h-6 top-[236px] left-[35px]"
                    alt="Vector"
                    src="/vector-44.svg"
                  />
                  <div className="absolute w-[99px] top-[242px] left-[57px] [font-family:'Montserrat',Helvetica] font-normal text-[#e8e8e3] text-[8.1px] tracking-[0] leading-[normal]">
                    SING UP
                  </div>
                  <img
                    className="absolute w-[27px] h-[5px] top-[84px] left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[5px] top-[84px] left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[107px] h-[18px] top-[95px] left-[25px]"
                    alt="Vector"
                    src="/vector-93.svg"
                  />
                  <img
                    className="absolute w-[49px] h-[5px] top-[101px] left-[33px]"
                    alt="Vector"
                    src="/vector-30.svg"
                  />
                  <img
                    className="absolute w-[49px] h-[5px] top-[101px] left-[33px]"
                    alt="Vector"
                    src="/vector-30.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[5px] top-32 left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[5px] top-32 left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[107px] h-[18px] top-[140px] left-6"
                    alt="Vector"
                    src="/vector-48.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[5px] top-[174px] left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[5px] top-[174px] left-[25px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[107px] h-[18px] top-[186px] left-6"
                    alt="Vector"
                    src="/vector-43.svg"
                  />
                  <img
                    className="absolute w-[49px] h-[5px] top-[147px] left-8"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[49px] h-[5px] top-[147px] left-8"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-8"
                    alt="Vector"
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute w-1 h-[5px] top-[194px] left-[39px]"
                    alt="Vector"
                    src="/vector-52.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[45px]"
                    alt="Vector"
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[52px]"
                    alt="Vector"
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[58px]"
                    alt="Vector"
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[65px]"
                    alt="Vector"
                    src="/vector-55.svg"
                  />
                  <img
                    className="absolute w-1 h-[5px] top-[194px] left-[72px]"
                    alt="Vector"
                    src="/vector-52.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[78px]"
                    alt="Vector"
                    src="/vector-55.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-[194px] left-[85px]"
                    alt="Vector"
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute w-[57px] h-[5px] top-[194px] left-8"
                    alt="Group"
                    src="/group-15.png"
                  />
                  <img
                    className="absolute w-3.5 h-[15px] top-[39px] left-[71px]"
                    alt="Vector"
                    src="/vector-92.svg"
                  />
                  <img
                    className="absolute w-3.5 h-[15px] top-[39px] left-[71px]"
                    alt="Vector"
                    src="/vector-92.svg"
                  />
                  <img
                    className="absolute w-[49px] h-1.5 top-[58px] left-[53px]"
                    alt="Vector"
                    src="/vector-58.svg"
                  />
                  <img
                    className="absolute w-[49px] h-1.5 top-[58px] left-[53px]"
                    alt="Vector"
                    src="/vector-58.svg"
                  />
                </div>
              </div>
              <img
                className="absolute w-[53px] h-[61px] top-[139px] left-[59px]"
                alt="Speech bubble"
                src="/speech-bubble.png"
              />
              <div className="absolute w-[148px] h-72 top-[145px] left-[86px]">
                <div className="relative h-72">
                  <img
                    className="absolute w-[27px] h-3.5 top-[274px] left-[34px]"
                    alt="Vector"
                    src="/vector-59.svg"
                  />
                  <img
                    className="absolute w-[26px] h-px top-[286px] left-[34px]"
                    alt="Vector"
                    src="/vector-66.svg"
                  />
                  <img
                    className="absolute w-px h-0.5 top-[283px] left-[51px]"
                    alt="Vector"
                    src="/vector-105.svg"
                  />
                  <img
                    className="absolute w-px h-0.5 top-[283px] left-[52px]"
                    alt="Vector"
                    src="/vector-73.svg"
                  />
                  <img
                    className="absolute w-[5px] h-[3px] top-[283px] left-[35px]"
                    alt="Vector"
                    src="/vector-63.svg"
                  />
                  <img
                    className="absolute w-0.5 h-px top-[283px] left-[49px]"
                    alt="Vector"
                    src="/vector-61.svg"
                  />
                  <img
                    className="absolute w-0.5 h-px top-[282px] left-[49px]"
                    alt="Vector"
                    src="/vector-128.svg"
                  />
                  <img
                    className="absolute w-[27px] h-3.5 top-[274px] left-[73px]"
                    alt="Vector"
                    src="/vector-59.svg"
                  />
                  <img
                    className="absolute w-[26px] h-px top-[286px] left-[73px]"
                    alt="Vector"
                    src="/vector-66.svg"
                  />
                  <img
                    className="absolute w-px h-0.5 top-[283px] left-[90px]"
                    alt="Vector"
                    src="/vector-105.svg"
                  />
                  <img
                    className="absolute w-px h-0.5 top-[283px] left-[91px]"
                    alt="Vector"
                    src="/vector-73.svg"
                  />
                  <img
                    className="absolute w-[5px] h-[3px] top-[283px] left-[74px]"
                    alt="Vector"
                    src="/vector-63.svg"
                  />
                  <img
                    className="absolute w-0.5 h-px top-[283px] left-[88px]"
                    alt="Vector"
                    src="/vector-61.svg"
                  />
                  <img
                    className="absolute w-0.5 h-px top-[282px] left-[88px]"
                    alt="Vector"
                    src="/vector-131.svg"
                  />
                  <img
                    className="absolute w-[148px] h-[155px] top-[7px] left-0"
                    alt="Vector"
                    src="/vector-71.svg"
                  />
                  <img
                    className="absolute w-[90px] h-[72px] top-[39px] left-4"
                    alt="Vector"
                    src="/vector-111.svg"
                  />
                  <img
                    className="absolute w-4 h-0.5 top-[89px] left-[41px]"
                    alt="Vector"
                    src="/vector-75.svg"
                  />
                  <img
                    className="absolute w-[18px] h-0.5 top-[86px] left-[42px]"
                    alt="Vector"
                    src="/vector-74.svg"
                  />
                  <img
                    className="absolute w-1 h-4 top-[69px] left-[72px]"
                    alt="Vector"
                    src="/vector-91.svg"
                  />
                  <img
                    className="absolute w-3.5 h-1 top-[88px] left-4"
                    alt="Vector"
                    src="/vector-77.svg"
                  />
                  <img
                    className="absolute w-[13px] h-[21px] top-10 left-[66px]"
                    alt="Vector"
                    src="/vector-76.svg"
                  />
                  <img
                    className="absolute w-px h-[19px] top-[42px] left-[102px]"
                    alt="Vector"
                    src="/vector-82.svg"
                  />
                  <img
                    className="absolute w-[22px] h-[39px] top-1 left-[49px]"
                    alt="Vector"
                    src="/vector-72.svg"
                  />
                  <img
                    className="absolute w-0.5 h-1 top-[21px] left-16"
                    alt="Vector"
                    src="/vector-88.svg"
                  />
                  <img
                    className="absolute w-[53px] h-[82px] top-0 left-[22px]"
                    alt="Vector"
                    src="/vector-79.svg"
                  />
                  <img
                    className="absolute w-1 h-1 top-6 left-[65px]"
                    alt="Vector"
                    src="/vector-123.svg"
                  />
                  <img
                    className="absolute w-[68px] h-[171px] top-[110px] left-[29px]"
                    alt="Vector"
                    src="/vector-95.svg"
                  />
                  <img
                    className="absolute w-[15px] h-[3px] top-[133px] left-[45px]"
                    alt="Vector"
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute w-[25px] h-px top-[272px] left-[68px]"
                    alt="Vector"
                    src="/vector-78.svg"
                  />
                  <img
                    className="absolute w-6 h-px top-[276px] left-[33px]"
                    alt="Vector"
                    src="/vector-87.svg"
                  />
                  <img
                    className="absolute w-0.5 h-[142px] top-[135px] left-[51px]"
                    alt="Vector"
                    src="/vector-94.svg"
                  />
                  <img
                    className="absolute w-5 h-[161px] top-[111px] left-[73px]"
                    alt="Vector"
                    src="/vector-85.svg"
                  />
                  <img
                    className="absolute w-[11px] h-0.5 top-[188px] left-[71px]"
                    alt="Vector"
                    src="/vector-84.svg"
                  />
                  <img
                    className="absolute w-2.5 h-px top-[190px] left-[72px]"
                    alt="Vector"
                    src="/vector-129.svg"
                  />
                  <img
                    className="absolute w-[46px] h-1.5 top-[110px] left-[31px]"
                    alt="Vector"
                    src="/vector-101.svg"
                  />
                  <img
                    className="absolute w-2 h-[33px] top-[134px] left-[46px]"
                    alt="Group"
                    src="/group-16.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[661px] items-start gap-8">
            <div className="flex flex-col w-[601px] items-start gap-4">
              <h2 className="self-stretch font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                How to design your site footer like we did
              </h2>
              <p className="self-stretch font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#717171] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>

            <Button className="px-8 py-3.5 bg-brandprimary rounded">
              <span className="font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-neutralwhite text-[length:var(--body-medium-body-2-font-size)] text-center tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-2-font-style)]">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="flex w-full items-center gap-[78px] px-36 py-8 bg-neutralsilver">
        <img
          className="relative w-[358px] h-[358px] mt-[-8.00px] mb-[-24.00px] ml-[-16.00px] object-cover"
          alt="Image"
          src="/image-9.png"
        />

        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            <p className="self-stretch font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-[#717171] text-[length:var(--body-medium-body-2-font-size)] tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] [font-style:var(--body-medium-body-2-font-style)]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <h3 className="self-stretch font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                Tim Smith
              </h3>
              <p className="self-stretch font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutrallgrey text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 self-stretch w-full">
            <div className="flex items-center gap-[41px]">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`relative w-12 h-12 ${logo.bgClass} rounded-lg`}
                >
                  <img className={logo.imgClass} alt="Logo" src={logo.src} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 p-2 flex-1">
              <div className="w-[188px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                Meet all customers
              </div>
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-[1110px] gap-2 flex-col items-center">
          <h2 className="self-stretch font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] text-center tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
            Caring is the new marketing
          </h2>
          <p className="w-[628px] text-[#717171] text-center font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&#39;s joining the
            community, read about how our community are increasing their
            membership income and lot&#39;s more.
          </p>
        </div>

        <div className="flex w-full items-center justify-between px-36 py-0">
          {blogCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-[368px] h-[286px] object-cover"
                alt="Blog image"
                src={card.image}
              />
              <Card className="flex flex-col items-center -mt-24 bg-neutralsilver rounded-lg shadow-shadow-8px">
                <CardContent className="flex flex-col items-center gap-4 p-4">
                  <h4 className="w-[285px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-[#717171] text-[length:var(--heading-headline-4-font-size)] text-center tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    {card.title}
                  </h4>
                  <div className="flex items-center justify-center gap-2 p-2 self-stretch w-full">
                    <div className="font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] whitespace-nowrap [font-style:var(--heading-headline-4-font-style)]">
                      Readmore
                    </div>
                    <ArrowRightIcon className="w-6 h-6" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
