import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse, PaginatedResults } from '../../interfaces/misc';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl = `${environment.baseUrl}api/`;

  constructor(private http: HttpClient) {

  }

  public async getHomeContents(): Promise<PaginatedResults | false> {

    try {
      const content = await firstValueFrom(this.http.get<ApiResponse<PaginatedResults>>(this.baseUrl));

      if (content.success) {
        return content.data as PaginatedResults;
      }

      return false;
    } catch (e) {
      return false;
    }

  }
}
