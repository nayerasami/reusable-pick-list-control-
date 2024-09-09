export interface IpickListOptions {
    itemsArr: IpickListItems[],
    uniqueKey?:keyof any,
    showKey?:any,
    isSearchable?:boolean,
    isSortable?:boolean,
    defaultAddedArr?:any,
    defaultDeleted?:any,
    defaultValuesArr?:any,
    validators?:any
    
}

export interface IpickListItems{
    id:number,
    name:string
}
export interface Iitems{
   id: number, 
   name:string
}