import * as React from 'react';
import OrderItem, {OrderItemInfo} from "@frameworks/web/components/order/OrderItem";
import {observer} from "mobx-react";
import {useEffect} from "react";

const OrderList: React.FC = () => {
  const vm = orderListVm;
  const list = vm.orderList;

  useEffect(() => {
    (async () => {
      await vm.getOrderList();
    })();
  }, []);

  return (
    <div>
      {
        list.map((item, index) => {
          const itemInfo: OrderItemInfo = {
            amount: item.amount,
            id: item.id,
            orderAt: item.orderAt,
            shippingList: item.shippingList
          };
          return (
            <OrderItem
              key={index}
              amount={item.amount}
              id={item.id}
              orderAt={item.orderAt}
              shippingList={item.shippingList}
            />
          );
        })
      }
    </div>
  )
}

export default observer(OrderList);
