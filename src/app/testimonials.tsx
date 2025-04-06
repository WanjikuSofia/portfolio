"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24 bg-[#FBEBE2]">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Academic Timeline
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Explore the journey of my self-learning in web development and my ongoing pursuit in Information Technology.
          </Typography>
        </div>

        <Card color="transparent" shadow={false} className="py-8">
          <CardBody className="w-full flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:items-start">
            {/* Text Section */}
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Academic & Self-Learning
              </Typography>
              <Typography className="mb-3 font-normal !text-gray-500">
                I’ve had the opportunity to self-learn web development through various online certifications, focusing on front-end and back-end technologies. This hands-on approach has equipped me with a strong foundation in web development.
              </Typography>
            </div>

            {/* Image */}
            <div className="h-[21rem] w-full sm:w-[18rem] shrink-0 rounded-lg">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src="/image/timeline.jpeg"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;

