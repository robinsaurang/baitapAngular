import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  urls = 'http://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) {
  }

  getContent(): Observable<any> {
    return this.http.get(this.urls);
  }
}
