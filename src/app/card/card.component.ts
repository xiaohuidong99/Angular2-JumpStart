import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import {CardTitleComponent} from '../card/card.title.component';


@Component({
  selector: 'fcCard',
  providers: [DataService],

  templateUrl: 'app/card/card.component.html',
  directives: [CORE_DIRECTIVES, CardTitleComponent]
})
export class CardComponent {

  public PanelTitle: String;
  public PanelContent: String;
  private customers : any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers = super.filteredCustomers
    this.PanelContent = "MyBody";
    this.PanelTitle = "MyTitle";
  }


}
