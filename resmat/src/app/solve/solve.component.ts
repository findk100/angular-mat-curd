import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
data:string='This is an Application'
btnstattus:boolean=true
username:string=''
student:Observable<string[]> = of(['keshav','jha','male'])
studentsname: Observable<string>=of ('pradeep')
personobj={
  name:"ashish",
  age:24,
  location:"mumbai"

}
personbio:Observable<any[]>=of([this.personobj])


  constructor() { }

  ngOnInit(): void {
    this.student.subscribe(data=>{
      console.log(data);
    })
    this.studentsname.subscribe(dataa=>{
      console.log(dataa)
    })
    this.personbio.subscribe(display=>{
      console.log(display)
    })
    
  }
  changetitle(){
    this.data='this is a data binding'
  }

}
