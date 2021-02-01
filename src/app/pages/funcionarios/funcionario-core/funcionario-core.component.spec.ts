import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCoreComponent } from './funcionario-core.component';

describe('FuncionarioCoreComponent', () => {
  let component: FuncionarioCoreComponent;
  let fixture: ComponentFixture<FuncionarioCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
