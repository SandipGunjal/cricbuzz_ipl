import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMatchComponent } from './live-match.component';

describe('LiveMatchComponent', () => {
  let component: LiveMatchComponent;
  let fixture: ComponentFixture<LiveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
