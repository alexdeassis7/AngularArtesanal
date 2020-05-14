import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasFabricacionComponent } from './lineas-fabricacion.component';

describe('LineasFabricacionComponent', () => {
  let component: LineasFabricacionComponent;
  let fixture: ComponentFixture<LineasFabricacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasFabricacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasFabricacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
