import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { OutputSectionComponent } from './output-section/output-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceSectionComponent,
    OutputSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
