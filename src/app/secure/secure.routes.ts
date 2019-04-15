import { Routes } from "@angular/router";
import { DashboardComponent } from "../layouts/dashboard/pages/dashboard/dashboard.component";
import { CalendarComponent } from "../layouts/dashboard/pages/calendar/calendar.component";
import { BillingComponent } from "../layouts/dashboard/pages/billing/billing.component";
import { InvoicesComponent } from "../layouts/dashboard/pages/invoices/invoices.component";
import { VideosComponent } from "../layouts/dashboard/pages/videos/videos.component";
import { ResourcesComponent } from "../layouts/dashboard/pages/resources/resources.component";

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'resources', component: ResourcesComponent }
];