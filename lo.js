function addEmployee(){
    
var ID = document.getElementById('empid').value
   

 const empData={
     ID :document.getElementById('empid').value,
    

     name : document.getElementById('empname').value,
    

     address : document.getElementById('empadd').value,
    

    designation : document.getElementById('empdesg').value,
    

    experience : document.getElementById('empexp').value,
    

    salary : document.getElementById('empsal').value
    
 }
    

    localStorage.setItem(`${ID}`,JSON.stringify(empData))
    alert('Employee adeed successfully')
}

function search(){
  key = document.getElementById('searchs').value;

  if(key in localStorage)
  {
  var empDetails = JSON.parse(localStorage.getItem(key))
   var emid =empDetails.ID
   var emname =empDetails.name
   var emaddress =empDetails.address
   var emdesignation =empDetails.designation
   var emexperience =empDetails.experience
   var emsalary =empDetails.salary

   result.innerHTML=`<div class="card mt-5" style="width: 18rem;">
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Employee ID:${emid}</li>
         <li class="list-group-item">Employee Name:${emname}</li>
         <li class="list-group-item">Employee Name:${emaddress}</li>
         <li class="list-group-item">Employee Designation:${emdesignation}</li>
         <li class="list-group-item">Employee Experience:${emexperience}</li>
         <li class="list-group-item">Employee Experience:${emsalary}</li>
       </ul>
     </div>`
    }
    else{
        //card.innerHTML=`<p>No Results Found</p>`
        alert('No results found')
    }
}




 

function logOut(){
window.location='./index.html'
localStorage.clear()
}