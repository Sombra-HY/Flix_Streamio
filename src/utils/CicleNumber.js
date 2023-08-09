export const cycleIntervalIncrement = (
    value,
    increment,
    minValue,
    maxValue,
) => {
    const range = maxValue - minValue + 1;
    value = (value - minValue + increment) % range;
    if (value < 0) {
        value += range;
    }
    value += minValue;
    if (value > maxValue) {
        value = maxValue;
    }
    return value;
};
