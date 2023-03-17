const person = {
    name: "mathew",
    age: 18,
    speak: function() {
        console.log(this.name + " is speaking ");
    },
};

person.speak();

const student = Object.create(person);

student.speak();












//Write 2 paragraphs with code examples describing *this* keyword in js - albert@eldohub
