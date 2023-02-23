import * as React from 'react';
import OrderProductItem, {OrderProductItemInfo} from "@frameworks/web/components/order/OrderProductItem";

interface OrderProductListProps {
  orderProductItemList: Array<OrderProductItemInfo>;
}

const OrderProductList: React.FC<OrderProductListProps> = ({ orderProductItemList }: OrderProductListProps) => {
  return (
    <div>
      <div>{'[상품목록]'}</div>
      <br/>
      {
        orderProductItemList.map((item, index) => {
          const itemInfo: OrderProductItemInfo = {
            band: item.band,
            color: item.color,
            cup: item.cup,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          };
          return(
            <OrderProductItem
              name={itemInfo.name}
              band={itemInfo.band}
              color={itemInfo.color}
              cup={itemInfo.cup}
              price={itemInfo.price}
              quantity={itemInfo.quantity}
            />
          )
        })
      }
    </div>
  )
}

export default OrderProductList;
