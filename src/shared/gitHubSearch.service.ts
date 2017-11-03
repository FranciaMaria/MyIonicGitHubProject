import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class GitHubSearchService {

  constructor(private http: Http) { }

  public search(username)
  {
        let repository = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repository;
    }

  
}