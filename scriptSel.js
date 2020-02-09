$(document).ready(function() {
$("#difficultyHeader").hide().fadeIn(500);
    $(".buttonDiff").hide().fadeIn(1000);

    $("#targetAreaHeader").hide().fadeIn(1500);
    $(".firstRowBtn").hide().fadeIn(2000);
    $(".secondRowBtn").hide().fadeIn(2500);

    $(".submitBtn").hide().fadeIn(3000);
})


// Setting arrays of workout programs
let workout = [
    ["Push Ups", "Chest Press", "Inclined Dumbbell Press", "Cable Crossovers", "Medicine Ball Chest Pass", "Chest Flyes"],
    ["Squats", "Step Ups", "Deadlifts", "Reverse Lunges",  "Jump Squats", "Kettlebell Swings"],
    ["Lat Pulldown", "Dumbbell Rows", "Seated Cable Row", "Lat Pullover", "Pull Ups", "Back Extensions"],
    ["Lateral Raise", "Shoulder Press", "Upright Row", "Seated Shoulder Press Machine", "Push Press", "Pike Push Ups"],
    ["Bicep Curl", "Tricep Pushdown", "Hammer Curls", "Tricep Kickbacks", "Bicep Curl to Shoulder Press", "Tricep Push Ups"],
    ["Crunches", "Sit Up", "Mountain Climber", "Leg Raise", "Flutter Kicks", "Jackknife Sit-Up"]
];

// Setting references to the array above to target body parts
let chest = workout[0];
let legs = workout[1];
let back = workout[2];
let shoulders = workout[3];
let arms = workout[4];
let core = workout[5];

// Set variables for diferent buttons
let buttonD = $(".buttonDiff")
let workBtn = $(".buttonTar")
let value = buttonD.data("diff");
let isDiffChosen = false;
let isWorkoutChosen = false;

//Setting the length of the arrays accorfing to the fitness level of the user
let beginner = [0, 1, 2, 3];
let intermediate = [0, 1, 2, 3, 4];
let advanced = [0, 1, 2, 3, 4, 5];

// Set an empty object that will store the results of the difficulty level and target body part
let globalResult = [];

// Event listener when user clicks on their fitness level
buttonD.on("click", function() {
let butValueD = $(this).data("diff")
let routine = "";
// Set the condition that the button has not been clicked yet
if(isDiffChosen === false) {
    isDiffChosen = true;
    // Set the conditions that gives the length of the workout array
    if(butValueD === "beginner") {
        routine = beginner;
    } else if (butValueD === "intermediate") {
        routine = intermediate; 
    } else if (butValueD === "advanced")
        routine = advanced;
} 
else {
    isDiffChosen = false;   
}
// Returns the array and pushes it to the results array
return globalResult.push(routine);
})

// Event listener when user clicks on the body part that they want to work out
workBtn.on("click", function() {
let butValueW = $(this).data("work")
let target = "";
//Setting conditions that ensures that the user clicked on their fitness level first
if (isDiffChosen === true) {
    // Conditions that targets the workour array based on the target area
    if (butValueW === "chest") {
        target = chest;
    } else if (butValueW === "legs") {
        target = legs;
    }else if (butValueW === "back") {
        target = back;
    }else if (butValueW === "shoulders") {
        target = shoulders;
    }else if (butValueW === "arms") {
        target = arms;
    }else if (butValueW === "core") {
        target = core;
    }} 
//Condition if user didn't select a fitness level yet
else {
    // console.log("pick a difficulty fool!")
    $("#msgLevel").text("Please choose your fitness level")
};
return globalResult.push(target);
})

// Event listener for the submit button
$(".submitBtn").on("click", function (){
    const [x, y] = globalResult
    if(y === null) {
        $("#msgTarget").text("Please choose your target area")
    }
   
    //Constatnt variable for the globalResult array to deconstruct the object
    
    // Condition to ensure user clicks on the target area
    else{
        // Empty variables for workout recommendations
        let weightsM = "";
        let weightsF = "";
        let sets = "";
        let reps = "";
        // Conditions for workout recommendations
        if (x.length === 4) {
            weightsM = "Male: 12/15/20 lbs.";
            weightsF = "Female: 8/10/12 lbs.";
            sets = "3";
            reps = "12 - 15";
        } else if (x.length === 5){
            weightsM = "Male: 25/30/35 lbs.";
            weightsF = "Female: 12/15/20 lbs.";
            sets = "4";
            reps = "10 - 12";
        } else if (x.length === 6) {
            weightsM = "Male: 40 lbs. and above";
            weightsF = "Female: 25 lbs. and above";
            sets = "5";
            reps = "8 - 10";
        }
        // Sets the reuslts to local storage
        localStorage.setItem("weightsM", weightsM);
        localStorage.setItem("weightsF", weightsF);
        localStorage.setItem("sets", sets);
        localStorage.setItem("reps", reps);

        //creates a for loop to store the array of the actual workout to the local storage    
        let routineStringArry = [];
            for (let i = 0; i < x.length; i++) {
                console.log(y[i])
                
                routineStringArry.push(y[i]);
                
            }
            routineString = JSON.stringify(routineStringArry);
            localStorage.setItem("workout", routineString);
           loadPage(); 
        }
         
    // Sends a notification that the user has not selected a target area yet.
    
    
    });

// Function to load the next page
function loadPage() {
    window.location.href = "generatePage.html";
} 

