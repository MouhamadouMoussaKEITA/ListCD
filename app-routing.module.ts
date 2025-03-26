import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCDComponent } from './src/app/list-cd/list-cd.component';
import { HomeComponent } from './src/app/home/home.component';
import { CdComponent } from './src/app/cd/cd.component';
import { NewCDComponent } from './src/app/new-cd/new-cd.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: ListCDComponent
  },
  {
    path: 'cd/:id',
    component: CdComponent
  },
  {
    path: 'new-cd',
    component: NewCDComponent
  }

];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),

  ]

})
export class AppRoutingModule { }

