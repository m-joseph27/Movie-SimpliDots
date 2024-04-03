import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTVComponent } from './film-tv.component';

describe('FilmTVComponent', () => {
  let component: FilmTVComponent;
  let fixture: ComponentFixture<FilmTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmTVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
