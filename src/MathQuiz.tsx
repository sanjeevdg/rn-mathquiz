import React from 'react';
import { StyleSheet, ActivityIndicator,Text, View,useWindowDimensions } from 'react-native';

import { WebView } from 'react-native-webview';

import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters';

//import {questions} from './questions';
//import {questions_two} from '../data/questions_two';
type Props = {
  questions: any[];
};



const MathQuiz: React.FC<Props> = ({ { questions }: Props }) => {

//export default function MathQuiz({navigation,route}) {



const { height, width} = useWindowDimensions();


//const quizname = route?.params?.quizname;




console.log('windowwidthandheight'+height+ 'xxx'+width);


const mmlOptions = {
  messageStyle: "none",
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
  TeX: {
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
    ],
  },
};



//  <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>   

/*

<link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>


<script src="https://sanjeevdg.github.io/js/jquery.mobile.swiper.js" type="text/javascript"></script>

<script src = "https://code.jquery.com/jquery-1.11.3.min.js"></script>

*/

const createCardsJs = () => {

let cardsJs = "";

let myquestions = questions;


for (let index=0;index<myquestions.length;index++) {

cardsJs += `

    function markCorr_`+ index +`() {
      if ($("#qopta_`+ index + `").hasClass("answer")) {
       $("#qopta_`+ index + `").css({"background-color":"#0acf83","color":"white"});
     }
      if ($("#qoptb_`+ index + `").hasClass("answer")) {
       $("#qoptb_`+ index + `").css({"background-color":"#0acf83","color":"white"});
     }
      if ($("#qoptc_`+ index + `").hasClass("answer")) {
       $("#qoptc_`+ index + `").css({"background-color":"#0acf83","color":"white"});
     }
      if ($("#qoptd_`+ index + `").hasClass("answer")) {           
       $("#qoptd_`+ index + `").css({"background-color":"#0acf83","color":"white"});
     }
     $("#result_`+ index + `").fadeIn(1000);
     $("#showexp_`+ index + `").fadeIn(1000);

$("#qopta_`+ index + `").unbind("tap");
$("#qoptb_`+ index + `").unbind("tap");
$("#qoptc_`+ index + `").unbind("tap");
$("#qoptd_`+ index + `").unbind("tap");

    } 


     $("#result_`+ index + `").hide(1000);
     $("#hideexp_`+ index + `").hide(1000);
     $("#showexp_`+ index + `").hide(1000);
     $("div.explanation_`+ index + `").hide();

    $("#showexp_`+ index + `").bind("tap", function(evt) {
       $("div.explanation_`+ index + `").show(1000);    
      $("#hideexp_`+ index + `").fadeIn(1000);
      $("#showexp_`+ index + `").fadeOut(1000);
    });
    
    $("#hideexp_`+ index + `").bind("tap", function(evt) {       
       $("#hideexp_`+ index + `").hide(1000);
       $("#showexp_`+ index + `").show(1000);
       $("div.explanation_`+ index + `").hide(1000);       
    });


    $("#qopta_`+ index + `").bind("tap", function (evt) {
      if (!$("#qopta_`+ index + `").hasClass("answer")) {
            $("#qopta_`+ index + `").css({"background-color":"#e85e3d","color":"white"});        
      }
      if ($("#qopta_`+ index + `").hasClass("answer"))
        $("#result_`+ index +`").prepend("<p style='color:#0acf83;font-size:22px;'>Congrats -correct answer!</p><br/>");
      else $("#result_`+ index +`").prepend("<p style='color:#e85e3d;font-size:22px;'>Sorry wrong answer!</p><p>Correct answer is `+ questions[index].qans +`</p><br/>");
      markCorr_`+ index +`();
      
    });
    
     $("#qoptb_`+ index + `").bind("tap", function(evt) {
      if (!$("#qoptb_`+ index + `").hasClass("answer")) {
            $("#qoptb_`+ index + `").css({"background-color":"#e85e3d","color":"white"});        
      }
      if ($("#qoptb_`+ index + `").hasClass("answer"))
        $("#result_`+ index +`").prepend("<p style='color:#0acf83;font-size:22px;'>Congrats -correct answer!</p><br/>");
      else $("#result_`+ index +`").prepend("<p style='color:#e85e3d;font-size:22px;'>Sorry wrong answer!</p><p>Correct answer is `+ questions[index].qans +`</p><br/>");
     markCorr_`+ index +`();
    });
    $("#qoptc_`+ index + `").bind("tap", function(evt) {
      if (!$("#qoptc_`+ index + `").hasClass("answer")) {
           $("#qoptc_`+ index + `").css({"background-color":"#e85e3d","color":"white"});        
      }
      if ($("#qoptc_`+ index + `").hasClass("answer"))
        $("#result_`+ index +`").prepend("<p style='color:#0acf83;font-size:22px;'>Congrats -correct answer!</p><br/>");
      else $("#result_`+ index +`").prepend("<p style='color:#e85e3d;font-size:22px;'>Sorry wrong answer!</p><p>Correct answer is `+ myquestions[index].qans +`</p><br/>");
       markCorr_`+ index +`();
    });
    $("#qoptd_`+ index + `").bind("tap", function(evt) {
      if (!$("#qoptd_`+ index + `").hasClass("answer")) {           
            $("#qoptd_`+ index + `").css({"background-color":"#e85e3d","color":"white"});        
      }
   if ($("#qoptd_`+ index + `").hasClass("answer"))
        $("#result_`+ index +`").prepend("<p style='color:#0acf83;font-size:22px;'>Congrats -correct answer!</p><br/>");
      else $("#result_`+ index +`").prepend("<p style='color:#e85e3d;font-size:22px;'>Sorry wrong answer!</p><p>Correct answer is `+ myquestions[index].qans +`</p><br/>");
     
      markCorr_`+ index +`();
    });
    
`;


}

return cardsJs;

}
const getCardsHtml = () => {


let myquestions = questions;



  let cardsHtml = `<div class="card-container" id="cardWrapper">`;





for (let index=0;index<myquestions.length;index++) {

let act  = '' ; let ansa = '';let ansb = '';let ansc = '';let ansd = '';
if (index === 0) act="active"; else act="";
if (myquestions[index].qans === 1 ) ansa="answer"; else ansa="";
if (myquestions[index].qans === 2 ) ansb="answer"; else ansb="";
if (myquestions[index].qans === 3 ) ansc="answer"; else ansc="";
if (myquestions[index].qans === 4 ) ansd="answer"; else ansd="";

 cardsHtml += `<div class="card `+ act +`">
<p><span style="font-size:30px;background-color:'#0acf83',color:white;">Q `+myquestions[index].qno+`.</span>&emsp;`
+ myquestions[index].qtext +
    `</p><p id="qopta_` +index+ `" class="qopta `+ ansa +`" style="line-height:50px;height:50px;">&nbsp;<i class="fa fa-circle-thin"  style="font-size:24px"></i>&emsp;`
+ myquestions[index].qopta +
`</p><p id="qoptb_` +index+ `" class="qoptb `+ ansb +`" style="line-height:50px;height:50px;">&nbsp;<i class="fa fa-circle-thin" style="font-size:24px"></i>&emsp;`
+ myquestions[index].qoptb +
`</p><p id="qoptc_` +index+ `" class="qoptc `+ ansc +`" style="line-height:50px;height:50px;">&nbsp;<i class="fa fa-circle-thin" style="font-size:24px"></i>&emsp;`
+ myquestions[index].qoptc +
`</p><p id="qoptd_` +index+ `" class="qoptd `+ ansd +`" style="line-height:50px;height:50px;">&nbsp;<i class="fa fa-circle-thin" style="font-size:24px"></i>&emsp;`
+ myquestions[index].qoptd +
   `</p><div id="result_`+index+`"></div><span id="showexp_`+index+`"><i class="fa fa-chevron-down"  style="font-size:24px"></i>Explanation </span><span id="hideexp_`+index+`"><i class="fa fa-chevron-up"></i> Explanation</span><div class="explanation_`+index+`"> <p> `+ myquestions[index].qexp +` </p></div> </div>`;
  }

cardsHtml += `</div>`;


return cardsHtml;



}

