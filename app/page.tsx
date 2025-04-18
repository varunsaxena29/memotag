import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeatureCard from "@/components/feature_cards";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Brain,
  UserRound,
  Heart,
  Navigation,
  Move3d,
  Lightbulb,
  Hospital,
  PersonStanding,
} from "lucide-react";
import InfiniteCarousel from "@/components/infinite_carousel";
import StatCard from "@/components/stat_card";
import { Pie_Chart } from "@/components/pie_chart";
import DementiaLineChart from "@/components/line_chart";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex relative overflow-hidden bg-gray-900 backdrop-opacity-0"
        style={{
          backgroundImage: "url(/assets/Launch.png)",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/20 to-gray-900/80 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="flex-1 px-4 md:px-6 flex flex-col justify-center items-center gap-4 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/60 text-blue-100 font-semibold text-sm mb-2 border border-blue-800/40">
            The Future of Dementia Care
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-100">
            <span className="text-blue-300">AI Driven</span> Wearables for
            <br className="hidden sm:inline" /> Proactive Caregiving
          </h1>
          <p className="max-w-2xl text-gray-200 md:text-lg mb-2">
            Empowering caregivers with real-time insights, safety alerts, and
            cognitive health tracking for loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="/waitlist">
              <Button className="flex gap-2 items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-6 py-3 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300">
                Join WaitList
              </Button>
            </Link>
          </div>
          {/* Subtle decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>
      </section>
      {/* Service Users */}
      <section className="w-full flex flex-col items-center py-16 md:py-24 gap-2 text-center">
        <div className="flex flex-col items-center gap-2 px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            <span className="inline-block text-blue-600 dark:text-blue-400">
              Trusted
            </span>{" "}
            by leading Eldercare Providers <br /> Worldwide
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            MemoTag partners with top eldercare facilities, hospitals &
            neurologists to deliver the most advanced dementia care solutions
            across the globe
          </p>
        </div>

        <InfiniteCarousel>
          <Image src="/assets/logo1.svg" fill alt="" />
          <Image src="/assets/logo2.svg" fill alt="" />
          <Image src="/assets/logo3.svg" fill alt="" />
          <Image src="/assets/logo4.svg" fill alt="" />
          <Image src="/assets/logo6.svg" fill alt="" />
        </InfiniteCarousel>
      </section>
      {/* Problem Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8 max-w-7xl">
          {/* Header section with improved responsive layout */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-16 w-full mb-12">
            <p className="md:flex-1 text-gray-600 dark:text-gray-400 md:text-start text-sm">
              Dementia is one of the fastest-growing global health challenges.
              Over 55 million people are currently living with the condition —
              and that number is expected to more than double by 2050. With one
              new case every 3 seconds, early detection and proactive care have
              never been more urgent. The chart below shows the alarming growth
              in global dementia cases over the years.
            </p>
            <h2 className="md:flex-1 text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-gray-100 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent md:text-end">
              A Global Health Crisis
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                The Rapid Rise
              </span>{" "}
              <br />
              of Dementia Worldwide
            </h2>
          </div>

          {/* Cards section with improved width control */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <Card className="h-full w-full">
                <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center">
                    <div className="h-64 aspect-square">
                      <Pie_Chart />
                    </div>
                  </div>

                  <div className="mt-4 w-full">
                    <p className="text-center text-gray-600 dark:text-gray-300">
                      Up to{" "}
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        75% of people
                      </span>{" "}
                      with dementia are undiagnosed especially in low and
                      middle-income countries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="w-full col-span-1 md:col-span-2">
              <Card className="h-full w-full">
                <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                  <div className="w-full h-64">
                    <DementiaLineChart />
                  </div>
                  <div className="mt-4 w-full">
                    <p className="text-center text-gray-600 dark:text-gray-300">
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        10 million new cases
                      </span>{" "}
                      are diagnosed each year
                      <br />
                      (That's one every ~3 seconds!)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold md:flex-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-gray-100 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
            MemoTag's{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Key Features
            </span>{" "}
            for
            <br className="hidden md:block" /> Advanced Dementia Care
          </h2>

          <p className="md:flex-1 text-gray-600 dark:text-gray-400 md:text-end text-sm">
            Explore the range of tools and technologies MemoTag offers to
            provide personalized care, safety, and support for dementia patients
            and their caregivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            heading="Reminders & Alerts"
            icon={<Bell className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/calendar.png"
                    alt="Calendar with reminders"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Keep track of daily tasks with{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    customized vocalized reminders
                  </span>{" "}
                  for medications, appointments and more.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="GPS & Geofencing"
            icon={<Navigation className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/gps.png"
                    alt="GPS tracking map"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Tracking with active{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    heatmaps
                  </span>{" "}
                  and geofencing alerts ensures{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    safety
                  </span>{" "}
                  for vulnerable dementia patients.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="3-Axis Fall Detection"
            icon={<Move3d className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/grandma.png"
                    alt="Emergency response"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    Real-time monitoring
                  </span>{" "}
                  to identify falls, monitor jerks, and analyze sleep patterns
                  to ensure patient safety. Automatic alerts to designated
                  contacts when.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="MiniCog Activated
Activities & Exercises"
            icon={<Brain className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/memory.png"
                    alt="Memory exercises"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Cognitive-level-based vocal and app-driven exercises to{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    enhance neurological health
                  </span>{" "}
                  and engagement.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="Individual-Cognitive
Stimulation Therapy"
            icon={<UserRound className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/earth.png"
                    alt="Health monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Our proprietary AI analyzes speech patterns to provide and
                  progress tracking{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    cognitive stimulation
                  </span>{" "}
                  and progress tracking.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="Caregiver Support & Advanced Tools"
            icon={<Heart className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/caregiver.png"
                    alt="Caregiver community"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Comprehensive support with to empower caregivers.{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    summarized reports, cognitive analysis, and training
                    resources
                  </span>{" "}
                  to empower caregivers.
                </p>
              </div>
            }
          />
        </div>
      </section>
      {/* Statistics */}
      <section className="py-8 md:py-12 w-full flex justify-center px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* First Stat */}
          <StatCard
            icon={<Lightbulb />}
            value={10000}
            description="Insights Collected"
          />
          {/* Second Stat */}
          <StatCard
            icon={<Hospital />}
            value={35000}
            description="Hospitals & Patient Networks"
          />

          <StatCard
            icon={<PersonStanding />}
            value={500}
            description="Lives Impacted"
          />
        </div>
      </section>
      {/* Evolving AI solutions section*/}
      <section className="py-8 md:py-12 w-full flex justify-center px-8 max-w-[1200px]">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 h-screen md:h-fit">
          <div className="flex-2 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-2 border border-blue-300 dark:border-blue-400 p-4 rounded-xl w-full bg-white dark:bg-blue-950/40 dark:backdrop-blur-sm shadow-md">
              <div className="flex flex-col w-full">
                <h1 className="text-2xl text-blue-700 dark:text-blue-400 leading-none text-wrap">
                  Evolving{" "}
                  <b className="inline-block md:block">Dementia Care </b> with
                  AI-Driven solutions
                </h1>
                <p className="text-wrap text-sm text-gray-600 dark:text-blue-300/80 hidden md:flex">
                  MemoTag integrates AI & data analytics to deliver personalized
                  care solutions, cognitive stimulation with peace of mind.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative w-[268px] h-[324px]">
                  <Image
                    src="/assets/homephone.svg"
                    fill
                    alt="MemoTag device"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-full">
            <div className="bg-blue-800 dark:bg-blue-950 p-4 text-sm flex flex-col items-center justify-center gap-3 rounded-lg border border-blue-700 dark:border-blue-800 shadow-lg">
              <div className="flex text-white text-2xl w-full justify-start font-bold pt-4 px-6">
                <h1>Features</h1>
              </div>
              <div className="text-white flex flex-col items-center justify-center px-6 py-4">
                <ol className="flex flex-col items-center justify-center gap-3">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span className="text-white dark:text-blue-100">
                      AI tracks patient behavior to predict cognitive decline,
                      enabling early intervention.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span className="text-white dark:text-blue-100">
                      AI analyzes speech patterns for personalized cognitive
                      therapy and progress tracking.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span className="text-white dark:text-blue-100">
                      Physical activity tracking helps identify future risks and
                      provides proactive care recommendations.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Caregiver Learn More section*/}
      <section
        className="py-8 md:py-12 w-full flex justify-center px-8 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/path.svg)",
        }}
      >
        <div className="flex flex-col w-full max-w-[1200px] justify-center items-center gap-4 md:h-screen">
          <h1 className="text-2xl md:text-4xl font-extrabold w-full leading-none">
            Support for care{" "}
            <span className="inline-block text-blue-600 dark:text-blue-400">
              Caregivers
            </span>{" "}
            <br /> at Every Step
          </h1>
          <div className="flex flex-col gap-4 self-end md:w-1/2">
            <div className="h-[200px] aspect-square relative">
              <Image src="/assets/caregiver_section.svg" fill alt="" />
            </div>
            <p className="text-start md:text-end w-full text-sm md:leading-none text-wrap">
              MemoTag provides caregivers with essential tools and a community
              for support, ensuring that care is seamless, informed, and
              collaborative.
            </p>
            <div className="flex flex-col md:flex-row w-full justify-around items-center gap-2">
              <Badge variant={"secondary"} className="w-full md:w-fit">
                Caregiver community Access
              </Badge>
              <Badge variant={"secondary"} className="w-full md:w-fit">
                Summarized AI Reports
              </Badge>
              <Badge variant={"secondary"} className="w-full md:w-fit">
                Expert Support &Resources
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
