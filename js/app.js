// Start Jquery Area

$(document).ready(function(){
    
    // Start Room Section
    $('.roompopup').magnificPopup({
        type: 'image'
        // other options
      });

    // End Room Section
});

// End Jquery Area


// Start Header

// start nav bar 
function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    // console.log("hi");
    // console.log(this.nextElementSibling);
    // console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = document.getElementsByTagName('a');
    getlinks = document.querySelectorAll(".mydropdown a");
    // console.log(getlinks);

    for(var x = 0; x < getlinks.length; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block";
        }else{
            getlinks[x].style.display = "none";
        }
    }

    // console.log(filter);
}
// end nav bar 

// start auto background
function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);
// end auto background

// End Header 

// Start Testimonial Section

const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdata = [
    {
        name:"Rich Star Restaurent",
        postion:"Our Outlet",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"48 Sky Bar Cafe",
        postion:"Our Partner",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"52 Beach Hotel",
        postion:"Our Branch",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"Cool Land Swimming Pool",
        postion:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"Chaung Thar SPA",
        postion:"Our Bussiness",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

];

let idx = 0;

function updatetestestimonia(){

    // getcompanyname.textContent = testimonialdata[idx].name;
    // getrole.textContent = testimonialdata[idx].postion;
    // gettestimonial.textContent = testimonialdata[idx].text;

    const {name,postion,text} = testimonialdata[idx];

    // console.log(name);
    // console.log(postion);
    // console.log(text);

    getcompanyname.textContent = name;
    getrole.textContent = postion;
    gettestimonial.textContent = text;

    idx++;

    if(idx > testimonialdata.length - 1){
        idx = 0
    }
}

updatetestestimonia();
setInterval(updatetestestimonia,10000);

// End Testimonial Section

// 3TM