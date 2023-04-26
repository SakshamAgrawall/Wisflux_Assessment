const redis=require("redis")

const database = redis.createClient({
    legacyMode:true,
    port : 5001
  });
  
//   client.connect().catch(console.error);
//   client.on('connect',function(){
//     console.log('connected');
//   })


  module.exports=database;