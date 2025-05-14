import { Tab } from "./definitions";

export const wikiTypes = [
  { value: "mua-bat-dong-san", label: "mua bất động sản" },
  { value: "ban-bat-dong-san", label: "bán bất động sản" },
  { value: "thue-bat-dong-san", label: "thuê bất động sản" },
  { value: "tai-chinh", label: "tài chính" },
  { value: "quy-hoach-phap-ly", label: "quy hoạch, pháp lý" },
  { value: "noi-that-ngoai-that", label: "nội thất, ngoại thất" },
  { value: "phong-thuy", label: "phong thủy" },
];
export const phoneBookTypes = [
  { value: "nha-moi-gioi", label: "nhà môi giới" },
  { value: "doanh-nghiep", label: "doanh nghiệp" },
];
export const propertyTypes = [
  { value: "tat-ca", label: "tất cả loại nhà đất" },
  { value: "can-ho-chung-cu", label: "căn hộ chung cư" },
  {
    value: "chung-cu-mini-can-ho-dich-vu",
    label: "chung cư mini, căn hộ dịch vụ",
  },
  { value: "nha-rieng", label: "nhà riêng" },
  { value: "nha-biet-thu-lien-ke", label: "nhà biệt thự, liền kề" },
  { value: "nha-mat-pho", label: "nhà mặt phố" },
  {
    value: "shophouse-nha-pho-thuong-mai",
    label: "shophouse, nhà phố thương mại",
  },
  { value: "dat-nen-du-an", label: "đất nền dự án" },
  { value: "dat", label: "đất" },
  { value: "trang-trai-khu-nghi-duong", label: "trang trại, khu nghỉ dưỡng" },
  { value: "condotel", label: "condotel" },
  { value: "kho-nha-xuong", label: "kho, nhà xưởng" },
  { value: "cua-hang-kiot", label: "cửa hàng, kiot" },
  { value: "nha-tro-phong-tro", label: "nhà trọ, phòng trọ" },
  { value: "van-phong", label: "văn phòng" },
  { value: "loai-bat-dong-san-khac", label: "loại bất động sản khác" },
];
export const projectTypes = [
  { value: "tat-ca", label: "tất cả loại dự án" },
  { value: "can-ho-chung-cu", label: "căn hộ chung cư" },
  { value: "cao-oc-van-phong", label: "cao ốc văn phòng" },
  { value: "trung-tam-thuong-mai", label: "trung tâm thương mại" },
  { value: "khu-do-thi-moi", label: "khu đô thị mới" },
  { value: "khu-phuc-hop", label: "khu phức hợp" },
  { value: "nha-o-xa-hoi", label: "nhà ở xã hội" },
  { value: "khu-nghi-duong-sinh-thai", label: "khu nghỉ dưỡng, sinh thái" },
  { value: "khu-cong-nghiep", label: "khu công nghiệp" },
  { value: "biet-thu-lien-ke", label: "biệt thự liền kề" },
  { value: "shophouse", label: "shophouse" },
  { value: "nha-mat-pho", label: "nhà mặt phố" },
  { value: "loai du an khac", label: "loai du an khác" },
];
export const priceRangesSets = {
  buying: [
    { value: "tat-ca", label: "tất cả mức giá" },
    { value: "thoa-thuan", label: "thỏa thuận" },
    { value: "duoi-500-trieu", label: "dưới 500 triệu" },
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
    { value: "tren-50-ty", label: "trên 50 tỷ" },
  ],
  renting: [
    { value: "tat-ca", label: "tất cả mức giá" },
    { value: "thoa-thuan", label: "giá thỏa thuận" },
    { value: "duoi-1-trieu", label: "dưới 1 triệu" },
    { value: "1-3-trieu", label: "1 - 3 triệu" },
    { value: "3-5-trieu", label: "3 - 5 triệu" },
    { value: "5-10-trieu", label: "5 - 10 triệu" },
    { value: "10-40-trieu", label: "10 - 40 triệu" },
    { value: "40-70-trieu", label: "40 - 70 triệu" },
    { value: "70-100-trieu", label: "70 - 100 triệu" },
    { value: "tren-100-trieu", label: "trên 100 triệu" },
  ],
  project: [
    { value: "tat-ca", label: "tất cả mức giá" },
    { value: "thoa-thuan", label: "thỏa thuận" },
    { value: "duoi-5-trieu", label: "dưới 5 triệu" },
    { value: "5-30-trieu", label: "5 - 30 triệu" },
    { value: "10-20-trieu", label: "10 - 20 triệu" },
    { value: "20-35-trieu", label: "20 - 35 triệu" },
    { value: "50-80-trieu", label: "50 - 80 triệu" },
    { value: "tren-80-trieu", label: "trên 80 triệu" },
  ],
};
export const areaRanges = [
  { value: "tat-ca", label: "tất cả diện tích" },
  { value: "duoi-30", label: "dưới 30 m2" },
  { value: "30-50", label: "30 - 50 m2" },
  { value: "50-70", label: "50 - 70 m2" },
  { value: "70-100", label: "70 - 100 m2" },
  { value: "100-150", label: "100 - 150 m2" },
  { value: "150-200", label: "150 - 200 m2" },
  { value: "200-300", label: "200 - 300 m2" },
  { value: "300-500", label: "200 - 300 m2" },
  { value: "tren-500", label: "trên 300 m2" },
];
export const tabs: Tab[] = [
  {
    value: "nha-dat-bat",
    label: "Nhà đất bán",
    filters: [
      { value: "loaiNhaDat", label: "Loại nhà đất", items: propertyTypes },
      { value: "mucGia", label: "Mức giá", items: priceRangesSets.buying },
      { value: "dienTich", label: "Diện tích", items: areaRanges },
    ],
  },
  {
    value: "nha-dat-cho-thue",
    label: "Nhà đất cho thuê",
    filters: [
      { value: "loaiNhaDat", label: "Loại nhà đất", items: propertyTypes },
      { value: "mucGia", label: "Mức giá", items: priceRangesSets.renting },
      { value: "dienTich", label: "Diện tích", items: areaRanges },
    ],
  },
  {
    value: "du-an-bat-dong-san",
    label: "Dự án bất động sản",
    filters: [
      { value: "loaiDuAn", label: "Loại dự án", items: projectTypes },
      { value: "mucGia", label: "Mức giá", items: priceRangesSets.project },
      {
        value: "trangThai",
        label: "Trạng thái",
        items: [
          { value: "tat-ca", label: "tất cả trạng thái" },
          { value: "sap-mo-ban", label: "sắp mở bán" },
          { value: "dang-mo-ban", label: "đang mở bán" },
          { value: "da-ban-giao", label: "đã bàn giao" },
        ],
      },
    ],
  },
];
