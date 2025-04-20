import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = async (_operation, _variables) => {
  return {
    data: {
      viewer: {
        id: '1',
        name: '윤지원',
      },
    },
  };
};

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
