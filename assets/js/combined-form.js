/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.2-dev, built on 2015-03-13 8:15:45 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
// Register the namespace
window.FormValidation = {
    AddOn:     {},  // Add-ons
    Framework: {},  // Supported frameworks
    I18n:      {},  // i18n
    Validator: {}   // Available validators
};

if (typeof jQuery === 'undefined') {
    throw new Error('FormValidation requires jQuery');
}

(function($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
        throw new Error('FormValidation requires jQuery version 1.9.1 or higher');
    }
}(jQuery));

(function($) {
    // TODO: Remove backward compatibility in v0.7.0
    /**
     * Constructor
     *
     * @param {jQuery|String} form The form element or selector
     * @param {Object} options The options
     * @param {String} [namespace] The optional namespace which is used for data-{namespace}-xxx attributes and internal data.
     * Currently, it's used to support backward version
     * @constructor
     */
    FormValidation.Base = function(form, options, namespace) {
        this.$form      = $(form);
        this.options    = $.extend({}, $.fn.formValidation.DEFAULT_OPTIONS, options);
        this._namespace = namespace || 'fv';

        this.$invalidFields = $([]);    // Array of invalid fields
        this.$submitButton  = null;     // The submit button which is clicked to submit form
        this.$hiddenButton  = null;

        // Validating status
        this.STATUS_NOT_VALIDATED = 'NOT_VALIDATED';
        this.STATUS_VALIDATING    = 'VALIDATING';
        this.STATUS_INVALID       = 'INVALID';
        this.STATUS_VALID         = 'VALID';
        this.STATUS_IGNORED       = 'IGNORED';

        // Determine the event that is fired when user change the field value
        // Most modern browsers supports input event except IE 7, 8.
        // IE 9 supports input event but the event is still not fired if I press the backspace key.
        // Get IE version
        // https://gist.github.com/padolsey/527683/#comment-7595
        var ieVersion = (function() {
            var v = 3, div = document.createElement('div'), a = div.all || [];
            while (div.innerHTML = '<!--[if gt IE '+(++v)+']><br><![endif]-->', a[0]) {}
            return v > 4 ? v : !v;
        }());

        var el = document.createElement('div');
        this._changeEvent = (ieVersion === 9 || !('oninput' in el)) ? 'keyup' : 'input';

        // The flag to indicate that the form is ready to submit when a remote/callback validator returns
        this._submitIfValid = null;

        // Field elements
        this._cacheFields = {};

        this._init();
    };

    FormValidation.Base.prototype = {
        constructor: FormValidation.Base,

        /**
         * Check if the number of characters of field value exceed the threshold or not
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _exceedThreshold: function($field) {
            var ns        = this._namespace,
                field     = $field.attr('data-' + ns + '-field'),
                threshold = this.options.fields[field].threshold || this.options.threshold;
            if (!threshold) {
                return true;
            }
            var cannotType = $.inArray($field.attr('type'), ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit']) !== -1;
            return (cannotType || $field.val().length >= threshold);
        },

        /**
         * Init form
         */
        _init: function() {
            var that    = this,
                ns      = this._namespace,
                options = {
                    addOns:         {},
                    autoFocus:      this.$form.attr('data-' + ns + '-autofocus'),
                    button: {
                        selector: this.$form.attr('data-' + ns + '-button-selector') || this.$form.attr('data-' + ns + '-submitbuttons'), // Support backward
                        disabled: this.$form.attr('data-' + ns + '-button-disabled')
                    },
                    control: {
                        valid:   this.$form.attr('data-' + ns + '-control-valid'),
                        invalid: this.$form.attr('data-' + ns + '-control-invalid')
                    },
                    err: {
                        clazz:     this.$form.attr('data-' + ns + '-err-clazz'),
                        container: this.$form.attr('data-' + ns + '-err-container') || this.$form.attr('data-' + ns + '-container'), // Support backward
                        parent:    this.$form.attr('data-' + ns + '-err-parent')
                    },
                    events: {
                        formInit:         this.$form.attr('data-' + ns + '-events-form-init'),
                        formError:        this.$form.attr('data-' + ns + '-events-form-error'),
                        formSuccess:      this.$form.attr('data-' + ns + '-events-form-success'),
                        fieldAdded:       this.$form.attr('data-' + ns + '-events-field-added'),
                        fieldRemoved:     this.$form.attr('data-' + ns + '-events-field-removed'),
                        fieldInit:        this.$form.attr('data-' + ns + '-events-field-init'),
                        fieldError:       this.$form.attr('data-' + ns + '-events-field-error'),
                        fieldSuccess:     this.$form.attr('data-' + ns + '-events-field-success'),
                        fieldStatus:      this.$form.attr('data-' + ns + '-events-field-status'),
                        localeChanged:    this.$form.attr('data-' + ns + '-events-locale-changed'),
                        validatorError:   this.$form.attr('data-' + ns + '-events-validator-error'),
                        validatorSuccess: this.$form.attr('data-' + ns + '-events-validator-success'),
                        validatorIgnored: this.$form.attr('data-' + ns + '-events-validator-ignored')
                    },
                    excluded:      this.$form.attr('data-' + ns + '-excluded'),
                    icon: {
                        valid:      this.$form.attr('data-' + ns + '-icon-valid')      || this.$form.attr('data-' + ns + '-feedbackicons-valid'),      // Support backward
                        invalid:    this.$form.attr('data-' + ns + '-icon-invalid')    || this.$form.attr('data-' + ns + '-feedbackicons-invalid'),    // Support backward
                        validating: this.$form.attr('data-' + ns + '-icon-validating') || this.$form.attr('data-' + ns + '-feedbackicons-validating'), // Support backward
                        feedback:   this.$form.attr('data-' + ns + '-icon-feedback')
                    },
                    live:          this.$form.attr('data-' + ns + '-live'),
                    locale:        this.$form.attr('data-' + ns + '-locale'),
                    message:       this.$form.attr('data-' + ns + '-message'),
                    onError:       this.$form.attr('data-' + ns + '-onerror'),
                    onSuccess:     this.$form.attr('data-' + ns + '-onsuccess'),
                    row: {
                        selector: this.$form.attr('data-' + ns + '-row-selector') || this.$form.attr('data-' + ns + '-group'), // Support backward
                        valid:    this.$form.attr('data-' + ns + '-row-valid'),
                        invalid:  this.$form.attr('data-' + ns + '-row-invalid'),
                        feedback: this.$form.attr('data-' + ns + '-row-feedback')
                    },
                    threshold:     this.$form.attr('data-' + ns + '-threshold'),
                    trigger:       this.$form.attr('data-' + ns + '-trigger'),
                    verbose:       this.$form.attr('data-' + ns + '-verbose'),
                    fields:        {}
                };

            this.$form
                // Disable client side validation in HTML 5
                .attr('novalidate', 'novalidate')
                .addClass(this.options.elementClass)
                // Disable the default submission first
                .on('submit.' + ns, function(e) {
                    e.preventDefault();
                    that.validate();
                })
                .on('click.' + ns, this.options.button.selector, function() {
                    that.$submitButton  = $(this);
                    // The user just click the submit button
                    that._submitIfValid = true;
                });

            if (this.options.declarative === true || this.options.declarative === 'true') {
                // Find all fields which have either "name" or "data-{namespace}-field" attribute
                this.$form
                    .find('[name], [data-' + ns + '-field]')
                    .each(function () {
                        var $field = $(this),
                            field  = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                            opts   = that._parseOptions($field);
                        if (opts) {
                            $field.attr('data-' + ns + '-field', field);
                            options.fields[field] = $.extend({}, opts, options.fields[field]);
                        }
                    });
            }

            this.options = $.extend(true, this.options, options);

            // Normalize the err.parent option
            if ('string' === typeof this.options.err.parent) {
                this.options.err.parent = new RegExp(this.options.err.parent);
            }

            // Support backward
            if (this.options.container) {
                this.options.err.container = this.options.container;
                delete this.options.container;
            }
            if (this.options.feedbackIcons) {
                this.options.icon = $.extend(true, this.options.icon, this.options.feedbackIcons);
                delete this.options.feedbackIcons;
            }
            if (this.options.group) {
                this.options.row.selector = this.options.group;
                delete this.options.group;
            }
            if (this.options.submitButtons) {
                this.options.button.selector = this.options.submitButtons;
                delete this.options.submitButtons;
            }

            // If the locale is not found, reset it to default one
            if (!FormValidation.I18n[this.options.locale]) {
                this.options.locale = $.fn.formValidation.DEFAULT_OPTIONS.locale;
            }

            // Parse the add-on options from HTML attributes
            if (this.options.declarative === true || this.options.declarative === 'true') {
                this.options = $.extend(true, this.options, { addOns: this._parseAddOnOptions() });
            }

            // When pressing Enter on any field in the form, the first submit button will do its job.
            // The form then will be submitted.
            // I create a first hidden submit button
            this.$hiddenButton = $('<button/>')
                                    .attr('type', 'submit')
                                    .prependTo(this.$form)
                                    .addClass('fv-hidden-submit')
                                    .css({ display: 'none', width: 0, height: 0 });

            this.$form
                .on('click.' +  this._namespace, '[type="submit"]', function(e) {
                    // #746: Check if the button click handler returns false
                    if (!e.isDefaultPrevented()) {
                        var $target = $(e.target),
                            // The button might contain HTML tag
                            $button = $target.is('[type="submit"]') ? $target.eq(0) : $target.parent('[type="submit"]').eq(0);

                        // Don't perform validation when clicking on the submit button/input
                        // which aren't defined by the 'button.selector' option
                        if (that.options.button.selector && !$button.is(that.options.button.selector) && !$button.is(that.$hiddenButton)) {
                            that.$form.off('submit.' + that._namespace).submit();
                        }
                    }
                });

            for (var field in this.options.fields) {
                this._initField(field);
            }

            // Init the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].init) {
                    FormValidation.AddOn[addOn].init(this, this.options.addOns[addOn]);
                }
            }

            this.$form.trigger($.Event(this.options.events.formInit), {
                bv: this,   // Support backward
                fv: this,
                options: this.options
            });

            // Prepare the events
            if (this.options.onSuccess) {
                this.$form.on(this.options.events.formSuccess, function(e) {
                    FormValidation.Helper.call(that.options.onSuccess, [e]);
                });
            }
            if (this.options.onError) {
                this.$form.on(this.options.events.formError, function(e) {
                    FormValidation.Helper.call(that.options.onError, [e]);
                });
            }
        },

        /**
         * Init field
         *
         * @param {String|jQuery} field The field name or field element
         */
        _initField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    fields.attr('data-' + ns + '-field', field);
                    break;
                default:
                    break;
            }

            // We don't need to validate non-existing fields
            if (fields.length === 0) {
                return;
            }

            if (this.options.fields[field] === null || this.options.fields[field].validators === null) {
                return;
            }

            var validatorName;
            for (validatorName in this.options.fields[field].validators) {
                if (!FormValidation.Validator[validatorName]) {
                    delete this.options.fields[field].validators[validatorName];
                }
            }
            if (this.options.fields[field].enabled === null) {
                this.options.fields[field].enabled = true;
            }

            var that      = this,
                total     = fields.length,
                type      = fields.attr('type'),
                updateAll = (total === 1) || ('radio' === type) || ('checkbox' === type),
                trigger   = this._getFieldTrigger(fields.eq(0)),
                events    = $.map(trigger, function(item) {
                    return item + '.update.' + ns;
                }).join(' ');

            for (var i = 0; i < total; i++) {
                var $field    = fields.eq(i),
                    row       = this.options.fields[field].row || this.options.row.selector,
                    $parent   = $field.closest(row),
                    // Allow user to indicate where the error messages are shown
                    // Support backward
                    container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    $message  = (container && container !== 'tooltip' && container !== 'popover') ? $(container) : this._getMessageContainer($field, row);

                if (container && container !== 'tooltip' && container !== 'popover') {
                    $message.addClass(this.options.err.clazz);
                }

                // Remove all error messages and feedback icons
                $message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove();
                $parent.find('i[data-' + ns + '-icon-for="' + field + '"]').remove();

                // Whenever the user change the field value, mark it as not validated yet
                $field.off(events).on(events, function() {
                    that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
                });

                // Create help block elements for showing the error messages
                $field.data(ns + '.messages', $message);
                for (validatorName in this.options.fields[field].validators) {
                    $field.data(ns + '.result.' + validatorName, this.STATUS_NOT_VALIDATED);

                    if (!updateAll || i === total - 1) {
                        $('<small/>')
                            .css('display', 'none')
                            .addClass(this.options.err.clazz)
                            .attr('data-' + ns + '-validator', validatorName)
                            .attr('data-' + ns + '-for', field)
                            .attr('data-' + ns + '-result', this.STATUS_NOT_VALIDATED)
                            .html(this._getMessage(field, validatorName))
                            .appendTo($message);
                    }

                    // Init the validator
                    if ('function' === typeof FormValidation.Validator[validatorName].init) {
                        FormValidation.Validator[validatorName].init(this, $field, this.options.fields[field].validators[validatorName]);
                    }
                }

                // Prepare the feedback icons
                if (this.options.fields[field].icon !== false && this.options.fields[field].icon !== 'false'
                    && this.options.icon
                    && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating
                    && (!updateAll || i === total - 1))
                {
                    // $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(this.options.row.feedback);
                    // Keep error messages which are populated from back-end
                    $parent.addClass(this.options.row.feedback);
                    var $icon = $('<i/>')
                                    .css('display', 'none')
                                    .addClass(this.options.icon.feedback)
                                    .attr('data-' + ns + '-icon-for', field)
                                    .insertAfter($field);

                    // Store the icon as a data of field element
                    (!updateAll ? $field : fields).data(ns + '.icon', $icon);

                    if ('tooltip' === container || 'popover' === container) {
                        (!updateAll ? $field : fields)
                            .on(this.options.events.fieldError, function() {
                                $parent.addClass('fv-has-tooltip');
                            })
                            .on(this.options.events.fieldSuccess, function() {
                                $parent.removeClass('fv-has-tooltip');
                            });

                        $field
                            // Show tooltip/popover message when field gets focus
                            .off('focus.container.' + ns)
                            .on('focus.container.' + ns, function() {
                                that._showTooltip($field, container);
                            })
                            // and hide them when losing focus
                            .off('blur.container.' + ns)
                            .on('blur.container.' + ns, function() {
                                that._hideTooltip($field, container);
                            });
                    }

                    if ('string' === typeof this.options.fields[field].icon && this.options.fields[field].icon !== 'true') {
                        $icon.appendTo($(this.options.fields[field].icon));
                    } else {
                        this._fixIcon($field, $icon);
                    }
                }
            }

            // Prepare the events
            fields
                .on(this.options.events.fieldSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, null, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                })
                .on(this.options.events.fieldError, function(e, data) {
                    var onError = that.getOptions(data.field, null, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.fieldStatus, function(e, data) {
                    var onStatus = that.getOptions(data.field, null, 'onStatus');
                    if (onStatus) {
                        FormValidation.Helper.call(onStatus, [e, data]);
                    }
                })
                .on(this.options.events.validatorError, function(e, data) {
                    var onError = that.getOptions(data.field, data.validator, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.validatorSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, data.validator, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                });

            // Set live mode
            this.onLiveChange(fields, 'live', function() {
                if (that._exceedThreshold($(this))) {
                    that.validateField($(this));
                }
            });

            fields.trigger($.Event(this.options.events.fieldInit), {
                bv: this,   // Support backward
                fv: this,
                field: field,
                element: fields
            });
        },

        /**
         * Check if the field is excluded.
         * Returning true means that the field will not be validated
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _isExcluded: function($field) {
            var ns           = this._namespace,
                excludedAttr = $field.attr('data-' + ns + '-excluded'),
                // I still need to check the 'name' attribute while initializing the field
                field        = $field.attr('data-' + ns + '-field') || $field.attr('name');

            switch (true) {
                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'true' || this.options.fields[field].excluded === true)):
                case (excludedAttr === 'true'):
                case (excludedAttr === ''):
                    return true;

                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'false' || this.options.fields[field].excluded === false)):
                case (excludedAttr === 'false'):
                    return false;

                case (!!field && this.options.fields && this.options.fields[field] && 'function' === typeof this.options.fields[field].excluded):
                    return this.options.fields[field].excluded.call(this, $field, this);

                case (!!field && this.options.fields && this.options.fields[field] && 'string' === typeof this.options.fields[field].excluded):
                case (excludedAttr):
                    return FormValidation.Helper.call(this.options.fields[field].excluded, [$field, this]);

                default:
                    if (this.options.excluded) {
                        // Convert to array first
                        if ('string' === typeof this.options.excluded) {
                            this.options.excluded = $.map(this.options.excluded.split(','), function(item) {
                                // Trim the spaces
                                return $.trim(item);
                            });
                        }

                        var length = this.options.excluded.length;
                        for (var i = 0; i < length; i++) {
                            if (('string' === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]))
                                || ('function' === typeof this.options.excluded[i] && this.options.excluded[i].call(this, $field, this) === true))
                            {
                                return true;
                            }
                        }
                    }
                    return false;
            }
        },

        /**
         * Get a field changed trigger event
         *
         * @param {jQuery} $field The field element
         * @returns {String[]} The event names triggered on field change
         */
        _getFieldTrigger: function($field) {
            var ns      = this._namespace,
                trigger = $field.data(ns + '.trigger');
            if (trigger) {
                return trigger;
            }

            var type  = $field.attr('type'),
                name  = $field.attr('data-' + ns + '-field'),
                event = ('radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === $field.get(0).tagName) ? 'change' : this._changeEvent;
            trigger   = ((this.options.fields[name] ? this.options.fields[name].trigger : null) || this.options.trigger || event).split(' ');

            // Since the trigger data is used many times, I need to cache it to use later
            $field.data(ns + '.trigger', trigger);

            return trigger;
        },

        /**
         * Get the error message for given field and validator
         *
         * @param {String} field The field name
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        _getMessage: function(field, validatorName) {
            if (!this.options.fields[field] || !FormValidation.Validator[validatorName]
                || !this.options.fields[field].validators || !this.options.fields[field].validators[validatorName])
            {
                return '';
            }

            switch (true) {
                case !!this.options.fields[field].validators[validatorName].message:
                    return this.options.fields[field].validators[validatorName].message;
                case !!this.options.fields[field].message:
                    return this.options.fields[field].message;
                case (!!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][validatorName] && !!FormValidation.I18n[this.options.locale][validatorName]['default']):
                    return FormValidation.I18n[this.options.locale][validatorName]['default'];
                default:
                    return this.options.message;
            }
        },

        /**
         * Get the element to place the error messages
         *
         * @param {jQuery} $field The field element
         * @param {String} row
         * @returns {jQuery}
         */
        _getMessageContainer: function($field, row) {
            if (!this.options.err.parent) {
                throw new Error('The err.parent option is not defined');
            }

            var $parent = $field.parent();
            if ($parent.is(row)) {
                return $parent;
            }

            var cssClasses = $parent.attr('class');
            if (!cssClasses) {
                return this._getMessageContainer($parent, row);
            }

            if (this.options.err.parent.test(cssClasses)) {
                return $parent;
            }

            return this._getMessageContainer($parent, row);
        },

        /**
         * Parse the add-on options from HTML attributes
         *
         * @returns {Object}
         */
        _parseAddOnOptions: function() {
            var ns     = this._namespace,
                names  = this.$form.attr('data-' + ns + '-addons'),
                addOns = this.options.addOns || {};

            if (names) {
                names = names.replace(/\s/g, '').split(',');
                for (var i = 0; i < names.length; i++) {
                    if (!addOns[names[i]]) {
                        addOns[names[i]] = {};
                    }
                }
            }

            // Try to parse each add-on options
            var addOn, attrMap, attr, option;
            for (addOn in addOns) {
                if (!FormValidation.AddOn[addOn]) {
                    // Add-on is not found
                    delete addOns[addOn];
                    continue;
                }

                attrMap = FormValidation.AddOn[addOn].html5Attributes;
                if (attrMap) {
                    for (attr in attrMap) {
                        option = this.$form.attr('data-' + ns + '-addons-' + addOn.toLowerCase() + '-' + attr.toLowerCase());
                        if (option) {
                            addOns[addOn][attrMap[attr]] = option;
                        }
                    }
                }
            }

            return addOns;
        },

        /**
         * Parse the validator options from HTML attributes
         *
         * @param {jQuery} $field The field element
         * @returns {Object}
         */
        _parseOptions: function($field) {
            var ns         = this._namespace,
                field      = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                validators = {},
                validator,
                v,          // Validator name
                attrName,
                enabled,
                optionName,
                optionAttrName,
                optionValue,
                html5AttrName,
                html5AttrMap;

            for (v in FormValidation.Validator) {
                validator    = FormValidation.Validator[v];
                attrName     = 'data-' + ns + '-' + v.toLowerCase(),
                enabled      = $field.attr(attrName) + '';
                html5AttrMap = ('function' === typeof validator.enableByHtml5) ? validator.enableByHtml5($field) : null;

                if ((html5AttrMap && enabled !== 'false')
                    || (html5AttrMap !== true && ('' === enabled || 'true' === enabled || attrName === enabled.toLowerCase())))
                {
                    // Try to parse the options via attributes
                    validator.html5Attributes = $.extend({}, {
                                                    message: 'message',
                                                    onerror: 'onError',
                                                    onsuccess: 'onSuccess',
                                                    transformer: 'transformer'
                                                }, validator.html5Attributes);
                    validators[v] = $.extend({}, html5AttrMap === true ? {} : html5AttrMap, validators[v]);

                    for (html5AttrName in validator.html5Attributes) {
                        optionName  = validator.html5Attributes[html5AttrName];
                        optionAttrName = 'data-' + ns + '-' + v.toLowerCase() + '-' + html5AttrName,
                        optionValue = $field.attr(optionAttrName);
                        if (optionValue) {
                            if ('true' === optionValue || optionAttrName === optionValue.toLowerCase()) {
                                optionValue = true;
                            } else if ('false' === optionValue) {
                                optionValue = false;
                            }
                            validators[v][optionName] = optionValue;
                        }
                    }
                }
            }

            var opts = {
                    autoFocus:   $field.attr('data-' + ns + '-autofocus'),
                    err:         $field.attr('data-' + ns + '-err-container') || $field.attr('data-' + ns + '-container'), // Support backward
                    excluded:    $field.attr('data-' + ns + '-excluded'),
                    icon:        $field.attr('data-' + ns + '-icon') || $field.attr('data-' + ns + '-feedbackicons') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].feedbackIcons : null), // Support backward
                    message:     $field.attr('data-' + ns + '-message'),
                    onError:     $field.attr('data-' + ns + '-onerror'),
                    onStatus:    $field.attr('data-' + ns + '-onstatus'),
                    onSuccess:   $field.attr('data-' + ns + '-onsuccess'),
                    row:         $field.attr('data-' + ns + '-row') || $field.attr('data-' + ns + '-group') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].group : null), // Support backward
                    selector:    $field.attr('data-' + ns + '-selector'),
                    threshold:   $field.attr('data-' + ns + '-threshold'),
                    transformer: $field.attr('data-' + ns + '-transformer'),
                    trigger:     $field.attr('data-' + ns + '-trigger'),
                    verbose:     $field.attr('data-' + ns + '-verbose'),
                    validators:  validators
                },
                emptyOptions    = $.isEmptyObject(opts),        // Check if the field options are set using HTML attributes
                emptyValidators = $.isEmptyObject(validators);  // Check if the field validators are set using HTML attributes

            if (!emptyValidators || (!emptyOptions && this.options.fields && this.options.fields[field])) {
                opts.validators = validators;
                return opts;
            } else {
                return null;
            }
        },

        /**
         * Called when all validations are completed
         */
        _submit: function() {
            var isValid = this.isValid();
            if (isValid === null) {
                return;
            }

            var eventType = isValid ? this.options.events.formSuccess : this.options.events.formError,
                e         = $.Event(eventType);

            this.$form.trigger(e);

            // Call default handler
            // Check if whether the submit button is clicked
            if (this.$submitButton) {
                isValid ? this._onSuccess(e) : this._onError(e);
            }
        },

        // ~~~~~~
        // Events
        // ~~~~~~

        /**
         * The default handler of error.form.fv event.
         * It will be called when there is a invalid field
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onError: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            if ('submitted' === this.options.live) {
                // Enable live mode
                this.options.live = 'enabled';

                var that = this;
                for (var field in this.options.fields) {
                    (function(f) {
                        var fields  = that.getFieldElements(f);
                        if (fields.length) {
                            that.onLiveChange(fields, 'live', function() {
                                if (that._exceedThreshold($(this))) {
                                    that.validateField($(this));
                                }
                            });
                        }
                    })(field);
                }
            }

            // Determined the first invalid field which will be focused on automatically
            var ns = this._namespace;
            for (var i = 0; i < this.$invalidFields.length; i++) {
                var $field    = this.$invalidFields.eq(i),
                    autoFocus = this.isOptionEnabled($field.attr('data-' + ns + '-field'), 'autoFocus');
                if (autoFocus) {
                    // Focus the field
                    $field.focus();
                    break;
                }
            }
        },

        /**
         * Called after validating a field element
         *
         * @param {jQuery} $field The field element
         * @param {String} [validatorName] The validator name
         */
        _onFieldValidated: function($field, validatorName) {
            var ns            = this._namespace,
                field         = $field.attr('data-' + ns + '-field'),
                validators    = this.options.fields[field].validators,
                counter       = {},
                numValidators = 0,
                data          = {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    validator: validatorName,
                    result: $field.data(ns + '.response.' + validatorName)
                };

            // Trigger an event after given validator completes
            if (validatorName) {
                switch ($field.data(ns + '.result.' + validatorName)) {
                    case this.STATUS_INVALID:
                        $field.trigger($.Event(this.options.events.validatorError), data);
                        break;
                    case this.STATUS_VALID:
                        $field.trigger($.Event(this.options.events.validatorSuccess), data);
                        break;
                    case this.STATUS_IGNORED:
                        $field.trigger($.Event(this.options.events.validatorIgnored), data);
                        break;
                    default:
                        break;
                }
            }

            counter[this.STATUS_NOT_VALIDATED] = 0;
            counter[this.STATUS_VALIDATING]    = 0;
            counter[this.STATUS_INVALID]       = 0;
            counter[this.STATUS_VALID]         = 0;
            counter[this.STATUS_IGNORED]       = 0;

            for (var v in validators) {
                if (validators[v].enabled === false) {
                    continue;
                }

                numValidators++;
                var result = $field.data(ns + '.result.' + v);
                if (result) {
                    counter[result]++;
                }
            }

            // The sum of valid fields now also include ignored fields
            if (counter[this.STATUS_VALID] + counter[this.STATUS_IGNORED] === numValidators) {
                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                $field.trigger($.Event(this.options.events.fieldSuccess), data);
            }
            // If all validators are completed and there is at least one validator which doesn't pass
            else if ((counter[this.STATUS_NOT_VALIDATED] === 0 || !this.isOptionEnabled(field, 'verbose')) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
                // Add to the list of invalid fields
                this.$invalidFields = this.$invalidFields.add($field);

                $field.trigger($.Event(this.options.events.fieldError), data);
            }
        },

        /**
         * The default handler of success.form.fv event.
         * It will be called when all the fields are valid
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onSuccess: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            // Submit the form
            this.disableSubmitButtons(true).defaultSubmit();
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Abstract methods
        // Need to be implemented by sub-class that supports specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
        },

        // ~~~~~~~~~~~~~~
        // Public methods
        // ~~~~~~~~~~~~~~

        /**
         * Submit the form using default submission.
         * It also does not perform any validations when submitting the form
         */
        defaultSubmit: function() {
            var ns = this._namespace;
            if (this.$submitButton) {
                // Create hidden input to send the submit buttons
                $('<input/>')
                    .attr({
                        'type': 'hidden',
                        name: this.$submitButton.attr('name')
                    })
                    .attr('data-' + ns + '-submit-hidden', '')
                    .val(this.$submitButton.val())
                    .appendTo(this.$form);
            }

            // Submit form
            this.$form.off('submit.' + ns).submit();
        },

        /**
         * Disable/enable submit buttons
         *
         * @param {Boolean} disabled Can be true or false
         * @returns {FormValidation.Base}
         */
        disableSubmitButtons: function(disabled) {
            if (!disabled) {
                this.$form
                    .find(this.options.button.selector)
                        .removeAttr('disabled')
                        .removeClass(this.options.button.disabled);
            } else if (this.options.live !== 'disabled') {
                // Don't disable if the live validating mode is disabled
                this.$form
                    .find(this.options.button.selector)
                        .attr('disabled', 'disabled')
                        .addClass(this.options.button.disabled);
            }

            return this;
        },

        /**
         * Retrieve the field elements by given name
         *
         * @param {String} field The field name
         * @returns {null|jQuery[]}
         */
        getFieldElements: function(field) {
            if (!this._cacheFields[field]) {
                if (this.options.fields[field] && this.options.fields[field].selector) {
                    // Look for the field inside the form first
                    var f = this.$form.find(this.options.fields[field].selector);
                    // If not found, search in entire document
                    this._cacheFields[field] = f.length ? f : $(this.options.fields[field].selector);
                } else {
                    this._cacheFields[field] = this.$form.find('[name="' + field + '"]');
                }
            }

            return this._cacheFields[field];
        },

        /**
         * Get the field value after applying transformer
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        getFieldValue: function(field, validatorName) {
            var $field, ns = this._namespace;
            if ('string' === typeof field) {
                $field = this.getFieldElements(field);
                if ($field.length === 0) {
                    return null;
                }
            } else {
                $field = field;
                field  = $field.attr('data-' + ns + '-field');
            }

            if (!field || !this.options.fields[field]) {
                return $field.val();
            }

            var transformer = (this.options.fields[field].validators && this.options.fields[field].validators[validatorName]
                                ? this.options.fields[field].validators[validatorName].transformer : null)
                                || this.options.fields[field].transformer;
            return transformer ? FormValidation.Helper.call(transformer, [$field, validatorName, this]) : $field.val();
        },

        /**
         * Get the namespace
         *
         * @returns {String}
         */
        getNamespace: function() {
            return this._namespace;
        },

        /**
         * Get the field options
         *
         * @param {String|jQuery} [field] The field name or field element. If it is not set, the method returns the form options
         * @param {String} [validator] The name of validator. It null, the method returns form options
         * @param {String} [option] The option name
         * @return {String|Object}
         */
        getOptions: function(field, validator, option) {
            var ns = this._namespace;
            if (!field) {
                return option ? this.options[option] : this.options;
            }
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (!this.options.fields[field]) {
                return null;
            }

            var options = this.options.fields[field];
            if (!validator) {
                return option ? options[option] : options;
            }
            if (!options.validators || !options.validators[validator]) {
                return null;
            }

            return option ? options.validators[validator][option] : options.validators[validator];
        },

        /**
         * Get the validating result of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String} The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         */
        getStatus: function(field, validatorName) {
            var ns = this._namespace;
            switch (typeof field) {
                case 'object':
                    return field.data(ns + '.result.' + validatorName);
                case 'string':
                /* falls through */
                default:
                    return this.getFieldElements(field).eq(0).data(ns + '.result.' + validatorName);
            }
        },

        /**
         * Check whether or not a field option is enabled
         *
         * @param {String} field The field name
         * @param {String} option The option name, "verbose", "autoFocus", for example
         * @returns {Boolean}
         */
        isOptionEnabled: function(field, option) {
            if (this.options.fields[field] && (this.options.fields[field][option] === 'true' || this.options.fields[field][option] === true)) {
                return true;
            }
            if (this.options.fields[field] && (this.options.fields[field][option] === 'false' || this.options.fields[field][option] === false)) {
                return false;
            }
            return this.options[option] === 'true' || this.options[option] === true;
        },

        /**
         * Check the form validity
         *
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields are valid
         * - false, if there is one invalid field
         * - null, if there is at least one field which is not validated yet or being validated
         */
        isValid: function() {
            for (var field in this.options.fields) {
                var isValidField = this.isValidField(field);
                if (isValidField === null) {
                    return null;
                }
                if (isValidField === false) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Check if all fields inside a given container are valid.
         * It's useful when working with a wizard-like such as tab, collapse
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields inside the container are valid
         * - false, if there is one invalid field inside the container
         * - null, if the container consists of at least one field which is not validated yet or being validated
         */
        isValidContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return true;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length;
            for (var i = 0; i < total; i++) {
                var $f      = fields[i],
                    field   = $f.attr('data-' + ns + '-field'),
                    $errors = $f.data(ns + '.messages')
                                .find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]');

                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_INVALID + '"]').length > 0) {
                    return false;
                }

                // If the field is not validated
                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0
                    || $errors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0)
                {
                    return null;
                }
            }

            return true;
        },

        /**
         * Check if the field is valid or not
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {Boolean|null} Returns one of three values
         * - true, if the field passes all validators
         * - false, if the field doesn't pass any validator
         * - null, if there is at least one validator which isn't validated yet or being validated
         */
        isValidField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }
            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return true;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                $field, validatorName, status;
            for (var i = 0; i < total; i++) {
                $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                for (validatorName in this.options.fields[field].validators) {
                    if (this.options.fields[field].validators[validatorName].enabled === false) {
                        continue;
                    }

                    status = $field.data(ns + '.result.' + validatorName);
                    if (status === this.STATUS_VALIDATING || status === this.STATUS_NOT_VALIDATED) {
                        return null;
                    } else if (status === this.STATUS_INVALID) {
                        return false;
                    }
                }
            }

            return true;
        },

        /**
         * Detach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @returns {FormValidation.Base}
         */
        offLiveChange: function($fields, namespace) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            $fields.off(events);
            return this;
        },

        /**
         * Attach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @param {Function} handler The handler function
         * @returns {FormValidation.Base}
         */
        onLiveChange: function($fields, namespace, handler) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            switch (this.options.live) {
                case 'submitted':
                    break;
                case 'disabled':
                    $fields.off(events);
                    break;
                case 'enabled':
                /* falls through */
                default:
                    $fields.off(events).on(events, function(e) {
                        handler.apply(this, arguments);
                    });
                    break;
            }

            return this;
        },

        /**
         * Update the error message
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} message The message
         * @returns {FormValidation.Base}
         */
        updateMessage: function(field, validator, message) {
            var that    = this,
                ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            $fields.each(function() {
                $(this)
                    .data(ns + '.messages')
                    .find('.' + that.options.err.clazz + '[data-' + ns + '-validator="' + validator + '"][data-' + ns + '-for="' + field + '"]').html(message);
            });

            return this;
        },

        /**
         * Update all validating results of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} status The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         * @param {String} [validatorName] The validator name. If null, the method updates validity result for all validators
         * @returns {FormValidation.Base}
         */
        updateStatus: function(field, status, validatorName) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (!field || !this.options.fields[field]) {
                return this;
            }

            if (status === this.STATUS_NOT_VALIDATED) {
                // Reset the flag
                // To prevent the form from doing submit when a deferred validator returns true while typing
                this._submitIfValid = false;
            }

            var that  = this,
                type  = fields.attr('type'),
                row   = this.options.fields[field].row || this.options.row.selector,
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field       = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var $parent      = $field.closest(row),
                    $message     = $field.data(ns + '.messages'),
                    $allErrors   = $message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]'),
                    $errors      = validatorName ? $allErrors.filter('[data-' + ns + '-validator="' + validatorName + '"]') : $allErrors,
                    $icon        = $field.data(ns + '.icon'),
                    // Support backward
                    container    = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    isValidField = null,
                    isValidating,
                    isNotValidated;

                // Update status
                if (validatorName) {
                    $field.data(ns + '.result.' + validatorName, status);
                } else {
                    for (var v in this.options.fields[field].validators) {
                        $field.data(ns + '.result.' + v, status);
                    }
                }

                // Show/hide error elements and feedback icons
                $errors.attr('data-' + ns + '-result', status);

                switch (status) {
                    case this.STATUS_VALIDATING:
                        isValidField = null;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();
                        }
                        break;

                    case this.STATUS_INVALID:
                        isValidField = false;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).addClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).addClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();
                        }
                        break;

                    case this.STATUS_VALID:
                    case this.STATUS_IGNORED:       // Treat ignored fields like they are valid with some specialties
                        isValidating   = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING +'"]').length > 0);
                        isNotValidated = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED +'"]').length > 0);

                        // If the field is valid (passes all validators)
                        isValidField   = (isValidating || isNotValidated)     // There are some validators that have not done
                                       ? null
                                       : ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALID +'"]').length
                                        + $allErrors.filter('[data-' + ns + '-result="' + this.STATUS_IGNORED +'"]').length === $allErrors.length); // All validators are completed

                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);

                        if (isValidField === true) {
                            this.disableSubmitButtons(this.isValid() === false);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.valid);
                            }
                        } else if (isValidField === false) {
                            this.disableSubmitButtons(true);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.invalid);
                            }
                        }

                        if ($icon) {
                            $icon.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid);
                            if (status === this.STATUS_VALID) {
                                $icon.addClass(isValidField === null
                                        ? '' : (isValidField ? this.options.icon.valid : (isValidating ? this.options.icon.validating : this.options.icon.invalid)))
                                     .show();
                            }
                        }

                        var isValidContainer = this.isValidContainer($parent);
                        if (isValidContainer !== null) {
                            $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);

                            if (status === this.STATUS_VALID || $allErrors.length > 1) {
                                $parent.addClass(isValidContainer ? this.options.row.valid : this.options.row.invalid);
                            }
                        }
                        break;

                    case this.STATUS_NOT_VALIDATED:
                    /* falls through */
                    default:
                        isValidField = null;
                        this.disableSubmitButtons(false);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide();
                        }
                        break;
                }

                if ($icon && ('tooltip' === container || 'popover' === container)) {
                    (isValidField === false)
                        // Only show the first error message
                        ? this._createTooltip($field, $allErrors.filter('[data-' + ns + '-result="' + that.STATUS_INVALID + '"]').eq(0).html(), container)
                        : this._destroyTooltip($field, container);
                } else {
                    (status === this.STATUS_INVALID) ? $errors.show() : $errors.hide();
                }

                // Trigger an event
                $field.trigger($.Event(this.options.events.fieldStatus), {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    status: status
                });
                this._onFieldValidated($field, validatorName);
            }

            return this;
        },

        /**
         * Validate the form
         *
         * @returns {FormValidation.Base}
         */
        validate: function() {
            if ($.isEmptyObject(this.options.fields)) {
                this._submit();
                return this;
            }
            this.disableSubmitButtons(true);

            this._submitIfValid = false;
            for (var field in this.options.fields) {
                this.validateField(field);
            }

            this._submit();
            this._submitIfValid = true;

            return this;
        },

        /**
         * Validate given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        validateField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return this;
            }

            var that       = this,
                type       = fields.attr('type'),
                total      = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                updateAll  = ('radio' === type || 'checkbox' === type),
                validators = this.options.fields[field].validators,
                verbose    = this.isOptionEnabled(field, 'verbose'),
                validatorName,
                validateResult;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var stop = false;
                for (validatorName in validators) {
                    if ($field.data(ns + '.dfs.' + validatorName)) {
                        $field.data(ns + '.dfs.' + validatorName).reject();
                    }
                    if (stop) {
                        break;
                    }

                    // Don't validate field if it is already done
                    var result = $field.data(ns + '.result.' + validatorName);
                    if (result === this.STATUS_VALID || result === this.STATUS_INVALID) {
                        this._onFieldValidated($field, validatorName);
                        continue;
                    } else if (validators[validatorName].enabled === false) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALID, validatorName);
                        continue;
                    }

                    $field.data(ns + '.result.' + validatorName, this.STATUS_VALIDATING);
                    validateResult = FormValidation.Validator[validatorName].validate(this, $field, validators[validatorName]);

                    // validateResult can be a $.Deferred object ...
                    if ('object' === typeof validateResult && validateResult.resolve) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALIDATING, validatorName);
                        $field.data(ns + '.dfs.' + validatorName, validateResult);

                        validateResult.done(function($f, v, response) {
                            // v is validator name
                            $f.removeData(ns + '.dfs.' + v).data(ns + '.response.' + v, response);
                            if (response.message) {
                                that.updateMessage($f, v, response.message);
                            }

                            that.updateStatus(updateAll ? $f.attr('data-' + ns + '-field') : $f,
                                              response.valid === true ? that.STATUS_VALID : (response.valid === false ? that.STATUS_INVALID : that.STATUS_IGNORED),
                                              v);

                            if (response.valid && that._submitIfValid === true) {
                                // If a remote validator returns true and the form is ready to submit, then do it
                                that._submit();
                            } else if (response.valid === false && !verbose) {
                                stop = true;
                            }
                        });
                    }
                    // ... or object { valid: true/false/null, message: 'dynamic message', otherKey: value, ... }
                    else if ('object' === typeof validateResult && validateResult.valid !== undefined) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        if (validateResult.message) {
                            this.updateMessage(updateAll ? field : $field, validatorName, validateResult.message);
                        }
                        this.updateStatus(updateAll ? field : $field,
                                          validateResult.valid === true ? this.STATUS_VALID : (validateResult.valid === false ? this.STATUS_INVALID : this.STATUS_IGNORED),
                                          validatorName);
                        if (validateResult.valid === false && !verbose) {
                            break;
                        }
                    }
                    // ... or a boolean value
                    else if ('boolean' === typeof validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, validateResult ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
                        if (!validateResult && !verbose) {
                            break;
                        }
                    }
                    // ... or null/undefined
                    // to indicate that the field should be ignored for current validation
                    else if (null === validateResult || undefined === validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, this.STATUS_IGNORED, validatorName);
                    }
                }
            }

            return this;
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Useful APIs which aren't used internally
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Add a new field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Object} [options] The validator rules
         * @returns {FormValidation.Base}
         */
        addField: function(field, options) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    break;
                case 'string':
                    delete this._cacheFields[field];
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            fields.attr('data-' + ns + '-field', field);

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Try to parse the options from HTML attributes
                var opts = this._parseOptions($field);
                opts = (opts === null) ? options : $.extend(true, opts, options);

                this.options.fields[field] = $.extend(true, this.options.fields[field], opts);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field] ? this._cacheFields[field].add($field) : $field;

                // Init the element
                this._initField(('checkbox' === type || 'radio' === type) ? field : $field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldAdded), {
                field: field,
                element: fields,
                options: this.options.fields[field]
            });

            return this;
        },

        /**
         * Destroy the plugin
         * It will remove all error messages, feedback icons and turn off the events
         */
        destroy: function() {
            var ns = this._namespace, i, field, fields, $field, validator, $icon, row;

            // Destroy the validators first
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    for (validator in this.options.fields[field].validators) {
                        if ($field.data(ns + '.dfs.' + validator)) {
                            $field.data(ns + '.dfs.' + validator).reject();
                        }
                        $field.removeData(ns + '.result.' + validator)
                              .removeData(ns + '.response.' + validator)
                              .removeData(ns + '.dfs.' + validator);

                        // Destroy the validator
                        if ('function' === typeof FormValidation.Validator[validator].destroy) {
                            FormValidation.Validator[validator].destroy(this, $field, this.options.fields[field].validators[validator]);
                        }
                    }
                }
            }

            // Remove messages and icons
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                row    = this.options.fields[field].row || this.options.row.selector;
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    $field
                        // Remove all error messages
                        .data(ns + '.messages')
                            .find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove().end()
                            .end()
                        .removeData(ns + '.messages')
                        // Remove feedback classes
                        .closest(row)
                            .removeClass(this.options.row.valid)
                            .removeClass(this.options.row.invalid)
                            .removeClass(this.options.row.feedback)
                            .end()
                        // Turn off events
                        .off('.' + ns)
                        .removeAttr('data-' + ns + '-field');

                    // Remove feedback icons, tooltip/popover container
                    // Support backward
                    var container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container);
                    if ('tooltip' === container || 'popover' === container) {
                        this._destroyTooltip($field, container);
                    }

                    $icon = $field.data(ns + '.icon');
                    if ($icon) {
                        $icon.remove();
                    }
                    $field.removeData(ns + '.icon')
                          // It's safe to remove trigger data here, because it might be used when destroying the validator
                          .removeData(ns + '.trigger');
                }
            }

            // Destroy the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].destroy) {
                    FormValidation.AddOn[addOn].destroy(this, this.options.addOns[addOn]);
                }
            }

            this.disableSubmitButtons(false);   // Enable submit buttons
            this.$hiddenButton.remove();        // Remove the hidden button

            this.$form
                .removeClass(this.options.elementClass)
                .off('.' + ns)
                .removeData('bootstrapValidator')   // Support backward
                .removeData('formValidation')
                // Remove generated hidden elements
                .find('[data-' + ns + '-submit-hidden]').remove().end()
                .find('[type="submit"]')
                    .off('click.' + ns);
        },

        /**
         * Enable/Disable all validators to given field
         *
         * @param {String} field The field name
         * @param {Boolean} enabled Enable/Disable field validators
         * @param {String} [validatorName] The validator name. If null, all validators will be enabled/disabled
         * @returns {FormValidation.Base}
         */
        enableFieldValidators: function(field, enabled, validatorName) {
            var validators = this.options.fields[field].validators;

            // Enable/disable particular validator
            if (validatorName
                && validators
                && validators[validatorName] && validators[validatorName].enabled !== enabled)
            {
                this.options.fields[field].validators[validatorName].enabled = enabled;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validatorName);
            }
            // Enable/disable all validators
            else if (!validatorName && this.options.fields[field].enabled !== enabled) {
                this.options.fields[field].enabled = enabled;
                for (var v in validators) {
                    this.enableFieldValidators(field, enabled, v);
                }
            }

            return this;
        },

        /**
         * Some validators have option which its value is dynamic.
         * For example, the zipCode validator has the country option which might be changed dynamically by a select element.
         *
         * @param {jQuery|String} field The field name or element
         * @param {String|Function} option The option which can be determined by:
         * - a string
         * - name of field which defines the value
         * - name of function which returns the value
         * - a function returns the value
         *
         * The callback function has the format of
         *      callback: function(value, validator, $field) {
         *          // value is the value of field
         *          // validator is the BootstrapValidator instance
         *          // $field is the field element
         *      }
         *
         * @returns {String}
         */
        getDynamicOption: function(field, option) {
            var $field = ('string' === typeof field) ? this.getFieldElements(field) : field,
                value  = $field.val();

            // Option can be determined by
            // ... a function
            if ('function' === typeof option) {
                return FormValidation.Helper.call(option, [value, this, $field]);
            }
            // ... value of other field
            else if ('string' === typeof option) {
                var $f = this.getFieldElements(option);
                if ($f.length) {
                    return $f.val();
                }
                // ... return value of callback
                else {
                    return FormValidation.Helper.call(option, [value, this, $field]) || option;
                }
            }

            return null;
        },

        /**
         * Get the form element
         *
         * @returns {jQuery}
         */
        getForm: function() {
            return this.$form;
        },

        /**
         * Get the list of invalid fields
         *
         * @returns {jQuery[]}
         */
        getInvalidFields: function() {
            return this.$invalidFields;
        },

        /**
         * Get the current locale
         *
         * @return {String}
         */
        getLocale: function() {
            return this.options.locale;
        },

        /**
         * Get the error messages
         *
         * @param {String|jQuery} [field] The field name or field element
         * If the field is not defined, the method returns all error messages of all fields
         * @param {String} [validator] The name of validator
         * If the validator is not defined, the method returns error messages of all validators
         * @returns {String[]}
         */
        getMessages: function(field, validator) {
            var that     = this,
                ns       = this._namespace,
                messages = [],
                $fields  = $([]);

            switch (true) {
                case (field && 'object' === typeof field):
                    $fields = field;
                    break;
                case (field && 'string' === typeof field):
                    var f = this.getFieldElements(field);
                    if (f.length > 0) {
                        var type = f.attr('type');
                        $fields = ('radio' === type || 'checkbox' === type) ? f.eq(0) : f;
                    }
                    break;
                default:
                    $fields = this.$invalidFields;
                    break;
            }

            var filter = validator ? '[data-' + ns + '-validator="' + validator + '"]' : '';
            $fields.each(function() {
                messages = messages.concat(
                    $(this)
                        .data(ns + '.messages')
                        .find('.' + that.options.err.clazz + '[data-' + ns + '-for="' + $(this).attr('data-' + ns + '-field') + '"][data-' + ns + '-result="' + that.STATUS_INVALID + '"]' + filter)
                        .map(function() {
                            var v = $(this).attr('data-' + ns + '-validator'),
                                f = $(this).attr('data-' + ns + '-for');
                            return (that.options.fields[f].validators[v].enabled === false) ? '' : $(this).html();
                        })
                        .get()
                );
            });

            return messages;
        },

        /**
         * Returns the clicked submit button
         *
         * @returns {jQuery}
         */
        getSubmitButton: function() {
            return this.$submitButton;
        },

        /**
         * Remove a given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        removeField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    fields.attr('data-' + ns + '-field', field);
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0) {
                return this;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field].not($field);
            }

            if (!this._cacheFields[field] || this._cacheFields[field].length === 0) {
                delete this.options.fields[field];
            }
            if ('checkbox' === type || 'radio' === type) {
                this._initField(field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldRemoved), {
                field: field,
                element: fields
            });

            return this;
        },

        /**
         * Reset given field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetField: function(field, resetValue) {
            var ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            var total = $fields.length;
            if (this.options.fields[field]) {
                for (var i = 0; i < total; i++) {
                    for (var validator in this.options.fields[field].validators) {
                        $fields.eq(i).removeData(ns + '.dfs.' + validator);
                    }
                }
            }

            if (resetValue) {
                var type = $fields.attr('type');
                ('radio' === type || 'checkbox' === type) ? $fields.prop('checked', false).removeAttr('selected') : $fields.val('');
            }

            // Mark field as not validated yet
            this.updateStatus(field, this.STATUS_NOT_VALIDATED);

            return this;
        },

        /**
         * Reset the form
         *
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetForm: function(resetValue) {
            for (var field in this.options.fields) {
                this.resetField(field, resetValue);
            }

            this.$invalidFields = $([]);
            this.$submitButton  = null;

            // Enable submit buttons
            this.disableSubmitButtons(false);

            return this;
        },

        /**
         * Revalidate given field
         * It's used when you need to revalidate the field which its value is updated by other plugin
         *
         * @param {String|jQuery} field The field name of field element
         * @returns {FormValidation.Base}
         */
        revalidateField: function(field) {
            this.updateStatus(field, this.STATUS_NOT_VALIDATED)
                .validateField(field);

            return this;
        },

        /**
         * Set the locale
         *
         * @param {String} locale The locale in format of countrycode_LANGUAGECODE
         * @returns {FormValidation.Base}
         */
        setLocale: function(locale) {
            this.options.locale = locale;
            this.$form.trigger($.Event(this.options.events.localeChanged), {
                locale: locale,
                bv: this,   // Support backward
                fv: this
            });

            return this;
        },

        /**
         * Update the option of a specific validator
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} option The option name
         * @param {String} value The value to set
         * @returns {FormValidation.Base}
         */
        updateOption: function(field, validator, option, value) {
            var ns = this._namespace;
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (this.options.fields[field] && this.options.fields[field].validators[validator]) {
                this.options.fields[field].validators[validator][option] = value;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validator);
            }

            return this;
        },

        /**
         * Validate given container
         * It can be used with isValidContainer() when you want to work with wizard form
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {FormValidation.Base}
         */
        validateContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return this;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length;
            for (var i = 0; i < total; i++) {
                this.validateField(fields[i]);
            }

            return this;
        }
    };

    // Plugin definition
    $.fn.formValidation = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('formValidation'),
                options = 'object' === typeof option && option;
            if (!data) {
                var framework = (options.framework || $this.attr('data-fv-framework') || 'bootstrap').toLowerCase(),
                    clazz     = framework.substr(0, 1).toUpperCase() + framework.substr(1);

                if (typeof FormValidation.Framework[clazz] === 'undefined') {
                    throw new Error('The class FormValidation.Framework.' + clazz + ' is not implemented');
                }

                data = new FormValidation.Framework[clazz](this, options);
                $this.addClass('fv-form-' + framework)
                     .data('formValidation', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.formValidation.Constructor = FormValidation.Base;

    // The default options
    // Sorted in alphabetical order
    $.fn.formValidation.DEFAULT_OPTIONS = {
        // The first invalid field will be focused automatically
        autoFocus: true,

        // Support declarative usage (setting options via HTML 5 attributes)
        // Setting to false can improve the performance
        declarative: true,

        // The form CSS class
        elementClass: 'fv-form',

        // Use custom event name to avoid window.onerror being invoked by jQuery
        // See #630
        events: {
            // Support backward
            formInit: 'init.form.fv',
            formError: 'err.form.fv',
            formSuccess: 'success.form.fv',
            fieldAdded: 'added.field.fv',
            fieldRemoved: 'removed.field.fv',
            fieldInit: 'init.field.fv',
            fieldError: 'err.field.fv',
            fieldSuccess: 'success.field.fv',
            fieldStatus: 'status.field.fv',
            localeChanged: 'changed.locale.fv',
            validatorError: 'err.validator.fv',
            validatorSuccess: 'success.validator.fv',
            validatorIgnored: 'ignored.validator.fv'
        },

        // Indicate fields which won't be validated
        // By default, the plugin will not validate the following kind of fields:
        // - disabled
        // - hidden
        // - invisible
        //
        // The setting consists of jQuery filters. Accept 3 formats:
        // - A string. Use a comma to separate filter
        // - An array. Each element is a filter
        // - An array. Each element can be a callback function
        //      function($field, validator) {
        //          $field is jQuery object representing the field element
        //          validator is the BootstrapValidator instance
        //          return true or false;
        //      }
        //
        // The 3 following settings are equivalent:
        //
        // 1) ':disabled, :hidden, :not(:visible)'
        // 2) [':disabled', ':hidden', ':not(:visible)']
        // 3) [':disabled', ':hidden', function($field) {
        //        return !$field.is(':visible');
        //    }]
        excluded: [':disabled', ':hidden', ':not(:visible)'],

        // Map the field name with validator rules
        fields: null,

        // Live validating option
        // Can be one of 3 values:
        // - enabled: The plugin validates fields as soon as they are changed
        // - disabled: Disable the live validating. The error messages are only shown after the form is submitted
        // - submitted: The live validating is enabled after the form is submitted
        live: 'enabled',

        // Locale in the format of languagecode_COUNTRYCODE
        locale: 'en_US',

        // Default invalid message
        message: 'This value is not valid',

        // The field will not be live validated if its length is less than this number of characters
        threshold: null,

        // Whether to be verbose when validating a field or not.
        // Possible values:
        // - true:  when a field has multiple validators, all of them will be checked, and respectively - if errors occur in
        //          multiple validators, all of them will be displayed to the user
        // - false: when a field has multiple validators, validation for this field will be terminated upon the first encountered error.
        //          Thus, only the very first error message related to this field will be displayed to the user
        verbose: true,

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // These options mostly are overridden by specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        button: {
            // The submit buttons selector
            // These buttons will be disabled to prevent the valid form from multiple submissions
            selector: '[type="submit"]',

            // The disabled class
            disabled: ''
        },

        control: {
            // The CSS class for valid control
            valid: '',

            // The CSS class for invalid control
            invalid: ''
        },

        err: {
            // The CSS class of each message element
            clazz: '',

            // The error messages container. It can be:
            // - 'tooltip' if you want to use Bootstrap tooltip to show error messages
            // - 'popover' if you want to use Bootstrap popover to show error messages
            // - a CSS selector indicating the container
            // In the first two cases, since the tooltip/popover should be small enough, the plugin only shows only one error message
            // You also can define the message container for particular field
            container: null,

            // Used to determine where the messages are placed
            parent: null
        },

        // Shows ok/error/loading icons based on the field validity.
        icon: {
            valid: null,
            invalid: null,
            validating: null,
            feedback: ''
        },

        row: {
            // The CSS selector for indicating the element consists of the field
            // You should adjust this option if your form group consists of many fields which not all of them need to be validated
            selector: null,
            valid: '',
            invalid: '',
            feedback: ''
        }
    };
}(jQuery));
;(function($) {
    // Helper methods, which can be used in validator class
    FormValidation.Helper = {
        /**
         * Execute a callback function
         *
         * @param {String|Function} functionName Can be
         * - name of global function
         * - name of namespace function (such as A.B.C)
         * - a function
         * @param {Array} args The callback arguments
         */
        call: function(functionName, args) {
            if ('function' === typeof functionName) {
                return functionName.apply(this, args);
            } else if ('string' === typeof functionName) {
                if ('()' === functionName.substring(functionName.length - 2)) {
                    functionName = functionName.substring(0, functionName.length - 2);
                }
                var ns      = functionName.split('.'),
                    func    = ns.pop(),
                    context = window;
                for (var i = 0; i < ns.length; i++) {
                    context = context[ns[i]];
                }

                return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
            }
        },

        /**
         * Validate a date
         *
         * @param {Number} year The full year in 4 digits
         * @param {Number} month The month number
         * @param {Number} day The day number
         * @param {Boolean} [notInFuture] If true, the date must not be in the future
         * @returns {Boolean}
         */
        date: function(year, month, day, notInFuture) {
            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                return false;
            }
            if (day.length > 2 || month.length > 2 || year.length > 4) {
                return false;
            }

            day   = parseInt(day, 10);
            month = parseInt(month, 10);
            year  = parseInt(year, 10);

            if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
                return false;
            }
            var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // Update the number of days in Feb of leap year
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                numDays[1] = 29;
            }

            // Check the day
            if (day <= 0 || day > numDays[month - 1]) {
                return false;
            }

            if (notInFuture === true) {
                var currentDate  = new Date(),
                    currentYear  = currentDate.getFullYear(),
                    currentMonth = currentDate.getMonth(),
                    currentDay   = currentDate.getDate();
                return (year < currentYear
                || (year === currentYear && month - 1 < currentMonth)
                || (year === currentYear && month - 1 === currentMonth && day < currentDay));
            }

            return true;
        },

        /**
         * Format a string
         * It's used to format the error message
         * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
         *
         * @param {String} message
         * @param {Array} parameters
         * @returns {String}
         */
        format: function(message, parameters) {
            if (!$.isArray(parameters)) {
                parameters = [parameters];
            }

            for (var i in parameters) {
                message = message.replace('%s', parameters[i]);
            }

            return message;
        },

        /**
         * Implement Luhn validation algorithm
         * Credit to https://gist.github.com/ShirtlessKirk/2134376
         *
         * @see http://en.wikipedia.org/wiki/Luhn
         * @param {String} value
         * @returns {Boolean}
         */
        luhn: function(value) {
            var length  = value.length,
                mul     = 0,
                prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
                sum     = 0;

            while (length--) {
                sum += prodArr[mul][parseInt(value.charAt(length), 10)];
                mul ^= 1;
            }

            return (sum % 10 === 0 && sum > 0);
        },

        /**
         * Implement modulus 11, 10 (ISO 7064) algorithm
         *
         * @param {String} value
         * @returns {Boolean}
         */
        mod11And10: function(value) {
            var check  = 5,
                length = value.length;
            for (var i = 0; i < length; i++) {
                check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
            }
            return (check === 1);
        },

        /**
         * Implements Mod 37, 36 (ISO 7064) algorithm
         * Usages:
         * mod37And36('A12425GABC1234002M')
         * mod37And36('002006673085', '0123456789')
         *
         * @param {String} value
         * @param {String} [alphabet]
         * @returns {Boolean}
         */
        mod37And36: function(value, alphabet) {
            alphabet = alphabet || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var modulus = alphabet.length,
                length  = value.length,
                check   = Math.floor(modulus / 2);
            for (var i = 0; i < length; i++) {
                check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
            }
            return (check === 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            base64: {
                'default': 'Please enter a valid base 64 encoded'
            }
        }
    });

    FormValidation.Validator.base64 = {
        /**
         * Return true if the input value is a base 64 encoded string.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'base64');
            if (value === '') {
                return true;
            }

            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            between: {
                'default': 'Please enter a value between %s and %s',
                notInclusive: 'Please enter a value between %s and %s strictly'
            }
        }
    });

    FormValidation.Validator.between = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            if ('range' === $field.attr('type')) {
                return {
                    min: $field.attr('min'),
                    max: $field.attr('max')
                };
            }

            return false;
        },

        /**
         * Return true if the input value is between (strictly or not) two given numbers
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - min
         * - max
         *
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'between');
            if (value === '') {
                return true;
            }

			value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale   = validator.getLocale(),
                min      = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max      = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                minValue = this._format(min),
                maxValue = this._format(max);

            value = parseFloat(value);
			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value >= minValue && value <= maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between['default'], [min, max])
                    }
                    : {
                        valid: value > minValue  && value <  maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between.notInclusive, [min, max])
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            bic: {
                'default': 'Please enter a valid BIC number'
            }
        }
    });

    FormValidation.Validator.bic = {
        /**
         * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
         *
         * For more information see http://en.wikipedia.org/wiki/ISO_9362
         *
         * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'bic');
            if (value === '') {
                return true;
            }
            return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.Validator.blank = {
        /**
         * Placeholder validator that can be used to display a custom validation message
         * returned from the server
         * Example:
         *
         * (1) a "blank" validator is applied to an input field.
         * (2) data is entered via the UI that is unable to be validated client-side.
         * (3) server returns a 400 with JSON data that contains the field that failed
         *     validation and an associated message.
         * (4) ajax 400 call handler does the following:
         *
         *      bv.updateMessage(field, 'blank', errorMessage);
         *      bv.updateStatus(field, 'INVALID');
         *
         * @see https://github.com/formvalidation/formvalidation/issues/542
         * @see https://github.com/formvalidation/formvalidation/pull/666
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            callback: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.callback = {
        html5Attributes: {
            message: 'message',
            callback: 'callback'
        },

        /**
         * Return result from the callback method
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - callback: The callback method that passes 2 parameters:
         *      callback: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of BootstrapValidator
         *          // $field is the field element
         *      }
         * - message: The invalid message
         * @returns {Deferred}
         */
        validate: function(validator, $field, options) {
            var value  = validator.getFieldValue($field, 'callback'),
                dfd    = new $.Deferred(),
                result = { valid: true };

            if (options.callback) {
                var response = FormValidation.Helper.call(options.callback, [value, validator, $field]);
                result = ('boolean' === typeof response || null === response) ? { valid: response } : response;
            }

            dfd.resolve($field, 'callback', result);
            return dfd;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            choice: {
                'default': 'Please enter a valid value',
                less: 'Please choose %s options at minimum',
                more: 'Please choose %s options at maximum',
                between: 'Please choose %s - %s options'
            }
        }
    });

    FormValidation.Validator.choice = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max'
        },

        /**
         * Check if the number of checked boxes are less or more than a given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         *
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var locale     = validator.getLocale(),
                ns         = validator.getNamespace(),
                numChoices = $field.is('select')
                            ? validator.getFieldElements($field.attr('data-' + ns + '-field')).find('option').filter(':selected').length
                            : validator.getFieldElements($field.attr('data-' + ns + '-field')).filter(':checked').length,
                min        = options.min ? ($.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min)) : null,
                max        = options.max ? ($.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max)) : null,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].choice['default'];

            if ((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.less, parseInt(min, 10));
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.more, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return { valid: isValid, message: message };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            color: {
                'default': 'Please enter a valid color'
            }
        }
    });

    FormValidation.Validator.color = {
        html5Attributes: {
            message: 'message',
            type: 'type'
        },

        enableByHtml5: function($field) {
            return ('color' === $field.attr('type'));
        },

        SUPPORTED_TYPES: [
            'hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'
        ],

        KEYWORD_COLORS: [
            // Colors start with A
            'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
            // B
            'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
            // C
            'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
            // D
            'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
            'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
            'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
            'dimgrey', 'dodgerblue',
            // F
            'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
            // G
            'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey',
            // H
            'honeydew', 'hotpink',
            // I
            'indianred', 'indigo', 'ivory',
            // K
            'khaki',
            // L
            'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
            'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
            'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
            'linen',
            // M
            'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
            'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
            'mistyrose', 'moccasin',
            // N
            'navajowhite', 'navy',
            // O
            'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
            // P
            'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
            'plum', 'powderblue', 'purple',
            // R
            'red', 'rosybrown', 'royalblue',
            // S
            'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue',
            'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
            // T
            'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise',
            // V
            'violet',
            // W
            'wheat', 'white', 'whitesmoke',
            // Y
            'yellow', 'yellowgreen'
        ],

        /**
         * Return true if the input value is a valid color
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - type: The array of valid color types
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'color');
            if (value === '') {
                return true;
            }

            // Only accept 6 hex character values due to the HTML 5 spec
            // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
            if (this.enableByHtml5($field)) {
                return /^#[0-9A-F]{6}$/i.test(value);
            }

            var types = options.type || this.SUPPORTED_TYPES;
            if (!$.isArray(types)) {
                types = types.replace(/s/g, '').split(',');
            }

            var method,
                type,
                isValid = false;

            for (var i = 0; i < types.length; i++) {
                type    = types[i];
                method  = '_' + type.toLowerCase();
                isValid = isValid || this[method](value);
                if (isValid) {
                    return true;
                }
            }

            return false;
        },

        _hex: function(value) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        },

        _hsl: function(value) {
            return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
        },

        _hsla: function(value) {
            return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
        },

        _keyword: function(value) {
            return $.inArray(value, this.KEYWORD_COLORS) >= 0;
        },

        _rgb: function(value) {
            var regexInteger = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
                regexPercent = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        },

        _rgba: function(value) {
            var regexInteger = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
                regexPercent = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            creditCard: {
                'default': 'Please enter a valid credit card number'
            }
        }
    });

    FormValidation.Validator.creditCard = {
        /**
         * Return true if the input value is valid credit card number
         * Based on https://gist.github.com/DiegoSalazar/4075533
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following key:
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'creditCard');
            if (value === '') {
                return true;
            }

            // Accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');

            if (!FormValidation.Helper.luhn(value)) {
                return false;
            }

            // Validate the card number based on prefix (IIN ranges) and length
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };

            var type, i;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (value.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]     // Check the prefix
                        && $.inArray(value.length, cards[type].length) !== -1)                      // and length
                    {
                        return {
                            valid: true,
                            type: type
                        };
                    }
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cusip: {
                'default': 'Please enter a valid CUSIP number'
            }
        }
    });

    FormValidation.Validator.cusip = {
        /**
         * Validate a CUSIP number
         * Examples:
         * - Valid: 037833100, 931142103, 14149YAR8, 126650BG6
         * - Invalid: 31430F200, 022615AC2
         *
         * @see http://en.wikipedia.org/wiki/CUSIP
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'cusip');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{9}$/.test(value)) {
                return false;
            }

            var converted = $.map(value.split(''), function(item) {
                                var code = item.charCodeAt(0);
                                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                                            // Replace A, B, C, ..., Z with 10, 11, ..., 35
                                            ? (code - 'A'.charCodeAt(0) + 10)
                                            : item;
                            }),
                length    = converted.length,
                sum       = 0;
            for (var i = 0; i < length - 1; i++) {
                var num = parseInt(converted[i], 10);
                if (i % 2 !== 0) {
                    num *= 2;
                }
                if (num > 9) {
                    num -= 9;
                }
                sum += num;
            }

            sum = (10 - (sum % 10)) % 10;
            return sum === parseInt(converted[length - 1], 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cvv: {
                'default': 'Please enter a valid CVV number'
            }
        }
    });

    FormValidation.Validator.cvv = {
        html5Attributes: {
            message: 'message',
            ccfield: 'creditCardField'
        },

        /**
         * Bind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        init: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.onLiveChange(creditCardField, 'live_cvv', function() {
                    var status = validator.getStatus($field, 'cvv');
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        destroy: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.offLiveChange(creditCardField, 'live_cvv');
            }
        },

        /**
         * Return true if the input value is a valid CVV number.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - creditCardField: The credit card number field. It can be null
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'cvv');
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{3,4}$/.test(value)) {
                return false;
            }

            if (!options.creditCardField) {
                return true;
            }

            // Get the credit card number
            var creditCard = validator.getFieldElements(options.creditCardField).val();
            if (creditCard === '') {
                return true;
            }
            
            creditCard = creditCard.replace(/\D/g, '');

            // Supported credit card types
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };
            var type, i, creditCardType = null;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (creditCard.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]    // Check the prefix
                        && $.inArray(creditCard.length, cards[type].length) !== -1)                     // and length
                    {
                        creditCardType = type;
                        break;
                    }
                }
            }

            return (creditCardType === null)
                        ? false
                        : (('AMERICAN_EXPRESS' === creditCardType) ? (value.length === 4) : (value.length === 3));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            date: {
                'default': 'Please enter a valid date',
                min: 'Please enter a date after %s',
                max: 'Please enter a date before %s',
                range: 'Please enter a date in the range %s - %s'
            }
        }
    });

    FormValidation.Validator.date = {
        html5Attributes: {
            message: 'message',
            format: 'format',
            min: 'min',
            max: 'max',
            separator: 'separator'
        },

        /**
         * Return true if the input value is valid date
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - min: the minimum date
         * - max: the maximum date
         * - separator: Use to separate the date, month, and year.
         * By default, it is /
         * - format: The date format. Default is MM/DD/YYYY
         * The format can be:
         *
         * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
         * ii) date and time:
         * The time can consist of h, m, s parts which are separated by :
         * ii) date, time and A (indicating AM or PM)
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'date');
            if (value === '') {
                return true;
            }

            options.format = options.format || 'MM/DD/YYYY';

            // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
            if ($field.attr('type') === 'date') {
                options.format = 'YYYY-MM-DD';
            }

            var locale     = validator.getLocale(),
                message    = options.message || FormValidation.I18n[locale].date['default'],
                formats    = options.format.split(' '),
                dateFormat = formats[0],
                timeFormat = (formats.length > 1) ? formats[1] : null,
                amOrPm     = (formats.length > 2) ? formats[2] : null,
                sections   = value.split(' '),
                date       = sections[0],
                time       = (sections.length > 1) ? sections[1] : null;

            if (formats.length !== sections.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the separator
            var separator = options.separator;
            if (!separator) {
                separator = (date.indexOf('/') !== -1)
                            ? '/'
                            : ((date.indexOf('-') !== -1) ? '-' : ((date.indexOf('.') !== -1) ? '.' : null));
            }
            if (separator === null || date.indexOf(separator) === -1) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the date
            date       = date.split(separator);
            dateFormat = dateFormat.split(separator);
            if (date.length !== dateFormat.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            var year  = date[$.inArray('YYYY', dateFormat)],
                month = date[$.inArray('MM', dateFormat)],
                day   = date[$.inArray('DD', dateFormat)];

            if (!year || !month || !day || year.length !== 4) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the time
            var minutes = null, hours = null, seconds = null;
            if (timeFormat) {
                timeFormat = timeFormat.split(':');
                time       = time.split(':');

                if (timeFormat.length !== time.length) {
                    return {
                        valid: false,
                        message: message
                    };
                }

                hours   = time.length > 0 ? time[0] : null;
                minutes = time.length > 1 ? time[1] : null;
                seconds = time.length > 2 ? time[2] : null;

                if (hours === '' || minutes === '' || seconds === '') {
                    return {
                        valid: false,
                        message: message
                    };
                }

                // Validate seconds
                if (seconds) {
                    if (isNaN(seconds) || seconds.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    seconds = parseInt(seconds, 10);
                    if (seconds < 0 || seconds > 60) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate hours
                if (hours) {
                    if (isNaN(hours) || hours.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    hours = parseInt(hours, 10);
                    if (hours < 0 || hours >= 24 || (amOrPm && hours > 12)) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate minutes
                if (minutes) {
                    if (isNaN(minutes) || minutes.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    minutes = parseInt(minutes, 10);
                    if (minutes < 0 || minutes > 59) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
            }

            // Validate day, month, and year
            var valid     = FormValidation.Helper.date(year, month, day),
                // declare the date, min and max objects
                min       = null,
                max       = null,
                minOption = options.min,
                maxOption = options.max;

            if (minOption) {
                if (isNaN(Date.parse(minOption))) {
                    minOption = validator.getDynamicOption($field, minOption);
                }

                min       = minOption instanceof Date ? minOption : this._parseDate(minOption, dateFormat, separator);
                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                minOption = minOption instanceof Date ? this._formatDate(minOption, options.format) : minOption;
            }

            if (maxOption) {
                if (isNaN(Date.parse(maxOption))) {
                    maxOption = validator.getDynamicOption($field, maxOption);
                }

                max       = maxOption instanceof Date ? maxOption : this._parseDate(maxOption, dateFormat, separator);
                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                maxOption = maxOption instanceof Date ? this._formatDate(maxOption, options.format) : maxOption;
            }

            date = new Date(year, month -1, day, hours, minutes, seconds);

            switch (true) {
                case (minOption && !maxOption && valid):
                    valid   = date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.min, minOption);
                    break;

                case (maxOption && !minOption && valid):
                    valid   = date.getTime() <= max.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.max, maxOption);
                    break;

                case (maxOption && minOption && valid):
                    valid   = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.range, [minOption, maxOption]);
                    break;

                default:
                    break;
            }

            return {
                valid: valid,
                message: message
            };
        },

        /**
         * Return a date object after parsing the date string
         *
         * @param {String} date   The date string to parse
         * @param {String} format The date format
         * The format can be:
         *   - date: Consist of DD, MM, YYYY parts which are separated by the separator option
         *   - date and time:
         *     The time can consist of h, m, s parts which are separated by :
         * @param {String} separator The separator used to separate the date, month, and year
         * @returns {Date}
         */
        _parseDate: function(date, format, separator) {
            var minutes     = 0, hours = 0, seconds = 0,
                sections    = date.split(' '),
                dateSection = sections[0],
                timeSection = (sections.length > 1) ? sections[1] : null;

            dateSection = dateSection.split(separator);
            var year  = dateSection[$.inArray('YYYY', format)],
                month = dateSection[$.inArray('MM', format)],
                day   = dateSection[$.inArray('DD', format)];
            if (timeSection) {
                timeSection = timeSection.split(':');
                hours       = timeSection.length > 0 ? timeSection[0] : null;
                minutes     = timeSection.length > 1 ? timeSection[1] : null;
                seconds     = timeSection.length > 2 ? timeSection[2] : null;
            }

            return new Date(year, month -1, day, hours, minutes, seconds);
        },

        /**
         * Format date
         *
         * @param {Date} date The date object to format
         * @param {String} format The date format
         * The format can consist of the following tokens:
         *      d       Day of the month without leading zeros (1 through 31)
         *      dd      Day of the month with leading zeros (01 through 31)
         *      m       Month without leading zeros (1 through 12)
         *      mm      Month with leading zeros (01 through 12)
         *      yy      Last two digits of year (for example: 14)
         *      yyyy    Full four digits of year (for example: 2014)
         *      h       Hours without leading zeros (1 through 12)
         *      hh      Hours with leading zeros (01 through 12)
         *      H       Hours without leading zeros (0 through 23)
         *      HH      Hours with leading zeros (00 through 23)
         *      M       Minutes without leading zeros (0 through 59)
         *      MM      Minutes with leading zeros (00 through 59)
         *      s       Seconds without leading zeros (0 through 59)
         *      ss      Seconds with leading zeros (00 through 59)
         * @returns {String}
         */
        _formatDate: function(date, format) {
            format = format
                        .replace(/Y/g, 'y')
                        .replace(/M/g, 'm')
                        .replace(/D/g, 'd')
                        .replace(/:m/g, ':M')
                        .replace(/:mm/g, ':MM')
                        .replace(/:S/, ':s')
                        .replace(/:SS/, ':ss');

            var replacer = {
                d: function(date) {
                    return date.getDate();
                },
                dd: function(date) {
                    var d = date.getDate();
                    return (d < 10) ? '0' + d : d;
                },
                m: function(date) {
                    return date.getMonth() + 1;
                },
                mm: function(date) {
                    var m = date.getMonth() + 1;
                    return m < 10 ? '0' + m : m;
                },
                yy: function(date) {
                    return ('' + date.getFullYear()).substr(2);
                },
                yyyy: function(date) {
                    return date.getFullYear();
                },
                h: function(date) {
                    return date.getHours() % 12 || 12;
                },
                hh: function(date) {
                    var h = date.getHours() % 12 || 12;
                    return h < 10 ? '0' + h : h;
                },
                H: function(date) {
                    return date.getHours();
                },
                HH: function(date) {
                    var H = date.getHours();
                    return H < 10 ? '0' + H : H;
                },
                M: function(date) {
                    return date.getMinutes();
                },
                MM: function(date) {
                    var M = date.getMinutes();
                    return M < 10 ? '0' + M : M;
                },
                s: function(date) {
                    return date.getSeconds();
                },
                ss: function(date) {
                    var s = date.getSeconds();
                    return s < 10 ? '0' + s : s;
                }
            };

            return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(match) {
                return replacer[match] ? replacer[match](date) : match.slice(1, match.length - 1);
            });
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            different: {
                'default': 'Please enter a different value'
            }
        }
    });

    FormValidation.Validator.different = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.onLiveChange(compareWith, 'live_different', function() {
                    var status = validator.getStatus($field, 'different');
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.offLiveChange(compareWith, 'live_different');
            }
        },

        /**
         * Return true if the input value is different with given field's value
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'different');
            if (value === '') {
                return true;
            }

            var fields  = options.field.split(','),
                isValid = true;

            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                if (compareWith == null || compareWith.length === 0) {
                    continue;
                }

                var compareValue = validator.getFieldValue(compareWith, 'different');
                if (value === compareValue) {
                    isValid = false;
                } else if (compareValue !== '') {
                    validator.updateStatus(compareWith, validator.STATUS_VALID, 'different');
                }
            }

            return isValid;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            digits: {
                'default': 'Please enter only digits'
            }
        }
    });

    FormValidation.Validator.digits = {
        /**
         * Return true if the input value contains digits only
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'digits');
            if (value === '') {
                return true;
            }

            return /^\d+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ean: {
                'default': 'Please enter a valid EAN number'
            }
        }
    });

    FormValidation.Validator.ean = {
        /**
         * Validate EAN (International Article Number)
         * Examples:
         * - Valid: 73513537, 9780471117094, 4006381333931
         * - Invalid: 73513536
         *
         * @see http://en.wikipedia.org/wiki/European_Article_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ean');
            if (value === '') {
                return true;
            }

            if (!/^(\d{8}|\d{12}|\d{13})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = (10 - sum % 10) % 10;
            return (sum + '' === value.charAt(length - 1));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ein: {
                'default': 'Please enter a valid EIN number'
            }
        }
    });

    FormValidation.Validator.ein = {
        // The first two digits are called campus
        // See http://en.wikipedia.org/wiki/Employer_Identification_Number
        // http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes
        CAMPUS: {
            ANDOVER: ['10', '12'],
            ATLANTA: ['60', '67'],
            AUSTIN: ['50', '53'],
            BROOKHAVEN: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
            CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
            FRESNO: ['15', '24'],
            KANSAS_CITY: ['40', '44'],
            MEMPHIS: ['94', '95'],
            OGDEN: ['80', '90'],
            PHILADELPHIA: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
            INTERNET: ['20', '26', '27', '45', '46'],
            SMALL_BUSINESS_ADMINISTRATION: ['31']
        },

        /**
         * Validate EIN (Employer Identification Number) which is also known as
         * Federal Employer Identification Number (FEIN) or Federal Tax Identification Number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object|Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ein');
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{2}-?[0-9]{7}$/.test(value)) {
                return false;
            }
            // Check the first two digits
            var campus = value.substr(0, 2) + '';
            for (var key in this.CAMPUS) {
                if ($.inArray(campus, this.CAMPUS[key]) !== -1) {
                    return {
                        valid: true,
                        campus: key
                    };
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            emailAddress: {
                'default': 'Please enter a valid email address'
            }
        }
    });

    FormValidation.Validator.emailAddress = {
        html5Attributes: {
            message: 'message',
            multiple: 'multiple',
            separator: 'separator'
        },

        enableByHtml5: function($field) {
            return ('email' === $field.attr('type'));
        },

        /**
         * Return true if and only if the input value is a valid email address
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * - multiple: Allow multiple email addresses, separated by a comma or semicolon; default is false.
         * - separator: Regex for character or characters expected as separator between addresses; default is comma /[,;]/, i.e. comma or semicolon.
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'emailAddress');
            if (value === '') {
                return true;
            }

            // Email address regular expression
            // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            var emailRegExp   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                allowMultiple = options.multiple === true || options.multiple === 'true';

            if (allowMultiple) {
                var separator = options.separator || /[,;]/,
                    addresses = this._splitEmailAddresses(value, separator);

                for (var i = 0; i < addresses.length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return false;
                    }
                }

                return true;
            } else {
                return emailRegExp.test(value);
            }
        },

        _splitEmailAddresses: function(emailAddresses, separator) {
            var quotedFragments     = emailAddresses.split(/"/),
                quotedFragmentCount = quotedFragments.length,
                emailAddressArray   = [],
                nextEmailAddress    = '';

            for (var i = 0; i < quotedFragmentCount; i++) {
                if (i % 2 === 0) {
                    var splitEmailAddressFragments     = quotedFragments[i].split(separator),
                        splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

                    if (splitEmailAddressFragmentCount === 1) {
                        nextEmailAddress += splitEmailAddressFragments[0];
                    } else {
                        emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

                        for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                            emailAddressArray.push(splitEmailAddressFragments[j]);
                        }
                        nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                    }
                } else {
                    nextEmailAddress += '"' + quotedFragments[i];
                    if (i < quotedFragmentCount - 1) {
                        nextEmailAddress += '"';
                    }
                }
            }

            emailAddressArray.push(nextEmailAddress);
            return emailAddressArray;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            file: {
                'default': 'Please choose a valid file'
            }
        }
    });

    FormValidation.Validator.file = {
        html5Attributes: {
            extension: 'extension',
            maxfiles: 'maxFiles',
            minfiles: 'minFiles',
            maxsize: 'maxSize',
            minsize: 'minSize',
            maxtotalsize: 'maxTotalSize',
            mintotalsize: 'minTotalSize',
            message: 'message',
            type: 'type'
        },

        /**
         * Validate upload file. Use HTML 5 API if the browser supports
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - extension: The allowed extensions, separated by a comma
         * - maxFiles: The maximum number of files
         * - minFiles: The minimum number of files
         * - maxSize: The maximum size in bytes
         * - minSize: The minimum size in bytes
         * - maxTotalSize: The maximum size in bytes for all files
         * - minTotalSize: The minimum size in bytes for all files
         * - message: The invalid message
         * - type: The allowed MIME type, separated by a comma
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'file');
            if (value === '') {
                return true;
            }

            var ext,
                extensions = options.extension ? options.extension.toLowerCase().split(',') : null,
                types      = options.type      ? options.type.toLowerCase().split(',')      : null,
                html5      = (window.File && window.FileList && window.FileReader);

            if (html5) {
                // Get FileList instance
                var files     = $field.get(0).files,
                    total     = files.length,
                    totalSize = 0;

                if ((options.maxFiles && total > parseInt(options.maxFiles, 10))        // Check the maxFiles
                    || (options.minFiles && total < parseInt(options.minFiles, 10)))    // Check the minFiles
                {
                    return false;
                }

                for (var i = 0; i < total; i++) {
                    totalSize += files[i].size;
                    ext        = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);

                    if ((options.minSize && files[i].size < parseInt(options.minSize, 10))                      // Check the minSize
                        || (options.maxSize && files[i].size > parseInt(options.maxSize, 10))                   // Check the maxSize
                        || (extensions && $.inArray(ext.toLowerCase(), extensions) === -1)                      // Check file extension
                        || (files[i].type && types && $.inArray(files[i].type.toLowerCase(), types) === -1))    // Check file type
                    {
                        return false;
                    }
                }

                if ((options.maxTotalSize && totalSize > parseInt(options.maxTotalSize, 10))        // Check the maxTotalSize
                    || (options.minTotalSize && totalSize < parseInt(options.minTotalSize, 10)))    // Check the minTotalSize
                {
                    return false;
                }
            } else {
                // Check file extension
                ext = value.substr(value.lastIndexOf('.') + 1);
                if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
                    return false;
                }
            }

            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            greaterThan: {
                'default': 'Please enter a value greater than or equal to %s',
                notInclusive: 'Please enter a value greater than %s'
            }
        }
    });

    FormValidation.Validator.greaterThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                min  = $field.attr('min');
            if (min && type !== 'date') {
                return {
                    value: min
                };
            }

            return false;
        },

        /**
         * Return true if the input value is greater than or equals to given number
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: Define the number to compare with. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'greaterThan');
            if (value === '') {
                return true;
            }
            
            value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

            value = parseFloat(value);
			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value >= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan['default'], compareTo)
                    }
                    : {
                        valid: value > compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            grid: {
                'default': 'Please enter a valid GRId number'
            }
        }
    });

    FormValidation.Validator.grid = {
        /**
         * Validate GRId (Global Release Identifier)
         * Examples:
         * - Valid: A12425GABC1234002M, A1-2425G-ABC1234002-M, A1 2425G ABC1234002 M, Grid:A1-2425G-ABC1234002-M
         * - Invalid: A1-2425G-ABC1234002-Q
         *
         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'grid');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === value.substr(0, 5)) {
                value = value.substr(5);
            }
            return FormValidation.Helper.mod37And36(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            hex: {
                'default': 'Please enter a valid hexadecimal number'
            }
        }
    });

    FormValidation.Validator.hex = {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'hex');
            if (value === '') {
                return true;
            }

            return /^[0-9a-fA-F]+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            iban: {
                'default': 'Please enter a valid IBAN number',
                country: 'Please enter a valid IBAN number in %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'United Arab Emirates',
                    AL: 'Albania',
                    AO: 'Angola',
                    AT: 'Austria',
                    AZ: 'Azerbaijan',
                    BA: 'Bosnia and Herzegovina',
                    BE: 'Belgium',
                    BF: 'Burkina Faso',
                    BG: 'Bulgaria',
                    BH: 'Bahrain',
                    BI: 'Burundi',
                    BJ: 'Benin',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CI: 'Ivory Coast',
                    CM: 'Cameroon',
                    CR: 'Costa Rica',
                    CV: 'Cape Verde',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    DO: 'Dominican Republic',
                    DZ: 'Algeria',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FO: 'Faroe Islands',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GE: 'Georgia',
                    GI: 'Gibraltar',
                    GL: 'Greenland',
                    GR: 'Greece',
                    GT: 'Guatemala',
                    HR: 'Croatia',
                    HU: 'Hungary',
                    IE: 'Ireland',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'Iceland',
                    IT: 'Italy',
                    JO: 'Jordan',
                    KW: 'Kuwait',
                    KZ: 'Kazakhstan',
                    LB: 'Lebanon',
                    LI: 'Liechtenstein',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MC: 'Monaco',
                    MD: 'Moldova',
                    ME: 'Montenegro',
                    MG: 'Madagascar',
                    MK: 'Macedonia',
                    ML: 'Mali',
                    MR: 'Mauritania',
                    MT: 'Malta',
                    MU: 'Mauritius',
                    MZ: 'Mozambique',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PK: 'Pakistan',
                    PL: 'Poland',
                    PS: 'Palestine',
                    PT: 'Portugal',
                    QA: 'Qatar',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SA: 'Saudi Arabia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TN: 'Tunisia',
                    TR: 'Turkey',
                    VG: 'Virgin Islands, British'
                }
            }
        }
    });

    FormValidation.Validator.iban = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
        // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
        REGEX: {
            AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',                       // Andorra
            AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',                                  // United Arab Emirates
            AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',                               // Albania
            AO: 'AO[0-9]{2}[0-9]{21}',                                          // Angola
            AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Austria
            AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',                               // Azerbaijan
            BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',                   // Bosnia and Herzegovina
            BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',                           // Belgium
            BF: 'BF[0-9]{2}[0-9]{23}',                                          // Burkina Faso
            BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',                // Bulgaria
            BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',                               // Bahrain
            BI: 'BI[0-9]{2}[0-9]{12}',                                          // Burundi
            BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Benin
            BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',             // Brazil
            CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Switzerland
            CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Ivory Coast
            CM: 'CM[0-9]{2}[0-9]{23}',                                          // Cameroon
            CR: 'CR[0-9]{2}[0-9]{3}[0-9]{14}',                                  // Costa Rica
            CV: 'CV[0-9]{2}[0-9]{21}',                                          // Cape Verde
            CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',                       // Cyprus
            CZ: 'CZ[0-9]{2}[0-9]{20}',                                          // Czech Republic
            DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',                                  // Germany
            DK: 'DK[0-9]{2}[0-9]{14}',                                          // Denmark
            DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',                               // Dominican Republic
            DZ: 'DZ[0-9]{2}[0-9]{20}',                                          // Algeria
            EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',                  // Estonia
            ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',          // Spain
            FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',                           // Finland
            FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Faroe Islands
            FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // France
            GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // United Kingdom
            GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',                                  // Georgia
            GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',                               // Gibraltar
            GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Greenland
            GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',                       // Greece
            GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',                            // Guatemala
            HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',                                  // Croatia
            HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',          // Hungary
            IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // Ireland
            IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',                          // Israel
            IR: 'IR[0-9]{2}[0-9]{22}',                                          // Iran
            IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',                  // Iceland
            IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // Italy
            JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',                 // Jordan
            KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',                                  // Kuwait
            KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Kazakhstan
            LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',                               // Lebanon
            LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Liechtenstein
            LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Lithuania
            LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Luxembourg
            LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',                               // Latvia
            MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // Monaco
            MD: 'MD[0-9]{2}[A-Z0-9]{20}',                                       // Moldova
            ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Montenegro
            MG: 'MG[0-9]{2}[0-9]{23}',                                          // Madagascar
            MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',                       // Macedonia
            ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Mali
            MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',                        // Mauritania
            MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',                       // Malta
            MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',  // Mauritius
            MZ: 'MZ[0-9]{2}[0-9]{21}',                                          // Mozambique
            NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',                                  // Netherlands
            NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',                           // Norway
            PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Pakistan
            PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',                                  // Poland
            PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Palestinian
            PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',                  // Portugal
            QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Qatar
            RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Romania
            RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Serbia
            SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',                               // Saudi Arabia
            SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',                          // Sweden
            SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',                           // Slovenia
            SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',                          // Slovakia
            SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // San Marino
            SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Senegal
            TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                        // Tunisia
            TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',                    // Turkey
            VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}'                                   // Virgin Islands, British
        },

        /**
         * Validate an International Bank Account Number (IBAN)
         * To test it, take the sample IBAN from
         * http://www.nordea.com/Our+services/International+products+and+services/Cash+Management/IBAN+countries/908462.html
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'iban');
            if (value === '') {
                return true;
            }

            value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            var country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || !this.REGEX[country]) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            var locale = validator.getLocale();
            if (!this.REGEX[country]) {
                return true;
            }

            if (!(new RegExp('^' + this.REGEX[country] + '$')).test(value)) {
                return {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
                };
            }

            value = value.substr(4) + value.substr(0, 4);
            value = $.map(value.split(''), function(n) {
                var code = n.charCodeAt(0);
                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                        // Replace A, B, C, ..., Z with 10, 11, ..., 35
                        ? (code - 'A'.charCodeAt(0) + 10)
                        : n;
            });
            value = value.join('');

            var temp   = parseInt(value.substr(0, 1), 10),
                length = value.length;
            for (var i = 1; i < length; ++i) {
                temp = (temp * 10 + parseInt(value.substr(i, 1), 10)) % 97;
            }

            return {
                valid: (temp === 1),
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            id: {
                'default': 'Please enter a valid identification number',
                country: 'Please enter a valid identification number in %s',
                countries: {
                    BA: 'Bosnia and Herzegovina',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CL: 'Chile',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    LT: 'Lithuania',
                    LV: 'Latvia',
                    ME: 'Montenegro',
                    MK: 'Macedonia',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    TH: 'Thailand',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.id = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CZ', 'DK', 'EE', 'ES', 'FI', 'HR', 'IE', 'IS', 'LT', 'LV', 'ME', 'MK', 'NL',
            'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'ZA'
        ],

        /**
         * Validate identification number in different countries
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'id');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method  = ['_', country.toLowerCase()].join('');
            return this[method](value)
                    ? true
                    : {
                        valid: false,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].id.country, FormValidation.I18n[locale].id.countries[country.toUpperCase()])
                    };
        },

        /**
         * Validate Unique Master Citizen Number which uses in
         * - Bosnia and Herzegovina (country code: BA)
         * - Macedonia (MK)
         * - Montenegro (ME)
         * - Serbia (RS)
         * - Slovenia (SI)
         *
         * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
         * @param {String} value The ID
         * @param {String} countryCode The ISO country code, can be BA, MK, ME, RS, SI
         * @returns {Boolean}
         */
        _validateJMBG: function(value, countryCode) {
            if (!/^\d{13}$/.test(value)) {
                return false;
            }
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 3), 10),
                rr    = parseInt(value.substr(7, 2), 10),
                k     = parseInt(value.substr(12, 1), 10);

            // Validate date of birth
            // FIXME: Validate the year of birth
            if (day > 31 || month > 12) {
                return false;
            }

            // Validate checksum
            var sum = 0;
            for (var i = 0; i < 6; i++) {
                sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
            }
            sum = 11 - sum % 11;
            if (sum === 10 || sum === 11) {
                sum = 0;
            }
            if (sum !== k) {
                return false;
            }

            // Validate political region
            // rr is the political region of birth, which can be in ranges:
            // 10-19: Bosnia and Herzegovina
            // 20-29: Montenegro
            // 30-39: Croatia (not used anymore)
            // 41-49: Macedonia
            // 50-59: Slovenia (only 50 is used)
            // 70-79: Central Serbia
            // 80-89: Serbian province of Vojvodina
            // 90-99: Kosovo
            switch (countryCode.toUpperCase()) {
                case 'BA':
                    return (10 <= rr && rr <= 19);
                case 'MK':
                    return (41 <= rr && rr <= 49);
                case 'ME':
                    return (20 <= rr && rr <= 29);
                case 'RS':
                    return (70 <= rr && rr <= 99);
                case 'SI':
                    return (50 <= rr && rr <= 59);
                default:
                    return true;
            }
        },

        _ba: function(value) {
            return this._validateJMBG(value, 'BA');
        },
        _mk: function(value) {
            return this._validateJMBG(value, 'MK');
        },
        _me: function(value) {
            return this._validateJMBG(value, 'ME');
        },
        _rs: function(value) {
            return this._validateJMBG(value, 'RS');
        },

        /**
         * Examples: 0101006500006
         */
        _si: function(value) {
            return this._validateJMBG(value, 'SI');
        },

        /**
         * Validate Bulgarian national identification number (EGN)
         * Examples:
         * - Valid: 7523169263, 8032056031, 803205 603 1, 8001010008, 7501020018, 7552010005, 7542011030
         * - Invalid: 8019010008
         *
         * @see http://en.wikipedia.org/wiki/Uniform_civil_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '');
            // Check the birth date
            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            } else if (month > 20) {
                year -= 100;
                month -= 20;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate Brazilian national identification number (CPF)
         * Examples:
         * - Valid: 39053344705, 390.533.447-05, 111.444.777-35
         * - Invalid: 231.002.999-00
         *
         * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _br: function(value) {
            value = value.replace(/\D/g, '');

            if (!/^\d{11}$/.test(value) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)) {
                return false;
            }

            var d1 = 0;
            for (var i = 0; i < 9; i++) {
                d1 += (10 - i) * parseInt(value.charAt(i), 10);
            }
            d1 = 11 - d1 % 11;
            if (d1 === 10 || d1 === 11) {
                d1 = 0;
            }
            if (d1 + '' !== value.charAt(9)) {
                return false;
            }

            var d2 = 0;
            for (i = 0; i < 10; i++) {
                d2 += (11 - i) * parseInt(value.charAt(i), 10);
            }
            d2 = 11 - d2 % 11;
            if (d2 === 10 || d2 === 11) {
                d2 = 0;
            }

            return (d2 + '' === value.charAt(10));
        },

        /**
         * Validate Swiss Social Security Number (AHV-Nr/No AVS)
         * Examples:
         * - Valid: 756.1234.5678.95, 7561234567895
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
         * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '').substr(3);
            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Chilean national identification number (RUN/RUT)
         * Examples:
         * - Valid: 76086428-5, 22060449-7, 12531909-2
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
         * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cl: function(value) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
                return false;
            }
            value = value.replace(/\-/g, '');
            while (value.length < 9) {
                value = '0' + value;
            }
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            } else if (sum === 10) {
                sum = 'K';
            }
            return sum + '' === value.charAt(8).toUpperCase();
        },

        /**
         * Validate Chinese citizen identification number
         *
         * Rules:
         * - For current 18-digit system (since 1st Oct 1999, defined by GB11643â€”1999 national standard):
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
         *     - Digit 14-16: Order code, any integer.
         *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
         *       Both upper/lower case of X are tolerated.
         * - For deprecated 15-digit system:
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
         *     - Digit 12-14: Order code, any integer.
         * Lists of valid administrative division codes of China PR can be seen here:
         * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
         * Published and maintained by National Bureau of Statistics of China PR.
         * NOTE: Current and deprecated codes MUST BOTH be considered valid.
         * Many Chinese citizens born in once existed administrative divisions!
         *
         * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cn: function(value) {
            // Basic format check (18 or 15 digits, considering X in checksum)
            value = value.trim();
            if (!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)) {
                return false;
            }
            
            // Check China PR Administrative division code
            var adminDivisionCodes = {
                11: {
                    0: [0],
                    1: [[0, 9], [11, 17]],
                    2: [0, 28, 29]
                },
                12: {
                    0: [0],
                    1: [[0, 16]],
                    2: [0, 21, 23, 25]
                },
                13: {
                    0: [0],
                    1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                    2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                    3: [[0, 4], [21, 24]],
                    4: [[0, 4], 6, 21, [23, 35], 81],
                    5: [[0, 3], [21, 35], 81, 82],
                    6: [[0, 4], [21, 38], [81, 84]],
                    7: [[0, 3], 5, 6, [21, 33]],
                    8: [[0, 4], [21, 28]],
                    9: [[0, 3], [21, 30], [81, 84]],
                    10: [[0, 3], [22, 26], 28, 81, 82],
                    11: [[0, 2], [21, 28], 81, 82]
                },
                14: {
                    0: [0],
                    1: [0, 1, [5, 10], [21, 23], 81],
                    2: [[0, 3], 11, 12, [21, 27]],
                    3: [[0, 3], 11, 21, 22],
                    4: [[0, 2], 11, 21, [23, 31], 81],
                    5: [[0, 2], 21, 22, 24, 25, 81],
                    6: [[0, 3], [21, 24]],
                    7: [[0, 2], [21, 29], 81],
                    8: [[0, 2], [21, 30], 81, 82],
                    9: [[0, 2], [21, 32], 81],
                    10: [[0, 2], [21, 34], 81, 82],
                    11: [[0, 2], [21, 30], 81, 82],
                    23: [[0, 3], 22, 23, [25, 30], 32, 33]
                },
                15: {
                    0: [0],
                    1: [[0, 5], [21, 25]],
                    2: [[0, 7], [21, 23]],
                    3: [[0, 4]],
                    4: [[0, 4], [21, 26], [28, 30]],
                    5: [[0, 2], [21, 26], 81],
                    6: [[0, 2], [21, 27]],
                    7: [[0, 3], [21, 27], [81, 85]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 29], 81],
                    22: [[0, 2], [21, 24]],
                    25: [[0, 2], [22, 31]],
                    26: [[0, 2], [24, 27], [29, 32], 34],
                    28: [0, 1, [22, 27]],
                    29: [0, [21, 23]]
                },
                21: {
                    0: [0],
                    1: [[0, 6], [11, 14], [22, 24], 81],
                    2: [[0, 4], [11, 13], 24, [81, 83]],
                    3: [[0, 4], 11, 21, 23, 81],
                    4: [[0, 4], 11, [21, 23]],
                    5: [[0, 5], 21, 22],
                    6: [[0, 4], 24, 81, 82],
                    7: [[0, 3], 11, 26, 27, 81, 82],
                    8: [[0, 4], 11, 81, 82],
                    9: [[0, 5], 11, 21, 22],
                    10: [[0, 5], 11, 21, 81],
                    11: [[0, 3], 21, 22],
                    12: [[0, 2], 4, 21, 23, 24, 81, 82],
                    13: [[0, 3], 21, 22, 24, 81, 82],
                    14: [[0, 4], 21, 22, 81]
                },
                22: {
                    0: [0],
                    1: [[0, 6], 12, 22, [81, 83]],
                    2: [[0, 4], 11, 21, [81, 84]],
                    3: [[0, 3], 22, 23, 81, 82],
                    4: [[0, 3], 21, 22],
                    5: [[0, 3], 21, 23, 24, 81, 82],
                    6: [[0, 2], 4, 5, [21, 23], 25, 81],
                    7: [[0, 2], [21, 24], 81],
                    8: [[0, 2], 21, 22, 81, 82],
                    24: [[0, 6], 24, 26]
                },
                23: {
                    0: [0],
                    1: [[0, 12], 21, [23, 29], [81, 84]],
                    2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                    3: [[0, 7], 21, 81, 82],
                    4: [[0, 7], 21, 22],
                    5: [[0, 3], 5, 6, [21, 24]],
                    6: [[0, 6], [21, 24]],
                    7: [[0, 16], 22, 81],
                    8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                    9: [[0, 4], 21],
                    10: [[0, 5], 24, 25, 81, [83, 85]],
                    11: [[0, 2], 21, 23, 24, 81, 82],
                    12: [[0, 2], [21, 26], [81, 83]],
                    27: [[0, 4], [21, 23]]
                },
                31: {
                    0: [0],
                    1: [0, 1, [3, 10], [12, 20]],
                    2: [0, 30]
                },
                32: {
                    0: [0],
                    1: [[0, 7], 11, [13, 18], 24, 25],
                    2: [[0, 6], 11, 81, 82],
                    3: [[0, 5], 11, 12, [21, 24], 81, 82],
                    4: [[0, 2], 4, 5, 11, 12, 81, 82],
                    5: [[0, 9], [81, 85]],
                    6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                    7: [0, 1, 3, 5, 6, [21, 24]],
                    8: [[0, 4], 11, 26, [29, 31]],
                    9: [[0, 3], [21, 25], 28, 81, 82],
                    10: [[0, 3], 11, 12, 23, 81, 84, 88],
                    11: [[0, 2], 11, 12, [81, 83]],
                    12: [[0, 4], [81, 84]],
                    13: [[0, 2], 11, [21, 24]]
                },
                33: {
                    0: [0],
                    1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                    2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                    3: [[0, 4], 22, 24, [26, 29], 81, 82],
                    4: [[0, 2], 11, 21, 24, [81, 83]],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], 21, 24, [81, 83]],
                    7: [[0, 3], 23, 26, 27, [81, 84]],
                    8: [[0, 3], 22, 24, 25, 81],
                    9: [[0, 3], 21, 22],
                    10: [[0, 4], [21, 24], 81, 82],
                    11: [[0, 2], [21, 27], 81]
                },
                34: {
                    0: [0],
                    1: [[0, 4], 11, [21, 24], 81],
                    2: [[0, 4], 7, 8, [21, 23], 25],
                    3: [[0, 4], 11, [21, 23]],
                    4: [[0, 6], 21],
                    5: [[0, 4], 6, [21, 23]],
                    6: [[0, 4], 21],
                    7: [[0, 3], 11, 21],
                    8: [[0, 3], 11, [22, 28], 81],
                    10: [[0, 4], [21, 24]],
                    11: [[0, 3], 22, [24, 26], 81, 82],
                    12: [[0, 4], 21, 22, 25, 26, 82],
                    13: [[0, 2], [21, 24]],
                    14: [[0, 2], [21, 24]],
                    15: [[0, 3], [21, 25]],
                    16: [[0, 2], [21, 23]],
                    17: [[0, 2], [21, 23]],
                    18: [[0, 2], [21, 25], 81]
                },
                35: {
                    0: [0],
                    1: [[0, 5], 11, [21, 25], 28, 81, 82],
                    2: [[0, 6], [11, 13]],
                    3: [[0, 5], 22],
                    4: [[0, 3], 21, [23, 30], 81],
                    5: [[0, 5], 21, [24, 27], [81, 83]],
                    6: [[0, 3], [22, 29], 81],
                    7: [[0, 2], [21, 25], [81, 84]],
                    8: [[0, 2], [21, 25], 81],
                    9: [[0, 2], [21, 26], 81, 82]
                },
                36: {
                    0: [0],
                    1: [[0, 5], 11, [21, 24]],
                    2: [[0, 3], 22, 81],
                    3: [[0, 2], 13, [21, 23]],
                    4: [[0, 3], 21, [23, 30], 81, 82],
                    5: [[0, 2], 21],
                    6: [[0, 2], 22, 81],
                    7: [[0, 2], [21, 35], 81, 82],
                    8: [[0, 3], [21, 30], 81],
                    9: [[0, 2], [21, 26], [81, 83]],
                    10: [[0, 2], [21, 30]],
                    11: [[0, 2], [21, 30], 81]
                },
                37: {
                    0: [0],
                    1: [[0, 5], 12, 13, [24, 26], 81],
                    2: [[0, 3], 5, [11, 14], [81, 85]],
                    3: [[0, 6], [21, 23]],
                    4: [[0, 6], 81],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], [11, 13], 34, [81, 87]],
                    7: [[0, 5], 24, 25, [81, 86]],
                    8: [[0, 2], 11, [26, 32], [81, 83]],
                    9: [[0, 3], 11, 21, 23, 82, 83],
                    10: [[0, 2], [81, 83]],
                    11: [[0, 3], 21, 22],
                    12: [[0, 3]],
                    13: [[0, 2], 11, 12, [21, 29]],
                    14: [[0, 2], [21, 28], 81, 82],
                    15: [[0, 2], [21, 26], 81],
                    16: [[0, 2], [21, 26]],
                    17: [[0, 2], [21, 28]]
                },
                41: {
                    0: [0],
                    1: [[0, 6], 8, 22, [81, 85]],
                    2: [[0, 5], 11, [21, 25]],
                    3: [[0, 7], 11, [22, 29], 81],
                    4: [[0, 4], 11, [21, 23], 25, 81, 82],
                    5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                    6: [[0, 3], 11, 21, 22],
                    7: [[0, 4], 11, 21, [24, 28], 81, 82],
                    8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                    9: [[0, 2], 22, 23, [26, 28]],
                    10: [[0, 2], [23, 25], 81, 82],
                    11: [[0, 4], [21, 23]],
                    12: [[0, 2], 21, 22, 24, 81, 82],
                    13: [[0, 3], [21, 30], 81],
                    14: [[0, 3], [21, 26], 81],
                    15: [[0, 3], [21, 28]],
                    16: [[0, 2], [21, 28], 81],
                    17: [[0, 2], [21, 29]],
                    90: [0, 1]
                },
                42: {
                    0: [0],
                    1: [[0, 7], [11, 17]],
                    2: [[0, 5], 22, 81],
                    3: [[0, 3], [21, 25], 81],
                    5: [[0, 6], [25, 29], [81, 83]],
                    6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                    7: [[0, 4]],
                    8: [[0, 2], 4, 21, 22, 81],
                    9: [[0, 2], [21, 23], 81, 82, 84],
                    10: [[0, 3], [22, 24], 81, 83, 87],
                    11: [[0, 2], [21, 27], 81, 82],
                    12: [[0, 2], [21, 24], 81],
                    13: [[0, 3], 21, 81],
                    28: [[0, 2], 22, 23, [25, 28]],
                    90: [0, [4, 6], 21]
                },
                43: {
                    0: [0],
                    1: [[0, 5], 11, 12, 21, 22, 24, 81],
                    2: [[0, 4], 11, 21, [23, 25], 81],
                    3: [[0, 2], 4, 21, 81, 82],
                    4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                    5: [[0, 3], 11, [21, 25], [27, 29], 81],
                    6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                    7: [[0, 3], [21, 26], 81],
                    8: [[0, 2], 11, 21, 22],
                    9: [[0, 3], [21, 23], 81],
                    10: [[0, 3], [21, 28], 81],
                    11: [[0, 3], [21, 29]],
                    12: [[0, 2], [21, 30], 81],
                    13: [[0, 2], 21, 22, 81, 82],
                    31: [0, 1, [22, 27], 30]
                },
                44: {
                    0: [0],
                    1: [[0, 7], [11, 16], 83, 84],
                    2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                    3: [0, 1, [3, 8]],
                    4: [[0, 4]],
                    5: [0, 1, [6, 15], 23, 82, 83],
                    6: [0, 1, [4, 8]],
                    7: [0, 1, [3, 5], 81, [83, 85]],
                    8: [[0, 4], 11, 23, 25, [81, 83]],
                    9: [[0, 3], 23, [81, 83]],
                    12: [[0, 3], [23, 26], 83, 84],
                    13: [[0, 3], [22, 24], 81],
                    14: [[0, 2], [21, 24], 26, 27, 81],
                    15: [[0, 2], 21, 23, 81],
                    16: [[0, 2], [21, 25]],
                    17: [[0, 2], 21, 23, 81],
                    18: [[0, 3], 21, 23, [25, 27], 81, 82],
                    19: [0],
                    20: [0],
                    51: [[0, 3], 21, 22],
                    52: [[0, 3], 21, 22, 24, 81],
                    53: [[0, 2], [21, 23], 81]
                },
                45: {
                    0: [0],
                    1: [[0, 9], [21, 27]],
                    2: [[0, 5], [21, 26]],
                    3: [[0, 5], 11, 12, [21, 32]],
                    4: [0, 1, [3, 6], 11, [21, 23], 81],
                    5: [[0, 3], 12, 21],
                    6: [[0, 3], 21, 81],
                    7: [[0, 3], 21, 22],
                    8: [[0, 4], 21, 81],
                    9: [[0, 3], [21, 24], 81],
                    10: [[0, 2], [21, 31]],
                    11: [[0, 2], [21, 23]],
                    12: [[0, 2], [21, 29], 81],
                    13: [[0, 2], [21, 24], 81],
                    14: [[0, 2], [21, 25], 81]
                },
                46: {
                    0: [0],
                    1: [0, 1, [5, 8]],
                    2: [0, 1],
                    3: [0, [21, 23]],
                    90: [[0, 3], [5, 7], [21, 39]]
                },
                50: {
                    0: [0],
                    1: [[0, 19]],
                    2: [0, [22, 38], [40, 43]],
                    3: [0, [81, 84]]
                },
                51: {
                    0: [0],
                    1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                    3: [[0, 4], 11, 21, 22],
                    4: [[0, 3], 11, 21, 22],
                    5: [[0, 4], 21, 22, 24, 25],
                    6: [0, 1, 3, 23, 26, [81, 83]],
                    7: [0, 1, 3, 4, [22, 27], 81],
                    8: [[0, 2], 11, 12, [21, 24]],
                    9: [[0, 4], [21, 23]],
                    10: [[0, 2], 11, 24, 25, 28],
                    11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                    13: [[0, 4], [21, 25], 81],
                    14: [[0, 2], [21, 25]],
                    15: [[0, 3], [21, 29]],
                    16: [[0, 3], [21, 23], 81],
                    17: [[0, 3], [21, 25], 81],
                    18: [[0, 3], [21, 27]],
                    19: [[0, 3], [21, 23]],
                    20: [[0, 2], 21, 22, 81],
                    32: [0, [21, 33]],
                    33: [0, [21, 38]],
                    34: [0, 1, [22, 37]]
                },
                52: {
                    0: [0],
                    1: [[0, 3], [11, 15], [21, 23], 81],
                    2: [0, 1, 3, 21, 22],
                    3: [[0, 3], [21, 30], 81, 82],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], [21, 27]],
                    6: [[0, 3], [21, 28]],
                    22: [0, 1, [22, 30]],
                    23: [0, 1, [22, 28]],
                    24: [0, 1, [22, 28]],
                    26: [0, 1, [22, 36]],
                    27: [[0, 2], 22, 23, [25, 32]]
                },
                53: {
                    0: [0],
                    1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                    3: [[0, 2], [21, 26], 28, 81],
                    4: [[0, 2], [21, 28]],
                    5: [[0, 2], [21, 24]],
                    6: [[0, 2], [21, 30]],
                    7: [[0, 2], [21, 24]],
                    8: [[0, 2], [21, 29]],
                    9: [[0, 2], [21, 27]],
                    23: [0, 1, [22, 29], 31],
                    25: [[0, 4], [22, 32]],
                    26: [0, 1, [21, 28]],
                    27: [0, 1, [22, 30]], 28: [0, 1, 22, 23],
                    29: [0, 1, [22, 32]],
                    31: [0, 2, 3, [22, 24]],
                    34: [0, [21, 23]],
                    33: [0, 21, [23, 25]],
                    35: [0, [21, 28]]
                },
                54: {
                    0: [0],
                    1: [[0, 2], [21, 27]],
                    21: [0, [21, 29], 32, 33],
                    22: [0, [21, 29], [31, 33]],
                    23: [0, 1, [22, 38]],
                    24: [0, [21, 31]],
                    25: [0, [21, 27]],
                    26: [0, [21, 27]]
                },
                61: {
                    0: [0],
                    1: [[0, 4], [11, 16], 22, [24, 26]],
                    2: [[0, 4], 22],
                    3: [[0, 4], [21, 24], [26, 31]],
                    4: [[0, 4], [22, 31], 81],
                    5: [[0, 2], [21, 28], 81, 82],
                    6: [[0, 2], [21, 32]],
                    7: [[0, 2], [21, 30]],
                    8: [[0, 2], [21, 31]],
                    9: [[0, 2], [21, 29]],
                    10: [[0, 2], [21, 26]]
                },
                62: {
                    0: [0],
                    1: [[0, 5], 11, [21, 23]],
                    2: [0, 1],
                    3: [[0, 2], 21],
                    4: [[0, 3], [21, 23]],
                    5: [[0, 3], [21, 25]],
                    6: [[0, 2], [21, 23]],
                    7: [[0, 2], [21, 25]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 24], 81, 82],
                    10: [[0, 2], [21, 27]],
                    11: [[0, 2], [21, 26]],
                    12: [[0, 2], [21, 28]],
                    24: [0, 21, [24, 29]],
                    26: [0, 21, [23, 30]],
                    29: [0, 1, [21, 27]],
                    30: [0, 1, [21, 27]]
                },
                63: {
                    0: [0],
                    1: [[0, 5], [21, 23]],
                    2: [0, 2, [21, 25]],
                    21: [0, [21, 23], [26, 28]],
                    22: [0, [21, 24]],
                    23: [0, [21, 24]],
                    25: [0, [21, 25]],
                    26: [0, [21, 26]],
                    27: [0, 1, [21, 26]],
                    28: [[0, 2], [21, 23]]
                },
                64: {
                    0: [0],
                    1: [0, 1, [4, 6], 21, 22, 81],
                    2: [[0, 3], 5, [21, 23]],
                    3: [[0, 3], [21, 24], 81],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], 21, 22]
                },
                65: {
                    0: [0],
                    1: [[0, 9], 21],
                    2: [[0, 5]],
                    21: [0, 1, 22, 23],
                    22: [0, 1, 22, 23],
                    23: [[0, 3], [23, 25], 27, 28],
                    28: [0, 1, [22, 29]],
                    29: [0, 1, [22, 29]],
                    30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]],
                    32: [0, 1, [21, 27]],
                    40: [0, 2, 3, [21, 28]],
                    42: [[0, 2], 21, [23, 26]],
                    43: [0, 1, [21, 26]],
                    90: [[0, 4]], 27: [[0, 2], 22, 23]
                },
                71: { 0: [0] },
                81: { 0: [0] },
                82: { 0: [0] }
            };
            
            var provincial  = parseInt(value.substr(0, 2), 10),
                prefectural = parseInt(value.substr(2, 2), 10),
                county      = parseInt(value.substr(4, 2), 10);
            
            if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
                return false;
            }
            var inRange  = false,
                rangeDef = adminDivisionCodes[provincial][prefectural];
            for (var i = 0; i < rangeDef.length; i++) {
                if (($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1])
                    || (!$.isArray(rangeDef[i]) && county === rangeDef[i]))
                {
                    inRange = true;
                    break;
                }
            }

            if (!inRange) {
                return false;
            }
            
            // Check date of birth
            var dob;
            if (value.length === 18) {
                dob = value.substr(6, 8);
            } else /* length == 15 */ { 
                dob = '19' + value.substr(6, 6);
            }
            var year  = parseInt(dob.substr(0, 4), 10),
                month = parseInt(dob.substr(4, 2), 10),
                day   = parseInt(dob.substr(6, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            
            // Check checksum (18-digit system only)
            if (value.length === 18) {
                var sum    = 0,
                    weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                for (i = 0; i < 17; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (12 - (sum % 11)) % 11;
                var checksum = (value.charAt(17).toUpperCase() !== 'X') ? parseInt(value.charAt(17), 10) : 10;
                return checksum === sum;
            }
            
            return true;
        },
        
        /**
         * Validate Czech national identification number (RC)
         * Examples:
         * - Valid: 7103192745, 991231123
         * - Invalid: 1103492745, 590312123
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (!/^\d{9,10}$/.test(value)) {
                return false;
            }
            var year  = 1900 + parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                day   = parseInt(value.substr(4, 2), 10);
            if (value.length === 9) {
                if (year >= 1980) {
                    year -= 100;
                }
                if (year > 1953) {
                    return false;
                }
            } else if (year < 1954) {
                year += 100;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Check that the birth date is not in the future
            if (value.length === 10) {
                var check = parseInt(value.substr(0, 9), 10) % 11;
                if (year < 1985) {
                    check = check % 10;
                }
                return (check + '' === value.substr(9, 1));
            }

            return true;
        },

        /**
         * Validate Danish Personal Identification number (CPR)
         * Examples:
         * - Valid: 2110625629, 211062-5629
         * - Invalid: 511062-5629
         *
         * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);

            switch (true) {
                case ('5678'.indexOf(value.charAt(6)) !== -1 && year >= 58):
                    year += 1800;
                    break;
                case ('0123'.indexOf(value.charAt(6)) !== -1):
                case ('49'.indexOf(value.charAt(6)) !== -1 && year >= 37):
                    year += 1900;
                    break;
                default:
                    year += 2000;
                    break;
            }

            return FormValidation.Helper.date(year, month, day);
        },

        /**
         * Validate Estonian Personal Identification Code (isikukood)
         * Examples:
         * - Valid: 37605030299
         *
         * @see http://et.wikipedia.org/wiki/Isikukood
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ee: function(value) {
            // Use the same format as Lithuanian Personal Code
            return this._lt(value);
        },

        /**
         * Validate Spanish personal identity code (DNI)
         * Support i) DNI (for Spanish citizens), ii) NIE (for foreign people)
         * and iii) CIF (for legal entities)
         *
         * Examples:
         * - Valid:
         *      i) 54362315K, 54362315-K
         *      ii) X2482300W, X-2482300W, X-2482300-W
         *      iii) A58818501, A-58818501
         * - Invalid:
         *      i) 54362315Z
         *      ii) X-2482300A
         *      iii) K58818501, G58818507
         *
         * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _es: function(value) {
            var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
            if (!isDNI && !isNIE && !isCIF) {
                return false;
            }

            value = value.replace(/-/g, '');
            var check;
            if (isDNI || isNIE) {
                var index = 'XYZ'.indexOf(value.charAt(0));
                if (index !== -1) {
                    // It is NIE number
                    value = index + value.substr(1) + '';
                }

                check = parseInt(value.substr(0, 8), 10);
                check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                return (check === value.substr(8, 1));
            } else {
                check = value.substr(1, 7);
                var letter  = value[0],
                    control = value.substr(-1),
                    sum     = 0;

                // The digits in the even positions are added to the sum directly.
                // The ones in the odd positions are multiplied by 2 and then added to the sum.
                // If the result of multiplying by 2 is 10 or higher, add the two digits
                // together and add that to the sum instead
                for (var i = 0; i < check.length; i++) {
                    if (i % 2 !== 0) {
                        sum += parseInt(check[i], 10);
                    } else {
                        var tmp = '' + (parseInt(check[i], 10) * 2);
                        sum += parseInt(tmp[0], 10);
                        if (tmp.length === 2) {
                            sum += parseInt(tmp[1], 10);
                        }
                    }
                }

                // The control digit is calculated from the last digit of the sum.
                // If that last digit is not 0, subtract it from 10
                var lastDigit = sum - (Math.floor(sum / 10) * 10);
                if (lastDigit !== 0) {
                    lastDigit = 10 - lastDigit;
                }
                
                if ('KQS'.indexOf(letter) !== -1) {
                    // If the CIF starts with a K, Q or S, the control digit must be a letter
                    return (control === 'JABCDEFGHI'[lastDigit]);
                } else if ('ABEH'.indexOf(letter) !== -1) {
                    // If it starts with A, B, E or H, it has to be a number
                    return (control === ('' + lastDigit));
                } else {
                    // In any other case, it doesn't matter
                    return (control === ('' + lastDigit) || control === 'JABCDEFGHI'[lastDigit]);
                }
            }
        },

        /**
         * Validate Finnish Personal Identity Code (HETU)
         * Examples:
         * - Valid: 311280-888Y, 131052-308T
         * - Invalid: 131052-308U, 310252-308Y
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
                return false;
            }
            var day       = parseInt(value.substr(0, 2), 10),
                month     = parseInt(value.substr(2, 2), 10),
                year      = parseInt(value.substr(4, 2), 10),
                centuries = {
                    '+': 1800,
                    '-': 1900,
                    'A': 2000
                };
            year = centuries[value.charAt(6)] + year;

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var individual = parseInt(value.substr(7, 3), 10);
            if (individual < 2) {
                return false;
            }
            var n = value.substr(0, 6) + value.substr(7, 3) + '';
            n = parseInt(n, 10);
            return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);
        },

        /**
         * Validate Croatian personal identification number (OIB)
         * Examples:
         * - Valid: 33392005961
         * - Invalid: 33392005962
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish Personal Public Service Number (PPS)
         * Examples:
         * - Valid: 6433435F, 6433435FT, 6433435FW, 6433435OA, 6433435IH, 1234567TW, 1234567FA
         * - Invalid: 6433435E, 6433435VH
         *
         * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // 2013 format
            if (value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))) {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            }
            // The old format
            else {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7));
            }
        },

        /**
         * Validate Iceland national identification number (Kennitala)
         * Examples:
         * - Valid: 120174-3399, 1201743399, 0902862349
         *
         * @see http://en.wikipedia.org/wiki/Kennitala
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _is: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day     = parseInt(value.substr(0, 2), 10),
                month   = parseInt(value.substr(2, 2), 10),
                year    = parseInt(value.substr(4, 2), 10),
                century = parseInt(value.charAt(9), 10);

            year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            // Validate the check digit
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            return (sum + '' === value.charAt(8));
        },

        /**
         * Validate Lithuanian Personal Code (Asmens kodas)
         * Examples:
         * - Valid: 38703181745
         * - Invalid: 38703181746, 78703181745, 38703421745
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
         * @see http://www.adomas.org/midi2007/pcode.html
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var gender  = parseInt(value.charAt(0), 10),
                year    = parseInt(value.substr(1, 2), 10),
                month   = parseInt(value.substr(3, 2), 10),
                day     = parseInt(value.substr(5, 2), 10),
                century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
            year = century * 100 + year;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Validate the check digit
            var sum    = 0,
                weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum !== 10) {
                return sum + '' === value.charAt(10);
            }

            // Re-calculate the check digit
            sum    = 0;
            weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            for (i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Latvian Personal Code (Personas kods)
         * Examples:
         * - Valid: 161175-19997, 16117519997
         * - Invalid: 161375-19997
         *
         * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');
            // Check birth date
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);
            year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Check personal code
            var sum    = 0,
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum + 1) % 11 % 10;
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Dutch national identification number (BSN)
         * Examples:
         * - Valid: 111222333, 941331490, 9413.31.490
         * - Invalid: 111252333
         *
         * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _nl: function(value) {
            while (value.length < 9) {
                value = '0' + value;
            }
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)) {
                return false;
            }
            value = value.replace(/\./g, '');
            if (parseInt(value, 10) === 0) {
                return false;
            }
            var sum    = 0,
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += (9 - i) * parseInt(value.charAt(i), 10);
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(length - 1));
        },
        
        /**
         * Validate Poland citizen number (PESEL)
         * 
         * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
         * @see http://en.wikipedia.org/wiki/PESEL
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                length = value.length,
                weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(value.charAt(i), 10);
            }
            sum = sum % 10;
            if (sum === 0) {
                sum = 10;
            }
            sum = 10 - sum;

            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Romanian numerical personal code (CNP)
         * Examples:
         * - Valid: 1630615123457, 1800101221144
         * - Invalid: 8800101221144, 1632215123457, 1630615123458
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (!/^[0-9]{13}$/.test(value)) {
                return false;
            }
            var gender = parseInt(value.charAt(0), 10);
            if (gender === 0 || gender === 7 || gender === 8) {
                return false;
            }

            // Determine the date of birth
            var year      = parseInt(value.substr(1, 2), 10),
                month     = parseInt(value.substr(3, 2), 10),
                day       = parseInt(value.substr(5, 2), 10),
                // The year of date is determined base on the gender
                centuries = {
                    '1': 1900,  // Male born between 1900 and 1999
                    '2': 1900,  // Female born between 1900 and 1999
                    '3': 1800,  // Male born between 1800 and 1899
                    '4': 1800,  // Female born between 1800 and 1899
                    '5': 2000,  // Male born after 2000
                    '6': 2000   // Female born after 2000
                };
            if (day > 31 && month > 12) {
                return false;
            }
            if (gender !== 9) {
                year = centuries[gender + ''] + year;
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
            }

            // Validate the check digit
            var sum    = 0,
                weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 1;
            }
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Swedish personal identity number (personnummer)
         * Examples:
         * - Valid: 8112289874, 811228-9874, 811228+9874
         * - Invalid: 811228-9873
         *
         * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _se: function(value) {
            if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/[^0-9]/g, '');

            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovak national identifier number (RC)
         * Examples:
         * - Valid: 7103192745, 991231123
         * - Invalid: 7103192746, 1103492745
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sk: function(value) {
            // Slovakia uses the same format as Czech Republic
            return this._cz(value);
        },

        /**
         * Validate San Marino citizen number
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sm: function(value) {
            return /^\d{5}$/.test(value);
        },

        /**
         * Validate Thailand citizen number
         * Examples:
         * - Valid: 7145620509547, 3688699975685, 2368719339716
         * - Invalid: 1100800092310
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _th: function(value) {
            if (value.length !== 13) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < 12; i++) {
                sum += parseInt(value.charAt(i), 10) * (13 - i);
            }

            return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
        },

        /**
         * Validate South African ID
         * Example:
         * - Valid: 8001015009087
         * - Invalid: 8001015009287, 8001015009086
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _za: function(value) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
                return false;
            }
            var year        = parseInt(value.substr(0, 2), 10),
                currentYear = new Date().getFullYear() % 100,
                month       = parseInt(value.substr(2, 2), 10),
                day         = parseInt(value.substr(4, 2), 10);
            year = (year >= currentYear) ? (year + 1900) : (year + 2000);

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            identical: {
                'default': 'Please enter the same value'
            }
        }
    });

    FormValidation.Validator.identical = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.onLiveChange(compareWith, 'live_identical', function() {
                var status = validator.getStatus($field, 'identical');
                if (status !== validator.STATUS_NOT_VALIDATED) {
                    validator.revalidateField($field);
                }
            });
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.offLiveChange(compareWith, 'live_identical');
        },

        /**
         * Check if input value equals to value of particular one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value       = validator.getFieldValue($field, 'identical'),
                compareWith = validator.getFieldElements(options.field);
            if (compareWith === null || compareWith.length === 0) {
                return true;
            }

            var compareValue = validator.getFieldValue(compareWith, 'identical');
            if (value === compareValue) {
                validator.updateStatus(compareWith, validator.STATUS_VALID, 'identical');
                return true;
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imei: {
                'default': 'Please enter a valid IMEI number'
            }
        }
    });

    FormValidation.Validator.imei = {
        /**
         * Validate IMEI (International Mobile Station Equipment Identity)
         * Examples:
         * - Valid: 35-209900-176148-1, 35-209900-176148-23, 3568680000414120, 490154203237518
         * - Invalid: 490154203237517
         *
         * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'imei');
            if (value === '') {
                return true;
            }

            switch (true) {
                case /^\d{15}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):
                    value = value.replace(/[^0-9]/g, '');
                    return FormValidation.Helper.luhn(value);

                case /^\d{14}$/.test(value):
                case /^\d{16}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imo: {
                'default': 'Please enter a valid IMO number'
            }
        }
    });

    FormValidation.Validator.imo = {
        /**
         * Validate IMO (International Maritime Organization)
         * Examples:
         * - Valid: IMO 8814275, IMO 9176187
         * - Invalid: IMO 8814274
         *
         * @see http://en.wikipedia.org/wiki/IMO_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'imo');
            if (value === '') {
                return true;
            }

            if (!/^IMO \d{7}$/i.test(value)) {
                return false;
            }
            
            // Grab just the digits
            var sum    = 0,
                digits = value.replace(/^.*(\d{7})$/, '$1');
            
            // Go over each char, multiplying by the inverse of it's position
            // IMO 9176187
            // (9 * 7) + (1 * 6) + (7 * 5) + (6 * 4) + (1 * 3) + (8 * 2) = 147
            // Take the last digit of that, that's the check digit (7)
            for (var i = 6; i >= 1; i--) {
                sum += (digits.slice((6 - i), -i) * (i + 1));
            }

            return sum % 10 === parseInt(digits.charAt(6), 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            integer: {
                'default': 'Please enter a valid number'
            }
        }
    });

    FormValidation.Validator.integer = {
        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') === undefined || $field.attr('step') % 1 === 0);
        },

        /**
         * Return true if the input value is an integer
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, 'integer');
            if (value === '') {
                return true;
            }
            return /^(?:-?(?:0|[1-9][0-9]*))$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ip: {
                'default': 'Please enter a valid IP address',
                ipv4: 'Please enter a valid IPv4 address',
                ipv6: 'Please enter a valid IPv6 address'
            }
        }
    });

    FormValidation.Validator.ip = {
        html5Attributes: {
            message: 'message',
            ipv4: 'ipv4',
            ipv6: 'ipv6'
        },

        /**
         * Return true if the input value is a IP address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - ipv4: Enable IPv4 validator, default to true
         * - ipv6: Enable IPv6 validator, default to true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ip');
            if (value === '') {
                return true;
            }
            options = $.extend({}, { ipv4: true, ipv6: true }, options);

            var locale    = validator.getLocale(),
                ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                valid     = false,
                message;

            switch (true) {
                case (options.ipv4 && !options.ipv6):
                    valid   = ipv4Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv4;
                    break;

                case (!options.ipv4 && options.ipv6):
                    valid   = ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv6;
                    break;

                case (options.ipv4 && options.ipv6):
                /* falls through */
                default:
                    valid   = ipv4Regex.test(value) || ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip['default'];
                    break;
            }

            return {
                valid: valid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isbn: {
                'default': 'Please enter a valid ISBN number'
            }
        }
    });

    FormValidation.Validator.isbn = {
        /**
         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
         * Examples:
         * - Valid:
         * ISBN 10: 99921-58-10-7, 9971-5-0210-0, 960-425-059-0, 80-902734-1-6, 85-359-0277-5, 1-84356-028-3, 0-684-84328-5, 0-8044-2957-X, 0-85131-041-9, 0-943396-04-2, 0-9752298-0-X
         * ISBN 13: 978-0-306-40615-7
         * - Invalid:
         * ISBN 10: 99921-58-10-6
         * ISBN 13: 978-0-306-40615-6
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'isbn');
            if (value === '') {
                return true;
            }

            // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^\d{9}[\dX]$/.test(value):
                case (value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN10';
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(value):
                case (value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN13';
                    break;
                default:
                    return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0,
                i,
                checksum;

            switch (type) {
                case 'ISBN10':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(chars[i], 10) * (10 - i);
                    }
                    checksum = 11 - (sum % 11);
                    if (checksum === 11) {
                        checksum = 0;
                    } else if (checksum === 10) {
                        checksum = 'X';
                    }
                    return (checksum + '' === chars[length - 1]);

                case 'ISBN13':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += ((i % 2 === 0) ? parseInt(chars[i], 10) : (parseInt(chars[i], 10) * 3));
                    }
                    checksum = 10 - (sum % 10);
                    if (checksum === 10) {
                        checksum = '0';
                    }
                    return (checksum + '' === chars[length - 1]);

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isin: {
                'default': 'Please enter a valid ISIN number'
            }
        }
    });

    FormValidation.Validator.isin = {
        // Available country codes
        // See http://isin.net/country-codes/
        COUNTRY_CODES: 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW',

        /**
         * Validate an ISIN (International Securities Identification Number)
         * Examples:
         * - Valid: US0378331005, AU0000XVGZA3, GB0002634946
         * - Invalid: US0378331004, AA0000XVGZA3
         *
         * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'isin');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            var regex = new RegExp('^(' + this.COUNTRY_CODES + ')[0-9A-Z]{10}$');
            if (!regex.test(value)) {
                return false;
            }

            var converted = '',
                length    = value.length;
            // Convert letters to number
            for (var i = 0; i < length - 1; i++) {
                var c = value.charCodeAt(i);
                converted += ((c > 57) ? (c - 55).toString() : value.charAt(i));
            }

            var digits = '',
                n      = converted.length,
                group  = (n % 2 !== 0) ? 0 : 1;
            for (i = 0; i < n; i++) {
                digits += (parseInt(converted[i], 10) * ((i % 2) === group ? 2 : 1) + '');
            }

            var sum = 0;
            for (i = 0; i < digits.length; i++) {
                sum += parseInt(digits.charAt(i), 10);
            }
            sum = (10 - (sum % 10)) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ismn: {
                'default': 'Please enter a valid ISMN number'
            }
        }
    });

    FormValidation.Validator.ismn = {
        /**
         * Validate ISMN (International Standard Music Number)
         * Examples:
         * - Valid: M230671187, 979-0-0601-1561-5, 979 0 3452 4680 5, 9790060115615
         * - Invalid: 9790060115614
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ismn');
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^M\d{9}$/.test(value):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN10';
                    break;
                case /^9790\d{9}$/.test(value):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN13';
                    break;
                default:
                    return false;
            }

            if ('ISMN10' === type) {
                value = '9790' + value.substr(1);
            }

            // Replace all special characters except digits
            value = value.replace(/[^0-9]/gi, '');
            var length = value.length,
                sum    = 0,
                weight = [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return (sum + '' === value.charAt(length - 1));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            issn: {
                'default': 'Please enter a valid ISSN number'
            }
        }
    });

    FormValidation.Validator.issn = {
        /**
         * Validate ISSN (International Standard Serial Number)
         * Examples:
         * - Valid: 0378-5955, 0024-9319, 0032-1478
         * - Invalid: 0032-147X
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'issn');
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            if (!/^\d{4}\-\d{3}[\dX]$/.test(value)) {
                return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0;

            if (chars[7] === 'X') {
                chars[7] = 10;
            }
            for (var i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return (sum % 11 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            lessThan: {
                'default': 'Please enter a value less than or equal to %s',
                notInclusive: 'Please enter a value less than %s'
            }
        }
    });

    FormValidation.Validator.lessThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                max  = $field.attr('max');
            if (max && type !== 'date') {
                return {
                    value: max
                };
            }

            return false;
        },

        /**
         * Return true if the input value is less than or equal to given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: The number used to compare to. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'lessThan');
            if (value === '') {
                return true;
            }
            
			value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

            value = parseFloat(value);
            return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value <= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan['default'], compareTo)
                    }
                    : {
                        valid: value < compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            mac: {
                'default': 'Please enter a valid MAC address'
            }
        }
    });

    FormValidation.Validator.mac = {
        /**
         * Return true if the input value is a MAC address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'mac');
            if (value === '') {
                return true;
            }

            return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            meid: {
                'default': 'Please enter a valid MEID number'
            }
        }
    });

    FormValidation.Validator.meid = {
        /**
         * Validate MEID (Mobile Equipment Identifier)
         * Examples:
         * - Valid: 293608736500703710, 29360-87365-0070-3710, AF0123450ABCDE, AF-012345-0ABCDE
         * - Invalid: 2936087365007037101
         *
         * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'meid');
            if (value === '') {
                return true;
            }

            switch (true) {
                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{15}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{19}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value):
                    // Grab the check digit
                    var cd = value.charAt(value.length - 1);

                    // Strip any non-hex chars
                    value = value.replace(/[- ]/g, '');

                    // If it's all digits, luhn base 10 is used
                    if (value.match(/^\d*$/i)) {
                        return FormValidation.Helper.luhn(value);
                    }

                    // Strip the check digit
                    value = value.slice(0, -1);

                    // Get every other char, and double it
                    var cdCalc = '';
                    for (var i = 1; i <= 13; i += 2) {
                        cdCalc += (parseInt(value.charAt(i), 16) * 2).toString(16);
                    }

                    // Get the sum of each char in the string
                    var sum = 0;
                    for (i = 0; i < cdCalc.length; i++) {
                        sum += parseInt(cdCalc.charAt(i), 16);
                    }

                    // If the last digit of the calc is 0, the check digit is 0
                    return (sum % 10 === 0)
                            ? (cd === '0')
                            // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
                            // Double it and turn it into a hex char
                            : (cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16));

                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{14}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{18}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            notEmpty: {
                'default': 'Please enter a value'
            }
        }
    });

    FormValidation.Validator.notEmpty = {
        enableByHtml5: function($field) {
            var required = $field.attr('required') + '';
            return ('required' === required || 'true' === required);
        },

        /**
         * Check if input value is empty or not
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var type = $field.attr('type');
            if ('radio' === type || 'checkbox' === type) {
                var ns = validator.getNamespace();
                return validator
                            .getFieldElements($field.attr('data-' + ns + '-field'))
                            .filter(':checked')
                            .length > 0;
            }

            if ('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return true;
            }

            var value = validator.getFieldValue($field, 'notEmpty');
            return $.trim(value) !== '';
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            numeric: {
                'default': 'Please enter a valid float number'
            }
        }
    });

    FormValidation.Validator.numeric = {
        html5Attributes: {
            message: 'message',
            separator: 'separator'
        },

        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') !== undefined) && ($field.attr('step') % 1 !== 0);
        },

        /**
         * Validate decimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - separator: The decimal separator. Can be "." (default), ","
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, 'numeric');
            if (value === '') {
                return true;
            }
            var separator = options.separator || '.';
            if (separator !== '.') {
                value = value.replace(separator, '.');
            }

            return !isNaN(parseFloat(value)) && isFinite(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            phone: {
                'default': 'Please enter a valid phone number',
                country: 'Please enter a valid phone number in %s',
                countries: {
                    AE: 'United Arab Emirates',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IN: 'India',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PK: 'Pakistan',
                    RO: 'Romania',
                    RU: 'Russia',
                    SK: 'Slovakia',
                    TH: 'Thailand',
                    US: 'USA',
                    VE: 'Venezuela'
                }
            }
        }
    });

    FormValidation.Validator.phone = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // The supported countries
        COUNTRY_CODES: ['AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'],

        /**
         * Return true if the input value contains a valid phone number for the country
         * selected in the options
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO-3166 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'phone');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = true;
            switch (country.toUpperCase()) {
                case 'AE':
                    // http://regexr.com/39tak
                    value   = $.trim(value);
                    isValid = (/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/).test(value);
                    break;
                    
                case 'BG':
                    // https://regex101.com/r/yE6vN4/1
                    // See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
                    value   = value.replace(/\+|\s|-|\/|\(|\)/gi,'');
                    isValid = (/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/).test(value);
                    break;

                case 'BR':
                    // http://regexr.com/399m1
                    value   = $.trim(value);
                    isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(value);
                    break;

                case 'CN':
                    // http://regexr.com/39dq4
                    value   = $.trim(value);
                    isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(value);
                    break;

                case 'CZ':
                    // http://regexr.com/39hhl
                    isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'DE':
                    // http://regexr.com/39pkg
                    value   = $.trim(value);
                    isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(value);
                    break;

                case 'DK':
                    // Mathing DK phone numbers with country code in 1 of 3 formats and an
                    // 8 digit phone number not starting with a 0 or 1. Can have 1 space
                    // between each character except inside the country code.
                    // http://regex101.com/r/sS8fO4/1
                    value   = $.trim(value);
                    isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(value);
                    break;

                case 'ES':
                    // http://regex101.com/r/rB9mA9/1
                    // Telephone numbers in Spain go like this:
                    //     9: Landline phones and special prefixes.
                    //     6, 7: Mobile phones.
                    //     5: VoIP lines.
                    //     8: Premium-rate services.
                    // There are also special 5-digit and 3-digit numbers, but
                    // maybe it would be overkill to include them all.
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/).test(value);
                    break;

                case 'FR':
                    // http://regexr.com/39a2p
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value);
                    break;

            	case 'GB':
                    // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
                    // http://regexr.com/38uhv
                    value   = $.trim(value);
                    isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(value);
                    break;
            
                case 'IN':
                    // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
                    // http://regex101.com/r/qL6eZ5/1
                    // May begin with +91. Supports mobile and land line numbers
                    value   = $.trim(value);
                    isValid = (/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/).test(value);
                    break;
                    
                case 'MA':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
                    // http://regexr.com/399n8
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(value);
                    break;
                
                case 'NL':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
                    // http://regexr.com/3aevr
                    value   = $.trim(value);
                    isValid = (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm).test(value);
                    break;
                
                case 'PK':
                    // http://regex101.com/r/yH8aV9/2
                    value   = $.trim(value);
                    isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(value);
                    break;

                case 'RO':
                    // All mobile network and land line
                    // http://regexr.com/39fv1
                    isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(value);
                    break;

                case 'RU':
                    // http://regex101.com/r/gW7yT5/5
                    isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(value);
                    break;

                case 'SK':
                    // http://regexr.com/3a95f
                    isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'TH':
                    // http://regex101.com/r/vM5mZ4/2
                    isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(value);
                    break;

                case 'VE':
                    // http://regex101.com/r/eM2yY0/6
                    value   = $.trim(value);
                    isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(value);
                    break;
  
                case 'US':
                /* falls through */
                default:
                    // Make sure US phone numbers have 10 digits
                    // May start with 1, +1, or 1-; should discard
                    // Area code may be delimited with (), & sections may be delimited with . or -
                    // http://regexr.com/38mqi
                    isValid = (/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/).test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].phone.country, FormValidation.I18n[locale].phone.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            regexp: {
                'default': 'Please enter a value matching the pattern'
            }
        }
    });

    FormValidation.Validator.regexp = {
        html5Attributes: {
            message: 'message',
            regexp: 'regexp'
        },

        enableByHtml5: function($field) {
            var pattern = $field.attr('pattern');
            if (pattern) {
                return {
                    regexp: pattern
                };
            }

            return false;
        },

        /**
         * Check if the element value matches given regular expression
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - regexp: The regular expression you need to check
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'regexp');
            if (value === '') {
                return true;
            }

            var regexp = ('string' === typeof options.regexp) ? new RegExp(options.regexp) : options.regexp;
            return regexp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            remote: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.remote = {
        html5Attributes: {
            crossdomain: 'crossDomain',
            data: 'data',
            datatype: 'dataType',
            delay: 'delay',
            message: 'message',
            name: 'name',
            type: 'type',
            url: 'url',
            validkey: 'validKey'
        },

        /**
         * Destroy the timer when destroying the FormValidation (using validator.destroy() method)
         */
        destroy: function(validator, $field, options) {
            var ns    = validator.getNamespace(),
                timer = $field.data(ns + '.remote.timer');
            if (timer) {
                clearTimeout(timer);
                $field.removeData(ns + '.remote.timer');
            }
        },

        /**
         * Request a remote server to check the input value
         *
         * @param {FormValidation.Base} validator Plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - crossDomain {Boolean} [optional]
         * - data {Object|Function} [optional]: By default, it will take the value
         *  {
         *      <fieldName>: <fieldValue>
         *  }
         * - dataType {String} [optional]: The type of data which is returned by remote server.
         * It can be json (default), text, script
         * - delay {Number} [optional]
         * - headers {String[]} [optional]: Additional headers
         * - message {String} [optional]: The invalid message
         * - name {String} [optional]: Override the field name for the request.
         * - type {String} [optional] Can be GET or POST (default)
         * - url {String|Function}
         * - validKey {String} [optional]: The valid key. It's "valid" by default
         * This is useful when connecting to external remote server or APIs provided by 3rd parties
         * @returns {Deferred}
         */
        validate: function(validator, $field, options) {
            var ns    = validator.getNamespace(),
                value = validator.getFieldValue($field, 'remote'),
                dfd   = new $.Deferred();
            if (value === '') {
                dfd.resolve($field, 'remote', { valid: true });
                return dfd;
            }
            var name     = $field.attr('data-' + ns + '-field'),
                data     = options.data || {},
                url      = options.url,
                validKey = options.validKey || 'valid';

            // Support dynamic data
            if ('function' === typeof data) {
                data = data.call(this, validator);
            }

            // Parse string data from HTML5 attribute
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }

            // Support dynamic url
            if ('function' === typeof url) {
                url = url.call(this, validator);
            }

            data[options.name || name] = value;

            var ajaxOptions = {
                data: data,
                dataType: options.dataType || 'json',
                headers: options.headers || {},
                type: options.type || 'GET',
                url: url
            };
            if (options.crossDomain !== null) {
                ajaxOptions.crossDomain = (options.crossDomain === true || options.crossDomain === 'true');
            }

            function runCallback() {
                var xhr = $.ajax(ajaxOptions);

                xhr
                    .success(function(response) {
                        response.valid = (response[validKey] === true || response[validKey] === 'true')
                                        ? true
                                        : (response[validKey] === false || response[validKey] === 'false' ? false : null);
                        dfd.resolve($field, 'remote', response);
                    })
                    .error(function(response) {
                        dfd.resolve($field, 'remote', {
                            valid: false
                        });
                    });

                dfd.fail(function() {
                    xhr.abort();
                });

                return dfd;
            }
            
            if (options.delay) {
                // Since the form might have multiple fields with the same name
                // I have to attach the timer to the field element
                if ($field.data(ns + '.remote.timer')) {
                    clearTimeout($field.data(ns + '.remote.timer'));
                }

                $field.data(ns + '.remote.timer', setTimeout(runCallback, options.delay));
                return dfd;
            } else {
                return runCallback();
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            rtn: {
                'default': 'Please enter a valid RTN number'
            }
        }
    });

    FormValidation.Validator.rtn = {
        /**
         * Validate a RTN (Routing transit number)
         * Examples:
         * - Valid: 021200025, 789456124
         *
         * @see http://en.wikipedia.org/wiki/Routing_transit_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'rtn');
            if (value === '') {
                return true;
            }

            if (!/^\d{9}$/.test(value)) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < value.length; i += 3) {
                sum += parseInt(value.charAt(i),     10) * 3
                    +  parseInt(value.charAt(i + 1), 10) * 7
                    +  parseInt(value.charAt(i + 2), 10);
            }
            return (sum !== 0 && sum % 10 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            sedol: {
                'default': 'Please enter a valid SEDOL number'
            }
        }
    });

    FormValidation.Validator.sedol = {
        /**
         * Validate a SEDOL (Stock Exchange Daily Official List)
         * Examples:
         * - Valid: 0263494, B0WNLY7
         *
         * @see http://en.wikipedia.org/wiki/SEDOL
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'sedol');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [1, 3, 1, 7, 3, 9, 1],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
	            sum += weight[i] * parseInt(value.charAt(i), 36);
	        }
	        sum = (10 - sum % 10) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siren: {
				'default': 'Please enter a valid SIREN number'
			}
		}
    });

	FormValidation.Validator.siren = {
		/**
		 * Check if a string is a siren number
		 *
		 * @param {FormValidation.Base} validator The validator plugin instance
		 * @param {jQuery} $field Field element
		 * @param {Object} options Consist of key:
         * - message: The invalid message
		 * @returns {Boolean}
		 */
		validate: function(validator, $field, options) {
			var value = validator.getFieldValue($field, 'siren');
			if (value === '') {
				return true;
			}

            if (!/^\d{9}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siret: {
				'default': 'Please enter a valid SIRET number'
			}
		}
    });

	FormValidation.Validator.siret = {
        /**
         * Check if a string is a siret number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
		validate: function(validator, $field, options) {
			var value = validator.getFieldValue($field, 'siret');
			if (value === '') {
				return true;
			}

			var sum    = 0,
                length = value.length,
                tmp;
			for (var i = 0; i < length; i++) {
                tmp = parseInt(value.charAt(i), 10);
				if ((i % 2) === 0) {
					tmp = tmp * 2;
					if (tmp > 9) {
						tmp -= 9;
					}
				}
				sum += tmp;
			}
			return (sum % 10 === 0);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            step: {
                'default': 'Please enter a valid step of %s'
            }
        }
    });

    FormValidation.Validator.step = {
        html5Attributes: {
            message: 'message',
            base: 'baseValue',
            step: 'step'
        },

        /**
         * Return true if the input value is valid step one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - baseValue: The base value
         * - step: The step
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'step');
            if (value === '') {
                return true;
            }

            options = $.extend({}, { baseValue: 0, step: 1 }, options);
            value   = parseFloat(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var round = function(x, precision) {
                    var m = Math.pow(10, precision);
                    x = x * m;
                    var sign   = (x > 0) | -(x < 0),
                        isHalf = (x % 1 === 0.5 * sign);
                    if (isHalf) {
                        return (Math.floor(x) + (sign > 0)) / m;
                    } else {
                        return Math.round(x) / m;
                    }
                },
                floatMod = function(x, y) {
                    if (y === 0.0) {
                        return 1.0;
                    }
                    var dotX      = (x + '').split('.'),
                        dotY      = (y + '').split('.'),
                        precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
                    return round(x - y * Math.floor(x / y), precision);
                };

            var locale = validator.getLocale(),
                mod    = floatMod(value - options.baseValue, options.step);
            return {
                valid: mod === 0.0 || mod === options.step,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].step['default'], [options.step])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringCase: {
                'default': 'Please enter only lowercase characters',
                upper: 'Please enter only uppercase characters'
            }
        }
    });

    FormValidation.Validator.stringCase = {
        html5Attributes: {
            message: 'message',
            'case': 'case'
        },

        /**
         * Check if a string is a lower or upper case one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - case: Can be 'lower' (default) or 'upper'
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'stringCase');
            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                stringCase = (options['case'] || 'lower').toLowerCase();
            return {
                valid: ('upper' === stringCase) ? value === value.toUpperCase() : value === value.toLowerCase(),
                message: options.message || (('upper' === stringCase) ? FormValidation.I18n[locale].stringCase.upper : FormValidation.I18n[locale].stringCase['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringLength: {
                'default': 'Please enter a value with valid length',
                less: 'Please enter less than %s characters',
                more: 'Please enter more than %s characters',
                between: 'Please enter value between %s and %s characters long'
            }
        }
    });

    FormValidation.Validator.stringLength = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            trim: 'trim',
            utf8bytes: 'utf8Bytes'
        },

        enableByHtml5: function($field) {
            var options   = {},
                maxLength = $field.attr('maxlength'),
                minLength = $field.attr('minlength');
            if (maxLength) {
                options.max = parseInt(maxLength, 10);
            }
            if (minLength) {
                options.min = parseInt(minLength, 10);
            }

            return $.isEmptyObject(options) ? false : options;
        },

        /**
         * Check if the length of element value is less or more than given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * - trim: Indicate the length will be calculated after trimming the value or not. It is false, by default
         * - utf8bytes: Evaluate string length in UTF-8 bytes, default to false
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'stringLength');
            if (options.trim === true || options.trim === 'true') {
                value = $.trim(value);
            }

            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                min        = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max        = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
                utf8Length = function(str) {
                                 var s = str.length;
                                 for (var i = str.length - 1; i >= 0; i--) {
                                     var code = str.charCodeAt(i);
                                     if (code > 0x7f && code <= 0x7ff) {
                                         s++;
                                     } else if (code > 0x7ff && code <= 0xffff) {
                                         s += 2;
                                     }
                                     if (code >= 0xDC00 && code <= 0xDFFF) {
                                         i--;
                                     }
                                 }
                                 return s;
                             },
                length     = options.utf8Bytes ? utf8Length(value) : value.length,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].stringLength['default'];

            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.more, parseInt(min, 10));
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.less, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return {
                valid: isValid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uri: {
                'default': 'Please enter a valid URI'
            }
        }
    });

    FormValidation.Validator.uri = {
        html5Attributes: {
            message: 'message',
            allowlocal: 'allowLocal',
            allowemptyprotocol: 'allowEmptyProtocol',
            protocol: 'protocol'
        },

        enableByHtml5: function($field) {
            return ('url' === $field.attr('type'));
        },

        /**
         * Return true if the input value is a valid URL
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * - message: The error message
         * - allowLocal: Allow the private and local network IP. Default to false
         * - allowEmptyProtocol: Allow the URI without protocol. Default to false
         * - protocol: The protocols, separated by a comma. Default to "http, https, ftp"
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'uri');
            if (value === '') {
                return true;
            }

            // Credit to https://gist.github.com/dperini/729294
            //
            // Regular Expression for URL validation
            //
            // Author: Diego Perini
            // Updated: 2010/12/05
            //
            // the regular expression composed & commented
            // could be easily tweaked for RFC compliance,
            // it was expressly modified to fit & satisfy
            // these test for an URL shortener:
            //
            //   http://mathiasbynens.be/demo/url-regex
            //
            // Notes on possible differences from a standard/generic validation:
            //
            // - utf-8 char class take in consideration the full Unicode range
            // - TLDs are mandatory unless `allowLocal` is true
            // - protocols have been restricted to ftp, http and https only as requested
            //
            // Changes:
            //
            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
            //   first and last IP address of each class is considered invalid
            //   (since they are broadcast/network addresses)
            //
            // - Added exclusion of private, reserved and/or local networks ranges
            //   unless `allowLocal` is true
            //
            // - Added possibility of choosing a custom protocol
            //
            // - Add option to validate without protocol
            //
            var allowLocal         = options.allowLocal === true || options.allowLocal === 'true',
                allowEmptyProtocol = options.allowEmptyProtocol === true || options.allowEmptyProtocol === 'true',
                protocol           = (options.protocol || 'http, https, ftp').split(',').join('|').replace(/\s/g, ''),
                urlExp             = new RegExp(
                    "^" +
                    // protocol identifier
                    "(?:(?:" + protocol + ")://)" +
                    // allow empty protocol
                    (allowEmptyProtocol ? '?' : '') +
                    // user:pass authentication
                    "(?:\\S+(?::\\S*)?@)?" +
                    "(?:" +
                    // IP address exclusion
                    // private & local networks
                    (allowLocal
                        ? ''
                        : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                           "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                           "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broadcast addresses
                    // (first & last IP address of each class)
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                    "|" +
                    // host name
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                    // domain name
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                    // TLD identifier
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    // Allow intranet sites (no TLD) if `allowLocal` is true
                    (allowLocal ? '?' : '') +
                    ")" +
                    // port number
                    "(?::\\d{2,5})?" +
                    // resource path
                    "(?:/[^\\s]*)?" +
                    "$", "i"
                );

            return urlExp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uuid: {
                'default': 'Please enter a valid UUID number',
                version: 'Please enter a valid UUID version %s number'
            }
        }
    });

    FormValidation.Validator.uuid = {
        html5Attributes: {
            message: 'message',
            version: 'version'
        },

        /**
         * Return true if and only if the input value is a valid UUID string
         *
         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - version: Can be 3, 4, 5, null
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'uuid');
            if (value === '') {
                return true;
            }

            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
            var locale   = validator.getLocale(),
                patterns = {
                    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                },
                version = options.version ? (options.version + '') : 'all';
            return {
                valid: (null === patterns[version]) ? true : patterns[version].test(value),
                message: options.version
                            ? FormValidation.Helper.format(options.message || FormValidation.I18n[locale].uuid.version, options.version)
                            : (options.message || FormValidation.I18n[locale].uuid['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vat: {
                'default': 'Please enter a valid VAT number',
                country: 'Please enter a valid VAT number in %s',
                countries: {
                    AT: 'Austria',
                    BE: 'Belgium',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GR: 'Greek',
                    EL: 'Greek',
                    HU: 'Hungary',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    IT: 'Italy',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MT: 'Malta',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    VE: 'Venezuela',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.vat = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU',
            'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE',
            'ZA'
        ],

        /**
         * Validate an European VAT number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'vat');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method  = ['_', country.toLowerCase()].join('');
            return this[method](value)
                ? true
                : {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].vat.country, FormValidation.I18n[locale].vat.countries[country.toUpperCase()])
                };
        },

        // VAT validators

        /**
         * Validate Austrian VAT number
         * Example:
         * - Valid: ATU13585627
         * - Invalid: ATU13585626
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _at: function(value) {
            if (/^ATU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^U[0-9]{8}$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [1, 2, 1, 2, 1, 2, 1],
                temp   = 0;
            for (var i = 0; i < 7; i++) {
                temp = parseInt(value.charAt(i), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
            }

            sum = 10 - (sum + 4) % 10;
            if (sum === 10) {
                sum = 0;
            }

            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Belgian VAT number
         * Example:
         * - Valid: BE0428759497
         * - Invalid: BE431150351
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _be: function(value) {
            if (/^BE[0]{0,1}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0]{0,1}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 9) {
                value = '0' + value;
            }
            if (value.substr(1, 1) === '0') {
                return false;
            }

            var sum = parseInt(value.substr(0, 8), 10) + parseInt(value.substr(8, 2), 10);
            return (sum % 97 === 0);
        },

        /**
         * Validate Bulgarian VAT number
         * Example:
         * - Valid: BG175074752,
         * BG7523169263, BG8032056031,
         * BG7542011030,
         * BG7111042925
         * - Invalid: BG175074753, BG7552A10004, BG7111042922
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (/^BG[0-9]{9,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9,10}$/.test(value)) {
                return false;
            }

            var sum = 0, i = 0;

            // Legal entities
            if (value.length === 9) {
                for (i = 0; i < 8; i++) {
                    sum += parseInt(value.charAt(i), 10) * (i + 1);
                }
                sum = sum % 11;
                if (sum === 10) {
                    sum = 0;
                    for (i = 0; i < 8; i++) {
                        sum += parseInt(value.charAt(i), 10) * (i + 3);
                    }
                }
                sum = sum % 10;
                return (sum + '' === value.substr(8));
            }
            // Physical persons, foreigners and others
            else if (value.length === 10) {
                // Validate Bulgarian national identification numbers
                var egn = function(value) {
                        // Check the birth date
                        var year  = parseInt(value.substr(0, 2), 10) + 1900,
                            month = parseInt(value.substr(2, 2), 10),
                            day   = parseInt(value.substr(4, 2), 10);
                        if (month > 40) {
                            year += 100;
                            month -= 40;
                        } else if (month > 20) {
                            year -= 100;
                            month -= 20;
                        }

                        if (!FormValidation.Helper.date(year, month, day)) {
                            return false;
                        }

                        var sum    = 0,
                            weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = (sum % 11) % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Validate Bulgarian personal number of a foreigner
                    pnf = function(value) {
                        var sum    = 0,
                            weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = sum % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Finally, consider it as a VAT number
                    vat = function(value) {
                        var sum    = 0,
                            weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = 11 - sum % 11;
                        if (sum === 10) {
                            return false;
                        }
                        if (sum === 11) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(9, 1));
                    };
                return (egn(value) || pnf(value) || vat(value));
            }

            return false;
        },
        
        /**
         * Validate Brazilian VAT number (CNPJ)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _br: function(value) {
            if (value === '') {
                return true;
            }
            var cnpj = value.replace(/[^\d]+/g, '');
            if (cnpj === '' || cnpj.length !== 14) {
                return false;
            }

            // Remove invalids CNPJs
            if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
                cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
                cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
                cnpj === '99999999999999')
            {
                return false;
            }

            // Validate verification digits
            var length  = cnpj.length - 2,
                numbers = cnpj.substring(0, length),
                digits  = cnpj.substring(length),
                sum     = 0,
                pos     = length - 7;

            for (var i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result !== parseInt(digits.charAt(0), 10)) {
                return false;
            }

            length  = length + 1;
            numbers = cnpj.substring(0, length);
            sum     = 0;
            pos     = length - 7;
            for (i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            return (result === parseInt(digits.charAt(1), 10));
        },

        /**
         * Validate Swiss VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (/^CHE[0-9]{9}(MWST)?$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^E[0-9]{9}(MWST)?$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [5, 4, 3, 2, 7, 6, 5, 4];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 10) {
                return false;
            }
            if (sum === 11) {
                sum = 0;
            }

            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Cypriot VAT number
         * Examples:
         * - Valid: CY10259033P
         * - Invalid: CY10259033Z
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cy: function(value) {
            if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                return false;
            }

            // Do not allow to start with "12"
            if (value.substr(0, 2) === '12') {
                return false;
            }

            // Extract the next digit and multiply by the counter.
            var sum         = 0,
                translation = {
                    '0': 1,  '1': 0,  '2': 5,  '3': 7,  '4': 9,
                    '5': 13, '6': 15, '7': 17, '8': 19, '9': 21
                };
            for (var i = 0; i < 8; i++) {
                var temp = parseInt(value.charAt(i), 10);
                if (i % 2 === 0) {
                    temp = translation[temp + ''];
                }
                sum += temp;
            }

            sum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26];
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Czech Republic VAT number
         * Can be:
         * i) Legal entities (8 digit numbers)
         * ii) Individuals with a RC (the 9 or 10 digit Czech birth number)
         * iii) Individuals without a RC (9 digit numbers beginning with 6)
         *
         * Examples:
         * - Valid: i) CZ25123891; ii) CZ7103192745, CZ991231123; iii) CZ640903926
         * - Invalid: i) CZ25123890; ii) CZ1103492745, CZ590312123
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (/^CZ[0-9]{8,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8,10}$/.test(value)) {
                return false;
            }

            var sum = 0,
                i   = 0;
            if (value.length === 8) {
                // Do not allow to start with '9'
                if (value.charAt(0) + '' === '9') {
                    return false;
                }

                sum = 0;
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }

                return (sum + '' === value.substr(7, 1));
            } else if (value.length === 9 && (value.charAt(0) + '' === '6')) {
                sum = 0;
                // Skip the first (which is 6)
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i + 1), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }
                sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
                return (sum + '' === value.substr(8, 1));
            } else if (value.length === 9 || value.length === 10) {
                // Validate Czech birth number (RodnÃ© ÄÃ­slo), which is also national identifier
                var year  = 1900 + parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                    day   = parseInt(value.substr(4, 2), 10);
                if (value.length === 9) {
                    if (year >= 1980) {
                        year -= 100;
                    }
                    if (year > 1953) {
                        return false;
                    }
                } else if (year < 1954) {
                    year += 100;
                }

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check that the birth date is not in the future
                if (value.length === 10) {
                    var check = parseInt(value.substr(0, 9), 10) % 11;
                    if (year < 1985) {
                        check = check % 10;
                    }
                    return (check + '' === value.substr(9, 1));
                }

                return true;
            }

            return false;
        },

        /**
         * Validate German VAT number
         * Examples:
         * - Valid: DE136695976
         * - Invalid: DE136695978
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _de: function(value) {
            if (/^DE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Danish VAT number
         * Example:
         * - Valid: DK13585628
         * - Invalid: DK13585627
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (/^DK[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 7, 6, 5, 4, 3, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Estonian VAT number
         * Examples:
         * - Valid: EE100931558, EE100594102
         * - Invalid: EE100594103
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ee: function(value) {
            if (/^EE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Spanish VAT number (NIF - NÃºmero de IdentificaciÃ³n Fiscal)
         * Can be:
         * i) DNI (Documento nacional de identidad), for Spaniards
         * ii) NIE (NÃºmero de IdentificaciÃ³n de Extranjeros), for foreigners
         * iii) CIF (Certificado de IdentificaciÃ³n Fiscal), for legal entities and others
         *
         * Examples:
         * - Valid: i) ES54362315K; ii) ESX2482300W, ESX5253868R; iii) ESM1234567L, ESJ99216582, ESB58378431, ESB64717838
         * - Invalid: i) ES54362315Z; ii) ESX2482300A; iii) ESJ99216583
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _es: function(value) {
            if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                return false;
            }

            var dni = function(value) {
                    var check = parseInt(value.substr(0, 8), 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                nie = function(value) {
                    var check = ['XYZ'.indexOf(value.charAt(0)), value.substr(1)].join('');
                    check = parseInt(check, 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                cif = function(value) {
                    var first = value.charAt(0), check;
                    if ('KLM'.indexOf(first) !== -1) {
                        // K: Spanish younger than 14 year old
                        // L: Spanish living outside Spain without DNI
                        // M: Granted the tax to foreigners who have no NIE
                        check = parseInt(value.substr(1, 8), 10);
                        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                        return (check + '' === value.substr(8, 1));
                    } else if ('ABCDEFGHJNPQRSUVW'.indexOf(first) !== -1) {
                        var sum    = 0,
                            weight = [2, 1, 2, 1, 2, 1, 2],
                            temp   = 0;

                        for (var i = 0; i < 7; i++) {
                            temp = parseInt(value.charAt(i + 1), 10) * weight[i];
                            if (temp > 9) {
                                temp = Math.floor(temp / 10) + temp % 10;
                            }
                            sum += temp;
                        }
                        sum = 10 - sum % 10;
                        if (sum === 10) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(8, 1) || 'JABCDEFGHI'[sum] === value.substr(8, 1));
                    }

                    return false;
                };

            var first = value.charAt(0);
            if (/^[0-9]$/.test(first)) {
                return dni(value);
            } else if (/^[XYZ]$/.test(first)) {
                return nie(value);
            } else {
                return cif(value);
            }
        },

        /**
         * Validate Finnish VAT number
         * Examples:
         * - Valid: FI20774740
         * - Invalid: FI20774741
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (/^FI[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [7, 9, 10, 5, 8, 4, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate French VAT number (TVA - taxe sur la valeur ajoutÃ©e)
         * It's constructed by a SIREN number, prefixed by two characters.
         *
         * Examples:
         * - Valid: FR40303265045, FR23334175221, FRK7399859412, FR4Z123456782
         * - Invalid: FR84323140391
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fr: function(value) {
            if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (!FormValidation.Helper.luhn(value.substr(2))) {
                return false;
            }

            if (/^[0-9]{2}$/.test(value.substr(0, 2))) {
                // First two characters are digits
                return value.substr(0, 2) === (parseInt(value.substr(2) + '12', 10) % 97 + '');
            } else {
                // The first characters cann't be O and I
                var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
                    check;
                // First one is digit
                if (/^[0-9]{1}$/.test(value.charAt(0))) {
                    check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;
                } else {
                    check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;
                }
                return ((parseInt(value.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11);
            }
        },

        /**
         * Validate United Kingdom VAT number
         * Example:
         * - Valid: GB980780684
         * - Invalid: GB802311781
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gb: function(value) {
            if (/^GB[0-9]{9}$/.test(value)             /* Standard */
                || /^GB[0-9]{12}$/.test(value)         /* Branches */
                || /^GBGD[0-9]{3}$/.test(value)        /* Government department */
                || /^GBHA[0-9]{3}$/.test(value)        /* Health authority */
                || /^GB(GD|HA)8888[0-9]{5}$/.test(value))
            {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)
                && !/^[0-9]{12}$/.test(value)
                && !/^GD[0-9]{3}$/.test(value)
                && !/^HA[0-9]{3}$/.test(value)
                && !/^(GD|HA)8888[0-9]{5}$/.test(value))
            {
                return false;
            }

            var length = value.length;
            if (length === 5) {
                var firstTwo  = value.substr(0, 2),
                    lastThree = parseInt(value.substr(2), 10);
                return ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500);
            } else if (length === 11 && ('GD8888' === value.substr(0, 6) || 'HA8888' === value.substr(0, 6))) {
                if (('GD' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) >= 500)
                    || ('HA' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) < 500))
                {
                    return false;
                }
                return (parseInt(value.substr(6, 3), 10) % 97 === parseInt(value.substr(9, 2), 10));
            } else if (length === 9 || length === 12) {
                var sum    = 0,
                    weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 97;

                if (parseInt(value.substr(0, 3), 10) >= 100) {
                    return (sum === 0 || sum === 42 || sum === 55);
                } else {
                    return (sum === 0);
                }
            }

            return true;
        },

        /**
         * Validate Greek VAT number
         * Examples:
         * - Valid: GR023456780, EL094259216
         * - Invalid: EL123456781
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gr: function(value) {
            if (/^(GR|EL)[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 8) {
                value = '0' + value;
            }

            var sum    = 0,
                weight = [256, 128, 64, 32, 16, 8, 4, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;

            return (sum + '' === value.substr(8, 1));
        },

        // EL is traditionally prefix of Greek VAT numbers
        _el: function(value) {
            return this._gr(value);
        },

        /**
         * Validate Hungarian VAT number
         * Examples:
         * - Valid: HU12892312
         * - Invalid: HU12892313
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hu: function(value) {
            if (/^HU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 7, 3, 1, 9, 7, 3, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Croatian VAT number
         * Examples:
         * - Valid: HR33392005961
         * - Invalid: HR33392005962
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (/^HR[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish VAT number
         * Examples:
         * - Valid: IE6433435F, IE6433435OA, IE8D79739I
         * - Invalid: IE8D79738J
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // The first 7 characters are digits
            if (/^[0-9]+$/.test(value.substr(0, 7))) {
                // New system
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(value.charAt(1)) !== -1) {
                // Old system
                return value.charAt(7) === getCheckDigit(value.substr(2, 5) + value.substr(0, 1) + '');
            }

            return true;
        },

        /**
         * Validate Icelandic VAT (VSK) number
         * Examples:
         * - Valid: 12345, 123456
         * - Invalid: 1234567
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
        _is: function(value) {
            if (/^IS[0-9]{5,6}$/.test(value)) {
                value = value.substr(2);
            }
            return /^[0-9]{5,6}$/.test(value);
        },

        /**
         * Validate Italian VAT number, which consists of 11 digits.
         * - First 7 digits are a company identifier
         * - Next 3 are the province of residence
         * - The last one is a check digit
         *
         * Examples:
         * - Valid: IT00743110157
         * - Invalid: IT00743110158
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _it: function(value) {
            if (/^IT[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            if (parseInt(value.substr(0, 7), 10) === 0) {
                return false;
            }

            var lastThree = parseInt(value.substr(7, 3), 10);
            if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
                return false;
            }

            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Lithuanian VAT number
         * It can be:
         * - 9 digits, for legal entities
         * - 12 digits, for temporarily registered taxpayers
         *
         * Examples:
         * - Valid: LT119511515, LT100001919017, LT100004801610
         * - Invalid: LT100001919018
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                i;
            for (i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * (1 + i % 9);
            }
            var check = sum % 11;
            if (check === 10) {
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * (1 + (i + 2) % 9);
                }
            }
            check = check % 11 % 10;
            return (check + '' === value.charAt(length - 1));
        },

        /**
         * Validate Luxembourg VAT number
         * Examples:
         * - Valid: LU15027442
         * - Invalid: LU15027443
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lu: function(value) {
            if (/^LU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            return ((parseInt(value.substr(0, 6), 10) % 89) + '' === value.substr(6, 2));
        },

        /**
         * Validate Latvian VAT number
         * Examples:
         * - Valid: LV40003521600, LV16117519997
         * - Invalid: LV40003521601, LV16137519997
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (/^LV[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var first  = parseInt(value.charAt(0), 10),
                sum    = 0,
                weight = [],
                i,
                length = value.length;
            if (first > 3) {
                // Legal entity
                sum    = 0;
                weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                for (i = 0; i < length; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                return (sum === 3);
            } else {
                // Check birth date
                var day   = parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10),
                    year  = parseInt(value.substr(4, 2), 10);
                year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check personal code
                sum    = 0;
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (sum + 1) % 11 % 10;
                return (sum + '' === value.charAt(length - 1));
            }
        },

        /**
         * Validate Maltese VAT number
         * Examples:
         * - Valid: MT11679112
         * - Invalid: MT11679113
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _mt: function(value) {
            if (/^MT[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 4, 6, 7, 8, 9, 10, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 37 === 0);
        },

        /**
         * Validate Dutch VAT number
         * Examples:
         * - Valid: NL004495445B01
         * - Invalid: NL123456789B90
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _nl: function(value) {
            if (/^NL[0-9]{9}B[0-9]{2}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}B[0-9]{2}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Norwegian VAT number
         *
         * @see http://www.brreg.no/english/coordination/number.html
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _no: function(value) {
            if (/^NO[0-9]{9}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Polish VAT number
         * Examples:
         * - Valid: PL8567346215
         * - Invalid: PL8567346216
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (/^PL[0-9]{10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];

            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Portuguese VAT number
         * Examples:
         * - Valid: PT501964843
         * - Invalid: PT501964842
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pt: function(value) {
            if (/^PT[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Romanian VAT number
         * Examples:
         * - Valid: RO18547290
         * - Invalid: RO18547291
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (/^RO[1-9][0-9]{1,9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9]{1,9}$/.test(value)) {
                return false;
            }

            var length = value.length,
                weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length),
                sum    = 0;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = (10 * sum) % 11 % 10;
            return (sum + '' === value.substr(length - 1, 1));
        },

        /**
         * Validate Russian VAT number (Taxpayer Identification Number - INN)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ru: function(value) {
            if (/^RU([0-9]{10}|[0-9]{12})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{10}|[0-9]{12})$/.test(value)) {
                return false;
            }

            var i = 0;
            if (value.length === 10) {
                var sum    = 0,
                    weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (i = 0; i < 10; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                if (sum > 9) {
                    sum = sum % 10;
                }

                return (sum + '' === value.substr(9, 1));
            } else if (value.length === 12) {
                var sum1    = 0,
                    weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    sum2    = 0,
                    weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

                for (i = 0; i < 11; i++) {
                    sum1 += parseInt(value.charAt(i), 10) * weight1[i];
                    sum2 += parseInt(value.charAt(i), 10) * weight2[i];
                }
                sum1 = sum1 % 11;
                if (sum1 > 9) {
                    sum1 = sum1 % 10;
                }
                sum2 = sum2 % 11;
                if (sum2 > 9) {
                    sum2 = sum2 % 10;
                }

                return (sum1 + '' === value.substr(10, 1) && sum2 + '' === value.substr(11, 1));
            }

            return false;
        },

        /**
         * Validate Serbian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _rs: function(value) {
            if (/^RS[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum  = 10,
                temp = 0;
            for (var i = 0; i < 8; i++) {
                temp = (parseInt(value.charAt(i), 10) + sum) % 10;
                if (temp === 0) {
                    temp = 10;
                }
                sum = (2 * temp) % 11;
            }

            return ((sum + parseInt(value.substr(8, 1), 10)) % 10 === 1);
        },

        /**
         * Validate Swedish VAT number
         * Examples:
         * - Valid: SE123456789701
         * - Invalid: SE123456789101
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _se: function(value) {
            if (/^SE[0-9]{10}01$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}01$/.test(value)) {
                return false;
            }

            value = value.substr(0, 10);
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovenian VAT number
         * Examples:
         * - Valid: SI50223054
         * - Invalid: SI50223055
         * - Invalid: SI09999990
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _si: function(value) {
            // The Slovenian VAT numbers don't start with zero
            var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
            if (!res) {
                return false;
            }
            if (res[1]) {
                value = value.substr(2);
            }

            var sum    = 0,
                weight = [8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 7; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Slovak VAT number
         * Examples:
         * - Valid: SK2022749619
         * - Invalid: SK2022749618
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _sk: function(value) {
            if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                return false;
            }

            return (parseInt(value, 10) % 11 === 0);
        },

        /**
         * Validate Venezuelan VAT number (RIF)
         * Examples:
         * - Valid: VEJ309272292, VEV242818101, VEJ000126518, VEJ000458324, J309272292, V242818101, J000126518, J000458324
         * - Invalid: VEJ309272293, VEV242818100, J000126519, J000458323
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ve: function(value) {
            if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[VEJPG][0-9]{9}$/.test(value)) {
                return false;
            }

            var types  = {
                    'V': 4,
                    'E': 8,
                    'J': 12,
                    'P': 16,
                    'G': 20
                },
                sum    = types[value.charAt(0)],
                weight = [3, 2, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i + 1), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11 || sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate South African VAT number
         * Examples:
         * - Valid: 4012345678
         * - Invalid: 40123456789, 3012345678
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
         _za: function(value) {
            if (/^ZA4[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }

            return /^4[0-9]{9}$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vin: {
                'default': 'Please enter a valid VIN number'
            }
        }
    });

    FormValidation.Validator.vin = {
        /**
         * Validate an US VIN (Vehicle Identification Number)
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'vin');
            if (value === '') {
                return true;
            }

            // Don't accept I, O, Q characters
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)) {
                return false;
            }

            value = value.toUpperCase();
            var chars   = {
                    A: 1,   B: 2,   C: 3,   D: 4,   E: 5,   F: 6,   G: 7,   H: 8,
                    J: 1,   K: 2,   L: 3,   M: 4,   N: 5,           P: 7,           R: 9,
                            S: 2,   T: 3,   U: 4,   V: 5,   W: 6,   X: 7,   Y: 8,   Z: 9,
                    '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0
                },
                weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                sum     = 0,
                length  = value.length;
            for (var i = 0; i < length; i++) {
                sum += chars[value.charAt(i) + ''] * weights[i];
            }

            var reminder = sum % 11;
            if (reminder === 10) {
                reminder = 'X';
            }

            return (reminder + '') === value.charAt(8);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            zipCode: {
                'default': 'Please enter a valid postal code',
                country: 'Please enter a valid postal code in %s',
                countries: {
                    AT: 'Austria',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CA: 'Canada',
                    CH: 'Switzerland',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IE: 'Ireland',
                    IN: 'India',
                    IT: 'Italy',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    SE: 'Sweden',
                    SG: 'Singapore',
                    SK: 'Slovakia',
                    US: 'USA'
                }
            }
        }
    });

    FormValidation.Validator.zipCode = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        COUNTRY_CODES: ['AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],

        /**
         * Return true if and only if the input value is a valid country zip code
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The country
         *
         * The country can be defined by:
         * - An ISO 3166 country code
         * - Name of field which its value defines the country code
         * - Name of callback function that returns the country code
         * - A callback function that returns the country code
         *
         *  callback: function(value, validator, $field) {
         *      // value is the value of field
         *      // validator is the BootstrapValidator instance
         *      // $field is jQuery element representing the field
         *  }
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'zipCode');
            if (value === '' || !options.country) {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = false;
            country = country.toUpperCase();
            switch (country) {
                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
                case 'AT':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'BG':
                    isValid = /^([1-9]{1}[0-9]{3})$/.test($.trim(value));
                    break;

                case 'BR':
                    isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
                    break;

                case 'CA':
                    isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
                    break;

                case 'CH':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'CZ':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
                case 'DE':
                    isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);
                    break;

                case 'DK':
                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
                    break;

                // Zip codes in Spain go from 01XXX to 52XXX.
                // Test: http://refiddle.com/1ufo
                case 'ES':
                    isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_France
                case 'FR':
                    isValid = /^[0-9]{5}$/i.test(value);
                    break;

                case 'GB':
                    isValid = this._gb(value);
                    break;

                // Indian PIN (Postal Index Number) validation
                // http://en.wikipedia.org/wiki/Postal_Index_Number
                // Test: http://regex101.com/r/kV0vH3/1
                case 'IN':
                    isValid = /^\d{3}\s?\d{3}$/.test(value);
                    break;

                // http://www.eircode.ie/docs/default-source/Common/prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
                // Test: http://refiddle.com/1kpl
                case 'IE':
                    isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
                case 'IT':
                    isValid = /^(I-|IT-)?\d{5}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
                case 'MA':
                    isValid = /^[1-9][0-9]{4}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
                case 'NL':
                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
                case 'PL':
                    isValid = /^[0-9]{2}\-[0-9]{3}$/.test(value);
                    break;

                // Test: http://refiddle.com/1l2t
                case 'PT':
                    isValid = /^[1-9]\d{3}-\d{3}$/.test(value);
                    break;

                case 'RO':
                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
                    break;

                case 'RU':
                    isValid = /^[0-9]{6}$/i.test(value);
                    break;

                case 'SE':
                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
                    break;

                case 'SG':
                    isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
                    break;

                case 'SK':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                case 'US':
                /* falls through */
                default:
                    isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].zipCode.country, FormValidation.I18n[locale].zipCode.countries[country])
            };
        },

        /**
         * Validate United Kingdom postcode
         * Examples:
         * - Standard: EC1A 1BB, W1A 1HQ, M1 1AA, B33 8TH, CR2 6XH, DN55 1PT
         * - Special cases:
         * AI-2640, ASCN 1ZZ, GIR 0AA
         *
         * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
         * @param {String} value The postcode
         * @returns {Boolean}
         */
        _gb: function(value) {
            var firstChar  = '[ABCDEFGHIJKLMNOPRSTUWYZ]',     // Does not accept QVX
                secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]',     // Does not accept IJZ
                thirdChar  = '[ABCDEFGHJKPMNRSTUVWXY]',
                fourthChar = '[ABEHMNPRVWXY]',
                fifthChar  = '[ABDEFGHJLNPQRSTUWXYZ]',
                regexps    = [
                    // AN NAA, ANN NAA, AAN NAA, AANN NAA format
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // ANA NAA
                    new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // AANA NAA
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),

                    new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),        // BFPO postcodes
                    /^(GIR)(\s*)(0AA)$/i,                       // Special postcode GIR 0AA
                    /^(BFPO)(\s*)([0-9]{1,4})$/i,               // Standard BFPO numbers
                    /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,        // c/o BFPO numbers
                    /^([A-Z]{4})(\s*)(1ZZ)$/i,                  // Overseas Territories
                    /^(AI-2640)$/i                              // Anguilla
                ];
            for (var i = 0; i < regexps.length; i++) {
                if (regexps[i].test(value)) {
                    return true;
                }
            }

            return false;
        }
    };
}(jQuery));/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.1, built on 2015-02-24 10:14:10 PM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
/**
 * This class supports validating Bootstrap form (http://getbootstrap.com/)
 */
