"use client"
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useState } from "react";
import { Loader2, Key } from "lucide-react";
import { signIn } from "@/app/auth-client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  onClick={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>

          

          <Button
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                try {
                  await signIn(email, password);
                  // Optionally redirect or show success
                } catch (err) {
                  // Optionally show error
                } finally {
                  setLoading(false);
                }
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p> Login </p>
              )}
              </Button>

          <Button
              variant="secondary"
              disabled={loading}
              className="gap-2"
              onClick={async () => {
              await signIn.passkey(
                {
                  onRequest: (ctx) => {
                    setLoading(true);
                  },
                  onResponse: (ctx) => {
                    setLoading(false);
                  },
                },
                )
              }}
            >
              <Key size={16} />
              Sign-in with Passkey
            </Button>

          <div className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col"
            )}>
              
				<Button
                  variant="outline"
                  className={cn(
                    "w-full gap-2"
                  )}
                  disabled={loading}
                  onClick={async () => {
                    await signIn.social(
                    {
                      provider: "google",
                      callbackURL: "/dashboard"
                    },
                    {
                      onRequest: (ctx) => {
                         setLoading(true);
                      },
                      onResponse: (ctx) => {
                         setLoading(false);
                      },
                     },
                    );
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262">
				<path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
				<path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
				<path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
				<path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
			</svg>
                  Sign in with Google
                </Button>
				<Button
                  variant="outline"
                  className={cn(
                    "w-full gap-2"
                  )}
                  disabled={loading}
                  onClick={async () => {
                    await signIn.social(
                    {
                      provider: "facebook",
                      callbackURL: "/dashboard"
                    },
                    {
                      onRequest: (ctx) => {
                         setLoading(true);
                      },
                      onResponse: (ctx) => {
                         setLoading(false);
                      },
                     },
                    );
                  }}
                >
                  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
					fill="currentColor"
				></path>
			</svg>
                  Sign in with Facebook
                </Button>
				<Button
                  variant="outline"
                  className={cn(
                    "w-full gap-2"
                  )}
                  disabled={loading}
                  onClick={async () => {
                    await signIn.social(
                    {
                      provider: "apple",
                      callbackURL: "/dashboard"
                    },
                    {
                      onRequest: (ctx) => {
                         setLoading(true);
                      },
                      onResponse: (ctx) => {
                         setLoading(false);
                      },
                     },
                    );
                  }}
                >
                  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
				></path>
			</svg>
                  Sign in with Apple
                </Button>
            </div>
        </div>
      </CardContent>
      
    </Card>
  );
}