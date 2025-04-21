import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { SearchFilterPipe } from './search-filter.pipe';
import { HackernewsService } from './service/hackernews.service';
import { StoryListComponent } from './story-list/story-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[FormsModule, CommonModule, NgxUiLoaderModule, StoryListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HackernewsService]
})
export class AppComponent {
  title = 'HackerClient';
  searchText:string = '';
  constructor() {}
}
