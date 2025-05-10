import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSearch from "@/components/home/hero-search";
import PropertyFeatured from "@/components/home/property-featured";
import HomeFeatures from "@/components/home/home-features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Tìm ngôi nhà mơ ước của bạn
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Khám phá hàng ngàn bất động sản trên khắp Việt Nam với đầy đủ thông tin 
              chi tiết và cập nhật liên tục.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tim-kiem">
                <Button size="lg" variant="secondary">
                  Tìm kiếm nhà
                </Button>
              </Link>
              <Link href="/dang-tin">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Đăng tin bất động sản
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto -mt-12 relative z-20">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Bất động sản nổi bật</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Khám phá những bất động sản hấp dẫn và đáng chú ý nhất trên NhàVN
            </p>
          </div>
          <PropertyFeatured />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Tại sao chọn NhàVN?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp nền tảng hiện đại và đáng tin cậy để kết nối người mua và chủ sở hữu bất động sản
            </p>
          </div>
          <HomeFeatures />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn muốn bán hoặc cho thuê bất động sản?</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Đăng tin ngay hôm nay để tiếp cận hàng ngàn người mua và người thuê tiềm năng.
          </p>
          <Link href="/dang-tin">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Đăng tin ngay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}