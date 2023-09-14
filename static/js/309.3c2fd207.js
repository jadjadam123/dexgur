"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[309],{7569:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.OffchainLookupSenderMismatchError=r.OffchainLookupResponseMalformedError=r.OffchainLookupError=void 0;const a=t(28404),o=t(2798),n=t(70694);class s extends o.BaseError{constructor(e){let{callbackSelector:r,cause:t,data:a,extraData:o,sender:s,urls:i}=e;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",i&&["  Gateway URL(s):",...i.map((e=>`    ${(0,n.getUrl)(e)}`))],`  Sender: ${s}`,`  Data: ${a}`,`  Callback selector: ${r}`,`  Extra data: ${o}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}r.OffchainLookupError=s;class i extends o.BaseError{constructor(e){let{result:r,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,n.getUrl)(t)}`,`Response: ${(0,a.stringify)(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}r.OffchainLookupResponseMalformedError=i;class c extends o.BaseError{constructor(e){let{sender:r,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}r.OffchainLookupSenderMismatchError=c},47988:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.InvalidChainIdError=r.ClientChainNotConfiguredError=r.ChainNotFoundError=r.ChainMismatchError=r.ChainDoesNotSupportContract=void 0;const a=t(2798);class o extends a.BaseError{constructor(e){let{blockNumber:r,chain:t,contract:a}=e;super(`Chain "${t.name}" does not support contract "${a.name}".`,{metaMessages:["This could be due to any of the following:",...r&&a.blockCreated&&a.blockCreated>r?[`- The contract "${a.name}" was not deployed until block ${a.blockCreated} (current block ${r}).`]:[`- The chain does not have the contract "${a.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}r.ChainDoesNotSupportContract=o;class n extends a.BaseError{constructor(e){let{chain:r,currentChainId:t}=e;super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${r.id} \u2013 ${r.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${r.id} \u2013 ${r.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}r.ChainMismatchError=n;class s extends a.BaseError{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}r.ChainNotFoundError=s;class i extends a.BaseError{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}r.ClientChainNotConfiguredError=i;class c extends a.BaseError{constructor(e){let{chainId:r}=e;super(`Chain ID "${r}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}r.InvalidChainIdError=c},51214:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.RawContractError=r.ContractFunctionZeroDataError=r.ContractFunctionRevertedError=r.ContractFunctionExecutionError=r.CallExecutionError=void 0;const a=t(12482),o=t(8713),n=t(65816),s=t(99681),i=t(81693),c=t(71134),l=t(31546),u=t(5028),d=t(88808),f=t(2798),b=t(6460),h=t(70694);class m extends f.BaseError{constructor(e,r){let{account:t,docsPath:o,chain:n,data:s,gas:i,gasPrice:c,maxFeePerGas:d,maxPriorityFeePerGas:f,nonce:h,to:m,value:g}=r;const p=t?(0,a.parseAccount)(t):void 0,v=(0,b.prettyPrint)({from:p?.address,to:m,value:"undefined"!==typeof g&&`${(0,l.formatEther)(g)} ${n?.nativeCurrency.symbol||"ETH"}`,data:s,gas:i,gasPrice:"undefined"!==typeof c&&`${(0,u.formatGwei)(c)} gwei`,maxFeePerGas:"undefined"!==typeof d&&`${(0,u.formatGwei)(d)} gwei`,maxPriorityFeePerGas:"undefined"!==typeof f&&`${(0,u.formatGwei)(f)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}r.CallExecutionError=m;class g extends f.BaseError{constructor(e,r){let{abi:t,args:a,contractAddress:o,docsPath:n,functionName:l,sender:u}=r;const d=(0,c.getAbiItem)({abi:t,args:a,name:l}),f=d?(0,i.formatAbiItemWithArgs)({abiItem:d,args:a,includeFunctionName:!1,includeName:!1}):void 0,m=d?(0,s.formatAbiItem)(d,{includeName:!0}):void 0,g=(0,b.prettyPrint)({address:o&&(0,h.getContractAddress)(o),function:m,args:f&&"()"!==f&&`${[...Array(l?.length??0).keys()].map((()=>" ")).join("")}${f}`,sender:u});super(e.shortMessage||`An unknown error occurred while executing the contract function "${l}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",g].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=a,this.cause=e,this.contractAddress=o,this.functionName=l,this.sender=u}}r.ContractFunctionExecutionError=g;class p extends f.BaseError{constructor(e){let r,t,a,c,l,{abi:u,data:f,functionName:b,message:h}=e;if(f&&"0x"!==f)try{t=(0,n.decodeErrorResult)({abi:u,data:f});const{abiItem:e,errorName:r,args:l}=t;if("Error"===r)c=l[0];else if("Panic"===r){const[e]=l;c=o.panicReasons[e]}else{const t=e?(0,s.formatAbiItem)(e,{includeName:!0}):void 0,o=e&&l?(0,i.formatAbiItemWithArgs)({abiItem:e,args:l,includeFunctionName:!1,includeName:!1}):void 0;a=[t?`Error: ${t}`:"",o&&"()"!==o?`       ${[...Array(r?.length??0).keys()].map((()=>" ")).join("")}${o}`:""]}}catch(m){r=m}else h&&(c=h);r instanceof d.AbiErrorSignatureNotFoundError&&(l=r.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&"execution reverted"!==c||l?[`The contract function "${b}" reverted with the following ${l?"signature":"reason"}:`,c||l].join("\n"):`The contract function "${b}" reverted.`,{cause:r,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.reason=c,this.signature=l}}r.ContractFunctionRevertedError=p;class v extends f.BaseError{constructor(e){let{functionName:r}=e;super(`The contract function "${r}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${r}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}r.ContractFunctionZeroDataError=v;class E extends f.BaseError{constructor(e){let{data:r,message:t}=e;super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r}}r.RawContractError=E},93080:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.SizeExceedsPaddingSizeError=r.SliceOffsetOutOfBoundsError=void 0;const a=t(2798);class o extends a.BaseError{constructor(e){let{offset:r,position:t,size:a}=e;super(`Slice ${"start"===t?"starting":"ending"} at offset "${r}" is out-of-bounds (size: ${a}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}r.SliceOffsetOutOfBoundsError=o;class n extends a.BaseError{constructor(e){let{size:r,targetSize:t,type:a}=e;super(`${a.charAt(0).toUpperCase()}${a.slice(1).toLowerCase()} size (${r}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}r.SizeExceedsPaddingSizeError=n},19750:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.SizeOverflowError=r.OffsetOutOfBoundsError=r.InvalidHexValueError=r.InvalidHexBooleanError=r.InvalidBytesBooleanError=r.IntegerOutOfRangeError=r.DataLengthTooShortError=r.DataLengthTooLongError=void 0;const a=t(2798);class o extends a.BaseError{constructor(e){let{consumed:r,length:t}=e;super(`Consumed bytes (${r}) is shorter than data length (${t-1}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DataLengthTooLongError"})}}r.DataLengthTooLongError=o;class n extends a.BaseError{constructor(e){let{length:r,dataLength:t}=e;super(`Data length (${t-1}) is shorter than prefix length (${r-1}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DataLengthTooShortError"})}}r.DataLengthTooShortError=n;class s extends a.BaseError{constructor(e){let{max:r,min:t,signed:a,size:o,value:n}=e;super(`Number "${n}" is not in safe ${o?`${8*o}-bit ${a?"signed":"unsigned"} `:""}integer range ${r?`(${t} to ${r})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}r.IntegerOutOfRangeError=s;class i extends a.BaseError{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}r.InvalidBytesBooleanError=i;class c extends a.BaseError{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}r.InvalidHexBooleanError=c;class l extends a.BaseError{constructor(e){super(`Hex value "${e}" is an odd length (${e.length}). It must be an even length.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexValueError"})}}r.InvalidHexValueError=l;class u extends a.BaseError{constructor(e){let{nextOffset:r,offset:t}=e;super(`Next offset (${r}) is greater than previous offset + consumed bytes (${t})`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffsetOutOfBoundsError"})}}r.OffsetOutOfBoundsError=u;class d extends a.BaseError{constructor(e){let{givenSize:r,maxSize:t}=e;super(`Size cannot exceed ${t} bytes. Given size: ${r} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}r.SizeOverflowError=d},95274:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.EnsAvatarUnsupportedNamespaceError=r.EnsAvatarUriResolutionError=r.EnsAvatarInvalidNftUriError=r.EnsAvatarInvalidMetadataError=void 0;const a=t(2798);class o extends a.BaseError{constructor(e){let{data:r}=e;super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}r.EnsAvatarInvalidMetadataError=o;class n extends a.BaseError{constructor(e){let{reason:r}=e;super(`ENS NFT avatar URI is invalid. ${r}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}r.EnsAvatarInvalidNftUriError=n;class s extends a.BaseError{constructor(e){let{uri:r}=e;super(`Unable to resolve ENS avatar URI "${r}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}r.EnsAvatarUriResolutionError=s;class i extends a.BaseError{constructor(e){let{namespace:r}=e;super(`ENS NFT avatar namespace "${r}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}r.EnsAvatarUnsupportedNamespaceError=i},59362:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.EstimateGasExecutionError=void 0;const a=t(31546),o=t(5028),n=t(2798),s=t(6460);class i extends n.BaseError{constructor(e,r){let{account:t,docsPath:n,chain:i,data:c,gas:l,gasPrice:u,maxFeePerGas:d,maxPriorityFeePerGas:f,nonce:b,to:h,value:m}=r;const g=(0,s.prettyPrint)({from:t?.address,to:h,value:"undefined"!==typeof m&&`${(0,a.formatEther)(m)} ${i?.nativeCurrency.symbol||"ETH"}`,data:c,gas:l,gasPrice:"undefined"!==typeof u&&`${(0,o.formatGwei)(u)} gwei`,maxFeePerGas:"undefined"!==typeof d&&`${(0,o.formatGwei)(d)} gwei`,maxPriorityFeePerGas:"undefined"!==typeof f&&`${(0,o.formatGwei)(f)} gwei`,nonce:b});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}r.EstimateGasExecutionError=i}}]);