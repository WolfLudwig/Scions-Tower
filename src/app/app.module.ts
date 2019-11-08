import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScionsComponent } from './scions/scions.component';
import { ScionDetailComponent } from './scion-detail/scion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ScionsComponent,
    ScionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
