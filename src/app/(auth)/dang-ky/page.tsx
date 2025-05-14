"use client";
import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import bcrypt from "bcryptjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const { error } = await supabase.from("users").insert({
  //     id: crypto.randomUUID(),
  //     email,
  //     password: hashedPassword,
  //   });

  //   if (error) {
  //     setError("Email đã tồn tại");
  //   } else {
  //     await signIn("credentials", { email, password, redirect: false });
  //     router.push("/");
  //   }
  // };

  // const handleGoogleSignUp = () => {
  //   signIn("google", { callbackUrl: "/" });
  // };

  return (
    <div className="container max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Đăng ký</h1>
      {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
      <form className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <Button type="submit" className="w-full">
          Đăng ký
        </Button>
      </form>
      <Button
        variant="outline"
        className="w-full mt-4"
        // onClick={handleGoogleSignUp}
      >
        Đăng ký với Google
      </Button>
      <p className="mt-4 text-center">
        Đã có tài khoản?{" "}
        <a href="/dang-nhap" className="text-blue-500">
          Đăng nhập
        </a>
      </p>
    </div>
  );
}
