const fibonacci = function(sequence) {
    if (Number(sequence) === 0) {
        return 0;
    } else if (Number(sequence) === 1 || Number(sequence) === 2) {
        return 1;
    } else if (sequence < 0) {
        return "OOPS";
    } else {
        return fibonacci(Number(sequence-1)) + fibonacci(Number(sequence-2));
    }
};

// Do not edit below this line
module.exports = fibonacci;