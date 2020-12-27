let iznos=document.querySelectorAll(".iznos");
let osvojeno=document.querySelector(".osvojeno");
let pitanja=document.querySelector(".pitanja");
let odgovor=document.querySelectorAll(".kviz");
let h1=document.querySelector("h1");
let zagarantovanaSuma1=document.querySelector(".zagarantovanaSuma");
let odustati2=document.querySelector("#odustati");
let takmicar=document.querySelector(".takmicar");
let izlaz1=document.querySelector(".izlaz");


let prvi=14;
let drugi=14;
let zavrsi;
let zavrsi2;
let tacnoResenje=0;

let first1=0;
let one1=0;
let two2=0;
let three3=0;
let four4=0;
let five5=14;

let ponovo;
let opet;

let first10=0;
let one10=0;
let two20=0;
let three30=0;
let four40=0;
let tacnoResenje2=0;
let treci=14;
let cetvrti=14;
let five50=14;

    function promeniVreme(){
        vremeZaOdgovor--;
        tajmer.innerHTML = vremeZaOdgovor;
    }


function postaviPitanje(){
document.Pitanje=document.mojaforma.polje.value;
}
function prikaziPitanje(){
alert("Odgovor je: " + document.Pitanje);
}


$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

//$.getJSON('JSONpitanja.json', function (data) { json_pitanja = data });
var json_pitanja = (function () {
    var json_pitanja = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'JSONpitanja.json',
        'dataType': "json",
        'success': function (data) {
            json_pitanja = data;
        }
    });
    return json_pitanja;
})(); 

let dodataPitanja = json_pitanja.Grupa1Pitanja; 
let dodatiOdgovori1 = json_pitanja.Grupa1Odgovori1;
let dodatiOdgovori2 = json_pitanja.Grupa1Odgovori2;
let dodatiOdgovori3 = json_pitanja.Grupa1Odgovori3;
let dodatiOdgovori4 = json_pitanja.Grupa1Odgovori4;
let tacniOdgovori = json_pitanja.Grupa1TacniOdgovori;

// druga grupa pitanja i odgovora

let dodataPitanja2 = json_pitanja.Grupa2Pitanja;
let dodatiOdgovori5 = json_pitanja.Grupa2Odgovori1;
let dodatiOdgovori6 = json_pitanja.Grupa2Odgovori2;
let dodatiOdgovori7 = json_pitanja.Grupa2Odgovori3;
let dodatiOdgovori8 = json_pitanja.Grupa2Odgovori4;
let tacniOdgovori2 = json_pitanja.Grupa2TacniOdgovori;

// treca grupa pitanja i odgovora

let dodataPitanja3 = json_pitanja.Grupa3Pitanja;
let dodatiOdgovori9 = json_pitanja.Grupa3Odgovori1;
let dodatiOdgovori10 = json_pitanja.Grupa3Odgovori2;
let dodatiOdgovori11 = json_pitanja.Grupa3Odgovori3;
let dodatiOdgovori12 = json_pitanja.Grupa3Odgovori4;
let tacniOdgovori3 = json_pitanja.Grupa3TacniOdgovori;

// cetvrta grupa pitanja i odgovora

let dodataPitanja4 = json_pitanja.Grupa4Pitanja;
let dodatiOdgovori13 = json_pitanja.Grupa4Odgovori1;
let dodatiOdgovori14 = json_pitanja.Grupa4Odgovori2;
let dodatiOdgovori15 = json_pitanja.Grupa4Odgovori3;
let dodatiOdgovori16 = json_pitanja.Grupa4Odgovori4;
let tacniOdgovori4 = json_pitanja.Grupa4TacniOdgovori;

// peta grupa pitanja i odgovora

let dodataPitanja5 = json_pitanja.Grupa5Pitanja;
let dodatiOdgovori17 = json_pitanja.Grupa5Odgovori1;
let dodatiOdgovori18 = json_pitanja.Grupa5Odgovori2;
let dodatiOdgovori19 = json_pitanja.Grupa5Odgovori3;
let dodatiOdgovori20 = json_pitanja.Grupa5Odgovori4;
let tacniOdgovori5 = json_pitanja.Grupa5TacniOdgovori;

// sesta grupa pitanja i odgovora

