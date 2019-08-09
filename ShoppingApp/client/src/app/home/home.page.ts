import {environement} from '../../models/environements';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {
    this.loadArticles();

  }

  loadArticles(): void {
    let url =  '${environement.api_url}/Articles';
    console.log('url', url);
    this.http.get(url)
      .subscribe(articles => console.log('articles', articles));
  }

}
