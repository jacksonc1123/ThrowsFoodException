import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Menu } from '../beans/menu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl: string = `${environment.apiUrl}/menu`;

@Injectable()
export class MenuApiService {

  constructor(
    private http: HttpClient
  ) { }

  addMenu(menu: Menu) {
    this.http.post<Menu>(`${apiUrl}/add`,menu, httpOptions);
  }

  getAllMenus() {
    this.http.get<Menu[]>(`${apiUrl}`);
  }

  getMenuByUserId(id: number) {
    this.http.get<Menu>(`${apiUrl}/admin/${id}`);
  }

  getMenuByMenuId(id: number) {
    this.http.get<Menu>(`${apiUrl}/${id}`);
  }
}
