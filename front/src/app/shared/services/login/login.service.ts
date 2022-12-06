import { UserModel } from 'src/app/shared/models/user.models';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConfig } from 'src/app/features/config/url.config';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  registerUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(urlConfig.post_userRegister, user);
  }

  loginUser(user: UserModel) {
    return this.httpClient.post<UserModel>(urlConfig.post_userLog, user);
  }
}
