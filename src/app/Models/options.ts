export interface Ioptions {
    availableItemsArr: any[],
    uniqueKey?:keyof any,
    showKey?:any,
    isSearchable?:boolean,
    isSortable?:boolean
    
}

export interface Iitems{
    id:number,
    name:string
}