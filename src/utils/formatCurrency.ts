const USD_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const currencyFormat = (value: number | string | null | undefined) => {
  const amount = Number(value) || 0;
  return USD_FORMATTER.format(amount);
};

export default currencyFormat;
