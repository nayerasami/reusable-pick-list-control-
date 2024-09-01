import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-pick-list',
  templateUrl: './reusable-pick-list.component.html',
  styleUrls: ['./reusable-pick-list.component.css']
})
export class ReusablePickListComponent implements OnInit {
  @Input() options: any;
  availableItems: any;
  uniqueKey: any;
  showKey: any;
  savedSelectedItems: any[] = [];
  searchQuery: any;
  selectedSearchQuery: any;
  originalSavedSelectedItems: any[] = [];
  defaultValues: any[] = [];
  //itemBeingDragged: any;

  ngOnInit(): void {
    this.availableItems = this.options.availableItemsArr
    this.uniqueKey = this.options.uniqueKey || 'id'
    this.showKey = this.options.showKey || 'name'
    this.defaultValues = this.options.defaultValuesArr
    if(this.defaultValues){
      this.savedSelectedItems =[...this.defaultValues]
       this.originalSavedSelectedItems=[...this.defaultValues]
    
      this.availableItems = this.availableItems.filter((el: any) => {
        const itemKey = el[this.uniqueKey] ? el[this.uniqueKey] : el;
        const index = this.defaultValues.findIndex(defaultItem => {
          const defaultItemKey = defaultItem[this.uniqueKey] ? defaultItem[this.uniqueKey] : defaultItem;
          return defaultItemKey === itemKey;
        });

        return index === -1;
      });
    }
  }



  selectedItems: any[] = [];

  selectItems(item: any) {

    const value = item[this.uniqueKey] ? item[this.uniqueKey] : item
    const index = this.selectedItems.findIndex((selectedItem: any) => {
      console.log(selectedItem[this.uniqueKey], "selectedItem[this.uniqueKey]")
      const selectedValue = typeof selectedItem === 'object' ? selectedItem[this.uniqueKey] : selectedItem;
      console.log(selectedValue === item, "check")
      return selectedValue === value;
    })
    console.log(index, "index of ")
    if (index == -1) {
      this.selectedItems.push(item);
      console.log(this.selectedItems, "Selected items after addition");
    }
    else {
      this.selectedItems.splice(index, 1)
    }

    console.log(this.selectedItems, "selectedITems")
  }


  getSelectedValues(item: any): boolean {
    const itemKeyValue = typeof item === 'object' ? item[this.uniqueKey] : item;
    return this.selectedItems.some((selectedItem: any) => {
      const selectedItemKeyValue = typeof selectedItem === 'object' ? selectedItem[this.uniqueKey] : selectedItem;
      return selectedItemKeyValue === itemKeyValue;
    });
  }




  saveSelectedValues() {

    if (this.selectedItems.length > 0) {
      const addedItems = this.savedSelectedItems.filter((el: any) => {
        return !this.selectedItems.includes(el)
      })

      this.savedSelectedItems = [...addedItems, ...this.selectedItems]
      this.originalSavedSelectedItems = [...this.savedSelectedItems];
      this.availableItems = this.availableItems.filter((el: any) => {
        return !this.savedSelectedItems.includes(el);
      });
      this.selectedItems = []
    }


  }


  saveAll() {
    this.savedSelectedItems = [...this.availableItems, ...this.savedSelectedItems]
    this.originalSavedSelectedItems = [...this.savedSelectedItems];
    console.log(this.savedSelectedItems, "save all")
    this.availableItems = []
    this.selectedItems = []

  }


  DeleteAll() {
    this.availableItems = [...this.availableItems, ...this.savedSelectedItems]
    this.savedSelectedItems = []
    this.originalSavedSelectedItems = []
    this.selectedItems = []
  }



  deleteSelected() {
    if (this.savedSelectedItems.length > 0) {
      this.savedSelectedItems = this.savedSelectedItems.filter((el: any) => {
        return !this.selectedItems.includes(el)
      })
      this.originalSavedSelectedItems = [...this.savedSelectedItems]
      const itemsToAdd = this.selectedItems.filter((item: any) => {
        return !this.availableItems.some((availableItem: any) => {
          return (typeof availableItem === 'object' ? availableItem[this.uniqueKey] : availableItem) === (typeof item === 'object' ? item[this.uniqueKey] : item);
        });
      });
      this.availableItems = [...this.availableItems, ...itemsToAdd]
      this.selectedItems = [];
      console.log(this.availableItems, "availableItems")
    }

  }




  searchValues(query: any, items: any, originalItems: any) {
    const lowerCaseQuery = query.toLowerCase().trim()
    if (lowerCaseQuery == '') {
      return [...originalItems]
    } else {
      if (items.length > 0) {
        return items.filter((item: any) => {
          const value = item[this.showKey] ? item[this.showKey] : item
          return value.toString().toLowerCase().includes(lowerCaseQuery)
        })
      }
    }
  }


  searchInAvailableValues() {
    this.availableItems = this.searchValues(this.searchQuery, this.availableItems, this.options.availableItemsArr);
  }


  searchInSavedValues() {
    this.savedSelectedItems = this.searchValues(this.selectedSearchQuery, this.savedSelectedItems, this.originalSavedSelectedItems);
  }


  genericSortAscending(itemsArr: any) {
    const sortedArray = itemsArr.sort((a: any, b: any) => {
      console.log(itemsArr, "sorting itemsARR")

      const firstItem = a[this.showKey] ? a[this.showKey].toLowerCase() : a;
      const secondItem = b[this.showKey] ? b[this.showKey].toLowerCase() : b;
      if (firstItem < secondItem) {
        return -1;
      }
      if (firstItem > secondItem) {
        return 1;
      }
      return 0

    });
    console.log(sortedArray, " sortedArray ")
  }

  genericSortDescending(itemsArr: any) {
    const sortedArray = itemsArr.sort((a: any, b: any) => {
      console.log(itemsArr, "sorting itemsARR")
      const firstItem = a[this.showKey] ? a[this.showKey].toLowerCase() : a;
      const secondItem = b[this.showKey] ? b[this.showKey].toLowerCase() : b;
      if (firstItem > secondItem) {
        return -1;
      }
      if (firstItem < secondItem) {
        return 1;
      }
      return 0

    });

    console.log(sortedArray, " sortedArray ")

  }

  availableSortAscending() {
    this.genericSortAscending(this.availableItems)
  }

  availableSortDescending() {
    this.genericSortDescending(this.availableItems)
  }

  savedSortAscending() {
    this.genericSortAscending(this.savedSelectedItems)
  }

  savedSortDescending() {
    this.genericSortDescending(this.savedSelectedItems)
  }


}
