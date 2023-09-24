import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-700 text-3xl">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
