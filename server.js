  const db = require("./app/models");
  db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
  
  app.get('/movies', function(req, res) {
    res.render("movies");
	
	 return res.status(400).json({ error: 'All Movies Data in JSON format from Mongo DB' })
  });
  
    app.get('/genres', function(req, res) {
    res.render("genres");
	 return res.status(400).json({ error: 'All Genres Data in JSON format from Mongo DB' })
  });
  
    app.get('/artists', function(req, res) {
    res.render("artists");
	
	 return res.status(400).json({ error: 'All Artists Data in JSON format from Mongo DB' })
  });
  
   