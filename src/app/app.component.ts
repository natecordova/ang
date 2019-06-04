import { Component } from '@angular/core';

import { Employee } from './models/employee';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECTOCRUD';
   employeeArray: Employee[] =[
      {id:1, name: "Bruce", country: "USA"},
      {id:2, name: "Barry", country: "USA"},
      {id:3, name: "Tchala", country: "Wakanda"},
    ];

    selectedEmployee: Employee = new Employee();

    openForEdit(employee: Employee){
      this.selectedEmployee = employee;
    }

    addOrEdit(){
      
      if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
      }
      this.selectedEmployee = new Employee();
    }
    
    delete(){
      
      if(confirm('Are you sure you want to delete it?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee;
      }
      
    
    }
}
