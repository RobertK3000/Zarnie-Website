// References to DOM Elements

const footprints = document.querySelector(".footprint-master-container");
const book = document.querySelector("#book");
const bookFeel = document.querySelector("#book-feel");
// const bookFeelIndex = document.querySelector(".books-index-content")

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const prevBtnFeel = document.querySelector("#prev-btn-feel");
const nextBtnFeel = document.querySelector("#next-btn-feel");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");

const paperFeel1 = document.querySelector("#feel-p1");
const paperFeel2 = document.querySelector("#feel-p2");
const paperFeel3 = document.querySelector("#feel-p3");
const paperFeel4 = document.querySelector("#feel-p4");
const paperFeel5 = document.querySelector("#feel-p5");
const paperFeel6 = document.querySelector("#feel-p6");
const paperFeel7 = document.querySelector("#feel-p7");
const paperFeel8 = document.querySelector("#feel-p8");
const paperFeel9 = document.querySelector("#feel-p9");
const paperFeel10 = document.querySelector("#feel-p10");
const paperFeel11 = document.querySelector("#feel-p11");
const paperFeel12 = document.querySelector("#feel-p12");
const paperFeel13 = document.querySelector("#feel-p13");
const paperFeel14 = document.querySelector("#feel-p14");
const paperFeel15 = document.querySelector("#feel-p15");
const paperFeel16 = document.querySelector("#feel-p16");
const paperFeel17 = document.querySelector("#feel-p17");
const paperFeel18 = document.querySelector("#feel-p18");
const paperFeel19 = document.querySelector("#feel-p19");
const paperFeel20 = document.querySelector("#feel-p20");
const paperFeel21 = document.querySelector("#feel-p21");
const paperFeel22 = document.querySelector("#feel-p22");
const paperFeel23 = document.querySelector("#feel-p23");
const paperFeel24 = document.querySelector("#feel-p24");

const relationshipsBtn = document.querySelector(".relationships-btn");
const feelingsBtn = document.querySelector(".feelings-btn");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

prevBtnFeel.addEventListener("click", goPrevPageFeel);
nextBtnFeel.addEventListener("click", goNextPageFeel);

relationshipsBtn.addEventListener("click", openRelationshipsBook)
feelingsBtn.addEventListener("click", openFeelingsBook)

// Business Logic
let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

let currentLocationFeel = 1;
let numOfPapersFeel = 24;
let maxLocationFeel = numOfPapersFeel + 1;

// Changing Page Functions
function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-14vw)";
    nextBtn.style.transform = "translateX(14vw)"
}

