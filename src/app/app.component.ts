import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HackernewsService } from './hackernews.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NgxPaginationModule, NgxUiLoaderModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HackernewsService]
})
export class AppComponent {
  title = 'HackerClient';
  stories: any[];
  page: number = 1;
  count: number = 0;
  tablesize: number = 10;
  tablesizes: any = [5, 10, 15, 20]
  constructor(private _service: HackernewsService,
    private _loaderService: NgxUiLoaderService) {
    this.stories = [];
  }

  ngOnInit() {
    this.search('');
  }

  search(event: any) {
    this._loaderService.start();
    let search = (event.value ? event.value : "")
    this._service.getStories(search).subscribe((res) => {
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
  onTableDataChange(event: any) {
    this.page = event;
    this.search('');
  }
  onTableSizeChanges(event: any): void {
    this.page = event.target.value;
    this.page = 1;
    this.search('');
  }




}
