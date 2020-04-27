import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  articleList: Array<any> = [];


  constructor(public newsApiService: NewsApiService) {

    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsApiService.getTopHeadlines('us','coronavirus').subscribe((result: any) => {
      console.log('result', result);
      this.articleList = result.articles.filter(article => article.url);
      console.log(this.articleList);
    }, (error) => {
      console.log('error', error);
    });
  }


}
