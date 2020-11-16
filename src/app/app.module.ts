import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout/layout.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodicityPipe } from './pipes/periodicity.pipe';
import { EmploymentTypePipe } from './pipes/employment-type.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from './services/loading-spinner/loading-spinner.service';
import { LottieAnimationViewModule } from 'ng-lottie';
import { OpenToPipe } from './pipes/open-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchComponent,
    HeaderComponent,
    PeriodicityPipe,
    EmploymentTypePipe,
    LoadingSpinnerComponent,
    OpenToPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LottieAnimationViewModule.forRoot(),
  ],
  providers: [
    LoadingSpinnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
