class Employee {
     constructor(name, title, email){
          this.name = name;
          Employee.lastId++;
          this.id = Employee.lastId;
          this.title = title;
          this.email = email;
     }

     getName(name){
          return this.name;
     }

     getId(id){
          return this.id;
     }

     getEmail(email){
          return this.email;
     }

     getTitle(title){
          return this.title;
     }
}

Employee.lastId = 0;

module.exports = Employee;