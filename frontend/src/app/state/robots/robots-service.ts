import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iRobot } from 'src/app/interfaces/robot';

@Injectable({ providedIn: 'root' })
export class RobotsService {
  constructor(private http: HttpClient) {}

  getRobots(): Observable<Array<iRobot>> {
    return this.http
      .get<{ items: iRobot[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((robots) => robots.items || []));
  }
}