(function($) {
    FormValidation.Framework.Bootstrap = function(element, options, namespace) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]',
                // The class of disabled button
                // http://getbootstrap.com/css/#buttons-disabled
                disabled: 'disabled'
            },
            err: {
                // http://getbootstrap.com/css/#forms-help-text
                clazz: 'help-block',
                parent: '^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$'
            },
            // This feature requires Bootstrap v3.1.0 or later (http://getbootstrap.com/css/#forms-control-validation).
            // Since Bootstrap doesn't provide any methods to know its version, this option cannot be on/off automatically.
            // In other word, to use this feature you have to upgrade your Bootstrap to v3.1.0 or later.
            //
            // Examples:
            // - Use Glyphicons icons:
            //  icon: {
            //      valid: 'glyphicon glyphicon-ok',
            //      invalid: 'glyphicon glyphicon-remove',
            //      validating: 'glyphicon glyphicon-refresh',
            //      feedback: 'form-control-feedback'
            //  }
            // - Use FontAwesome icons:
            //  icon: {
            //      valid: 'fa fa-check',
            //      invalid: 'fa fa-times',
            //      validating: 'fa fa-refresh',
            //      feedback: 'form-control-feedback'
            //  }
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'form-control-feedback'
            },
            row: {
                // By default, each field is placed inside the <div class="form-group"></div>
                // http://getbootstrap.com/css/#forms
                selector: '.form-group',
                valid: 'has-success',
                invalid: 'has-error',
                feedback: 'has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options, namespace]);
    };

    FormValidation.Framework.Bootstrap.prototype = $.extend({}, FormValidation.Base.prototype, {
        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
            var ns      = this._namespace,
                type    = $field.attr('type'),
                field   = $field.attr('data-' + ns + '-field'),
                row     = this.options.fields[field].row || this.options.row.selector,
                $parent = $field.closest(row);

            // Place it after the container of checkbox/radio
            // so when clicking the icon, it doesn't effect to the checkbox/radio element
            if ('checkbox' === type || 'radio' === type) {
                var $fieldParent = $field.parent();
                if ($fieldParent.hasClass(type)) {
                    $icon.insertAfter($fieldParent);
                } else if ($fieldParent.parent().hasClass(type)) {
                    $icon.insertAfter($fieldParent.parent());
                }
            }

            // The feedback icon does not render correctly if there is no label
            // https://github.com/twbs/bootstrap/issues/12873
            if ($parent.find('label').length === 0) {
                $icon.addClass('fv-icon-no-label');
            }
            // Fix feedback icons in input-group
            if ($parent.find('.input-group').length !== 0) {
                $icon.addClass('fv-bootstrap-icon-input-group')
                     .insertAfter($parent.find('.input-group').eq(0));
            }
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .popover('destroy')
                            .popover({
                                container: 'body',
                                content: message,
                                html: true,
                                placement: 'auto top',
                                trigger: 'hover click'
                            });
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .tooltip('destroy')
                            .tooltip({
                                container: 'body',
                                html: true,
                                placement: 'auto top',
                                title: message
                            });
                        break;
                }
            }
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .popover('destroy');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .tooltip('destroy');
                        break;
                }
            }
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('hide');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('hide');
                        break;
                }
            }
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('show');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('show');
                        break;
                }
            }
        }
    });

    /**
     * Plugin definition
     * Support backward
     * @deprecated It will be removed soon. Instead of using $(form).bootstrapValidator(), use
     *  $(form).formValidation({
     *      framework: 'bootstrap'  // It's equivalent to use data-fv-framework="bootstrap" for <form>
     *  });
     */
    $.fn.bootstrapValidator = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('formValidation') || $this.data('bootstrapValidator'),
                options = 'object' === typeof option && option;
            if (!data) {
                data = new FormValidation.Framework.Bootstrap(this, $.extend({}, {
                    events: {
                        // Support backward
                        formInit: 'init.form.bv',
                        formError: 'error.form.bv',
                        formSuccess: 'success.form.bv',
                        fieldAdded: 'added.field.bv',
                        fieldRemoved: 'removed.field.bv',
                        fieldInit: 'init.field.bv',
                        fieldError: 'error.field.bv',
                        fieldSuccess: 'success.field.bv',
                        fieldStatus: 'status.field.bv',
                        localeChanged: 'changed.locale.bv',
                        validatorError: 'error.validator.bv',
                        validatorSuccess: 'success.validator.bv'
                    }
                }, options), 'bv');

                $this.addClass('fv-form-bootstrap')
                     .data('formValidation', data)
                     .data('bootstrapValidator', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap;
}(jQuery));
/*!
 * Datepicker for Bootstrap v1.7.0-dev (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;
        this.selectWeek = this.o.selectWeek;

		if (this.o.calendarWeeks)
			this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view, default_value){
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
			if (!$.isArray(o.daysOfWeekHighlighted))
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				var datesDisabled = [];
				datesDisabled.push(DPGlobal.parseDate(o.datesDisabled, format, o.language, o.assumeNearbyYear));
				o.datesDisabled = datesDisabled;
			}
			o.datesDisabled = $.map(o.datesDisabled,function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.element.find('input'), events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.picker.hasClass('datepicker-inline')
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
      var element = this.component ? this.element.find('input') : this.element;
			if (element.attr('readonly') && this.o.enableOnReadonly === false)
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline)
				return this;
			if (!this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(evt){
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
				&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			}
			else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			}
			else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}

			if (element) {
				element.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted);
				}
			}
			else {
				this.element.val(formatted);
			}
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
				top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? ''
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);
			else
				this.viewDate = this.o.defaultViewDate;

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				this.picker.find('.datepicker-days .datepicker-switch')
					.attr('colspan', function(i, val){
						return parseInt(val) + 1;
					});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			i = 0;
			while (i < 12){
        var focused = localDate && localDate.getMonth() === i ? '' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date) || this.dateIsDisabled(date)){
				cls.push('disabled');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html      = '';
			view      = this.picker.find(selector);
			year      = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep   = parseInt(endYear / step, 10) * step;
			steps     = $.map(this.dates, function(d){
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
        if (thisYear === this.viewDate.getFullYear()) {
				  classes.push('focused');
        }

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof(before) === 'boolean') {
						before = {enabled: before};
					} else if (typeof(before) === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
				    if (this.selectWeek) html.push('<tr class="week">');
                    else html.push('<tr>');
                   
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
            if (this.selectWeek) this.picker.find('.day.active').parent().addClass('active');

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				1,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')){
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0){
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1){
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today')){
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a day
				if (target.hasClass('day')){
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')){
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
 						}
 					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11){
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
 						} else {
							month = month + 1;
							monthChanged = true;
 						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1){
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10)||0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')){
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')){
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')){
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4){
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					}
  					else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					}
  					else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					}
  					else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof(dp) === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
        selectWeek: false,
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			},
			{
				clsName: 'decades',
				navFnc: 'FullDecade',
				navStep: 100
			},
			{
				clsName: 'centuries',
				navFnc: 'FullCentury',
				navStep: 1000
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				part, dir, i, fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
				  	for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
				  	}

			  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.7.0-dev';

	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));
!function(a){a.fn.datepicker.dates.es={days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],daysShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],daysMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],today:"Hoy",monthsTitle:"Meses",clear:"Borrar",weekStart:1,format:"dd/mm/yyyy"}}(jQuery);/*!
 * Timepicker Component for Twitter Bootstrap
 *
 * Copyright 2013 Joris de Wit and bootstrap-timepicker contributors
 *
 * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function($, window, document) {
  'use strict';

  // TIMEPICKER PUBLIC CLASS DEFINITION
  var Timepicker = function(element, options) {
    this.widget = '';
    this.$element = $(element);
    this.defaultTime = options.defaultTime;
    this.disableFocus = options.disableFocus;
    this.disableMousewheel = options.disableMousewheel;
    this.isOpen = options.isOpen;
    this.minuteStep = options.minuteStep;
    this.modalBackdrop = options.modalBackdrop;
    this.orientation = options.orientation;
    this.secondStep = options.secondStep;
    this.snapToStep = options.snapToStep;
    this.showInputs = options.showInputs;
    this.showMeridian = options.showMeridian;
    this.showSeconds = options.showSeconds;
    this.template = options.template;
    this.appendWidgetTo = options.appendWidgetTo;
    this.showWidgetOnAddonClick = options.showWidgetOnAddonClick;
    this.icons = options.icons;
    this.maxHours = options.maxHours;
    this.explicitMode = options.explicitMode; // If true 123 = 1:23, 12345 = 1:23:45, else invalid.

    this.handleDocumentClick = function (e) {
      var self = e.data.scope;
      // This condition was inspired by bootstrap-datepicker.
      // The element the timepicker is invoked on is the input but it has a sibling for addon/button.
      if (!(self.$element.parent().find(e.target).length ||
          self.$widget.is(e.target) ||
          self.$widget.find(e.target).length)) {
        self.hideWidget();
      }
    };

    this._init();
  };

  Timepicker.prototype = {

    constructor: Timepicker,
    _init: function() {
      var self = this;

      if (this.showWidgetOnAddonClick && (this.$element.parent().hasClass('input-group') && this.$element.parent().hasClass('bootstrap-timepicker'))) {
        this.$element.parent('.input-group.bootstrap-timepicker').find('.input-group-addon').on({
          'click.timepicker': $.proxy(this.showWidget, this)
        });
        this.$element.on({
          'focus.timepicker': $.proxy(this.highlightUnit, this),
          'click.timepicker': $.proxy(this.highlightUnit, this),
          'keydown.timepicker': $.proxy(this.elementKeydown, this),
          'blur.timepicker': $.proxy(this.blurElement, this),
          'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
        });
      } else {
        if (this.template) {
          this.$element.on({
            'focus.timepicker': $.proxy(this.showWidget, this),
            'click.timepicker': $.proxy(this.showWidget, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        } else {
          this.$element.on({
            'focus.timepicker': $.proxy(this.highlightUnit, this),
            'click.timepicker': $.proxy(this.highlightUnit, this),
            'keydown.timepicker': $.proxy(this.elementKeydown, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        }
      }

      if (this.template !== false) {
        this.$widget = $(this.getTemplate()).on('click', $.proxy(this.widgetClick, this));
      } else {
        this.$widget = false;
      }

      if (this.showInputs && this.$widget !== false) {
        this.$widget.find('input').each(function() {
          $(this).on({
            'click.timepicker': function() { $(this).select(); },
            'keydown.timepicker': $.proxy(self.widgetKeydown, self),
            'keyup.timepicker': $.proxy(self.widgetKeyup, self)
          });
        });
      }

      this.setDefaultTime(this.defaultTime);
    },

    blurElement: function() {
      this.highlightedUnit = null;
      this.updateFromElementVal();
    },

    clear: function() {
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.meridian = '';

      this.$element.val('');
    },

    decrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 1) {
          this.hour = 12;
        } else if (this.hour === 12) {
          this.hour--;

          return this.toggleMeridian();
        } else if (this.hour === 0) {
          this.hour = 11;

          return this.toggleMeridian();
        } else {
          this.hour--;
        }
      } else {
        if (this.hour <= 0) {
          this.hour = this.maxHours - 1;
        } else {
          this.hour--;
        }
      }
    },

    decrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute - step;
      } else {
        newVal = this.minute - this.minuteStep;
      }

      if (newVal < 0) {
        this.decrementHour();
        this.minute = newVal + 60;
      } else {
        this.minute = newVal;
      }
    },

    decrementSecond: function() {
      var newVal = this.second - this.secondStep;

      if (newVal < 0) {
        this.decrementMinute(true);
        this.second = newVal + 60;
      } else {
        this.second = newVal;
      }
    },

    elementKeydown: function(e) {
      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (this.highlightedUnit === 'hour') {
            this.hideWidget();
            break;
          }
          this.highlightPrevUnit();
        } else if ((this.showMeridian && this.highlightedUnit === 'meridian') || (this.showSeconds && this.highlightedUnit === 'second') || (!this.showMeridian && !this.showSeconds && this.highlightedUnit ==='minute')) {
          this.hideWidget();
          break;
        } else {
          this.highlightNextUnit();
        }
        e.preventDefault();
        this.updateFromElementVal();
        break;
      case 27: // escape
        this.updateFromElementVal();
        break;
      case 37: // left arrow
        e.preventDefault();
        this.highlightPrevUnit();
        this.updateFromElementVal();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.incrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.incrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.incrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }
        this.update();
        break;
      case 39: // right arrow
        e.preventDefault();
        this.highlightNextUnit();
        this.updateFromElementVal();
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.decrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.decrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.decrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }

        this.update();
        break;
      }
    },

    getCursorPosition: function() {
      var input = this.$element.get(0);

      if ('selectionStart' in input) {// Standard-compliant browsers

        return input.selectionStart;
      } else if (document.selection) {// IE fix
        input.focus();
        var sel = document.selection.createRange(),
          selLen = document.selection.createRange().text.length;

        sel.moveStart('character', - input.value.length);

        return sel.text.length - selLen;
      }
    },

    getTemplate: function() {
      var template,
        hourTemplate,
        minuteTemplate,
        secondTemplate,
        meridianTemplate,
        templateContent;

      if (this.showInputs) {
        hourTemplate = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>';
        minuteTemplate = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>';
        secondTemplate = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>';
        meridianTemplate = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>';
      } else {
        hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
        minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
        secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
        meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
      }

      templateContent = '<table>'+
         '<tr>'+
           '<td><a href="#" data-action="incrementHour"><span class="'+ this.icons.up +'"></span></a></td>'+
           '<td class="separator">&nbsp;</td>'+
           '<td><a href="#" data-action="incrementMinute"><span class="'+ this.icons.up +'"></span></a></td>'+
           (this.showSeconds ?
             '<td class="separator">&nbsp;</td>'+
             '<td><a href="#" data-action="incrementSecond"><span class="'+ this.icons.up +'"></span></a></td>'
           : '') +
           (this.showMeridian ?
             '<td class="separator">&nbsp;</td>'+
             '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="'+ this.icons.up +'"></span></a></td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td>'+ hourTemplate +'</td> '+
           '<td class="separator">:</td>'+
           '<td>'+ minuteTemplate +'</td> '+
           (this.showSeconds ?
            '<td class="separator">:</td>'+
            '<td>'+ secondTemplate +'</td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td>'+ meridianTemplate +'</td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td><a href="#" data-action="decrementHour"><span class="'+ this.icons.down +'"></span></a></td>'+
           '<td class="separator"></td>'+
           '<td><a href="#" data-action="decrementMinute"><span class="'+ this.icons.down +'"></span></a></td>'+
           (this.showSeconds ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="decrementSecond"><span class="'+ this.icons.down +'"></span></a></td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="toggleMeridian"><span class="'+ this.icons.down +'"></span></a></td>'
           : '') +
         '</tr>'+
       '</table>';

      switch(this.template) {
      case 'modal':
        template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+ (this.modalBackdrop ? 'true' : 'false') +'">'+
          '<div class="modal-header">'+
            '<a href="#" class="close" data-dismiss="modal">&times;</a>'+
            '<h3>Pick a Time</h3>'+
          '</div>'+
          '<div class="modal-content">'+
            templateContent +
          '</div>'+
          '<div class="modal-footer">'+
            '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>'+
          '</div>'+
        '</div>';
        break;
      case 'dropdown':
        template = '<div class="bootstrap-timepicker-widget dropdown-menu">'+ templateContent +'</div>';
        break;
      }

      return template;
    },

    getTime: function() {
      if (this.hour === '') {
        return '';
      }

      return this.hour + ':' + (this.minute.toString().length === 1 ? '0' + this.minute : this.minute) + (this.showSeconds ? ':' + (this.second.toString().length === 1 ? '0' + this.second : this.second) : '') + (this.showMeridian ? ' ' + this.meridian : '');
    },

    hideWidget: function() {
      if (this.isOpen === false) {
        return;
      }

      this.$element.trigger({
        'type': 'hide.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('hide');
      } else {
        this.$widget.removeClass('open');
      }

      $(document).off('mousedown.timepicker, touchend.timepicker', this.handleDocumentClick);

      this.isOpen = false;
      // show/hide approach taken by datepicker
      this.$widget.detach();
    },

    highlightUnit: function() {
      this.position = this.getCursorPosition();
      if (this.position >= 0 && this.position <= 2) {
        this.highlightHour();
      } else if (this.position >= 3 && this.position <= 5) {
        this.highlightMinute();
      } else if (this.position >= 6 && this.position <= 8) {
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMeridian();
        }
      } else if (this.position >= 9 && this.position <= 11) {
        this.highlightMeridian();
      }
    },

    highlightNextUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        this.highlightMinute();
        break;
      case 'minute':
        if (this.showSeconds) {
          this.highlightSecond();
        } else if (this.showMeridian){
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'second':
        if (this.showMeridian) {
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'meridian':
        this.highlightHour();
        break;
      }
    },

    highlightPrevUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        if(this.showMeridian){
          this.highlightMeridian();
        } else if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      case 'minute':
        this.highlightHour();
        break;
      case 'second':
        this.highlightMinute();
        break;
      case 'meridian':
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      }
    },

    highlightHour: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'hour';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(0,1);
          } else {
            $element.setSelectionRange(0,2);
          }
        }, 0);
      }
    },

    highlightMinute: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'minute';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(2,4);
          } else {
            $element.setSelectionRange(3,5);
          }
        }, 0);
      }
    },

    highlightSecond: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'second';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(5,7);
          } else {
            $element.setSelectionRange(6,8);
          }
        }, 0);
      }
    },

    highlightMeridian: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'meridian';

      if ($element.setSelectionRange) {
        if (this.showSeconds) {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(8,10);
            } else {
              $element.setSelectionRange(9,11);
            }
          }, 0);
        } else {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(5,7);
            } else {
              $element.setSelectionRange(6,8);
            }
          }, 0);
        }
      }
    },

    incrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 11) {
          this.hour++;
          return this.toggleMeridian();
        } else if (this.hour === 12) {
          this.hour = 0;
        }
      }
      if (this.hour === this.maxHours - 1) {
        this.hour = 0;

        return;
      }
      this.hour++;
    },

    incrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute + step;
      } else {
        newVal = this.minute + this.minuteStep - (this.minute % this.minuteStep);
      }

      if (newVal > 59) {
        this.incrementHour();
        this.minute = newVal - 60;
      } else {
        this.minute = newVal;
      }
    },

    incrementSecond: function() {
      var newVal = this.second + this.secondStep - (this.second % this.secondStep);

      if (newVal > 59) {
        this.incrementMinute(true);
        this.second = newVal - 60;
      } else {
        this.second = newVal;
      }
    },

    mousewheel: function(e) {
      if (this.disableMousewheel) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail,
          scrollTo = null;

      if (e.type === 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
      }
      else if (e.type === 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
      }

      if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
      }

      switch (this.highlightedUnit) {
      case 'minute':
        if (delta > 0) {
          this.incrementMinute();
        } else {
          this.decrementMinute();
        }
        this.highlightMinute();
        break;
      case 'second':
        if (delta > 0) {
          this.incrementSecond();
        } else {
          this.decrementSecond();
        }
        this.highlightSecond();
        break;
      case 'meridian':
        this.toggleMeridian();
        this.highlightMeridian();
        break;
      default:
        if (delta > 0) {
          this.incrementHour();
        } else {
          this.decrementHour();
        }
        this.highlightHour();
        break;
      }

      return false;
    },

    /**
     * Given a segment value like 43, will round and snap the segment
     * to the nearest "step", like 45 if step is 15. Segment will
     * "overflow" to 0 if it's larger than 59 or would otherwise
     * round up to 60.
     */
    changeToNearestStep: function (segment, step) {
      if (segment % step === 0) {
        return segment;
      }
      if (Math.round((segment % step) / step)) {
        return (segment + (step - segment % step)) % 60;
      } else {
        return segment - segment % step;
      }
    },

    // This method was adapted from bootstrap-datepicker.
    place : function() {
      if (this.isInline) {
        return;
      }
      var widgetWidth = this.$widget.outerWidth(), widgetHeight = this.$widget.outerHeight(), visualPadding = 10, windowWidth =
        $(window).width(), windowHeight = $(window).height(), scrollTop = $(window).scrollTop();

      var zIndex = parseInt(this.$element.parents().filter(function() { return $(this).css('z-index') !== 'auto'; }).first().css('z-index'), 10) + 10;
      var offset = this.component ? this.component.parent().offset() : this.$element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.$element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.$element.outerWidth(false);
      var left = offset.left, top = offset.top;

      this.$widget.removeClass('timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left');

      if (this.orientation.x !== 'auto') {
        this.$widget.addClass('timepicker-orient-' + this.orientation.x);
        if (this.orientation.x === 'right') {
          left -= widgetWidth - width;
        }
      } else{
        // auto x orientation is best-placement: if it crosses a window edge, fudge it sideways
        // Default to left
        this.$widget.addClass('timepicker-orient-left');
        if (offset.left < 0) {
          left -= offset.left - visualPadding;
        } else if (offset.left + widgetWidth > windowWidth) {
          left = windowWidth - widgetWidth - visualPadding;
        }
      }
      // auto y orientation is best-situation: top or bottom, no fudging, decision based on which shows more of the widget
      var yorient = this.orientation.y, topOverflow, bottomOverflow;
      if (yorient === 'auto') {
        topOverflow = -scrollTop + offset.top - widgetHeight;
        bottomOverflow = scrollTop + windowHeight - (offset.top + height + widgetHeight);
        if (Math.max(topOverflow, bottomOverflow) === bottomOverflow) {
          yorient = 'top';
        } else {
          yorient = 'bottom';
        }
      }
      this.$widget.addClass('timepicker-orient-' + yorient);
      if (yorient === 'top'){
        top += height;
      } else{
        top -= widgetHeight + parseInt(this.$widget.css('padding-top'), 10);
      }

      this.$widget.css({
        top : top,
        left : left,
        zIndex : zIndex
      });
    },

    remove: function() {
      $('document').off('.timepicker');
      if (this.$widget) {
        this.$widget.remove();
      }
      delete this.$element.data().timepicker;
    },

    setDefaultTime: function(defaultTime) {
      if (!this.$element.val()) {
        if (defaultTime === 'current') {
          var dTime = new Date(),
            hours = dTime.getHours(),
            minutes = dTime.getMinutes(),
            seconds = dTime.getSeconds(),
            meridian = 'AM';

          if (seconds !== 0) {
            seconds = Math.ceil(dTime.getSeconds() / this.secondStep) * this.secondStep;
            if (seconds === 60) {
              minutes += 1;
              seconds = 0;
            }
          }

          if (minutes !== 0) {
            minutes = Math.ceil(dTime.getMinutes() / this.minuteStep) * this.minuteStep;
            if (minutes === 60) {
              hours += 1;
              minutes = 0;
            }
          }

          if (this.showMeridian) {
            if (hours === 0) {
              hours = 12;
            } else if (hours >= 12) {
              if (hours > 12) {
                hours = hours - 12;
              }
              meridian = 'PM';
            } else {
              meridian = 'AM';
            }
          }

          this.hour = hours;
          this.minute = minutes;
          this.second = seconds;
          this.meridian = meridian;

          this.update();

        } else if (defaultTime === false) {
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
          this.meridian = 'AM';
        } else {
          this.setTime(defaultTime);
        }
      } else {
        this.updateFromElementVal();
      }
    },

    setTime: function(time, ignoreWidget) {
      if (!time) {
        this.clear();
        return;
      }

      var timeMode,
          timeArray,
          hour,
          minute,
          second,
          meridian;

      if (typeof time === 'object' && time.getMonth){
        // this is a date object
        hour    = time.getHours();
        minute  = time.getMinutes();
        second  = time.getSeconds();

        if (this.showMeridian){
          meridian = 'AM';
          if (hour > 12){
            meridian = 'PM';
            hour = hour % 12;
          }

          if (hour === 12){
            meridian = 'PM';
          }
        }
      } else {
        timeMode = ((/a/i).test(time) ? 1 : 0) + ((/p/i).test(time) ? 2 : 0); // 0 = none, 1 = AM, 2 = PM, 3 = BOTH.
        if (timeMode > 2) { // If both are present, fail.
          this.clear();
          return;
        }

        timeArray = time.replace(/[^0-9\:]/g, '').split(':');

        hour = timeArray[0] ? timeArray[0].toString() : timeArray.toString();

        if(this.explicitMode && hour.length > 2 && (hour.length % 2) !== 0 ) {
          this.clear();
          return;
        }

        minute = timeArray[1] ? timeArray[1].toString() : '';
        second = timeArray[2] ? timeArray[2].toString() : '';

        // adaptive time parsing
        if (hour.length > 4) {
          second = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (hour.length > 2) {
          minute = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (minute.length > 2) {
          second = minute.slice(-2);
          minute = minute.slice(0, -2);
        }

        hour = parseInt(hour, 10);
        minute = parseInt(minute, 10);
        second = parseInt(second, 10);

        if (isNaN(hour)) {
          hour = 0;
        }
        if (isNaN(minute)) {
          minute = 0;
        }
        if (isNaN(second)) {
          second = 0;
        }

        // Adjust the time based upon unit boundary.
        // NOTE: Negatives will never occur due to time.replace() above.
        if (second > 59) {
          second = 59;
        }

        if (minute > 59) {
          minute = 59;
        }

        if (hour >= this.maxHours) {
          // No day/date handling.
          hour = this.maxHours - 1;
        }

        if (this.showMeridian) {
          if (hour > 12) {
            // Force PM.
            timeMode = 2;
            hour -= 12;
          }
          if (!timeMode) {
            timeMode = 1;
          }
          if (hour === 0) {
            hour = 12; // AM or PM, reset to 12.  0 AM = 12 AM.  0 PM = 12 PM, etc.
          }
          meridian = timeMode === 1 ? 'AM' : 'PM';
        } else if (hour < 12 && timeMode === 2) {
          hour += 12;
        } else {
          if (hour >= this.maxHours) {
            hour = this.maxHours - 1;
          } else if ((hour < 0) || (hour === 12 && timeMode === 1)){
            hour = 0;
          }
        }
      }

      this.hour = hour;
      if (this.snapToStep) {
        this.minute = this.changeToNearestStep(minute, this.minuteStep);
        this.second = this.changeToNearestStep(second, this.secondStep);
      } else {
        this.minute = minute;
        this.second = second;
      }
      this.meridian = meridian;

      this.update(ignoreWidget);
    },

    showWidget: function() {
      if (this.isOpen) {
        return;
      }

      if (this.$element.is(':disabled')) {
        return;
      }

      // show/hide approach taken by datepicker
      this.$widget.appendTo(this.appendWidgetTo);
      $(document).on('mousedown.timepicker, touchend.timepicker', {scope: this}, this.handleDocumentClick);

      this.$element.trigger({
        'type': 'show.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      this.place();
      if (this.disableFocus) {
        this.$element.blur();
      }

      // widget shouldn't be empty on open
      if (this.hour === '') {
        if (this.defaultTime) {
          this.setDefaultTime(this.defaultTime);
        } else {
          this.setTime('0:0:0');
        }
      }

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
      } else {
        if (this.isOpen === false) {
          this.$widget.addClass('open');
        }
      }

      this.isOpen = true;
    },

    toggleMeridian: function() {
      this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';
    },

    update: function(ignoreWidget) {
      this.updateElement();
      if (!ignoreWidget) {
        this.updateWidget();
      }

      this.$element.trigger({
        'type': 'changeTime.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
    },

    updateElement: function() {
      this.$element.val(this.getTime()).change();
    },

    updateFromElementVal: function() {
      this.setTime(this.$element.val());
    },

    updateWidget: function() {
      if (this.$widget === false) {
        return;
      }

      var hour = this.hour,
          minute = this.minute.toString().length === 1 ? '0' + this.minute : this.minute,
          second = this.second.toString().length === 1 ? '0' + this.second : this.second;

      if (this.showInputs) {
        this.$widget.find('input.bootstrap-timepicker-hour').val(hour);
        this.$widget.find('input.bootstrap-timepicker-minute').val(minute);

        if (this.showSeconds) {
          this.$widget.find('input.bootstrap-timepicker-second').val(second);
        }
        if (this.showMeridian) {
          this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
        }
      } else {
        this.$widget.find('span.bootstrap-timepicker-hour').text(hour);
        this.$widget.find('span.bootstrap-timepicker-minute').text(minute);

        if (this.showSeconds) {
          this.$widget.find('span.bootstrap-timepicker-second').text(second);
        }
        if (this.showMeridian) {
          this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
        }
      }
    },

    updateFromWidgetInputs: function() {
      if (this.$widget === false) {
        return;
      }

      var t = this.$widget.find('input.bootstrap-timepicker-hour').val() + ':' +
              this.$widget.find('input.bootstrap-timepicker-minute').val() +
              (this.showSeconds ? ':' + this.$widget.find('input.bootstrap-timepicker-second').val() : '') +
              (this.showMeridian ? this.$widget.find('input.bootstrap-timepicker-meridian').val() : '')
      ;

      this.setTime(t, true);
    },

    widgetClick: function(e) {
      e.stopPropagation();
      e.preventDefault();

      var $input = $(e.target),
          action = $input.closest('a').data('action');

      if (action) {
        this[action]();
      }
      this.update();

      if ($input.is('input')) {
        $input.get(0).setSelectionRange(0,2);
      }
    },

    widgetKeydown: function(e) {
      var $input = $(e.target),
          name = $input.attr('class').replace('bootstrap-timepicker-', '');

      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (name === 'hour') {
            return this.hideWidget();
          }
        } else if ((this.showMeridian && name === 'meridian') || (this.showSeconds && name === 'second') || (!this.showMeridian && !this.showSeconds && name === 'minute')) {
          return this.hideWidget();
        }
        break;
      case 27: // escape
        this.hideWidget();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.incrementHour();
          break;
        case 'minute':
          this.incrementMinute();
          break;
        case 'second':
          this.incrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.decrementHour();
          break;
        case 'minute':
          this.decrementMinute();
          break;
        case 'second':
          this.decrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      }
    },

    widgetKeyup: function(e) {
      if ((e.which === 65) || (e.which === 77) || (e.which === 80) || (e.which === 46) || (e.which === 8) || (e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
        this.updateFromWidgetInputs();
      }
    }
  };

  //TIMEPICKER PLUGIN DEFINITION
  $.fn.timepicker = function(option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function() {
      var $this = $(this),
        data = $this.data('timepicker'),
        options = typeof option === 'object' && option;

      if (!data) {
        $this.data('timepicker', (data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data()))));
      }

      if (typeof option === 'string') {
        data[option].apply(data, args);
      }
    });
  };

  $.fn.timepicker.defaults = {
    defaultTime: 'current',
    disableFocus: false,
    disableMousewheel: false,
    isOpen: false,
    minuteStep: 15,
    modalBackdrop: false,
    orientation: { x: 'auto', y: 'auto'},
    secondStep: 15,
    snapToStep: false,
    showSeconds: false,
    showInputs: true,
    showMeridian: true,
    template: 'dropdown',
    appendWidgetTo: 'body',
    showWidgetOnAddonClick: true,
    icons: {
      up: 'glyphicon glyphicon-chevron-up',
      down: 'glyphicon glyphicon-chevron-down'
    },
    maxHours: 24,
    explicitMode: false
  };

  $.fn.timepicker.Constructor = Timepicker;

  $(document).on(
    'focus.timepicker.data-api click.timepicker.data-api',
    '[data-provide="timepicker"]',
    function(e){
      var $this = $(this);
      if ($this.data('timepicker')) {
        return;
      }
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.timepicker();
    }
  );

})(jQuery, window, document);
/**
 * [Created by] Jean Farrugia on 07/03/2015 (dd/mm/yyyy).
 * [Definition] "ftakar" is the equivalent of "remember" in Maltese.
 * 
 * 
 * Copyright (c) 2015 Jean Farrugia
 *
 * Licensed under the MIT License
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * 
 */
 
