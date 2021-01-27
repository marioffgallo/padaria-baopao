import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadariaEditComponent } from './edit.component';

describe('PadariaEditComponent', () => {
  let component: PadariaEditComponent;
  let fixture: ComponentFixture<PadariaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadariaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadariaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
