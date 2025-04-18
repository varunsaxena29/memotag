import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import QA from "@/components//footer_QA";
import Review from "@/components/footer_review";
import Image from "next/image";
import BlogCard from "@/components//blog_card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-blue-700 flex w-full justify-center">
        <div className="py-8 md:py-12 w-full flex flex-col gap-8 justify-center px-8 max-w-[1200px]">
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex-1 flex flex-col md:place-self-start justify-center items-center">
              <Badge className="md:self-start font-bold rounded-full text-white">
                FAQ'S
              </Badge>
              <h1 className="w-full text-center md:text-left text-[20px] sm:text-3xl md:text-4xl my-6 font-bold">
                Frequently Asked <br /> Questions
              </h1>
              <p className="text-wrap w-full text-center md:text-left text-sm sm:text-base md:pr-24 opacity-70 mb-4">
                Find answers to the most common questions about MemoTag and how
                we support dementia & elder caregiving.
              </p>
            </div>
            <div className="flex-2 flex flex-col w-full justify-center items-center gap-4">
              <QA
                q="How does MemoTag work?"
                a=" MemoTag combines an IoT wearable device with a mobile
                        application to monitor a patient’s physical and
                        cognitive health. It tracks sleep patterns, fall
                        detection, GPS location, and geofencing alerts while
                        offering personalized care recommendations. The platform
                        also uses AI to analyze cognitive patterns and provide
                        actionable insights for caregivers and families."
              />

              <QA
                q="How & Who can use MemoTag?"
                a=" MemoTag is designed for dementia patients, their
                        caregivers, and family members. While a cell phone is
                        required to access the MemoTag app, caregivers can
                        manage the device for patients who may not use a phone.
                        The wearable itself functions independently for features
                        like fall detection and GPS tracking."
              />
              <QA
                q="Is my data secure and private?"
                a=" Yes, MemoTag prioritizes your data privacy. All health
                        data is encrypted and stored on secure servers compliant
                        with global privacy standards such as GDPR and HIPAA.
                        Only authorized users have access to patient data."
              />
              <QA
                q="What is cognitive analysis, and how can it help?"
                a="  Cognitive analysis involves tracking memory, speech, and
                        behavior patterns to identify early signs of cognitive
                        decline. MemoTag provides tailored exercises and
                        insights based on this analysis, helping caregivers
                        proactively manage the patient’s condition and maintain
                        their mental health."
              />
              <QA
                q="How much does MemoTag cost?"
                a=" MemoTag’s wearable costs ₹10,999 + ₹4,000 annual
                        subscription for the app’s features. This averages to
                        just ₹11 per day, offering maximum care and support at
                        an affordable price."
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center">
            <div className="flex-1 flex-col justify-center items-start h-full gap-2">
              <Badge className="text-white font-bold">Testimonials</Badge>
              <h1 className="w-full text-center md:text-left text-[20px] sm:text-3xl md:text-4xl my-6 font-bold">
                Hear from Our <br /> Care Communities
              </h1>
            </div>

            <div className="flex-1 flex justify-center items-center md:items-start w-full p-6">
              <Carousel className="w-full">
                <CarouselContent className="w-full">
                  <CarouselItem className="max-h">
                    <Review
                      img="/assets/sunita.svg"
                      fallback="SS"
                      name="Sunita Sharma"
                      post="Daughter"
                      description="Caring for my father with dementia was overwhelming
                          until MemoTag. Its real-time alerts and cognitive
                          insights give me peace of mind, even when I’m not
                          around."
                      result="Result 38% Memory Improvement"
                    />
                  </CarouselItem>
                  <CarouselItem className="max-h">
                    <Review
                      img="/assets/rajeev.svg"
                      fallback="RM"
                      name="Rajeev Mehta"
                      post="Professional Caregiver"
                      description="Managing multiple patients was tough, but MemoTag’s
                          health summaries and care tips make it seamless. It’s
                          like having an extra helping hand."
                      result="Result 48% Better Cognition"
                    />
                  </CarouselItem>
                  <CarouselItem className="max-h">
                    <Review
                      img="/assets/aman.svg"
                      fallback="AV"
                      name="Aman Verma"
                      post="Son"
                      description="MemoTag’s fall detection and speech analysis tools
                          have been game-changers. My mother feels more secure,
                          and I feel less stressed."
                      result="Result 87% Falls Prevented"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Badge className="text-white font-bold m-0">Blogs</Badge>
              <h1 className="w-full text-center text-[20px] sm:text-3xl md:text-4xl font-bold">
                Latest Insights & <br /> Community Highlights
              </h1>
            </div>

            <div className="flex-1 flex justify-center items-center md:items-start w-full p-6">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-full space-x-4 justify-center px-2">
                  <BlogCard
                    img="/assets/blog1.svg"
                    badge="Educational Articles"
                    title="The Role of Technology in Dementia Care"
                    description="Provide valuable information on dementia care, cognitive
                        health, and wellness for caregivers and families."
                  />
                  <BlogCard
                    img="/assets/blog2.svg"
                    badge="Community Q&A"
                    title="How to Set Up Geofencing for Added Safety"
                    description="Feature the top questions and discussions from the MemoTag caregiver community, offering advice, tips, and shared experiences."
                  />
                  <BlogCard
                    img="/assets/blog3.svg"
                    badge="Product Announcments"
                    title="MemoTag’s Impact: Caregivers Share Their Success Stories"
                    description="Share the latest developments on MemoTag’s features, partnerships, and improvements."
                  />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>

          <div className="container w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Logo and Description Column */}
            <div className="space-y-4 flex flex-col w-full justify-center items-center">
              <Image
                src="/assets/memotag-logo.svg"
                alt="Memotag Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-sm text-gray-700 max-w-md mt-2 text-center">
                An AI-wearable with cognitive health tracking & data analysis
                tool for dementia & elder caregiving.
              </p>
            </div>

            {/* Explore Column */}
            <div className="grid grid-cols-1 gap-4 w-full">
              <div>
                <h3 className="font-medium text-base mb-3 text-center">Explore</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      About Us
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      MindMap
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      Caregivers
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      FAQ
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      Blogs
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      Testimonials
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Try Memotag & Get In Touch Column */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="font-medium text-base mb-3 text-center">Try Memotag</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-700 hover:text-primary"
                    >
                      Contact Us
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-base mb-3 text-center">Get In touch</h3>
                <ul className="space-y-2 text-center">
                  <li className="text-gray-700">contact@memotag.io</li>
                  <li className="text-gray-700">+91 8800506622</li>
                </ul>

                {/* Social Media Icons */}
                <div className="flex w-full justify-center items-center gap-4 mt-4">
                  <Button
                    size="icon"
                    variant="destructive"
                    className="rounded-full h-10 w-10"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    size="icon"
                    className="rounded-full h-10 w-10"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    className="rounded-full h-10 w-10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </footer>
    </>
  );
}