(function($) {
    'use strict';

  // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval#The_.22this.22_problem
  var __nativeSI__ = window.setInterval;
  var setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
  };

  $.fn.ftakar = function(options) {
    // default settings
    var settings = $.extend($.fn.ftakar.defaults, options),
    supports_html5_storage = function () {
        // check if browser supports local storage
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            // console.info('FTAKAR: html5 storage not supported.');
            return false;
        }
    };

    // check for loacl storage support
    if (supports_html5_storage()) {
        var $this = $(this),
        store = {
            get: function() {
                var a = JSON.parse(localStorage.getItem(settings.savedDataName));
                return (typeof(a) === 'object' && a !== null) ? a : {};
            },
            set: function(data) {
                localStorage.setItem(settings.savedDataName, JSON.stringify(data));
            },
            destroy: function() {
                localStorage.removeItem(settings.savedDataName);
            }
        },
        key = {
            // this key generations stuff can and should be improved
            create: function(element) {
                for (var i = 0; i < settings.idAttribs.length; i++) {
                    // check if attribute has value
                    if ($(element).attr(settings.idAttribs[i]) !== undefined) {
                        // escape strings
                        return encodeURI(settings.idAttribs[i]) + " " + encodeURI($(element).attr( settings.idAttribs[i] ));
                    }
                }

                return false;
            },
            get: function(key) {
                // split
                var array =  key.split(" ");
                for (var index = 0; index < array.length; index++) {
                    // escape strings
                    array[index] = decodeURI(array[index]);
                }
                return array;
            }
        },
        elementData = {
            save: function(element) {
                if (element) {
                    // get data
                    var data = store.get();

                    var elementId = key.create(element);
                    if (elementId) {
                        settings.beforeSave.call();

                        var now = new Date().getTime();
                        var expires = (settings.expireInMs) ? parseInt(now.toString()) + settings.expireInMs : null;

                        var toSave = "";
                        switch ($(element).attr('type')){
                          case 'radio':
                          case 'checkbox':
                            toSave = $(element).prop('checked');
                            break;
                          /*case 'select':
                          case 'input':*/
                          default:
                            toSave = $(element).val();
                        }

                        data[elementId] = {
                                            expires: expires,
                                            val: toSave
                                        };

                        // save data
                        store.set(data);
                        settings.onSave.call();
                        return true;
                    }
                }

                return false;
            },
            destroy: function(element) {
                if (element) {
                    // get data
                    var data = store.get();

                    var elementId = key.create(element);
                    if (elementId) {
                        settings.beforeDelete.call();

                        delete data[elementId];

                        settings.onDelete.call();
                        // save data
                        store.set(data);
                        return true;
                    }
                }

                return false;
            },
            hasExpired: function(data) {
                // check if element has expired
                var now = new Date().getTime();
                return (data.expires) ? (now > data.expires) : false;
            }
        };

        if (settings.clearOnSubmit) {
            // Most of this can be deleted when form domains are implemented
            /*var input = $('input[type=submit]');
            var form = input.length > 0 ? $(input[0].form) : $();*/

            this.closest('form')
                .submit(function(e){
                    e.preventDefault();
                    // when closest form is submitted
                    $this.each(function(){
                        // delete element data
                        elementData.destroy(this);
                    });
            });
        }

        if (settings.saveOnInterval && !isNaN(settings.saveOnInterval) && parseInt(settings.saveOnInterval) > 0) {
          setInterval(
            function(that){
              for (var i = 0; i < that.length; i++) {
                elementData.save(that[i]);
              }
            },
            parseInt(settings.saveOnInterval),
            this
          );
        }

        $(document).ready(function() {
            settings.beforeLoad.call();

            var data = store.get();
            for (var k in data) {
                // loop through saved data
                // check if data has expired
                if (!elementData.hasExpired(data[k])) {
                    // get key
                    var id = key.get(k);
                    // find respective element & set saved data
                    var $element = $('[' + id[0] + '="' + id[1] + '"]');

                    switch ($element.attr('type')){
                      case 'radio':
                      case 'checkbox':
                        $element.prop('checked', data[k].val);
                        break;
                      case 'select':
                        $element.find("option").filter(function() {
                            // may want to use $.trim in here
                            return $(this).text() === data[k].val;
                        }).attr('selected', true);
                        break;
                      default:
                        $element.val(data[k].val);
                    }
                } else {
                    // if data expired.. delete
                    delete data[key];
                }
            }

            // save data.. in case some keys have been deleted
            store.set(data);

            settings.onLoad.call();
        });

        if (settings.saveOnChange) {
          this.change(function(){
              elementData.save(this);
          });
        }
    }

    return this;
  };

  // defaults may be overridden
  $.fn.ftakar.defaults = {
    savedDataName: 'FTAKAR',
    // saveOnInterval: 2000,
    saveOnInterval: false,
    saveOnChange: true,
    clearOnSubmit: true,
    expireInMs: false,
    // priority by order of attribute
    idAttribs: ['id', 'name', 'data-ftakar'],
    beforeSave: function(){ /*console.info('FTAKAR: data is being saved', this);*/ },
    // $(document).trigger( "ftakar__beforeSave" ); // TODO
    onSave: function(){ /*console.info('FTAKAR: data saved', this);*/ },
    // $(document).trigger( "ftakar__onSave" ); // TODO
    beforeLoad: function(){ /*console.info('FTAKAR: data is being loaded');*/ },
    // $(document).trigger( "ftakar__beforeLoad" ); // TODO
    onLoad: function(){ /*console.info('FTAKAR: data has loaded');*/ },
    // $(document).trigger( "ftakar__onLoad" ); // TODO
    beforeDelete: function(){ /*console.info('FTAKAR: element data is going to be deleted', this);*/ },
    // $(document).trigger( "ftakar__beforeDelete" ); // TODO
    onDelete: function(){ /*console.info('FTAKAR: element data deleted', this);*/ },
    // $(document).trigger( "ftakar__onDelete" ); // TODO
    beforeClear: function(){ /*console.info('FTAKAR: data is going to be cleared');*/ },
    // $(document).trigger( "ftakar__beforeClear" ); // TODO
    onClear: function(){ /*console.info('FTAKAR: data cleared');*/ }
    // $(document).trigger( "ftakar__onClear" ); // TODO
  };
}( jQuery ));
//! moment.js
//! version : 2.11.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        return isArray(this._months) ? this._months[m.month()] :
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             if (this.isValid() && other.isValid()) {
                 return other < this ? this : other;
             } else {
                 return valid__createInvalid();
             }
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(matchOffset, this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this > +localInput;
        } else {
            return +localInput < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this < +localInput;
        } else {
            return +this.clone().endOf(units) < +localInput;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return +this === +localInput;
        } else {
            inputMs = +localInput;
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // JSON.stringify(new Date(NaN)) === 'null'
        return this.isValid() ? this.toISOString() : 'null';
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        // console.log("got", weekYear, week, weekday, "set", date.toISOString());
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = local__createLocal([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add               = add_subtract__add;
    momentPrototype__proto.calendar          = moment_calendar__calendar;
    momentPrototype__proto.clone             = clone;
    momentPrototype__proto.diff              = diff;
    momentPrototype__proto.endOf             = endOf;
    momentPrototype__proto.format            = format;
    momentPrototype__proto.from              = from;
    momentPrototype__proto.fromNow           = fromNow;
    momentPrototype__proto.to                = to;
    momentPrototype__proto.toNow             = toNow;
    momentPrototype__proto.get               = getSet;
    momentPrototype__proto.invalidAt         = invalidAt;
    momentPrototype__proto.isAfter           = isAfter;
    momentPrototype__proto.isBefore          = isBefore;
    momentPrototype__proto.isBetween         = isBetween;
    momentPrototype__proto.isSame            = isSame;
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
    momentPrototype__proto.isValid           = moment_valid__isValid;
    momentPrototype__proto.lang              = lang;
    momentPrototype__proto.locale            = locale;
    momentPrototype__proto.localeData        = localeData;
    momentPrototype__proto.max               = prototypeMax;
    momentPrototype__proto.min               = prototypeMin;
    momentPrototype__proto.parsingFlags      = parsingFlags;
    momentPrototype__proto.set               = getSet;
    momentPrototype__proto.startOf           = startOf;
    momentPrototype__proto.subtract          = add_subtract__subtract;
    momentPrototype__proto.toArray           = toArray;
    momentPrototype__proto.toObject          = toObject;
    momentPrototype__proto.toDate            = toDate;
    momentPrototype__proto.toISOString       = moment_format__toISOString;
    momentPrototype__proto.toJSON            = toJSON;
    momentPrototype__proto.toString          = toString;
    momentPrototype__proto.unix              = unix;
    momentPrototype__proto.valueOf           = to_type__valueOf;
    momentPrototype__proto.creationData      = creationData;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months            =        localeMonths;
    prototype__proto._months           = defaultLocaleMonths;
    prototype__proto.monthsShort       =        localeMonthsShort;
    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
    prototype__proto.monthsParse       =        localeMonthsParse;
    prototype__proto._monthsRegex      = defaultMonthsRegex;
    prototype__proto.monthsRegex       = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex  = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes <= 1           && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   <= 1           && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    <= 1           && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  <= 1           && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.11.1';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.now                   = now;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype             = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));function enableFields() {
    $(".genero").removeAttr('disabled');
    $(".edad").removeAttr('disabled');
    $(".bajo-mensaje").removeAttr('disabled');
    $("#enviar-informe").removeAttr('disabled');
    $(".texto-informe").removeAttr('disabled');
    $(".anecdotario").removeAttr('disabled');
    $(".grabacion-disponible").removeAttr('disabled');
    $(".resultado-llamada").removeAttr('disabled');
    $(".observaciones").removeAttr('disabled');
    $(".voluntario").removeAttr('disabled');
    $(".sugerencia").removeAttr('disabled');
}

function disableFields() {
    $(".genero").attr('disabled', 'disabled');
    $(".edad").attr('disabled', 'disabled');
    $(".bajo-mensaje").attr('disabled', 'disabled');
    $("#enviar-informe").attr('disabled', 'disabled');
    $(".texto-informe").attr('disabled', 'disabled');
    $(".anecdotario").attr('disabled', 'disabled');
    $(".grabacion-disponible").attr('disabled', 'disabled');
    $(".resultado-llamada").attr('disabled', 'disabled');
    $(".observaciones").attr('disabled', 'disabled');
    $(".voluntario").attr('disabled', 'disabled');
    $(".sugerencia").attr('disabled', 'disabled');
}

function handleContenedorInferior(form) {
    $("#llamada-establecida").change(function() {
        if ($("#llamada-establecida option:selected").val() === "Si") {
            form.data('formValidation').addField('email', {
                validators: {
                    emailAddress: {
                        message: 'El email no es válido',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('email', true);
                            }
                        },
                    },
                },
            });
            form.data('formValidation').addField('dni', {
                validators: {
                    integer: {
                        message: 'El DNI sólo puede constar de números',
                        thousandsSeparator: '.',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('dni', true);
                            }
                        },
                    },
                    stringLength: {
                        message: 'El DNI debe tener de %s a %s dígitos',
                        trim: true,
                        min: 7,
                        max: 10,
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('dni', true);
                            }
                        },
                    },
                },
            });
            $(".contenedor-inferior").removeClass('slideUp').addClass('slideDown');
            enableFields();
            $('.nombre').focus();
        }
        else {
            $(".contenedor-inferior").removeClass('slideDown').addClass('slideUp')
            
            form.data('formValidation').removeField('email');
            form.data('formValidation').removeField('dni');
            disableFields();
            $('.texto-informe').focus();
        }
    })
}

