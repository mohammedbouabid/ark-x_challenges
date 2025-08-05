//Task 1
class person1 {
    #fullName;

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#fullName = firstName +" "+ lastName;
    }
    get fullName (){
        return this.#fullName;
    }
    set fullName(fullName){
        this.#fullName = fullName;
    }
}

const p = new person1("Mohammed", "BOUABID", 24);

console.log(p.fullName);

//Task 2
class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    compareAge(person){
        if(this.age < person.age){
            console.log(person.name + " is older than me.");
        }else if (this.age > person.age){
            console.log(person.name + " is younger than me.");
        }else {
            console.log(person.name + " is the same age as me.");
        }
    }
}


p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

// Task 3
function mostOccurred(arr){
    let maxCount = 0;
    let occur;
    for(let i = 0; i < arr.length; i++){
        let count = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j+1]){
                count++
            }
        }
        if(count > maxCount){
            maxCount = count;
            occur = arr[i]
        }
    }
    return occur
}

const arr = [4, 2, 2, 7, 2]

console.log(mostOccurred(arr));