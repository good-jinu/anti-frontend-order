import OrderListRepository from '@adapters/repositories/OrderListRepository';
import OrderListUseCase from '@domains/usecases/OrderListUseCase';
import OrderListPresenter from '@adapters/presenters/OrderListPresenter';
import {OrderDto} from "@domains/dto/OrderDto";
import OrderAssetImporter from '@adapters/infrastructures/OrderAssetImporter';
import { IOrderListRepository } from '@domains/usecases/repositories/iOrderListRepository';
import { IAssetImporter } from '@adapters/infrastructures/interfaces/iAssetImporter';
import { IOrderListUseCase } from '@domains/usecases/interfaces/iOrderListUseCase';
import { IOrderListPresenter } from '@adapters/presenters/interfaces/iOrderListPresenter';
import Http from "@adapters/infrastructures/Http";

//const assetImporter: IAssetImporter = OrderAssetImporter.getInstance();
const http = new Http();
const repository: IOrderListRepository = OrderListRepository.getInstance(http);
const useCase: IOrderListUseCase = OrderListUseCase.getInstance(repository);
const presenter: IOrderListPresenter = OrderListPresenter.getInstance(useCase);


describe('OrderListPresenter Test', () => {
  test('presenter로부터 주문내역 정보를 받는다.', async () => {
    // Arrange

    // Act
    const orderDto: Array<OrderDto> = await presenter.getOrderList();

    // Assert
    expect(orderDto).toBeTruthy();
    expect(orderDto.length).toBeGreaterThanOrEqual(1);
  });
});