let dodataPitanja6 = json_pitanja.Grupa6Pitanja;
let dodatiOdgovori21 = json_pitanja.Grupa6Odgovori1;
let dodatiOdgovori22 = json_pitanja.Grupa6Odgovori2;
let dodatiOdgovori23 = json_pitanja.Grupa6Odgovori3;
let dodatiOdgovori24 = json_pitanja.Grupa6Odgovori4;
let tacniOdgovori6 = json_pitanja.Grupa6TacniOdgovori;

// sedma grupa pitanja i odgovora

let dodataPitanja7 = json_pitanja.Grupa7Pitanja;
let dodatiOdgovori25 = json_pitanja.Grupa7Odgovori1;
let dodatiOdgovori26 = json_pitanja.Grupa7Odgovori2;
let dodatiOdgovori27 = json_pitanja.Grupa7Odgovori3;
let dodatiOdgovori28 = json_pitanja.Grupa7Odgovori4;
let tacniOdgovori7 = json_pitanja.Grupa7TacniOdgovori;

// osma grupa pitanja i odgovora

let dodataPitanja8 = json_pitanja.Grupa8Pitanja;
let dodatiOdgovori29 = json_pitanja.Grupa8Odgovori1;
let dodatiOdgovori30 = json_pitanja.Grupa8Odgovori2;
let dodatiOdgovori31 = json_pitanja.Grupa8Odgovori3;
let dodatiOdgovori32 = json_pitanja.Grupa8Odgovori4;
let tacniOdgovori8 = json_pitanja.Grupa8TacniOdgovori;

// deveta grupa pitanja i odgovora

let dodataPitanja9 = json_pitanja.Grupa9Pitanja;
let dodatiOdgovori33 = json_pitanja.Grupa9Odgovori1;
let dodatiOdgovori34 = json_pitanja.Grupa9Odgovori2;
let dodatiOdgovori35 = json_pitanja.Grupa9Odgovori3;
let dodatiOdgovori36 = json_pitanja.Grupa9Odgovori4;
let tacniOdgovori9 = json_pitanja.Grupa9TacniOdgovori;

// deseta grupa pitanja i odgovora

let dodataPitanja10 = json_pitanja.Grupa10Pitanja;
let dodatiOdgovori37 = json_pitanja.Grupa10Odgovori1;
let dodatiOdgovori38 = json_pitanja.Grupa10Odgovori2;
let dodatiOdgovori39 = json_pitanja.Grupa10Odgovori3;
let dodatiOdgovori40 = json_pitanja.Grupa10Odgovori4;
let tacniOdgovori10 = json_pitanja.Grupa10TacniOdgovori;

// 11 grupa pitanja i odgovora

let dodataPitanja11 = json_pitanja.Grupa11Pitanja;
let dodatiOdgovori41 = json_pitanja.Grupa11Odgovori1;
let dodatiOdgovori42 = json_pitanja.Grupa11Odgovori2;
let dodatiOdgovori43 = json_pitanja.Grupa11Odgovori3;
let dodatiOdgovori44 = json_pitanja.Grupa11Odgovori4;
let tacniOdgovori11 = json_pitanja.Grupa11TacniOdgovori;

// 12 grupa pitanja i odgovora

let dodataPitanja12 = json_pitanja.Grupa12Pitanja;
let dodatiOdgovori45 = json_pitanja.Grupa12Odgovori1;
let dodatiOdgovori46 = json_pitanja.Grupa12Odgovori2;
let dodatiOdgovori47 = json_pitanja.Grupa12Odgovori3;
let dodatiOdgovori48 = json_pitanja.Grupa12Odgovori4;
let tacniOdgovori12 = json_pitanja.Grupa12TacniOdgovori;

// 13 grupa pitanja i odgovora

let dodataPitanja13 = json_pitanja.Grupa13Pitanja;
let dodatiOdgovori49 = json_pitanja.Grupa13Odgovori1;
let dodatiOdgovori50 = json_pitanja.Grupa13Odgovori2;
let dodatiOdgovori51 = json_pitanja.Grupa13Odgovori3;
let dodatiOdgovori52 = json_pitanja.Grupa13Odgovori4;
let tacniOdgovori13 = json_pitanja.Grupa13TacniOdgovori;

// 14 grupa pitanja i odgovora

let dodataPitanja14 = json_pitanja.Grupa14Pitanja;
let dodatiOdgovori53 = json_pitanja.Grupa14Odgovori1;
let dodatiOdgovori54 = json_pitanja.Grupa14Odgovori2;
let dodatiOdgovori55 = json_pitanja.Grupa14Odgovori3;
let dodatiOdgovori56 = json_pitanja.Grupa14Odgovori4;
let tacniOdgovori14 = json_pitanja.Grupa14TacniOdgovori;

