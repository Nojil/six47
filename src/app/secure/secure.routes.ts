import { Routes } from "@angular/router";
import { DashboardComponent } from "../layouts/dashboard/pages/dashboard/dashboard.component";

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: DashboardComponent },
];