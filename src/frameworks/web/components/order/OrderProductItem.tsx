import * as React from 'react';

export interface OrderProductItemInfo {
  name: string;
  price: number;
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

const OrderProductItem: React.FC<OrderProductItemInfo> = ({ name, price, color, band, cup, quantity }: OrderProductItemInfo) => {
  return (
    <div>
      <div>{`상품명: ${name}`}</div>
      <div>{`가격: ${price}`}</div>
      <div>{`주문정보: ${color}/${band}/${cup}/${quantity}개`}</div>
      <br/>
    </div>
  )
}


export default OrderProductItem;
