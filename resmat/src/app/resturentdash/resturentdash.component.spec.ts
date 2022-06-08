import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentdashComponent } from './resturentdash.component';

describe('ResturentdashComponent', () => {
  let component: ResturentdashComponent;
  let fixture: ComponentFixture<ResturentdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturentdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturentdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
