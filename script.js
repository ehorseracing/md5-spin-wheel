/* --------------- Spin Wheel  --------------------- */
var spinWheel = document.getElementById("spinWheel");
var spinBtn = document.getElementById("spin_btn");
var text = document.getElementById("text");


/* --------------- Minimum And Maximum Angle For A value  --------------------- */
var spinValues = [
  { minDegree: 1, maxDegree: 90, value: 100 },
  { minDegree: 270, maxDegree: 360, value: 200 },
  { minDegree: 181, maxDegree: 270, value: 300 },
  { minDegree: 91, maxDegree: 180, value: 400 },


];
/* --------------- Size Of Each Piece  --------------------- */
var size = [30, 30, 30, 30,];
/* --------------- Background Colors  --------------------- */

var spinColors = [
  "#330000",
  "#6666cc",
  "#003300",
  "#F1C40F",



];

var ocount = 0;
var bigColors = [
  "#CC3300", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 

  "#000000", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 

  "#742802", // chestnut 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 

  "#017371", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 

  "#d90166", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 
  
  "#333333", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 

  "#666666", // orange 
  "#9999cc", // blue
  "#660000", // red "#E74C3C",
  "#F1C40F", // yellow
  "#003300", // green
  "#ff9999",
  "#000066",
  "#33cc33",
  "#34013f",
  "#ffab0f", 


  

];



