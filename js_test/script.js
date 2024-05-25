document.addEventListener('DOMContentLoaded', datae = (e) =>  {
    const form = document.getElementById('employee-form');
    const tableBody = document.getElementById('employee-table-body');
    const totalEmployees = document.getElementById('total-employees');
    let employees = [];
  
    form.addEventListener('submit', dataE = (E) =>  {
      E.preventDefault();
  
      const name = document.getElementById('name').value;
      const jobRole = document.getElementById('job-role').value;
      const department = document.getElementById('department').value;
      const salary = document.getElementById('salary').value;
      const contactEmail = document.getElementById('contact-email').value;
      const workExperience = document.getElementById('work-experience').value;
  
      if (!name || !jobRole || !department || !salary || !contactEmail || !workExperience) {
        alert('Please fill in all fields');
        return;
      }
  
      const roleType = workExperience > 5 ? 'Senior' : 'Junior';
  
      const employee = { name, jobRole, department, salary, contactEmail, workExperience, roleType };
      employees.push(employee);
  
      renderTable();
      updateTotalEmployees();
      form.reset();
    });
  
    const table=() => {
      tableBody.innerHTML = '';
      employees.forEach(function(employee, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${employee.name}</td>
          <td>${employee.jobRole}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
          <td>${employee.contactEmail}</td>
          <td>${employee.workExperience}</td>
          <td>${employee.roleType}</td>
          <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    const updateTotalEmployees() {
      totalEmployees.textContent = employees.length;
    }
  
    window.deleteEmployee = function(index) {
      employees.splice(index, 1);
      table();
      updateTotalEmployees();
    };
  });
  