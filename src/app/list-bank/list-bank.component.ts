import { Component, OnInit } from '@angular/core';
import { Lists } from '../main-list/items';
import { ListsService } from './../lists.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css'],
})
export class ListBankComponent implements OnInit {
  lists: Lists[] = [];
  list: any = [];

  constructor(private serviceL: ListsService) {}

  ngOnInit() {
    this.serviceL.getItems().subscribe((lists) => (this.lists = lists));
  }

  display = 'd-none';
  showDiv() {
    this.display = 'd-block';
  }
  onClickSubmit(list) {
    this.serviceL.addList(list).subscribe((list) => {
      this.lists.push(list);
    });
    this.display = 'd-none';
  }
}
