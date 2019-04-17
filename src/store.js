import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './ducks/BudgetReducer';
import userReducer from './ducks/BudgetReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))