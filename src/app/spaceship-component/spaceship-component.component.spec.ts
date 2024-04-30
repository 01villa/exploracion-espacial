import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipComponentComponent } from './spaceship-component.component';

describe('SpaceshipComponentComponent', () => {
  let component: SpaceshipComponentComponent;
  let fixture: ComponentFixture<SpaceshipComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceshipComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceshipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
