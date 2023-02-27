import IInfrastructures from "@frameworks/web/di/interfaces/iInfrastructures";
import IRepositories from "@frameworks/web/di/interfaces/iRepositories";
import OrderListRepository from "@adapters/repositories/OrderListRepository";

export default (infrastructures: IInfrastructures): IRepositories => {
  return {
    orderList: OrderListRepository.getInstance(infrastructures.http),
  };
};
