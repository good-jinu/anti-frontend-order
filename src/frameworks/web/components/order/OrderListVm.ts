import {action, makeAutoObservable} from "mobx";
import di from '@di';
import {OrderDto} from "@domains/dto/OrderDto";

class OrderListVm {
  private _orderList: Array<OrderDto>;

  private constructor() {
    this._orderList = Array<OrderDto>();
    makeAutoObservable(this);
  }

  private static instance: OrderListVm;

  public static getInstance(): OrderListVm {
    if(!OrderListVm.instance){
      OrderListVm.instance = new OrderListVm();
    }
    return OrderListVm.instance;
  }

  get orderList(): Array<OrderDto> {
    return this._orderList;
  }

  getOrderList() {
     di.orderList.getOrderList()
      .then(
        action(list => {
          this._orderList = list;
        })
      )
      .catch(e => {
        alert('error!' + e);
      })
  }
}

export const orderListVm = OrderListVm.getInstance();
