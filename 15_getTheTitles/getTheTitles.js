const getTheTitles = function(array) {
    return array.reduce((accumulator, current) => {
        accumulator.push(current.title);
        return accumulator;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
