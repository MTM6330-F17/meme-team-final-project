var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//NOTES ON VARIABLES - PAGE SPECIFIC VARIABLES HAVE TO BE SET ****BEFORE**** ADDING THE SCRIPT

let _displayinfo = document.getElementById('informationArea');


function buildInfo(infoarray){

    let writestuff = "";

    for(let p of infoarray){
        writestuff  += '<p>' + p + '</p>';
    }
    _displayinfo.innerHTML = writestuff;
}


_infoButton1.addEventListener('click', function(e){
  current = e.target.getAttribute('id');

  if (e.target.getAttribute('class') === 'infoButton'){

    buildInfo(current);

  }

}
