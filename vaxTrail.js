
// categorization person
function vaxTrail(infoData) {
    // categorization
    const persons = {
        "A": [],
        "B": [],
        "C": [],
        "D": []
    }
    // looping over the data
    infoData.forEach(data => {
        // check if temperature is less than 100 or not 
        if (data.temperature < 100) {
            // if age between 20-30 put into A
            if (data.age > 19 && data.age < 31) {

                persons.A.push(data)
            }
            // if age between 30-40 put into B
            else if (data.age > 30 && data.age < 41) {
                persons.B.push(data)
            }
            // if age between 20-30 put into C
            else if (data.age > 40 && data.age < 51) {
                persons.C.push(data)
            }
        }
        // if temp greater than 100
        else if (data.temperature > 100) {
            persons.D.push(data)

        }

    })
    // sorting A for even
    persons.A.sort(function (a, b) {
        return a.age % 2 - b.age % 2;
    });
    // sorting B for even

    persons.B.sort(function (a, b) {
        return a.age % 2 - b.age % 2;
    });
    // sorting C for even

    persons.C.sort(function (a, b) {
        return a.age % 2 - b.age % 2;
    });
    // sorting D for even

    persons.D.sort(function (a, b) {
        return a.age % 2 - b.age % 2;
    });
    return persons;
}

// calling function with parameter
const output = vaxTrail([{ name: 'unil', age: 21, temperature: 98 }, { name: 'suni', age: 22, temperature: 98 }, { name: 'Biplap', age: 45, temperature: 18 }, { name: 'Biplap', age: 35, temperature: 18 }, { name: 'Biplap', age: 32, temperature: 18 }, { name: 'Biplap', age: 36, temperature: 18 }, { name: 'Biplap', age: 48, temperature: 18 },
{ name: 'Biplap', age: 52, temperature: 98 }, { name: 'Biplp', age: 12, temperature: 198 }, { name: 'iplap', age: 52, temperature: 198 }, { name: 'Bipap', age: 22, temperature: 198 }])

// printing result
console.log(output);