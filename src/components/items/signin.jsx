"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignInForm({ setActiveForm }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/auth/profile",
          { withCredentials: true }
        );

        if (res.data) {
          toast.info("Already logged in");
          router.push("/dashboard");
        }
      } catch (error) {
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", data.email);
    formData.append("password", data.password);

    setIsLoading(true);

    try {
      await axios.post(
        "http://127.0.0.1:8000/auth/login/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.detail || "Invalid credentials");
      } else {
        toast.error("Unable to reach the server.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-pulse text-gray-500">Checking session...</div>
      </div>
    );
  }

  return (
    <form className="my-3 mt-5" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-2">
        <Input
          id="email"
          value={data.email}
          onChange={handleChange}
          placeholder="projectmayhem@fc.com"
          type="email"
          required
        />
      </LabelInputContainer>

      <LabelInputContainer className="mb-6">
        <Input
          id="password"
          value={data.password}
          onChange={handleChange}
          placeholder="••••••••"
          type="password"
          required
        />
      </LabelInputContainer>

      <button
        className={cn(
          "group/btn relative block h-12 w-full bg-primary rounded-md font-bold text-black transition-all",
          isLoading && "bg-gray-500 cursor-not-allowed"
        )}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Sign In →"}
        <BottomGradient />
      </button>

      <p className="mt-4 text-center text-sm text-black/70">
        Don't have an account?
        <button
          type="button"
          onClick={() => setActiveForm("signup")}
          className="ml-1 font-bold text-primary hover:underline"
        >
          Sign Up
        </button>
      </p>

      <div className="my-4 h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

      <button
        type="button"
        className="group/btn relative block h-12 w-full border border-gray-300 rounded-md font-bold text-black"
      >
        Sign In with Google
        <BottomGradient />
      </button>
    </form>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-100 transition" />
    <span className="absolute inset-x-10 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 blur-sm group-hover/btn:opacity-100 transition" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);