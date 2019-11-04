import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {

  url='https://swapi.co/api/films/';
  infoFilm: any;
  listFilm: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllFilm().subscribe(data=>{
      this.infoFilm=data;
      this.listFilm=this.infoFilm.results;  
    })
  }

  getAllFilm(){
    return this.http.get(this.url);
  }

}
