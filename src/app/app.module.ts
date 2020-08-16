import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorListComponent } from './components/operator-list/operator-list.component';

import { MaterialModule } from './material.module';
import { OperatorFormComponent } from './components/operator-form/operator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorListComponent,
    OperatorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
