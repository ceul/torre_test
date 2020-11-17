import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base-service/base.service'
import { LoadingSpinnerService } from '../../services/loading-spinner/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public jobs: any
  public people: any
  public typeSelected: boolean
  private jobsOffset: number
  public totalJobs: number

  private peopleOffset: number
  public totalPeople: number

  constructor(private baseService: BaseService,
    private loadingSpinnerService: LoadingSpinnerService,
    private router: Router) { }

  async ngOnInit() {
    this.loadingSpinnerService.show()
    this.typeSelected = true
    this.jobsOffset = 0
    this.totalJobs = 0
    this.jobs = []
    this.peopleOffset = 0
    this.totalPeople = 0
    this.people = []
    await this.getJobs()
    this.loadingSpinnerService.hide()
  }

  async getPeople() {
    try {
      this.loadingSpinnerService.show()

      this.typeSelected = false
      let newPeople = await this.baseService.searchPeople(this.peopleOffset)
      this.people = this.people.concat(newPeople['results'])
      this.peopleOffset += 20
      this.totalPeople = this.people.total
      this.loadingSpinnerService.hide()

    } catch (error) {
      console.log(`An error occurred in getPeople`)
    }
  }

  async getJobs() {
    try {
      this.loadingSpinnerService.show()

      this.typeSelected = true
      let newJobs = await this.baseService.searchJobs(this.jobsOffset)
      this.jobs = this.jobs.concat(newJobs['results'])
      this.jobsOffset += 20
      this.totalJobs = this.jobs.total
      this.loadingSpinnerService.hide()

    } catch (error) {
      console.log(`An error occurred in getJobs`)
    }
  }

  async onScroll() {
    try {
      if (this.typeSelected) {
        if (this.totalJobs == this.jobs.length) return

        this.getJobs()
      } else {
        if (this.totalPeople == this.people.length) return

        this.getPeople()
      }

    } catch (error) {
      console.log(`An error occurred in onScroll`)
    }
  }

  goToJob(id: string) {
    try {
      this.router.navigateByUrl(`job/${id}`)
    } catch (error) {
      console.log(`An error occurred in goToJob`)
    }
  }

  getPersonUrl(userName: string) {
    try {
      return `https://bio.torre.co/es/${userName}`
    } catch (error) {
      console.log(`An error occurred in getPersonUrl`)
    }
  }
}
