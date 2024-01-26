import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { CartComponent } from "../cart/cart.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [LoginComponent, RegisterComponent, CartComponent, RouterLink, RouterLinkActive]
})
export class HeaderComponent {

}
