import * as React from 'react';
import {ShippingItemInfo} from "@frameworks/web/components/order/ShippingItem";
import ShippingList from "@frameworks/web/components/order/ShippingList";

export interface OrderItemInfo {
  id: number;
  orderAt: Date;
  amount: number;
  shippingList: Array<ShippingItemInfo>;
}

const OrderItem: React.FC<OrderItemInfo> = ({ id, orderAt, amount, shippingList }: OrderItemInfo) => {
  return (<div>
    <div>{`주문번: ${id}`}</div>
    <div>{`주문일: ${orderAt}`}</div>
    <div>{`총 결제금액: ${amount}원`}</div>
    <br/>
    <ShippingList
      shippingItemList={shippingList}
    />
  </div>);
}

export default OrderItem;
