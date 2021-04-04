import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(config: NgbModalConfig, private modalService: NgbModal) 
  {
    config.backdrop='static';
    config.keyboard= false;
  }


  ngOnInit()
  {
  }

  open(content)
  {
    this.modalService.open(content);
  }


}
