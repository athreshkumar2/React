// Modern Classes In JS
class Human {
    gender = 'Female'

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Athresh';
    gender = 'male';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();