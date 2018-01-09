//

let _displayinfo = document.getElementById('informationArea');


function buildInfo(infoarray) {

  let writestuff = "";

  for (let p of infoarray) {
    writestuff += '<p>' + p + '</p>';
  }

  $('#informationArea').empty().append(writestuff);
};

function buildInfoList(infoarray) {

  let writestuff = "<ul> ";

  for (let p of infoarray) {
    writestuff += '<li>' + p + '</li>';
  }

  writestuff += '</ul></p>';

  console.log(writestuff);
  //so the following line is append and not empty append because all lists are going to need headers, that i can set when i call the function
  //in the document listen area
  $('#informationArea').append(writestuff);
};

/* ***********************************************************

THE DOCUMENT LISTENER, THE AREA ON WHICH EVERYTHING GETS CALLED, ALL OF THAT IS DOWN BELOW THIS COMMENT ALL FUNCTIONS GO ABOVE

*********************************************************** */
$(document).click(function(event) {

  var current = event.target.id;

  //general about builder
  if (current == 'about') {
    buildInfo(about);
  }

  //specific for the About IMD page
  else if (current == 'IMDcourseList') {
    $('#informationArea').empty().append("<p><h1>Course List</h1>");
    buildInfoList(IMDcourseList);
  }

  else if (current == 'scheduleList') {
    buildInfo(scheduleList);
  }

  //Specific Prof page variables
  else if (current == 'coursesTaught') {
    $('#informationArea').empty().append("<p><h1>Course Taught</h1>");
    buildInfoList(coursesTaught);
  }

  else if (current == 'contact') {
    buildInfo(contact);
  }

  // course variables

  else if (current == 'topics'){
    $('#informationArea').empty().append("<p><h1>Course Content</h1>");
    buildInfoList(topics);
  }

  else if (current == 'prof') {
    buildInfo(prof);
  }

  else if (current == 'grading'){
    $('#informationArea').empty().append("<p><h1>Grading Scheme</h1>");
    buildInfoList(grading);
  }



});
