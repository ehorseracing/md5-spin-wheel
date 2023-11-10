/* --------------- Spin Wheel  --------------------- */
const spinWheel = document.getElementById("spinWheel");
const spinBtn = document.getElementById("spin_btn");
const text = document.getElementById("text");

/* --------------- Minimum And Maximum Angle For A value  --------------------- */
const spinValues = [
  { minDegree: 61, maxDegree: 90, value: 100 },
  { minDegree: 31, maxDegree: 60, value: 200 },
  { minDegree: 0, maxDegree: 30, value: 300 },
  { minDegree: 301, maxDegree: 360, value: 400 },
  { minDegree: 241, maxDegree: 300, value: 500 },
  { minDegree: 91, maxDegree: 240, value: 600 },

];
/* --------------- Size Of Each Piece  --------------------- */
const size = [10, 10, 10, 20, 20, 50];
/* --------------- Background Colors  --------------------- */

var spinColors = [
  "#E74C3C",
  "#2E86C1",
  "#138D75",
  "#F1C40F",
  "#D35400",
  "#138D75",


];


var bigColors = [
  "#FF0000" ,
  "#80FF00" ,
  "#00FFFF" ,
  "#8000FF" ,
  "#FF8000" , 
  "#00FF00" ,
  "#0080FF" ,
  "#FF0080" ,
  "#FFFF00" ,
  "#00FF80" ,
  "#0000FF" ,
  "#FF00FF" ,

];



/* --------------- Chart --------------------- */
/* --------------- Guide : https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html --------------------- */
let spinChart = new Chart(spinWheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ['aaaa1', 'bbbbb', 'ccccc', 'ddddd', '55555', '666666', ],
    datasets: [
      {
        backgroundColor: spinColors,
        data: size,
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
        rotation: 90,
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 15 },
      },
    },
  },
});
/* --------------- Display Value Based On The Angle --------------------- */
const generateValue = (angleValue) => {
  for (let i of spinValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      text.innerHTML = `<p>Congratulations, You Have Won ! </p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};
/* --------------- Spinning Code --------------------- */
let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", () => {

  spinBtn.disabled = true;
  pickwinner(bigColors);
  text.innerHTML = `<p>Best Of Luck!</p>`;
  let randomDegree = 200 /* Math.floor(Math.random() * (355 - 0 + 1) + 0); */
  let rotationInterval = window.setInterval(() => {
    spinChart.options.rotation = spinChart.options.rotation + resultValue;
    spinChart.update();
    if (spinChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      spinChart.options.rotation = 0;
    } else if (count > 15 && spinChart.options.rotation == randomDegree) {
      generateValue(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
/* --------------- End Spin Wheel  --------------------- */
/* --------------- HASH AND STUFF --------------- */

function pickwinner(bigColors)
{
  const timehash = document.getElementById("timehash");
  d = new Date();
  calctime = d.toLocaleTimeString()
  calctime = d.toLocaleDateString() + ' ' + calctime
  timehash.innerHTML = calctime; 
  
  a = (document.getElementById("entries")).value.toLowerCase().replaceAll(/[\W_]+/g, ' ').trim().replaceAll(' ',',').split(',');
  listclean = removeDuplicates(a)
  alert(listclean)

  b = dosha(listclean, calctime, bigColors)
  alert(b)
  mysha256 = b[0] 
  myaudit=   b[1]
  winner =   b[2]
  winsha =   b[3]  
  winrez =   b[4]  
  alert(winrez) 
  calcinfo(listclean)

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
    alert(bigColors[i % bigColors.length ])
    if (winsha > mysha) {
      winner = i
      winsha = mysha
      winrez = todo[i] + ' WINS!<br><br>SHA256: ' + mysha + '<br><br>' + combome

    }

  }
  return [returner, hasher, winner, winsha, winrez, colors]
}

function calcinfo(folks)
{
  myangles = []
  myconst  = []

  /* lowest range is of 3; only up to 120 entrants */



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


    myconst.push(addmeconst)
    myangles.push(addme)

    anglesum = anglesum + 1

    alert(addme.minDegree + ' ' + addme.maxDegree)
    alert(addmeconst)



  }

  return [myconst,  myangles]
}