import { StockComponent } from './components/stock/stock.component';
import { CardComponent } from './components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: SliderComponent, data: {animation: 'portfolio'} },
  { path: 'stock', component: StockComponent, data: {animation: 'stock'} },
  { path: '**', component: SliderComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardComponent,
    StockComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
