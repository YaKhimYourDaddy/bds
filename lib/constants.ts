export const propertyTypes = [
  { value: "can-ho-chung-cu", label: "Căn hộ chung cư" },
  {
    value: "chung-cu-mini-can-ho-dich-vu",
    label: "Chung cư mini, căn hộ dịch vụ",
  },
  { value: "nha-rieng", label: "Nhà riêng" },
  { value: "nha-biet-thu-lien-ke", label: "Nhà biệt thự, liền kề" },
  { value: "nha-mat-pho", label: "Nhà mặt phố" },
  {
    value: "shophouse-nha-pho-thuong-mai",
    label: "Shophouse, nhà phố thương mại",
  },
  { value: "dat-nen-du-an", label: "Đất nền dự án" },
  { value: "dat", label: "Đất" },
  { value: "trang-trai-khu-nghi-duong", label: "Trang trại, khu nghỉ dưỡng" },
  { value: "condotel", label: "Condotel" },
  { value: "kho-nha-xuong", label: "Kho, nhà xưởng" },
  { value: "cua-hang-kiot", label: "Cửa hàng, kiot" },
  { value: "nha-tro-phong-tro", label: "Nhà trọ, phòng trọ" },
  { value: "van-phong", label: "Văn phòng" },
  { value: "loai-bat-dong-san-khac", label: "Loại bất động sản khác" },
];

export const projectTypes = [
  { value: "can-ho-chung-cu", label: "Căn hộ chung cư" },
  { value: "cao-oc-van-phong", label: "Cao ốc văn phòng" },
  { value: "trung-tam-thuong-mai", label: "Trung tâm thương mại" },
  { value: "khu-do-thi-moi", label: "Khu đô thị mới" },
  { value: "khu-phuc-hop", label: "Khu phức hợp" },
  { value: "nha-o-xa-hoi", label: "Nhà ở xã hội" },
  { value: "khu-nghi-duong-sinh-thai", label: "Khu nghỉ dưỡng, sinh thái" },
  { value: "khu-cong-nghiep", label: "Khu công nghiệp" },
  { value: "biet-thu-lien-ke", label: "Biệt thự liền kề" },
  { value: "shophouse", label: "Shophouse" },
  { value: "nha-mat-pho", label: "Nhà mặt phố" },
  { value: "loai-du-an-khac", label: "Loại dự án khác" },
];

export const priceRangesSets = {
  buying: [
    { value: "tat-ca", label: "Tất cả" },
    { value: "thoa-thuan", label: "Thỏa thuận" },
    { value: "duoi-500-trieu", label: "Dưới 500 triệu" },
    { value: "500-800-trieu", label: "500 - 800 triệu" },
    { value: "800-trieu-1-ty", label: "800 triệu - 1 tỷ" },
    { value: "1-2-ty", label: "1 - 2 tỷ" },
    { value: "2-3-ty", label: "2 - 3 tỷ" },
    { value: "3-4-ty", label: "3 - 4 tỷ" },
    { value: "4-5-ty", label: "4 - 5 tỷ" },
    { value: "5-7-ty", label: "5 - 7 tỷ" },
    { value: "7-10-ty", label: "7 - 10 tỷ" },
    { value: "10-20-ty", label: "10 - 20 tỷ" },
    { value: "20-30-ty", label: "20 - 30 tỷ" },
    { value: "30-50-ty", label: "30 - 50 tỷ" },
    { value: "tren-50-ty", label: "Trên 50 tỷ" },
  ],
  renting: [
    { value: "tat-ca", label: "Tất cả" },
    { value: "thoa-thuan", label: "Thỏa thuận" },
    { value: "duoi-1-trieu", label: "Dưới 1 triệu" },
    { value: "1-3-trieu", label: "1 - 3 triệu" },
    { value: "3-5-trieu", label: "3 - 5 triệu" },
    { value: "5-10-trieu", label: "5 - 10 triệu" },
    { value: "10-40-trieu", label: "10 - 40 triệu" },
    { value: "40-70-trieu", label: "40 - 70 triệu" },
    { value: "70-100-trieu", label: "70 - 100 triệu" },
    { value: "tren-100-trieu", label: "Trên 100 triệu" },
  ],
  project: [
    { value: "tat-ca", label: "Tất cả" },
    { value: "thoa-thuan", label: "Thỏa thuận" },
    { value: "duoi-5-trieu", label: "Dưới 5 triệu" },
    { value: "5-30-trieu", label: "5 - 30 triệu" },
    { value: "10-20-trieu", label: "10 - 20 triệu" },
    { value: "20-35-trieu", label: "20 - 35 triệu" },
    { value: "50-80-trieu", label: "50 - 80 triệu" },
    { value: "tren-80-trieu", label: "Trên 80 triệu" },
  ],
};

export const areaRanges = [
  { value: "tat-ca", label: "Tất cả" },
  { value: "duoi-30", label: "Dưới 30 m²" },
  { value: "30-50", label: "30 - 50 m²" },
  { value: "50-70", label: "50 - 70 m²" },
  { value: "70-100", label: "70 - 100 m²" },
  { value: "100-150", label: "100 - 150 m²" },
  { value: "150-200", label: "150 - 200 m²" },
  { value: "200-300", label: "200 - 300 m²" },
  { value: "300-500", label: "300 - 500 m²" },
  { value: "tren-500", label: "Trên 500 m²" },
];

export const filters = [
  {
    label: "Nhà đất bán",
    value: "ban",
    types: { label: "Loại nhà đất", values: propertyTypes },
    pricelabels: {
      label: "Mức giá",
      values: priceRangesSets.buying,
    },
    areaRanges: {
      label: "Diện tích",
      values: areaRanges,
    },
  },
  {
    label: "Nhà đất cho thuê",
    value: "thue",
    types: { label: "Loại nhà đất", values: propertyTypes },
    pricelabels: {
      label: "Mức giá",
      values: priceRangesSets.renting,
    },
    areaRanges: {
      label: "Diện tích",
      values: areaRanges,
    },
  },
  {
    label: "Dự án bất động sản",
    value: "du-an",
    types: { label: "Loại dự án", values: projectTypes },
    pricelabels: {
      label: "Mức giá",
      values: priceRangesSets.project,
    },
    areaRanges: {
      label: "Diện tích",
      values: areaRanges,
    },
    status: {
      label: "Trạng thái",
      values: [
        { value: "tat-ca", label: "Tất cả" },
        { value: "sap-mo-ban", label: "Sắp mở bán" },
        { value: "dang-mo-ban", label: "Đang mở bán" },
        { value: "da-ban-giao", label: "Đã bàn giao" },
      ],
    },
  },
];

// Cities for location filters
export const cities = [
  { value: "ha-noi", label: "Hà Nội" },
  { value: "ho-chi-minh", label: "TP.HCM" },
  { value: "da-nang", label: "Đà Nẵng" },
  { value: "hai-phong", label: "Hải Phòng" },
  { value: "can-tho", label: "Cần Thơ" },
  { value: "binh-duong", label: "Bình Dương" },
  { value: "dong-nai", label: "Đồng Nai" },
  { value: "nha-trang", label: "Nha Trang" },
  { value: "vung-tau", label: "Vũng Tàu" },
  { value: "bac-ninh", label: "Bắc Ninh" },
];