/* --------------- Chart --------------------- */
/* --------------- Guide : https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html --------------------- */
let spinChart = new Chart(spinWheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ['SHA256', 'NON', 'RANDOM', 'SPINNER',  ] ,
    datasets: [
      {
        backgroundColor: spinColors,
        data: size,
        borderWidth:0,
        position: 'right'
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
       //  rotation: 90, // 90
       //  align : 45,
       color : ['#ffffff' , '#000000'],
       // fontColor: ['#000000'], // "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 12 },
        align : 'center',

        rotation: function(ctx) {
          const valuesBefore = ctx.dataset.data.slice(0, ctx.dataIndex).reduce((a, b) => a + b, 0);
          const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
          const rotation = ((valuesBefore + ctx.dataset.data[ctx.dataIndex] /2) /sum *360);
          r1 =  rotation < 180 ? rotation-90 : rotation+90;
          return r1 ; //rotation < 180 ? rotation-90 : rotation+90;
        },
        //formatter: function (value, context) {
        //    return context.chart.data.labels[context.dataIndex];
        //},




      },
    },
  },
});
/* --------------- Display Value Based On The Angle --------------------- */
const generateValue = (angleValue, listclean) => {
  p = -1;
  //alert(angleValue)
  for (let i of spinValues) {

    p = p + 1;
    if ((angleValue >= i.minDegree && angleValue <= i.maxDegree) ||  (angleValue >= i.minDegree2 && i.minDegree < 0)) {

      // alert('a:' +angleValue+ ' | min '+i.minDegree + ' | max '+i.maxDegree + ' | min2 '+i.minDegree2 + ' | count '  + p )
      text.innerHTML =   winrez // + ' WINS!<br><br>SHA256: ' // + mysha + '<br><br>' + combome // winrez; // `<p>Congratulations, You Have Won ! </p>`;
      spinBtn.disabled = false;
      //alert(winrez)

      //if (angleValue == i.maxDegree)
      //{
      //  alert('nudge - 1')
      //  spinChart.options.rotation  = spinChart.options.rotation  - 1
      //}

      //if ((angleValue == i.minDegree) || (angleValue == i.minDegree2))
      //{
      //  alert('nudge + 1')
      //  spinChart.options.rotation  = spinChart.options.rotation  + 1
      //}
      //alert(angleValue + 'a')
      break;
    }
  }
};
/* --------------- Spinning Code --------------------- */
let count = 0;
let resultValue = 11 //  101;
spinBtn.addEventListener("click", () => {
  resultValue = 11 ;
  text.innerHTML = ``;
  audit.innerHTML = ``;
  spinBtn.disabled = true;

  
  results = pickwinner(bigColors);
  // [rpick, listclean, winangle, winconst]


  rpick = results[0]
  wincolo = results[4]
  listclean = results[1]
  // alert(results[3])
  size = results[3]
  winrez = results[5]
  osize = results[2].length

  audadd = '{ minDegree: ' + anglesum + ', maxDegree: ' + firstangle+ ', minDegree2  : ' + anglesum2 + ',}'
  //audit.innerHTML = audit.innerHTML + 'winning angle - ' + rpick + '<br>'
  // alert(size)
  // alert(rpick)

  spinValues = winangle;
  spinColors = wincolo; 
  spinChart.data.labels = listclean;
  // spinChart.data.labels.fontColor = ['#ffffff'];
  spinChart.data.datasets.backgroundColor = wincolo;
  //spinChart.data.datasets.fontColor = '#ffffff';
  spinChart.data.datasets.borderWidth = 0;
  spinChart.data.datasets.data = size;
  spinChart.options.rotation =  270 // 90 ; // 270; 
  nsize = 21 - Math.floor(osize / 10)
  spinChart.options.plugins.datalabels.font = { size : nsize }  
  // spinChart.options.plugins.datalabels.rotation =  spinChart.options.rotation  // 90 ; // 270;   

  //  spinChart.options.plugins.datalabels.rotation =  0
  // alert(spinChart.data.labels )
  // alert(spinChart.data.datasets.data)
  spinChart.data.datasets = [
    {
      backgroundColor: wincolo,
      data: size,
      borderWidth : 0,
    },
  ]
  spinChart.update(); 


  text.innerHTML = ``;
  let randomDegree = rpick /* Math.floor(Math.random() * (355 - 0 + 1) + 0); */
  if (randomDegree == 360)
  {
    randomDegree = 0
  }
  let rotationInterval = window.setInterval(() => {

    // spinChart.data.labels[0] = spinChart.options.rotation


    spinChart.options.rotation = spinChart.options.rotation + resultValue;


    spinChart.options.plugins.datalabels.rotation = function(ctx) {
     const valuesBefore = ctx.dataset.data.slice(0, ctx.dataIndex).reduce((a, b) => a + b, 0);
     const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
     const rotation = spinChart.options.rotation + ((valuesBefore + ctx.dataset.data[ctx.dataIndex] /2) /sum *360);

     return rotation+90;
    };


    // spinChart.options.plugins.datalabels.rotation =   spinChart.options.rotation // - spinChart.data.datasets.y*0 // spinChart.options.rotation +  // + spinChart.options.plugins.datalabels.rotation  // 90 ; // 270;   
    //spinChart.options.plugins.datalabels.rotation =    spinChart.options.plugins.datalabels.rotation + resultValue;    
    spinChart.update();
    //if (spinChart.options.rotation == randomDegree)
   // {
    // alert('spin - ' + count +',' + spinChart.options.rotation+ ', ' + randomDegree)
   // }


    if (spinChart.options.rotation > 360) {
   // if (spinChart.options.plugins.datalabels.rotation > 360) {
      count += 1;
      // alert(count + ' | ' + spinChart.options.rotation)
      resultValue  -= 2;
      if (resultValue < 1)
      {
        resultValue = 1
      }
      spinChart.options.rotation  = 0 // - 360 // 0;
   //   spinChart.options.plugins.datalabels.rotation  =0

    } else if (count > 5 && ((spinChart.options.rotation == randomDegree) || (spinChart.options.rotation == randomDegree + 360) || (spinChart.options.rotation == randomDegree - 360))) {
   // } else if (count > 12 && spinChart.options.plugins.datalabels.rotation  == randomDegree) {
      // alert('endnow')
      generateValue(randomDegree, winrez);
      //(randomDegree + 'b')
      clearInterval(rotationInterval);
      count = 0;
      //alert('jump back')
      //does a "late jump"?  this will hopefully correct it
      spinChart.options.rotation = spinChart.options.rotation - resultValue;
      resultValue = 11 ; // = 101;
      //alert(randomDegree + 'c')

 

    }
  }, 25);
  //alert(randomDegree + 'd')
});
/* --------------- End Spin Wheel  --------------------- */
/* --------------- HASH AND STUFF --------------- */

function cleantextbox()
{
  mydata = (document.getElementById("entries")).value.toLowerCase().replaceAll(/[\W_]+/g, ' ').trim().replaceAll(' ',',').split(',');
  
  
  return mydata;
}


function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
 
     return 0;  
  }  
}



function cleanlist()
{
  myarray =  cleantextbox(); //(document.getElementById("entries")).value.toLowerCase().replaceAll(/[\W_]+/g, ' ').trim().replaceAll(' ',',').split(',');
  // myarray = myarray.split(',')
  // alert(myarray)
  myarray = removeDuplicates(myarray)
  myarray = myarray.sort()

  //alert(myarray)  
  mystring = JSON.stringify(myarray).replaceAll(/[\W_]+/g, ' ').trim().replaceAll(' ',',')
  // alert(mystring);
  mystring =  mystring.replaceAll(',','\n');
  document.getElementById("entries").value = mystring;
  //alert(a);
  

}

