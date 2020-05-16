// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
     #${aboutText}
    `;
  };
  
  
  const generateProjects = projectsArr => {
    return `
        ${projectsArr.filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
**${name}**
${languages.join(', ')}
${description}
**${link}**
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
##Project Name:${name}
##Languages used${languages.join(', ')}


##Project Description${description}


##Github [Project Link](${link})
          `;
          })
          .join('')}
       
    `;
  };
  
  
  module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
 ##${header.name}: Creator
 ##[${header.github}](https:www.github.com)
 ##About me: ${generateAbout(about)}
 ##Project info:${generateProjects(projects)}
 ###${new Date().getFullYear()} by ${header.name}
`;
  };