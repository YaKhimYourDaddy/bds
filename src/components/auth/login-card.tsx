"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LoginPasswordForm from "@/components/auth/login-password-form";
import SocialForm from "@/components/auth/social-form";

export function LoginCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <LoginPasswordForm isLoading={isLoading} setIsLoading={setIsLoading} />
        <Separator className="my-4" />
        <SocialForm isLoading={isLoading} setIsLoading={setIsLoading} />
      </Card>
    </div>
  );
}
