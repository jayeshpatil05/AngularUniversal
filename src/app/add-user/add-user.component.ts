import { Component, OnInit, HostListener } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: [ './add-user.component.scss' ]
})
export class AddUserComponent implements OnInit {
    SignupForm:FormGroup;
    constructor(private service: UsersService, private fb:FormBuilder, private router:  Router) {
        this.SignupForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
        });
    
        this.SignupForm.setValue({
            'name':'Jayesh',
            'email':'jayesh@gmail.com'
        })
    }
    ngOnInit(): void {}

    onSubmit(){
        this.service.createUser(this.SignupForm.value)
        .subscribe(result => {
            console.log(result);
            if(result.success) {
                this.router.navigate(["users"]);
            }
        },(err)=>{
            console.log(err, ' -- -  error 31');
        });
    }
    
}