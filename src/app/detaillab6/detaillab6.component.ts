import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detaillab6',
  templateUrl: './detaillab6.component.html',
  styleUrls: ['./detaillab6.component.css']
})
export class Detaillab6Component implements OnInit {

  film: any;
  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    const url= this.route.snapshot.paramMap.get('url');
    this.getFilmById(url).subscribe(data=>{
      this.film=data;
    })
  }

  getFilmById(url:string){
    return this.http.get(url);
  }
}
