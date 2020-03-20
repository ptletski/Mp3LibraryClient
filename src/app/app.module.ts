import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule, Store } from '@ngrx/store';
import { adminReducer } from './reducers/client.reducer';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { DraggableModule } from './Lib/draggable';
import { ModalComponent } from './Lib/modal/modal.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CreateAdminLocationComponent } from './create-admin-location/create-admin-location.component';
import { ReadAdminLocationComponent } from './read-admin-location/read-admin-location.component';
import { PerformAdminComponent } from './perform-admin/perform-admin.component';
import { AboutComponent } from './about/about.component';
import { Mp3httpService } from './mp3http.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListComponent,
    HomeComponent,
    AdminComponent,
    CreateAdminLocationComponent,
    ReadAdminLocationComponent,
    PerformAdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    DraggableModule,
    DataTablesModule,
    HttpClientModule,
    NgxSpinnerModule,
    StoreModule.forRoot({
      adminLocation: adminReducer
    })
  ],
  providers: [Mp3httpService, Store],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
