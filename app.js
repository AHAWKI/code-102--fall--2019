function setup() { 
        createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0, 255, 0);
    rect(320, 240, 20, 20);

    fill(255,0, 0);
    circle(500, 100, 20);
    
    stroke(0,0,255);
    strokeWeight(3);
    line(0, 40, 640, 40);
    
}

    function day1am() {
        console.log("Hello World");
        var fullName = "Lexie Hawkins";
        var age = 38;
        var weight = 192.5;var heightInInches = 75;
        var height = 75;
        var address = '123 Main St';
        var middleName ;
        console.log(middleName);
        
        console.log(typeofname(fullName)0;
        console.log (typeof(weight));
        var likesPizza = true;
        var hasTattoos = false;
        console.log(typeof(likesPizza));

        console.log (age);
        age = 39;
        console.log(age);
        age = age + 1 
        console.log(age0;)
        // give age a value and add 1 put back in age
        age++;
        // adds 2 years to age and stores in age
        age *=5
        // multiples by 5 puts back to age
        weight = weight - 1;
        weight-= 0.25;
        console.log(weight);
        console.log(fullName = " is " + age + "" years old."");
        console.log(Do you like pizza? " + likesPizza);
        var feet = Math.floor(heightInInches / 12) ;
        console.log(feet);
        var inches = heightInInches % 12;
        console.log(fullName + " is " +feet + " foot " + inches + " inches tall");

        
    }

    day1am();