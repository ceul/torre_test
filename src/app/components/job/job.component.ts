import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner/loading-spinner.service';
import { take } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base-service/base.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  private id: string
  public job: any

  constructor(
    private loadingService: LoadingSpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private baseService: BaseService,
  ) { }

  async ngOnInit() {
    try {
      this.loadingService.show()
      await new Promise((resolve, reject) => {
        this.activatedRoute.params.pipe(take(1)).subscribe(async params => {
          this.id = params['id'];
          resolve()
        })
      })
      this.job = await this.baseService.getJob(this.id)
      this.loadingService.hide()
    } catch (error) {
      console.log(`An error ocurred on ngOnInit => JobComponent`)
    }
  }

}
