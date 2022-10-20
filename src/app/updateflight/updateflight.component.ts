import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  constructor( private router:Router,private flightserv:FlightService,private http:HttpClient,private activedrRoute:ActivatedRoute) { }

  //f: Flight = new Flight();
  getflightNo:any;
  flight:any={flightNo:"",source:"",destinatin:"",departure_time:"",arrival_time:"",flight_duration:"",ecomonySeat:"",businessSeat:"",ecomonyPrice:"",businessPrice:"",availableSeat:""}

  ngOnInit(): void {
     this.activedrRoute.paramMap.subscribe((params:ParamMap) =>{
      let flight_no= parseInt(params.get('flightNo'));
      //console.log(flight_no);
      this.getflightNo=flight_no;
     })

    this.getByFlightNo(this.getflightNo);
    // this.getByFlightNo();
  }

  getByFlightNo(flightNo:any){
    this.http.get("http://localhost:9099/getflight/"+flightNo).subscribe((data)=>this.flight=data);

  }

updateFlight(flight:any,flightNo:any){
  this.http.put("http://localhost:9099/UpdateFlight/"+flightNo,flight,{responseType:'text'as 'json'})
  .subscribe((data:any) => this.flight=data )
  this.router.navigate(['/viewflight'])

}

}
 