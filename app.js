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
    function dayPM() {

    }

    function day1am() {
        console.log("Hello World");
        var fullName = "Lexie Hawkins";
        var age = 38;
        var weight = 192.5;var heightInInches = 75;
        var heightInInches =67;
        var address = '123 Main St';
        var middleName ;
        console.log(middleName);
        
        console.log(typeof(fullName));
        console.log (typeof(weight));
        var likesPizza = true;
        var hasTattoos = false;
        console.log(typeof(likesPizza));

        console.log (age);
        age = 39;
        console.log(age);
        age = age + 1;
        console.log(age);
        // give age a value and add 1 put back in age
        age++;
        // adds 2 years to age and stores in age
        age *=5
        // multiples by 5 puts back to age
        weight = weight - 1;
        weight-= 0.25;
        console.log(weight);
        console.log(fullName + " is " + age + " years old.");
        console.log("Do you like pizza? " + likesPizza);
        var feet = Math.floor(heightInInches / 12) ;
        console.log(feet);
        var inches = heightInInches % 12;
        console.log(fullName + " is " +feet + " foot " + inches + " inches tall");

        print('Hello World');
        var convertedTemp = f2c(212);
        print (convertedTemp);
        print(canIGoToTheCasino(age, "IA"));
        age = 19
        print(canIGoToTheCasino(age, "IA"))
        print(canIGoToTheCasino(age, "MN"))
        print(whatShouldIWear(90))
    }

   // day1am();

    function print(input) {
        console.log(input);

    }
    //convert fahrenheit to celcius
    //Inout temp in Fahreheit
    function f2c(t) {
        return((t - 32) * (5 / 9));
    }

    function bmiConverter(weight, height) {
        return 0;  //number, string, boolean
    }
    function canIGoToTheCasino(age, location) {
        return age >= 21 && location == "IA" || age >= 18 && location == "MN";
    }   
    // function whatShouldIWear(temp) {
    //         if(temp >= 75) {
    //             return "swim wear)";
    //         }else if (temp >= 45){
    //             return "light jacket";
    //         }else if (temp >= 10){
    //             return "Winter jacket";
    //         }else {
    //             return 'Don\t go outside';
    //     }  

    // }
    
// function day2AM(){
//     print(1);
//     print(2);
//     print(3);

//     var count = 10;
//     while(count >=0) {
//         print (count);
//         count--;
//     }
// //     var sum = 0;
// //     count = 0;
// //     while(true) {
        
// //         var input = parseInt(prompt('Enter a number. Type 0 to end. '));
// //         if (input=== 0){
// //             break;
// //         }   else {
// //                 sum += input;
// //                 count++;

// //         }
// //     }

// // console.log('The average of your numbers is ' + sum/count);

//     for(var count = 100; count >= 0; count-=10) {
//         print(count);
//     }

   
//         var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

//     states.forEach(function(state) {
//         if(state === "Iowa" || state ==="Illinois") {
//         print(state + " is cool.");

//         } else {
//             print (state + " sucks." ); }
//         });
//         for(var i = 0; i < months.length; i++ ) {
//       print(months.length[i])

//     }
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//     {

//     print(months[0]);
//     print(months[1]);
//     print(months[2]);
//     print(months[3]);
//     print(months[4]);
//     } 
// }   

function day2AM(){
    var lexie = {
        firstName: "Lexie",  // key followed byvalue, astring
        middleName: "Elaine",
        lastName: "Hawkins",
        dob: [2,14,1968], //month, day, year
        likesPizza: true,
        heightInInches: 66,
        fullName: function () {
            return this.firstName + ' ' + this.middleName +' ' +
            this.lastName;
        },
        age: function () {
            var today = new Date ();
            var year = today.getFullYear();

            var month = today.getMonth();
            var day = today.getDate();

            var myAge = year - this.dob[2];

            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };

        



    print(lexie.firstName);  //object can share keys
    print(lexie.middleName); //if value no ()
    print(lexie.lastName);
    print(lexie.fullName()); //fx has to have()
    print(lexie.age());



}






day2AM();