import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lista } from './home/lista';

@Injectable({
  providedIn: 'root',
})
export class GenteService {
  private usuarios = 10;
  private path = 'https://randomuser.me/api/?results=' + this.usuarios;
  //si vamos a utilizar el servicio de AJAX de Angular
  constructor(private http: HttpClient) {}

  load() {
    return new Promise<Lista>((resolve) => {
      this.http.get<Lista>(this.path).subscribe((d) => {
        resolve(d);
      });
    });
  }
}
