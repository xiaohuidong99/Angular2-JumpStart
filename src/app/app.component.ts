import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import {TestComponent} from './test/test.component';
import {EditComponent} from './test/edit/edit.test.component';


@Component({
  selector: 'app-container',
  templateUrl: './app/app.components.html',
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/orders/:id', name: 'Orders', component: OrdersComponent    },
  { path: '/test', name:'Test', component: TestComponent},
  {path:'/test/edit', name:'EditContact', component: EditComponent}
])
export class AppComponent {

  constructor() {

  }

}
