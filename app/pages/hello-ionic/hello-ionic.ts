import {Component} from '@angular/core';
import {GitHubService} from '../../services/github';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  providers: [GitHubService]
})
export class HelloIonicPage {
  public foundRepos;
  public username;

  constructor(private github: GitHubService) {
  }

  getRepository() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
    
}
