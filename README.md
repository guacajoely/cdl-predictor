# Call of Duty League Match Predictor

CDL Predictor is a simple, web-based app that allows a user to select 2 of the 12 professional teams, and then predicts the outcome of that matchup based on each team's stats for the current season. 

If the user wants to save their predictions, they must register an account and login. They can then save their predictions, delete them, update their profile with their favorite team and a profile image, or check out links to other stat sources for more detailed information.

## Demo

This app was built as a mid-term, front end project, 3 months into a 6 month boot camp called [NewForce](https://generationwv.org/programs/newforce/).

You can watch a video of me presenting my app [HERE](https://www.loom.com/share/a129dd4227314fa39a7762d1dfcb3b88?sid=f173ddbd-6329-447d-9bdf-565a2bb7d998)!

## Test it out

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The mock JSON API can be accessed from a separate repository [here](https://github.com/guacajoely/cdl-predictor-api).

After cloning this repo to your machine and installing node.js, 
you can run it locally by installing json-server with this terminal command: 

`npm install -g json-server`

And then run it with this terminal command. Feel free to change the address at which it is hosted (8088).

`json-server -p 8088 -w database.json`

**-or-**

Once you've confirmed you have access to the API, you can launch the app within this repo with the terminal command:

`npm start`

It should automatically launch the app at [http://localhost:3000](http://localhost:3000) in your default browser.
