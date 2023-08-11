import { onMounted, onUnmounted, ref } from "vue";
import throttle from "@/utils/throttle";

export default function useScroll(elRef){
    let el = window

    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    // 滚动事件加节流
    const scrollListenerHandler = throttle(() => {
        // console.log('我滚滚滚')
        // 兼容浏览器窗口和其他元素的滚动窗口
        if(el === window){
            // 视口高度
            clientHeight.value = document.documentElement.clientHeight 
            // 已经滑过去的页面长度
            scrollTop.value = document.body.scrollTop || document.documentElement.scrollTop;
            // 整个页面的长度
            scrollHeight.value = document.body.scrollHeight || document.documentElement.scrollHeight;
        } else {
            // console.log('-----el ',el)
            // 视口高度
            clientHeight.value = el.clientHeight 
            // 已经滑过去的页面长度
            scrollTop.value = el.scrollTop;
            // 整个页面的长度
            scrollHeight.value = el.scrollHeight;
        }
        
        // console.log('---clientHeight, scrollTop, scrollHeight', clientHeight, scrollTop, scrollHeight)
        if(scrollTop.value + clientHeight.value + 1 >= scrollHeight.value){
            console.log('滚动到底部啦~')
            isReachBottom.value = true
        }
    }, 100)
    
    onMounted(()=>{
        if(elRef) el = elRef.value
        el.addEventListener('scroll', scrollListenerHandler)
    })

    onUnmounted(()=>{
        if(elRef) el = elRef.value
        el?.removeEventListener('scroll', scrollListenerHandler)
    })

    return {isReachBottom, clientHeight, scrollTop, scrollHeight}
}