function handleInforme(form) {
    $("#enviar-informe").change(function() {
        if ($("#enviar-informe option:selected").val() === "Si") {
            form.data('formValidation').addField('textoInforme', {
                validators: {
                    notEmpty: {
                        message: 'El informe no puede estar vacío',
                    },
                },
            });
            
            $(".texto-informe").removeAttr('disabled');
            $(".texto-informe").removeClass('slideUp').addClass('slideDown');
        }
        else {
            $(".texto-informe").removeClass('slideDown').addClass('slideUp');
            $(".texto-informe").next().hide();
            $(".texto-informe").attr('disabled', 'disabled');
            $("#enviar-informe").parents('.form-group').removeClass('has-feedback has-success');
            $("#enviar-informe").parents('.form-group').removeClass('has-feedback has-error');
        }
    });
}

function handleSugerencia(form) {
    $("#enviar-sugerencia").change(function() {
        if ($("#enviar-sugerencia option:selected").val() === "Si") {
            form.data('formValidation').addField('textoSugerencia', {
                validators: {
                    notEmpty: {
                        message: 'La sugerencia no puede estar vacía',
                    },
                },
            });
            
            $(".texto-sugerencia").removeAttr('disabled');
            $(".texto-sugerencia").removeClass('slideUp').addClass('slideDown');
        }
        else {
            $(".texto-sugerencia").removeClass('slideDown').addClass('slideUp');
            $(".texto-sugerencia").next().hide();
            $(".texto-sugerencia").attr('disabled', 'disabled');
            $("#enviar-sugerencia").parents('.form-group').removeClass('has-feedback has-success');
            $("#enviar-sugerencia").parents('.form-group').removeClass('has-feedback has-error');
        }
    });
}

