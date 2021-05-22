let findTheOldest = function(people) {
    const ageOf = (person) => { return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth; }

    return people.reduce((oldest, next) =>
        ageOf(oldest) > ageOf(next) ? oldest : next
    )
}

module.exports = findTheOldest
