"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { PROPERTY_TYPES, TRANSACTION_TYPES, PROVINCES } from "@/lib/constants";
import { AlertCircle, Upload, MapPin } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Tiêu đề phải có ít nhất 10 ký tự",
  }),
  description: z.string().min(50, {
    message: "Mô tả phải có ít nhất 50 ký tự",
  }),
  price: z.string().min(1, {
    message: "Vui lòng nhập giá",
  }),
  area: z.string().min(1, {
    message: "Vui lòng nhập diện tích",
  }),
  type: z.string({
    required_error: "Vui lòng chọn loại bất động sản",
  }),
  transactionType: z.string({
    required_error: "Vui lòng chọn hình thức giao dịch",
  }),
  province: z.string({
    required_error: "Vui lòng chọn tỉnh/thành phố",
  }),
  district: z.string({
    required_error: "Vui lòng chọn quận/huyện",
  }),
  ward: z.string({
    required_error: "Vui lòng chọn phường/xã",
  }),
  address: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ",
  }),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
});

export default function PropertyPostPage() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      area: "",
      type: "",
      transactionType: "",
      province: "",
      district: "",
      ward: "",
      address: "",
      bedrooms: "",
      bathrooms: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitError(null);
    // Here you would call your API to submit the property
    // setSubmitError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Đăng tin bất động sản</h1>
          <p className="text-muted-foreground">
            Điền đầy đủ thông tin để đăng tin bất động sản của bạn
          </p>
        </div>

        {submitError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiêu đề</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập tiêu đề tin đăng" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mô tả chi tiết</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Mô tả chi tiết về bất động sản của bạn"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="transactionType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hình thức</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn hình thức" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TRANSACTION_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loại bất động sản</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn loại" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {PROPERTY_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Giá</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Nhập giá"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diện tích (m²)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Nhập diện tích"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="bedrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số phòng ngủ</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Nhập số phòng ngủ"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bathrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số phòng tắm</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Nhập số phòng tắm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Địa chỉ</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tỉnh/Thành phố</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn tỉnh/thành phố" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {PROVINCES.map((province) => (
                                <SelectItem key={province} value={province}>
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quận/Huyện</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={!form.watch("province")}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn quận/huyện" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="placeholder">
                                Chọn quận/huyện
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ward"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phường/Xã</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={!form.watch("district")}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn phường/xã" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="placeholder">
                                Chọn phường/xã
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Địa chỉ cụ thể</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập số nhà, tên đường"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mt-4">
                    <Button type="button" variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Chọn vị trí trên bản đồ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Hình ảnh</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden bg-muted"
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Ảnh ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => removeImage(index)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                    {images.length < 10 && (
                      <label className="relative aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 cursor-pointer flex items-center justify-center">
                        <div className="text-center">
                          <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                          <span className="text-sm text-muted-foreground mt-2 block">
                            Tải ảnh lên
                          </span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tối đa 10 ảnh, mỗi ảnh không quá 5MB
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Lưu nháp
              </Button>
              <Button type="submit">Đăng tin</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}