
//importing JSON file/DATA - don't need to parse this json file, already converted
import userdata from './MOCK_DATA.json' assert { type: 'json' };
console.log(userdata);

//getting all the imp elements using ID tag
//this is table
var dataTable = document.getElementById("dataTable");
//these are all filter buttons
var sortAZ = document.getElementById("sortAZ")
var sortZA = document.getElementById("sortZA")
var sortMarks = document.getElementById("sortMarks")
var sortPassing = document.getElementById("sortPassing")
var sortGender = document.getElementById("sortGender")
var sortClass = document.getElementById("sortClass")
//these two are searchbox and search button
var searchBox = document.getElementById("searchBox")
var searchButton = document.getElementById("searchButton")

//using map function to map all the data to the table, alternatively we can use forEach function too
//we are using this function repeatedly - to display data to the table
function insert(haha) {  haha.map((e) => {
    //selecting row using js deafault method. -1 to insert row at the end
    var row = dataTable.insertRow(-1);
    //selecting cells of this row... 0,1,2,3,4,5 these are cell indexing
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)
    //inserting ID to first cell from the JSON data
    ID.innerHTML = e.id
    //creating a new img element and giving it source and style properties
    var image = document.createElement("img")
    image.src = e.img_src
    image.style.border = "1px solid black"
    image.style.borderRadius = "50%"
    image.style.width = "35px"
    Name.append(image)
    //creating span element to append first & last name
    var span = document.createElement("span")
    span.style.paddingLeft = "10px"
    span.innerText = e.first_name + " " + e.last_name
    Name.append(span)
    //giving this class just to make img and name horizontally align using flex
    Name.className = "nameBlock"
    //finally giving the values to the cell.. filling up the remaining details
    Gender.innerText = e.gender
    Class.innerText = e.class
    Marks.innerText = e.marks
    Email.innerText = e.email
    if (e.passing == true) {
        Passing.innerText = "Pass"
    }
    else {
        Passing.innerText = "Fail"
    }
})
}
//calling this function here just to see the data in the table on load
insert(userdata)

//function to make search possible in the searchBar
searchButton.onclick = function () {
    //this is to remove the previously stored data from the table
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    //reading input of searchBox entered by the user
    let value = searchBox.value.toLowerCase()

    let filter1 = userdata.filter(e => e.first_name.toLowerCase().includes(value) || e.last_name.toLowerCase().includes(value) || e.email.toLowerCase().includes(value))
    insert(filter1)
}

//function to filter data based on passing
function fliterPassing() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter2 = userdata.filter(e => e.passing == true)
    insert(filter2)
}
sortPassing.addEventListener('click', fliterPassing)

//function to filter data based on gender
function fliterGender() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter3a = userdata.filter(e => e.gender === "Female")
    let filter3b = userdata.filter(e => e.gender === "Male")
    insert(filter3a)
    //doing this just to represent the filtered data below as a new table
    var row = dataTable.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = " "
    Name.innerHTML = " "
    Gender.innerHTML = " "
    Class.innerHTML = " "
    Marks.innerHTML = " "
    Passing.innerHTML = " "
    Email.innerHTML = " "

    var row = dataTable.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = "ID"
    Name.innerHTML = "Name"
    Gender.innerHTML = "Gender"
    Class.innerHTML = "Class"
    Marks.innerHTML = "Marks"
    Passing.innerHTML = "Passing"
    Email.innerHTML = "Email"

    insert(filter3b)
}
sortGender.addEventListener('click', fliterGender)

//function to filter data based on Class
function fliterClass() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter4 = userdata.sort((p, q) => {
        return p.class - q.class;
    });
    insert(filter4)
}
sortClass.addEventListener('click', fliterClass)

//function to filter data based on Marks
function fliterMarks() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter5 = userdata.sort((p, q) => {
        return p.marks - q.marks;
    });
    insert(filter5)
}
sortMarks.addEventListener('click', fliterMarks)

//function to filter data based on letters A-Z
function fliterAZ() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter6 = userdata.sort(function (a, b) {
        if (a.first_name < b.first_name) {
          return -1;
        }
      });
    insert(filter6)
}
sortAZ.addEventListener('click', fliterAZ)

//function to filter data based on letters Z-A
function fliterZA() {
    // console.log("clicked")
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter7 = userdata.sort(function (a, b) {
        if (a.first_name > b.first_name) {
          return -1;
        }
      });
    insert(filter7)
}
sortZA.addEventListener('click', fliterZA)

