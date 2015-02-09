/******************************
THIS IS WHERE YOU UPDATE THE CONTENT ON THE WEBSITE. PLEASE READ ALL OF THIS CAREFULLY
THIS FILE WILL BE SEPARATED INTO 3 SECTIONS:
1. THE HOME PAGE
2. THE ABOUT US PAGE
3. THE OTHER PAGE
4. THE EXTRA STUFF LIKE FAVICON LINKS, TITLE TEXT ON BROWSER TAB, NAV BAR TEXT/LINKS, EMAIL FORM ETC

UPDATE THE VARIABLES CORRESPONDING TO THE INFORMATION NEEDED. 
!!!!!DO NOT TOUCH ANYTHING ELSE EXCEPT TEXT. DO NOT TOUCH QUOTATION MARKS, SEMICOLONS, OR ANYTHING EXCEPT THE ACTUAL TEXT!!!!!

ONCE YOU HAVE UPDATED THE WEBSITE, YOU PUSH THE REPOS TO GITHUB. 
YOU NEED TO HAVE GIT INSTALLED, AND THE REPOS OF THE WEBSITE ON YOUR COMPUTER
HERE THE COMMANDS YOU PUT INTO TERMINAL: 
NAVIAGATE TO THE FOLDER OF THE REPOS. EX: cd/desktop/acmutd
THEN TYPE THIS STUFF IN:
FOR THE FIRST COMMAND, IF YOU DELETE/ADD FILES, DO git add --all INSTEAD.
git add . 
git commit - m "updated this..."
git push

COPY PASTE THE THREE COMMANDS INTO TERMINAL SO YOU DONT HAVE TO WRITE THEM OUT EACH TIME.


FYI--- IF YOU WOULD LIKE TO CHANGE THE VARIABLE NAMES, YOU MAY DO SO. ALSO UPDATE THE COMMENTS SO YOU CAN EASILY READ THE CODE. IF YOU DO, HERE IS WHAT YOU NEED TO DO SO THE CONTENT WILL ACTUALLY SHOW UP: DO THIS ONLY IF YOU ARE CHANGING VARIABLE NAMES

1. IF THERE IS A $() IN THE CODE, YOU NEED TO UPDATED THE CLASS NAME INSIDE THE $(). MAKE SURE YOU HAVE A . BEFORE THE CLASS NAME INSIDE THE $(). THEN GO TO THE APPROPRIATE HTML PAGE AND FIND THE OLD CLASS NAME AND REPLACE IT WITH THE NEW CLASS NAME. USE CONTROL/CMD +F TO MAKE FINDING IT EASIER.

2. IF THERE IS A VAR, UPDATE THE VAR NAME. THEN SCROLL DOWN PAST SECTION 4 AND CHANGE THE OLD VARIABLE NAME TO THE NEW ONE. YOU WILL HAVE TO CHANGE IT TWICE. ONCE IN THE $() AND ONCE INSIDE THE PREPEND(). THEN YOU HAVE TO GO THE APPROPRIATE HTML PAGE AND CHANGE THE OLD CLASS NAME TO THE NEW ONE. THE VARIABLE NAME AND CLASS NAME SHOULD BE THE SAME. 


IF YOU WANT TO CHANGE A LINK TO MAKE AN EMAIL TO AN EMAIL ADDRESS, CHANGE THE LINK IN THE .ATTR() TO mailto:email@email.com
IF YOU WANT TO ADD COMPONENTS OR SOMETHING TO THE WEBSITE, GO TO materializecss.com AND UPDATE TO THE LATEST VERSION OF THE FRAMEWORK. YOU WILL HAVE TO REPLACE THE FILES OF THE OLD FRAMEWORK WITH THE NEW ONE. YOU MIGHT HAVE TO CHANGE SOME CSS AFTER UPDATING TO THE LATEST FRAMEWORK. 

IF YOU WANT TO CHANGE THE CLASS/ID NAMES IN THE HTML FILE, YOU MAY DO SO BUT MAKE SURE THAT THE CSS CLASS NAMES ARE ALSO UPDATED. SOME HTML CLASS NAMES CANNOT BE CHANGED BEECAUSE THEY ARE PART OF THE FRAMEWORK, BUT IF YOU CHANGE ANY CHANGEABLE CLASS/ID NAMES, MAKE SURE YOU CHANGE IT IN THE CSS AND IN THIS JS FILE AS WELL AS THE INDEX.JS FILE

IF YOU WOULD LIKE TO CHANGE THE ICONS AND THE STYLING OF THE NAV BAR, GO TO THE MATERIALIZE.MIN.CSS FILE WHICH IS IN THE MATERIALIZE_v0.8something FOLDER. FOR ICONS, SEARCH FOR MDI AND THERE WILL BE A BUNCH OF CLASS NAMES WHICH ARE THE ICONS. THIS LINK https://google.github.io/material-design-icons/ TO SEE THE LIST OF THEM. FOR THE NAV BAR SEARCH FOR NAV.
TO CHANGE COLORS OF THE ICONS GO TO INDEX.CSS AND CHANGE THE COLOR BY DOING COLOR: #123456; FOR EXAMPLE. YOU CAN CHANGE THE SIZE OF THE ICON BY DOING FONT-SIZE: 10PX; ETC
******************************/



