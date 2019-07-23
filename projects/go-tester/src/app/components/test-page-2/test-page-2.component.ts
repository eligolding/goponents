import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GoButtonComponent,
  GoLoaderComponent,
  GoToasterService
} from '../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-test-page-2',
  templateUrl: './test-page-2.component.html'
})
export class TestPage2Component implements OnInit {

  @ViewChild('loader') loader: GoLoaderComponent;

  title: string = 'Test 2';
  processing: boolean = false;
  shopping: boolean = false;

  constructor(private goToasterService: GoToasterService) { }

  ngOnInit() {
    setTimeout(() => {
      this.goToasterService.toastInfo({ message: 'Check this out'});
      this.goToasterService.toastSuccess({message: 'Check this out' });
      this.goToasterService.toastError({ message: 'Check this out' });
    }, 1500);
  }

  onSubmit() {
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
    }, 4000);
  }

  stopLoaderAnimation() {
    this.loader.loaderDone = this.loader.loaderDone ? false : true;
  }

  clickHey(): void {
    this.shopping = true;
    setTimeout(() => {
      this.shopping = false;
    }, 4000);
  }
}
