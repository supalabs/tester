export const roundedDollar = (value: number, digits: number = 0) =>
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
  }).format(value)

export const formattedNumber = (value: number, digits: number = 0) =>
  new Intl.NumberFormat("ja-JP", {
    maximumFractionDigits: digits,
  }).format(value)
