import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap, Shield, Sparkles } from "lucide-react";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDuration: '7s' }}
        />
        <div
          className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '4s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2">
          <Badge variant="outline" className="text-sm py-1.5 px-4">
            <Sparkles className="w-3 h-3 mr-2" />
            Next.js 16 + NextAuth
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Build something amazing
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
          {session ? (
            <>
              Welcome back, <span className="font-semibold text-primary">{session.user?.name}</span>!
              Your dashboard is ready and waiting for you.
            </>
          ) : (
            "A beautiful, secure authentication system built with modern technologies. Start building your next big idea today."
          )}
        </p>

        {/* Feature pills */}
        {!session && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
              <Lock className="w-4 h-4 text-primary" />
              <span>Secure by default</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>Lightning fast</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>Protected routes</span>
            </div>
          </div>
        )}

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {session ? (
            <>
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Link href="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <SignOutButton variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                Sign out
              </SignOutButton>
            </>
          ) : (
            <>
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Link href="/register">
                  Get started free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Link href="/login">
                  Sign in
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Tech stack indicator */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Built with Next.js · React · TypeScript · Tailwind CSS · NextAuth
          </p>
        </div>
      </div>
    </div>
  );
}