/**********************
SECTION 1: THE HOME PAGE
MAKE SURE YOU TYPE THE WHOLE THING AND LET THE EDITOR GO TO THE NEXT LINE BY ITSELF,
DO NOT CLICK ENTER TO TRY TO MAKE A NEW LINE WHEN EDITING STUFF, OR BAD THINGS WILL HAPPEN
***********************/
var mainTitle = "ACM"; /*title on the browser tab*/
/*This is the FIRST card that appears under the banner photo*/
var firstCardTitle = "Club Name";
var firstCardContent = "Club is the official University of Texas at Dallas Student Chapter of the Association for Computing Machinery. We're dedicated towards advancing computing here at UTD. Learn more about what we do and see our officers' beautiful faces or see our upcoming events below!";
$(".firstCardLink").prepend("About");
$(".firstCardLink").attr("href", "about.html"); 

/*This is the SECOND card that appears under the banner photo*/
var secondCardTitle = "Club Name";
var secondCardContent = "Club is the official University of Texas at Dallas Student Chapter of the Association for Computing Machinery. We're dedicated towards advancing computing here at UTD. Learn more about what we do and see our officers' beautiful faces or see our upcoming events below!";
$(".secondCardLink").prepend("About");
$(".secondCardLink").attr("href", "about.html"); 

/*THIS IS THE FIRST HEADER ON THE PAGE. IT IS BETWEEN THE 2ND CARD AND THE FIRST FEATURED EVENT*/
var firstHeader = "ACM Events";

/*This is the FIRST of the two featured ACM events on the website. This will go under the FIRST event card that is under the title ACM Events. This is on the home page*/
var firstAcmEventTitle = "Stroz Friedberg Tech Talk";
var firstAcmEventSpeakerHost = "ACM + CSG";
var firstAcmEventDescription = "Come hear about computer security, the engineering behind a major computer security firm, and speak to the engineer about job and internship opportunities afterwards.";
var firstAcmEventDate = "Thursday, February 5th at 8:30 pm";
var firstAcmEventLocation = "TBA";

/*THIS IS THE CARD BETWEEN THE TWO FEATURED EVENTS. IT IS THE THIRD CARD ON THE HOME PAGE*/
var thirdCardTitle = "Questions";
var thirdCardContent =  "If you have any questions or want to learn more, contact us at the links below. Our Facebook posts also have a lot of useful information, especially on stuff besides events, so be sure to like our page!";
$(".thirdCardLink1").prepend("Email");
$(".thirdCardLink1").attr("href", "http://gmail.com");
$(".thirdCardLink2").prepend("Facebook");
$(".thirdCardLink2").attr("href", "http://facebook.com");

/*This is the SECOND of the two featured ACM events on the website. This will go under the SECOND event card that is under the title ACM Events. This is on the home page*/
var secondAcmEventTitle = "Google Tech Talk";
var secondAcmEventSpeakerHost = "ACM";
var secondAcmEventDescription = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
var secondAcmEventDate = "Thursday, February 19th at 8:30 pm";
var secondAcmEventLocation = "Clark Center (CN) 1.112";


