import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitbuttonComponent } from './fruitbutton.component';

describe('FruitbuttonComponent', () => {
  let component: FruitbuttonComponent;
  let fixture: ComponentFixture<FruitbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
