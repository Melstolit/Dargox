import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackmsgComponent } from './backmsg.component';

describe('BackmsgComponent', () => {
  let component: BackmsgComponent;
  let fixture: ComponentFixture<BackmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
