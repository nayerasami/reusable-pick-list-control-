import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-pick-list',
  templateUrl: './reusable-pick-list.component.html',
  styleUrls: ['./reusable-pick-list.component.css']
})
export class ReusablePickListComponent implements OnInit {
  @Input() options: any;
  availableItems: any;


  ngOnInit(): void {
    this.availableItems = this.options.availableItemsArr
    console.log(this.availableItems, "selectedItems")
  }



  selectedItems: any[] = [];

  selectItems(item: any) {
    if (this.selectedItems.indexOf(item) === -1) {
      this.selectedItems.push(item);
      console.log(this.selectedItems, "Selected items after addition");
    }
  }
  

  // getSelectedValues() {
  //   console.log(this.selectedItems, "selected items check")
  //   const index = this.selectedItems.findIndex((item: any) => {
  //     console.log(this.selectedItems === item, "nnnn")

  //     return this.selectedItems === item

  //   })
  //   return index !== -1
  // }

  getSelectedValues(item: any) {
    return this.selectedItems.indexOf(item) !== -1;
  }



}
