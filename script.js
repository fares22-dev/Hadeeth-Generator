window.onload=()=>{
  preparecontainer();
  goloading();
  setTimeout(()=>{
  stploading()
  },1500);
  
  setTimeout(() => {
    gethadith()
  }, 1400);

}
//!SELECTING A RANDOM BOOK

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
  //!FETCHING A RANDOM HADITH FROM IT 
  
  gethadith=() => {
  const randbook=getRandomNumber(1,9);


let selectedBook;
let max ;
let refrence='im the refrence';
  switch (randbook) {
    case 1:
      selectedBook = 'abu-daud';
      max=4590;
      refrence="سنن أبي داود"
      break;
    case 2:
      selectedBook = 'ahmad';
      max=26363;
      refrence="مسند أحمد"
      break;
    case 3:
      selectedBook = 'bukhari';
      refrence="صحيح البخاري"
      max=7008;
      break;
    case 4:
      selectedBook = 'darimi';
      refrence="سنن الدارمي"
      max=3367;
      break;
    case 5:
      selectedBook = 'ibnu-majah';
      refrence="سنن ابن ماجه"
      max=4331;
      break;

    case 6:
      selectedBook = 'malik';
      refrence="موطأ الإمام مالك"
      max=1594;
      break;
    case 7:
      selectedBook = 'muslim';
      refrence="صحيح مسلم"
      max=5362;
      break;
    case 8:
    selectedBook = 'nasai';
    refrence="سنن النسائي"
      max=5662;
        break;
    case 9:
    selectedBook = 'tirmidzi';
    refrence="سنن الترمذي"
    max=3891
        break;
    default:
      selectedBook = 'bukhari';
      refrence="صحيح البخاري"
      max=7008;
  }
  let randhadith = getRandomNumber(1, max);
  const fetchdata = async () => {
    let response = await fetch("books/" + selectedBook + ".json");
    let data = await response.json();
    while ((data[randhadith]) && (data[randhadith].arab.length > 600) ){
      randhadith = getRandomNumber(1, max);
    }
    let hadithcotainer=document.querySelector(".yo");
    let docrefrence=document.createElement("p");
    docrefrence.textContent="-"+refrence
    docrefrence.classList.add("refrence");
    while( (!((data.hasOwnProperty(randhadith))&& (data[randhadith].arab.length<600)))){
      randhadith=getRandomNumber(1,1000)
    }
    console.log("im fetching hadith nmber ",randhadith,"form ",selectedBook,"and the length is ",data[randhadith].arab.length)
       hadithcotainer.textContent = data[randhadith].arab + '.';
    hadithcotainer.appendChild(docrefrence)
  };
  fetchdata();
}

preparecontainer=()=>{
let hadithcotainer=document.querySelector(".yo");
hadithcotainer.textContent=""
hadithcotainer.style.backgroundColor="#0e7c7b";
}

goloading=()=>{
  let loader=document.querySelector(".dot-spinner");
loader.style.visibility="visible";
}
stploading=()=>{
  let loader=document.querySelector(".dot-spinner");
  let temp=document.querySelector(".yo");
  temp.style.backgroundColor="#d4f4dd"



  loader.style.visibility="hidden";
}




let mybtn=document.getElementById("getnew")
mybtn.addEventListener("click",()=>{
preparecontainer();
goloading();
setTimeout(()=>{
stploading()
},1500);
setTimeout(() => {
  let temp=document.querySelector(".yo");
  temp.style.backgroundColor=" #d4f4dd"
}, 1400);
setTimeout(() => {
  gethadith()
}, 1350);




  









})




  



