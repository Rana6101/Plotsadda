import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListingComponent } from './agency-listing.component';

describe('AgencyListingComponent', () => {
  let component: AgencyListingComponent;
  let fixture: ComponentFixture<AgencyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
