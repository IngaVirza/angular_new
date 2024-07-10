import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../intrfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);
  baseApiUrl: string = 'https://ichererniakov.ru/yt-course/';

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }
}
