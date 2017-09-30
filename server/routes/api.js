const express = require("express");
const fs = require("fs");

const member = require("../member")

const router = express.Router();

router.get("/getMembers", function(req, res){
	var dataStream = fs.createReadStream("./json/ux_members.json", "UTF-8");
	dataStream.pipe(res);
});

router.post("/addMember", function(req, res){
	
	member.add(req.body, function(status, message, updatedMembersList){
		res.json({
			status: status,
			message: message,
			updatedMembersList: updatedMembersList
		});
	})
});

module.exports = router;