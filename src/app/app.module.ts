import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AddBenificiaryComponent } from './add-benificiary/add-benificiary.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCustomerComponent,
    HeaderComponent,
    WelcomeAdminComponent,
    AddBenificiaryComponent,
    AtmsimulatorComponent,
    PostNewsComponent,
    TransferFundsComponent,
    NewsComponent,
    AdminNavComponent,
    AdminHomeComponent,
    ManageCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'add-customer' ,component:AddCustomerComponent},
      {path:'login' ,component:LoginComponent},
      {path:'add-benificiary' ,component:AddBenificiaryComponent},
      {path:'atmsimulator' ,component:AtmsimulatorComponent},
      {path:'post-news' ,component:PostNewsComponent},
      {path:'transfer-funds' ,component:TransferFundsComponent}
      
 
     ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
