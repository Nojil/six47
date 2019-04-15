import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';

import { FooterComponent } from './layouts/core/footer/footer.component';
import { SideMenuComponent } from './layouts/core/side-menu/side-menu.component';
import { NavMenuComponent } from './layouts/core/nav-menu/nav-menu.component';
import { HomeComponent } from './layouts/core/pages/home/home.component';
import { CurriculumComponent } from './layouts/core/pages/curriculum/curriculum.component';
import { ServicesComponent } from './layouts/core/pages/services/services.component';
import { PricingComponent } from './layouts/core/pages/pricing/pricing.component';
import { ContactComponent } from './layouts/core/pages/contact/contact.component';
import { HeroComponent } from './shared/hero/hero.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

import { DashboardComponent } from './layouts/dashboard/pages/dashboard/dashboard.component';
import { Guard } from './guard.service';
import { SidebarComponent } from './layouts/dashboard/shared/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/dashboard/shared/navbar/navbar.component';
import { CalendarComponent } from './layouts/dashboard/pages/calendar/calendar.component';
import { BillingComponent } from './layouts/dashboard/pages/billing/billing.component';
import { InvoicesComponent } from './layouts/dashboard/pages/invoices/invoices.component';
import { VideosComponent } from './layouts/dashboard/pages/videos/videos.component';
import { ResourcesComponent } from './layouts/dashboard/pages/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    FooterComponent,
    SideMenuComponent,
    NavMenuComponent,
    HomeComponent,
    CurriculumComponent,
    ServicesComponent,
    PricingComponent,
    ContactComponent,
    HeroComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    CalendarComponent,
    BillingComponent,
    InvoicesComponent,
    VideosComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
