export const formatData = userArray => {
  let legendArray = [];
  let graphArray = [];
  userArray.forEach(user => {
    legendArray.push(`${user.name} ${user.lastName}`);
    graphArray.push({
      name: `${user.name} ${user.lastName}`,
      value: user.value
    });
  });
  return [legendArray, graphArray];
};

export const formatMoneyString = value => `R$ ${value}`;

export const formatHourString = value => `${value}:00`;

export const formatPercentageString = value => `${value}%`;

export const complementaryHour = value => 24 - value;

export const complementaryPercentage = value =>
  value < 100 ? 100 - value : value - 100;

export const complementaryMoney = value =>
  value < 1000 ? 1000 - value : value - 1000;

export const formatDataAbout = (value, type) => {
  let formatedValue, complementaryValue;

  switch (type) {
    case "time":
      formatedValue = formatHourString(value);
      complementaryValue = complementaryHour(value);
      break;
    case "money":
      formatedValue = formatMoneyString(value);
      complementaryValue = complementaryMoney(value);
      break;
    case "percentage":
      formatedValue = formatPercentageString(value);
      complementaryValue = complementaryPercentage(value);
      break;
    default:
      formatedValue = "";
      complementaryValue = "";
      break;
  }

  console.log([
    { value, name: formatedValue },
    { value: complementaryValue, name: "" }
  ]);

  return [
    { value, name: formatedValue },
    { value: complementaryValue, name: "" }
  ];
};
