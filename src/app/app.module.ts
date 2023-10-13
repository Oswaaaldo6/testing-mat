import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { HttpClientModule } from '@angular/common/http';
import { DevHoursService } from './service/dev-hours.service';
import { ProxySizeService } from './service/proxy-size.service';
import { StddevComponent } from './stddev/stddev.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StddevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DevHoursService, ProxySizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
