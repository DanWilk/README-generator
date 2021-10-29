module.exports = templateData => {
    console.log(templateData);
    const {name, projectTitle, description, email, installation, usage, contribute, test, questions, license} = templateData;
   return`
   # Project Title {#title}
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

   ## Questions {#quest}
   If you have any questions reach out to me through:
   - email: ${email}
   - Github: ${name}
   
   ## Liscense {#lisc}
   ${license}

   ### Table of Contents
   -[Project Title](#title)
   -[Project Description](#description)
   -[Installation](#install)
   -[Usage](#usage)
   -[Contributing](#contribute)
   -[Tests](#tests)
   -[Questions](#quest)
   -[License](#lisc)
   `

}
