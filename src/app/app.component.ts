import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Carol';
  @ViewChild('loading', {static: true}) loading: ElementRef;

  ngAfterViewInit(): void {
    // this.loading.nativeElement.remove();

    const elementById = document.getElementById('loading');
    if (elementById != null) {
      elementById.remove();
    }

  }
}
