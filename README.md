# Call of Duty League Match Predictor

CDL Predictor is a simple, web-based app that allows a user to select 2 of the 12 professional teams, and then predicts the outcome of that matchup based on each teams stats for the current season. 

If the user wants to save their predictions, they must register an account and login. They can then save their predictions, delete them, update their profile with their favorite team and a profile image, or check out links to other stat sources for more detailed information.

## Test it out

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The API can be accessed locally from a separate repository [here](https://github.com/guacajoely/cdl-predictor-api) 

and then ran with the terminal command: 

`json-server -p 8088 -w database.json`

**-or-**

the API is currently deployed on Digital Ocean [here](https://cdl-predictor-api-huee9.ondigitalocean.app/)

Once you've confirmed you have access to one of the APIs (and checked that the correct API location is linked in ApiManager), you can launch the app with the terminal command:

`npm start`

and open [http://localhost:3000](http://localhost:3000) to view it in your browser.
