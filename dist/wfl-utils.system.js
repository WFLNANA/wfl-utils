System.register("wfl-utils-system",[],(function(e){"use strict";return{execute:function(){const t=e("loadFile",((e,t,r)=>{let o;"js"===t?(o=document.createElement("script"),o.setAttribute("type","text/JavaScript"),o.setAttribute("src",e)):"css"===t?(o=document.createElement("link"),o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",e)):"style"===t&&(o=document.createElement("style"),o.innerhtml=e),void 0!==o&&(document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){"function"==typeof r&&r()})})),r=e("getUrlParam",((e,t)=>{let r=new RegExp("(^|&?)"+e+"=([^&]*)(&|$)","i"),o=t?t.substr(1).match(r):window.location.href.substr(1).match(r);if(null!=o)return decodeURI(o[2])})),o=e("getType",((e,t=!1)=>{const r=Object.prototype.toString.call(e);return t?r:r.replace(/^[\[A-Za-z]+\s{1}/,"").replace("]","")})),a=e("compareType",((e,t,r=!0)=>{t=t.toLowerCase();const a=o(e).toLowerCase();return r?a===t:a==t})),c=e("compareParamType",((e,t)=>o(e)===o(t))),n=e("formatTree",((e,t=null)=>{let r={id:"id",parentId:"parentId",children:"children",quit:["parentId",0]};if(t&&(r={...r,...t}),"Array"!==o(e))return;const{id:a,parentId:c,children:n,quit:l}=r,s=JSON.parse(JSON.stringify(e));return s.filter((e=>{const t=s.filter((t=>e[a]===t[c]));return t.length&&(e[n]=t),e[l[0]]==l[1]}))})),l=e("localStore",{setItem:(e,t,r)=>{const o=(new Date).getTime(),a=r?o+1e3*r:0;localStorage.setItem(e,JSON.stringify({value:t,overTime:a}))},getItem:e=>{const t=localStorage.getItem(e);if(!t)return null;const r=JSON.parse(t);return(new Date).getTime()>r.overTime?(localStorage.removeItem(e),null):r.value},removeItem:e=>{e&&localStorage.removeItem(e)},clear:e=>{e?localStorage.removeItem(e):localStorage.clear()}}),s=e("cookie",{set:(e,t,r)=>{e&&(r?"Date"===a(r)?document.cookie=`${e}=${t};expires=${r}`:document.cookie=`${e}=${t};max-age=${r}`:document.cookie=`${e}=${t};`)},get:e=>{const t=document.cookie;if(!e)return t;const r=t.split("; ").find((t=>t.startsWith(`${e}=`)));return r?r.split("=")[1]:r},del:e=>{e&&s.set(e,"",-1)}}),i=e("removeSpace",((e,t="",r="")=>{const o="start"===t?/^\s*/g:"end"===t?/\s*$/g:/\s/g;return e.replace(o,r)})),d=e("checkRegexp",{space:/\s/g,space_s:/^\s/g,space_e:/\s$/g,phone_s:/1\d{10}/,phone:/^1[3|4|5|6|7|8|9][0-9]{9}$/,tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,id_card:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,postal:/[1-9]\d{5}(?!\d)/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,URL:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,IP:/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,number:/^[0-9]+$/,en:/^[a-zA-Z]+$/,ch:/^[\u4E00-\u9FA5]+$/,html:/<("[^"]*"|'[^']*'|[^'">])*>/}),m=e("checkingStr",((e,t)=>d[t].test(e))),u=e=>{if(!Array.isArray(e))throw new Error("参数不是Array类型");return e.reduce(((e,t)=>e.concat(Array.isArray(t)?u(t):t)),[])};e("default",{loadFile:t,getUrlParam:r,getType:o,compareType:a,compareParamType:c,formatTree:n,removeSpace:i,localStore:l,cookie:s,checkRegexp:d,checkingStr:m,flatArr:u})}}}));