/*THIS IS THE SECOND HEADER. IT IS BETWEEN THE SECOND FEATURED ACM EVENT AND THE CARD ON TOP OF THE COLLAPSIBLE*/
var secondHeader = "SIG Events";

/*THIS IS THE CARD ON TOP OF THE COLLAPSIBLE. IT IS THE FOURTH CARD ON THE HOME PAGE*/
var fourthCardTitle = "Questions";
var fourthCardContent =  "If you have any questions or want to learn more, contact us at the links below. Our Facebook posts also have a lot of useful information, especially on stuff besides events, so be sure to like our page!";
$(".fourthCardLink").prepend("Visit Sigs");
$(".fourthCardLink").attr("href", "sigs.html");

/*THIS IS THE 5 ITEMS IN THE COLLAPSIBLE.  cl1 is the first row in the collapsible, cl2 is the second row etc.
FIRST ITEM IN COLLAPSIBLE*/
var firstclTitle = "HackDFW";
$('.firstcl1Icon').addClass("mdi-social-people");
var firstcl1Text = "UTD Hackers ft. Speaker Name";
$('.firstcl2Icon').addClass("mdi-action-description");
var firstcl2Text = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
$('.firstcl3Icon').addClass("mdi-action-event");
var firstcl3Text = "Thursday, February 19th at 8:30pm";
$('.firstcl4Icon').addClass("mdi-maps-pin-drop");
var firstcl4Text = "Clark Center (CN) 1.112";
var firstcl5Text = "Questions? Join the Facebook group!";
$('.firstcl5Icon').addClass("mdi-content-send");

/*SECOND ITEM IN COLLAPSIBLE*/
var secondclTitle = "HackDFW";
$('.secondcl1Icon').addClass("mdi-social-people");
var secondcl1Text = "UTD Hackers ft. Speaker Name";
$('.secondcl2Icon').addClass("mdi-action-description");
var secondcl2Text = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
$('.secondcl3Icon').addClass("mdi-action-event");
var secondcl3Text = "Thursday, February 19th at 8:30pm";
$('.secondcl4Icon').addClass("mdi-maps-pin-drop");
var secondcl4Text = "Clark Center (CN) 1.112";
var secondcl5Text = "Questions? Join the Facebook group!";
$('.secondcl5Icon').addClass("mdi-content-send");

/*THIRD ITEM IN COLLAPSIBLE*/
var thirdclTitle = "HackDFW";
$('.thirdcl1Icon').addClass("mdi-social-people");
var thirdcl1Text = "UTD Hackers ft. Speaker Name";
$('.thirdcl2Icon').addClass("mdi-action-description");
var thirdcl2Text = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
$('.thirdcl3Icon').addClass("mdi-action-event");
var thirdcl3Text = "Thursday, February 19th at 8:30pm";
$('.thirdcl4Icon').addClass("mdi-maps-pin-drop");
var thirdcl4Text = "Clark Center (CN) 1.112";
var thirdcl5Text = "Questions? Join the Facebook group!";
$('.thirdcl5Icon').addClass("mdi-content-send");

/*FOURTH ITEM IN COLLAPSIBLE*/
var fourthclTitle = "HackDFW";
$('.fourthcl1Icon').addClass("mdi-social-people");
var fourthcl1Text = "UTD Hackers ft. Speaker Name";
$('.fourthcl2Icon').addClass("mdi-action-description");
var fourthcl2Text = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
$('.fourthcl3Icon').addClass("mdi-action-event");
var fourthcl3Text = "Thursday, February 19th at 8:30pm";
$('.fourthcl4Icon').addClass("mdi-maps-pin-drop");
var fourthcl4Text = "Clark Center (CN) 1.112";
var fourthcl5Text = "Questions? Join the Facebook group!";
$('.fourthcl5Icon').addClass("mdi-content-send");

