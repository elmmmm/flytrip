export  function getAssetURL(image){
    return new URL(`../assets/img/${image}`, import.meta.url).href
  }