import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPathComponent } from './news-path.component';

describe('NewsPathComponent', () => {
  let component: NewsPathComponent;
  let fixture: ComponentFixture<NewsPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
