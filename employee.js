
var employeepromise= d3.json("employee.json");

var successFCN=function(employee){
    console.log("DATA right",employee);
    d3.selectAll("body")
        .append("h1")
        .text ("dididit");
    var rows= d3.select("#employeetable tbody")
        .selectAll("tr")
        .data(employee)
        .enter()
        .append("tr")
    rows.append("td")
        .text(function(employee){return employee.firstName})
    rows.append("td")
        .text(function(employee){return employee.lastName})
    rows.append("td")
        .append("img")
        .attr("src",function(employee){return employee.photo})
    rows.append("td")
        .text(function(employee){return employee.title})
    rows.append("td")
        .text(function(employee){return employee.unit})
    rows.append("td")
        .text(function(employee){return employee.email})
    rows.append("td")
        .text(function(employee){return employee.bio})
    rows.append("td")
        .text(function(employee){return employee.glyphOrientationVertical})
}

var failFCN=function(error){
    console.log("Somthin's wrong", error)
}

employeepromise.then(successFCN,failFCN);