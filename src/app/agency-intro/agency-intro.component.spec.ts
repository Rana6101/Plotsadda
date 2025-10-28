import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyIntroComponent } from './agency-intro.component';

describe('AgencyIntroComponent', () => {
  let component: AgencyIntroComponent;
  let fixture: ComponentFixture<AgencyIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
