import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../enviroments/environment';
import { GET_ALL_CATEGORIES } from '../enviroments/api-path';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.httpClient
      .get(environment.apiBaseUrl + GET_ALL_CATEGORIES)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: {
    error: {
      message: string;
    };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.error.message}`;
    }
    console.log(error);
    return throwError(errorMessage);
  }
}
