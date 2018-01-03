import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../beans/user';
import { DishReview } from '../beans/dish-review';
import { DishRating } from '../beans/dish-rating';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl: string = `${environment.apiUrl}/review`;

@Injectable()
export class DishreviewService {

  constructor(private http: HttpClient) { }

  addReview(dishreview: DishReview) {
    return this.http.post<DishReview>(apiUrl, dishreview, httpOptions);
  }

  getReviewsByUserId(userId: number) {
    return this.http.get<DishReview[]>(`${apiUrl}/${userId}`);
  }

  getDishRatings() {
    return this.http.get<DishRating[]>(`${apiUrl}/all`);
  }

  getAllReviews() {
    return this.http.get<DishReview[]>(apiUrl);
  }

}
