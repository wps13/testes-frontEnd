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
