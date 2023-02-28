import { IAssetImporter } from "@adapters/infrastructures/interfaces/iAssetImporter";
import { OrderDto } from "@domains/dto/OrderDto";
import { IOrderListRepository } from "@domains/usecases/repositories/iOrderListRepository";
import {ShippingDto} from "@domains/dto/ShippingDto";
import {OrderProductDto} from "@domains/dto/OrderProductDto";
import {IHttp} from "@adapters/infrastructures/interfaces/iHttp";

class OrderListRepository implements IOrderListRepository {
  private static instance: OrderListRepository;

  private constructor(
    private readonly http: IHttp,
    private readonly apiHost: string
  ) {}

  static getInstance(
    http: IHttp,
    apiHost: string = 'http://localhost:3003'
  ) {
    if(!OrderListRepository.instance) {
      OrderListRepository.instance = new OrderListRepository(http, apiHost);
    }
    return OrderListRepository.instance;
  }

  async getOrderList(): Promise<OrderDto[]> {
    const response = await this.http.request({
      method: 'GET',
      url: this.apiHost + '/order'
    });
    const json = response.data;

    const orderProductList = Array<OrderProductDto>();
    for(let i=0; i<json.products.length; i++) {
      orderProductList.push(new OrderProductDto({
        id: json.products[i].id,
        name: json.products[i].name,
        price: json.products[i].price,
        imageUrls: json.products[i].imageUrls,
        color: json.products[i].stock.color,
        band: json.products[i].stock.band,
        cup: json.products[i].stock.cup,
        quantity: json.products[i].stock.quantity,
      }));
    }

    const shippingList = Array<ShippingDto>();
    shippingList.push(new ShippingDto({
      id: json.shipping.id,
      trackingNumber: json.shipping.trackingNumber,
      shippingFee: json.shipping.shippingFee,
      address: json.shipping.address,
      post: json.shipping.post,
      message: json.shipping.message,
      orderProductList: orderProductList,
    }));

    const orderList = Array<OrderDto>();
    const orderItem = new OrderDto({
      id: json.id,
      amount: json.amount,
      orderAt: json.orderAt,
      shippingList: shippingList,
    });

    orderList.push(orderItem);

    return Promise.resolve(orderList);
  }
}

export default OrderListRepository;
