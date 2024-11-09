import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDynamicComponent } from './news-dynamic.component';

describe('NewsDynamicComponent', () => {
  let component: NewsDynamicComponent;
  let fixture: ComponentFixture<NewsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