/*FIFTH ITEM IN COLLAPSIBLE*/
var fifthclTitle = "HackDFW";
$('.fifthcl1Icon').addClass("mdi-social-people");
var fifthcl1Text = "UTD Hackers ft. Speaker Name";
$('.fifthcl2Icon').addClass("mdi-action-description");
var fifthcl2Text = "Come hear about the engineering behind another billion-user service, and speak to the engineer about job and internship opportunities afterwards.";
$('.fifthcl3Icon').addClass("mdi-action-event");
var fifthcl3Text = "Thursday, February 19th at 8:30pm";
$('.fifthcl4Icon').addClass("mdi-maps-pin-drop");
var fifthcl4Text = "Clark Center (CN) 1.112";
var fifthcl5Text = "Questions? Join the Facebook group!";
$('.fifthcl5Icon').addClass("mdi-content-send");



/**********************
SECTION 2: THE ABOUT PAGE
MAKE SURE YOU TYPE THE WHOLE THING AND LET THE EDITOR GO TO THE NEXT LINE BY ITSELF,
DO NOT CLICK ENTER TO TRY TO MAKE A NEW LINE WHEN EDITING STUFF, OR BAD THINGS WILL HAPPEN
***********************/
var abtTitle = "About Us"; /*title on the browser tab*/
/*THIS IS THE HEADER ON THE TOP OF THE ABOUT PAGE*/
var headerp1 = "Association for Computing Machinery";
var headerp2 = "The University of Texas at Dallas";

/*THESE ARE THE THREE ABOUT CARDS*/
/*FIRST ABOUT CARD*/
$('.firstAbtIcon').addClass("mdi-action-account-circle");
var firstAbtTitle = "Who We Are";
var firstAbtText = "ACM, the Association for Computing Machinery, was founded in 1947 for the advancement of computing as a science and a profession. It's the world's largest computing society. We're here to bring it to UT Dallas.";

/*SECOND ABOUT CARD*/
$('.secondAbtIcon').addClass("mdi-hardware-laptop");
var secondAbtTitle = "What We Do";
var secondAbtText = "ACM, the Association for Computing Machinery, was founded in 1947 for the advancement of computing as a science and a profession. It's the world's largest computing society. We're here to bring it to UT Dallas.";

/*SECOND ABOUT CARD*/
$('.thirdAbtIcon').addClass("mdi-social-cake");
var thirdAbtTitle = "What We Do";
var thirdAbtText = "ACM, the Association for Computing Machinery, was founded in 1947 for the advancement of computing as a science and a profession. It's the world's largest computing society. We're here to bring it to UT Dallas.";

/*THIS IS THE HEADER IN BETWEEN THE ABOUT CARDS AND THE OFFICER CARDS*/
var abtHeader = "Meet the Officers";


/*THIS IS WHERE THE OFFICERS ARE LISTED. MAKE SURE THE OFFICER IMAGES ARE 616x616px*/
/*PRESIDENT*/
$(".presidentName").prepend("Izuchukwu Elechi");
$(".presidentImage").attr("src", "tahir.png");
$(".presidentLink1").prepend("Website");
$(".presidentLink1").attr("href", "http://yahoo.com");
$(".presidentLink2").prepend("LinkedIn");
$(".presidentLink2").attr("href", "https://linkedin.com");

/*VICE PRESIDENT*/
$(".vpName").prepend("Michael Raibick");
$(".vpImage").attr("src", "tahir.png");
$(".vpLink1").prepend("Website");
$(".vpLink1").attr("href", "http://yahoo.com"); 
$(".vpLink2").prepend("LinkedIn");
$(".vpLink2").attr("href", "https://www.linkedin.com");

/*SECRETARY*/
$(".secretaryName").prepend("Connie Clark");
$(".secretaryImage").attr("src", "tahir.png");
$(".secretaryLink1").prepend("Website");
$(".secretaryLink1").attr("href", "http://yahoo.com"); 
$(".secretaryLink2").prepend("LinkedIn");
$(".secretaryLink2").attr("href", "https://www.linkedin.com");

/*TREASURER*/
$(".treasurerName").prepend("Michael Hankin");
$(".treasurerImage").attr("src", "tahir.png");
$(".treasurerLink1").prepend("Website");
$(".treasurerLink1").attr("href", "http://yahoo.com"); 
$(".treasurerLink2").prepend("LinkedIn");
$(".treasurerLink2").attr("href", "https://www.linkedin.com");

