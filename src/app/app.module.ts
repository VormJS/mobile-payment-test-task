import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { OperatorListComponent } from './components/operator-list/operator-list.component';
import { OperatorFormComponent } from './components/operator-form/operator-form.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) ={};

@NgModule({
  declarations: [
    AppComponent,
    OperatorListComponent,
    OperatorFormComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
