import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCircleComponent } from './survey-circle.component';

describe('SurveyCircleComponent', () => {
  let component: SurveyCircleComponent;
  let fixture: ComponentFixture<SurveyCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
