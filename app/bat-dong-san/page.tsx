import PropertyList from "@/components/property/property-list";
import PropertyFilter from "@/components/property/property-filter";

export default function PropertyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Bất động sản</h1>
        <p className="text-muted-foreground">
          Khám phá danh sách bất động sản đang được rao bán và cho thuê trên NhàVN
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <PropertyFilter />
        </div>
        
        <div className="lg:col-span-3">
          <PropertyList />
        </div>
      </div>
    </div>
  );
}