import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { IArticles } from '../articles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgAlt = '../../assets/img/imgAlt.jpg'; // an altrintive to the article image in case it returns NULL
  public news: IArticles[] = [];  // an Array of IArticles to hold the data coming from the serivce

  constructor(
    private _router: Router,
    private _newsSerivce: NewsService) { } // Injecting the home component with serivice

  ngOnInit() {
    this._newsSerivce.getNews().subscribe(data => { // subscribing to the service getNews function
      this.news = data.articles;  // data
      console.log('Good NEws everyone!');
      console.log(this.news[3].publishedAt);
    },
      error => { // loggin the error to the console if any occured
        console.log('ERROR:' + error);
      });
  }


  onSelect(index: number) {
    this._router.navigate(['/details', index]);
  }
}

