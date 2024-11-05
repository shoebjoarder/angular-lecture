import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryInputComponent } from './grocery-input.component';

describe('GroceryInputComponent', () => {
  let component: GroceryInputComponent;
  let fixture: ComponentFixture<GroceryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
