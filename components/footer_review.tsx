import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function Review({
  img,
  fallback,
  name,
  post,
  description,
  result,
}: {
  img: string;
  fallback: string;
  name: string;
  post: string;
  description: string;
  result: string;
}) {
  return (
    <>
      <div className="rounded-xl flex flex-col justify-center items-start gap-2 border p-4 h-full">
        <div className="flex flex-col gap-2 border-b">
          <Avatar className="h-16 w-16">
            <AvatarImage src={img} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full md:gap-2">
            <h1 className="text-lg font-bold">{name},</h1>
            <p className="text-gray-500 text-sm font-normal">{post}</p>
          </div>
        </div>
        <div className="border-b">
          <p className="text-wrap w-full text-center md:text-left text-sm md:pr-24 opacity-70 mb-4">
            {description}
          </p>
        </div>
        <div>
          <p className="py-4 text-base sm:text-lg md:text-xl font-semibold opacity-80">
            {result}
          </p>
        </div>
      </div>
    </>
  );
}
