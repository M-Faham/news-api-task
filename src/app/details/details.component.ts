import { IArticles } from './../articles';
import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news.service';
import { ActivatedRoute , Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public imgAlt = '../../assets/img/imgAlt.jpg'; // an altrintive to the article image in case it returns NULL
  public news: IArticles[] = [];  // an Array of IArticles to hold the data coming from the serivce

  public index = 0; // an index of the article clicked in the "news" array

  constructor(
    private _newsSerivce: NewsService,
    private _route: ActivatedRoute) { }



    ngOnInit() {
      this._newsSerivce.getNews().subscribe(data => { // subscribing to the service getNews function
        this.news = data.articles;  // data
        console.log('Good NEws everyone!');
        console.log(this.news[3].publishedAt);
      },
        error => { // loggin the error to the console if any occured
          console.log('ERROR:' + error);
        });



    this._route.paramMap.subscribe((params: ParamMap) => { // subscring to paramMap Serivce to activly getting the url
      this.index = parseInt(params.get('index') , 10);  // returning the index sent from the home component
    });
  }
}
