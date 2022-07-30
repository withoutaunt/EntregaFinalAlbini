import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoReactComponent } from './curso-react.component';

describe('CursoReactComponent', () => {
  let component: CursoReactComponent;
  let fixture: ComponentFixture<CursoReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
