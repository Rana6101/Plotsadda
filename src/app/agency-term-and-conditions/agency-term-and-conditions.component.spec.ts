import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyTermAndConditionsComponent } from './agency-term-and-conditions.component';

describe('AgencyTermAndConditionsComponent', () => {
  let component: AgencyTermAndConditionsComponent;
  let fixture: ComponentFixture<AgencyTermAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyTermAndConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyTermAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
