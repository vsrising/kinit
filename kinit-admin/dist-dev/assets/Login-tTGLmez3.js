var N=Object.defineProperty;var z=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(n,a,e)=>a in n?N(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,D=(n,a)=>{for(var e in a||(a={}))M.call(a,e)&&C(n,e,a[e]);if(z)for(var e of z(a))j.call(a,e)&&C(n,e,a[e]);return n};var y=(n,a,e)=>new Promise((c,g)=>{var _=i=>{try{d(e.next(i))}catch(p){g(p)}},f=i=>{try{d(e.throw(i))}catch(p){g(p)}},d=i=>i.done?c(i.value):Promise.resolve(i.value).then(_,f);d((e=e.apply(n,a)).next())});import{r as F,d as J,q as L}from"./index-E_cr-WWq.js";import{u as W,_ as X}from"./Table.vue_vue_type_script_lang-mknq5iMW.js";import{_ as G}from"./Search.vue_vue_type_script_setup_true_lang-FyVOhxsu.js";import{_ as H}from"./ContentWrap.vue_vue_type_script_setup_true_lang-M_zuHec9.js";import{_ as K}from"./Detail.vue_vue_type_script_setup_true_lang-vhQ0Ba-l.js";import{_ as Q}from"./Dialog.vue_vue_type_style_index_0_lang-ZHiEjFP2.js";import{s as O}from"./dict-JIKqt6Z4.js";import{u as Y}from"./dict-5fAUqSge.js";import{z as Z}from"./element-plus-LfFKO5To.js";import{l as ee,a as u,J as $,O as s,P as m,V as B,m as I,p as te,R as w,u as l,B as T,U as le,W as ae,X as oe}from"./vue-chunks-NBL-ZipP.js";import"./useForm-agan0gLz.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";import"./_Uint8Array-x8CL7VG0.js";import"./useIcon-gh8Uv9vA.js";import"./Descriptions-Gy4zuAOG.js";/* empty css              */import"./dict-vhQapUcV.js";const se=n=>F.get({url:"/vadmin/record/logins",params:n}),Re=ee({name:"SystemRecordLogin",__name:"Login",setup(n){const{t:a}=J(),e=u([]),c=u([]);y(this,null,function*(){const t=yield Y().getDictObj(["sys_vadmin_platform","sys_vadmin_login_method"]);e.value=t.sys_vadmin_platform,c.value=t.sys_vadmin_login_method});const{tableRegister:_,tableState:f,tableMethods:d}=W({fetchDataApi:()=>y(this,null,function*(){const{pageSize:o,currentPage:t}=f,r=yield se(D({page:l(t),limit:l(o)},l(S)));return{list:r.data||[],total:r.count||0}})}),{dataList:i,loading:p,total:U,pageSize:v,currentPage:b}=f,{getList:x}=d,q=$([{field:"id",label:"编号",show:!0,disabled:!0,width:"120px"},{field:"telephone",label:"手机号",width:"150px",show:!0,disabled:!0},{field:"status",label:"登录状态",show:!0,slots:{default:o=>s(m,null,[s(Z,{modelValue:o.row.status,size:"small",disabled:!0},null)])}},{field:"platform",label:"登录平台",width:"150px",show:!0,slots:{default:o=>s(m,null,[s("div",null,[O(e.value,o.row.platform)])])}},{field:"login_method",label:"认证方式",width:"150px",show:!0,slots:{default:o=>s(m,null,[s("div",null,[O(c.value,o.row.login_method)])])}},{field:"ip",label:"登录地址",show:!0,disabled:!0,width:"150px"},{field:"address",label:"登录地点",show:!0},{field:"postal_code",label:"邮政编码",show:!1},{field:"area_code",label:"地区区号",show:!1},{field:"browser",label:"浏览器",show:!0},{field:"system",label:"操作系统",show:!0},{field:"response",label:"响应信息",show:!1,disabled:!0},{field:"request",label:"请求信息",show:!1,disabled:!0},{field:"create_datetime",label:"创建时间",show:!0,sortable:!0},{field:"action",label:"操作",show:!0,width:100,slots:{default:o=>{const t=o.row;return s(m,null,[s(L,{type:"primary",link:!0,onClick:()=>E(t,"detail")},{default:()=>[B("详情")]})])}}}]),A=$([{field:"telephone",label:"手机号",component:"Input",componentProps:{clearable:!1,style:{width:"214px"}}},{field:"platform",label:"登录平台",component:"Select",componentProps:{style:{width:"214px"},options:e.value}},{field:"ip",label:"登录地址",component:"Input",componentProps:{clearable:!1,style:{width:"214px"}}},{field:"address",label:"登录地点",component:"Input",componentProps:{clearable:!1,style:{width:"214px"}}},{field:"status",label:"登录状态",component:"Select",componentProps:{style:{width:"214px"},options:[{label:"登录成功",value:!0},{label:"登录失败",value:!1}]}}]),S=u({}),P=o=>{b.value=1,S.value=o,x()},h=u(!1),R=u(""),V=u(),k=u(""),E=(o,t)=>{R.value=a("exampleDemo.detail"),k.value=t,V.value=o,h.value=!0};return(o,t)=>(I(),te(m,null,[s(l(H),null,{default:w(()=>[s(l(G),{schema:A,onReset:P,onSearch:P},null,8,["schema"]),s(l(X),{"current-page":l(b),"onUpdate:currentPage":t[0]||(t[0]=r=>T(b)?b.value=r:null),"page-size":l(v),"onUpdate:pageSize":t[1]||(t[1]=r=>T(v)?v.value=r:null),showAction:"",columns:q,"node-key":"id",data:l(i),loading:l(p),pagination:{total:l(U)},onRegister:l(_),onRefresh:l(x)},null,8,["current-page","page-size","columns","data","loading","pagination","onRegister","onRefresh"])]),_:1}),s(l(Q),{modelValue:h.value,"onUpdate:modelValue":t[3]||(t[3]=r=>h.value=r),title:R.value,width:"800px"},{footer:w(()=>[s(l(L),{onClick:t[2]||(t[2]=r=>h.value=!1)},{default:w(()=>[B(le(l(a)("dialogDemo.close")),1)]),_:1})]),default:w(()=>[k.value==="detail"?(I(),ae(K,{key:0,"current-row":V.value},null,8,["current-row"])):oe("",!0)]),_:1},8,["modelValue","title"])],64))}});export{Re as default};
//# sourceMappingURL=Login-tTGLmez3.js.map