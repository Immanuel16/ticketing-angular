import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerProdModel } from "../_models/app.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private urlApi = 'http://localhost:3000/users';
  constructor(private http: HttpClient){}

  getListProduct(){
    return this.http.get(this.urlApi);
  }

  addProduct(body: CustomerProdModel){
    return this.http.post(this.urlApi, body);
  }
}