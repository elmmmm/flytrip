import hyRequest from "../request/index"

export function getSearchConditions(){
    return hyRequest.get({
        url: "/search/top"
    })
}

export function getSearchHouse(){
    return hyRequest.get({
        url: "/search/result"
    })
}