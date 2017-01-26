# Whats In That?
Idea that came to me in the shower... Software that tells you what the ingredients in a product are and their health risks and benefits

Note: Idea has already been implemented. whatsinthat.com. However I believe I could do something similar with a better implementation and some sort of AI learning.

## Keywords (that we could go for)
Use Adwords KeywordPlanner to search for some SEO keywords to focus on
spm - (Searchs Per Month)
* food ingredients (100-1k spm)
* good for you (1k-10k spm)
* bad for you (100-1k spm)
* health benefits (1k-10k spm) [FOCUS]
* illness (1k-10k spm) [low competition] [FOCUS]
* eating well (1k-10k spm) [low competition] [FOCUS]
* healthy food (1k-10k spm) [low competition [FOCUS]

##Domain Ideas (something keyword rich)
* whatsinthatproduct.com

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