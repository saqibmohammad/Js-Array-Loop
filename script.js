var animals = ['Dog','Cat','Cow','Goat','Buffalo','Lion','Tiger','Elephant','Zebra'] //Array declared of 9 Animal Name
console.log(animals);                                                                //Print all Animal 9 Name
animals.push('Rhino');                                                               //Add Rhino at the end of Array
console.log(animals);                                                                //Print all Animal 10 Name
animals.unshift('Dinosaur');                                                         //Add Dinosaur at the start of Array
console.log(animals);                                                                //Print all Animal 11 Name
animals.push('Sabre-toothed Cat');                                                   //Add Sabre-toothed Cat at the end of Array
console.log(animals);                                                                //Print all Animal 12 Name
animals.pop();                                                                       //Delete element from last Sabre-toothed Cat
console.log(animals);                                                                //Print all Animal 11 Name 
animals.shift();                                                                     //Delete element from start "Dinosaur"
console.log(animals);                                                                //Print all Animal 10 Name
animals.splice(5,0,'Owl');                                                           //Add Owl at Index 5 and Delete None
console.log(animals);                                                                //Print all Animal 11 Name 
animals.splice(5,1);                                                                 //Delete one at Index 5 which is Owl 
console.log(animals);                                                                //Print all Animal 10 Name
animals.reverse();                                                                   //Array is Reversed
console.log(animals);                                                                //Print all Animal 10 Name in Reverse Order
var birds=['Parrot','Crow'];                                                         //Second Array declared of 2 Birds Name
var animals_birds= animals.concat(birds);                                            //Third Array will be concat of First and Second Array
console.log(animals_birds);                                                          // Print all Animals and Birds name

for (var i=0; i<=animals.length-1; i++)
{
    console.log(animals[i]);                                                         //Print all Animals name using Loop
}
