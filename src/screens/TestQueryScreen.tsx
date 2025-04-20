import React from 'react';
import {View, Text} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {TestQueryScreenQuery} from './__generated__/TestQueryScreenQuery.graphql';

const TestQuery = graphql`
  query TestQueryScreenQuery {
    viewer {
      id
      name
    }
  }
`;

export default function TestQueryScreen() {
  const data = useLazyLoadQuery<TestQueryScreenQuery>(TestQuery, {});
  return (
    <View>
      <Text>ID: {data.viewer.id}</Text>
      <Text>Name: {data.viewer.name}</Text>
    </View>
  );
}
