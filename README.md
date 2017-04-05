# Nibblr

Nibblr is Tinder for food. 

Swipe right on dishes that whet your appetite. Swipe left on the boring food. Note: this is a work-in-progress. THe frontend and backend aren't finished yet.

See it in action [here](https://erinkshaw.github.io/nibblr/frontend/).

## Installation & Usage

Nibblr's frontend is written in plain javascript and uses the swing.js library. The frontend is hosted using github pages. The code lives in `frontend/`. To view it on your device, clone this repository and type:

```sh
open frontend/index.html
```

The backend is written in node. Currently, it's a proof-of-concept command line tool that takes in a Latitude / Longitude pair and saves image of dishes for nearby restaurants to disk from the Google Places Search API.

Evenetually, it will be Express.js app hosted Heroku. The backend will take in the user's lat lon from the frontend, get dish pictures from google and display them as cards on the mainpage Nibblr plate. 

To run it, get a Google Maps API key and save it to a file called `key.json` in `backend/` with the following format:

```json
{"key":"<your key here>"}
```

Now you're ready to try out the backend. Just type:

```sh
cd backend
node get-places.js 40.684478 -73.941467
```

If it worked, you should see image files in the `backend/img` folder:

```sh
$ ls -l img/
total 2888
 69066 Apr  4 21:20 7-Eleven.png
 67492 Apr  4 21:20 Abir.png
     0 Apr  4 21:19 Basil Pizza & Wine Bar.png
 27186 Apr  4 21:20 Bombay Curry.png
 54181 Apr  4 21:20 Brown Sugar.png
 79171 Apr  4 21:20 Domino's Pizza.png
157615 Apr  4 21:20 Due Fratelli Pizza.png
 76126 Apr  4 21:20 Dunkin' Donuts.png
106204 Apr  4 21:20 Golden Krust Caribben Bakery & Grill.png
 75102 Apr  4 21:20 KFC.png
 86120 Apr  4 21:20 King Pizza & Fried Chicken.png
 60407 Apr  4 21:20 Little Caesars Pizza.png
 51001 Apr  4 21:20 McDonald's.png
 40500 Apr  4 21:20 Peaches.png
 88861 Apr  4 21:20 Popeyes Louisiana Kitchen.png
 49438 Apr  4 21:20 Ricky's Restaurant.png
 33849 Apr  4 21:20 Rocco Pizza III.png
 57705 Apr  4 21:20 Rowe's.png
 54212 Apr  4 21:20 Royal Rib House.png
 90366 Apr  4 21:20 Therapy Wine Bar.png
108100 Apr  4 21:20 ma-n-Pop.png
```