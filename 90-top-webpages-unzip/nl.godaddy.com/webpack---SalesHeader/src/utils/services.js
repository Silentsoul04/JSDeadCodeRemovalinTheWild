import config from './config';
import Queue from '@px/promise-queue';
import { URL } from '@ux/util';
const queue = new Queue();

export default {
  queue,
  basket: {
    get: () => {
      const requestKey = Math.floor(Math.random() * 1000000000 + 1);
      return fetch((new URL(config.urls.basketApiGet))
        .set('query', { r: requestKey }).toString(), {
        method: 'GET',
        credentials: 'include'
      })
        .then(response => {
          return response.json();
        })
        .then(basket => {
          if (basket) {
            basket.requestKey = requestKey;
          }
          return basket || {};
        })
        .catch(() => {
          return {};
        });
    },
    patch: (payload) => {
      return queue.push(
        () => fetch(config.urls.basketApiPatch, {
          method: 'PATCH',
          credentials: 'include',
          body: JSON.stringify(payload)
        })
      );
    },
    delete: (item) => {
      return queue.push(
        () => fetch((new URL(config.urls.basketApiDelete))
          .set('query', { itemId: item.itemId }).toString(), {
          method: 'DELETE',
          credentials: 'include'
        })
      );
    }
  }
};
