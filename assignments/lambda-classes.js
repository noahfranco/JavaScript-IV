// CODE here for your Lambda Classes
//Person Class
class Person {
    constructor(acc) {
        this.name = acc.name; 
        this.age = acc.age; 
        this.location = acc.location; 
    }
    speak() {
        console.log(`Hi, my name is ${this.name} and I live in ${this.location}. I am ${this.age} years old`)
    }
}; 

// Person Objects
const Noah = new Person({
    name: "Noah Franco", 
    location: "Rockingham NC", 
    age: 20
});

const Bob = new Person({
    name: "Bob The Builder", 
    location: "Sunflower Valley", 
    age: 52
}); 

const Anakin = new Person({
    name: "Anakin Skywalker", 
    location: "Tatooine", 
    age: 32
}); 


// Instructor Class
class Instructor extends Person {
    constructor(acc) {
        super(acc); 
        this.specialty = acc.specialty;
        this.favLanguage = acc.favLanguage; 
        this.catchPhrase = acc.catchPhrase; 
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`); 
    }; 
    grade(subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}


//Instructor Objects 
const Dan = new Instructor({
    name: "Dan", 
    age: Infinity, 
    location: "Denver", 
    specialty: "Relentless Debugger", 
    favLanguage: "JavaScript", 
    catchPhrase: "If you can do the thing, you can get paid to do the thing!"
}); 

const John = new Instructor({
    name: "John Dio",
    age: 99,
    location: "NYC", 
    specialty: "Not being found",
    favLanguage: "C#", 
    catchPhrase: "it's showtime"
});

const Albert = new Instructor({
    name: "Albert Einstein",
    age: 99,
    location: "Ulm Germany", 
    specialty: "Theoretical Physicist", 
    favLanguage: "Python", 
    catchPhrase: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid"
}); 

// Dan.demo("react")
// Albert.grade("C#");




// Students Class 
class Students extends Person {
    constructor(acc) {
        super(acc); 
        this.previousBackground = acc.previousBackgroundl; 
        this.className = acc.className; 
        this.favSubjects = acc.favSubjects; 
    }; 
    listsSubjects() {
        console.log()
    }
} 