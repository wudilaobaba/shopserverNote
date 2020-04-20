export function promisic(func){
  return function(params = {}){
    return new Promise((resolve,reject)=>{
      const args = Object.assign(params,{
        callback1: (res) => {
          resolve(res);
        },
        callback2: (error) => {
          resolve(error);
        }
      })
      func(args);
    });
  }
}
