var fs = require("fs");
var path = require("path");

var member = {
	
	
	add(member, callback){
		var _this = this;
		this.getAll((allMembers) => {
			_this.checkExistanceByPSAID(member, allMembers, (exist) => {
				if(!exist){
					allMembers.push(member);
					fs.writeFile(path.join(__dirname, "../json/ux_members.json"), JSON.stringify(allMembers), (err) => {
						if(err){
							console.log(err);
							callback("failed", "An error occured.", allMembers);
						}
						else{
							callback("success", `Added new member - ${member.fName} ${member.lName}`, allMembers);
						}
					});
				}
				else{
					callback("failed", "Member with given PSA ID already exists.", allMembers);
				}
			});
		});
		
	},
	
	checkExistanceByPSAID(member, allMembers, callback){
		var exists = allMembers.filter((_member) => {
			return _member.psaId == member.psaId;
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