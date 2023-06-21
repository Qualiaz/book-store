// Since the API has no price details,
// I will just generate random ones using the id to also make them consistent

export default function useTurnIdIntoPrice(str) {
  const removeNonNumeric = (str) => {
    return str.replace(/\D/g, "");
  };

  const formatPrice = (str) => {
    if (str.length <= 2) return ["1", "00"];
    let bani = Math.floor(parseInt(str.slice(0, 1))) + "0";
    let ron = parseInt(str.slice(-2));
    if (ron === 0) ron = 1;
    return [ron, bani];
  };

  let numericStr = removeNonNumeric(str);
  let price = formatPrice(numericStr);

  return price;
}
