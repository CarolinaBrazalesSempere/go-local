import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { PostBlog } from 'src/app/go-local/interfaces/PostBlog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-pages.component.html',
  styleUrls: ['./blog-pages.component.css']
})
export class BlogPageComponent implements OnInit {

  blogEntries: PostBlog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe(data => {
      this.blogEntries = data;
    });
  }

}
