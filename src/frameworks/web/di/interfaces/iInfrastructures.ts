import {IAssetImporter} from "@adapters/infrastructures/interfaces/iAssetImporter";
import {IHttp} from "@adapters/infrastructures/interfaces/iHttp";

export default interface IInfrastructures {
  importer: IAssetImporter;
  http: IHttp;
}
