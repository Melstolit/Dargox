import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackmsgComponent } from './backmsg/backmsg.component';

const routes: Routes = [
  { path: 'BackMsg', component: BackmsgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
