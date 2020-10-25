

$(document).ready(function(e){
    
    $('.owl-carousel').owlCarousel({
        loop:false,
        // rewind:true,
        margin:20,
        center:false,
        autoplayHoverPause:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
})

window.addEventListener('scroll', function(){
    let topNav = document.querySelector('.TopNavigation')

    topNav.classList.toggle('sticky', window.scrollY > 0)
 
    topNav.classList.toggle('right-navbar', window.scrollY> 500)
})


//---------- API---------------


 
//script buat tanggal dari karantina
let libur = new Date('3/16/2020').getTime();
let now = new Date().getTime();
let datenow =`${Math.floor(now - libur)/ (1000 * 3600 * 24)}`.slice(0,3);

let school = document.querySelector('.days')

school.innerHTML = `Last School: ${datenow} days ago`
//DOCUMENT

//ISI KOTAK
let Box1 = document.getElementById('result-two');
let Box2 = document.getElementById('result-three');
let Box3 = document.getElementById('result-four');
let Box4 = document.getElementById('result-five');


let SearchInput = document.getElementById('SearchInput')
let negara = document.querySelector('.negara')

//UNIVERSAL CORONA API
SearchInput.addEventListener('keypress', function(e){
    
   if(e.key === 'Enter'){

    getRepos()
    e.value = ''
    SearchInput.value = ''
   }
   

})

async function getRepos(){
    const country = "https://covid19.mathdro.id/api/countries/";
    const SearchInputValue = SearchInput.value;    //track lastupdatenya
    //confirmed
    //recovered
    //country
   
    
    const response = await fetch(`${country}${SearchInputValue}`);
    const result = await response.json();
    //add values here
    negara.innerHTML=SearchInputValue
     Box1.innerHTML=result.confirmed.value;
     Box2.innerHTML=result.recovered.value;
     Box3.innerHTML=result.deaths.value;
     Box4.innerHTML=(result.lastUpdate).slice(0,10);

}


//Scroll
document.read
$('.links').on('click',function(e){

    if(e.hash != ''){
        e.preventDefaultBehaviour()
    
    const hash = this.hash

    $('html,body').animate({
        scrollTop: $(hash).offset().top
    },100)
    }

})
