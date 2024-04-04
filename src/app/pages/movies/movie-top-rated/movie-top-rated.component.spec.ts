import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopRatedComponent } from './movie-top-rated.component';

describe('MovieTopRatedComponent', () => {
  let component: MovieTopRatedComponent;
  let fixture: ComponentFixture<MovieTopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTopRatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
