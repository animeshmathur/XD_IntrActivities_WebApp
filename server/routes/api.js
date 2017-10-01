const express = require("express");
const fs = require("fs");

const member = require("../member")

const router = express.Router();

router.get("/getMembers", function(req, res){
	var dataStream = fs.createReadStream("./json/ux_members.json", "UTF-8");
	dataStream.pipe(res);
});

router.post("/addMember", function(req, res){
	member.add(req.body, function(status, message){
		res.json({
			status: status,
			message: message
		});
	})
});

router.delete("/deleteMember", function(req, res){
	member.deleteByPSAID(req.query.psaId, function(status, message){
		res.json({
			status: status,
			message: message
		});
	});
});

module.exports = router;