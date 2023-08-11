import { defineStore } from 'pinia'
import localCache from '@/utils/local_cache'

const CACHE_SEARCH_HISTORY = "CACHE_SEARCH_HISTORY"  //常量

const useSearchStore = defineStore("search", {
    state: () => {
        return {
            searchHistorys: [],
        }
    },
    getters: {
        getSearchHistorys: (state) => {
            let historys = state.searchHistorys || []
            if(!historys.length){
                historys = localCache.getCache(CACHE_SEARCH_HISTORY) || [];
            }
            historys = historys.reverse()
            return historys.map((item) => {
                return {
                    itemType: '搜索历史',
                    name: item
                }
            })
        }
    },
    actions: {
        initSearchHistory(){
            this.searchHistorys = localCache.getCache(CACHE_SEARCH_HISTORY) || []
        },
        addSearchHistory(keyword){
            if(!this.searchHistorys.includes(keyword)){
                this.searchHistorys.push(keyword)
            }
            // 只缓存10个历史记录
            let len = this.searchHistorys.length
            if(len >= 10){
                // 只保留最新（最末尾）的十个
                this.searchHistorys = this.searchHistorys.slice(len-10, len)
            }
            // 同时保存到本地存储
            localCache.setCache(CACHE_SEARCH_HISTORY, this.searchHistorys)
        },
        clearSearchHistory(){
            this.searchHistorys = []
            localCache.deleteCache(CACHE_SEARCH_HISTORY)
        }
    }
})

export default useSearchStore