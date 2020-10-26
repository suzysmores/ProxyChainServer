/* Program written by: Suzana Vukovic 

This script, starts a new proxy chain server that acts as normal HTTP/HTTPS proxy server. 
This is to see the difference between the pre-existing Squid server used and proxy-chains 
and to compare and contrast their differences with respect to throughput, HTTP2 etc.

*/ 

const ProxyChain = require('proxy-chain');
 
const server = new ProxyChain.Server({ port: 8000 });
 
server.listen(() => {
    console.log(`Proxy server is listening on port ${8000}`);
});

/* Tested via Mozilla as a client*/ 