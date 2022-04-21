$(document).ready(function() {
    openCity(null, 'London');
});

function openCity(evt, cityName) {
    
    var i, tabcontent, tablinks;

   
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    tablinks = document.getElementsByClassName("thingsTodoTabButton");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";

    //if (evt == null) {
    //    if (!document.getElementById("city1").classList.contains("active")) {
    //        document.getElementById("city1").classList.add("active");
    //    }
    //}
    //else {
    //    if (!evt.currentTarget.classList.contains("active")) {
    //        evt.currentTarget.classList.add("active");
    //    }
    //}
}