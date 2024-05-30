import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { BlogService } from '../../pages/blog/services/blog.service';
import { PostBlog } from '../../interfaces/PostBlog';


@Component({
  selector: 'gl-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
})
export class CardPostComponent implements OnInit {
  @Input() excludedId!: number;
  blogEntries: PostBlog[] = [];
  displayedEntries: PostBlog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogEntries();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['excludedId']) {
      this.fetchBlogEntries();
    }
  }

  private fetchBlogEntries(): void {
    this.blogService.getBlogEntries().subscribe((data) => {
      this.blogEntries = data
        .filter((entry) => entry.idPost !== this.excludedId)
        .sort((a, b) => b.idPost - a.idPost)
        .slice(0, 4);
      this.displayedEntries = this.blogEntries;
    });
  }
}
