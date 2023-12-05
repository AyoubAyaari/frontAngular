import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieursComponent } from './ingenieurs.component';

describe('IngenieursComponent', () => {
  let component: IngenieursComponent;
  let fixture: ComponentFixture<IngenieursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngenieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
