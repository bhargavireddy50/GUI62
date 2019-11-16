/* Name:Bhargavi Reddy Basi
  Course name: GUI I
  File type: .js file
  Sources used: https://www.npmjs.com/package/rules-js
  */




function num_Table() {

 /* this is used to create variables which will later be converted to integers*/

  var input_h1 = Number(document.getElementById("h1").value);

  var input_h2 = Number(document.getElementById("h2").value);

  var input_v1 = Number(document.getElementById("v1").value);

 var input_v2 = Number(document.getElementById("v2").value);



  /*  the following validates if the values entered are not integers and gives a pop up warning and specifynig the rules
     */

  if(!Number.isInteger(input_h1) || !Number.isInteger(input_h2)

    || !Number.isInteger(input_v1) || !Number.isInteger(input_v2)){

    alert("Please enter only integers");

  }

   /*the function is used if the command is passed */

  else {

    input_num(input_h1, input_h2, input_v1, input_v2);

  }

}


/* the following creates the table */
function input_num(input_h1, input_h2, input_v1, input_v2) {

/* this alert will pop up if the first value is bigger than the second.*/
   if(input_h1 > input_h2 || input_v1 > input_v2){

    alert("The end value is suppsed to be bigger than the first value entered   ");

   }

/* this code is implemented if the values are entered correctly and follow the rules */

   else {

   var resultstable = "<tr><th> </th>"; /* Empty value for the (0,0) axis. */

   for(var i = input_h1; i <= input_h2; i++){

     resultstable += "<th>" + i + "</th>"; /* Adds the values for the horizontal inputs. */

   }

   resultstable += "</tr>";

   for(var t = input_v1; t <= input_v2; t++) {

     resultstable += "<tr><th>" + t + "</th>"; /* Adds the values for the vertical inputs. */

     for(var f = input_h1; f <= input_h2; f++) {

     resultstable += "<td>" + t*f + "</td>";

     }

     resultstable += "</tr>";

   }

   /* this is to print the location of the file */

    var table = document.getElementById("out_table").innerHTML = resultstable;

  }

}
