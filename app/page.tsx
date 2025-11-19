import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap, Shield, Sparkles } from "lucide-react";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-background min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-purple-300/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Next.js 16 + NextAuth
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to your Next.js appppp
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {session ? (
                <>
                  Hello, <span className="font-semibold text-primary">{session.user?.name}</span>!
                  You're successfully logged in and can access your dashboard.
                </>
              ) : (
                "Get started by creating an account or signing in to access your personalized dashboard."
              )}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {session ? (
                <>
                  <Button asChild size="lg">
                    <Link href="/dashboard">
                      Go to Dashboard
                    </Link>
                  </Button>
                  <SignOutButton variant="ghost">
                    Sign out <span aria-hidden="true">→</span>
                  </SignOutButton>
                </>
              ) : (
                <>
                  <Button asChild size="lg">
                    <Link href="/register">
                      Get started
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/login">
                      Sign in <span aria-hidden="true">→</span>
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-300/30 to-primary/30 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Badge variant="secondary" className="mb-4">
              Secure Authentication
            </Badge>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to get started
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built with Next.js 16, NextAuth, and Tailwind CSS. A modern authentication
              system ready for your next project.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Lock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Secure by default</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Password hashing with bcrypt and secure session management with NextAuth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Zap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Fast and modern</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built on Next.js 16 with the App Router for optimal performance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Protected routes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Server-side authentication checks to protect your application pages.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Sparkles className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Beautiful UI</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Polished components styled with shadcn/ui for a professional look.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
