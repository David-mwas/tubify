import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0  px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center  gap-4">
              <AgentPulse size="small" color="green" />
              <h1 className="text-3xl tracking-widest font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Tubify
              </h1>
            </Link>
          </div>
          <div className="flex items-center">
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                  variant="outline"
                  className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                >
                  Manage plan
                </Button>
              </Link>
              <div className="flex items-center p-2 w-10 h-10 rounded-full bg-blue-100  border border-blue-200 justify-center">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                >
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
