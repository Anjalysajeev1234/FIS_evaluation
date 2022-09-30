import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpackagelistComponent } from './tourpackagelist.component';

describe('TourpackagelistComponent', () => {
  let component: TourpackagelistComponent;
  let fixture: ComponentFixture<TourpackagelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourpackagelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourpackagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