// 15 grupa pitanja i odgovora

let dodataPitanja15 = json_pitanja.Grupa15Pitanja;
let dodatiOdgovori57 = json_pitanja.Grupa15Odgovori1;
let dodatiOdgovori58 = json_pitanja.Grupa15Odgovori2;
let dodatiOdgovori59 = json_pitanja.Grupa15Odgovori3;
let dodatiOdgovori60 = json_pitanja.Grupa15Odgovori4;
let tacniOdgovori15 = json_pitanja.Grupa15TacniOdgovori;

// 16 grupa pitanja i odgovora

let dodataPitanja16 = json_pitanja.Grupa16Pitanja;
let dodatiOdgovori61 = json_pitanja.Grupa16Odgovori1;
let dodatiOdgovori62 = json_pitanja.Grupa16Odgovori2;
let dodatiOdgovori63 = json_pitanja.Grupa16Odgovori3;
let dodatiOdgovori64 = json_pitanja.Grupa16Odgovori4;
let tacniOdgovori16 = json_pitanja.Grupa16TacniOdgovori;

// 17 grupa pitanja i odgovora

let dodataPitanja17 = json_pitanja.Grupa17Pitanja;
let dodatiOdgovori65 = json_pitanja.Grupa17Odgovori1;
let dodatiOdgovori66 = json_pitanja.Grupa17Odgovori2;
let dodatiOdgovori67 = json_pitanja.Grupa17Odgovori3;
let dodatiOdgovori68 = json_pitanja.Grupa17Odgovori4;
let tacniOdgovori17 = json_pitanja.Grupa17TacniOdgovori;

// 18 grupa pitanja i odgovora

let dodataPitanja18 = json_pitanja.Grupa18Pitanja;
let dodatiOdgovori69 = json_pitanja.Grupa18Odgovori1;
let dodatiOdgovori70 = json_pitanja.Grupa18Odgovori2;
let dodatiOdgovori71 = json_pitanja.Grupa18Odgovori3;
let dodatiOdgovori72 = json_pitanja.Grupa18Odgovori4;
let tacniOdgovori18 = json_pitanja.Grupa18TacniOdgovori;

// 19 grupa pitanja i odgovora

let dodataPitanja19 = json_pitanja.Grupa19Pitanja;
let dodatiOdgovori73 = json_pitanja.Grupa19Odgovori1;
let dodatiOdgovori74 = json_pitanja.Grupa19Odgovori2;
let dodatiOdgovori75 = json_pitanja.Grupa19Odgovori3;
let dodatiOdgovori76 = json_pitanja.Grupa19Odgovori4;
let tacniOdgovori19 = json_pitanja.Grupa19TacniOdgovori;

// 20 grupa pitanja i odgovora

let dodataPitanja20 = json_pitanja.Grupa20Pitanja;
let dodatiOdgovori77 = json_pitanja.Grupa20Odgovori1;
let dodatiOdgovori78 = json_pitanja.Grupa20Odgovori2;
let dodatiOdgovori79 = json_pitanja.Grupa20Odgovori3;
let dodatiOdgovori80 = json_pitanja.Grupa20Odgovori4;
let tacniOdgovori20 = json_pitanja.Grupa20TacniOdgovori;

let odgovori=document.querySelectorAll(".odgovor");

pitanja.addEventListener("click", igraPocinje);

let h6=document.querySelector("h6");

let brzoBiranje=[

"1","2","3","4","5"

];

let brzoBiranje3=[

"11","12","13","14","15"

];

function vremeIstekaPitanje(){
        clearInterval(vremeOdgovora);
}        

function igraj() {

vremeZaOdgovor = 20;
        tajmer.innerHTML = vremeZaOdgovor;
        vremeOdgovora = setInterval(promeniVreme, 1000);
        istekloVreme = setTimeout(vremeIstekaPitanje, 30000);
        
if(h6.textContent==="" || h6.textContent==="16" || h6.textContent==="17" || h6.textContent==="18" || h6.textContent==="19" || h6.textContent==="20")  {

h6.textContent=brzoBiranje[Math.floor(Math.random()*brzoBiranje.length)];

}
	
if(h6.textContent==="6" || h6.textContent==="7" || h6.textContent==="8" || h6.textContent==="9" || h6.textContent==="10")  {

h6.textContent=brzoBiranje3[Math.floor(Math.random()*brzoBiranje3.length)];

}

pitanjaIodgovori();

  }


