import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog/services/blog.service';
import { PostBlog } from '../../interfaces/PostBlog';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  article: PostBlog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['idPost'];
      if (id) {
        this.blogService.getBlogEntryById(+id).subscribe((data) => {
          this.article = data;
        });
      }
    });

    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
