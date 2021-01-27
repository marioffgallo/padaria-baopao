import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCoreComponent } from './produtos-core.component';

describe('ProdutosCoreComponent', () => {
  let component: ProdutosCoreComponent;
  let fixture: ComponentFixture<ProdutosCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
