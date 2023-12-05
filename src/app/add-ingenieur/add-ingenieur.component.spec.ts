import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngenieurComponent } from './add-ingenieur.component';

describe('AddIngenieurComponent', () => {
  let component: AddIngenieurComponent;
  let fixture: ComponentFixture<AddIngenieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngenieurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngenieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
