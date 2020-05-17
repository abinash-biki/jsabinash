import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    console.log(data.News);
    console.log(data.newsDetails);
    
      this.router.navigateByUrl('/news');
    
     
      
    }
    
}
