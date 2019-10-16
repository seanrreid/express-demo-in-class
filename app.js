const express = require("express"),
    compression = require("compression"),
    helmet = require("helmet"),
    app = express();

app.listen(3333, function() {
    console.log("listening on port 3333");
});

// Middleware
app.use(compression());
app.use(helmet());

// Routes
const rootController = require("./routes/index"),
    allController = require("./routes/all"),
    wpController = require("./routes/wp"),
    personController = require("./routes/person");

// Express USE the router that we've exported
app.use("/", rootController);
app.use("/all", allController);
app.use("/wp", wpController);
app.use("/person", personController);
