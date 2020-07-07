
interface Ilist {
  name?: string;
  path?: string;
}

export interface ITabList {
  list: Ilist[];
}

export interface IPage {
    page: number
    size: number
}