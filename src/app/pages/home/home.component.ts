import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private loading: boolean = false;

  constructor(private titleService: Title, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle('Home | Loïc Combis');

    setTimeout(() =>  {
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);
  }

}
