const palindromes = function (words) {
    const array = words.toLowerCase().split("");
    const toRemove = ["!", " ", ",", "."];

    const newArray = array.filter(item => {
        return !toRemove.includes(item);
    })

    return newArray.join("") === newArray.reverse().join("");
}
// Do not edit below this line
module.exports = palindromes;
