import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AthenticationService } from '@app/athentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit, OnInit {
  regForm: FormGroup 
  loginForm: FormGroup
  constructor(public router: Router, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AthenticationService ) {}

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
  
    if (sign_up_btn && container) {
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
    }
  
    if (sign_in_btn && container) {
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    }
  }
  
  

  tabs() {
    this.router.navigate(['tabs']);
  }

  ngOnInit(){
    this.regForm = this.formBuilder.group({
      username :['', [Validators.required]],
      email :['', [
        Validators.required, 
        Validators.email,
        Validators.pattern("")
        //[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$
      ]], 
      password :['', [
      Validators.required, 
      Validators.pattern("") 
      //(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z])

      ]]
    })
    this.loginForm = this.formBuilder.group({
      email :['', [
        Validators.required, 
        Validators.email,
        Validators.pattern("")
        //[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$
      ]], 
      password :['', [
      Validators.required, 
      Validators.pattern("") 
      //(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z])

      ]]
    })
  }

  get errorControl() {
    return { ...this.regForm?.controls, ...this.loginForm?.controls };
  }


  
  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user  = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
      })
      if(user){
        loading.dismiss()
        this.router.navigate(['/tabs'])
      }
      else{
        console.log('Provide correct values')
      }
    }
  }
  async signIn(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
      });
      if(user){
        loading.dismiss();
        this.router.navigate(['/tabs']);
      }
      else{
        console.log('Provide correct values');
      }
    }
  }
  
}
