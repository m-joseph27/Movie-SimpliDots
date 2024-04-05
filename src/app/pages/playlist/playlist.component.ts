import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { TrandingComponent } from '../../components/tranding/tranding.component';
import { PlayingComponent } from '../../components/playing/playing.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovieServices } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    JumbotronComponent,
    TrandingComponent,
    PlayingComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
  providers: [ MovieServices ]
})
export class PlaylistComponent implements OnInit, AfterViewInit, OnDestroy {
  trending: any[] = [];
  movies: any[] = [];
  page: number = 1;

  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;

  constructor(
    private movieServices: MovieServices,
  ) {}

  ngOnInit() {
    this.loadAllMovies();
    this.loadTrandingMovies();
  }

  ngAfterViewInit() {
    this.loadAllMovies();
    this.addScrollEventListener();
  }

  ngOnDestroy() {
    this.removeScrollEventListener();
  }


  private addScrollEventListener() {
    this.scrollingContainer.nativeElement.addEventListener('scroll', this.onContainerScroll.bind(this));
  }

  private removeScrollEventListener() {
    this.scrollingContainer.nativeElement.removeEventListener('scroll', this.onContainerScroll.bind(this));
  }

  @HostListener('window:scroll', ['$event'])
  onContainerScroll() {
    const container = this.scrollingContainer.nativeElement;
    const threshold = 100; 
    const position = container.scrollTop + container.offsetHeight;
    const height = container.scrollHeight;

    if (position + threshold >= height) {
      this.loadAllMovies(); 
    }
  }

  loadAllMovies() {
    this.movieServices.getAllMovies(this.page).subscribe(data => {
      this.movies = [...this.movies, ...data.results];
      this.page++;
    });
  }

  loadTrandingMovies() {
    this.movieServices.getTrendingMovies().subscribe(tren => {
      this.trending = tren.results;
    });
  }
}
