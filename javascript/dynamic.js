// XMLHttpRequest(AJAX Call)

function getJson(file,callback){
var xhr_req=new XMLHttpRequest();
xhr_req.overrideMimeType("application/json");
xhr_req.open("GET",file,true);
xhr_req.onreadystatechange=function(){
 if(xhr_req.readyState===4 && xhr_req.status===200){
      callback(xhr_req.responseText);
 }
}
xhr_req.send();
}
getJson("./Data/dynamicdata.json",function(text){
var d=JSON.parse(text);
console.log(d);
t_details(d.details);
d_career(d.career);
d_education(d.education);
d_technicalskills(d.technicalskills);
d_contactdetails(d.contactdetails);
})

var main=document.querySelector(".parent-div");
var child=document.createElement("div");
child.setAttribute("class","child");
var h1=document.createElement("h1");
h1.textContent="Resume";
h1.appendChild(document.createElement("hr"));
child.appendChild(h1);
main.appendChild(child);
function t_details(SDC){
	var image=document.createElement("img");
	image.src=SDC.image;
	image.alt="profile";
	image.setAttribute("id","image");
	child.appendChild(image);
	
	var name=document.createElement("h2");
	name.textContent=SDC.name;
	name.setAttribute("id","name");
	child.appendChild(name);

    var a=document.createElement("h3");
	a.textContent=SDC.email;
	a.setAttribute("id","email");
	child.appendChild(a);

	var h2=document.createElement("h3");
	h2.textContent=SDC.phoneno;
	h2.setAttribute("id","phone");
	child.appendChild(h2);
	h2.appendChild(document.createElement("hr"));

	// var ul=document.createElement("ol");
	// for (var i=0;i<SDC.content.length;i++){
	// 	var li=document.createElement("li");
	// 	li.textContent=SDC.content[i];
	// 	ul.appendChild(li);
	// }
	// child.appendChild(ul);



}
function d_career(t){
	var main=document.querySelector(".parent-div");
var child=document.createElement("div");
child.setAttribute("class","career");
var h1=document.createElement("h1");
h1.textContent="Career Objective:";
h1.appendChild(document.createElement("hr"));
child.appendChild(h1);
main.appendChild(child);

var v=document.createElement("h3");
v.textContent=t.objective;
child.appendChild(v);
v.appendChild(document.createElement("hr"));
}
function d_education(t){
	var child=document.createElement("div");
    child.setAttribute("class","edu");
    var h1=document.createElement("h1");
    h1.textContent="Education Details:";
    h1.appendChild(document.createElement("hr"));
    child.appendChild(h1);
    main.appendChild(child);
   var table=document.createElement("table");
    var row="";
    for (var i in t){
    	row+="<tr><td>"+t[i].Sno+"</td><td>"+t[i].Institute+"</td><td>"+t[i].Qualification+"</td><td>"+t[i].Percentage+"</td><td>"+t[i].Duration+"</td></tr>";
    }

table.innerHTML=row;
child.appendChild(table);
}


function d_technicalskills(s){
	var child=document.createElement("div");
    child.setAttribute("class","tech");
    var h1=document.createElement("h1");
    h1.textContent="Technical Skills:";
    h1.appendChild(document.createElement("hr"));
    child.appendChild(h1);
    main.appendChild(child);
	 var table=document.createElement("table");
    var row="";
    for (var i in s){
    	row+="<tr><td>"+s[i].skill+"</td><td>"+s[i].Proficiency+"</td></tr>";
    }

table.innerHTML=row;
child.appendChild(table);
}

function d_contactdetails(s){
	var main=document.querySelector(".parent-div");
var child=document.createElement("div");
child.setAttribute("class","contact");
var h1=document.createElement("h1");
h1.textContent="Contact Details:";
 h1.appendChild(document.createElement("hr"));
child.appendChild(h1);
main.appendChild(child);

var h2=document.createElement("h3");
	h2.textContent=s.PhoneNo;
	child.appendChild(h2);

	 var a=document.createElement("h3");
	a.textContent=s.Email;
	child.appendChild(a);

}
