import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user!: SocialUser;
  @Output() login= '';
  GoogleLoginProvider = GoogleLoginProvider;

  // private url = ( window.location.hostname.includes('localhost'))
  //           ? 'http://localhost:8080/api/auth/google'
  //           : 'https://restserver-mongodb.herokuapp.com/api/auth/google';


  constructor(  private authService: SocialAuthService,
                private loginService : LoginService,
                private cdRef : ChangeDetectorRef) { }



  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;

      
    //   if(user!=null){
    //     const {idToken} = user
    //     this.employeeService.userLogin={
    //       // name,
    //       // email
    //       idToken
    //   }
 

    // } 
    });


  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  googleLogin(){

    
    if(this.user!= null) {
      this.loginService.loginWithGoogle(this.user).subscribe((res)=>{ console.log(res) })
   }
}

}
