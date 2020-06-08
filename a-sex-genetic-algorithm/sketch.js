let numimals = []; // original population
let survivors = []; // those picked as the gene pool
 
let pop = 1000;

let bestFit = [0, ""];


// numimal class 
class Numimal {
  constructor(DNA) {
    this.DNA = DNA;
    this.fitness = 0;
    this.generation = 0;
  }

  show() {
    resetMatrix(); // need to reset the matrix for each item translated or the translations will add together
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    textSize(random(10, 40));
    translate(random(10,width-200), random(50,height-50));
    rotate(random(-30, 30));
    fill(random(255), random(255), random(255));
    text(this.DNA + "*" + this.fitness, 0, 0);
    //  

  }
  

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(1);
  
  //make first population of numimals
  for (let i = 0; i < pop; i++) {
    numimals[i] = new Numimal(getDNA());
  }
  //print(numimals)
}

function draw() {
  background(0); 
  // for loop to loop through not great for animation
  // but easier for algorithm logic
  // previously done with 
  //checkans(popOfNums[frameCount%popOfNums.length]);
  //popOfNums[frameCount%popOfNums.length].show();
  
  // check for fitness and show number
  for (let i = 0; i < numimals.length; i++) {
    checkfitness(numimals[i]); // sends the object
    numimals[i].show();
  }
  // show best fit
  resetMatrix();
  fill(255, 0, 0);
  textSize(50);
  stroke(0);
  text("BEST " + str(bestFit[0]) + " " + bestFit[1], 100, 100);
  
  // fill survivors  
  // suvivor pool is best fit or best fit -1
  for (let i = 0; i < numimals.length; i++) {
    if (numimals[i].fitness === bestFit[0]-1 || numimals[i].fitness === bestFit[0]){
    
   // if ( numimals[i].fitness === bestFit[0]){
      //print(numimals[i].DNA, numimals[i].fitness,"surrived"); 
      survivors.push(numimals[i]);   
     }else{
      //print(numimals[i].DNA, numimals[i].fitness,"died");     
     }
  }
  //print("survivors",survivors);
  
  // clear the numimals array since suvivors are in diffent array
  numimals = [];
  
  // a-sexual reproduction of suvivors
  // one numimal becomes two:  1 an exact copy  2. a copy with two values switched
  
  for (let i =0; i< survivors.length;i++){
    aSexRepo(survivors[i]);   
  }
  
  
  //print(numimals); 
  //reset best fit
  bestFit = [0, ""];
  // clear the suvivor array too
  
  survivors = [];
  //noLoop();
}
  

function aSexRepo(numOb){
  // function takes the whole object and pushes two new numimal objects to the array
  
  numOb.generation++ // increace the generation count
  numOb.fitness = 0 // resets the fitness to zero for this generation
  
  numimals.push(numOb) // the identical copy of DNA with increaced generation
  
  // split dna into an array
  dnaList = numOb.DNA.split("");
 // print(dnaList);
  
  
  // get a random index
  let rndindex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let ind1 =  rndindex.splice(random(rndindex.length), 1);
  let ind2 =  rndindex.splice(random(rndindex.length), 1);
  
  // switch the values at thoes indexes mutate dna
  let A = dnaList[ind1];
  let B = dnaList[ind2];
  let C = A;
   
   dnaList[ind1] = B;
   dnaList[ind2] = C;
   
   // create a new numimal with that mutated dna
   let newOffspring = new Numimal(dnaList.join(""));
  
  // push to array
  numimals.push(newOffspring);
   
}


function getDNA() {

  let numpool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let dna = str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) +
    str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + str(numpool.splice(random(numpool.length), 1)) + "0";
  return dna

}

function checkfitness(numOb) {
  //this functions takes the object so I have acess to DNA and fitness.  some GA have the fitness tests inside the object
  // but that seems oppisite to the way the world works
 // print(typeof numOb);
  let fitness = 0;

  let num = numOb.DNA;
  for (let i = 1; i < num.length; i++) {
    // print(i, num.slice(0, i));
    if (int(num.slice(0, i)) % i == 0) {
      // print(`${num.slice(0,i)} is evenly divisible by ${i}`);
      fitness++;

    } else {
      // print(`${num.slice(0,i)} is not evenly divisible by ${i}`);
      // print(`'modulo is ${int(num.slice(0,i))%i}`);
    }
  }
 // print(num, fitness);
  numOb.fitness = fitness;
  if (fitness > bestFit[0]) {
    bestFit[0] = fitness;
    bestFit[1] = num;

  }
  if (fitness == 9) {
    print("found it");
    resetMatrix();
    
    textSize(30);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 400, 400);
    fill(0);
    text(numOb.DNA,width/2,height/2);
    noLoop();
  }
}