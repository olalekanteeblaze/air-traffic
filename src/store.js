import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { clearState, loadState } from './persistState';
import rootReducer from './reducers';
import { composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore(initialState){
    const enhancers = [
        applyMiddleware(thunk),
    ]
    const savedState = loadState();
    clearState();

    const store = createStore(
        rootReducer,
        savedState != null ? savedState: initialState,
        composeWithDevTools(...enhancers)
    )
    if(module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}