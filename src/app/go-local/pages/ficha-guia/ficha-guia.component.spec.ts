import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaGuiaComponent } from './ficha-guia.component';

describe('FichaGuiaComponent', () => {
  let component: FichaGuiaComponent;
  let fixture: ComponentFixture<FichaGuiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaGuiaComponent]
    });
    fixture = TestBed.createComponent(FichaGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
