import {IHttp, IRequestOption} from './interfaces/iHttp';
import {Logger} from '@domains/utils/Logger';
import {NetworkResponse} from '@adapters/infrastructures/NetworkResponse';

class Http implements IHttp {
  request(requestOption: IRequestOption): Promise<NetworkResponse> {
    const option: RequestInit = {method: requestOption.method};

    if (requestOption?.headers)
      option.headers = new Headers(requestOption.headers);
    if (requestOption?.body) option.body = JSON.stringify(requestOption.body);

    return fetch(requestOption.url, option)
      .then(res => {
        const status = res.status;
        return res.json()
          .then(data => {
            return new NetworkResponse(status, '', data);
          })
      })
      .catch(e => {
        Logger.e(e);
        const status = e.response?.status || 999;
        const message = e.response?.data.message;
        const data = e.response?.data || '';
        return new NetworkResponse(status, message, data);
      });
  }
}

export default Http;
