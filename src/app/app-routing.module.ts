import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';


const routes: Routes = [
  {
    path:'admin',
  
    component:AdminNavComponent,
  },
  {
    path:'news',
  
    component:NewsComponent,
  },
  {
    path:'add-customer',
  
    component:AddCustomerComponent,
  },
  {
    path:'admin-home',
  
    component:AdminHomeComponent,
  },
  {
    path:'post-news',
  
    component:PostNewsComponent,
  },
  {
    path:'manage-customer',
  
    component:ManageCustomerComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
