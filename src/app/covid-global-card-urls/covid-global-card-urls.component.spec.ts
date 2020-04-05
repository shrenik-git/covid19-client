import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGlobalCardUrlsComponent } from './covid-global-card-urls.component';

describe('CovidGlobalCardUrlsComponent', () => {
  let component: CovidGlobalCardUrlsComponent;
  let fixture: ComponentFixture<CovidGlobalCardUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGlobalCardUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGlobalCardUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
