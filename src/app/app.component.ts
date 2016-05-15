import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
<<<<<<< HEAD
import { OrdersComponent } from './orders/orders.component';
import {TestComponent} from './test/test.component';
import {EditComponent} from './test/edit/edit.test.component';


@Component({
=======
import { CustomerComponent } from './+customer/customer.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: module.id,
>>>>>>> master
  selector: 'app-container',
  templateUrl: './app/app.components.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
<<<<<<< HEAD
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/orders/:id', name: 'Orders', component: OrdersComponent    },
  { path: '/test', name:'Test', component: TestComponent},
  {path:'/test/edit', name:'EditContact', component: EditComponent}
])
export class AppComponent {

  constructor() {
=======
@Routes([
  { path: '/', component: CustomersComponent },
  { path: '/customer/:id', component: CustomerComponent },
  { path: '*', component: CustomerComponent }
])
export class AppComponent {
  
  constructor(private router: Router) {
>>>>>>> master

  }

}


//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
