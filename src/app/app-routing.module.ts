import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./components/countries/countries.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Countries", component: CountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
