import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import {CardComponent} from '../card/card.component';


@Component({
  selector: 'fctitel',
  providers: [DataService],

  templateUrl: 'app/card/card.title.component.html',
  directives: [CORE_DIRECTIVES,CardTitleComponent]
})


export class CardTitleComponent {

  public PanelTitle: String;
  public PanelContent: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.PanelTitle = "MyTitle";
  }


}
