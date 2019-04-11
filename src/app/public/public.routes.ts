import { Routes } from "@angular/router";
import { CurriculumComponent } from "../layouts/core/pages/curriculum/curriculum.component";
import { ServicesComponent } from "../layouts/core/pages/services/services.component";
import { PricingComponent } from "../layouts/core/pages/pricing/pricing.component";
import { ContactComponent } from "../layouts/core/pages/contact/contact.component";
import { HomeComponent } from "../layouts/core/pages/home/home.component";

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '', component: HomeComponent},
    {path: 'curriculum', component: CurriculumComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'contact', component: ContactComponent}
];