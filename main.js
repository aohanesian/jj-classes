`use strict`;

class Human {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    #country = `Ukraine`;

    #getCountry() {
        return this.#country;
    }
}

class Student extends Human {
    constructor(name, surname, yearOfBirth) {
        super(name, surname, yearOfBirth);
        this._lessonsAmount = 10;
        this.grade = Array.from({length: this._lessonsAmount}).fill(null);
        this.attendance = Array.from({length: this._lessonsAmount = 10}).fill(null);
    }

    summary() {
        const outputGrade = this.grade.filter(item => item !== null).reduce((a, b) => (a + b)) / this.grade.filter(item => item !== null).length;
        const outputAttendance = this.attendance.filter(item => item !== null).reduce((a, b) => (a + b)) / this.grade.filter(item => item !== null).length;
        switch (true) {
            case outputGrade > 9 && outputAttendance > 0.9:
                return `Ути какой молодчинка!`;
            case outputGrade < 9 && outputAttendance < 0.9:
                return `Редиска!`;
            case outputGrade < 9 || outputAttendance < 0.9:
                return `Норм, но можно лучше!`;
        }
    }

    present() {
        if (this._lessonsAmount > 10) throw `must be below 10`;
        let emptyIndex = this.attendance.indexOf(null);
        if (emptyIndex === -1) throw `Student ${this.name} ${this.surname} visited all classes, cant check attendance`;
        this.attendance[emptyIndex] = true;
    }

    absent() {
        if (this._lessonsAmount > 10) throw `must be below 10`;
        let emptyIndex = this.attendance.indexOf(null);
        if (emptyIndex === -1) throw `No more space in ${this.attendance}`;
        this.attendance[emptyIndex] = false;
    }

    mark(number) {
        if (this._lessonsAmount > 10) throw `must be below 10`;
        if (typeof number !== `number`) throw `enter a number`;
        if (number > 10 || number < 0) throw `enter from 0 to 10`;
        let emptyIndex = this.grade.indexOf(null);
        if (emptyIndex === -1) throw `Student ${this.name} ${this.surname} visited all classes, cant give more marks`;
        this.grade[emptyIndex] = number;
    }
}

let student1 = new Student(`Artur`, `Ohanesian`, 1994);
let student2 = new Student(`Oleksandr`, `Solianyk`, 1998);
let student3 = new Student(`Darya`, `Shevchenko`, 2002);
let student4 = new Student(`Kristina`, `Tymofiichuk`, 2002);


// student1
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.mark(5);
student1.mark(5);
student1.mark(5);
student1.mark(5);
student1.mark(3);
console.log(student1.summary());
console.log(student1.getAge());
console.log(student1);

//student2
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.absent();
student2.mark(8);
student2.mark(10);
student2.mark(10);
student2.mark(10);
console.log(student2.summary());
console.log(student2.getAge());
console.log(student2);

//student3
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.mark(10);
student3.mark(10);
student3.mark(10);
student3.mark(9);
student3.mark(10);
student3.mark(10);
student3.mark(10);
console.log(student3.summary());
console.log(student3.getAge());
console.log(student3);

//student4
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();