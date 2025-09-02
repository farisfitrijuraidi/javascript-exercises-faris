const sumAll = function getSum(num1, num2) {
    let num = [];
    if (num2 > num1 && num1 >= 0 && num2 >= 0) {
        if ((Number.isInteger(num1)) && (Number.isInteger(num2))) {
            for (let i=num1; i <= num2; i++) {
                num.push(i);
            }
        } else {
            return 'ERROR';
        }
            return num.reduce((accumulator, current) => accumulator + current, 0);
    } else if (num1 > num2 && num1 >= 0 && num2 >= 0) {
        if ((Number.isInteger(num1)) && (Number.isInteger(num2))) {
            for (let i=num2; i <= num1; i++) {
                num.push(i);
            }
        } else {
            return 'ERROR';
        }
            return num.reduce((accumulator, current) => accumulator + current, 0);
    } else {
        return 'ERROR' ;
    }
};

// Do not edit below this line
module.exports = sumAll;
