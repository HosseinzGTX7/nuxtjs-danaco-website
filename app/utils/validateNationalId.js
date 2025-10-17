// تابع اعتبارسنجی کد ملی (10 رقمی، الگوریتم استاندارد)
export function validateNationalId(nid) {
  if (!nid) return false;
  // حذف فاصله‌ها و کاراکترهای غیررقمی
  const value = String(nid).replace(/\D/g, '');

  if (!/^\d{10}$/.test(value)) return false;

  // اگر همه ارقام برابر باشند (مثل 1111111111) نامعتبر است
  const allEqual = value.split('').every(ch => ch === value[0]);
  if (allEqual) return false;

  const check = parseInt(value[9], 10);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(value[i], 10) * (10 - i);
  }
  const remainder = sum % 11;

  if (remainder < 2) {
    return check === remainder;
  } else {
    return check === 11 - remainder;
  }
}
