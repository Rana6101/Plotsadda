import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUploadingComponent } from './project-uploading.component';

describe('ProjectUploadingComponent', () => {
  let component: ProjectUploadingComponent;
  let fixture: ComponentFixture<ProjectUploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUploadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
