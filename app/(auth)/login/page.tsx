import { login } from "@/lib/auth-actions";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in-up">
        
        {/* Logo */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-5 rounded-2xl mb-4 shadow-lg">
            <Bookmark className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to access your bookmarks
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="input"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="input"
            />
          </div>

          <button formAction={login} className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-muted-foreground">
              or continue with
            </span>
          </div>
        </div>

        {/* Google Auth */}
        <AuthButton label="Continue with Google" />

        {/* Register Link */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
