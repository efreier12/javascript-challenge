// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// get key and value data inside of the table, and loop
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//user's input and filter
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
    //don't refresh the page!
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    //new filtered table
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)
