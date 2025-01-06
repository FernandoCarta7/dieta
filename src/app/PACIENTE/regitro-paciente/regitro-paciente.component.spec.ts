import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroPacienteComponent } from './regitro-paciente.component';

describe('RegitroPacienteComponent', () => {
  let component: RegitroPacienteComponent;
  let fixture: ComponentFixture<RegitroPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegitroPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
