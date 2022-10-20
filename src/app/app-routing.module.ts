import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AllflightComponent } from './allflight/allflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';


const routes: Routes = [
  {path:'add',component:AddflightComponent},
  {path:'viewflight',component:AllflightComponent},
  {path:'update/:flightNo',component:UpdateflightComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
