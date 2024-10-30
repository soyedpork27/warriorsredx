import React from 'react';

import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

// 
function ReduxProvider({store,persistor,App}) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {App?App:<p>ReduxProvider의 App 속성에 App 컴포넌트를 할당하세요!!!</p>}
        </PersistGate>
      </Provider>
    </>
  );
}

export default ReduxProvider;