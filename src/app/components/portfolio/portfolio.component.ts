import { Component, OnInit } from '@angular/core';
import {Button} from '../../Typescript/buttons';
import {ImageDict } from '../../Typescript/projectImg';
import {$} from 'protractor';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  BuTTons = Button;
  Img = ImageDict['all'];
  constructor() { }
  ngOnInit() {
  }
  update(filter: string) {
    this.Img = ImageDict[filter];
  }

}
