import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTvComponent } from './series-tv.component';

describe('SeriesTvComponent', () => {
  let component: SeriesTvComponent;
  let fixture: ComponentFixture<SeriesTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesTvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
