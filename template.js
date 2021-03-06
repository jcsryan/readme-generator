  //function that applies the users answers into a MD language
  //appllies answers before the fs write file generates the page.
  //populates header-like data
  const generateProjects = projectsArr => {
    return `
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
## Project Name: ${name}
## Languages used: ${languages.join(', ')}


## Project Description:
${description}


## Github [Project Link](${link})
## [Youtube guide video](https://youtu.be/Z5fvD2HjsPU)
          `;
          })
          .join('')}
       
    `;
  };
  
  //populates the project data
  module.exports = templateData => {
    const { projects, about, ...header } = templateData;
    return `
   ${header.badge}
  * [Description](#DESCRIPTION)
  * [Youtube](#Youtube%20guide%20video)
  * [Project Description](#Project%20Description:)


 ### Contributors: ${header.name}
 ### Github ID: ${header.github}


 # **DESCRIPTION**
 ## Thesis Statement: ${about}
 ${generateProjects(projects)}
 
 
 ##### ${new Date().getFullYear()} by ${header.name}
`;
  };