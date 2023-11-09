"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const Hero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center text-center text-slate-100">
      <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4">
        Unlimited movies, trailers, and more
      </h1>
      <p className="text-xl my-1 text-shadow">Watch anywhere. Anytime.</p>
      <p className="text-xl my-1 text-shadow">
        Ready to watch? Sign in to the app or signup with your email.
      </p>
      <div className="flex flex-row gap-4 justify-center items-center my-5">
        <Link href={isSignedIn ? "/movies" : "/sign-up"}>
          <Button variant="destructive" size="lg" className="font-bold">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
