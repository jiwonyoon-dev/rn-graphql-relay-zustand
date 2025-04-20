import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { environment } from './src/graphql/environment';
import TestQueryScreen from './src/screens/TestQueryScreen';
import TestCounterScreen from './src/screens/TestCounterScreen';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <>
        <TestQueryScreen />
        <TestCounterScreen />
      </>
    </RelayEnvironmentProvider>
  );
}
