"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import api from '@/api/ApiInstance';

export default function SignInForm({ setActiveForm }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const access = localStorage.getItem("access");
    if (access) {
      toast.info("You are already logged in!", { duration: 4000 });
      return;
    }
    const formData = new FormData();
    formData.append("username", data.email)
    formData.append("password", data.password)
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(response)
      toast.success("Login successful!", { duration: 3000, position: 'top-left' });
      // router.push('/dashboard')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.detail || "Invalid credentials", { duration: 5000, position: 'top-left' });
      } else {
        toast.error("Unable to reach the server.", { duration: 8000, position: 'top-left' });
      }
    } finally {
      setIsLoading(false);
    }
  };

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
          "group/btn relative block h-12 w-full bg-primary rounded-md font-bold text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset transition-all",
          isLoading && "bg-gray-500 cursor-not-allowed"
        )}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Sign In \u2192'}
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

      <div className="my-4 h-0.5 w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />


      <button
        className={cn(
          "group/btn relative block h-12 w-full border-gray-300 border rounded-md font-bold text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset transition-all",
          isLoading && "bg-gray-500 cursor-not-allowed"
        )}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'SignIn with Google'}
        <BottomGradient />
      </button>
    </form>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-white to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-gray-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
