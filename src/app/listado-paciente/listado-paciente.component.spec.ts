import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPacienteComponent } from './listado-paciente.component';

describe('ListadoPacienteComponent', () => {
  let component: ListadoPacienteComponent;
  let fixture: ComponentFixture<ListadoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
