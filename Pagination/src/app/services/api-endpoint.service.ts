import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private url = 'https://dummyjson.com/products?limit=104';

    dataSubject = new Subject();
    dataSubject$ = this.dataSubject.asObservable();

    constructor(private http: HttpClient) { }
    getData() {
        this.http.get(this.url).subscribe((res) => {
                this.dataSubject.next(res); 
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }
}

/**
 https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
 */