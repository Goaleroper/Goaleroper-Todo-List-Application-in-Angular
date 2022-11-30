import { Component, OnInit } from '@angular/core';
import { Lists } from '../items';
import { ListsService } from './../services/lists.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css'],
})
export class ListBankComponent implements OnInit {
  lists: Lists[];
  list: Lists[];

  constructor(private serviceList: ListsService) {}

  ngOnInit() {
    this.serviceList.getListItems().subscribe((lists) => (this.lists = lists));
  }

  display = 'd-none';
  showDiv() {
    this.display = 'd-block';
  }

  onClickSubmit(list: Lists) {
    this.serviceList.addList(list).subscribe((list) => {
      this.lists.push(list);
    });
    this.display = 'd-none';
  }
}
