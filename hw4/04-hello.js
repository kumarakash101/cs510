var style = document.createElement('style');
style.type = 'text/css';

style.innerHTML = '.Hcenter {font-weight:bold;font-size: 30px;text-align: center;margin-left: auto; margin-right: auto; display:block;} .pstyle {padding:20px 30%;} p::first-line{font-weight:bold} .center { display: block; margin-top:20px; margin-left: auto; height:150px; margin-right: auto;  border-radius:70% ; }';
document.getElementsByTagName('head')[0].appendChild(style);

var headt = document.createElement("h");
var htext = document.createTextNode("Developer Introduction");

var newt = document.createElement("p");
var text = document.createTextNode(" Hello my name is Akash Kumar, I am a graduate student and its my first class in Web Development. I am extremely excited to learn new things inthe field of web development and implement it. I live in Hillsboro and I work part time. In my free time I like to watch documentries and shortmovies.");

var image = document.createElement("img");


image.src="kumar1.jpg";
image.alt="Akash Kumar's picture";
headt.appendChild(htext);
newt.appendChild(text);
var ele = document.getElementsByTagName("main");
ele[0].appendChild(headt);
ele[0].appendChild(image);
ele[0].appendChild(newt);

document.getElementsByTagName("h")[0].setAttribute('id','htext');
document.getElementsByTagName("p")[0].setAttribute('id', 'para1');

document.getElementsByTagName("img")[0].setAttribute('id', 'img1');

document.getElementById("htext").className='Hcenter';
document.getElementById("img1").className='center';

document.getElementById("para1").className='pstyle';

/*Citation https://eloquentjavascript.net/ */