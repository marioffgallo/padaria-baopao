import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'love-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;


  constructor(public authService: AuthService) { }

  ngOnInit() {
  }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }
}
