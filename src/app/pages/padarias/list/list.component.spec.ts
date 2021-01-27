import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadariaListComponent } from './list.component';

describe('PadariaListComponent', () => {
  let component: PadariaListComponent;
  let fixture: ComponentFixture<PadariaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadariaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadariaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
