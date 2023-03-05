import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { PaginatedResults } from 'src/interfaces/misc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public content!: PaginatedResults;

  constructor(private contentService: ContentService) { }

  async ngOnInit(): Promise<void> {
    const content = await this.contentService.getHomeContents();
    if (content) { this.content = content; }
  }
}