/*ECS AFFAIRS*/
$(".ecsName").prepend("Reuben Frank");
$(".ecsImage").attr("src", "tahir.png");
$(".ecsLink1").prepend("LinkedIn");
$(".ecsLink1").attr("href", "https://www.linkedin.com"); 
$(".ecsLink2").prepend("Facebook");
$(".ecsLink2").attr("href", "https://www.facebook.com");

/*DIRECTOR OF SIGS*/
$(".sigsName").prepend("Tahir Aziz");
$(".sigsImage").attr("src", "tahir.png");
$(".sigsLink1").prepend("Website");
$(".sigsLink1").attr("href", "http://yahoo.com"); 
$(".sigsLink2").prepend("LinkedIn");
$(".sigsLink2").attr("href", "https://www.linkedin.com");

/*Student Affairs*/
$(".studentAffairsName").prepend("Grace Chow");
$(".studentAffairsImage").attr("src", "tahir.png");
$(".studentAffairsLink1").prepend("Website");
$(".studentAffairsLink1").attr("href", "https://twitter.com"); 
$(".studentAffairsLink2").prepend("LinkedIn");
$(".studentAffairsLink2").attr("href", "https://www.linkedin.com");

/*INDUSTRY AFFAIRS*/
$(".industryName").prepend("Shaurya Arora");
$(".industryImage").attr("src", "tahir.png");
$(".industryLink1").prepend("Website");
$(".industryLink1").attr("href", "http://yahoo.com");
$(".industryLink2").prepend("LinkedIn");
$(".industryLink2").attr("href", "https://www.linkedin.com");

/*PUBLIC RELATIONS #1*/
$(".pr1Name").prepend("Tej Gidvani");
$(".pr1Image").attr("src", "tahir.png");
$(".pr1Link1").prepend("Website");
$(".pr1Link1").attr("href", "http://yahoo.com"); 
$(".pr1Link2").prepend("LinkedIn");
$(".pr1Link2").attr("href", "https://www.linkedin.com");

/*PUBLIC RELATIONS #2*/
$(".pr2Name").prepend("Braden Herndon");
$(".pr2Image").attr("src", "tahir.png");
$(".pr2Link1").prepend("Website");
$(".pr2Link1").attr("href", "http://yahoo.com"); 
$(".pr2Link2").prepend("LinkedIn");
$(".pr2Link2").attr("href", "https://www.linkedin.com");

/*HACKATHON AFFAIRS*/
$(".hackathonName").prepend("Diem-Nhi Tran");
$(".hackathonImage").attr("src", "tahir.png");
$(".hackathonLink1").prepend("Website");
$(".hackathonLink1").attr("href", "http://yahoo.com"); 
$(".hackathonLink2").prepend("LinkedIn");
$(".hackathonLink2").attr("href", "https://www.linkedin.com");

/*FACULTY SPONSOR*/
$(".sponsorName").prepend("John Cole");
$(".sponsorImage").attr("src", "tahir.png");
$(".sponsorLink1").prepend("Website");
$(".sponsorLink1").attr("href", "http://utdalas.edu"); 
$(".sponsorLink2").prepend("Email");
$(".sponsorLink2").attr("href", "mailto:bob@bob.gmail.com");



/**********************
SECTION 3: THE OTHER PAGE
MAKE SURE YOU TYPE THE WHOLE THING IN ONE LINE. DO NOT BREAK THE LINE OR BAD THINGS WILL HAPPEN
***********************/
var otherTitle = "Sigs"; /*title on the browser tab*/
var otherHeader = "Special Interest Groups";
var otherSubHeader = "ACM aims to be a general forum for computer science related activities at UTD, while each Special Interest Group focuses on a more detailed aspect of programming. We hope that cooperating with each SIG leads to more successful and more notable events, as well as more resources for members of both organizations.";

/*FIRST CARD ON THE OTHER PAGE*/
var card1Title = "UTD Hackers";
var card1Text = "UTD Hackers is a group of students who are focused on participation of hackathons. UTD Hackers will participate in local and national hackathons around the United States.";
$('.card1Link1').prepend("Website");
$('.card1Link1').attr("href", "http://utdacm.com");
$('.card1Link2').prepend("Email");
$('.card1Link2').attr("href", "http://mail.google.com");

