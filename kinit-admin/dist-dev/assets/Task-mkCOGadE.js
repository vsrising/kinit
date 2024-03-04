var q=Object.defineProperty;var V=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var j=(l,o,t)=>o in l?q(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t,D=(l,o)=>{for(var t in o||(o={}))E.call(o,t)&&j(l,t,o[t]);if(V)for(var t of V(o))J.call(o,t)&&j(l,t,o[t]);return l};var x=(l,o,t)=>new Promise((d,m)=>{var k=r=>{try{u(t.next(r))}catch(p){m(p)}},w=r=>{try{u(t.throw(r))}catch(p){m(p)}},u=r=>r.done?d(r.value):Promise.resolve(r.value).then(k,w);u((t=t.apply(l,o)).next())});import{u as F,_ as M}from"./Table.vue_vue_type_script_lang-mknq5iMW.js";import{d as W,q as O}from"./index-E_cr-WWq.js";import{_ as X}from"./Search.vue_vue_type_script_setup_true_lang-FyVOhxsu.js";import{_ as G}from"./ContentWrap.vue_vue_type_script_setup_true_lang-M_zuHec9.js";import{_ as H}from"./Detail.vue_vue_type_script_setup_true_lang-4H061Dhr.js";import{_ as K}from"./Dialog.vue_vue_type_style_index_0_lang-ZHiEjFP2.js";import{s as Q}from"./dict-JIKqt6Z4.js";import{u as Y}from"./dict-5fAUqSge.js";import{l as Z,aC as ee,a as c,J as T,O as n,P as y,V as $,m as z,p as te,R as b,u as a,B,U as ae,W as oe,X as se}from"./vue-chunks-NBL-ZipP.js";import{g as le}from"./task-P-hTJlj1.js";import"./element-plus-LfFKO5To.js";import"./useForm-agan0gLz.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";import"./_Uint8Array-x8CL7VG0.js";import"./useIcon-gh8Uv9vA.js";import"./Descriptions-Gy4zuAOG.js";/* empty css              */import"./dict-vhQapUcV.js";const Ce=Z({name:"SystemRecordTask",__name:"Task",setup(l){const{t:o}=W(),{currentRoute:t}=ee(),d=t.value.query.job_id,m=c([]);x(this,null,function*(){const e=yield Y().getDictObj(["vadmin_system_task_exec_strategy"]);m.value=e.vadmin_system_task_exec_strategy});const{tableRegister:w,tableState:u,tableMethods:r}=F({immediate:!1,fetchDataApi:()=>x(this,null,function*(){const{pageSize:s,currentPage:e}=u,i=yield le(D({page:a(e),limit:a(s)},a(v)));return{list:i.data||[],total:i.count||0}})}),{dataList:p,loading:L,total:N,pageSize:h,currentPage:f}=u,{getList:_}=r,U=T([{field:"job_id",label:"任务编号",show:!0,disabled:!0,width:"240px"},{field:"name",label:"任务名称",show:!0,disabled:!0},{field:"group",label:"任务分组",show:!0,span:2},{field:"job_class",label:"调用目标",show:!0},{field:"exec_strategy",label:"执行策略",show:!0,slots:{default:s=>{const e=s.row;return n(y,null,[n("div",null,[Q(m.value,e.exec_strategy)])])}}},{field:"expression",label:"表达式",show:!0,span:24},{field:"start_time",label:"开始执行时间",show:!1,width:"200px"},{field:"end_time",label:"执行完成时间",width:"200px",show:!0},{field:"process_time",label:"耗时(秒)",width:"110px",show:!0},{field:"retval",label:"任务返回值",show:!0,slots:{default:s=>{const e=s.row;return JSON.parse(e.retval)}}},{field:"exception",label:"异常信息",show:!1,span:24},{field:"traceback",label:"堆栈跟踪",show:!1,width:"100px"},{field:"action",width:"100px",label:"操作",show:!0,disabled:!0,slots:{default:s=>{const e=s.row;return n(y,null,[n(O,{type:"primary",link:!0,size:"small",onClick:()=>I(e)},{default:()=>[$("详情")]})])}}}]),A=T([{field:"job_id",label:"任务编号",component:"Input",componentProps:{clearable:!0,style:{width:"240px"}},value:d},{field:"name",label:"任务名称",component:"Input",componentProps:{clearable:!0}}]),v=c({}),S=s=>{f.value=1,v.value=s,_()},g=c(!1),R=c(""),C=c(),P=c(""),I=s=>{R.value=o("exampleDemo.detail"),P.value="detail",C.value=s,g.value=!0};return d&&(v.value={job_id:d}),_(),(s,e)=>(z(),te(y,null,[n(a(G),null,{default:b(()=>[n(a(X),{schema:A,onReset:S,onSearch:S},null,8,["schema"]),n(a(M),{"current-page":a(f),"onUpdate:currentPage":e[0]||(e[0]=i=>B(f)?f.value=i:null),"page-size":a(h),"onUpdate:pageSize":e[1]||(e[1]=i=>B(h)?h.value=i:null),showAction:"",columns:U,"node-key":"id",data:a(p),loading:a(L),pagination:{total:a(N)},onRegister:a(w),onRefresh:a(_)},null,8,["current-page","page-size","columns","data","loading","pagination","onRegister","onRefresh"])]),_:1}),n(a(K),{modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=i=>g.value=i),title:R.value,width:"800px"},{footer:b(()=>[n(a(O),{onClick:e[2]||(e[2]=i=>g.value=!1)},{default:b(()=>[$(ae(a(o)("dialogDemo.close")),1)]),_:1})]),default:b(()=>[P.value==="detail"?(z(),oe(H,{key:0,"current-row":C.value},null,8,["current-row"])):se("",!0)]),_:1},8,["modelValue","title"])],64))}});export{Ce as default};
//# sourceMappingURL=Task-mkCOGadE.js.map