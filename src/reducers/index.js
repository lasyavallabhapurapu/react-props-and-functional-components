import counter from './counter'
import {combineReducers} from 'redux'

const allReduers=combineReducers({
	counter:counter
})
export default allReduers