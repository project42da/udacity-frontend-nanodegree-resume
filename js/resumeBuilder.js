/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio
var bio = {
  name: "Minwoo Chun",
  role: "Frontend-Web-Developer",
  picture: "images/profile.jpg",
  message: "Hi! I'm Minwoo, I love front-end",
  contact: {
	  email: "project42da@naver.com",
	  mobile: "+82 010-2086-0737",
	  github: `<a style="display:inline;" href="https://github.com/project42da">github</a>`,
	  location: "Seoul, Repulic of Korea"
	},

  skills: ["HTML", "CSS", "Javascript", "Ruby on Rails"],

  display: () => {
  	var Name = HTMLheaderName.replace("%data%", bio.name);
		var Role = HTMLheaderRole.replace("%data%", bio.role);
		var Picture = HTMLbioPic.replace("%data%", bio.picture);
		var Welcome = HTMLwelcomeMsg.replace("%data%", bio.message);
		var SkillsStart = HTMLskillsStart;

		$('#header').prepend(Name, Role);

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


		var Skill = bio.skills.map((skill) => {
			console.log(skill);
			return HTMLskills.replace("%data%", skill);
		});

		$('#skills').append(Skill);

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
var work = {
	employer: "",
	title: "",
	date: "",
	location: "",
	description: ""
}
var workEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDates = HTMLworkDates.replace("%data%", work.date);
var workLocation = HTMLworkLocation.replace("%data%", work.location);
var workDescription = HTMLworkDescription.replace("%data%", work.description);

if(!work.employer.length==0){
	$('#workExperience').append(HTMLworkStart)
	.find('.work-entry').append(workEmployer, workTitle, workDates, workLocation, workDescription);
}


//project
var project = {
	projects:[
		{
			title: "Recipe - closed",
			date: "2016",
			url:"#",
			description: "Can search write your recipe and upload pictures, and  register by facebook. (Ruby on Rails)",
			image:"images/recipe.png"
		},
		{
			title: "Airbnb Copy - closed",
			date: "2016",
			url:"#",
			description: "Can host your house imformations and upload pictures. Also register by facebook and Google+. (Ruby on Rails)",
			image:"images/airbnb.png"
		},
		{
			title: "Instagram Copy - closed",
			date: "2016",
			url:"#",
			description: "Copy instagram UI. Can upload pictures and register by facebook. (Ruby on Rails)",
			image:"images/instagram.png"
		},
		{
			title: "Resume",
			date: "2016",
			url:"#",
			description: "Udacity - Front-End Web Developer Nanodegree.(JS)",
			image:"images/resume.png"
		}
	],
	display: () => {
		$("#projects").append(HTMLprojectStart);
    project.projects.map((pro) => {      
      var projectTitle = HTMLprojectTitle.replace("%data%", pro.title).replace("%url%", pro.url);
      var projectDates = HTMLprojectDates.replace("%data%", pro.date);
      var projectDescription = HTMLprojectDescription.replace("%data%", pro.description);
      var projectImage = HTMLprojectImage.replace("%data%", pro.image);
      $(".project-entry").append(projectTitle + projectDates + projectDescription + projectImage);
    })
  }
}

//education

var education = {
	school:[
		{
			name: "Konkuk University, Seoul Campus",
			address: "120 Neungdong-ro, Gwangjin-gu, Seoul 05029, Korea",
			major: "College of Art & Design, Division of Art, Moving Image"
		}
	],
	online:[],

	displaySchool:() => {
		console.log(education.school.length);
		if(!education.school.length==0){
			education.school.map((school)=>{
				var schoolName = HTMLschoolName.replace("%data%", school.name);
				var schoolLocation = HTMLschoolLocation.replace("%data%", school.address);
				var schoolMajor = HTMLschoolMajor.replace("%data%", school.major);
				$('#education').append(HTMLschoolStart)
					.find('.education-entry').append(schoolName, schoolLocation, schoolMajor);
			})
		}
	},

	displayOnline:() => {
		console.log(education.school.length);
		if(!education.online.length==0){
			education.online.map((online)=>{
				var onlineTitle = HTMLonlineTitle.replace("%data%", online.title);
				var onlineSchool = HTMLonlineSchool.replace("%data%", online.school);
				var onlineDates = HTMLonlineDates.replace("%data%", online.date);
				var onlineURL = HTMLonlineURL.replace("%data%", online.url);
				$('#education').append(onlineTitle, onlineSchool, onlineDates, onlineURL);
				
				$('#education').prepend(HTMLonlineClasses);
			})
		}
	}
}


bio.display();
intro.display();
project.display();
education.displaySchool();
education.displayOnline();




$("#mapDiv").append(googleMap);