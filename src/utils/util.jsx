const parseMoney = (numberValue, numDecimals = 2) => {
  return numberValue.toFixed(numDecimals).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
const Validator = (method, data) => {
  const regexAction = {
    special: /[\W]/g,
    quotes: /['''&'"']/g,
    notnumbers: /[^\d]/g,
    notletters: /[A-Za-z]/g,
    numbercomma: /[^\d,]/g,
    onlyNumbers: /\D/g,
  };

  return data.replace(regexAction[method], "");
};

export { parseMoney, Validator };
