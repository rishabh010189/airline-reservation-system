import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingTemplateComponent } from './sorting-template.component';

describe('SortingTemplateComponent', () => {
  let component: SortingTemplateComponent;
  let fixture: ComponentFixture<SortingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
