import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecuredViewsComponent} from './secured-views.component';

describe('SecuredViewsComponent', () => {
  let component: SecuredViewsComponent;
  let fixture: ComponentFixture<SecuredViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredViewsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecuredViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
