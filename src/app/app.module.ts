import { RupiahPipe } from './_pipe/rupiah.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './tools/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';
import { AppService } from './_service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxBarcodeModule } from 'ngx-barcode';


const currencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: false,
  decimal: ',',
  precision: 0,
  prefix: 'Rp ',
  thousands: '.',
  suffix: '',
  nullable: false,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
    VisitorListComponent,
    RupiahPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxCurrencyModule.forRoot(currencyMaskConfig),
    FormsModule,
    HttpClientModule,
    NgxBarcodeModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
