import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  queueNum: string = '';
  dateNow: string = moment().format('DD/MM/YYYY, hh:mm:ss A');
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.queueNum = param['queueNum'];
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.print();
    }, 1000);
  }
}
