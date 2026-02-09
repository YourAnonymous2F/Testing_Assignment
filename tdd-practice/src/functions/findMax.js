// findMax(arr) - Returns largest number

export function findMax(numbers) {
    if (!numbers.every(n => typeof n === "number")) {
    return NaN;
    }

    let highestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i]
        }
    }
    return highestNumber;
}