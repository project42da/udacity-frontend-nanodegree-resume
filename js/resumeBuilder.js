/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  name: "Minwoo Chun",
  role: "Frontend-Web-Developer",
  picture: "images/fry.jpg",
  message: "Hi! I'm Minwoo, I love front-end",
  contact: {
	  email: "project42da@naver.com",
	  mobile: "+82 010-2086-0737",
	  github: "project42da.github.com",
	  location: "Repulic of Korea"
	},

  skills: ["Ruby on Rails", "HTML", "CSS"],
  display: () => {
  	var Name = HTMLheaderName.replace("%data%", bio.name);
		var Role = HTMLheaderRole.replace("%data%", bio.role);
		var Picture = HTMLbioPic.replace("%data%", bio.picture);
		var Welcome = HTMLwelcomeMsg.replace("%data%", bio.message);
		var SkillsStart = HTMLskillsStart;

		$('#header').append(Name, Role, Picture, Welcome, SkillsStart);

		var Skill = bio.skills.map((skill) => {
			return HTMLskills.replace("%data%", skill);
		});

		$('#skills').append(Skill);

		var Contact = function(obj){
			var contact = '';
			for (var key in obj) {
		    if (obj.hasOwnProperty(key)) {
		    	let HTMLcontact = `<li class="flex-item"><span class="orange-text">${key}</span><span class="white-text">${obj[key]}</span></li>`;
		      contact += HTMLcontact;
		      console.log(obj[key]);
		    }
			}
			return contact;
		}

		$('#topContacts').append(Contact(bio.contact));
  }
}




bio.display();





