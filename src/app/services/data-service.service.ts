import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataServiceService {
  private globalDataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/02-06-2021.csv";

  constructor(private http: HttpClient) {}

  getGolbalData() {
    return this.http
      .get(this.globalDataUrl)
      .pipe(map(result => console.log(result)));
  }
}
