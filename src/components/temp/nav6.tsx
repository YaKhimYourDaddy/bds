// "use client";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Mail, Menu, SendHorizonal, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const menuItems = [
//   { name: "Tìm kiếm", href: "/tim-kiem" },
//   { name: "Tin bạn đăng", href: "/tin-ban-dang" },
//   { name: "Tin đã lưu", href: "/tin-da-luu" },
//   { name: "Tin nhắn", href: "/tin-nhan" },
// ];

// export default function Nav6() {
//   const [menuState, setMenuState] = useState(false);
//   return (
//     <>
//       <header>
//         <nav
//           data-state={menuState && "active"}
//           className="fixed z-20 w-full border-b-6 border-dashed bg-background"
//         >
//           <div className="m-auto px-6">
//             <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
//               <div className="flex w-full justify-between lg:w-auto">
//                 <Link
//                   href="/"
//                   aria-label="home"
//                   className="flex items-center space-x-2"
//                 >
//                   BatDongSanVN
//                 </Link>

//                 <button
//                   onClick={() => setMenuState(!menuState)}
//                   aria-label={menuState == true ? "Close Menu" : "Open Menu"}
//                   className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
//                 >
//                   {menuState ? (
//                     <X className="m-auto size-6" />
//                   ) : (
//                     <Menu className="m-auto size-6" />
//                   )}
//                 </button>
//               </div>

//               <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
//                 <div className="lg:pr-4">
//                   <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
//                     {menuItems.map((item, index) => (
//                       <li key={index}>
//                         <Link
//                           href={item.href}
//                           className="text-muted-foreground hover:text-accent-foreground block duration-150"
//                         >
//                           <span>{item.name}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
//                   <Button asChild variant="outline" size="sm">
//                     <Link href="/auth/login">
//                       <span>Đăng nhập</span>
//                     </Link>
//                   </Button>
//                   <Button asChild size="sm">
//                     <Link href="/auth/sign-up">
//                       <span>Đăng ký</span>
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main>
//         <section className="overflow-hidden">
//           <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
//             <div className="lg:flex lg:items-center lg:gap-12">
//               <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
//                 <Link
//                   href="/"
//                   className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
//                 >
//                   <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
//                     New
//                   </span>
//                   <span className="text-sm">Introduction Tailark Html</span>
//                   <span className="bg-(--color-border) block h-4 w-px"></span>

//                   <ArrowRight className="size-4" />
//                 </Link>

//                 <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
//                   Production Ready Digital Marketing blocks
//                 </h1>
//                 <p className="mt-8">
//                   Error totam sit illum. Voluptas doloribus asperiores quaerat
//                   aperiam. Quidem harum omnis beatae ipsum soluta!
//                 </p>

//                 <div>
//                   <form
//                     action=""
//                     className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
//                   >
//                     <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
//                       <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

//                       <input
//                         placeholder="Your mail address"
//                         className="h-14 w-full bg-transparent pl-12 focus:outline-none"
//                         type="email"
//                       />

//                       <div className="md:pr-1.5 lg:pr-0">
//                         <Button
//                           aria-label="submit"
//                           className="rounded-(--radius)"
//                         >
//                           <span className="hidden md:block">Get Started</span>
//                           <SendHorizonal
//                             className="relative mx-auto size-5 md:hidden"
//                             strokeWidth={2}
//                           />
//                         </Button>
//                       </div>
//                     </div>
//                   </form>

//                   <ul className="list-inside list-disc space-y-2">
//                     <li>Faster</li>
//                     <li>Modern</li>
//                     <li>100% Customizable</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
//               <div className="relative">
//                 <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
//                 <Image
//                   className="hidden dark:block"
//                   src="/music.png"
//                   alt="app illustration"
//                   width={2796}
//                   height={2008}
//                 />
//                 <Image
//                   className="dark:hidden"
//                   src="/music-light.png"
//                   alt="app illustration"
//                   width={2796}
//                   height={2008}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
