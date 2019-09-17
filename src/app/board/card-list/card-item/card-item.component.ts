import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'src/app/models/CardItem';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less']
})
export class CardItemComponent implements OnInit, ICardItem {
  id: string;
  name: string;
  description: string;
  dueDate: Date | string;
  assignee: IUser;

  constructor() { }

  ngOnInit() {
  }

}
