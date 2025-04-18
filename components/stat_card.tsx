import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
export default function StatCard({
  value,
  description,
  icon,
}: {
  value?: number;
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full relative">
        <Card className="w-full">
          <CardHeader className="flex w-full justify-center">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full">
              {icon}
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 mb-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent">
              {value}+
            </h3>
          </CardHeader>
          <CardContent className="flex w-full justify-center">
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
