var inquirer = require('inquirer');
var fs = require('fs');
// array of questions for user

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about your project:'
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Provide a breakdown of why you but this:',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };
  const promptProject = portfolioData => {
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    console.log(`
  =================
       READ ME
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your desc!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your link!');
            return false;
          }
        }
      }
    ]).then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
    
  
  }  
  
  
  promptUser()
    .then(promptProject)
    .then(portfolioData => {
       const pageHTML = generatePage(portfolioData);
  
      fs.writeFile('./index.html', pageHTML, err => {
        if (err) throw new Error(err);
  
       console.log('Page created! Check out index.html in this directory to see it!');
       });
    });

/*/ function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
*/

