const checkValue = (checkedValue, flagFrom, flagTo) => {
    if (checkedValue >= flagFrom && checkedValue <= flagTo) return true;
    return false;
};

const calcFromToValues = (item, flagName) => {
    if (flagName === 'from') return item === null ? 0 : item;
    return item === null ? 2147483647 : item;
};

export const filtering = (data, filteredFlag) => {
    const from = calcFromToValues(filteredFlag[0], 'from');
    const to = calcFromToValues(filteredFlag[1], 'to');
    const resultingData = [];
    for (let i = 0; i < data.length; i++) {
        const filteredItems = data[i].prices;
        const filteredPriceFrom = calcFromToValues(filteredItems[0], 'from');
        const filteredPriceTo = calcFromToValues(filteredItems[1], 'to');
        if (checkValue(filteredPriceFrom, from, to) || checkValue(filteredPriceTo, from, to)) {
            resultingData.push(data[i]);
        }
    }
    return resultingData;
};
