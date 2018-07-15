import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    styleUrls: ['welcome.component.css'],
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.router.navigate(['home']);
        }
    }
    loginUser() {
        this.router.navigate(['login']);
    }
    registerUser(){
        this.router.navigate(['register']);
    }

}