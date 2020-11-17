import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingSpinner } from '../../models/loading-spinner.interface';
import { LoadingSpinnerService } from '../../services/loading-spinner/loading-spinner.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  public show = false;
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  private subscription: Subscription;
  private subscription2: Subscription;

  constructor(
    private loaderService: LoadingSpinnerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.lottieConfig = {
      path: '../../../assets/animations/pinjump.json',
      autoplay: true,
      renderer: 'canvas',
      loop: true
    };
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoadingSpinner) => {
        this.show = state.show;
        if (this.show) {
          this.play()
        } else {
          this.stop()
        }
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  stop() {
    if (this.anim !== undefined) {
      this.anim.stop();
    }
  }

  play() {
    if (this.anim !== undefined) {
      this.anim.play();
    }
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }
}
