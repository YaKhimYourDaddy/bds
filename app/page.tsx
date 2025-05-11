import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/home/hero';
import FeaturedProperties from '@/components/home/featured-properties';
import PropertyCategories from '@/components/home/property-categories';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Tìm kiếm bất động sản dễ dàng
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Khám phá các bất động sản để mua, thuê hoặc đầu tư trên khắp Việt Nam
          </p>
        </div>
        
        <PropertyCategories />
      </section>
      
      <section className="w-full bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center sm:text-left">
            Bất động sản nổi bật
          </h2>
          <FeaturedProperties />
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/tim-kiem">Xem tất cả bất động sản</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h7"/><path d="M21.21 15.89A3 3 0 1 0 19 18m-4.5 4.5h9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Đăng tin dễ dàng</h3>
              <p className="text-muted-foreground">
                Đăng tin bất động sản của bạn chỉ trong vài phút với giao diện đơn giản, dễ sử dụng.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Kết nối trực tiếp</h3>
              <p className="text-muted-foreground">
                Liên hệ trực tiếp với chủ bất động sản qua tin nhắn hoặc thông tin liên lạc mà không qua trung gian.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tìm kiếm theo vị trí</h3>
              <p className="text-muted-foreground">
                Tìm bất động sản theo khu vực mong muốn với bản đồ trực quan và bộ lọc đa dạng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}