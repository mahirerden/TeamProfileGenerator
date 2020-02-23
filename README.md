# Team Profile Generator
This is a software engineering team generator command-line application which can be invoked with the following code. 

```sh
node index.js
```

Generated Html file can be viewed on localhost:3000

![Alt Text](./Assets/Screen.png)



The dependencies are, jest for running the provided tests, and inquirer for collecting input from the user, express and express-handlebars for generate HTML file. 

```sh
const inquirer = require('inquirer');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
```

Directory Structure of the handlebars files shown below:

```sh
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

2 directories, 3 files
```

Also user can run the tests at any time with `npm run test`


###The function for generate Html file:
```sh
function generateHTML(employee) {
     var app = express();
     app.engine('handlebars', exphbs());
     app.set('view engine', 'handlebars');

     app.get('/', function (req, res) {
          res.render('home', {
               employee: employee
          });
     });

     app.listen(3000, function () {
          console.log('express-handlebars example server listening on: 3000');
     });
}
```


###views/layouts/main.handlebars:

The main layout is the HTML page wrapper which can be reused for the different views of the app. {{{body}}} is used as a placeholder for where the main content should be rendered.

```sh
<body>

  <div class="jumbotron bg-info text-white text-center">
    <h1 class="display-4">Team Summary</h1>
  </div>

  <div class="container d-flex flex-wrap justify-content-around align-items-start">

    {{{body}}}

  </div>
  ...
```

###views/home.handlebars:

The content for the app's home view which will be rendered into the layout's {{{body}}}.

```sh
{{#each employee}}
<div class="card m-4" style="width: 18rem; height: 15rem;">
  <div class="card-header bg-primary">
    {{this.title}}
    {{this.name}}
  </div>
    <ul class="list-group list-group-flush p-1">
      <li class="list-group-item">Id : {{this.id}}</li>
      <li class="list-group-item">Email : {{this.email}}</li>
      <li class="list-group-item"> {{this.officeNo}} {{this.github}} {{this.schoolName}} </li>
    </ul>
</div>
{{/each}}
```