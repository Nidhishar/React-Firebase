import rootReducer from './rootReducer';
import rootSaga from './rootSaga'
import {createLogger} from 'redux-logger';
import {createStore,applyMiddleware,compose,} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
  
const sagaMiddleware = createSagaMiddleware()
const middleware=[];
middleware.push(sagaMiddleware);
if(process.env.NODE_ENV !== 'production') {
    middleware.push(
        createLogger({
            collapsed: true
        })
    )
}

const makeStore = (initialState) => {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
        rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware)),
    );
  
    store.runSaga = () => {
      // Avoid running twice
      if (store.saga) return;
      store.saga = sagaMiddleware.run(rootSaga);
    };
  
    store.stopSaga = async () => {
      // Avoid running twice
      if (!store.saga) return;
      store.dispatch(END);
      await store.saga.done;
      store.saga = null;
    };
  
    store.execSagaTasks = async (isServer, tasks) => {
      // run saga
      store.runSaga();
      // dispatch saga tasks
      tasks(store.dispatch);
      // Stop running and wait for the tasks to be done
      await store.stopSaga();
      // Re-run on client side
      if (!isServer) {
        store.runSaga();
      }
    };
  
    // Initial run
    store.runSaga();    
    return store;
  };
  
  export default makeStore;




// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { createLogger } from "redux-logger";
// import combineReducers from "./rootReducer";
// import rootSaga from "./rootSaga";
// const middleWares = [];
// const sagaMiddleWare = createSagaMiddleware();

// const logger = createLogger({
//   predicate: () => process.env.NODE_ENV === "development",
//   collapsed: true,
// });
// middleWares.push(sagaMiddleWare);
// middleWares.push(logger);

// const store = createStore(combineReducers, applyMiddleware(...middleWares));

// export default store;

// sagaMiddleWare.run(rootSaga);