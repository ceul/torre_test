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
import { OpenToPipe } from './pipes/open-to.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { JobComponent } from './components/job/job.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchComponent,
    HeaderComponent,
    PeriodicityPipe,
    EmploymentTypePipe,
    LoadingSpinnerComponent,
    OpenToPipe,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    InfiniteScrollModule
  ],
  providers: [
    LoadingSpinnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
