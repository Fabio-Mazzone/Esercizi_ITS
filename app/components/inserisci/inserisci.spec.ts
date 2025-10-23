import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inserisci } from './inserisci';

describe('Inserisci', () => {
  let component: Inserisci;
  let fixture: ComponentFixture<Inserisci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inserisci]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inserisci);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
