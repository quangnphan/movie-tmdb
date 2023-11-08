import Hero from "@/components/landing/Hero";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  
  return (
    <div className="h-full w-full">
      <Hero />
    </div>
  );
}
