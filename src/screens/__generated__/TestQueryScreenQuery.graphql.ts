/**
 * @generated SignedSource<<16b91823fc4e5d1a0e0ede58d5b8dfd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TestQueryScreenQuery$variables = Record<PropertyKey, never>;
export type TestQueryScreenQuery$data = {
  readonly viewer: {
    readonly id: string;
    readonly name: string;
  };
};
export type TestQueryScreenQuery = {
  response: TestQueryScreenQuery$data;
  variables: TestQueryScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestQueryScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestQueryScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7e400d53c18f0edf033f389b5cb4b9ee",
    "id": null,
    "metadata": {},
    "name": "TestQueryScreenQuery",
    "operationKind": "query",
    "text": "query TestQueryScreenQuery {\n  viewer {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "b1041d4bd261eb2b6484710f0cea948d";

export default node;