//console.log('getcardshtml',getCardsHtml());

const modifiedGetHtml = `<!DOCTYPE html>
  <html lang="en" data-bs-theme="light">
  <head>
  <meta charset="utf-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
       rel="stylesheet" integrity=
"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity=
"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous">
        </script>
    <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" href="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.css">

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>


<script>
    $(document).bind('mobileinit',function(){
 //       $.mobile.changePage.defaults.changeHash = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;

    });
</script>



<script src="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.js"></script>


<script
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js?config=TeX-MML-AM_CHTML">
</script>


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>   

  <style>
          body { background-color: white;width:95%; color: black;margin:0px auto;
          font-size: `+ moderateScale(15,0.4) +`px;line-height:`+ moderateScale(30,0.4) +`px;font-family:Quicksand;white-space:normal; }
          p {margin-left:5px;}
          pre {margin-left:5px;}
          h1 {font-size:60px;}   
          h2 {font-size:50px;}   
          h3 {font-size:40px;}  
          h4 {font-size:30px;}  

div {
  word-wrap: break-word;
}

code[class*="language-"],
pre[class*="language-"] {
  font-size: 90%;font-family:Quicksand
}

.card-container {
      position: relative;
      width: 90%;
      margin: 50px auto;
      height: `+ moderateVerticalScale(height*0.7,0.4) +`px;
      overflow: hidden;
      -ms-touch-action: pan-y;
touch-action: pan-y;
    }

    .card {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 20px;
      box-sizing: border-box;
      display: none;  
      overflow-x: scroll; 
      overflow-y: scroll; 
      -ms-touch-action: pan-y;
      touch-action: pan-y;   
    }

    .card.active {
      display: block;
    }

    .slide-left {
      animation: slideLeft 0.3s forwards;
    }

    .slide-right {
      animation: slideRight 0.3s forwards;
    }

    @keyframes slideLeft {
      0% { transform: translateX(100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideRight {
      0% { transform: translateX(-100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }

[class^="icon-"], [class*=" icon-"]{
    background:none;
}

.btn [class^="icon-"], .btn [class*=" icon-"] {
    line-height: 1.3em;
}






      </style>

 
  </head>

  <body>

` + getCardsHtml() + `

<div style="position:fixed;top:82%;left:24%;width:100%;margin-top:30px;height:60px;align-self:center;flex-direction:row;align-items:center;justify-content:space-around;">
 <button id="prevbtn" type="button" 
                    class="btn btn-lg btn-outline-primary">
                <i class="fa fa-chevron-left"></i> Previous
            </button>&emsp;&emsp;&emsp;
<button id="nextbtn" type="button" 
                    class="btn btn-lg btn-outline-primary">
                Next <i class="fa fa-chevron-right"></i>
            </button>

            <p style="padding:5px;border-color:blue;border-width:0.5px;width:70%;margin-left:-20px;margin-top:10px;border-style: ridge;"> Note ** Swipe left or right to navigate.</p>      
</div>

<script>
  $(document).ready(function() {
    var $cards = $(".card");
    var currentIndex = 0;

    function showCard(index, direction) {
      $cards.removeClass("active slide-left slide-right").hide();

      if (direction === 'left') {
        $cards.eq(index).addClass("active slide-left").show();
      } else if (direction === 'right') {
        $cards.eq(index).addClass("active slide-right").show();
      } else {
        $cards.eq(index).addClass("active").show();
      }
    }

    $("#cardWrapper").on("swipeleft", function() {
      if (currentIndex < $cards.length - 1) {
        currentIndex++;
        showCard(currentIndex, 'left');
      }
    });

   

` +

