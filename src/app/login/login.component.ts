import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanillaService } from '../layout/servicio/planilla.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,public servicio:PlanillaService) {}



    ngOnInit() {
        this.servicio.logueado=false;
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
        this.servicio.logueado=true;
        this.router.navigate(['/planilla']);

    }
}
