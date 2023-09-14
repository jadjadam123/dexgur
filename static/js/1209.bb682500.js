"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[1209],{81209:(t,e,r)=>{r.d(e,{Zk:()=>W});var n=r(12442),o=r(43557),i=r(93921),s=r(82895),l=r(80928),a=r(19111),c=r(83795),h=r(83663),u=r(99138),d=r(42299),f=r(22172),g=r(99610),m=r(74536),p=r.n(m),k=r(78663),b=r(43883),_=r(77107),v=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{a(n.next(t))}catch(e){i(e)}}function l(t){try{a(n.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,l)}a((n=n.apply(t,e||[])).next())}))};const y=new k.Logger(b.i);function E(t){return null==t?"null":(32!==(0,l.hexDataLength)(t)&&y.throwArgumentError("invalid topic","topic",t),t.toLowerCase())}function N(t){for(t=t.slice();t.length>0&&null==t[t.length-1];)t.pop();return t.map((t=>{if(Array.isArray(t)){const e={};t.forEach((t=>{e[E(t)]=!0}));const r=Object.keys(e);return r.sort(),r.join("|")}return E(t)})).join("&")}function w(t){if("string"===typeof t){if(t=t.toLowerCase(),32===(0,l.hexDataLength)(t))return"tx:"+t;if(-1===t.indexOf(":"))return t}else{if(Array.isArray(t))return"filter:*:"+N(t);if(n.Sg.isForkEvent(t))throw y.warn("not implemented"),new Error("not implemented");if(t&&"object"===typeof t)return"filter:"+(t.address||"*")+":"+N(t.topics||[])}throw new Error("invalid event - "+t)}function R(){return(new Date).getTime()}function x(t){return new Promise((e=>{setTimeout(e,t)}))}const T=["block","network","pending","poll"];class B{constructor(t,e,r){(0,u.defineReadOnly)(this,"tag",t),(0,u.defineReadOnly)(this,"listener",e),(0,u.defineReadOnly)(this,"once",r),this._lastBlockNumber=-2,this._inflight=!1}get event(){switch(this.type){case"tx":return this.hash;case"filter":return this.filter}return this.tag}get type(){return this.tag.split(":")[0]}get hash(){const t=this.tag.split(":");return"tx"!==t[0]?null:t[1]}get filter(){const t=this.tag.split(":");if("filter"!==t[0])return null;const e=t[1],r=""===(n=t[2])?[]:n.split(/&/g).map((t=>{if(""===t)return[];const e=t.split("|").map((t=>"null"===t?null:t));return 1===e.length?e[0]:e}));var n;const o={};return r.length>0&&(o.topics=r),e&&"*"!==e&&(o.address=e),o}pollable(){return this.tag.indexOf(":")>=0||T.indexOf(this.tag)>=0}}const O={0:{symbol:"btc",p2pkh:0,p2sh:5,prefix:"bc"},2:{symbol:"ltc",p2pkh:48,p2sh:50,prefix:"ltc"},3:{symbol:"doge",p2pkh:30,p2sh:22},60:{symbol:"eth",ilk:"eth"},61:{symbol:"etc",ilk:"eth"},700:{symbol:"xdai",ilk:"eth"}};function L(t){return(0,l.hexZeroPad)(s.O$.from(t).toHexString(),32)}function P(t){return i.Base58.encode((0,l.concat)([t,(0,l.hexDataSlice)((0,d.JQ)((0,d.JQ)(t)),0,4)]))}const I=new RegExp("^(ipfs)://(.*)$","i"),A=[new RegExp("^(https)://(.*)$","i"),new RegExp("^(data):(.*)$","i"),I,new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];function C(t,e){try{return(0,f.ZN)(S(t,e))}catch(r){}return null}function S(t,e){if("0x"===t)return null;const r=s.O$.from((0,l.hexDataSlice)(t,e,e+32)).toNumber(),n=s.O$.from((0,l.hexDataSlice)(t,r,r+32)).toNumber();return(0,l.hexDataSlice)(t,r+32,r+32+n)}function $(t){return t.match(/^ipfs:\/\/ipfs\//i)?t=t.substring(12):t.match(/^ipfs:\/\//i)?t=t.substring(7):y.throwArgumentError("unsupported IPFS format","link",t),`https://gateway.ipfs.io/ipfs/${t}`}function D(t){const e=(0,l.arrayify)(t);if(e.length>32)throw new Error("internal; should not happen");const r=new Uint8Array(32);return r.set(e,32-e.length),r}function H(t){if(t.length%32===0)return t;const e=new Uint8Array(32*Math.ceil(t.length/32));return e.set(t),e}function F(t){const e=[];let r=0;for(let n=0;n<t.length;n++)e.push(null),r+=32;for(let n=0;n<t.length;n++){const o=(0,l.arrayify)(t[n]);e[n]=D(r),e.push(D(o.length)),e.push(H(o)),r+=32+32*Math.ceil(o.length/32)}return(0,l.hexConcat)(e)}class U{constructor(t,e,r,n){(0,u.defineReadOnly)(this,"provider",t),(0,u.defineReadOnly)(this,"name",r),(0,u.defineReadOnly)(this,"address",t.formatter.address(e)),(0,u.defineReadOnly)(this,"_resolvedAddress",n)}supportsWildcard(){return this._supportsEip2544||(this._supportsEip2544=this.provider.call({to:this.address,data:"0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"}).then((t=>s.O$.from(t).eq(1))).catch((t=>{if(t.code===k.Logger.errors.CALL_EXCEPTION)return!1;throw this._supportsEip2544=null,t}))),this._supportsEip2544}_fetch(t,e){return v(this,void 0,void 0,(function*(){const r={to:this.address,ccipReadEnabled:!0,data:(0,l.hexConcat)([t,(0,c.VM)(this.name),e||"0x"])};let n=!1;(yield this.supportsWildcard())&&(n=!0,r.data=(0,l.hexConcat)(["0x9061b923",F([(0,c.Kn)(this.name),r.data])]));try{let t=yield this.provider.call(r);return(0,l.arrayify)(t).length%32===4&&y.throwError("resolver threw error",k.Logger.errors.CALL_EXCEPTION,{transaction:r,data:t}),n&&(t=S(t,0)),t}catch(o){if(o.code===k.Logger.errors.CALL_EXCEPTION)return null;throw o}}))}_fetchBytes(t,e){return v(this,void 0,void 0,(function*(){const r=yield this._fetch(t,e);return null!=r?S(r,0):null}))}_getAddress(t,e){const r=O[String(t)];if(null==r&&y.throwError(`unsupported coin type: ${t}`,k.Logger.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${t})`}),"eth"===r.ilk)return this.provider.formatter.address(e);const n=(0,l.arrayify)(e);if(null!=r.p2pkh){const t=e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);if(t){const e=parseInt(t[1],16);if(t[2].length===2*e&&e>=1&&e<=75)return P((0,l.concat)([[r.p2pkh],"0x"+t[2]]))}}if(null!=r.p2sh){const t=e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);if(t){const e=parseInt(t[1],16);if(t[2].length===2*e&&e>=1&&e<=75)return P((0,l.concat)([[r.p2sh],"0x"+t[2]]))}}if(null!=r.prefix){const t=n[1];let e=n[0];if(0===e?20!==t&&32!==t&&(e=-1):e=-1,e>=0&&n.length===2+t&&t>=1&&t<=75){const t=p().toWords(n.slice(2));return t.unshift(e),p().encode(r.prefix,t)}}return null}getAddress(t){return v(this,void 0,void 0,(function*(){if(null==t&&(t=60),60===t)try{const t=yield this._fetch("0x3b3b57de");return"0x"===t||t===a.R?null:this.provider.formatter.callAddress(t)}catch(n){if(n.code===k.Logger.errors.CALL_EXCEPTION)return null;throw n}const e=yield this._fetchBytes("0xf1cb7e06",L(t));if(null==e||"0x"===e)return null;const r=this._getAddress(t,e);return null==r&&y.throwError("invalid or unsupported coin data",k.Logger.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${t})`,coinType:t,data:e}),r}))}getAvatar(){return v(this,void 0,void 0,(function*(){const t=[{type:"name",content:this.name}];try{const e=yield this.getText("avatar");if(null==e)return null;for(let r=0;r<A.length;r++){const n=e.match(A[r]);if(null==n)continue;const o=n[1].toLowerCase();switch(o){case"https":return t.push({type:"url",content:e}),{linkage:t,url:e};case"data":return t.push({type:"data",content:e}),{linkage:t,url:e};case"ipfs":return t.push({type:"ipfs",content:e}),{linkage:t,url:$(e)};case"erc721":case"erc1155":{const r="erc721"===o?"0xc87b56dd":"0x0e89341c";t.push({type:o,content:e});const i=this._resolvedAddress||(yield this.getAddress()),a=(n[2]||"").split("/");if(2!==a.length)return null;const c=yield this.provider.formatter.address(a[0]),h=(0,l.hexZeroPad)(s.O$.from(a[1]).toHexString(),32);if("erc721"===o){const e=this.provider.formatter.callAddress(yield this.provider.call({to:c,data:(0,l.hexConcat)(["0x6352211e",h])}));if(i!==e)return null;t.push({type:"owner",content:e})}else if("erc1155"===o){const e=s.O$.from(yield this.provider.call({to:c,data:(0,l.hexConcat)(["0x00fdd58e",(0,l.hexZeroPad)(i,32),h])}));if(e.isZero())return null;t.push({type:"balance",content:e.toString()})}const u={to:this.provider.formatter.address(a[0]),data:(0,l.hexConcat)([r,h])};let d=C(yield this.provider.call(u),0);if(null==d)return null;t.push({type:"metadata-url-base",content:d}),"erc1155"===o&&(d=d.replace("{id}",h.substring(2)),t.push({type:"metadata-url-expanded",content:d})),d.match(/^ipfs:/i)&&(d=$(d)),t.push({type:"metadata-url",content:d});const f=yield(0,g.rd)(d);if(!f)return null;t.push({type:"metadata",content:JSON.stringify(f)});let m=f.image;if("string"!==typeof m)return null;if(m.match(/^(https:\/\/|data:)/i));else{if(null==m.match(I))return null;t.push({type:"url-ipfs",content:m}),m=$(m)}return t.push({type:"url",content:m}),{linkage:t,url:m}}}}}catch(e){}return null}))}getContentHash(){return v(this,void 0,void 0,(function*(){const t=yield this._fetchBytes("0xbc1c58d1");if(null==t||"0x"===t)return null;const e=t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(e){const t=parseInt(e[3],16);if(e[4].length===2*t)return"ipfs://"+i.Base58.encode("0x"+e[1])}const r=t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(r){const t=parseInt(r[3],16);if(r[4].length===2*t)return"ipns://"+i.Base58.encode("0x"+r[1])}const n=t.match(/^0xe40101fa011b20([0-9a-f]*)$/);if(n&&64===n[1].length)return"bzz://"+n[1];const s=t.match(/^0x90b2c605([0-9a-f]*)$/);if(s&&68===s[1].length){const t={"=":"","+":"-","/":"_"};return"sia://"+(0,o.c)("0x"+s[1]).replace(/[=+\/]/g,(e=>t[e]))}return y.throwError("invalid or unsupported content hash data",k.Logger.errors.UNSUPPORTED_OPERATION,{operation:"getContentHash()",data:t})}))}getText(t){return v(this,void 0,void 0,(function*(){let e=(0,f.Y0)(t);e=(0,l.concat)([L(64),L(e.length),e]),e.length%32!==0&&(e=(0,l.concat)([e,(0,l.hexZeroPad)("0x",32-t.length%32)]));const r=yield this._fetchBytes("0x59d1d43c",(0,l.hexlify)(e));return null==r||"0x"===r?null:(0,f.ZN)(r)}))}}let V=null,M=1;class W extends n.zt{constructor(t){if(super(),this._events=[],this._emitted={block:-2},this.disableCcipRead=!1,this.formatter=new.target.getFormatter(),(0,u.defineReadOnly)(this,"anyNetwork","any"===t),this.anyNetwork&&(t=this.detectNetwork()),t instanceof Promise)this._networkPromise=t,t.catch((t=>{})),this._ready().catch((t=>{}));else{const e=(0,u.getStatic)(new.target,"getNetwork")(t);e?((0,u.defineReadOnly)(this,"_network",e),this.emit("network",e,null)):y.throwArgumentError("invalid network","network",t)}this._maxInternalBlockNumber=-1024,this._lastBlockNumber=-2,this._maxFilterBlockRange=10,this._pollingInterval=4e3,this._fastQueryDate=0}_ready(){return v(this,void 0,void 0,(function*(){if(null==this._network){let e=null;if(this._networkPromise)try{e=yield this._networkPromise}catch(t){}null==e&&(e=yield this.detectNetwork()),e||y.throwError("no network detected",k.Logger.errors.UNKNOWN_ERROR,{}),null==this._network&&(this.anyNetwork?this._network=e:(0,u.defineReadOnly)(this,"_network",e),this.emit("network",e,null))}return this._network}))}get ready(){return(0,g.$l)((()=>this._ready().then((t=>t),(t=>{if(t.code!==k.Logger.errors.NETWORK_ERROR||"noNetwork"!==t.event)throw t}))))}static getFormatter(){return null==V&&(V=new _.Mb),V}static getNetwork(t){return(0,h.H)(null==t?"homestead":t)}ccipReadFetch(t,e,r){return v(this,void 0,void 0,(function*(){if(this.disableCcipRead||0===r.length)return null;const n=t.to.toLowerCase(),o=e.toLowerCase(),i=[];for(let t=0;t<r.length;t++){const e=r[t],s=e.replace("{sender}",n).replace("{data}",o),l=e.indexOf("{data}")>=0?null:JSON.stringify({data:o,sender:n}),a=yield(0,g.rd)({url:s,errorPassThrough:!0},l,((t,e)=>(t.status=e.statusCode,t)));if(a.data)return a.data;const c=a.message||"unknown error";if(a.status>=400&&a.status<500)return y.throwError(`response not found during CCIP fetch: ${c}`,k.Logger.errors.SERVER_ERROR,{url:e,errorMessage:c});i.push(c)}return y.throwError(`error encountered during CCIP fetch: ${i.map((t=>JSON.stringify(t))).join(", ")}`,k.Logger.errors.SERVER_ERROR,{urls:r,errorMessages:i})}))}_getInternalBlockNumber(t){return v(this,void 0,void 0,(function*(){if(yield this._ready(),t>0)for(;this._internalBlockNumber;){const e=this._internalBlockNumber;try{const r=yield e;if(R()-r.respTime<=t)return r.blockNumber;break}catch(n){if(this._internalBlockNumber===e)break}}const e=R(),r=(0,u.resolveProperties)({blockNumber:this.perform("getBlockNumber",{}),networkError:this.getNetwork().then((t=>null),(t=>t))}).then((t=>{let{blockNumber:n,networkError:o}=t;if(o)throw this._internalBlockNumber===r&&(this._internalBlockNumber=null),o;const i=R();return n=s.O$.from(n).toNumber(),n<this._maxInternalBlockNumber&&(n=this._maxInternalBlockNumber),this._maxInternalBlockNumber=n,this._setFastBlockNumber(n),{blockNumber:n,reqTime:e,respTime:i}}));return this._internalBlockNumber=r,r.catch((t=>{this._internalBlockNumber===r&&(this._internalBlockNumber=null)})),(yield r).blockNumber}))}poll(){return v(this,void 0,void 0,(function*(){const t=M++,e=[];let r=null;try{r=yield this._getInternalBlockNumber(100+this.pollingInterval/2)}catch(n){return void this.emit("error",n)}if(this._setFastBlockNumber(r),this.emit("poll",t,r),r!==this._lastBlockNumber){if(-2===this._emitted.block&&(this._emitted.block=r-1),Math.abs(this._emitted.block-r)>1e3)y.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),this.emit("error",y.makeError("network block skew detected",k.Logger.errors.NETWORK_ERROR,{blockNumber:r,event:"blockSkew",previousBlockNumber:this._emitted.block})),this.emit("block",r);else for(let t=this._emitted.block+1;t<=r;t++)this.emit("block",t);this._emitted.block!==r&&(this._emitted.block=r,Object.keys(this._emitted).forEach((t=>{if("block"===t)return;const e=this._emitted[t];"pending"!==e&&r-e>12&&delete this._emitted[t]}))),-2===this._lastBlockNumber&&(this._lastBlockNumber=r-1),this._events.forEach((t=>{switch(t.type){case"tx":{const r=t.hash;let n=this.getTransactionReceipt(r).then((t=>t&&null!=t.blockNumber?(this._emitted["t:"+r]=t.blockNumber,this.emit(r,t),null):null)).catch((t=>{this.emit("error",t)}));e.push(n);break}case"filter":if(!t._inflight){t._inflight=!0,-2===t._lastBlockNumber&&(t._lastBlockNumber=r-1);const n=t.filter;n.fromBlock=t._lastBlockNumber+1,n.toBlock=r;const o=n.toBlock-this._maxFilterBlockRange;o>n.fromBlock&&(n.fromBlock=o),n.fromBlock<0&&(n.fromBlock=0);const i=this.getLogs(n).then((e=>{t._inflight=!1,0!==e.length&&e.forEach((e=>{e.blockNumber>t._lastBlockNumber&&(t._lastBlockNumber=e.blockNumber),this._emitted["b:"+e.blockHash]=e.blockNumber,this._emitted["t:"+e.transactionHash]=e.blockNumber,this.emit(n,e)}))})).catch((e=>{this.emit("error",e),t._inflight=!1}));e.push(i)}}})),this._lastBlockNumber=r,Promise.all(e).then((()=>{this.emit("didPoll",t)})).catch((t=>{this.emit("error",t)}))}else this.emit("didPoll",t)}))}resetEventsBlock(t){this._lastBlockNumber=t-1,this.polling&&this.poll()}get network(){return this._network}detectNetwork(){return v(this,void 0,void 0,(function*(){return y.throwError("provider does not support network detection",k.Logger.errors.UNSUPPORTED_OPERATION,{operation:"provider.detectNetwork"})}))}getNetwork(){return v(this,void 0,void 0,(function*(){const t=yield this._ready(),e=yield this.detectNetwork();if(t.chainId!==e.chainId){if(this.anyNetwork)return this._network=e,this._lastBlockNumber=-2,this._fastBlockNumber=null,this._fastBlockNumberPromise=null,this._fastQueryDate=0,this._emitted.block=-2,this._maxInternalBlockNumber=-1024,this._internalBlockNumber=null,this.emit("network",e,t),yield x(0),this._network;const r=y.makeError("underlying network changed",k.Logger.errors.NETWORK_ERROR,{event:"changed",network:t,detectedNetwork:e});throw this.emit("error",r),r}return t}))}get blockNumber(){return this._getInternalBlockNumber(100+this.pollingInterval/2).then((t=>{this._setFastBlockNumber(t)}),(t=>{})),null!=this._fastBlockNumber?this._fastBlockNumber:-1}get polling(){return null!=this._poller}set polling(t){t&&!this._poller?(this._poller=setInterval((()=>{this.poll()}),this.pollingInterval),this._bootstrapPoll||(this._bootstrapPoll=setTimeout((()=>{this.poll(),this._bootstrapPoll=setTimeout((()=>{this._poller||this.poll(),this._bootstrapPoll=null}),this.pollingInterval)}),0))):!t&&this._poller&&(clearInterval(this._poller),this._poller=null)}get pollingInterval(){return this._pollingInterval}set pollingInterval(t){if("number"!==typeof t||t<=0||parseInt(String(t))!=t)throw new Error("invalid polling interval");this._pollingInterval=t,this._poller&&(clearInterval(this._poller),this._poller=setInterval((()=>{this.poll()}),this._pollingInterval))}_getFastBlockNumber(){const t=R();return t-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=t,this._fastBlockNumberPromise=this.getBlockNumber().then((t=>((null==this._fastBlockNumber||t>this._fastBlockNumber)&&(this._fastBlockNumber=t),this._fastBlockNumber)))),this._fastBlockNumberPromise}_setFastBlockNumber(t){null!=this._fastBlockNumber&&t<this._fastBlockNumber||(this._fastQueryDate=R(),(null==this._fastBlockNumber||t>this._fastBlockNumber)&&(this._fastBlockNumber=t,this._fastBlockNumberPromise=Promise.resolve(t)))}waitForTransaction(t,e,r){return v(this,void 0,void 0,(function*(){return this._waitForTransaction(t,null==e?1:e,r||0,null)}))}_waitForTransaction(t,e,r,n){return v(this,void 0,void 0,(function*(){const o=yield this.getTransactionReceipt(t);return(o?o.confirmations:0)>=e?o:new Promise(((o,i)=>{const s=[];let l=!1;const a=function(){return!!l||(l=!0,s.forEach((t=>{t()})),!1)},c=t=>{t.confirmations<e||a()||o(t)};if(this.on(t,c),s.push((()=>{this.removeListener(t,c)})),n){let r=n.startBlock,o=null;const c=s=>v(this,void 0,void 0,(function*(){l||(yield x(1e3),this.getTransactionCount(n.from).then((h=>v(this,void 0,void 0,(function*(){if(!l){if(h<=n.nonce)r=s;else{{const e=yield this.getTransaction(t);if(e&&null!=e.blockNumber)return}for(null==o&&(o=r-3,o<n.startBlock&&(o=n.startBlock));o<=s;){if(l)return;const r=yield this.getBlockWithTransactions(o);for(let o=0;o<r.transactions.length;o++){const s=r.transactions[o];if(s.hash===t)return;if(s.from===n.from&&s.nonce===n.nonce){if(l)return;const r=yield this.waitForTransaction(s.hash,e);if(a())return;let o="replaced";return s.data===n.data&&s.to===n.to&&s.value.eq(n.value)?o="repriced":"0x"===s.data&&s.from===s.to&&s.value.isZero()&&(o="cancelled"),void i(y.makeError("transaction was replaced",k.Logger.errors.TRANSACTION_REPLACED,{cancelled:"replaced"===o||"cancelled"===o,reason:o,replacement:this._wrapTransaction(s),hash:t,receipt:r}))}}o++}}l||this.once("block",c)}}))),(t=>{l||this.once("block",c)})))}));if(l)return;this.once("block",c),s.push((()=>{this.removeListener("block",c)}))}if("number"===typeof r&&r>0){const t=setTimeout((()=>{a()||i(y.makeError("timeout exceeded",k.Logger.errors.TIMEOUT,{timeout:r}))}),r);t.unref&&t.unref(),s.push((()=>{clearTimeout(t)}))}}))}))}getBlockNumber(){return v(this,void 0,void 0,(function*(){return this._getInternalBlockNumber(0)}))}getGasPrice(){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield this.perform("getGasPrice",{});try{return s.O$.from(t)}catch(e){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"getGasPrice",result:t,error:e})}}))}getBalance(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,u.resolveProperties)({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getBalance",r);try{return s.O$.from(n)}catch(o){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"getBalance",params:r,result:n,error:o})}}))}getTransactionCount(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,u.resolveProperties)({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getTransactionCount",r);try{return s.O$.from(n).toNumber()}catch(o){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"getTransactionCount",params:r,result:n,error:o})}}))}getCode(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,u.resolveProperties)({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getCode",r);try{return(0,l.hexlify)(n)}catch(o){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"getCode",params:r,result:n,error:o})}}))}getStorageAt(t,e,r){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const n=yield(0,u.resolveProperties)({address:this._getAddress(t),blockTag:this._getBlockTag(r),position:Promise.resolve(e).then((t=>(0,l.hexValue)(t)))}),o=yield this.perform("getStorageAt",n);try{return(0,l.hexlify)(o)}catch(i){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"getStorageAt",params:n,result:o,error:i})}}))}_wrapTransaction(t,e,r){if(null!=e&&32!==(0,l.hexDataLength)(e))throw new Error("invalid response - sendTransaction");const n=t;return null!=e&&t.hash!==e&&y.throwError("Transaction hash mismatch from Provider.sendTransaction.",k.Logger.errors.UNKNOWN_ERROR,{expectedHash:t.hash,returnedHash:e}),n.wait=(e,n)=>v(this,void 0,void 0,(function*(){let o;null==e&&(e=1),null==n&&(n=0),0!==e&&null!=r&&(o={data:t.data,from:t.from,nonce:t.nonce,to:t.to,value:t.value,startBlock:r});const i=yield this._waitForTransaction(t.hash,e,n,o);return null==i&&0===e?null:(this._emitted["t:"+t.hash]=i.blockNumber,0===i.status&&y.throwError("transaction failed",k.Logger.errors.CALL_EXCEPTION,{transactionHash:t.hash,transaction:t,receipt:i}),i)})),n}sendTransaction(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield Promise.resolve(t).then((t=>(0,l.hexlify)(t))),r=this.formatter.transaction(t);null==r.confirmations&&(r.confirmations=0);const n=yield this._getInternalBlockNumber(100+2*this.pollingInterval);try{const t=yield this.perform("sendTransaction",{signedTransaction:e});return this._wrapTransaction(r,t,n)}catch(o){throw o.transaction=r,o.transactionHash=r.hash,o}}))}_getTransactionRequest(t){return v(this,void 0,void 0,(function*(){const e=yield t,r={};return["from","to"].forEach((t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then((t=>t?this._getAddress(t):null)))})),["gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","value"].forEach((t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then((t=>t?s.O$.from(t):null)))})),["type"].forEach((t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then((t=>null!=t?t:null)))})),e.accessList&&(r.accessList=this.formatter.accessList(e.accessList)),["data"].forEach((t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then((t=>t?(0,l.hexlify)(t):null)))})),this.formatter.transactionRequest(yield(0,u.resolveProperties)(r))}))}_getFilter(t){return v(this,void 0,void 0,(function*(){t=yield t;const e={};return null!=t.address&&(e.address=this._getAddress(t.address)),["blockHash","topics"].forEach((r=>{null!=t[r]&&(e[r]=t[r])})),["fromBlock","toBlock"].forEach((r=>{null!=t[r]&&(e[r]=this._getBlockTag(t[r]))})),this.formatter.filter(yield(0,u.resolveProperties)(e))}))}_call(t,e,r){return v(this,void 0,void 0,(function*(){r>=10&&y.throwError("CCIP read exceeded maximum redirections",k.Logger.errors.SERVER_ERROR,{redirects:r,transaction:t});const n=t.to,o=yield this.perform("call",{transaction:t,blockTag:e});if(r>=0&&"latest"===e&&null!=n&&"0x556f1830"===o.substring(0,10)&&(0,l.hexDataLength)(o)%32===4)try{const i=(0,l.hexDataSlice)(o,4),a=(0,l.hexDataSlice)(i,0,32);s.O$.from(a).eq(n)||y.throwError("CCIP Read sender did not match",k.Logger.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:t,data:o});const c=[],h=s.O$.from((0,l.hexDataSlice)(i,32,64)).toNumber(),u=s.O$.from((0,l.hexDataSlice)(i,h,h+32)).toNumber(),d=(0,l.hexDataSlice)(i,h+32);for(let e=0;e<u;e++){const r=C(d,32*e);null==r&&y.throwError("CCIP Read contained corrupt URL string",k.Logger.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:t,data:o}),c.push(r)}const f=S(i,64);s.O$.from((0,l.hexDataSlice)(i,100,128)).isZero()||y.throwError("CCIP Read callback selector included junk",k.Logger.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:t,data:o});const g=(0,l.hexDataSlice)(i,96,100),m=S(i,128),p=yield this.ccipReadFetch(t,f,c);null==p&&y.throwError("CCIP Read disabled or provided no URLs",k.Logger.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:t,data:o});const b={to:n,data:(0,l.hexConcat)([g,F([p,m])])};return this._call(b,e,r+1)}catch(i){if(i.code===k.Logger.errors.SERVER_ERROR)throw i}try{return(0,l.hexlify)(o)}catch(i){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"call",params:{transaction:t,blockTag:e},result:o,error:i})}}))}call(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,u.resolveProperties)({transaction:this._getTransactionRequest(t),blockTag:this._getBlockTag(e),ccipReadEnabled:Promise.resolve(t.ccipReadEnabled)});return this._call(r.transaction,r.blockTag,r.ccipReadEnabled?0:-1)}))}estimateGas(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield(0,u.resolveProperties)({transaction:this._getTransactionRequest(t)}),r=yield this.perform("estimateGas",e);try{return s.O$.from(r)}catch(n){return y.throwError("bad result from backend",k.Logger.errors.SERVER_ERROR,{method:"estimateGas",params:e,result:r,error:n})}}))}_getAddress(t){return v(this,void 0,void 0,(function*(){"string"!==typeof(t=yield t)&&y.throwArgumentError("invalid address or ENS name","name",t);const e=yield this.resolveName(t);return null==e&&y.throwError("ENS name not configured",k.Logger.errors.UNSUPPORTED_OPERATION,{operation:`resolveName(${JSON.stringify(t)})`}),e}))}_getBlock(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;let r=-128;const n={includeTransactions:!!e};if((0,l.isHexString)(t,32))n.blockHash=t;else try{n.blockTag=yield this._getBlockTag(t),(0,l.isHexString)(n.blockTag)&&(r=parseInt(n.blockTag.substring(2),16))}catch(o){y.throwArgumentError("invalid block hash or block tag","blockHashOrBlockTag",t)}return(0,g.$l)((()=>v(this,void 0,void 0,(function*(){const t=yield this.perform("getBlock",n);if(null==t)return null!=n.blockHash&&null==this._emitted["b:"+n.blockHash]||null!=n.blockTag&&r>this._emitted.block?null:void 0;if(e){let e=null;for(let n=0;n<t.transactions.length;n++){const r=t.transactions[n];if(null==r.blockNumber)r.confirmations=0;else if(null==r.confirmations){null==e&&(e=yield this._getInternalBlockNumber(100+2*this.pollingInterval));let t=e-r.blockNumber+1;t<=0&&(t=1),r.confirmations=t}}const r=this.formatter.blockWithTransactions(t);return r.transactions=r.transactions.map((t=>this._wrapTransaction(t))),r}return this.formatter.block(t)}))),{oncePoll:this})}))}getBlock(t){return this._getBlock(t,!1)}getBlockWithTransactions(t){return this._getBlock(t,!0)}getTransaction(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;const e={transactionHash:this.formatter.hash(t,!0)};return(0,g.$l)((()=>v(this,void 0,void 0,(function*(){const r=yield this.perform("getTransaction",e);if(null==r)return null==this._emitted["t:"+t]?null:void 0;const n=this.formatter.transactionResponse(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let t=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;t<=0&&(t=1),n.confirmations=t}return this._wrapTransaction(n)}))),{oncePoll:this})}))}getTransactionReceipt(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;const e={transactionHash:this.formatter.hash(t,!0)};return(0,g.$l)((()=>v(this,void 0,void 0,(function*(){const r=yield this.perform("getTransactionReceipt",e);if(null==r)return null==this._emitted["t:"+t]?null:void 0;if(null==r.blockHash)return;const n=this.formatter.receipt(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let t=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;t<=0&&(t=1),n.confirmations=t}return n}))),{oncePoll:this})}))}getLogs(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield(0,u.resolveProperties)({filter:this._getFilter(t)}),r=yield this.perform("getLogs",e);return r.forEach((t=>{null==t.removed&&(t.removed=!1)})),_.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)}))}getEtherPrice(){return v(this,void 0,void 0,(function*(){return yield this.getNetwork(),this.perform("getEtherPrice",{})}))}_getBlockTag(t){return v(this,void 0,void 0,(function*(){if("number"===typeof(t=yield t)&&t<0){t%1&&y.throwArgumentError("invalid BlockTag","blockTag",t);let e=yield this._getInternalBlockNumber(100+2*this.pollingInterval);return e+=t,e<0&&(e=0),this.formatter.blockTag(e)}return this.formatter.blockTag(t)}))}getResolver(t){return v(this,void 0,void 0,(function*(){let e=t;for(;;){if(""===e||"."===e)return null;if("eth"!==t&&"eth"===e)return null;const r=yield this._getResolver(e,"getResolver");if(null!=r){const n=new U(this,r,t);return e===t||(yield n.supportsWildcard())?n:null}e=e.split(".").slice(1).join(".")}}))}_getResolver(t,e){return v(this,void 0,void 0,(function*(){null==e&&(e="ENS");const r=yield this.getNetwork();r.ensAddress||y.throwError("network does not support ENS",k.Logger.errors.UNSUPPORTED_OPERATION,{operation:e,network:r.name});try{const e=yield this.call({to:r.ensAddress,data:"0x0178b8bf"+(0,c.VM)(t).substring(2)});return this.formatter.callAddress(e)}catch(n){}return null}))}resolveName(t){return v(this,void 0,void 0,(function*(){t=yield t;try{return Promise.resolve(this.formatter.address(t))}catch(r){if((0,l.isHexString)(t))throw r}"string"!==typeof t&&y.throwArgumentError("invalid ENS name","name",t);const e=yield this.getResolver(t);return e?yield e.getAddress():null}))}lookupAddress(t){return v(this,void 0,void 0,(function*(){t=yield t;const e=(t=this.formatter.address(t)).substring(2).toLowerCase()+".addr.reverse",r=yield this._getResolver(e,"lookupAddress");if(null==r)return null;const n=C(yield this.call({to:r,data:"0x691f3431"+(0,c.VM)(e).substring(2)}),0);return(yield this.resolveName(n))!=t?null:n}))}getAvatar(t){return v(this,void 0,void 0,(function*(){let e=null;if((0,l.isHexString)(t)){const r=this.formatter.address(t).substring(2).toLowerCase()+".addr.reverse",o=yield this._getResolver(r,"getAvatar");if(!o)return null;e=new U(this,o,r);try{const t=yield e.getAvatar();if(t)return t.url}catch(n){if(n.code!==k.Logger.errors.CALL_EXCEPTION)throw n}try{const t=C(yield this.call({to:o,data:"0x691f3431"+(0,c.VM)(r).substring(2)}),0);e=yield this.getResolver(t)}catch(n){if(n.code!==k.Logger.errors.CALL_EXCEPTION)throw n;return null}}else if(e=yield this.getResolver(t),!e)return null;const r=yield e.getAvatar();return null==r?null:r.url}))}perform(t,e){return y.throwError(t+" not implemented",k.Logger.errors.NOT_IMPLEMENTED,{operation:t})}_startEvent(t){this.polling=this._events.filter((t=>t.pollable())).length>0}_stopEvent(t){this.polling=this._events.filter((t=>t.pollable())).length>0}_addEventListener(t,e,r){const n=new B(w(t),e,r);return this._events.push(n),this._startEvent(n),this}on(t,e){return this._addEventListener(t,e,!1)}once(t,e){return this._addEventListener(t,e,!0)}emit(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];let o=!1,i=[],s=w(t);return this._events=this._events.filter((t=>t.tag!==s||(setTimeout((()=>{t.listener.apply(this,r)}),0),o=!0,!t.once||(i.push(t),!1)))),i.forEach((t=>{this._stopEvent(t)})),o}listenerCount(t){if(!t)return this._events.length;let e=w(t);return this._events.filter((t=>t.tag===e)).length}listeners(t){if(null==t)return this._events.map((t=>t.listener));let e=w(t);return this._events.filter((t=>t.tag===e)).map((t=>t.listener))}off(t,e){if(null==e)return this.removeAllListeners(t);const r=[];let n=!1,o=w(t);return this._events=this._events.filter((t=>t.tag!==o||t.listener!=e||(!!n||(n=!0,r.push(t),!1)))),r.forEach((t=>{this._stopEvent(t)})),this}removeAllListeners(t){let e=[];if(null==t)e=this._events,this._events=[];else{const r=w(t);this._events=this._events.filter((t=>t.tag!==r||(e.push(t),!1)))}return e.forEach((t=>{this._stopEvent(t)})),this}}}}]);