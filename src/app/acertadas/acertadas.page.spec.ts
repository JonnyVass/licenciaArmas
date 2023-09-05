import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcertadasPage } from './acertadas.page';

describe('AcertadasPage', () => {
  let component: AcertadasPage;
  let fixture: ComponentFixture<AcertadasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcertadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
