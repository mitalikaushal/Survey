import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPanelComponent } from './survey-panel.component';

describe('SurveyPanelComponent', () => {
  let component: SurveyPanelComponent;
  let fixture: ComponentFixture<SurveyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
