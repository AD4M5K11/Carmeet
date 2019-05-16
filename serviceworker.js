function getCurrentPositionWithPromise() {
  
    return new Promise(function(fulfill, reject){
      
       navigator.geolocation.getCurrentPosition(fulfill, reject);
    })
  }
  
  async function main(){
    
      try {
        
         var p = await getCurrentPositionWithPromise();
          console.info|(p.coords.latitude);
      } catch(e){
        
          console.error(e.message);  
      }    
      }  
  
  main();