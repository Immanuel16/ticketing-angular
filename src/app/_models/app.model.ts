export class CustomerProdModel {
  picName: string = '';
  prodName: string = '';
  prodAddress: string = '';
  prodSite: string = '';
  prodDesc: string = '';
  prodPrice: number = 0;
  queueNum: string = '';
  constructor(data?: any){
    if(data){
      this.picName = data.picName;
      this.prodName = data.prodName;
      this.prodAddress = data.prodAddress;
      this.prodSite = data.prodSite;
      this.prodDesc = data.prodDesc;
      this.prodPrice = data.prodPrice;
    }
  }
}