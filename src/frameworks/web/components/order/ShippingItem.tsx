import * as React from 'react';
import OrderProductList from "@frameworks/web/components/order/OrderProductList";
import {OrderProductItemInfo} from "@frameworks/web/components/order/OrderProductItem";

export interface ShippingItemInfo {
  trackingNumber: number;
  shippingFee: number;
  post: string;
  address: string;
  message: string;
  orderProductList: Array<OrderProductItemInfo>;
}

const ShippingItem: React.FC<ShippingItemInfo> = ({trackingNumber, shippingFee, post, address, message, orderProductList}: ShippingItemInfo) => {
  return (
    <div>
      <div>----------------------------</div>
      <OrderProductList
        orderProductItemList={ orderProductList }
      />
      <div>----------------------------</div>
      <div>{'배송정보'}</div>
      <div>{`송장번호: ${trackingNumber}`}</div>
      <div>{`배송료: ${shippingFee}원`}</div>
      <div>{`주소: [${post}] ${address}`}</div>
      <div>{`메시지: ${message}`}</div>
      <br/>
    </div>
  )
}

export default ShippingItem;
