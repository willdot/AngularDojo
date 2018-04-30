import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';
import { SharedModule } from './shared/shared.module';
import { PlansService } from './shared/services/plans.service';
import { AppConfig } from './app.config';

const appRoutes: Routes = [
  { path: '', component: NewPlanComponent },
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'my-plans', component: MyPlansComponent },
  { path: 'my-tags', component: MyTagsComponent },
];

function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NewPlanComponent,
    MyPlansComponent,
    MyTagsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    PlansService,
    AppConfig,
    {
      provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
