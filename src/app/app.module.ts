import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserListService } from './user-list.service';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UserListComponent } from './user-list/user-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale, thBeLocale } from 'ngx-bootstrap/chronos';

registerLocaleData(en);
defineLocale('th-be', thBeLocale);

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, BsDatepickerConfig, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
