/*! For license information please see 746.5e7638f4.js.LICENSE.txt */
"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[746],{61292:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createCurve=t.getHash=void 0;const n=r(36316),o=r(24101),i=r(98232);function s(e){return{hash:e,hmac:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return(0,n.hmac)(e,t,(0,o.concatBytes)(...i))},randomBytes:o.randomBytes}}t.getHash=s,t.createCurve=function(e,t){const r=t=>(0,i.weierstrass)({...e,...s(t)});return Object.freeze({...r(t),create:r})}},8516:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateBasic=t.wNAF=void 0;const n=r(77928),o=r(59625),i=BigInt(0),s=BigInt(1);t.wNAF=function(e,t){const r=(e,t)=>{const r=t.negate();return e?r:t},n=e=>({windows:Math.ceil(t/e)+1,windowSize:2**(e-1)});return{constTimeNegate:r,unsafeLadder(t,r){let n=e.ZERO,o=t;for(;r>i;)r&s&&(n=n.add(o)),o=o.double(),r>>=s;return n},precomputeWindow(e,t){const{windows:r,windowSize:o}=n(t),i=[];let s=e,u=s;for(let n=0;n<r;n++){u=s,i.push(u);for(let e=1;e<o;e++)u=u.add(s),i.push(u);s=u.double()}return i},wNAF(t,o,i){const{windows:u,windowSize:a}=n(t);let c=e.ZERO,f=e.BASE;const d=BigInt(2**t-1),l=2**t,h=BigInt(t);for(let e=0;e<u;e++){const t=e*a;let n=Number(i&d);i>>=h,n>a&&(n-=l,i+=s);const u=t,g=t+Math.abs(n)-1,w=e%2!==0,p=n<0;0===n?f=f.add(r(w,o[u])):c=c.add(r(p,o[g]))}return{p:c,f:f}},wNAFCached(e,t,r,n){const o=e._WINDOW_SIZE||1;let i=t.get(e);return i||(i=this.precomputeWindow(e,o),1!==o&&t.set(e,n(i))),this.wNAF(o,i,r)}}},t.validateBasic=function(e){return(0,n.validateField)(e.Fp),(0,o.validateObject)(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...(0,n.nLength)(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}},52451:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createHasher=t.isogenyMap=t.hash_to_field=t.expand_message_xof=t.expand_message_xmd=void 0;const n=r(77928),o=r(59625);const i=o.bytesToNumberBE;function s(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const r=Array.from({length:t}).fill(0);for(let n=t-1;n>=0;n--)r[n]=255&e,e>>>=8;return new Uint8Array(r)}function u(e,t){const r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]^t[n];return r}function a(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function c(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function f(e,t,r,n){a(e),a(t),c(r),t.length>255&&(t=n((0,o.concatBytes)((0,o.utf8ToBytes)("H2C-OVERSIZE-DST-"),t)));const{outputLen:i,blockLen:f}=n,d=Math.ceil(r/i);if(d>255)throw new Error("Invalid xmd length");const l=(0,o.concatBytes)(t,s(t.length,1)),h=s(0,f),g=s(r,2),w=new Array(d),p=n((0,o.concatBytes)(h,e,g,s(0,1),l));w[0]=n((0,o.concatBytes)(p,s(1,1),l));for(let a=1;a<=d;a++){const e=[u(p,w[a-1]),s(a+1,1),l];w[a]=n((0,o.concatBytes)(...e))}return(0,o.concatBytes)(...w).slice(0,r)}function d(e,t,r,n,i){if(a(e),a(t),c(r),t.length>255){const e=Math.ceil(2*n/8);t=i.create({dkLen:e}).update((0,o.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest()}if(r>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return i.create({dkLen:r}).update(e).update(s(r,2)).update(t).update(s(t.length,1)).digest()}function l(e,t,r){(0,o.validateObject)(r,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:s,k:u,m:l,hash:h,expand:g,DST:w}=r;a(e),c(t);const p=function(e){if(e instanceof Uint8Array)return e;if("string"===typeof e)return(0,o.utf8ToBytes)(e);throw new Error("DST must be Uint8Array or string")}(w),y=s.toString(2).length,b=Math.ceil((y+u)/8),m=t*l*b;let E;if("xmd"===g)E=f(e,p,m,h);else if("xof"===g)E=d(e,p,m,u,h);else{if("_internal_pass"!==g)throw new Error('expand must be "xmd" or "xof"');E=e}const B=new Array(t);for(let o=0;o<t;o++){const e=new Array(l);for(let t=0;t<l;t++){const r=b*(t+o*l),u=E.subarray(r,r+b);e[t]=(0,n.mod)(i(u),s)}B[o]=e}return B}t.expand_message_xmd=f,t.expand_message_xof=d,t.hash_to_field=l,t.isogenyMap=function(e,t){const r=t.map((e=>Array.from(e).reverse()));return(t,n)=>{const[o,i,s,u]=r.map((r=>r.reduce(((r,n)=>e.add(e.mul(r,t),n)))));return t=e.div(o,i),n=e.mul(n,e.div(s,u)),{x:t,y:n}}},t.createHasher=function(e,t,r){if("function"!==typeof t)throw new Error("mapToCurve() must be defined");return{hashToCurve(n,o){const i=l(n,2,{...r,DST:r.DST,...o}),s=e.fromAffine(t(i[0])),u=e.fromAffine(t(i[1])),a=s.add(u).clearCofactor();return a.assertValidity(),a},encodeToCurve(n,o){const i=l(n,1,{...r,DST:r.encodeDST,...o}),s=e.fromAffine(t(i[0])).clearCofactor();return s.assertValidity(),s}}}},77928:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hashToPrivateScalar=t.FpSqrtEven=t.FpSqrtOdd=t.Field=t.nLength=t.FpIsSquare=t.FpDiv=t.FpInvertBatch=t.FpPow=t.validateField=t.isNegativeLE=t.FpSqrt=t.tonelliShanks=t.invert=t.pow2=t.pow=t.mod=void 0;const n=r(59625),o=BigInt(0),i=BigInt(1),s=BigInt(2),u=BigInt(3),a=BigInt(4),c=BigInt(5),f=BigInt(8);BigInt(9),BigInt(16);function d(e,t){const r=e%t;return r>=o?r:t+r}function l(e,t,r){if(r<=o||t<o)throw new Error("Expected power/modulo > 0");if(r===i)return o;let n=i;for(;t>o;)t&i&&(n=n*e%r),e=e*e%r,t>>=i;return n}function h(e,t){if(e===o||t<=o)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=d(e,t),n=t,s=o,u=i,a=i,c=o;for(;r!==o;){const e=n/r,t=n%r,o=s-a*e,i=u-c*e;n=r,r=t,s=a,u=c,a=o,c=i}if(n!==i)throw new Error("invert: does not exist");return d(s,t)}function g(e){const t=(e-i)/s;let r,n,u;for(r=e-i,n=0;r%s===o;r/=s,n++);for(u=s;u<e&&l(u,t,e)!==e-i;u++);if(1===n){const t=(e+i)/a;return function(e,r){const n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw new Error("Cannot find square root");return n}}const c=(r+i)/s;return function(e,o){if(e.pow(o,t)===e.neg(e.ONE))throw new Error("Cannot find square root");let s=n,a=e.pow(e.mul(e.ONE,u),r),f=e.pow(o,c),d=e.pow(o,r);for(;!e.eql(d,e.ONE);){if(e.eql(d,e.ZERO))return e.ZERO;let t=1;for(let n=e.sqr(d);t<s&&!e.eql(n,e.ONE);t++)n=e.sqr(n);const r=e.pow(a,i<<BigInt(s-t-1));a=e.sqr(r),f=e.mul(f,r),d=e.mul(d,a),s=t}return f}}function w(e){if(e%a===u){const t=(e+i)/a;return function(e,r){const n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw new Error("Cannot find square root");return n}}if(e%f===c){const t=(e-c)/f;return function(e,r){const n=e.mul(r,s),o=e.pow(n,t),i=e.mul(r,o),u=e.mul(e.mul(i,s),o),a=e.mul(i,e.sub(u,e.ONE));if(!e.eql(e.sqr(a),r))throw new Error("Cannot find square root");return a}}return g(e)}t.mod=d,t.pow=l,t.pow2=function(e,t,r){let n=e;for(;t-- >o;)n*=n,n%=r;return n},t.invert=h,t.tonelliShanks=g,t.FpSqrt=w;t.isNegativeLE=(e,t)=>(d(e,t)&i)===i;const p=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function y(e,t,r){if(r<o)throw new Error("Expected power > 0");if(r===o)return e.ONE;if(r===i)return t;let n=e.ONE,s=t;for(;r>o;)r&i&&(n=e.mul(n,s)),s=e.sqr(s),r>>=i;return n}function b(e,t){const r=new Array(t.length),n=t.reduce(((t,n,o)=>e.is0(n)?t:(r[o]=t,e.mul(t,n))),e.ONE),o=e.inv(n);return t.reduceRight(((t,n,o)=>e.is0(n)?t:(r[o]=e.mul(t,r[o]),e.mul(t,n))),o),r}function m(e,t){const r=void 0!==t?t:e.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}t.validateField=function(e){const t=p.reduce(((e,t)=>(e[t]="function",e)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return(0,n.validateObject)(e,t)},t.FpPow=y,t.FpInvertBatch=b,t.FpDiv=function(e,t,r){return e.mul(t,"bigint"===typeof r?h(r,e.ORDER):e.inv(r))},t.FpIsSquare=function(e){const t=(e.ORDER-i)/s;return r=>{const n=e.pow(r,t);return e.eql(n,e.ZERO)||e.eql(n,e.ONE)}},t.nLength=m,t.Field=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(e<=o)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:u,nByteLength:a}=m(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const c=w(e),f=Object.freeze({ORDER:e,BITS:u,BYTES:a,MASK:(0,n.bitMask)(u),ZERO:o,ONE:i,create:t=>d(t,e),isValid:t=>{if("bigint"!==typeof t)throw new Error("Invalid field element: expected bigint, got "+typeof t);return o<=t&&t<e},is0:e=>e===o,isOdd:e=>(e&i)===i,neg:t=>d(-t,e),eql:(e,t)=>e===t,sqr:t=>d(t*t,e),add:(t,r)=>d(t+r,e),sub:(t,r)=>d(t-r,e),mul:(t,r)=>d(t*r,e),pow:(e,t)=>y(f,e,t),div:(t,r)=>d(t*h(r,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>h(t,e),sqrt:s.sqrt||(e=>c(f,e)),invertBatch:e=>b(f,e),cmov:(e,t,r)=>r?t:e,toBytes:e=>r?(0,n.numberToBytesLE)(e,a):(0,n.numberToBytesBE)(e,a),fromBytes:e=>{if(e.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${e.length}`);return r?(0,n.bytesToNumberLE)(e):(0,n.bytesToNumberBE)(e)}});return Object.freeze(f)},t.FpSqrtOdd=function(e,t){if(!e.isOdd)throw new Error("Field doesn't have isOdd");const r=e.sqrt(t);return e.isOdd(r)?r:e.neg(r)},t.FpSqrtEven=function(e,t){if(!e.isOdd)throw new Error("Field doesn't have isOdd");const r=e.sqrt(t);return e.isOdd(r)?e.neg(r):r},t.hashToPrivateScalar=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=(e=(0,n.ensureBytes)("privateHash",e)).length,s=m(t).nByteLength+8;if(s<24||o<s||o>1024)throw new Error(`hashToPrivateScalar: expected ${s}-1024 bytes of input, got ${o}`);return d(r?(0,n.bytesToNumberLE)(e):(0,n.bytesToNumberBE)(e),t-i)+i}},59625:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateObject=t.createHmacDrbg=t.bitMask=t.bitSet=t.bitGet=t.bitLen=t.utf8ToBytes=t.equalBytes=t.concatBytes=t.ensureBytes=t.numberToVarBytesBE=t.numberToBytesLE=t.numberToBytesBE=t.bytesToNumberLE=t.bytesToNumberBE=t.hexToBytes=t.hexToNumber=t.numberToHexUnpadded=t.bytesToHex=void 0;const r=BigInt(0),n=BigInt(1),o=BigInt(2),i=e=>e instanceof Uint8Array,s=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function u(e){if(!i(e))throw new Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=s[e[r]];return t}function a(e){const t=e.toString(16);return 1&t.length?`0${t}`:t}function c(e){if("string"!==typeof e)throw new Error("hex string expected, got "+typeof e);return BigInt(""===e?"0":`0x${e}`)}function f(e){if("string"!==typeof e)throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const r=new Uint8Array(t/2);for(let n=0;n<r.length;n++){const t=2*n,o=e.slice(t,t+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");r[n]=i}return r}function d(e,t){return f(e.toString(16).padStart(2*t,"0"))}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=new Uint8Array(t.reduce(((e,t)=>e+t.length),0));let o=0;return t.forEach((e=>{if(!i(e))throw new Error("Uint8Array expected");n.set(e,o),o+=e.length})),n}t.bytesToHex=u,t.numberToHexUnpadded=a,t.hexToNumber=c,t.hexToBytes=f,t.bytesToNumberBE=function(e){return c(u(e))},t.bytesToNumberLE=function(e){if(!i(e))throw new Error("Uint8Array expected");return c(u(Uint8Array.from(e).reverse()))},t.numberToBytesBE=d,t.numberToBytesLE=function(e,t){return d(e,t).reverse()},t.numberToVarBytesBE=function(e){return f(a(e))},t.ensureBytes=function(e,t,r){let n;if("string"===typeof t)try{n=f(t)}catch(s){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${s}`)}else{if(!i(t))throw new Error(`${e} must be hex string or Uint8Array`);n=Uint8Array.from(t)}const o=n.length;if("number"===typeof r&&o!==r)throw new Error(`${e} expected ${r} bytes, got ${o}`);return n},t.concatBytes=l,t.equalBytes=function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0},t.utf8ToBytes=function(e){if("string"!==typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))},t.bitLen=function(e){let t;for(t=0;e>r;e>>=n,t+=1);return t},t.bitGet=function(e,t){return e>>BigInt(t)&n};t.bitSet=(e,t,o)=>e|(o?n:r)<<BigInt(t);t.bitMask=e=>(o<<BigInt(e-1))-n;const h=e=>new Uint8Array(e),g=e=>Uint8Array.from(e);t.createHmacDrbg=function(e,t,r){if("number"!==typeof e||e<2)throw new Error("hashLen must be a number");if("number"!==typeof t||t<2)throw new Error("qByteLen must be a number");if("function"!==typeof r)throw new Error("hmacFn must be a function");let n=h(e),o=h(e),i=0;const s=()=>{n.fill(1),o.fill(0),i=0},u=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return r(o,n,...t)},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h();o=u(g([0]),e),n=u(),0!==e.length&&(o=u(g([1]),e),n=u())},c=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let e=0;const r=[];for(;e<t;){n=u();const t=n.slice();r.push(t),e+=n.length}return l(...r)};return(e,t)=>{let r;for(s(),a(e);!(r=t(c()));)a();return s(),r}};const w={bigint:e=>"bigint"===typeof e,function:e=>"function"===typeof e,boolean:e=>"boolean"===typeof e,string:e=>"string"===typeof e,isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"===typeof e&&Number.isSafeInteger(e.outputLen)};t.validateObject=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=(t,r,n)=>{const o=w[r];if("function"!==typeof o)throw new Error(`Invalid validator "${r}", expected function`);const i=e[t];if((!n||void 0!==i)&&!o(i,e))throw new Error(`Invalid param ${String(t)}=${i} (${typeof i}), expected ${r}`)};for(const[o,i]of Object.entries(t))n(o,i,!1);for(const[o,i]of Object.entries(r))n(o,i,!0);return e}}}]);