function pickwinner(bigColors)
{
  const timehash = document.getElementById("timehash");
  d = new Date();

  ss = d.getUTCSeconds() + '_' + d.getUTCMinutes() + '_' + d.getUTCHours() + '~'
  ss = ss + (d.getUTCDate()) + '_' + (1+d.getUTCMonth()) + '_' + d.getUTCFullYear()

  calctime = d.toLocaleDateString()
  calctime = ss  // + ' ' + calctime
  //calctime = d.toLocaleTimeString() + ' ' + calctime

  


  timehash.innerHTML = calctime; 
  
  a = cleantextbox() // (document.getElementById("entries")).value.toLowerCase().replaceAll(/[\W_]+/g, ' ').trim().replaceAll(' ',',').split(',');
  listclean = removeDuplicates(a)
  // alert(listclean)

  b = dosha(listclean, calctime, bigColors)
  ci = calcinfo(listclean) 

  // alert(b)
  mysha256  =   b[0]     // list of winning shas 
  myaudit   =   b[1]   // list of values hashed
  winner    =   b[2]   // id of winner
  winsha    =   b[3]   // sha of the winner 
  winrez    =   b[4]   // resulst to display for winner
  wincolo   =   b[5]   // colors of the wheel                   -- SEND
  winconst  =   ci[0]  // size contants used for the wheel      -- SEND
  winangle  =   ci[1]  // angles used for the wheel             -- SEND

  ocount = b[0].length

  //while ((winangle[0].maxDegree < 90) && (1==0))
  //{
  //  winner = winner - 1;
  //  if (winner < 0)
  //  {
  //    winner  = winconst.length - 1;
  //  }
  //  winangle.push(winangle.shift())
  //  winconst.push(winconst.shift())
  //  wincolo.push(wincolo.shift())
  //  mysha256.push(mysha256.shift())
  //  myaudit.push(myaudit.shift())
  //  listclean.push(listclean.shift())
  //}
  //alert(listclean)

 


  // let's pick the angle the winner gets; note this ranges between the sha of the winner som while it's a "random number"
  // the winner is predetermined; this is just to make the wheel spins visially a bit more appealing

  mydate =  new Date()
  //alert(mydate)
  rnum   = mydate.getMilliseconds() / 1000;
  //alert(rnum)

  rpick = Math.floor(rnum * (winangle[winner].maxDegree - winangle[winner].minDegree + 1)) + winangle[winner].minDegree;
  
  rpick = winangle[winner].goodAngle //   Math.floor(rnum * (winangle[winner].maxDegree - winangle[winner].minDegree + 1)) + winangle[winner].minDegree;


  //for (let i = 0; i < listclean.length; i++) {
  //  listclean[i] = i+'.'+listclean[i]+'+'+winangle[i].minDegree+'-'+winangle[i].maxDegree+'-'+rpick
  //}



  // rpick = rpick -90 // 90

  // if (rpick < 0)
  //{
  //  rpick = rpick + 360;
  //}


  // alert(rpick)
  // alert(winangle[winner].maxDegree )
  // alert(winangle[winner].minDegree )

  // alert(winrez) 
  // calcinfo(listclean)

  return [rpick, listclean, winangle, winconst, wincolo, winrez]

}


function removeDuplicates(arr) { 
  return arr.filter((item, 
      index) => arr.indexOf(item) === index); 
} 
function dosha(todo, addsalt,bigColors)
{
  returner = []
  hasher = []
  colors = []

  winner = -1
  winsha = 'z'
  winrez = 'all losers!'



  for (let i = 0; i < todo.length; i++) {

    colors.push(bigColors[i % bigColors.length ]) 

    combome = addsalt + '~' + todo[i]
    mysha = forge_sha256(combome)
    returner.push(mysha)
    hasher.push(combome)
   // alert(bigColors[i % bigColors.length ])
    if (winsha > mysha) {
      winner = i
      winsha = mysha
      winrez = todo[i] + ' WINS!<br>SHA256: ' + mysha.substring(0,6) + '...<br><a target="' + mysha +'" href="https://emn178.github.io/online-tools/sha256.html?input_type=utf-8&input=sdfsdf&hmac_input_type=utf-8">Verify!</a><br>' + combome

    }

  }
  return [returner, hasher, winner, winsha, winrez, colors]
}

