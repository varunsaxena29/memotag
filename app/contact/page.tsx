"use client"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000); // Reset state after a few seconds
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "loading":
        return "Sending...";
      case "success":
        return "Success!";
      case "error":
        return "Try Again";
      default:
        return "Submit";
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center gap-2">
      <div className="flex-1 relative flex flex-col justify-center items-center gap-2">
        <Image
          src={"/assets/launch_project.png"}
          height={250}
          width={316}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-start md:justify-center items-center md:items-start gap-4">
        <Badge variant={"secondary"}>Contact Us</Badge>
        <h1 className="md:flex-1 text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-gray-100 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent text-center md:text-start">
          Try MemoTag , <br />
          <span className="text-blue-600 dark:text-blue-400">Your Personalized</span>
          <br />
          Eldercare Companion
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col gap-2"
        >
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant={"secondary"}
            disabled={status != "idle"}
          >
            {getButtonContent()}
          </Button>
        </form>
      </div>
    </div>
  );
}
