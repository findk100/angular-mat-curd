import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


import { MatDialog} from '@angular/material/dialog';
import { AdddetailformComponent } from '../adddetailform/adddetailform.component';
import { ApiService } from '../shared/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-resturentdash',
  templateUrl: './resturentdash.component.html',
  styleUrls: ['./resturentdash.component.css']
})

export class ResturentdashComponent implements OnInit {
  formValue!: FormGroup
  DialogContentExampleDialog: any
  allRestarantData: any
  displayedColumns: string[] = ['name', 'email', 'mobile', 'address', 'services', 'action'];
  dataSource?: any[];

  constructor(private dialog: MatDialog, 
    private api: ApiService,
     
   
    ) { }


  ngOnInit(): void {
    this.getAlldata();
   }

  
  


  openDialog() {
    this.dialog.open(AdddetailformComponent, { width: '800px' })
  }

  //get all data 
  getAlldata() {
    this.api.getRestaurant().subscribe(res => {
      this.allRestarantData = res;
    })
  }
  //delete data 
  
  deleteResto(id:number){
    this.api.deleteRestaurant(id).subscribe({
      next:(res)=>{
        alert("Products Deleted Sucessfully")
        this.getAlldata();
      },
      error:()=>{
        alert("error while deleting data ")
      }
    })
  }
  onEditResto(row:any) {
    this.getAlldata();
    console.log(row)
    // this.formValue.controls['name'].setValue(data.name);
    // this.formValue.controls['email'].setValue(data.name);
    // this.formValue.controls['mobile'].setValue(data.name);
    // this.formValue.controls['address'].setValue(data.name);
    // this.formValue.controls['services'].setValue(data.name);
    this.dialog.open(AdddetailformComponent,{
      width:'30%',
      data:row
      
      
      
    }).afterClosed().subscribe
    width:'30%'

  
   }

  // onEditResto(data:any){
  //   console.log(data)
  //   this.api.upadteRestaurant(this.formValue.value,this.editdata.id).subscribe({
  //     next:(res)=>{
  //       alert("updste succ")
  //       this.formValue.reset()
  //       this.dialogRef.close('update')
  //     },
  //     error:()=>{
  //       alert("Error")
  //     }
  //   })
  }





