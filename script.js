var tags = []; // not needed?
var meals = [];
var mealtags = [];

// displays warning/error text if user submits without proper input
function checkMealName() {
    if(!hasMealName()) {
        document.getElementById("no-meal-name-message").style.visibility = "visible";
    } else {
        alert("Meal successfully submitted!");
        document.getElementById("no-meal-name-message").style.visibility = "hidden";
	var meal = {};
	meal.name = document.getElementById("meal-name-input").value;
        meal.tags = document.getElementById("tag-input").value;
	meals.push(meal);
	console.log(meals);
    }
}

// takes in user input, turns it into a list of tag strings and displays them
function setTags() {
    var tagInput = document.getElementById("tag-input").value;
    var tags = tagInput.split(",");
    displayTags(tags);
}

// takes in a list of strings, displays them as tags in the HTML
function displayTags(tags) {
    var inner = "";
    for(var i = 0; i < tags.length; i++) {
        inner += "<span class=\"tag is-info\">" + tags[i] + "</span>";
    }
    document.getElementById("tag-holder").innerHTML = inner;
}

// returns whether there's any input in the meal name box
function hasMealName() {
    var mealNameInput = document.getElementById("meal-name-input");
    return mealNameInput && mealNameInput.value;
}

function displayMeals() {
    var inner = "";
    for (var i = 0; i < meals.length; i++) {
        inner += "<article class=\"message\"><div class=\"message-header\"><p>" + meals[i].name + "</p></div><div class=\"message-body\">" + meals[i].tags + "</div></article>"
    }
    document.getElementById("meal-output").innerHTML = inner;

}

