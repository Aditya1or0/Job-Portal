import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="mt-10 sm:mt-[150px] text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 gradient-title">
          Find Your Dream Job and get
          <img
            src="./logo.png"
            className="h-12 sm:h-16 lg:h-20 inline-block ml-2 align-middle"
            alt=""
          />
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </section>

      <div className="flex flex-row gap-4 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post Jobs
          </Button>
        </Link>
      </div>

      <Carousel
        className="w-full py-8"
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem
              key={id}
              className="basis-1/3 sm:basis-1/4 lg:basis-1/6 px-2"
            >
              <img
                src={path}
                alt={name}
                className="h-8 sm:h-12 object-contain mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img
        src="./banner.jpeg"
        className="w-full rounded-lg shadow-md"
        alt="Banner"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Find a job that fits your abilities and potential.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Find the right talent and grow your business.
            </p>
          </CardContent>
        </Card>
      </section>
      {/* faq */}
      <Accordion type="single" collapsible className="w-full">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`${index + 1}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LandingPage;