function initValidator(form) {
    var options = {
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            campana: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de la campaña no puede estar vacío',
                    },
                }
            },
            fecha: {
                icon: false,
                validators: {
                    date: {
                        message: 'La fecha no es válida',
                        format: 'DD/MM/YYYY',
                        min: '31/12/2015',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('fecha', true);
                            }
                        }, 
                    },
                },
            },
            hora: {
                icon: false,
                validators: {
                    regexp: {
                        message: 'La hora no es valida',
                        regexp: '^([0-9]|0[0-9]|1?[0-9]|2[0-3]):[0-5]?[0-9]$',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('hora', true);
                            }
                        },
                    },
                },
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'El teléfono no puede estar vacío',
                    },
                },
            },
        },
    };
    
    form.formValidation(options)
        .on('success.field.fv', function(e, data) {
            element = $(data.element);
            
            if (element.hasClass('observaciones') || (element.is('#enviarInforme') && element.val() === 'No')) {
                var $parent = data.element.parents('.form-group');
                
                $parent.removeClass('has-feedback has-success');
                data.element.data('fv.icon').hide();
            }

        })
        .on('success.form.fv', function(e) {
                e.preventDefault();
        })
    
    handleContenedorInferior(form);
    handleInforme(form);
    handleSugerencia(form);
}

