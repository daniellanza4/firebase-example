import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEmergenteDanielLanza } from './tecnologia-emergente-daniel-lanza';

describe('TecnologiaEmergenteDanielLanza', () => {
  let component: TecnologiaEmergenteDanielLanza;
  let fixture: ComponentFixture<TecnologiaEmergenteDanielLanza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaEmergenteDanielLanza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEmergenteDanielLanza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