createCardsJs()

+ `

    $("#cardWrapper").on("swiperight", function() {
      if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex, 'right');
      }
    });


 $("#prevbtn").click(function(){
       if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex, 'right');
        }
  });

 $("#nextbtn").click(function(){
         if (currentIndex < $cards.length - 1) {
        currentIndex++;
        showCard(currentIndex, 'left');
        }
  });


  });
</script>


 </body></html>`;


const page1 = `<!DOCTYPE html>
  <html lang="en" data-bs-theme="light">
  <head></head><body></body></html>`;

/*
function displaySpinner() {
  return (
     <View style={[styles.indicatorWrapper,{marginTop:-1000,flex:1,flexGrow:1,height:600} ]}>
      <ActivityIndicator size="large" style={styles.indicator}/>
      <Text style={styles.indicatorText}>Loading response...</Text>
    </View>
  );
}
*/

//var(--common-theme-green)
//0acf83
//#e85e3d  -----orange




  return (



    <View style={styles.container}>
    



      <WebView  originWhitelist={['*']}
          source={{ html: modifiedGetHtml }}
          scalesPageToFit={true}
         // startInLoadingState={true}
       //   injectedJavaScript={injectedJavaScript}
          //renderLoading={() => {
          //   return displaySpinner();
         // }}
        //  onMessage={handleMessage}
          javaScriptEnabled={true}
          allowFileAccess={true}         
          domStorageEnabled={true}
          style={{flexGrow:1,flex:1,width:moderateScale(width,0.05),
            height:moderateVerticalScale(height,0.05),marginTop:-30,zIndex:-10,
            alignSelf:'center',paddingTop:5,marginBottom:0,
            backgroundColor:'white'}}        
></WebView>
      


    </View>





  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'95%',
    alignSelf:'center'    
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  }
});

export default MathQuiz;
