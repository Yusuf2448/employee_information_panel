// JavaScript DOM Manipulation
function showEmployee(id) {

    let name = document.getElementById("empName");
    let designation = document.getElementById("empDesignation");
    let department = document.getElementById("empDepartment");

    if (id === 1) {
        name.innerText = "Name: Yusuf Khomosi";
        designation.innerText = "Designation: Software Developer";
        department.innerText = "Department: IT";
    }
    else if (id === 2) {
        name.innerText = "Name: Amaan Khan";
        designation.innerText = "Designation: HR Manager";
        department.innerText = "Department: Human Resources";
    }
    else if (id === 3) {
        name.innerText = "Name: Saad Khan";
        designation.innerText = "Designation: Marketing Executive";
        department.innerText = "Department: Marketing";
    }
}


// jQuery Functions
$(document).ready(function() {

    $("#hideBtn").click(function() {
        $("#employeePanel").hide();
    });

    $("#showBtn").click(function() {
        $("#employeePanel").show();
    });

    $("#toggleBtn").click(function() {
        $("#employeePanel").toggle();
    });

    $("#animateBtn").click(function() {
        $("#employeePanel").animate({
            left: "50px"
        }, 500).animate({
            left: "0px"
        }, 500);
    });

});