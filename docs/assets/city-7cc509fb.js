import{a5 as e}from"./index-69ba64b0.js";import{h as i}from"./index-45798041.js";function a(){return i.get({url:"/city/all"})}const l=e("city",{state:()=>({allCities:{},currentCity:{cityName:"广州"}}),actions:{async fetchAllCitiesData(){const t=await a();this.allCities=t.data}}});export{l as u};