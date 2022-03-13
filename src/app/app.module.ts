import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { SwitchAllComponent } from './switch-all/switch-all.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MapComponent,
    MergeMapComponent,
    MergeAllComponent,
    SwitchAllComponent,
    SwitchMapComponent,
    BehaviorSubjectComponent,
    FinalizeComponent,
    TapComponent,
    TakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
