##Things you need installed to develop locally
* [NodeJS 7.4 or greater](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/) (Setup as a service see [here](http://stackoverflow.com/questions/2438055/how-to-run-mongodb-as-windows-service))
* [Yarn pkg manager](https://yarnpkg.com/en/docs/install)

##Steps to get project setup
* Clone the REPO
* `cd <repo_dir>`
* `npm install` OR `yarn install` (if you have yarn installed)
* `npm install -g nodemon` (Used to auto reload node server on changes)
* `nodemon app.js`