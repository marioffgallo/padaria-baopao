import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadariaCoreComponent } from './padaria-core.component';

describe('PadariaCoreComponent', () => {
  let component: PadariaCoreComponent;
  let fixture: ComponentFixture<PadariaCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadariaCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadariaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
