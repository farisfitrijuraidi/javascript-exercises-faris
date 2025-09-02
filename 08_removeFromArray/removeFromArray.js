const removeFromArray = function removeElement(arr, ...element) {
    return arr.filter(item => !element.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
