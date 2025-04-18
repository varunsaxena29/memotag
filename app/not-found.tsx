"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Error() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center px-4 py-8 gap-6 bg-background text-foreground">
      {/* Image container - sized appropriately */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg relative aspect-square">
        <Image
          src="/assets/404.png"
          fill
          alt="404 Error Illustration"
          loading="eager" 
          priority={true}
          className="object-contain dark:opacity-90"
        />
      </div>
      
      {/* Content container with better spacing */}
      <div className="flex flex-col justify-center items-center md:items-start max-w-md">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left dark:text-gray-50">
          Oops! Page Not Found
        </h1>
        <p className="text-sm mb-4 text-center md:text-left dark:text-gray-300">
          The page you're looking for doesn't seem to exist or has been moved.
        </p>
        
        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/" className="w-full sm:w-auto">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 py-6 px-8 text-lg text-white rounded-full font-bold"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}