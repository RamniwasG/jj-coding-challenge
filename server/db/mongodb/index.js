var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var dbo;
var options = { useUnifiedTopology: true };

MongoClient.connect(url, options, (err, db) => {
    if (err) console.log(err);
    
    dbo = db.db("testdb");
    console.log("Database created!");

    // create devices collection
    dbo.createCollection("devices", (err, res) => {
      if(err) {
        if(err.code == 48) {
            // console.log("devices", err.codeName)
        }
        return
      }
    })
});

module.exports = dbo;