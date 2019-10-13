import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: {
    id: number;
  }
  constructor(private activeRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id']
    }
    this.activeRoute.params
      .subscribe((params: Params) => {
        this.user.id = params['id']
      })

  }


  routeFunction(id : number) {
    this._route.navigate(['login', id, 'edit'], {queryParams: {allowLoading :1} , fragment: 'loading'});
  }

} 