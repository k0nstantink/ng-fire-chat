import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  subscribe: Subscription;
  name$: Observable<any>;
  title: string;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
   this.subscribe = this.router.params.subscribe(p => {
    this.name$ = p['name']; } );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
