const element = document.getElementById("b3");
element.addEventListener("click", searchCourses);

function searchCourses() {
    const searchValue = document.getElementById("i3").value;
    var results = [
        {title: "CST8101 Computer Essential", description: "Level 01"},
        {title: "CST8116 Introduction to Computer Programming", description: "Level 01"},
        {title: "CST8215 Introduction to Database", description: "Level 01"},
        {title: "MAT8001C Technical Mathematics for Computer Science", description: "Level 01"},
        {title: "ENL1813T Communication", description: "Level 01"},
        {title: "CST8300 Acheiving Success in Changing Environment", description: "Level 01"},
        {title: "CST2355 Database System", description: "Level 02"},
        {title: "CST8102 Operating System Fundamentals (GNU/Linux)", description: "Level 02"},
        {title: "CST8284 Object Oriented Programming (Java)", description: "Level 02"},
        {title: "CST8285 Web programming", description: "Level 02"},
        {title: "Community Services", description: "Level 02"},

    ];
    var resultsDiv = document.getElementById("final-values");
    resultsDiv.innerHTML = "";
   
    results.forEach(function(results){
        if (results.title.toLowerCase().includes(searchValue.toLowerCase())) {
            var resultDiv = document.createElement("div");
            resultDiv.innerHTML = "<h5>" + results.title + "</h5><p>" + results.description +"<p>";
            resultsDiv.append(resultDiv);
        }
    });
}
