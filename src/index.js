module.exports = function toReadable(number) {
    let ones = new Array(
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    );
    let tens = new Array(
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    );
    let hundred = "hundred";
    let result = "";
    let string = number.toString();
    let numberOfHundreds = Math.floor(number / 100);
    let numberOfTens = Math.floor(number / 10) % 10;
    let numberOfOnes = number - numberOfHundreds * 100 - numberOfTens * 10;

    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        result = ones[number];
        return result;
    }
    if (number % 10 === 0 && number < 100) {
        result = tens[number / 10 - 2];
        return result;
    }
    if (number % 10 !== 0 && number < 100) {
        result = tens[Math.floor(number / 10) - 2] + " " + ones[number % 10];
        return result;
    }
    if (number % 100 === 0 && number >= 100) {
        result = ones[number / 100] + " " + hundred;
        return result;
    }
    if (numberOfTens === 0 && number > 100) {
        result =
            ones[numberOfHundreds] + " " + hundred + " " + ones[numberOfOnes];
        return result;
    }

    if (numberOfTens === 0 && numberOfOnes === 0) {
        result = ones[numberOfHundreds] + " " + hundred;
        return result;
    }

    if (
        numberOfTens !== 0 &&
        numberOfTens >= 2 &&
        number > 100 &&
        numberOfOnes === 0
    ) {
        result =
            ones[numberOfHundreds] +
            " " +
            hundred +
            " " +
            tens[numberOfTens - 2];
        return result;
    }

    if (numberOfTens !== 0 && numberOfTens >= 2 && number > 100) {
        result =
            ones[numberOfHundreds] +
            " " +
            hundred +
            " " +
            tens[numberOfTens - 2] +
            " " +
            ones[numberOfOnes];
        return result;
    }

    if (numberOfTens !== 0 && numberOfTens < 2 && number > 100) {
        numberOfOnes = 10 + numberOfOnes;
        result =
            ones[numberOfHundreds] + " " + hundred + " " + ones[numberOfOnes];
        return result;
    }
};
