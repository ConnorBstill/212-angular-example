import { 
  Component, 
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TitleCase } from './title-case.pipe';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  today: any = new Date();
  toolbarText: string = 'This is where you would put a toolbar';

  posts: any[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly titleCasePipe: TitleCase,
    private readonly httpService: HttpService
  ) {
  }

  ngOnInit() {
    console.log('ngOnInit', this.titleCasePipe.transform(this.toolbarText))

    this.httpService.getPosts().then(res => {
      console.log('Books', res);
      this.posts = res;
    });
  }
}
