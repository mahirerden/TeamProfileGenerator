const Employee = require('./Employee');

class Engineer extends Employee {
     constructor (name, title, email, github){
          super(name, title, email);
          this.github = github;
     }

     getGithub(github){
          return this.github;
     }

     getTitle(title){
          return this.title;
     }
}

module.exports = Engineer;