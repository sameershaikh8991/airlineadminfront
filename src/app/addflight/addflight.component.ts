import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  flight: Flight = new Flight();
 
  constructor(private flightService:FlightService,private _router:Router) { }

  ngOnInit(): void {
  }

  addFlight(){
    
    this.flightService.addFlight(this.flight).subscribe(
      data => {
        this._router.navigate(['/viewflight'])
      } ,
      error => 
      {
        console.log("error occured");
      }
    )

  }



}
