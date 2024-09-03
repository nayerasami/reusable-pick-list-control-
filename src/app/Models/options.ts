export interface Ioptions {
    itemsArr: any[],
    uniqueKey?:keyof any,
    showKey?:any,
    isSearchable?:boolean,
    isSortable?:boolean,
    defaultAddedArr?:any,
    defaultDelete?:any
    
}

export interface Iitems{
    id:number,
    name:string
}