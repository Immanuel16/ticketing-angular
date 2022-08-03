import { AppService } from './../_service/app.service';
import { CustomerProdModel } from './../_models/app.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit, OnDestroy {
  subs: Subscription[] = []
  item: CustomerProdModel = new CustomerProdModel();
  totalVisitor: number = 0;

  constructor(private service: AppService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.getTotalVisitor();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  private getTotalVisitor(): void{
    const sub = this.service.getListProduct().subscribe((res: any) => {
      this.totalVisitor = res.length;
      this.item.queueNum = this.generateQueueNum(this.totalVisitor + 1);
      console.log(this.item.queueNum)
    });
    this.subs.push(sub);
  }

  private generateQueueNum(totalVisitor: number): string{
    return `PRIEDS-QUE-${(totalVisitor) < 10 ? `0${totalVisitor}` : totalVisitor}`
  }

  addVisitor(){
    const sub = this.service.addProduct(this.item).subscribe(res => {
      this.snackbar.open('Data berhasil ditambahkan', 'Tutup');
      this.router.navigateByUrl('/visitor-list');
    });
    this.subs.push(sub);
  }

}
