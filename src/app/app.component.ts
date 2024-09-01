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
    { id: 2, name: 'permission 2' },
    { id: 3, name: 'permission 3' },
    { id: 4, name: 'permission 4' },
    { id: 5, name: 'permission 5' }
  ]

  // availableItems: any[] = ['permission 1', 'permission 2', 'permission 3',
  //   'permission 4', 'permission 5', 'permission 6', 'permission 7']


  defaultValues: Iitems[] = [
    { id: 1, name: 'permission 1' },
    { id: 2, name: 'permission 2' }
  ]


  options: any = {
    availableItemsArr: this.availableItems,
    defaultValuesArr: this.defaultValues,
    uniqueKey: 'id',
    showKey: 'name'
  }

  ngOnInit(): void {

  }


  save() {
    this.pickListElRef.saveSelectedValues()
  }

  saveAll() {
    this.pickListElRef.saveAll()
  }

  deleteAll() {

    this.pickListElRef.DeleteAll()
  }
  deleteSelected() {
    this.pickListElRef.deleteSelected()
  }
}
