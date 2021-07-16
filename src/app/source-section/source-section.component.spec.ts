import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSectionComponent } from './source-section.component';

describe('SourceSectionComponent', () => {
  let component: SourceSectionComponent;
  let fixture: ComponentFixture<SourceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
