import IInfrastructures from "@frameworks/web/di/interfaces/iInfrastructures";
import OrderAssetImporter from "@adapters/infrastructures/OrderAssetImporter";
import Http from "@adapters/infrastructures/Http";

export default (): IInfrastructures => {
  return {
    http: new Http(),
    importer: OrderAssetImporter.getInstance(),
  };
};
