import {
    createAuthClient
} from "better-auth/react";


export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,

})

export const {
    signOut,
    useSession
} = authClient;

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

export async function signIn(email: string, password: string) {
  const res = await fetch(`${BACKEND_URL}/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // if backend uses cookies
  });
  if (!res.ok) throw new Error("Sign in failed");
  return res.json();
}

export async function signUp(email: string, password: string) {
  const res = await fetch(`${BACKEND_URL}/auth/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Sign up failed");
  return res.json();
}