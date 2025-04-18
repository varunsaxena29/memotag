import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BlogCard({
  img,
  badge,
  title,
  description,
}: {
  img: string;
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <Card className="w-[247.2px] p-2">
        <CardContent className="relative w-full aspect-video">
          <Image src={img} fill alt="" />
        </CardContent>
        <CardHeader className="w-full flex flex-col items-start p-2">
          <Badge variant={"outline"}>{badge}</Badge>
          <CardTitle className="w-full">
            <h3 className="text-sm text-wrap">{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full p-2">
          <p className="text-wrap w-full text-sm text-center">{description}</p>
        </CardDescription>
      </Card>
    </>
  );
}
