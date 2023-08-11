import hyRequest from "../request"

// type: all-全部订单、recent-最近订单、pend-未完成
export function getOrderList(type = "all"){
    return hyRequest.get({
        url: `/order/list?type=${type}`
    })
}