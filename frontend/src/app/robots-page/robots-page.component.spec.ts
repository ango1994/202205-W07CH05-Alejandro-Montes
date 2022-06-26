import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsPageComponent } from './robots-page.component';

describe('RobotsPageComponent', () => {
  let component: RobotsPageComponent;
  let fixture: ComponentFixture<RobotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
