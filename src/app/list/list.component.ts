import { Component, Input } from '@angular/core';
import { DetailComponent } from "../detail/detail.component";
import { HeaderComponent } from "../header/header.component";
import { ContainerComponent } from '../container/container.component';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [ContainerComponent, DetailComponent, HeaderComponent]
})
export class ListComponent {


    constructor(private routeObj : Router){}

    @Input() ReceivedData: any;

    view(id: number){
        this.routeObj.navigate(['details', id])
    }
}
