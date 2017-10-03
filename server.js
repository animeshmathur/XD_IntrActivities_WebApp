const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const http = require("http");
const path = require("path");
const fs = require("fs");

const api = require("./server/routes/api");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "dist")));
app.use(cors());

app.use("/api", api);

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, './dist/index.html'));
});
app.get("/favicon.ico", function(req, res){
	res.sendFile(path.join(__dirname, './dist/favicon.ico'));
});
app.get("/:pathToFile", function(req, res){
	if(req.params.pathToFile.indexOf(".js") > 0){
		res.sendFile(path.join(__dirname, `./dist/${req.params.pathToFile}`));
	}
	else{
		res.sendFile(path.join(__dirname, './dist/index.html'));
	}
});
app.get("/css/:pathToFile", function(req, res){
	res.sendFile(path.join(__dirname, `./dist/css/${req.params.pathToFile}`));
});
app.get("/css/bootstrap/:pathToFile", function(req, res){
	res.sendFile(path.join(__dirname, `./dist/css/bootstrap/${req.params.pathToFile}`));
});
app.get("/css/fonts/:pathToFile", function(req, res){
	res.sendFile(path.join(__dirname, `./dist/css/fonts/${req.params.pathToFile}`));
});

const port = process.env.port || 3000;
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`\nXD IntrActivities server running at port - ${port}\n`);
});