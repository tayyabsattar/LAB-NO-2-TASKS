// PART NO # 1

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',

    readingStatus: true
},
{
    author:'Suzanne Collins',

    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
}]; 

for (var i=0; i<library.length;i++) 
{
    var book= " : " + library[i].title + " : " + library[i].author + "\n";

    if (library[i].readingStatus) 
    {
      console.log("already read"+book);
    } 
    else
    {
     console.log("i am still reading"+book);
    }
    
}

// PART NO # 2

var sandwich_calcu = function (bread) {

    var sandwich = bread / 2
    var x = "Sandwiches we can make from the "
    var y = " breads are "
    console.log(x + bread + y + sandwich)

}
var f = 10
sandwich_calcu(f)
var cheese = 1
var sandwich_calcu = function (bread, cheese) {

    var sandwich = bread / 2

    if (bread % 2 == 0) 
    {
        var x="Sandwiches made by "
        var y=" breads and "
        var z=" Cheese are "
        console.log(x + bread + y + cheese + z + cheese)
    }

}
sandwich_calcu(f,2)