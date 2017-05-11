import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListDetailsComponent } from './trip-list-details.component';

describe('TripListDetailsComponent', () => {
  let component: TripListDetailsComponent;
  let fixture: ComponentFixture<TripListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
