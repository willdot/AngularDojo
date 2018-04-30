import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../shared/services/plans.service';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.css']
})
export class MyPlansComponent implements OnInit {

  myPlans;

  constructor(private _myPlansService: PlansService) { }

  ngOnInit() {

    this._myPlansService.getPlans()
      .subscribe(response => {
        this.myPlans = response;
      },
        error => {
          console.log("My plans getPlans: Failed");
        }
      );
  }

}
