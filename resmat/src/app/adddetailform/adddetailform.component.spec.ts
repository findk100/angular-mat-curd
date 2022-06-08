import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailformComponent } from './adddetailform.component';

describe('AdddetailformComponent', () => {
  let component: AdddetailformComponent;
  let fixture: ComponentFixture<AdddetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddetailformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
