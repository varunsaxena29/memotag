import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function FeatureCard({
  heading,
  icon,
  description,
}: {
  heading: string;
  icon: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col items-start gap-2">
            {icon}
            <CardTitle>
              <h1 className="text-xl font-extrabold text-start border-b pb-2 px-2">{heading}</h1>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/mindmap">
            <Button variant={"outline"} className="rounded-full">Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
