import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPanelComponent } from './agency-panel.component';

describe('AgencyPanelComponent', () => {
  let component: AgencyPanelComponent;
  let fixture: ComponentFixture<AgencyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
