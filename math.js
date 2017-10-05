
var storage = [];
function findNums () 
{
    clearErrors();
    var num1 = parseInt(document.forms["numbersName"]["num1"].value);
    var num2 = parseInt(document.forms["numbersName"]["num2"].value);
    var num3 = parseInt(document.forms["numbersName"]["num3"].value);

    //checking to make sure the first number is a number, and greater than the second number
    if (num1 == "" || isNaN(num1)) 
    {
        alert("Please enter a NUMBER");
        document.forms["numbersName"]["num1"].parentElement.className = "form-group has-error";
        document.forms["numbersName"]["num1"].focus();
        return false;
    }
    //checking that the second number is a number and less than the first number
    if (num2 == "" || isNaN(num2) || num1 > num2)
    {
        alert("Please enter a NUMBER that is greater than your first number");
        document.forms["numbersName"]["num2"].parentElement.className = "form-group has-error";
        document.forms["numbersName"]["num2"].focus();
        return false;
    }
    if (num3 == "" || isNaN(num3) || num3 > num2)
    {
        alert("Please enter a NUMBER that is less than your second number");
        document.forms["numbersName"]["num3"].parentElement.className = "form-group has-error";
        document.forms["numbersName"]["num3"].focus();
    }

    //populating the table header with the numbers entered
    document.getElementById("returnFirstNumber").innerHTML = num1;
    document.getElementById("returnSecondNumber").innerHTML = num2;
    document.getElementById("returnThirdNumber").innerHTML = num3;

    //doing the math of adding the number and storing the result in storage[] if it is even
    for (; num1 < num2; num1 += num3)
    {
        if (num1 % 2 == 0)
        {        
            storage.push(num1); 
        }
    }

    //creating the table and populating it with the storage[] data
    document.getElementById("table").style.display = "block";
    var populate = "";
    for (index = 0; index < storage.length; index++)
    {
        var tr = "<tr>";
        tr += "<td>" + storage[index] + "</td>";
        tr += "</tr>";
        populate += tr;
    }

    document.getElementById("results").innerHTML += populate;    
    
    //returning false so that the table doesn't go away
    return false;
}

function clearErrors ()
{
    document.getElementById("table").style.display = "none";
    document.forms["numbersName"]["num1"].parentElement.className = "form-group";
    document.forms["numbersName"]["num2"].parentElement.className = "form-group";
    document.forms["numbersName"]["num3"].parentElement.className = "form-group"; 
    document.forms["numbersName"]["num1"].focus(); 
}

function resetForm ()
{
    clearErrors();
    document.forms["numbersName"]["num1"].value = "";
    document.forms["numbersName"]["num2"].value = "";
    document.forms["numbersName"]["num3"].value = "";  
    // Get the <ul> element with id="myList"
    var list = document.getElementById("table");
    var sizeOfTable = document.getElementById("table").childElementCount;
    alert(sizeOfTable);
    // If the <ul> element has any child nodes, remove its first child nod
    if (list.hasChildNodes()) {
        for (var z = 0; z < sizeOfTable; z++)
        list.removeChild(list.childNodes[z]);
    }
}