function send(form, callback) {
    var destination = form.attr("action");
    var data = form.serialize();
    
    $.ajax(destination, {
        success: function(data) {
            callback();
        },
        error: function(xhr, status, error) {
            alert("No se pudo establecer una conexión con el servidor.\nIntente guardar el registro otra vez.")
            $(".btn-submit").enable();
        },
        data: data,
        method: 'POST',
    });
}

$(document).ready(function() {   
    initValidator($('#formulario'));
    
    $('.campana').ftakar({
        saveOnChange: true,
        clearOnSubmit: false,
        savedDataName: 'CRM',
        beforeSave: function(){ },
        onLoad: function() {
            $('.campana').val().length > 0 ? $('.telefono').focus() : $('.campana').focus();
        },
    });
    
    $(".fecha").val(moment().format('DD/MM/YYYY'));
    $(".hora").val(moment().format('HH:mm'));
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        language: 'es',
    });
    $('.time-picker').timepicker({
        template: 'dropdown',
        maxHours: 24,
        minuteStep: 1,
        showMeridian: false,
        defaultTime: false,
        explicitMode: true,
    });
    
    $('.campana').val().length > 0 ? $('.telefono').focus() : $('.campana').focus();
    
    $('#modal-success').on('hidden.bs.modal', function () {
        $('#formulario').data('formValidation').destroy();
        
        location.reload();
    });
    
    $("#formulario").submit(function(event) {
        event.preventDefault();
        
        if ($("#llamada-establecida option:selected").val() === "No") {
            disableFields();
        }
        
        if ($("#enviar-informe option:selected").val() === "No") {
            $(".texto-informe").attr('disabled', 'disabled');
        }
        
        if ($(this).data('formValidation').getMessages().length === 0) {
            send($(this), function() {
                $('#modal-success').modal({
                    keyboard: true,
                    show: true,
                });                         
            }); 
        }
        else {
            if ($("#enviar-informe option:selected").val() === "No") {
                $('#enviar-informe').closest('.has-feedback').removeClass('has-feedback has-success');
            }
            if ($(".observaciones").text() === "") {
                $('.observaciones').closest('.has-feedback').removeClass('has-feedback has-success');
                $('.observaciones').next().remove();
            }
        }
    });
});
