import {
  HomeIcon,
  SearchIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react";

export default function HomeFeatures() {
  const features = [
    {
      icon: <SearchIcon className="h-8 w-8 text-primary" />,
      title: "Tìm kiếm thông minh",
      description:
        "Hệ thống tìm kiếm nâng cao giúp bạn dễ dàng lọc bất động sản theo nhiều tiêu chí khác nhau.",
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-primary" />,
      title: "Đa dạng bất động sản",
      description:
        "Hàng ngàn bất động sản từ căn hộ, nhà phố đến biệt thự, đất nền trên khắp Việt Nam.",
    },
    {
      icon: <MessageSquareIcon className="h-8 w-8 text-primary" />,
      title: "Liên hệ trực tiếp",
      description:
        "Kết nối và trao đổi trực tiếp với chủ sở hữu thông qua hệ thống tin nhắn nhanh chóng.",
    },
    {
      icon: <MapPinIcon className="h-8 w-8 text-primary" />,
      title: "Định vị chính xác",
      description:
        "Xác định vị trí bất động sản chính xác giúp bạn dễ dàng tìm hiểu khu vực xung quanh.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: "Tin đăng chất lượng",
      description:
        "Mọi tin đăng đều được kiểm duyệt kỹ càng đảm bảo thông tin chính xác và đáng tin cậy.",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-primary" />,
      title: "Cộng đồng tin cậy",
      description:
        "Xây dựng cộng đồng người mua, bán và môi giới bất động sản uy tín trên toàn quốc.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-md"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}