/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio
var bio = {
  name: "Minwoo Chun",
  role: "Frontend-Web-Developer",
  biopic: "images/profile.jpg",
  welcomeMessage: "Hi! I'm Minwoo, I love front-end",
  contacts: {
	  email: "project42da@naver.com",
	  mobile: "+82 010-2086-0737",
	  github: `<a style="display:inline;" href="https://github.com/project42da">github</a>`,
	  location: "Seoul, Repulic of Korea"
	},

  skills: ["HTML", "CSS", "Javascript", "Ruby on Rails"],

  display: function() {
  	var Name = HTMLheaderName.replace("%data%", bio.name);
		var Role = HTMLheaderRole.replace("%data%", bio.role);
		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var Welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var SkillsStart = HTMLskillsStart;

		$('#header').prepend(Name, Role);

		var Contact = function(obj){
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

		$('#topContacts').append(Contact(bio.contacts));
		$('#footerContacts').append(Contact(bio.contacts));
		$('#header').append(bioPic, Welcome, SkillsStart);


		var Skill = bio.skills.map(function(skill){
			console.log(skill);
			return HTMLskills.replace("%data%", skill);
		});

		$('#skills').append(Skill);

  }
}

//intro
var intro = {
	description: "I want to work as a front-end web engineer in US, Canada and the Best is REMOTE. So I'm trying hard. I'm studying everyday! I love front-end.",
	display: function() {
		var IntroTitle = HTMLintroTitle.replace("%data%", intro.description);
		$('#intro').append(HTMLintroStart)
			.find('.intro-entry').append(IntroTitle);
	}
}

//work
var work = {
	employer: "Likelion",
	title: "mento",
	date: "2017",
	location: "	212, Teheran-ro, Gangnam-gu, Seoul ",
	description: "make students bold",
	display:function(){
		var workEmployer = HTMLworkEmployer.replace("%data%", work.employer);
		var workTitle = HTMLworkTitle.replace("%data%", work.title);
		var workDates = HTMLworkDates.replace("%data%", work.date);
		var workLocation = HTMLworkLocation.replace("%data%", work.location);
		var workDescription = HTMLworkDescription.replace("%data%", work.description);

		if(!work.employer.length==0){
			$('#workExperience').append(HTMLworkStart)
			.find('.work-entry').append(workEmployer, workTitle, workDates, workLocation, workDescription);
		}
	}
}



//project
var projects = {
	projects:[
		{
			title: "Recipe - closed",
			dates: "2016",
			url:"#",
			description: "Can search write your recipe and upload pictures, and  register by facebook. (Ruby on Rails)",
			images:"images/recipe.png"
		},
		{
			title: "Airbnb Copy - closed",
			dates: "2016",
			url:"#",
			description: "Can host your house imformations and upload pictures. Also register by facebook and Google+. (Ruby on Rails)",
			images:"images/airbnb.png"
		},
		{
			title: "Instagram Copy - closed",
			dates: "2016",
			url:"#",
			description: "Copy instagram UI. Can upload pictures and register by facebook. (Ruby on Rails)",
			images:"images/instagram.png"
		},
		{
			title: "Resume",
			dates: "2016",
			url:"#",
			description: "Udacity - Front-End Web Developer Nanodegree.(JS)",
			images:"images/resume.png"
		}
	],
	display: function() {
		$("#projects").append(HTMLprojectStart);
    projects.projects.map(function(pro){      
      var projectTitle = HTMLprojectTitle.replace("%data%", pro.title).replace("%url%", pro.url);
      var projectDates = HTMLprojectDates.replace("%data%", pro.dates);
      var projectDescription = HTMLprojectDescription.replace("%data%", pro.description);
      var projectImage = HTMLprojectImage.replace("%data%", pro.images);
      $(".project-entry").append(projectTitle + projectDates + projectDescription + projectImage);
    })
  }
}

//education

var education = {
	schools:[
		{
			name: "Konkuk University, Seoul Campus",
			location: "120 Neungdong-ro, Gwangjin-gu, Seoul 05029, Korea",
			degree:"Absence",
			major: ["College of Art & Design, Division of Art, Moving Image"],
			dates:"2011.3~",
			url:"https://konkuk.ac.kr/"

		}
	],
	online:[
		{
			title:"Front-End Web Developer Nanodegree",
			school:"Udacity",
			dates:"2017.1~",
			url:"https://www.udacity.com/"
		}
	],

	displaySchool:function() {
		console.log(education.schools.length);

		if(!education.schools.length==0){
			$('#education').append(HTMLschoolStart)
			education.schools.map((school)=>{
				var schoolName = HTMLschoolName.replace("%data%", school.name);
				var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
				var schoolMajor = HTMLschoolMajor.replace("%data%", school.major);
				$('#education').find('.education-entry').append(schoolName, schoolLocation, schoolMajor);
			})
		}
	},

	displayOnline:function() {
		console.log(education.online.length);

		if(!education.online.length==0){
			$('#education').append(HTMLonlineClasses, HTMLonlineStart);
			education.online.map((online)=>{
				var onlineTitle = HTMLonlineTitle.replace("%data%", online.title);
				var onlineSchool = HTMLonlineSchool.replace("%data%", online.school);
				var onlineDates = HTMLonlineDates.replace("%data%", online.dates);
				var onlineURL = HTMLonlineURL.replace("%data%", online.url);
				$('#education').find('.online-entry').append(onlineTitle, onlineSchool, onlineDates, onlineURL);
				
			})
		}
	}
}


bio.display();
intro.display();
work.display();
projects.display();
education.displaySchool();
education.displayOnline();




$("#mapDiv").append(googleMap);