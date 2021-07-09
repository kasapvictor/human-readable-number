module.exports = function toReadable (number) {
    const num = number;
    let result;

    // check num is number
    if (isNaN(+num)) {
        return "Argument must be a number";
    }

    // if 0
    if (num === 0) {
        result = "zero";
    }

    const preDecimal = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    const decimal = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };

    // if less then 20
    if (num > 0 && num < 20) {
        result = preDecimal[num];
    }

    // if more then 20
    if (num >= 20 && num < 100) {
        const numStr = num.toString();

        // if second number === 0
        if (+numStr[1] === 0) {
            result = decimal[+numStr[0]];
        } else {
            result = `${decimal[numStr[0]]} ${preDecimal[+numStr[1]]}`;
        }
    }

    // if 100 and more
    if (num >= 100) {
        const numStr = num.toString();
        const firstIndex = +numStr[0];
        const middleIndex = +numStr[1];
        const lastIndex = +numStr[2];

        if (middleIndex === 0) {
            result = `${preDecimal[firstIndex]} hundred`;
            result += ` ${preDecimal[lastIndex] ? preDecimal[lastIndex] : ''}`;
        } else {
            result = `${preDecimal[firstIndex]} hundred`;
            result += ` ${toReadable(`${middleIndex}${lastIndex}`)}`;
        }
    }

    return result.trim();
}
