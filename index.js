

var ID = 0;



function SaveData() {

    var Name = document.getElementById("empname").value.trim();
    var Designation = document.getElementById("empdesignation").value.trim();
    var JoiningDate = document.getElementById("empjoiningdate").value.trim();
    var Age = document.getElementById("empAge").value.trim();

    if (Name == "" || Designation == "" || JoiningDate == "" || Age == "") {

        alert("Please Fill all Details.")

        return;

    }

    var Date = JoiningDate.split("-");

    var FormattedDate = Date[2]+"-"+ Date[1] +"-"+ Date[0];

    const newEmployee = {
        id: ID + 1,
        name: Name,
        age: Age,
        designation: Designation,
        joiningDate: FormattedDate
    };

    addEmployee(newEmployee);






}

function getDataFromLocalStorage() {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : [];
}


function addEmployee(employee) {
    const employees = getDataFromLocalStorage();
    employees.push(employee);
    localStorage.setItem('data', JSON.stringify(employees));

    alert("Data Saved sucessfully!!!!")

    var AddData = document.getElementById("AddData");

    AddData.classList.add("d-none");
    
    var AddNew = document.getElementById("AddNew");

    AddNew.classList.remove("d-none");

    

    ClearData();

    RefreshData();
}



function ClearData() {
    var Name = document.getElementById("empname");
    Name.value = "";
    var Designation = document.getElementById("empdesignation");
    Designation.value = "";
    var JoiningDate = document.getElementById("empjoiningdate");
    JoiningDate.value = "";
    var Age = document.getElementById("empAge");
    Age.value = "";
}


function CancelData() {
    var Name = document.getElementById("empname");
    Name.value = "";
    var Designation = document.getElementById("empdesignation");
    Designation.value = "";
    var JoiningDate = document.getElementById("empjoiningdate");
    JoiningDate.value = "";
    var Age = document.getElementById("empAge");
    Age.value = "";

    var AddData = document.getElementById("AddData");

    AddData.classList.add("d-none");
    
    var AddNew = document.getElementById("AddNew");

    AddNew.classList.remove("d-none");
}


function RefreshData() {
    const employees = getDataFromLocalStorage();

    
    const tableBody = document.querySelector('#emptable tbody');


    tableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', employee.id);

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.designation}</td>
            <td>${employee.joiningDate}</td>
            <td><button type="button" class="btn btn-danger" onclick="DeleteData(${employee.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);

        ID=employee.id;
    });
}

RefreshData();



function DeleteData(id){
    let employees = getDataFromLocalStorage();
    employees = employees.filter(employee => employee.id !== id);
    localStorage.setItem('data', JSON.stringify(employees));

    alert("Record Deleted!!!!")

    RefreshData();  
}


function AddNew(){
    var AddData = document.getElementById("AddData");

    AddData.classList.remove("d-none");

    var AddNew = document.getElementById("AddNew");

    AddNew.classList.add("d-none");


}



