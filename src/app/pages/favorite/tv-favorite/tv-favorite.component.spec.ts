import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFavoriteComponent } from './tv-favorite.component';

describe('TvFavoriteComponent', () => {
  let component: TvFavoriteComponent;
  let fixture: ComponentFixture<TvFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
