import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { UserApiService } from './services/user-api.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ClarityModule } from 'clarity-angular';
import { ConfirmProfileComponent } from './confirm-profile/confirm-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TicketService } from './services/ticket.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AnonSidenavComponent } from './anon-sidenav/anon-sidenav.component';
import { CustSidenavComponent } from './cust-sidenav/cust-sidenav.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { LandingComponent } from './landing/landing.component';
import { GeneralSidenavComponent } from './general-sidenav/general-sidenav.component';
import { TicketlineService } from './services/ticketline.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { DishreviewService} from './services/dishreview.service';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent,
    ConfirmProfileComponent,
    OrderHistoryComponent,
    DashboardComponent,
    OrderDetailComponent,
    AnonSidenavComponent,
    CustSidenavComponent,
    AdminSidenavComponent,
    LandingComponent,
    GeneralSidenavComponent,
    ShoppingCartComponent,
    MenuComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBuwAE1PjHnQVx0PNpTjIo_S7m9YRAPVvw'
    })
  ],
  providers: [
    LoginService, 
    UserApiService, 
    TicketService, 
    TicketlineService, 
    DishService, 
    ShoppingCartService
  ],
<<<<<<< HEAD
  providers: [LoginService, UserApiService, TicketService, TicketlineService, DishService, DishReviewService],
=======
>>>>>>> c7d6d1d1b47907fc0c3666e0590191b4dd139b62
  bootstrap: [AppComponent]
})
export class AppModule {}
