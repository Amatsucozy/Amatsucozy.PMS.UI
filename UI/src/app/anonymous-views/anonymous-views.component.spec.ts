import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnonymousViewsComponent} from './anonymous-views.component';

describe('AnonymousViewsComponent', () => {
  let component: AnonymousViewsComponent;
  let fixture: ComponentFixture<AnonymousViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnonymousViewsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnonymousViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
