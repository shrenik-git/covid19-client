import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGlobalComponent } from './covid-global.component';

describe('CovidGlobalComponent', () => {
  let component: CovidGlobalComponent;
  let fixture: ComponentFixture<CovidGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
