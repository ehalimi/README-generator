// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let bagdeType = license;
  let myBadge = "";

  if(bagdeType === "GPL") {
    myBadge = '![License](https://img.shields.io/badge/license-GPL-blue.svg)'
  } else if (bagdeType === "BSD") {
    myBadge = '![License](https://img.shields.io/badge/license-BSD-blue.svg)'
  } else if (bagdeType === "MIT") {
    myBadge = '![License](https://img.shields.io/badge/license-MIT-blue.svg)'
  } else if (bagdeType === "Apache") {
    myBadge = '![License](https://img.shields.io/badge/license-Apache-blue.svg)'
  } else {
    bagdeType = "None";
  }

  return myBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink = '';

  if(license === "GPL") {
    licenceLink = '[GPL](https://choosealicense.com/licenses/gpl/)'
  } else if (license === "BSD") {
    licenceLink = '[BSD](https://choosealicense.com/licenses/bsd/)'
  } else if (license === "MIT") {
    licenceLink = '[MIT](https://choosealicense.com/licenses/mit/)'
  } else if (license === "Apache") {
    licenceLink = '[Apache](https://choosealicense.com/licenses/apache/)'
  } else {
    licenseLink = '';
  }

  return licenceLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink(license)}

  ${renderLicenseBadge(license)}
  `}  

function returnContact(dataContact, num){

let contactSection =''

  if(dataContact === "github" && num ===1){
    contactSection =
    '[GitHub Link](https://github.com/ehalimi)'
  } 
  else if(dataContact === "email" && num ===1){
    contactSection=
    '[email](mailto:emahalimi19@gmail.com)'
  }
  else if(num ===2){
    contactSection=
    '[GitHub Link](https://github.com/ehalimi)\n'
    '[Email](mailto:emahalimi19@gmail.com)' 
  }
  return contactSection
  };


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, license, installation, usage, test, contribute, contact } = data;
  const licenseSection = license[0];

  return `# ${data.title}

  ## Description: 
  ### ${data.description}

  ## Table of Contents: 
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contribute](#contribute)
  * [Contact](#contact)

  ## Licenses: 
  ${renderLicenseSection(licenseSection)}

  ## Installation:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}

  ## Test:
  ### ${data.test}

  ## Contribute:
  ### ${data.contribute}

  ## Contact:
  ${returnContact(contact[0], contact.length)}
`;

generateMarkdown(data);
}

module.exports = generateMarkdown;

