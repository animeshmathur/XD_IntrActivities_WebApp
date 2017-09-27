const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/getMembers", function(req, res){
	var dataStream = fs.createReadStream("./json/ux_members.json", "UTF-8");
	dataStream.pipe(res);
});

router.post("/addMember", function(req, res){
	//res.writeHead(200, {"Content-Type": "text/plain"});
	res.json({
		status: 200,
		message: `Added new member: ${req.body.fName}`
	});
});

module.exports = router;