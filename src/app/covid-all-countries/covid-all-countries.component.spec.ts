import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAllCountriesComponent } from './covid-all-countries.component';

describe('CovidAllCountriesComponent', () => {
  let component: CovidAllCountriesComponent;
  let fixture: ComponentFixture<CovidAllCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidAllCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
