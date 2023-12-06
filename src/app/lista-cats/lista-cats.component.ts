
import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../cat-api.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styleUrls: ['./lista-cats.component.css']
})
export class ListaCatsComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catApiService: CatApiService) { }

  ngOnInit() {
    this.catApiService.getCats().subscribe({
      next: (data: Cat[]) => {
        this.cats = data;
      },
      error: (error: any) => {
        console.error('Erro ao obter gatos:', error);
      }
    });
  }
}
