var b=(I,A,l)=>new Promise((m,w)=>{var n=u=>{try{i(l.next(u))}catch(f){w(f)}},o=u=>{try{i(l.throw(u))}catch(f){w(f)}},i=u=>u.done?m(u.value):Promise.resolve(u.value).then(n,o);i((l=l.apply(I,A)).next())});import{aa as L,ab as _,l as k,s as h,m as x,p as P,a as C}from"./vue-chunks-NBL-ZipP.js";import{r as E,o as S,_ as j}from"./index-E_cr-WWq.js";import"./element-plus-LfFKO5To.js";var U={exports:{}};(function(I,A){(function(l,m){I.exports=m()})(L,function(){function l(e){var r=[];return e.AMapUI&&r.push(m(e.AMapUI)),e.Loca&&r.push(w(e.Loca)),Promise.all(r)}function m(e){return new Promise(function(r,a){var s=[];if(e.plugins)for(var t=0;t<e.plugins.length;t+=1)o.AMapUI.plugins.indexOf(e.plugins[t])==-1&&s.push(e.plugins[t]);if(i.AMapUI===n.failed)a("前次请求 AMapUI 失败");else if(i.AMapUI===n.notload){i.AMapUI=n.loading,o.AMapUI.version=e.version||o.AMapUI.version,t=o.AMapUI.version;var c=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+t+"/main.js",d.onerror=function(p){i.AMapUI=n.failed,a("请求 AMapUI 失败")},d.onload=function(){if(i.AMapUI=n.loaded,s.length)window.AMapUI.loadUI(s,function(){for(var p=0,M=s.length;p<M;p++){var g=s[p].split("/").slice(-1)[0];window.AMapUI[g]=arguments[p]}for(r();u.AMapUI.length;)u.AMapUI.splice(0,1)[0]()});else for(r();u.AMapUI.length;)u.AMapUI.splice(0,1)[0]()},c.appendChild(d)}else i.AMapUI===n.loaded?e.version&&e.version!==o.AMapUI.version?a("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,function(){for(var p=0,M=s.length;p<M;p++){var g=s[p].split("/").slice(-1)[0];window.AMapUI[g]=arguments[p]}r()}):r():e.version&&e.version!==o.AMapUI.version?a("不允许多个版本 AMapUI 混用"):u.AMapUI.push(function(p){p?a(p):s.length?window.AMapUI.loadUI(s,function(){for(var M=0,g=s.length;M<g;M++){var y=s[M].split("/").slice(-1)[0];window.AMapUI[y]=arguments[M]}r()}):r()})})}function w(e){return new Promise(function(r,a){if(i.Loca===n.failed)a("前次请求 Loca 失败");else if(i.Loca===n.notload){i.Loca=n.loading,o.Loca.version=e.version||o.Loca.version;var s=o.Loca.version,t=o.AMap.version.startsWith("2"),c=s.startsWith("2");if(t&&!c||!t&&c)a("JSAPI 与 Loca 版本不对应！！");else{t=o.key,c=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+s+"&key="+t,d.onerror=function(p){i.Loca=n.failed,a("请求 AMapUI 失败")},d.onload=function(){for(i.Loca=n.loaded,r();u.Loca.length;)u.Loca.splice(0,1)[0]()},c.appendChild(d)}}else i.Loca===n.loaded?e.version&&e.version!==o.Loca.version?a("不允许多个版本 Loca 混用"):r():e.version&&e.version!==o.Loca.version?a("不允许多个版本 Loca 混用"):u.Loca.push(function(p){p?a(p):a()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var n;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(n||(n={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},u={AMap:[],AMapUI:[],Loca:[]},f=[],v=function(e){typeof e=="function"&&(i.AMap===n.loaded?e(window.AMap):f.push(e))};return{load:function(e){return new Promise(function(r,a){if(i.AMap==n.failed)a("");else if(i.AMap==n.notload){var s=e.key,t=e.version,c=e.plugins;s?(window.AMap&&location.host!=="lbs.amap.com"&&a("禁止多种API加载方式混用"),o.key=s,o.AMap.version=t||o.AMap.version,o.AMap.plugins=c||o.AMap.plugins,i.AMap=n.loading,t=document.body||document.head,window.___onAPILoaded=function(p){if(delete window.___onAPILoaded,p)i.AMap=n.failed,a(p);else for(i.AMap=n.loaded,l(e).then(function(){r(window.AMap)}).catch(a);f.length;)f.splice(0,1)[0]()},c=document.createElement("script"),c.type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+s+"&plugin="+o.AMap.plugins.join(","),c.onerror=function(p){i.AMap=n.failed,a(p)},t.appendChild(c)):a("请填写key")}else if(i.AMap==n.loaded)if(e.key&&e.key!==o.key)a("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)a("不允许多个版本 JSAPI 混用");else{if(s=[],e.plugins)for(t=0;t<e.plugins.length;t+=1)o.AMap.plugins.indexOf(e.plugins[t])==-1&&s.push(e.plugins[t]);s.length?window.AMap.plugin(s,function(){l(e).then(function(){r(window.AMap)}).catch(a)}):l(e).then(function(){r(window.AMap)}).catch(a)}else if(e.key&&e.key!==o.key)a("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)a("不允许多个版本 JSAPI 混用");else{var d=[];if(e.plugins)for(t=0;t<e.plugins.length;t+=1)o.AMap.plugins.indexOf(e.plugins[t])==-1&&d.push(e.plugins[t]);v(function(){d.length?window.AMap.plugin(d,function(){l(e).then(function(){r(window.AMap)}).catch(a)}):l(e).then(function(){r(window.AMap)}).catch(a)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},u={AMap:[],AMapUI:[],Loca:[]}}}})})(U);var O=U.exports;const W=_(O),J=()=>E.get({url:"/vadmin/record/analysis/user/login/distribute"}),z={id:"map-container"},B=k({name:"DashboardMap",__name:"Map",setup(I){let A=h(),l=h();const m=()=>b(this,null,function*(){const n=yield S({tab_id:8});n&&W.load({key:n.data.map_key,version:"2.0",plugins:[""]}).then(o=>b(this,null,function*(){l.value=o,A.value=new o.Map("map-container",{pitch:n.data.map_pitch,terrain:!0,viewMode:n.data.map_view_mode,zoom:n.data.map_zoom,resizeEnable:!0,mapStyle:n.data.map_style,center:JSON.parse(n.data.map_center)}),yield w()})).catch(o=>{console.log(o)})}),w=()=>b(this,null,function*(){const n=new l.value.InfoWindow({offset:new l.value.Pixel(2,15),closeWhenClickMap:!0,isCustom:!0,anchor:"top-left"}),o=yield J();if(o){const i=o.data.map(u=>{const f=u.center;let v=C();if(u.total>40){v.value=new l.value.Marker({position:f,offset:new l.value.Pixel(0,15)});var e=document.createElement("div");e.className="alarmDevice",v.value.setContent(e)}else v.value=new l.value.CircleMarker({center:f,radius:u.total>30?20:u.total/2,strokeColor:"#f05b72",strokeWeight:2,strokeOpacity:.5,fillColor:"#f05b72",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0});return v.value.on("mouseover",()=>{n.setContent(`<div class="description">
              <div class="name-box">
                <span class="point"></span>
                <span class="name">${u.name}</span>
              </div>
              <span>${u.total}</span>
            </div>`),n.open(A.value,f)}),v.value.on("mouseout",()=>{n.close(A.value,f)}),v.value});A.value.add(i)}});return m(),(n,o)=>(x(),P("div",z))}}),F=j(B,[["__scopeId","data-v-39914f2a"]]);export{F as default};
//# sourceMappingURL=Map-Nd8Uc-uZ.js.map
