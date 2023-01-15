import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})

export class PersonnesComponent implements OnInit {
  usernames$!: Observable<string[]>;

  constructor(private http: HttpClient){ }


  persons = [{nom:'Soro Wongniga'},{nom:'Audrey Raiss'},{nom:'Cisse Aicha'},{nom:'Yao Moya'},{nom:'Kra Emma'}]

  ngOnInit() {
    this.usernames$ = this.http.get<Array<{name:string}>>('https://api.example.com/users')
    .pipe(
    map(users => users.map((user: { name: string; }) => user.name))
    );
    }

}



