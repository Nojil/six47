import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Router } from "@angular/router";

@Injectable()
export class Guard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;

    constructor(protected router: Router) {}

     canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/home']);
        return false;
    }
}