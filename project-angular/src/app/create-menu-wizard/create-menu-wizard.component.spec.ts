import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuWizardComponent } from './create-menu-wizard.component';

describe('CreateMenuWizardComponent', () => {
  let component: CreateMenuWizardComponent;
  let fixture: ComponentFixture<CreateMenuWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMenuWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
