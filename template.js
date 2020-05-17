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


## Project Description: ${description}


## Github [Project Link](${link})
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
 ## Lead name: ${header.name}
 ## Github ID: ${header.github}
 ## Thesis Statement: ${about}
 ## Breakdown:${generateProjects(projects)}
 ### ${new Date().getFullYear()} by ${header.name}
`;
  };