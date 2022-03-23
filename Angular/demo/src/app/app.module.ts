import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule }from'@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnimationdemoComponent
  ],
  imports: [
    BrowserModule,                                                                   
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                
                             