import {defineStore} from 'pinia'

// 初始化值
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)

const useMainStore = defineStore('main', {
    state: ()=>({
        token: "",
        
        startDate: nowDate,
        endDate: newDate,
        isLoading: false
    }),
})

export default useMainStore
