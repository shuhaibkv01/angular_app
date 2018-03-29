import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector:'[app-servers]', u can use a an attributes
  selector:'.app-servers', //u can use as a class
  //templateUrl: './servers.component.html',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
