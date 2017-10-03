var fs = require("fs");
var path = require("path");

var member = {
	
	
	add(member, callback){
		var _this = this;
		this.getAll((allMembers) => {
			_this.checkExistanceByPSAID(member.psaId, allMembers, (exist) => {
				if(!exist){
					allMembers.push(member);
					fs.writeFile(path.join(__dirname, "../json/ux_members.json"), JSON.stringify(allMembers), (err) => {
						if(err){
							console.log(err);
							callback("failed", "An error occured.");
						}
						else{
							callback("success", `Added new member - ${member.fName} ${member.lName}`);
						}
					});
				}
				else{
					callback("failed", "Member with given PSA ID already exists.");
				}
			});
		});
		
	},

	update(updatedMember, callback){
		var _this = this;
		this.getAll((allMembers) => {
			_this.checkExistanceByPSAID(updatedMember.psaId, allMembers, (exist) => {
				if(exist){
					var memberIndex = allMembers.indexOf(allMembers.filter(function(member){return member.psaId == updatedMember.psaId})[0]);
					allMembers[memberIndex] = updatedMember;
					fs.writeFile(path.join(__dirname, "../json/ux_members.json"), JSON.stringify(allMembers), (err) => {
						if(err){
							console.log(err);
							callback("failed", "An error occured.");
						}
						else{
							callback("success", `Updated details of member - ${updatedMember.fName} ${updatedMember.lName}`);
						}
					});
				}
				else{
					callback("failed", "Invalid member.");
				}
			});
		});
	},

	deleteByPSAID(psaId, callback){
		var _this = this;
		this.getAll((allMembers) => {
			_this.checkExistanceByPSAID(psaId, allMembers, (exist) => {
				if(exist){
					var memberIndex = allMembers.indexOf(allMembers.filter(function(member){return member.psaId == psaId})[0]);
					var deletedMember = allMembers.splice(memberIndex, 1);
					fs.writeFile(path.join(__dirname, "../json/ux_members.json"), JSON.stringify(allMembers), (err) => {
						if(err){
							console.log(err);
							callback("failed", "An error occured.");
						}
						else{
							callback("success", `Deleted member - ${deletedMember[0].fName} ${deletedMember[0].lName}`);
						}
					});
				}
				else{
					callback("failed", "Invalid member!");
				}
			});
		});
	},

	checkExistanceByPSAID(psaId, allMembers, callback){
		var exists = allMembers.filter((_member) => {
			return _member.psaId == psaId;
		});
		callback(exists.length > 0);
	},

	getAll(callback){
		fs.readFile(path.join(__dirname, "../json/ux_members.json"), "UTF-8", function(err, data){
			if(err){
				throw err;
			}
			callback(JSON.parse(data));
		});
	}
}

module.exports = member;