/*SECOND CARD ON THE OTHER PAGE*/
var card2Title = "UTD Hackers";
var card2Text = "UTD Hackers is a group of students who are focused on participation of hackathons. UTD Hackers will participate in local and national hackathons around the United States.";
$('.card2Link1').prepend("Website");
$('.card2Link1').attr("href", "http://utdacm.com");
$('.card2Link2').prepend("Email");
$('.card2Link2').attr("href", "http://mail.google.com");

/*THIRD CARD ON THE OTHER PAGE*/
var card3Title = "UTD Hackers";
var card3Text = "UTD Hackers is a group of students who are focused on participation of hackathons. UTD Hackers will participate in local and national hackathons around the United States.";
$('.card3Link1').prepend("Website");
$('.card3Link1').attr("href", "http://utdacm.com");
$('.card3Link2').prepend("Email");
$('.card3Link2').attr("href", "http://mail.google.com");

/*FOURTH CARD ON THE OTHER PAGE*/
var card4Title = "UTD Hackers";
var card4Text = "UTD Hackers is a group of students who are focused on participation of hackathons. UTD Hackers will participate in local and national hackathons around the United States.";
$('.card4Link1').prepend("Website");
$('.card4Link1').attr("href", "http://utdacm.com");
$('.card4Link2').prepend("Email");
$('.card4Link2').attr("href", "http://mail.google.com");



/**********************
SECTION 4: THE EXTRA STUFF
MAKE SURE YOU TYPE THE WHOLE THING IN ONE LINE. DO NOT BREAK THE LINE OR BAD THINGS WILL HAPPEN
***********************/

/*FAVICON ON BROWSER TOP*/
$('.favicon').attr("href", "favicon.ico");

/*THESE ARE THE MENU OPTIONS ON THE NAV BAR*/
$('.menu1').prepend("Home");
$('.menu2').prepend("About Us");
$('.menu3').prepend("Groups");
$('.menu4').prepend("Get Updates");

/*LOGO ON THE NAV BAR*. MAKE SURE THE DIMENSONS OF THE LOGO IMAGE ARE 279X140 PX . IF THEY ARE NOT, YOU WILL HAVE TO PLAY AROUND WITH THE NAV BAR HEIGHT AND CSS*/
$('.logo').attr("src", "acm2.png");

/*EMAIL FORM. IF YOU WANT TO EDIT THE ACTUAL FORM, GO THE MATERIALZECSS.COM WEBSITE AND GET THE COMPONENTS FOR THE FORM THERE.*/
$('.contactHeader').prepend("Get Updates");
$('.msg').prepend("Sign up for email updates below or like us on ");
$('.contactLink').append("Facebook");
$('.contactLink').attr("href", "http://facebook.com");


/*FOOTER*/
$('.copyright').append(" Club UTDallas Chapter. All Rights Reserved");

/*IF YOU WANT TO CHANGE THE BANNER PHOTO THEN YOU HAVE TO GO INTO INDEX.CSS AND SEARCH FOR ".BANNER" AND UPDATE THE URL. YOU WILL PROBBABLY HAVE THE MESS AROUND WITH THE BACKGROUND-POSITION AND THE HEIGHT AT DIFFERENT VIEWPORTS (THE .BANNER AT DIFFERENT @MEDIA SCREEN STUFF)*/



/**********************
THIS IS WHERE THE INFORMATION GETS PUT INTO THE HTML DOCUMENT. 
DO NOT TOUCH THIS OR YOU WILL BREAK THE WEBSITE. ONLY CHANGE STUFF HERE IF YOU ARE CHANGING VARIABLE NAMES
***********************/

