const findTheOldest = function(array) {
    // for (const person of array) {
    //     if (!("yearOfDeath" in person)) {
    //         person["yearOfDeath"] = new Date().getFullYear();
    //     }
    // }
    // array.forEach(object => object["Age"] = object["yearOfDeath"] - object["yearOfBirth"]);
    // array.sort((a, b) => b.Age - a.Age);
    // return array[0];
    // return array.reduce((accumulator, current) => {
    //     return accumulator["yearOfDeath"] - accumulator["yearOfBirth"] > current["yearOfDeath"] - current["yearOfBirth"] ? accumulator:current
    // });

    const getAge = function(person) {
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    }

    return array.reduce((accumulator, current) => {
        return getAge(accumulator) > getAge(current)? accumulator:current;
    })
}
// Do not edit below this line
module.exports = findTheOldest;
