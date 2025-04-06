"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="bg-[#FBEBE2] p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center text-center lg:text-left lg:grid-cols-2">
        
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start row-start-2 lg:row-auto">
          <Typography
            as="h1"
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hey there 👋 <br /> Welcome to my Portfolio!
          </Typography>

          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 max-w-xl"
          >
            I&apos;m Sofia Wanjiku, a passionate web developer based in Kenya.
            Here, you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>

          <div className="grid w-full place-items-center lg:place-items-start">
            <Typography className="mb-2 text-gray-900 font-medium">
              Let&apos;s Connect
            </Typography>

            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input
                color="gray"
                label="Enter your email"
                size="lg"
                crossOrigin={undefined}
              />
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  Reach Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/hero2.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
