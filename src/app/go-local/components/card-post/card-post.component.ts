import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../pages/blog/services/blog.service';
import { PostBlog } from '../../interfaces/PostBlog';

@Component({
  selector: 'gl-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
})
export class CardPostComponent implements OnInit{

  blogEntries: PostBlog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe(data => {
      this.blogEntries = data;
    });
  }

}
