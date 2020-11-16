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

  constructor(private baseService: BaseService,
    private loadingSpinnerService: LoadingSpinnerService,) { }

  async ngOnInit() {
    //this.jobs = await this.baseService.searchJobs()
    this.loadingSpinnerService.show()
    this.people = await this.baseService.searchPeople()
    this.loadingSpinnerService.hide()
  }

}
