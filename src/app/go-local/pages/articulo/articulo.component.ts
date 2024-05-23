import { Component, OnInit } from '@angular/core';
import { PostBlog } from '../../interfaces/PostBlog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog/services/blog.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  article: PostBlog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPost');
    if (id) {
      this.blogService.getBlogEntryById(+id).subscribe(data => {
        this.article = data;
      });
    }
  }

}
