import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  bookList:  Book[] = [];
constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books').subscribe(
      response=>{
        this.bookList = response;
      })
  }
}