function calcinfo(folks)
{
  myangles = []
  myconst  = []

  /* lowest range is of 3; only up to 120 entrants */


  angleoffset = -1

  anglemin = 0
  anglemax = 360
  anglelen = folks.length
  angleconstmax = 120   // max number of "wheelers"; probably ought to dial this back to no more than like 40-60
  angleconstadd = 0
  angleconstsum = 0
  anglestart = 90



  anglesum = anglestart // we are starting at 90 because it is flipped 270 degrees
  anglelow = Math.floor(anglemax /  angleconstmax);




  for (let i = 0; i < anglelen; i++) {

    // always start with anglesum; subtract angesub
    
    firstangle = anglesum;

    // alert(i)
    // angsub is "max"
    
    // anglemax = angsub

    //angleconstadd - sticking with the "const" in the original code; really a max of 120 participants

    angleconstadd = Math.floor( (angleconstmax - angleconstsum)   / (anglelen - i))

    if (angleconstadd  < 1)
    {
      angleconstadd = 1
    }

    if (i == (anglelen - 1)) //on the last one we make sure to fill it out entirely
    {
      
      angleconstadd = angleconstmax - angleconstsum
    }


    // 360 degrees; currently anglow = 360 / 120 = 3  - this is what we will remove from anglemax

    anglesub = angleconstadd *  anglelow; // was angleadd


    if (anglesub  < anglelow)
    {
      anglesub = anglelow
    }

    //if (i == (anglelen - 1)) //on the last one we make sure to fill it out entirely
    //{ 
    //  anglesub = anglestart + 1 // anglemax - anglesum
    //}  


    angleconstsum = angleconstsum + angleconstadd      
    anglesum = anglesum - anglesub

    anglesum = anglesum + 1

    anglesum2 = anglesum

    if (anglesum2 <= 0)
    {
      anglesum2 = 360 + anglesum2

    }

    
    rangesize = Math.abs(firstangle - anglesum) 

    goodangle = Math.floor(anglesum + rangesize / 2)

    if (rangesize <= 5)
    {
      goodangle = anglesum + 1 //just being careful here for tight ranges due to late jump

    }

    if (rangesize <= 3)
    {
      goodangle = anglesum + 0 //just being careful here for tight ranges due to late jump

    }


    if (goodangle < 0)
    {
      goodangle = 360 + goodangle
    }




    addme =  { minDegree: anglesum, maxDegree: firstangle, value : -1, minDegree2  : anglesum2, goodAngle : goodangle}

    audadd = '{ minDegree: ' + anglesum + ', maxDegree: ' + firstangle+ ', minDegree2  : ' + anglesum2 + ', goodAngle : ' +goodangle + '  }'
    // audit.innerHTML = audit.innerHTML + audadd + '<br>'

    addmeconst = angleconstadd

    amc =  addmeconst // {x: 'howdy', y: addmeconst}
    //myconst.push(addmeconst)
    myconst.push(amc)
    myangles.push(addme)

    if (anglesum <= 0)
    {
      anglesum= anglesum2

    }



    anglesum = anglesum - 1



    // alert(addme.minDegree + ' ' + addme.maxDegree)
    //alert(addmeconst)

 
  }

  return [myconst,  myangles]
}





function calcinfo_old(folks)
{
  myangles = []
  myconst  = []

  /* lowest range is of 3; only up to 120 entrants */


  angleoffset = -1

  anglemin = 0
  anglemax = 360
  anglesum = 0
  anglelen = folks.length
  angleconstmax = 120
  angleconstadd = 0
  angleconstsum = 0

  anglelow = Math.floor(anglemax /  angleconstmax);

  for (let i = 0; i < anglelen; i++) {

    anglemin = anglesum 
    // angleadd = Math.floor( (anglemax - anglesum)   / (1 + anglelen - i))

    angleconstadd = Math.floor( (angleconstmax - angleconstsum)   / (anglelen - i))

    if (angleconstadd  < 1)
    {
      angleconstadd = 1
    }
    angleadd =  angleconstadd *  anglelow

    if (i == (anglelen - 1))
    {
      
      angleconstadd = angleconstmax - angleconstsum
    }

    if (angleadd  < anglelow)
    {
      angleadd = anglelow
    }

    if (i == (anglelen - 1))
    {
      
      angleadd = anglemax - anglesum
    }



    angleconstsum = angleconstsum + angleconstadd      
    anglesum = anglesum + angleadd


    // angleadd = Math.floor( (anglemax - anglesum)   / (1 + anglelen - i))

    /*


   */



    addme =  { minDegree: anglemin, maxDegree: anglesum, value : -1}
    addmeconst = angleconstadd

    amc = {x: 'howdy', y: addmeconst}
    //myconst.push(addmeconst)
    //myconst.push(addmeconst)
    myangles.push(addme)

    anglesum = anglesum + 1

    // alert(addme.minDegree + ' ' + addme.maxDegree)
    // alert(addmeconst)



  }

  return [myconst,  myangles]
}