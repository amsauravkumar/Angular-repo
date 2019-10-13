import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  allowEdit = false;

  user: {
    id: number;
  }
  constructor(private activeRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id'])
    this.user = {
      id: this.activeRoute.snapshot.params['id']
    }
    console.log(this.activeRoute.snapshot.queryParams.allowLoading)
    this.activeRoute.params
      .subscribe((params: Params) => {
        this.user.id = params['id']
      })

      this.activeRoute.queryParams
      .subscribe((params: Params) => {
        this.allowEdit = +  params['allowLoading'] === 1 ? true:false;
        console.log(this.allowEdit)
      })

  }


  routeFunction(id : number) {
    this._route.navigate(['login', id, 'edit'], {queryParams: {allowLoading: id === 123? 1:0} , fragment: 'loading'});
  }

}   