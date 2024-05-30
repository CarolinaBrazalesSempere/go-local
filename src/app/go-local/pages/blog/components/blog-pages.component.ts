import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog.service';
import { PostBlog } from 'src/app/go-local/interfaces/PostBlog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-pages.component.html',
  styleUrls: ['./blog-pages.component.css'],
})
export class BlogPageComponent implements OnInit {
  blogEntries: PostBlog[] = [];
  displayedEntries: PostBlog[] = [];
  currentPage: number = 0;
  pageSize: number = 7;
  totalPages: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe((data) => {
      this.blogEntries = data.sort((a, b) => b.idPost - a.idPost);
      this.totalPages = Math.ceil(this.blogEntries.length / this.pageSize);
      this.setPage(this.currentPage);
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    this.displayedEntries = this.blogEntries.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.setPage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.setPage(this.currentPage - 1);
    }
  }

  getPagesArray(): number[] {
    return new Array(this.totalPages).fill(0).map((_, i) => i);
  }

  get firstContainer(): PostBlog | undefined {
    return this.displayedEntries[0];
  }

  get secondContainer(): PostBlog[] {
    return this.displayedEntries.slice(1, 3);
  }

  get thirdContainer(): PostBlog[] {
    return this.displayedEntries.slice(3, 7);
  }
}
