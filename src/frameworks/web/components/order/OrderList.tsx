import * as React from 'react';
import OrderItem, {OrderItemInfo} from "@frameworks/web/components/order/OrderItem";
import {observer} from "mobx-react";
import {orderListVm} from "@frameworks/web/components/order/OrderListVm";
import {useEffect, useState} from "react";
import {ShippingItemInfo} from "@frameworks/web/components/order/ShippingItem";
import {OrderProductItemInfo} from "@frameworks/web/components/order/OrderProductItem";
import LoadingScreen from "@frameworks/web/components/commons/LoadingScreen";
import {useLoading} from "@hooks/useLoading";

const OrderList: React.FC = () => {
  const vm = orderListVm;
  const { loadingState, setLoadingStateTrue, setLoadingStateFalse } = useLoading();

  useEffect(() => {
    setLoadingStateTrue();
    setTimeout(async () => {
      vm.getOrderList();
      setLoadingStateFalse();
    }, 1000);
  }, []);

  if (loadingState) {
    return (
      <LoadingScreen/>
    )
  }

  return (
    <div>
      { vm.orderList &&
        vm.orderList.map((item, index) => {
          const shippingListInfo: Array<ShippingItemInfo> = item.shippingList.map((item) => {
            const orderProductListInfo: Array<OrderProductItemInfo> = item.orderProductList.map((item) => {
              return {
                band: item.band,
                color: item.color,
                cup: item.cup,
                name: item.name,
                price: item.price,
                quantity: item.quantity
              } as OrderProductItemInfo;
            });

            return {
              address: item.address,
              message: item.message,
              post: item.post,
              shippingFee: item.shippingFee,
              trackingNumber: item.trackingNumber,
              orderProductList: orderProductListInfo
            } as ShippingItemInfo;
          });

          const itemInfo: OrderItemInfo = {
            amount: item.amount,
            id: item.id,
            orderAt: item.orderAt,
            shippingList: shippingListInfo
          };

          return (
            <OrderItem
              key={index}
              amount={itemInfo.amount}
              id={itemInfo.id}
              orderAt={itemInfo.orderAt}
              shippingList={itemInfo.shippingList}
            />
          );
        })
      }
    </div>
  )
}

export default observer(OrderList);
