import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponente2Component } from '../component/nome-componente2.component';

describe('NomeComponente2Component', () => {
  let component: NomeComponente2Component;
  let fixture: ComponentFixture<NomeComponente2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomeComponente2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