/*HOME PAGE*/
$('.mainTitle').prepend(mainTitle);
$('.firstCardTitle').prepend(firstCardTitle);
$('.firstCardContent').prepend(firstCardContent);
$('.secondCardTitle').prepend(secondCardTitle);
$('.secondCardContent').prepend(secondCardContent);
$('.firstHeader').prepend(firstHeader);
$('.firstAcmEventTitle').prepend(firstAcmEventTitle);
$('.firstAcmEventSpeakerHost').prepend(firstAcmEventSpeakerHost);
$('.firstAcmEventDescription').prepend(firstAcmEventDescription);
$('.firstAcmEventDate').prepend(firstAcmEventDate);
$('.firstAcmEventLocation').prepend(firstAcmEventLocation);
$('.thirdCardTitle').prepend(thirdCardTitle);
$('.thirdCardContent').prepend(thirdCardContent);
$('.secondAcmEventTitle').prepend(secondAcmEventTitle);
$('.secondAcmEventSpeakerHost').prepend(secondAcmEventSpeakerHost);
$('.secondAcmEventDescription').prepend(secondAcmEventDescription);
$('.secondAcmEventDate').prepend(secondAcmEventDate);
$('.secondAcmEventLocation').prepend(secondAcmEventLocation);
$('.secondHeader').prepend(secondHeader);
$('.fourthCardTitle').prepend(fourthCardTitle);
$('.fourthCardContent').prepend(fourthCardContent);
$('.firstclTitle').prepend(firstclTitle);
$('.firstcl1Text').prepend(firstcl1Text);
$('.firstcl2Text').prepend(firstcl2Text);
$('.firstcl3Text').prepend(firstcl3Text);
$('.firstcl4Text').prepend(firstcl4Text);
$('.firstcl5Text').prepend(firstcl5Text);
$('.secondclTitle').prepend(secondclTitle);
$('.secondcl1Text').prepend(secondcl1Text);
$('.secondcl2Text').prepend(secondcl2Text);
$('.secondcl3Text').prepend(secondcl3Text);
$('.secondcl4Text').prepend(secondcl4Text);
$('.secondcl5Text').prepend(secondcl5Text);
$('.thirdclTitle').prepend(thirdclTitle);
$('.thirdcl1Text').prepend(thirdcl1Text);
$('.thirdcl2Text').prepend(thirdcl2Text);
$('.thirdcl3Text').prepend(thirdcl3Text);
$('.thirdcl4Text').prepend(thirdcl4Text);
$('.thirdcl5Text').prepend(thirdcl5Text);
$('.fourthclTitle').prepend(fourthclTitle);
$('.fourthcl1Text').prepend(fourthcl1Text);
$('.fourthcl2Text').prepend(fourthcl2Text);
$('.fourthcl3Text').prepend(fourthcl3Text);
$('.fourthcl4Text').prepend(fourthcl4Text);
$('.fourthcl5Text').prepend(fourthcl5Text);
$('.fifthclTitle').prepend(fifthclTitle);
$('.fifthcl1Text').prepend(fifthcl1Text);
$('.fifthcl2Text').prepend(fifthcl2Text);
$('.fifthcl3Text').prepend(fifthcl3Text);
$('.fifthcl4Text').prepend(fifthcl4Text);
$('.fifthcl5Text').prepend(fifthcl5Text);


/*ABOUT PAGE*/
$('.abtTitle').prepend(abtTitle);
$('.headerp1').prepend(headerp1);
$('.headerp2').prepend(headerp2);
$('.firstAbtTitle').prepend(firstAbtTitle);
$('.firstAbtText').prepend(firstAbtText);
$('.secondAbtTitle').prepend(secondAbtTitle);
$('.secondAbtText').prepend(secondAbtText);
$('.thirdAbtTitle').prepend(thirdAbtTitle);
$('.thirdAbtText').prepend(thirdAbtText);
$('.abtHeader').prepend(abtHeader);


/*EXTRA PAGE*/
$('.otherTitle').prepend(otherTitle);
$('.otherHeader').prepend(otherHeader);
$('.otherSubHeader').prepend(otherSubHeader);
$('.card1Title').prepend(card1Title);
$('.card1Text').prepend(card1Text);
$('.card2Title').prepend(card2Title);
$('.card2Text').prepend(card2Text);
$('.card3Title').prepend(card3Title);
$('.card3Text').prepend(card3Text);
$('.card4Title').prepend(card4Title);
$('.card4Text').prepend(card4Text);