"use client";
import { useEffect, useRef } from "react";
import AuthForm from "../../../components/AuthForm";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasShownToast = useRef(false);
  const loggedOut = searchParams.get("loggedOut");

  useEffect(() => {
    if (loggedOut && !hasShownToast.current) {
      toast.success("You have been signed out successfully.");
      hasShownToast.current = true;

      // Optional: Clean up URL after showing toast
      const params = new URLSearchParams(searchParams.toString());
      params.delete("loggedOut");
      router.replace(`/sign-in?${params.toString()}`, { scroll: false });
    }
  }, [loggedOut, searchParams, router]);
  return (
    <div>
      <AuthForm type={"sign-in"} />
    </div>
  );
};
export default Page;
