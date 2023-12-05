import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIngenieurComponent } from './update-ingenieur.component';

describe('UpdateIngenieurComponent', () => {
  let component: UpdateIngenieurComponent;
  let fixture: ComponentFixture<UpdateIngenieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIngenieurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIngenieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
