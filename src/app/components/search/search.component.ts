import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base-service/base.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public jobs: any
  constructor(private baseService: BaseService) { }

  async ngOnInit() {
    this.jobs = await this.baseService.searchJobs()
  }

}
