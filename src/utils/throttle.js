// 节流
export default function throttle(fn, delay){
    let timer = null
    let startTime = new Date()
    return function(){
        // 定时器写法
        // if(!timer){
        //     timer = setTimeout(()=>{
        //         fn()
        //         timer = null
        //     }, delay)
        // }

        //时间戳写法
        // let currentTime = new Date()  //Date.now()
        // if(currentTime-startTime >= delay){ //第一次就触发执行
        //     fn()
        //     startTime = new Date()
        // }

        //结合写法实现：第一次执行，最后一次也执行
        let currentTime = new Date()
        clearTimeout(timer)
        if(currentTime - startTime >= delay){ //第一次就触发执行
            fn()
            startTime = new Date()
        }else{
            timer = setTimeout(()=>{
                fn()
            }, delay)
        }

    }
}