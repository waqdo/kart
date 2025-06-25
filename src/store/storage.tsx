import {MMKV} from 'react-native-mmkv'

const storage = new MMKV()

const reduxStorage = {
    setItem:(key:any, val:any)=>{
      storage.set(key, val);
      return Promise.resolve(true)
    },

    getItem:(key:any)=>{
        const value = storage.getString(key)
      return Promise.resolve(value)
    },
 removeItem:(key:any)=>{
    storage.delete(key)
      return Promise.resolve()
    },

}

export default reduxStorage