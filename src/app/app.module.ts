import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReusablePickListComponent } from './components/reusable-pick-list/reusable-pick-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusablePickListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
