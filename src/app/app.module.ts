import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabHandleComponent } from './components/tab-handle/tab-handle.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';
import { TDropdownComponent } from './components/shared/t-dropdown/t-dropdown.component';
import { PrimaryButtonComponent } from './components/shared/primary-button/primary-button.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { FilterTemplateComponent } from './components/shared/filter-template/filter-template.component';
import { SortingTemplateComponent } from './components/shared/sorting-template/sorting-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    HeaderComponent,
    TabContentComponent,
    TabHandleComponent,
    SearchFlightsComponent,
    TDropdownComponent,
    PrimaryButtonComponent,
    SubHeaderComponent,
    SliderComponent,
    FilterTemplateComponent,
    SortingTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
