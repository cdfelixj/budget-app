export const currencyFormatter = (amount) => {
    const formatter = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "HKD",
    })
    return formatter.format(amount);
}

