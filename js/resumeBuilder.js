/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio
var bio = {
  name: "Minwoo Chun",
  role: "Frontend-Web-Developer",
  picture: "images/fry.jpg",
  message: "Hi! I'm Minwoo, I love front-end",
  contact: {
	  email: "project42da@naver.com",
	  mobile: "+82 010-2086-0737",
	  github: `<a style="display:inline;" href="https://github.com/project42da">github</a>`,
	  location: "Repulic of Korea"
	},

  skills: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
  display: () => {
  	var Name = HTMLheaderName.replace("%data%", bio.name);
		var Role = HTMLheaderRole.replace("%data%", bio.role);
		var Picture = HTMLbioPic.replace("%data%", bio.picture);
		var Welcome = HTMLwelcomeMsg.replace("%data%", bio.message);
		var SkillsStart = HTMLskillsStart;

		$('#header').prepend(Name, Role);

		var Skill = bio.skills.map((skill) => {
			return HTMLskills.replace("%data%", skill);
		});

		$('#skills').append(Skill);

		var Contact = (obj) => {
			let contact = '';

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
		$('#footerContacts').append(Contact(bio.contact));
		$('#header').append(Picture, Welcome, SkillsStart);
  }
}

//intro
var intro = {
	description: "I want to work as a front-end web engineer in US, Canada and the Best is REMOTE. So I'm trying hard. I'm studying everyday! I love front-end.",
	display: () => {
		var IntroTitle = HTMLintroTitle.replace("%data%", intro.description);
		$('#intro').append(HTMLintroStart)
			.find('.intro-entry').append(IntroTitle);
	}
}

//work

//project
var project = {
	projects:[
		{
			title: "Recipe",
			date: "2016",
			url:"#",
			description: "Can search write your recipe and upload pictures, and  register by facebook. Built on AWS and RoR.",
			image:"images/197x148.gif"
		},
		{
			title: "Airbnb Copy",
			date: "2016",
			url:"#",
			description: "Can host your house imformations and upload pictures. Also register by facebook and Google+. Built on AWS and RoR.",
			image:"images/197x148.gif"
		},
		{
			title: "Instagram Copy",
			date: "2016",
			url:"#",
			description: "Copy instagram UI. Can upload pictures and register by facebook. Built on c9 and RoR.",
			image:"images/197x148.gif"
		},
		{
			title: "Resume",
			date: "2016",
			url:"#",
			description: "Copy instagram UI. Built on c9 and RoR.",
			image:"images/197x148.gif"
		}
	],
	display: function() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      formattedTitle = formattedTitle.replace("%url%", project.projects[e].url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].date);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
}
//education


bio.display();
intro.display();
project.display();




