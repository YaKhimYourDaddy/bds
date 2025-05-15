"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import SignUpPasswordForm from "./sign-up-password-form";
import SocialForm from "@/components/auth/social-form";

export function SignUpCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <SignUpPasswordForm isLoading={isLoading} setIsLoading={setIsLoading} />
        <Separator className="my-4" />
        <SocialForm isLoading={isLoading} setIsLoading={setIsLoading} />
      </Card>
    </div>
  );
}
