"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[5165],{41297:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.poll=void 0;const s=r(63048);t.poll=function(e,t){let{emitOnBegin:r,initialWaitTime:n,interval:a}=t,o=!0;const i=()=>o=!1;return(async()=>{let t;r&&(t=await e({unpoll:i}));const c=await(n?.(t))??a;await(0,s.wait)(c);const u=async()=>{o&&(await e({unpoll:i}),await(0,s.wait)(a),u())};u()})(),i}},99806:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createBatchScheduler=void 0;const r=new Map;t.createBatchScheduler=function(e){let{fn:t,id:s,shouldSplitBatch:n,wait:a=0}=e;const o=async()=>{const e=c();i();const r=e.map((e=>{let{args:t}=e;return t}));0!==r.length&&t(r).then((t=>{e.forEach(((e,r)=>{let{pendingPromise:s}=e;return s.resolve?.([t[r],t])}))})).catch((t=>{e.forEach((e=>{let{pendingPromise:r}=e;return r.reject?.(t)}))}))},i=()=>r.delete(s),c=()=>r.get(s)||[],u=e=>r.set(s,[...c(),e]);return{flush:i,async schedule(e){const t={},r=new Promise(((e,r)=>{t.resolve=e,t.reject=r})),s=n?.([...c().map((e=>{let{args:t}=e;return t})),e]);s&&o();return c().length>0?(u({args:e,pendingPromise:t}),r):(u({args:e,pendingPromise:t}),setTimeout(o,a),r)}}}},96175:(e,t)=>{function r(e){const r=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),s=r(e,t.promiseCache),n=r(e,t.responseCache);return{clear:()=>{s.clear(),n.clear()},promise:s,response:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.withCache=t.getCache=t.responseCache=t.promiseCache=void 0,t.promiseCache=new Map,t.responseCache=new Map,t.getCache=r,t.withCache=async function(e,t){let{cacheKey:s,cacheTime:n=1/0}=t;const a=r(s),o=a.response.get();if(o&&n>0){if((new Date).getTime()-o.created.getTime()<n)return o.data}let i=a.promise.get();i||(i=e(),a.promise.set(i));try{const e=await i;return a.response.set({created:new Date,data:e}),e}finally{a.promise.clear()}}},40730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.withRetry=void 0;const s=r(63048);t.withRetry=function(e){let{delay:t=100,retryCount:r=2,shouldRetry:n=(()=>!0)}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{const i=async function(){let{count:c=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const t=await e();a(t)}catch(u){if(c<r&&await n({count:c,error:u}))return(async e=>{let{error:r}=e;const n="function"===typeof t?t({count:c,error:r}):t;n&&await(0,s.wait)(n),i({count:c+1})})({error:u});o(u)}};i()}))}},8612:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.withTimeout=void 0,t.withTimeout=function(e,t){let{errorInstance:r,timeout:s,signal:n}=t;return new Promise(((t,a)=>{(async()=>{let o;try{const i=new AbortController;s>0&&(o=setTimeout((()=>{n?i.abort():a(r)}),s)),t(await e({signal:i?.signal}))}catch(i){"AbortError"===i.name&&a(r),a(i)}finally{clearTimeout(o)}})()}))}},38598:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.integerRegex=t.bytesRegex=t.arrayRegex=void 0,t.arrayRegex=/^(.*)\[([0-9]*)\]$/,t.bytesRegex=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,t.integerRegex=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/},47684:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rpc=t.getSocket=void 0;const s=r(68589),n=r(99806),a=r(8612),o=r(28404);let i=0;const c=new Map;t.getSocket=async function(e){let t=c.get(e);if(t)return t;const{schedule:s}=(0,n.createBatchScheduler)({id:e,fn:async()=>{let s=await r.e(6558).then(r.bind(r,16558));s=s.default?.constructor?s.default:s.WebSocket;const n=new s(e),a=new Map,o=new Map,i=e=>{let{data:t}=e;const r=JSON.parse(t),s="eth_subscription"===r.method,n=s?r.params.subscription:r.id,i=s?o:a,c=i.get(n);c&&c({data:t}),s||i.delete(n)},u=()=>{c.delete(e),n.removeEventListener("close",u),n.removeEventListener("message",i)};return n.addEventListener("close",u),n.addEventListener("message",i),n.readyState===s.CONNECTING&&await new Promise(((e,t)=>{n&&(n.onopen=e,n.onerror=t)})),t=Object.assign(n,{requests:a,subscriptions:o}),c.set(e,t),[t]}}),[a,[o]]=await s();return o},t.rpc={http:async function(e,t){let{body:r,fetchOptions:n={},timeout:c=1e4}=t;const{headers:u,method:d,signal:y}=n;try{const t=await(0,a.withTimeout)((async t=>{let{signal:s}=t;return await fetch(e,{...n,body:Array.isArray(r)?(0,o.stringify)(r.map((e=>({jsonrpc:"2.0",id:i++,...e})))):(0,o.stringify)({jsonrpc:"2.0",id:i++,...r}),headers:{...u,"Content-Type":"application/json"},method:d||"POST",signal:y||(c>0?s:void 0)})}),{errorInstance:new s.TimeoutError({body:r,url:e}),timeout:c,signal:!0});let p;if(p=t.headers.get("Content-Type")?.startsWith("application/json")?await t.json():await t.text(),!t.ok)throw new s.HttpRequestError({body:r,details:(0,o.stringify)(p.error)||t.statusText,headers:t.headers,status:t.status,url:e});return p}catch(p){if(p instanceof s.HttpRequestError)throw p;if(p instanceof s.TimeoutError)throw p;throw new s.HttpRequestError({body:r,details:p.message,url:e})}},webSocket:function(e,t){let{body:r,onResponse:n}=t;if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new s.WebSocketRequestError({body:r,url:e.url,details:"Socket is closed."});const a=i++,o=t=>{let{data:s}=t;const i=JSON.parse(s);"number"===typeof i.id&&a!==i.id||(n?.(i),"eth_subscribe"===r.method&&"string"===typeof i.result&&e.subscriptions.set(i.result,o),"eth_unsubscribe"===r.method&&e.subscriptions.delete(r.params?.[0]))};return e.requests.set(a,o),e.send(JSON.stringify({jsonrpc:"2.0",...r,id:a})),e},webSocketAsync:async function(e,r){let{body:n,timeout:o=1e4}=r;return(0,a.withTimeout)((()=>new Promise((r=>t.rpc.webSocket(e,{body:n,onResponse:r})))),{errorInstance:new s.TimeoutError({body:n,url:e.url}),timeout:o})}}},85838:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hashMessage=void 0;const s=r(74865),n=r(22867),a=r(33074);t.hashMessage=function(e,t){const r="string"===typeof e?(0,n.stringToBytes)(e):e.raw instanceof Uint8Array?e.raw:(0,n.toBytes)(e.raw),o=(0,n.stringToBytes)(`\x19Ethereum Signed Message:\n${r.length}`);return(0,a.keccak256)((0,s.concat)([o,r]),t)}},36299:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hashTypedData=void 0;const s=r(37209),n=r(74865),a=r(79239),o=r(33074),i=r(23901);function c(e){let{data:t,primaryType:r,types:s}=e;const n=u({data:t,primaryType:r,types:s});return(0,o.keccak256)(n)}function u(e){let{data:t,primaryType:r,types:n}=e;const a=[{type:"bytes32"}],o=[d({primaryType:r,types:n})];for(const s of n[r]){const[e,r]=p({types:n,name:s.name,type:s.type,value:t[s.name]});a.push(e),o.push(r)}return(0,s.encodeAbiParameters)(a,o)}function d(e){let{primaryType:t,types:r}=e;const s=(0,a.toHex)(function(e){let{primaryType:t,types:r}=e,s="";const n=y({primaryType:t,types:r});n.delete(t);const a=[t,...Array.from(n).sort()];for(const o of a)s+=`${o}(${r[o].map((e=>{let{name:t,type:r}=e;return`${r} ${t}`})).join(",")})`;return s}({primaryType:t,types:r}));return(0,o.keccak256)(s)}function y(e){let{primaryType:t,types:r}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;const n=t.match(/^\w*/u),a=n?.[0];if(s.has(a)||void 0===r[a])return s;s.add(a);for(const o of r[a])y({primaryType:o.type,types:r},s);return s}function p(e){let{types:t,name:r,type:n,value:i}=e;if(void 0!==t[n])return[{type:"bytes32"},(0,o.keccak256)(u({data:i,primaryType:n,types:t}))];if("bytes"===n){return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},(0,o.keccak256)(i)]}if("string"===n)return[{type:"bytes32"},(0,o.keccak256)((0,a.toHex)(i))];if(n.lastIndexOf("]")===n.length-1){const e=n.slice(0,n.lastIndexOf("[")),a=i.map((s=>p({name:r,type:e,types:t,value:s})));return[{type:"bytes32"},(0,o.keccak256)((0,s.encodeAbiParameters)(a.map((e=>{let[t]=e;return t})),a.map((e=>{let[,t]=e;return t}))))]}return[{type:n},i]}t.hashTypedData=function(e){let{domain:t,message:r,primaryType:s,types:a}=e;const u="undefined"===typeof t?{}:t,d={EIP712Domain:["string"===typeof u?.name&&{name:"name",type:"string"},u?.version&&{name:"version",type:"string"},"number"===typeof u?.chainId&&{name:"chainId",type:"uint256"},u?.verifyingContract&&{name:"verifyingContract",type:"address"},u?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean),...a};(0,i.validateTypedData)({domain:u,message:r,primaryType:s,types:d});const y=["0x1901"];return u&&y.push(function(e){let{domain:t,types:r}=e;return c({data:t,primaryType:"EIP712Domain",types:r})}({domain:u,types:d})),"EIP712Domain"!==s&&y.push(c({data:r,primaryType:s,types:d})),(0,o.keccak256)((0,n.concat)(y))}},95755:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hexToSignature=void 0;const s=r(80425),n=r(79239);t.hexToSignature=function(e){const{r:t,s:r}=s.secp256k1.Signature.fromCompact(e.slice(2,130)),a=BigInt(`0x${e.slice(130)}`);return{r:(0,n.numberToHex)(t),s:(0,n.numberToHex)(r),v:a}}},56405:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.recoverAddress=void 0;const s=r(28293),n=r(67116);t.recoverAddress=async function(e){let{hash:t,signature:r}=e;return(0,s.publicKeyToAddress)(await(0,n.recoverPublicKey)({hash:t,signature:r}))}},15788:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.recoverMessageAddress=void 0;const s=r(85838),n=r(56405);t.recoverMessageAddress=async function(e){let{message:t,signature:r}=e;return(0,n.recoverAddress)({hash:(0,s.hashMessage)(t),signature:r})}},67116:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.recoverPublicKey=void 0;const s=r(34055),n=r(43149),a=r(79239);t.recoverPublicKey=async function(e){let{hash:t,signature:o}=e;const i=(0,s.isHex)(o)?o:(0,a.toHex)(o),c=(0,s.isHex)(t)?t:(0,a.toHex)(t);let u=(0,n.hexToNumber)(`0x${i.slice(130)}`);0!==u&&1!==u||(u+=27);const{secp256k1:d}=await Promise.all([r.e(9048),r.e(4698),r.e(5762)]).then(r.bind(r,47261));return`0x${d.Signature.fromCompact(i.substring(2,130)).addRecoveryBit(u-27).recoverPublicKey(c.substring(2)).toHex(!1)}`}},93664:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.recoverTypedDataAddress=void 0;const s=r(36299),n=r(56405);t.recoverTypedDataAddress=async function(e){let{domain:t,message:r,primaryType:a,signature:o,types:i}=e;return(0,n.recoverAddress)({hash:(0,s.hashTypedData)({domain:t,message:r,primaryType:a,types:i}),signature:o})}},36851:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.signatureToHex=void 0;const s=r(80425),n=r(43149),a=r(79239);t.signatureToHex=function(e){let{r:t,s:r,v:o}=e;return`0x${new s.secp256k1.Signature((0,n.hexToBigInt)(t),(0,n.hexToBigInt)(r)).toCompactHex()}${(0,a.toHex)(o).slice(2)}`}},25384:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.verifyMessage=void 0;const s=r(37479),n=r(87767),a=r(15788);t.verifyMessage=async function(e){let{address:t,message:r,signature:o}=e;return(0,n.isAddressEqual)((0,s.getAddress)(t),await(0,a.recoverMessageAddress)({message:r,signature:o}))}},39103:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.verifyTypedData=void 0;const s=r(37479),n=r(87767),a=r(93664);t.verifyTypedData=async function(e){let{address:t,domain:r,message:o,primaryType:i,signature:c,types:u}=e;return(0,n.isAddressEqual)((0,s.getAddress)(t),await(0,a.recoverTypedDataAddress)({domain:r,message:o,primaryType:i,signature:c,types:u}))}}}]);