"use client";
import { useState } from "react";
// import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   // e.preventDefault();
  //   // const result = await signIn("credentials", {
  //   //   redirect: false,
  //   //   email,
  //   //   password,
  //   // });

  //   // if (result?.error) {
  //   //   setError("Thông tin đăng nhập không chính xác");
  //   // } else {
  //   //   router.push("/");
  //   // }
  // };

  // const handleGoogleSignIn = () => {
  //   signIn("google", { callbackUrl: "/" });
  // };

  return (
    <div className="container max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>
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
          Đăng nhập
        </Button>
      </form>
      <Button
        variant="outline"
        className="w-full mt-4"
        // onClick={handleGoogleSignIn}
      >
        Đăng nhập với Google
      </Button>
      <p className="mt-4 text-center">
        Chưa có tài khoản?{" "}
        <a href="/dang-ky" className="text-blue-500">
          Đăng ký
        </a>
      </p>
    </div>
  );
}