function igraPocinje() {

igraj();

pitanja.removeEventListener("click", igraPocinje);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor);

  }

zagarantovanaSuma1.textContent="";
ponovo=setInterval(podelaProcenata, 100);

odustati2.setAttribute("onclick","izbaciPotvrdu()");
da.addEventListener("click", odustajanje);

}


function pogodjenOdgovor() {



for(let i=0; i < this.children.length; ++i)  {

if((this.children[i].textContent===tacniOdgovori[tacnoResenje] || document.Pitanje === tacniOdgovori[tacnoResenje]) && h6.textContent==="1")  {
// if(document.Pitanje ===tacniOdgovori[tacnoResenje]) && h6.textContent==="1")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
vremeZaOdgovor = 20;
  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori2[tacnoResenje]|| document.Pitanje === tacniOdgovori2[tacnoResenje]) && h6.textContent==="2")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori3[tacnoResenje]|| document.Pitanje === tacniOdgovori3[tacnoResenje]) && h6.textContent==="3")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }


if((this.children[i].textContent===tacniOdgovori4[tacnoResenje]|| document.Pitanje === tacniOdgovori4[tacnoResenje]) && h6.textContent==="4")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori5[tacnoResenje]|| document.Pitanje === tacniOdgovori5[tacnoResenje]) && h6.textContent==="5")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori11[tacnoResenje] || document.Pitanje === tacniOdgovori11[tacnoResenje])&& h6.textContent==="11")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori12[tacnoResenje]|| document.Pitanje === tacniOdgovori12[tacnoResenje]) && h6.textContent==="12")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori13[tacnoResenje]|| document.Pitanje === tacniOdgovori13[tacnoResenje]) && h6.textContent==="13")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori14[tacnoResenje]|| document.Pitanje === tacniOdgovori14[tacnoResenje]) && h6.textContent==="14")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if((this.children[i].textContent===tacniOdgovori15[tacnoResenje]|| document.Pitanje === tacniOdgovori15[tacnoResenje]) && h6.textContent==="15")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
vremeZaOdgovor = 20;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.style.background==="indianred" && this.children[i].style.background==="indianred")  {

setTimeout(igramoIspocetka, 4000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }


pomoci[0].removeEventListener("click", prvaPomoc);
pomoci[1].removeEventListener("click", drugaPomoc);
pomoci[2].removeEventListener("click", trecaPomoc);

if($(".odgovorJeTacan").length <= 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 0 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 5.000 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 9)  {

zagarantovanaSuma1.textContent="Osvojena suma: 150.000 dinara";  
osvojeno.value="";

         }

      }

   }

}

