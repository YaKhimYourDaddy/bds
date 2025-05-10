/**
 * Format currency based on price and unit
 * @param price - The price value
 * @param unit - The price unit (VND, billion, million, per-m2)
 * @returns Formatted price string
 */
export const formatCurrency = (price: number, unit: string): string => {
  // Format the number with thousand separators
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  switch (unit) {
    case 'billion':
      return `${formatNumber(price)} tỷ`;
    case 'million':
      return `${formatNumber(price)} triệu`;
    case 'per-m2':
      return `${formatNumber(price)}/m²`;
    case 'VND':
    default:
      return `${formatNumber(price)} đ`;
  }
};

/**
 * Format area value
 * @param area - The area value in square meters
 * @returns Formatted area string
 */
export const formatArea = (area: number): string => {
  return area.toString();
};

/**
 * Format date to Vietnamese format
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

/**
 * Get relative time (e.g., "2 hours ago", "3 days ago")
 * @param dateString - ISO date string
 * @returns Relative time string in Vietnamese
 */
export const getRelativeTime = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  
  if (diffMinutes < 60) {
    return diffMinutes <= 1 ? 'Vừa xong' : `${diffMinutes} phút trước`;
  } else if (diffHours < 24) {
    return `${diffHours} giờ trước`;
  } else if (diffDays < 7) {
    return diffDays === 1 ? 'Hôm qua' : `${diffDays} ngày trước`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} tuần trước`;
  } else {
    return `${diffMonths} tháng trước`;
  }
};

/**
 * Format phone number to Vietnamese format
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format based on length
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)}.${cleaned.slice(4, 7)}.${cleaned.slice(7)}`;
  } else if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)}.${cleaned.slice(4, 7)}.${cleaned.slice(7)}`;
  }
  
  // Return original if not standard format
  return phone;
};
