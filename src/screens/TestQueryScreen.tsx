import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { TestQueryScreenQuery } from './__generated__/TestQueryScreenQuery.graphql';

const TestQuery = graphql`
  query TestQueryScreenQuery {
    viewer {
      id
      name
    }
  }
`;

const TestQueryScreen: React.FC = () => {
  const data = useLazyLoadQuery<TestQueryScreenQuery>(TestQuery, {});

  if (!data?.viewer) {
    return (
      <View style={styles.container}>
        <Text>유저 정보를 불러오지 못했습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>👤 사용자 정보</Text>
      <Text>ID: {data.viewer.id}</Text>
      <Text>Name: {data.viewer.name}</Text>
    </View>
  );
};

export default TestQueryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
