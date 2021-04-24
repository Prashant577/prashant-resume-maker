function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')

    newNode.classList.add("mt-2")

    newNode.setAttribute("placeholder","Enter Here")

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewWEField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')

    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder","Enter Here")

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewProField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('proField')

    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder","Enter Here")

    let proOb = document.getElementById("pro")
    let proAddButtonOb = document.getElementById("proAddButton")

    proOb.insertBefore(newNode,proAddButtonOb);
}

function addNewSkillField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skillField')

    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder","Enter Here")

    let skillOb = document.getElementById("skill")
    let skillAddButtonOb = document.getElementById("skillAddButton")

    skillOb.insertBefore(newNode,skillAddButtonOb);
}

function addNewHobbyField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('hobbyField')

    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder","Enter Here")

    let hobbyOb = document.getElementById("hobby")
    let hobbyAddButtonOb = document.getElementById("hobbyAddButton")

    hobbyOb.insertBefore(newNode,hobbyAddButtonOb);
}

function addNewLangField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('langField')

    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder","Enter Here")

    let langOb = document.getElementById("lang")
    let langAddButtonOb = document.getElementById("langAddButton")

    langOb.insertBefore(newNode,langAddButtonOb);
}


/* Generating CV */

function generateCV(){

    //for name

  let nameField = document.getElementById("nameField").value;
   let nameT1 = document.getElementById("nameT1");
   nameT1.innerHTML = nameField;

   //direct method

   document.getElementById("nameT2").innerHTML = nameField

   //for contacts

   let contactField = document.getElementById("contactField").value
   let contactT = document.getElementById("contactT")
    contactT.innerHTML = contactField
    
    //for address

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value
    
    //for email

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value

    //for facebook

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value

    //github

    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value

    // linked in

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value

    //skill

    let skill = document.getElementsByClassName("skillField")
    let str = "";
    for(let s of skill){
        str = str + `<li> ${s.value} </li>`
    }
    document.getElementById("skillT").innerHTML = str;

    //for objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value

    //for academic quality
    let aqs = document.getElementsByClassName("aqField")
    let str1 = "";  
    for(let aq of aqs){
        str1 = str1 + `<li> ${aq.value} </li>`
    }
    document.getElementById("aqT").innerHTML = str1;

    // for work expereince

    let wes = document.getElementsByClassName("weField")
    let str2 = "";
    for(let we of wes){
        str2 = str2 + `<li> ${we.value} </li>`
    }
    document.getElementById("weT").innerHTML = str2;

    // project

    let project = document.getElementsByClassName("proField")
    let str3 = "";
    for(let p of project){
        str3 = str3 + `<li> ${p.value} </li>`
    }
    document.getElementById("projectT").innerHTML = str3;

    // Hobbies

    let hobby = document.getElementsByClassName("hobbyField")
    let str4 = "";
    for(let h of hobby){
        str4 = str4 + `<li> ${h.value} </li>`
    }
    document.getElementById("hobbyT").innerHTML = str4;

    // Languages

    let lang = document.getElementsByClassName("langField")
    let str5 = "";
    for(let l of lang){
        str5 = str5 + `<li> ${l.value} </li>`
    }
    document.getElementById("languageT").innerHTML = str5;


    //Code for setting the profile photo
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the fetched image to the template
    reader.onloadend = function (){
        document.getElementById("imgTemplate").src = reader.result
    };


    document.getElementById("cv-form").style.display='none'
    document.getElementById("cv-template").style.display="block"
}

/* Function for Printing the CV */
function printCV(){
    window.print();
}