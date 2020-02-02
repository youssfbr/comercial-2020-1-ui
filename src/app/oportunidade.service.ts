import { Oportunidade } from './oportunidade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';

  constructor(private http: HttpClient) { }

  listar(): Observable<Oportunidade> {
    return this.http.get<Oportunidade>(this.apiUrl);
  }

  adicionar(oportunidade: Oportunidade): Observable<Oportunidade> {
    return this.http.post<Oportunidade>(this.apiUrl, oportunidade);
  }


}
