import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SurveyPanelComponent } from './components/survey-panel/survey-panel.component';
import { SurveyCircleComponent } from './components/survey-circle/survey-circle.component';
import { MainComponent } from './components/main/main.component';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';

//Creating Routes
const appRoutes: Routes =[
  {path:'', component:MainComponent},
  {path:'surveycircle', component: SurveyCircleComponent},
  {path:'surveypanel', component:SurveyPanelComponent},
  {path:'surveyresult', component:SurveyResultComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SurveyPanelComponent,
    SurveyCircleComponent,
    MainComponent,
    SurveyResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
