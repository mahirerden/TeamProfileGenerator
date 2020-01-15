const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, email, schoolName) {
        super(name, title, email)
        this.schoolName = schoolName;
    }
    getSchool(schoolName) {
        return this.schoolName;
    }
    getTitle(title) {
        return this.title;
    }
}

module.exports = Intern;