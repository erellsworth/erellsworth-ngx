import { Component } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

  }

  public launchMastodon(): void {
    console.log('launch');
  }
}
