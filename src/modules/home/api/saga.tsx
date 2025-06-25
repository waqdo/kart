import {call, put, takeEvery} from 'redux-saga/effects'
import { setData, setError, setLoading } from "./slice";
import { fetchData } from './api';
import { GET_HOME_CONTENT } from './constants';

function* fetchAapiDataSaga():any{
    try {
        yield put(setLoading());
        const data = yield call(fetchData)
        yield put(setData(data))
    } catch (error:any) {
        yield put(setError(error.message))
    }
}

function* homeSaga(){
    yield takeEvery(GET_HOME_CONTENT,fetchAapiDataSaga)
}

export default homeSaga