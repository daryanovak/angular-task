import { Component, OnInit } from '@angular/core';
import { ICardList } from 'src/app/models/Card-List';
import { ICardItem } from '../../models/CardItem';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit, ICardList {

  public id: string;
  public name: string;
  public cards: ICardItem[];

  constructor() { }

  ngOnInit() {
  }

}
