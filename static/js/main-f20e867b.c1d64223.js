"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[8182],{81416:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(83875),r=s(45263);const o=e=>{let{to:t,onClick:s}=e;return(0,r.jsx)("div",{className:"full-history-button-container",children:(0,r.jsx)(a.rU,{to:t,className:"full-history-button",onClick:s,children:"Full history"})})}},71469:(e,t,s)=>{s.d(t,{Z:()=>Y});var a=s(83816),r=s.n(a),o=s(7276),n=s(5868),l=s(74149),i=s(18914),c=s(29725),d=s(73256),u=s(54452),v=s(34071),m=s(19699),p=s(37895),h=s(13174),f=s(59895),b=s(81416),k=s(17666),y=s.n(k);let x=function(e){return e.all="all",e.adds="adds",e.removes="removes",e}({});const T={[x.all]:{transaction_types:[u.TransactionTypes.mint,u.TransactionTypes.burn]},[x.adds]:{transaction_types:[u.TransactionTypes.mint]},[x.removes]:{transaction_types:[u.TransactionTypes.burn]}};let _=function(e){return e.loadingMessage="Loading pools activity data...",e.emptyMessage="It looks like there are currently no liquidity TXs available.",e}({});const w=e=>{let{currentTokenRecord:t,filters:s,rowsToShow:a}=e;if(!t.id)throw new Error("currentTokenRecord.id is undefined");const r=(e=>y()(e.transaction_types,T[x.all].transaction_types))(s)?2*a:a;return{filters:{...s,current_token_id:null===t||void 0===t?void 0:t.id,limit:r},useLastEndpoint:!0}};var g=s(96885),j=s(53325);const S=e=>{let{rawData:t,tokenId:s,marketType:a}=e;if(a!==u.MarketType.token)return t;if(!s)return console.error("tokenId is undefined"),[];return t.filter((e=>{var t;(0,j.m1)(s);return null===(t=e.lpToken)||void 0===t||t.address,!0}))};var N=s(65801),C=s(92451),Z=s(84033),D=s.n(Z),A=s(83875),R=s(15941),F=s(58660),P=s(46116),I=s(47248),M=s(80086),L=s(7863),B=s(40616),E=s(84760),Q=s(64706),O=s(438),U=s(25971),W=s(45263);const $=e=>{var t,s;const a=(0,n.v9)((e=>e.currency)),r=(0,n.v9)((e=>e.tokens.currentToken)),o=null===r||void 0===r?void 0:r.network;if(!r||!o)return null;const l=(0,Q.h)(e.transactionType,null===r||void 0===r?void 0:r.id,e.fromAddress,e.modifier),i=(0,P.c0)(o,a),c=(0,L.Wo)(e.wallets,e.account),d=(0,I.DT)(r).toLowerCase(),u=e.tokenAddresses.indexOf(d),v=r.marketType===C.model.MarketType.lp||(null===(t=e.lpToken)||void 0===t?void 0:t.address)===d?e.amountStable||0:(0,j._q)(a,e.amountsStable&&e.amountsStable[u],e.amountsNative&&e.amountsNative[u]),m={className:D()("data-table__trow",`data-table__trow--${l}`,e.classAnimated),"data-testid":`table-row-${l}`},p=null!==(s=e.wallets)&&void 0!==s&&s.length?e.wallets[0]:"",h=e.transactionAddress,f=e.poolAddress,b=(0,F.Zm)({urlParams:{walletAddress:p,tradeId:h},filters:{pool_address:f}});return(0,W.jsx)(A.rU,{...m,to:b,onClick:()=>{e.onClickRow&&e.onClickRow()},children:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("div",{className:`data-table__tcell data-table__tcell--type data-table__tcell--type-${l}`}),(0,W.jsx)(U.Z,{amounts:e.amounts,symbols:e.symbols,tokenAddresses:e.tokenAddresses,network:e.network,quantityTokensTooltip:4,isTokenLink:!1}),(0,W.jsx)("div",{className:"data-table__tcell data-table__tcell--amount",title:(0,j.i2)((0,j.x6)(v)),children:(0,W.jsxs)("div",{className:"data-table__data",children:[(0,W.jsxs)("div",{className:"value",children:["USD"===a&&(0,W.jsx)("span",{className:"sign",children:"$"}),(0,W.jsx)("span",{className:D()("number",{shorten:v<1}),children:(0,R.lB)(v,{roundBigNumbersFrom:"M"})}),"USD"!==a&&(0,W.jsxs)("span",{className:"sign",children:["\xa0",i]})]}),e.tradeBarData&&(0,W.jsx)("div",{className:"meter",children:(0,W.jsx)(E.Z,{shouldDisplay:!0,tradeBarData:e.tradeBarData,tradeAmount:v,selectedCurrency:a,isPositive:"mint"===e.transactionType})})]})}),(0,W.jsx)("div",{className:"data-table__tcell data-table__tcell--category",children:(0,W.jsxs)("div",{className:"category-icons",children:[(0,W.jsx)(M.Z,{categories:e.walletsCategories}),c&&(0,W.jsx)(O.Z,{})]})}),(0,W.jsx)("div",{className:"data-table__tcell data-table__tcell--time",children:(0,W.jsx)(B.Z,{timestamp:e.timestamp})})]})})};var H=s(53878),q=s(53187),K=s(49825);const V=e=>{let{dataLength:t,rowsToShow:s}=e;if(!t||!s)return;const a=2*s;return t<a?t:a},z=e=>{let{currentToken:t,currentData:s,rowsToShow:a,dispatch:r}=e;const l=(0,n.I0)(),i=(0,o.useRef)(!1),c=o.useCallback((e=>r((0,K.qK)(e))),[r]),d=V({dataLength:(s||[]).length,rowsToShow:a});return(0,o.useEffect)((()=>{if(!i.current)return void(i.current=!0);const e=T[x.all];r((0,K.D6)({filters:e}))}),[null===t||void 0===t?void 0:t.id]),{fullHistoryButtonThreshold:d,onClickPoolActivityRow:()=>{l((0,H.ut)({tab:q.KB.lp}))},onAll:async()=>{v.Z.poolActivitySidebarChangeFilter({currentToken:t,filterName:x.all});const e=T[x.all];r((0,K.D6)({filters:e}))},onAdd:async()=>{v.Z.poolActivitySidebarChangeFilter({currentToken:t,filterName:x.adds});const e=T[x.adds];r((0,K.D6)({filters:e}))},onRemove:async()=>{v.Z.poolActivitySidebarChangeFilter({currentToken:t,filterName:x.removes});const e=T[x.removes];r((0,K.D6)({filters:e}))},onChangeRowsToShow:c}},X=(0,N.Z)({parsedQueryParams:{}}),Y=e=>{const{address:t}=(0,l.mA)(),s=(0,n.I0)(),a=(0,n.v9)((e=>e.tokens.currentToken)),k=o.useMemo((()=>({id:null===a||void 0===a?void 0:a.id,marketType:null===a||void 0===a?void 0:a.marketType})),[a]),y=(0,n.v9)((e=>e.ui)),{isLoading:T,refreshTimestamp:j,currentData:N,previousData:C,total:Z}=(0,n.v9)((e=>e.poolActivity)),D=(0,g.Z)(y),[A,R]=(0,o.useReducer)(h.ZP,X);(0,p.Z)({prepareParams:w,mapData:S,currentTokenRecord:k,filters:{...A.txFetchParams,...A.filters},rowsToShow:A.txFetchParams.limit,shouldStopLoader:D,fetchDataFn:m.U2,onDataLoadedSuccessful:e=>s((0,i.JP)(e)),onResetData:()=>s((0,i.xs)()),onError:e=>s((0,i.n0)(e)),onSetIsLoading:e=>s((0,i.BH)(e)),name:"\ud83c\udfca\u200d\u2642\ufe0fpa",total:Z,defaultFilters:A.txFetchParams});const F=z({currentToken:a,currentData:N,rowsToShow:A.txFetchParams.limit,dispatch:R}),P=o.useMemo((()=>[{title:r()(x.all),value:"all",onClick:F.onAll},{title:r()(x.adds),value:"adds",onClick:F.onAdd,testId:"filter-button-Adds"},{title:r()(x.removes),value:"removes",onClick:F.onRemove,testId:"filter-button-Removes"}]),[]),I=T?_.loadingMessage:_.emptyMessage;return(0,W.jsx)(f.Z,{token:a,title:"Pools Activity",modifier:u.FullSidebarsModifierValues.poolActivity,filterButtons:P,renderRow:$,onClickRow:F.onClickPoolActivityRow,currentData:N,prevData:C,noDataMessage:I,isLoading:T,fullHistoryButtonThreshold:F.fullHistoryButtonThreshold||c._q,refreshTimestamp:j,suffixContent:(0,W.jsx)(b.Z,{to:e.fullSidebarUrl,onClick:()=>v.Z.sendEvent(d.S.CLICKED_FULL_HISTORY_FOR_LIQUIDITY_SIDEBAR)}),account:t,onChangeRowsToShow:F.onChangeRowsToShow})}},96885:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(7863);const r=e=>{const{isSidebarOpen:t,isTokenProfileOpen:s,isTraderProfileOpened:r}=e;return t!==a.tI.none||s||r}},65801:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(54452);const r={},o=e=>{let{parsedQueryParams:t}=e;const s=Object.keys(t).length>0;return{filters:s?t:r,txFetchParams:{offset:0,sort_by:a.FilterSortBy.timestamp,order:a.OrderFilterTypes.desc,transaction_types:[a.TransactionTypes.mint,a.TransactionTypes.burn]},isAppliedFilter:s,isFilterFormOpen:!1}}},11192:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(7276),r=s(5868),o=s(28012),n=s(45350),l=s(45263);const i="MWlV:LVf<:s*3;sK=3ED9-4vSX2ua]{fiJ$p{E3HUmw.)-ifE#(cXYjHCZ+7MP6"===localStorage.getItem("test_identifier"),c=e=>{let{redirectTo:t,disabled:s,...c}=e;const[d,u]=(0,a.useState)(void 0),{isAuth:v,openProviderMenu:m}=(0,n.a)(),{isProviderMenuOpen:p}=(0,r.v9)((e=>e.ui));return(0,a.useEffect)((()=>{d||p||v||i||m()}),[v,p]),(0,a.useEffect)((()=>{!0!==p?!0===d&&!1===p&&u(!1):u(!0)}),[p,d]),s?null:v||i?(0,l.jsx)(o.AW,{...c}):!1!==d||p||v?null:(0,l.jsx)(o.l_,{to:t||"/"})}},54512:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(97485),r=s(84033),o=s.n(r),n=(s(7276),s(45263));const l=e=>{let{isMobile:t,modifier:s}=e;const r=t?"Reload":"Press F5";return(0,n.jsxs)("div",{className:o()("reload-banner",{"reload-banner--mobile":t},s),children:[(0,n.jsx)("div",{className:"reload-banner__icon",children:(0,n.jsx)(a.r,{})}),(0,n.jsxs)("h4",{className:"reload-banner__title",children:["Whoa, something happened! ",r," or try again"]}),(0,n.jsx)("button",{onClick:()=>{window.location.reload()},className:o()("button reload-banner__button",{"button--lg":!t},{"button--md":t}),children:"Try again"})]})}},12730:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(7276),r=s(5868),o=s(51187),n=s(44190),l=s(24468),i=s(54512),c=s(45263);const d=()=>{const{isDashboard:e,isReloadRefreshButtonVisible:t}=(0,r.v9)((e=>e.loader)),{isMobile:s}=(0,r.v9)((e=>e)),d=(0,n.D9)(t),u=!0===t&&!1===d,v=(0,n.D9)(u);return(0,a.useEffect)((()=>{if(!1===v&&!0===u){const e=new Error("Whoa banner was shown");(0,l.zI)(o.KS,`${e}`),console.error(e)}}),[u,v]),u?(0,c.jsx)(i.Z,{isMobile:!!s,modifier:e?"":"top"}):null}},68579:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(54512);s(12730);const r=a.Z},41785:(e,t,s)=>{s.d(t,{Z:()=>r});s(7276);var a=s(45263);const r=e=>(0,a.jsx)("img",{className:e.className,src:e.networkConfig.block_explorer.logo_uri,alt:e.networkConfig.block_explorer.display_name})},82624:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(84033),r=s.n(a),o=s(7276),n=s(68481),l=s(53325),i=s(45263);const c=e=>{let{className:t,classNamePrefix:s,prevIcon:a,prevCaption:c,nextIcon:d,nextCaption:u,children:v}=e;const[m,p]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1),[b,k]=(0,o.useState)(!1),y=()=>{var e,t,s;const a=(null===(e=x.current)||void 0===e?void 0:e.clientWidth)||0,r=(null===(t=x.current)||void 0===t?void 0:t.scrollWidth)||0,o=(null===(s=x.current)||void 0===s?void 0:s.scrollLeft)||0;p(r>a),f(o>0),k(o+a<r)},{ref:x}=(0,n.NB)({refreshMode:"debounce",onResize:y}),T=e=>{var t,s;const a=((null===(t=x.current)||void 0===t?void 0:t.clientWidth)||0)*("prev"===e?-1:1);null===(s=x.current)||void 0===s||s.scrollBy({left:a})};return(0,i.jsxs)("div",{className:r()((0,l.SQ)("scroller","",m?"scrollable":"",s),t),children:[(0,i.jsxs)("div",{className:(0,l.SQ)("scroller","tools","",s),children:[(0,i.jsxs)("button",{className:r()((0,l.SQ)("scroller","nav","prev",s),{[`${(0,l.SQ)("scroller","nav","active",s)}`]:h}),onClick:()=>{T("prev")},children:[a&&(0,i.jsx)("span",{className:"icon",children:a}),c&&(0,i.jsx)("span",{className:"caption",children:c})]}),(0,i.jsxs)("button",{className:r()((0,l.SQ)("scroller-nav","nav","next",s),{[`${(0,l.SQ)("scroller","nav","active",s)}`]:b}),onClick:()=>{T("next")},children:[d&&(0,i.jsx)("span",{className:"icon",children:d}),u&&(0,i.jsx)("span",{className:"caption",children:u})]})]}),(0,i.jsx)("div",{className:(0,l.SQ)("scroller","viewport","",s),ref:x,onScroll:y,children:(0,i.jsx)("div",{className:(0,l.SQ)("scroller","track","",s),children:v})})]})}},33659:(e,t,s)=>{s.d(t,{Z:()=>o});s(7276);var a=s(93440),r=s(45263);function o(e){let{values:t,option:s,onSelect:o}=e;const n=t.map(((e,t)=>({value:t,label:e})));return(0,r.jsx)(a.Z,{options:n,size:"sm",type:"light",onChange:e=>o((null===e||void 0===e?void 0:e.value)||0),defaultValue:n[s]})}}}]);