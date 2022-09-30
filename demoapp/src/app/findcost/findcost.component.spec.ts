import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcostComponent } from './findcost.component';

describe('FindcostComponent', () => {
  let component: FindcostComponent;
  let fixture: ComponentFixture<FindcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindcostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
