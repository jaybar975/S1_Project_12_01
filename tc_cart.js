"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Justin Aybar
   Date: 2.27.19 
   
   Filename: tc_cart.js
	
*/

//Adds the HTML written here to the div with the ID of cart.
var itemArrayLength = item.length;
var orderTotal = 0;
var cartHTML = "";

//Adds the HTML written here to the div with the ID of cart.
cartHTML += "<table>";
var tableColumns = ["Item", "Description", "Price", "Qty", "Total"];
cartHTML += "<tr>";

for (var i = 0; i < tableColumns.length; i++) {
   cartHTML += "<th>" + tableColumns[i] + "</th>";
}
cartHTML += "</tr>";

//Sets up the Cart div area with a table with product information.
for (var i = 0; i < itemArrayLength; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt=" + item[i] + "></img>";


   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   //Assigns the corresponsing information and graphic with each item. Populates the cart table with this information.

   var itemCost = itemPrice[i] * itemQty[i];
   //multiplies item cost by how many are in the cart to determine the total price for that product order.
   cartHTML += "<td> $" + itemCost + "</td>";

   //Adds item cost to the Item Cost row in the cart table.
   orderTotal += itemCost;

}

//Display total amount.
cartHTML += "<tr>";
cartHTML += "<td colspan='4'> Subtotal </td>";
cartHTML += "<td> $" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";
document.getElementById("cart").innerHTML = cartHTML;