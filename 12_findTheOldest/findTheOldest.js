//using reduce method to find oldest person, comparing current oldest to all persons in array
const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {//comparing parameter oldest to current object(person)
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
};
// function to get persons age: year of death(or current year) - year of birth
const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
