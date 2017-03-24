"use strict";
//requiring mongodb
const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`

module.exports = function makeDataHelpers(db) {


  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet);
        callback(null);
      // });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      // simulateDelay(() => {
        // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        // console.log(28,db.collection("tweets").find().toArray(callback));
        // db.collection("tweets").find().toArray(callback).sort(sortNewestFirst);
        db.collection("tweets").find().toArray(callback)
      // });


    }

  }
}


