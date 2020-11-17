import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base-service/base.service'
import { LoadingSpinnerService } from '../../services/loading-spinner/loading-spinner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public jobs: any
  public people: any
  public typeSelected: boolean

  constructor(private baseService: BaseService,
    private loadingSpinnerService: LoadingSpinnerService,) { }

  async ngOnInit() {
    this.loadingSpinnerService.show()
    this.typeSelected = true
    this.jobs = await this.baseService.searchJobs()
    //this.people = await this.baseService.searchPeople()
    this.loadingSpinnerService.hide()
  }

  async getPeople() {
    try {
      this.typeSelected = false
      this.people = await this.baseService.searchPeople()
    } catch (error) {
      console.log(`An error occurred in getPeople`)
    }
  }

  async getJobs() {
    try {
      this.typeSelected = true
      this.jobs = await this.baseService.searchJobs()
    } catch (error) {
      console.log(`An error occurred in getJobs`)
    }
  }

}
