import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const GiphyApiUrl = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy Search';
  gifs: any[];

  performSearch(searchTerm: HTMLInputElement): void {
    this._http
      .get(GiphyApiUrl + searchTerm.value)
      .subscribe(
        (res: Response) => this.gifs = res.json().data,
        error => this._handleError(error));
  }

  private _handleError(error) {
    const errorMsg = error.json().error || 'Error ' + error;
    console.log(errorMsg);
  }

  constructor(private _http: Http) { }
}
