import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  headerTop: number = 100;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.pageYOffset >= 100) {
      this.headerTop = 0;
    } else if (window.pageYOffset >= 0 && window.pageYOffset <= 100) {
      this.headerTop = 100 - window.pageYOffset;
    } else {
      this.headerTop = 100;
    }
    this.cdr.detectChanges();
  }

  ngOnInit() {
  }

}
