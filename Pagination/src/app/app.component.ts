import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/api-endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pagination';
  products: any;
  page:number=1;
  productsData: any;
  paginationCount: any=[];
  limit=1;
  constructor(private httpService: HttpService){
    this.getData();
  }
  ngOnInit() {
    this.httpService.getData();
  }
  getData(){
    this.httpService.dataSubject$.subscribe((response:any) => { 
      this.productsData = response.products;
      this.limit =  Math.ceil(response.limit/10);
      console.log(this.limit);
      //Displaying only 10 product
      this.pagination(this.page);
      this.formPagination()
    },
    (error) => { console.log(error); });
  }
  pagination(pageNumber:number){
    this.products = this.productsData.slice(pageNumber*10-10,pageNumber*10)
  }
  formPagination(){
    for(let i=1;i<=this.limit;i++){
      this.paginationCount.push(i);
    }
  }
  handlePagination(index:number){
    if(index<1|| index> this.limit) return;
    this.page = index;
    this.pagination(index)
  }
}
