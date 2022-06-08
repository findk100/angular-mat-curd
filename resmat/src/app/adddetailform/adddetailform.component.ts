import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from '../shared/restaurent.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-adddetailform',
  templateUrl: './adddetailform.component.html',
  styleUrls: ['./adddetailform.component.css']
})
export class AdddetailformComponent implements OnInit {
  allRestarantData: any

  formValue!: FormGroup
  actionbtn:string='close'
  restaurentModelObj: RestaurentData = new RestaurentData


  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<AdddetailformComponent>
  ) { }

  ngOnInit(): void {
    this.prepareForm();
    if(this.data){
      this.actionbtn="Update"
      this.formValue.controls['name'].setValue(this.data.name)
          this.formValue.controls['email'].setValue(this.data.email)
         this.formValue.controls['mobile'].setValue(this.data.mobile)
         this.formValue.controls['address'].setValue(this.data.address)
         this.formValue.controls['services'].setValue(this.data.services)
        }
        console.log(this.data)
  }

  prepareForm() {
    this.formValue = this.formBuilder.group({
     
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
  }
  // add all details 
  addResto() {
    console.log(this.formValue);

    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurant Reacords Added Sucessfully ");
      this.formValue.reset()
      this.getAlldata(); // when e post are data instance add on table
    },
      err => {
        alert("Something Wrong")
      }
    )
  }
  //get all data 
  getAlldata() {
    this.api.getRestaurant().subscribe(res => {
      this.allRestarantData = res;
    })
  }




}

