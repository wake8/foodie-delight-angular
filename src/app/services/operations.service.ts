import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurent } from '../models/restaurent.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  MOCK_LOCATION = 'assets/mocks/';
  list: BehaviorSubject<Restaurent[]> = new BehaviorSubject([] as Restaurent[]);
  newItems: BehaviorSubject<Restaurent[]> = new BehaviorSubject([] as Restaurent[]);
  deletedItems: BehaviorSubject<Restaurent[]> = new BehaviorSubject([] as Restaurent[]);
  constructor(private http: HttpClient) { }

  getRestaurantsList() {
    return this.http.get<Restaurent[]>(this.MOCK_LOCATION+'restaurants.json').pipe(
      tap(data=>{
        this.updateListing(data);
      })
    ).subscribe();
  }
  updateListing(apiData: Restaurent[]){
    let deletedItems = this.deletedItems.getValue()
    let updatedList = apiData.filter(item => !deletedItems.some(deletedItem => deletedItem.id === item.id));
    updatedList.push(...this.newItems.getValue())
    this.list.next(updatedList);
  }

  updateInfo(data:Restaurent){
    let dIndex =this.list.getValue().findIndex(item=>item.id == data.id);
    this.deletedItems.next([...this.deletedItems.getValue(), this.list.getValue()[dIndex]]);
    let listItems = this.list.getValue();
    listItems.splice(dIndex,1)
    listItems.push(data);
    this.list.next(listItems)
  }
  deleteItem(data:Restaurent){
    let dIndex =this.list.getValue().findIndex(item=>item.id == data.id);
    this.deletedItems.next([...this.deletedItems.getValue(), this.list.getValue()[dIndex]]);
    let listItems = this.list.getValue();
    listItems.splice(dIndex,1)
    this.list.next(listItems)
  }
  addNewItem(data: Restaurent){
    let currentList = this.list.getValue();
    let maxIdItem = currentList.sort((a,b)=>a.id-b.id).pop();
    data.id  = maxIdItem?.id as number + 1

    this.list.next([...this.list.getValue(), data])
    
  }

}
