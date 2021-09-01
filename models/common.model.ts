export interface DataList<Data = any> {
  data: Array<Data>;
  page: number;
  pageSize: number;
  totalItem: number;
  totalPage: number;
}
