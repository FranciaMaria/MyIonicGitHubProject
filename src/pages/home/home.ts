import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubSearchService } from '../../shared/gitHubSearch.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public repository;
    public username;

  constructor(
  	public navCtrl: NavController,
  	public gitHubSearchService: GitHubSearchService
  	) {
  	
  }

  search(){
  	this.gitHubSearchService.search(this.username).subscribe(
  		data => {
  			this.repository = data.json();
  		},
  		err => console.error(err),
        () => console.log('getRepository completed')
  	);
  }

 
  

}