function openBookFeel() {
    bookFeel.style.transform = "translateX(50%)";
    prevBtnFeel.style.transform = "translateX(-14vw)";
    nextBtnFeel.style.transform = "translateX(14vw)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function closeBookFeel(isAtBeginning) {
  if(isAtBeginning) {
      bookFeel.style.transform = "translateX(0%)";
  } else {
      bookFeel.style.transform = "translateX(100%)";
  }
  
  prevBtnFeel.style.transform = "translateX(0px)";
  nextBtnFeel.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");

                setTimeout(() => {
                  paper1.style.zIndex = -8;
                }, 250);

                prevBtn.classList.remove("hidden") 
                break;
            case 2:
                paper2.classList.add("flipped");

                setTimeout(() => {
                  paper2.style.zIndex = -7;
                }, 250);

                break;
            case 3:
                paper3.classList.add("flipped");

                setTimeout(() => {
                  paper3.style.zIndex = -6;
                }, 250);

                break;
            case 4:
                paper4.classList.add("flipped");
                
                setTimeout(() => {
                  paper4.style.zIndex = -5;
                }, 250);

                break;
            case 5:
                paper5.classList.add("flipped");

                setTimeout(() => {
                  paper5.style.zIndex = -4;
                }, 250);

                break;
            case 6:
                paper6.classList.add("flipped");

                setTimeout(() => {
                  paper6.style.zIndex = -3;
                }, 250);

                break;
            case 7:
                paper7.classList.add("flipped");

                setTimeout(() => {
                  paper7.style.zIndex = -2;
                }, 250);

                break;                
            case 8:
                paper8.classList.add("flipped");

                setTimeout(() => {
                  paper8.style.zIndex = -1;
                }, 250);

                closeBook(false);
                nextBtn.classList.add("hidden") 
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goNextPageFeel() {
  if(currentLocationFeel < maxLocationFeel) {
      switch(currentLocationFeel) {
          case 1:
              openBookFeel();
              paperFeel1.classList.add("flipped");

              setTimeout(() => {
                paperFeel1.style.zIndex = -24;
              }, 250);
              
              prevBtnFeel.classList.remove("hidden") 
              break;
          case 2:
              paperFeel2.classList.add("flipped");

              setTimeout(() => {
                paperFeel2.style.zIndex = -23;
              }, 250);

              break;
          case 3:
              paperFeel3.classList.add("flipped");

              setTimeout(() => {
                paperFeel3.style.zIndex = -22;
              }, 250);

              break;
          case 4:
              paperFeel4.classList.add("flipped");
              
              setTimeout(() => {
                paperFeel4.style.zIndex = -21;
              }, 250);

              break;
          case 5:
              paperFeel5.classList.add("flipped");

              setTimeout(() => {
                paperFeel5.style.zIndex = -20;
              }, 250);

              break;
          case 6:
              paperFeel6.classList.add("flipped");

              setTimeout(() => {
                paperFeel6.style.zIndex = -19;
              }, 250);

              break;
          case 7:
              paperFeel7.classList.add("flipped");

              setTimeout(() => {
                paperFeel7.style.zIndex = -18;
              }, 250);

              break;                
          case 8:
              paperFeel8.classList.add("flipped");

              setTimeout(() => {
                paperFeel8.style.zIndex = -17;
              }, 250);

              break;
          case 9:
              paperFeel9.classList.add("flipped");

              setTimeout(() => {
                paperFeel9.style.zIndex = -16;
              }, 250);

              break;
          case 10:
              paperFeel10.classList.add("flipped");

              setTimeout(() => {
                paperFeel10.style.zIndex = -15;
              }, 250);

              break;
          case 11:
              paperFeel11.classList.add("flipped");

              setTimeout(() => {
                paperFeel11.style.zIndex = -14;
              }, 250);

              break;
          case 12:
              paperFeel12.classList.add("flipped");

              setTimeout(() => {
                paperFeel12.style.zIndex = -13;
              }, 250);

              break;
          case 13:
              paperFeel13.classList.add("flipped");

              setTimeout(() => {
                paperFeel13.style.zIndex = -12;
              }, 250);

              break;
          case 14:
              paperFeel14.classList.add("flipped");

              setTimeout(() => {
                paperFeel14.style.zIndex = -11;
              }, 250);

              break;
          case 15:
              paperFeel15.classList.add("flipped");

              setTimeout(() => {
                paperFeel15.style.zIndex = -10;
              }, 250);

              break;
          case 16:
              paperFeel16.classList.add("flipped");

              setTimeout(() => {
                paperFeel16.style.zIndex = -9;
              }, 250);

              break;
          case 17:
              paperFeel17.classList.add("flipped");

              setTimeout(() => {
                paperFeel17.style.zIndex = -8;
              }, 250);

              break;
          case 18:
              paperFeel18.classList.add("flipped");

              setTimeout(() => {
                paperFeel18.style.zIndex = -7;
              }, 250);

              break;
          case 19:
              paperFeel19.classList.add("flipped");

              setTimeout(() => {
                paperFeel19.style.zIndex = -6;
              }, 250);

              break;
          case 20:
              paperFeel20.classList.add("flipped");

              setTimeout(() => {
                paperFeel20.style.zIndex = -5;
              }, 250);

              break;
          case 21:
              paperFeel21.classList.add("flipped");

              setTimeout(() => {
                paperFeel21.style.zIndex = -4;
              }, 250);

              break;
          case 22:
              paperFeel22.classList.add("flipped");

              setTimeout(() => {
                paperFeel22.style.zIndex = -3;
              }, 250);

              break;
          case 23:
              paperFeel23.classList.add("flipped");

              setTimeout(() => {
                paperFeel23.style.zIndex = -2;
              }, 250);
              break;
          case 24:
              paperFeel24.classList.add("flipped");

              setTimeout(() => {
                paperFeel24.style.zIndex = -1;
              }, 250);

              closeBookFeel(false);
              nextBtnFeel.classList.add("hidden")

              break;
          default:
              throw new Error("unkown state");
      }
      currentLocationFeel++;
  }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");

                setTimeout(() => {
                  paper1.style.zIndex = 8;
                }, 0);


                prevBtn.classList.add("hidden") 
                break;
            case 3:
                paper2.classList.remove("flipped");

                setTimeout(() => {
                  paper2.style.zIndex = 7;
                }, 0);


                break;
            case 4:
                paper3.classList.remove("flipped");

                setTimeout(() => {
                  paper3.style.zIndex = 6;
                }, 0);


                break;
            case 5:
                paper4.classList.remove("flipped");

                setTimeout(() => {
                  paper4.style.zIndex = 5;
                }, 0);

                break;
            case 6:
                paper5.classList.remove("flipped");

                setTimeout(() => {
                  paper5.style.zIndex = 4;
                }, 0);

                break;
            case 7:
                paper6.classList.remove("flipped");

                setTimeout(() => {
                  paper6.style.zIndex = 3;
                }, 0);

                break;
            case 8:
                paper7.classList.remove("flipped");

                setTimeout(() => {
                  paper7.style.zIndex = 2;
                }, 0);

                break;          
            case 9:
                openBook();
                paper8.classList.remove("flipped");

                setTimeout(() => {
                  paper8.style.zIndex = 1;
                }, 0);

                nextBtn.classList.remove("hidden") 
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

function goPrevPageFeel() {
  if(currentLocationFeel > 1) {
      switch(currentLocationFeel) {
          case 2:
              closeBookFeel(true);
              paperFeel1.classList.remove("flipped");

              setTimeout(() => {
                paperFeel1.style.zIndex = 24;
              }, 0);


              prevBtnFeel.classList.add("hidden") 
              break;
          case 3:
              paperFeel2.classList.remove("flipped");

              setTimeout(() => {
                paperFeel2.style.zIndex = 23;
              }, 0);


              break;
          case 4:
              paperFeel3.classList.remove("flipped");

              setTimeout(() => {
                paperFeel3.style.zIndex = 22;
              }, 0);


              break;
          case 5:
              paperFeel4.classList.remove("flipped");

              setTimeout(() => {
                paperFeel4.style.zIndex = 21;
              }, 0);

              break;
          case 6:
              paperFeel5.classList.remove("flipped");

              setTimeout(() => {
                paperFeel5.style.zIndex = 20;
              }, 0);

              break;
          case 7:
              paperFeel6.classList.remove("flipped");

              setTimeout(() => {
                paperFeel6.style.zIndex = 19;
              }, 0);

              break;
          case 8:
              paperFeel7.classList.remove("flipped");

              setTimeout(() => {
                paperFeel7.style.zIndex = 18;
              }, 0);

              break; 
          case 9:
              paperFeel8.classList.remove("flipped");

              setTimeout(() => {
                paperFeel8.style.zIndex = 17;
              }, 0);

              break;
          case 10:
              paperFeel9.classList.remove("flipped");

              setTimeout(() => {
                paperFeel9.style.zIndex = 16;
              }, 0);

              break;
          case 11:
              paperFeel10.classList.remove("flipped");

              setTimeout(() => {
                paperFeel10.style.zIndex = 15;
              }, 0);


              break;
          case 12:
              paperFeel11.classList.remove("flipped");

              setTimeout(() => {
                paperFeel11.style.zIndex = 14;
              }, 0);


              break;
          case 13:
              paperFeel12.classList.remove("flipped");

              setTimeout(() => {
                paperFeel12.style.zIndex = 13;
              }, 0);

              break;
          case 14:
              paperFeel13.classList.remove("flipped");

              setTimeout(() => {
                paperFeel13.style.zIndex = 12;
              }, 0);

              break;
          case 15:
              paperFeel14.classList.remove("flipped");

              setTimeout(() => {
                paperFeel14.style.zIndex = 11;
              }, 0);

              break;
          case 16:
              paperFeel15.classList.remove("flipped");

              setTimeout(() => {
                paperFeel15.style.zIndex = 10;
              }, 0);

              break; 
          case 17:
              paperFeel16.classList.remove("flipped");

              setTimeout(() => {
                paperFeel16.style.zIndex = 9;
              }, 0);

              break; 
          case 18:
              paperFeel17.classList.remove("flipped");

              setTimeout(() => {
                paperFeel17.style.zIndex = 8;
              }, 0);

              break;     
          case 19:
              paperFeel18.classList.remove("flipped");

              setTimeout(() => {
                paperFeel18.style.zIndex = 7;
              }, 0);

              break; 
          case 20:
              paperFeel19.classList.remove("flipped");

              setTimeout(() => {
                paperFeel19.style.zIndex = 6;
              }, 0);

              break;  
          case 21:
              paperFeel20.classList.remove("flipped");

              setTimeout(() => {
                paperFeel20.style.zIndex = 5;
              }, 0);

              break;  
          case 22:
              paperFeel21.classList.remove("flipped");

              setTimeout(() => {
                paperFeel21.style.zIndex = 4;
              }, 0);

              break;  
          case 23:
              paperFeel22.classList.remove("flipped");

              setTimeout(() => {
                paperFeel22.style.zIndex = 3;
              }, 0);

              break;    
          case 24:
              paperFeel23.classList.remove("flipped");

              setTimeout(() => {
                paperFeel23.style.zIndex = 2;
              }, 0);

              break;                          
          case 25:
              openBookFeel();
              paperFeel24.classList.remove("flipped");

              setTimeout(() => {
                paperFeel24.style.zIndex = 1;
              }, 0);

              nextBtnFeel.classList.remove("hidden") 
              break;
          default:
              throw new Error("unkown state");
      }

      currentLocationFeel--;
  }
}

// Open Book Functions

function openRelationshipsBook() {
  footprints.classList.add("remove");
  relationshipsBtn.classList.add("remove");
  feelingsBtn.classList.add("remove");
  book.classList.remove("remove");
  prevBtn.classList.remove("remove");
  nextBtn.classList.remove("remove");
  closeBtn.classList.remove("remove");
  // bookFeelIndex.classList.add("remove");
  // console.log("Hello")
}

function openFeelingsBook() {
  footprints.classList.add("remove");
  relationshipsBtn.classList.add("remove");
  feelingsBtn.classList.add("remove");
  bookFeel.classList.remove("remove");
  prevBtnFeel.classList.remove("remove");
  nextBtnFeel.classList.remove("remove");

  // closeBtnFeel.classList.remove("remove");
  // bookFeelIndex.classList.add("remove");
  // console.log("Hello")
}

// Close Book Functions

function closeRelationshipsBook() {
  footprints.classList.remove("remove");
  relationshipsBtn.classList.remove("remove");
  feelingsBtn.classList.remove("remove");
  book.classList.add("remove");
  prevBtn.classList.add("remove");
  nextBtn.classList.add("remove");
  console.log("close-relationship")
}

function closeFeelingsBook() {
  footprints.classList.remove("remove");
  relationshipsBtn.classList.remove("remove");
  feelingsBtn.classList.remove("remove");
  bookFeel.classList.add("remove");
  prevBtnFeel.classList.add("remove");
  nextBtnFeel.classList.add("remove");
  console.log("close-feel")
}

// Books dropdown

const dropdownIcon = document.querySelector(".fa-grip-lines");
const dropdownMenu = document.querySelector(".dropdown");

dropdownIcon.addEventListener("click", removeDropdown);

function removeDropdown() {
  dropdownMenu.classList.toggle("remove")
}

window.addEventListener('click', function(event) {
  if (event.target != dropdownIcon) {
      dropdownMenu.classList.add("remove");
  }
});

const dropdownMenuItem = document.querySelector(".dropdown-menu-item");

dropdownMenuItem.addEventListener("click", event => {
  closeFeelingsBook();
  closeRelationshipsBook();
});