import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private _apiservice:ApiserviceService){}

    readData:any;

    ngOnInit(): void{
      this._apiservice.getApiData().subscribe((data)=>{
        console.log("Helloworld", data);

        this.readData = data.message;
      });
  }
}
