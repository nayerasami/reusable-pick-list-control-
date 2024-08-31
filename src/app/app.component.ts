import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-five';
  // availableItems: any[] = [
  //     { id: 1, name: 'permission 1' },
  //     { id: 2, name: 'permission 2' },
  //     { id: 3, name: 'permission 3' },
  //     { id: 4, name: 'permission 4' },
  //     { id: 5, name: 'permission 5' }
  //   ]

  availableItems: any[] = ['permission 1', 'permission 2', 'permission 3',
    'permission 4', 'permission 5', 'permission 6', 'permission 7']
    
  options: any = {
    availableItemsArr: this.availableItems,
    uniqueKey: 'id',
  }

  ngOnInit(): void {

  }







}
