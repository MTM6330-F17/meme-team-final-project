

//NOTES ON VARIABLES - PAGE SPECIFIC VARIABLES HAVE TO BE SET ****BEFORE**** ADDING THE SCRIPT

let _displayinfo = document.getElementById('informationArea');


function buildInfo(infoarray){

    let writestuff = "";

    for(let p of infoarray){
        writestuff  += '<p>' + p + '</p>';
    }
    _displayinfo.innerHTML = writestuff;
};

function buildInfoList(infoarray){

    let writestuff = "<ul> ";


    for(let p of infoarray){
        writestuff  += '<li>' + p + '<li>';
    }

    writestuff  += '</ul>';
    _displayinfo.innerHTML = writestuff;
};


$("div").click( function(e){
  current = e.target.getAttribute('id');

  if (e.target.getAttribute('class') === 'infoPara'){

    buildInfo(current);

  } else if (e.target.getAttribute('class') === 'infoList'){

    buildInfoList(current);

  }

});
