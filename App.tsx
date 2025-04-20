import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { environment } from './src/graphql/environment';
import TestQueryScreen from './src/screens/TestQueryScreen';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <TestQueryScreen />
    </RelayEnvironmentProvider>
  );
}
