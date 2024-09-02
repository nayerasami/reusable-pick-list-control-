import { Component, OnInit, ViewChild } from '@angular/core';
import { ReusablePickListComponent } from './components/reusable-pick-list/reusable-pick-list.component';
import { Iitems } from './Models/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-five';

  @ViewChild('pickListEl') pickListElRef !: ReusablePickListComponent;

  availableItems: Iitems[] = [
    { id: 1, name: 'permission 1' },
    { id: 2, name: 'test 2' },
    { id: 3, name: 'task 3' },
    { id: 4, name: 'permission 4' },
    { id: 5, name: 'permission 5' },
    { id: 6, name: 'permission 6' },
    { id: 5, name: 'permission 5' },
    { id: 6, name: 'permission 6' },
    { id: 6, name: 'permission 6' },
  ]

  // availableItems: any[] = ['permission 1', 'permission 2', 'permission 3',
  //   'permission 4', 'permission 5', 'permission 6', 'permission 7']


  // defaultValues: Iitems[] = [
  //   { id: 1, name: 'permission 1' },
  //   //{ id: 2, name: 'permission 2' }
  // ]

  defaultAdded: Iitems[] = [
    { id: 1, name: 'permission 1' },
    { id: 2, name: 'test 2' },
  ]

  options: any = {
    availableItemsArr: this.availableItems,
    // defaultValuesArr: this.defaultValues,
    uniqueKey: 'id',
    showKey: 'name',
    isSearchable: true,
    isSortable: true,
    defaultAddedArr: this.defaultAdded
  }

  ngOnInit(): void {

  }

  addDefaultItems() {
    this.pickListElRef.addDefaultItems()
  }

}
