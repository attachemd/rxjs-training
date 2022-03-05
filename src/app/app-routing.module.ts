import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SwitchAllComponent } from './switch-all/switch-all.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'merge-all', component: MergeAllComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-all', component: SwitchAllComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}