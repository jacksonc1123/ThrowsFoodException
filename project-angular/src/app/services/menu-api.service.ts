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
    return this.http.post<Menu>(`${apiUrl}/add`,menu, httpOptions);
  }

  getAllMenus() {
    return this.http.get<Menu[]>(`${apiUrl}`);
  }

  getMenuByUserId(id: number) {
    return this.http.get<Menu>(`${apiUrl}/admin/${id}`);
  }

  getMenuByMenuId(id: number) {
    return this.http.get<Menu>(`${apiUrl}/${id}`);
  }
}
