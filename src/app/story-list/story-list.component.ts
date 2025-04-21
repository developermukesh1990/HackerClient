import { Component, Input } from '@angular/core';
import { HackernewsService } from '../service/hackernews.service';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from '../search-filter.pipe';


@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NgxPaginationModule, NgxUiLoaderModule,SearchFilterPipe],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent {
  stories: any[];
  page: number = 1;
  count: number = 0;
  pageSize: number = 10;
  pagesizes: any = [5, 10, 15, 20];
   @Input() searchText = ''
  constructor(private _service: HackernewsService,private _loaderService: NgxUiLoaderService){ 
    this.stories = [];
  }

  ngOnInit() {
    this.getTopBestStories();
  }

  getTopBestStories() {
    this._loaderService.start();
    this._service.getStories().subscribe((res) => {
      this.stories=res
      
    },
    (error) => {
      console.error('Error handler:', error);
      
    })
    this._loaderService.stop();
  }
  open(url: string) {
    window.open(url, "_blank");
  }
  OnPageSizeChange(event: any) {
    this.page = event;
    this.getTopBestStories();
  }
  OnPageSizeChanges(event: any): void {
    this.page = event.target.value;
    this.page = 1;
    this.getTopBestStories();
  }

}
