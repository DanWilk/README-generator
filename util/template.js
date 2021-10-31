module.exports = templateData => {
    console.log(templateData);
    const {name, projectTitle, description, email, installation, usage, contribute, test, questions, license} = templateData;
   return`                                                      
   # Project Title {#title}                                                             ![license](https://img.shields.io/badge/License-${license}-blue)
   ${projectTitle}
   
   ## Project Description {#description}
   ${description}

   ## Installation {#install}
   In order to install this project:
   ${installation}

   ## Usage {#usage}
   ${usage}

   ## Contributing {#contribute}
   ${contribute}

   ## Tests {#tests}
   ${test}

   ## Questions {#questions}
   If you have any questions reach out to me through:
   - email: <${email}>
   - Github: [${name}](https://github.com/${name})
   
   ## Liscense {#license}
   This project is covered under ${license} license

   ### Table of Contents
   - [Project Title](#title)
   - [Project Description](#description)
   - [Installation](#install)
   - [Usage](#usage)
   - [Contributing](#contribute)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
   `

}
