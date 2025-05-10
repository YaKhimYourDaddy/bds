"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Tên đầy đủ phải có ít nhất 2 ký tự",
    }),
    email: z.string().email({
      message: "Email không hợp lệ",
    }),
    password: z.string().min(8, {
      message: "Mật khẩu phải có ít nhất 8 ký tự",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would call your API to register the user
    // For demonstration, let's simulate an error
    setSubmitError(null);
    // setSubmitError("Đăng ký không thành công. Vui lòng thử lại sau.");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Đăng ký tài khoản</h1>
            <p className="text-muted-foreground mt-2">
              Tạo tài khoản để bắt đầu sử dụng NhàVN
            </p>
          </div>
          
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              {submitError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên đầy đủ</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Nguyễn Văn A"
                              {...field}
                              className="pl-10"
                            />
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="email@example.com"
                              type="email"
                              {...field}
                              className="pl-10"
                            />
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="********"
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="pl-10"
                            />
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-10 w-10"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Xác nhận mật khẩu</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="********"
                              type={showConfirmPassword ? "text" : "password"}
                              {...field}
                              className="pl-10"
                            />
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-10 w-10"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Đăng ký
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="google">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Button variant="outline" className="w-full">
                  <svg
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Đăng ký với Google
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Bằng cách đăng ký, bạn đồng ý với
                  <br />
                  <Link
                    href="/dieu-khoan"
                    className="text-primary hover:underline"
                  >
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link
                    href="/chinh-sach"
                    className="text-primary hover:underline"
                  >
                    Chính sách bảo mật
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-6" />
          
          <p className="text-center text-sm">
            Đã có tài khoản?{" "}
            <Link
              href="/dang-nhap"
              className="text-primary hover:underline font-medium"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}