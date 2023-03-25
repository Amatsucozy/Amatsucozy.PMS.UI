import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthenticatedCallbackComponent} from './authenticated-callback.component';

describe('AuthenticatedCallbackComponent', () => {
  let component: AuthenticatedCallbackComponent;
  let fixture: ComponentFixture<AuthenticatedCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticatedCallbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
