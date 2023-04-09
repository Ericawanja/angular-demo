import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProuductComponent } from './one-prouduct.component';

describe('OneProuductComponent', () => {
  let component: OneProuductComponent;
  let fixture: ComponentFixture<OneProuductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneProuductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProuductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
