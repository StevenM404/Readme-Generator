const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe what this project does.",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be run to intall all dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What can you use this program for?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "What license does your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "How can someone contribute to the repo?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What commant should be used to run a test?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub"
    }
]).then(answers => {
    console.log(answers);

    let readme = "";

    fs.appendFile("README.md", ("# " + answers.title) + '\n', err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "![alt badge](https://img.shields.io/badge/License-" + answers.license + "-green)" + '\n', err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Description" + '\n' + answers.description, err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Table of Contents" + '\n' + "  * [Installation](#installation)" + '\n' + "  * [Usage](#usage)" + '\n' + "  * [License](#license)" + '\n' + "  * [Contributing](#contributing)" + '\n' + "  * [Tests](#tests)" + '\n' + "  * [Questions](#questions)", err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Installation" + '\n' + "``` " + answers.install + " ```", err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Usage" + '\n' + answers.usage, err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## License" + '\n' + ("This project is licensed under the " + answers.license + " license"), err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Contributing" + '\n' + answers.contribute, err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Tests" + '\n' + "```" + answers.test + "```", err => {
        if (err) {
            console.log(err);
        }
    })

    fs.appendFile("README.md", '\n' + "## Questions" + '\n' + ("If you have any wuestions about the repo contact me directly at " + answers.email + ". You can find mor of my projects at " + "[" + answers.gitHub + "](https://github.com/" + answers.gitHub) + ")", err => {
        if (err) {
            console.log(err);
        }
    })

    fs.writeFile("README.md", readme, err => {
        if (err) {
            console.log(err);
        }
    })
})