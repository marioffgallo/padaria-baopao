import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEditComponent } from './edit.component';

describe('ProdutoProdutoEditComponent', () => {
  let component: ProdutoEditComponent;
  let fixture: ComponentFixture<ProdutoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
