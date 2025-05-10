// Mock data for properties
export const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Căn hộ cao cấp The Gold View 2 phòng ngủ, full nội thất",
    address: "Quận 4, TP. Hồ Chí Minh",
    price: 3200000000,
    area: 75,
    bedrooms: 2,
    bathrooms: 2,
    description: "Căn hộ cao cấp The Gold View, thiết kế hiện đại, đầy đủ nội thất cao cấp. Vị trí đắc địa, view đẹp, gần trung tâm thành phố.",
    type: "Căn hộ",
    transactionType: "Bán",
    postedDate: "10/04/2025",
    owner: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      email: "nguyenvana@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
    ],
    features: ["Ban công", "Hồ bơi", "Gym", "An ninh 24/7", "Parking"]
  },
  {
    id: "2",
    title: "Nhà phố mặt tiền đường Nguyễn Trãi, vị trí kinh doanh đắc địa",
    address: "Quận 1, TP. Hồ Chí Minh",
    price: 15500000000,
    area: 120,
    bedrooms: 4,
    bathrooms: 5,
    description: "Nhà phố mặt tiền đường Nguyễn Trãi, vị trí đắc địa, thích hợp kinh doanh. Cấu trúc 1 trệt 3 lầu, thiết kế hiện đại.",
    type: "Nhà phố",
    transactionType: "Bán",
    postedDate: "05/04/2025",
    owner: {
      name: "Trần Thị B",
      phone: "0912345678",
      email: "tranthib@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    features: ["Mặt tiền", "Thang máy", "Sân thượng", "Parking"]
  },
  {
    id: "3",
    title: "Cho thuê căn hộ Masteri Thảo Điền 2PN view sông",
    address: "Quận 2, TP. Hồ Chí Minh",
    price: 15000000,
    area: 68,
    bedrooms: 2,
    bathrooms: 2,
    description: "Cho thuê căn hộ Masteri Thảo Điền 2 phòng ngủ view sông, full nội thất cao cấp. Tiện ích đầy đủ, an ninh 24/7.",
    type: "Căn hộ",
    transactionType: "Cho thuê",
    postedDate: "12/04/2025",
    owner: {
      name: "Lê Văn C",
      phone: "0987654321",
      email: "levanc@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg"
    ],
    features: ["View sông", "Hồ bơi", "Gym", "An ninh 24/7", "Parking"]
  },
  {
    id: "4",
    title: "Bán đất nền dự án khu đô thị mới Long Thành, sổ đỏ riêng",
    address: "Huyện Long Thành, Đồng Nai",
    price: 2800000000,
    area: 100,
    bedrooms: 0,
    bathrooms: 0,
    description: "Bán đất nền dự án khu đô thị mới Long Thành, vị trí đắc địa, gần sân bay quốc tế Long Thành, sổ đỏ riêng từng nền.",
    type: "Đất nền",
    transactionType: "Bán",
    postedDate: "08/04/2025",
    owner: {
      name: "Phạm Văn D",
      phone: "0923456789",
      email: "phamvand@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg",
      "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg",
      "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg"
    ],
    features: ["Sổ đỏ", "Khu đô thị", "Hạ tầng hoàn thiện"]
  },
  {
    id: "5",
    title: "Biệt thự Vinhomes Riverside, đầy đủ nội thất cao cấp",
    address: "Quận Long Biên, Hà Nội",
    price: 28000000000,
    area: 300,
    bedrooms: 5,
    bathrooms: 6,
    description: "Biệt thự Vinhomes Riverside, thiết kế sang trọng, đầy đủ nội thất cao cấp. Khu vực an ninh, tiện ích đẳng cấp.",
    type: "Biệt thự",
    transactionType: "Bán",
    postedDate: "03/04/2025",
    owner: {
      name: "Hoàng Thị E",
      phone: "0934567890",
      email: "hoangthie@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
    ],
    features: ["Sân vườn", "Hồ bơi", "Gym", "An ninh 24/7", "Parking"]
  },
  {
    id: "6",
    title: "Cho thuê văn phòng hạng A tòa nhà Lim Tower",
    address: "Quận 1, TP. Hồ Chí Minh",
    price: 35000000,
    area: 120,
    bedrooms: 0,
    bathrooms: 2,
    description: "Cho thuê văn phòng hạng A tòa nhà Lim Tower, vị trí trung tâm, view đẹp, đầy đủ tiện ích.",
    type: "Văn phòng",
    transactionType: "Cho thuê",
    postedDate: "14/04/2025",
    owner: {
      name: "Vũ Văn F",
      phone: "0945678901",
      email: "vuvanf@example.com"
    },
    status: "approved",
    images: [
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
      "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg"
    ],
    features: ["Thang máy", "Lễ tân", "An ninh 24/7", "Parking"]
  }
];

// Property types
export const PROPERTY_TYPES = [
  { value: "canHo", label: "Căn hộ/Chung cư" },
  { value: "nhaPho", label: "Nhà phố" },
  { value: "bieThu", label: "Biệt thự" },
  { value: "datNen", label: "Đất nền" },
  { value: "vanPhong", label: "Văn phòng" },
  { value: "matBang", label: "Mặt bằng kinh doanh" },
  { value: "khac", label: "Khác" }
];

// Transaction types
export const TRANSACTION_TYPES = [
  { value: "ban", label: "Bán" },
  { value: "choThue", label: "Cho thuê" },
  { value: "duAn", label: "Dự án" }
];

// Vietnam provinces (partial list)
export const PROVINCES = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hải Dương",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái"
];