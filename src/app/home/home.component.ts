import { Component } from '@angular/core';
import { HomeService } from './home.service'
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private readonly homeService:HomeService){}
  welcome= 'Welcome to our club'

  verifyWelcomeLength = (welcomeText: String):boolean => {
    if(welcomeText.length<50) 
      return true
    return false  
  }

  cGetProducts() {
    console.log('Before http')
    this.homeService.sGetProducts().subscribe(
      (data) => {
        console.log('In http')
        console.log(data)
      })
      console.log('After http')
  }

  
}
