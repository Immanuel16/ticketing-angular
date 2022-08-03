import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerProdModel } from '../_models/app.model';
import { AppService } from '../_service/app.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  customerList: CustomerProdModel[] = [];
  displayedColumns: string[] = ['id', 'picName', 'prodName', 'price', 'action'];
  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  private getCustomerList(): void{
    const sub = this.service.getListProduct().subscribe((res: CustomerProdModel[]) => {
      this.customerList = res;
    });
    this.subs.push(sub);
  }

  printQueueNum(queueNum: string): void {
    this.router.navigateByUrl(`/request-queue-number?queueNum=${queueNum}`);
  }

}