function pitanjaIodgovori() {


if(h6.textContent==="1")  {

pitanja.textContent=dodataPitanja[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori1[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori2[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori3[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori4[four4];
++four4;

  }
	
if(h6.textContent==="2")  {

pitanja.textContent=dodataPitanja2[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori5[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori6[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori7[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori8[four4];
++four4;

}

if(h6.textContent==="3")  {

pitanja.textContent=dodataPitanja3[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori9[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori10[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori11[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori12[four4];
++four4;

}

if(h6.textContent==="4")  {

pitanja.textContent=dodataPitanja4[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori13[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori14[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori15[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori16[four4];
++four4;

}

if(h6.textContent==="5")  {

pitanja.textContent=dodataPitanja5[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori17[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori18[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori19[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori20[four4];
++four4;

}

if(h6.textContent==="11")  {

pitanja.textContent=dodataPitanja11[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori41[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori42[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori43[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori44[four4];
++four4;

}

if(h6.textContent==="12")  {

pitanja.textContent=dodataPitanja12[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori45[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori46[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori47[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori48[four4];
++four4;

}

if(h6.textContent==="13")  {

pitanja.textContent=dodataPitanja13[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori49[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori50[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori51[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori52[four4];
++four4;

}

if(h6.textContent==="14")  {

pitanja.textContent=dodataPitanja14[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori53[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori54[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori55[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori56[four4];
++four4;

}

if(h6.textContent==="15")  {

pitanja.textContent=dodataPitanja15[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori57[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori58[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori59[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori60[four4];
++four4;

}

for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].style.visibility="visible";

  }

}

function otpocetka() {

++tacnoResenje;

iznos[prvi].style.background="purple";
--prvi;

osvojeno.value=iznos[drugi].textContent+" dinara";
--drugi;

iznos[five5].classList.add("odgovorJeTacan");
--five5;

resetujOdgovore();

odustati2.style.visibility="visible";

if(osvojeno.value==="5.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 5.000 dinara";
iznos[10].style.background="#993333";

}

if(osvojeno.value==="150.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 150.000 dinara";
iznos[5].style.background="#993333";

}

if(osvojeno.value==="5.000.000 dinara")  {

iznos[0].style.background="#993333";
zagarantovanaSuma1.textContent="CESTITKE OSVOJILI STE 5.000.000 dinara";
osvojeno.value="";
setTimeout(igramoIspocetka, 4000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

    }

  }  

}

function netacanOdgovor() {
	
for(let i=0; i < odgovor.length; ++i)  {

if(odgovor[i].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

if(odgovor[i].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

if(odgovor[i].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

     }

  }

}



function resetujOdgovore() {
	
$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor);

    }

}


function izbaciPotvrdu() {
	
$(".potvrdaOdustajanja").css("visibility","visible");
odustati2.removeAttribute("onclick");

}

let da=document.querySelector(".da");
let ne=document.querySelector(".ne");

da.addEventListener("click", odustajanje);
ne.addEventListener("click", nastavljanje);

function odustajanje() {
	
for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

   }  

this.removeEventListener("click", odustajanje);  

$(".potvrdaOdustajanja").css("visibility","hidden");
odustati2.removeEventListener("click", izbaciPotvrdu);
zagarantovanaSuma1.textContent="Osvojena suma: "+iznos[drugi +=1].textContent+" dinara";
osvojeno.value="";

setTimeout(igramoIspocetka, 4000);


}

function nastavljanje() {
	
$(".potvrdaOdustajanja").css("visibility","hidden");

}



let start;


izlaz1.addEventListener("click", zatvoriPomoc);


let procenat1=["85%","70%","55%"];
let procenat2=["5%","5%","5%","5%"];
let procenat3=["10%","10%","10%","10%"];
let procenat4=["15%","15%","15%","15%"];

let izadji=document.querySelector(".izadji");

izadji.addEventListener("click", izlaz);

function izlaz() {

publika2.style.visibility="hidden";
odustati2.style.visibility="visible";

}



let zavrsetak;



// igra se ponovo

let brzoBiranje2=[

"6","7","8","9","10"

];

let brzoBiranje4=[

"16","17","18","19","20"

];

// nova igra

function igramoIspocetka() {
	
for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].textContent="";
odgovor[i].style.visibility="visible";

   }

$(".mk").html("0");
$(".mk").css("visibility","hidden");
pitanja.textContent="Klikni za novu igru";
pitanja.addEventListener("click", resetujIgru);
$(".iznos").css("background", "#34A853");
$(".iznos").removeClass("odgovorJeTacan");
$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

prvi=14;
drugi=14;
tacnoResenje=0;
first1=0;
one1=0;
two2=0;
three3=0;
four4=0;

first10=0;
one10=0;
two20=0;
three30=0;
four40=0;
tacnoResenje2=0;
treci=14;
cetvrti=14;
five5=14;
five50=14;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

  }

}

function resetujIgru() {
	
this.removeEventListener("click", resetujIgru);

if(h6.textContent==="1" || h6.textContent==="2" || h6.textContent==="3" || h6.textContent==="4" || h6.textContent==="5") {

h6.textContent=brzoBiranje2[Math.floor(Math.random()*brzoBiranje2.length)];

}

if(h6.textContent==="11" || h6.textContent==="12" || h6.textContent==="13" || h6.textContent==="14" || h6.textContent==="15") {

h6.textContent=brzoBiranje4[Math.floor(Math.random()*brzoBiranje4.length)];

}

pitanjaIodgovori2();
odustati2.setAttribute("onclick","izbaciPotvrdu()");
da.addEventListener("click", odustajanje2);
vreme.textContent=30;
pomoci[0].addEventListener("click", prvaPomoc2);
pomoci[1].addEventListener("click", drugaPomoc2);
pomoci[2].addEventListener("click", trecaPomoc2);
ponovo=setInterval(podelaProcenata, 100);
zagarantovanaSuma1.textContent="";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor2);

  }
}


 