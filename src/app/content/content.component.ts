import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public lists: any[];
  list;
  constructor(private postServices: PostService) {
  }

  ngOnInit() {
    this.postServices.getContent().subscribe((data: any) => {
      this.lists = data;
    });
  }

}
