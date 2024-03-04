var p=(P,h,m)=>new Promise((_,y)=>{var D=n=>{try{r(m.next(n))}catch(f){y(f)}},A=n=>{try{r(m.throw(n))}catch(f){y(f)}},r=n=>n.done?_(n.value):Promise.resolve(n.value).then(D,A);r((m=m.apply(P,h)).next())});import{g as j,d as q,a as J,p as W}from"./menu-JmWWhmPT.js";import{u as X,_ as G}from"./Table.vue_vue_type_script_lang-mknq5iMW.js";import{d as H,I as K,q as v}from"./index-E_cr-WWq.js";import{_ as Q}from"./ContentWrap.vue_vue_type_script_setup_true_lang-M_zuHec9.js";import{_ as Y}from"./Write.vue_vue_type_script_setup_true_lang-XTlfWAC-.js";import{_ as Z}from"./Dialog.vue_vue_type_style_index_0_lang-ZHiEjFP2.js";import{u as ee}from"./dict-5fAUqSge.js";import{s as te}from"./dict-JIKqt6Z4.js";import{z as S,m as ae,g as le}from"./element-plus-LfFKO5To.js";import{l as oe,a as s,J as se,O as a,P as c,_ as x,as as C,V as w,m as M,p as ne,R as i,u as l,W as $,U as z,X as ie}from"./vue-chunks-NBL-ZipP.js";import"./useForm-agan0gLz.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";import"./_Uint8Array-x8CL7VG0.js";import"./useValidator-b4d-vg8t.js";import"./dict-vhQapUcV.js";const Ae=oe({name:"AuthMenu",__name:"Menu",setup(P){const{t:h}=H(),{tableRegister:m,tableState:_,tableMethods:y}=X({fetchDataApi:()=>p(this,null,function*(){const{pageSize:t,currentPage:e}=_,o=yield j({page:l(e),limit:l(t)});return{list:o.data||[],total:o.count||0}}),fetchDelApi:t=>p(this,null,function*(){return(yield q(t)).code===200})}),{dataList:D,loading:A}=_,{getList:r,delList:n}=y;let f=s([]);p(this,null,function*(){const e=yield ee().getDictObj(["sys_vadmin_menu_type"]);f.value=e.sys_vadmin_menu_type});const B=se([{field:"title",label:"菜单名称",width:"200px",disabled:!0,show:!0},{field:"icon",label:"图标",width:"120px",show:!1,slots:{default:t=>{const e=t.row;return a(c,null,[e.icon?a(K,{icon:e.icon},null):""])}}},{field:"order",label:"排序",width:"120px",show:!0},{field:"menu_type",label:"菜单类型",width:"120px",show:!0,slots:{default:t=>{const e=t.row;return a(c,null,[a("span",null,[te(f.value,e.menu_type)])])}}},{field:"perms",label:"权限标识",width:"150px",show:!0},{field:"path",label:"路由地址",show:!0},{field:"component",label:"组件路径",show:!0},{field:"noCache",label:"页面缓存",width:"120px",show:!0,slots:{default:t=>{const e=t.row;return a(c,null,[a(S,{modelValue:!e.noCache,disabled:!0},null)])}}},{field:"hidden",label:"显示状态",width:"120px",show:!0,slots:{default:t=>{const e=t.row;return a(c,null,[a(S,{modelValue:!e.hidden,disabled:!0},null)])}}},{field:"disabled",label:"菜单状态",width:"120px",show:!0,slots:{default:t=>{const e=t.row;return a(c,null,[a(S,{modelValue:!e.disabled,disabled:!0},null)])}}},{field:"action",width:"200px",label:"操作",show:!0,slots:{default:t=>{const e=t.row,o=["auth.menu.update"],k=["auth.menu.create"],U=["auth.menu.delete"];return a(c,null,[x(a(v,{type:"primary",link:!0,size:"small",onClick:()=>E(e)},{default:()=>[w("编辑")]}),[[C("hasPermi"),o]]),x(a(v,{type:"primary",link:!0,size:"small",onClick:()=>I(e)},{default:()=>[w("添加子菜单")]}),[[C("hasPermi"),k]]),x(a(v,{type:"danger",loading:V.value,link:!0,size:"small",onClick:()=>T(e)},{default:()=>[w("删除")]}),[[C("hasPermi"),U]])])}}}]),V=s(!1),T=t=>p(this,null,function*(){V.value=!0,yield n(!0,[t.id]).finally(()=>{V.value=!1})}),u=s(!1),g=s(""),b=s(),L=s(void 0),d=s(""),O=s(),R=s(!1),E=t=>{g.value="编辑",d.value="edit",b.value=t,u.value=!0},F=()=>{g.value="新增",d.value="add",b.value=void 0,u.value=!0},I=t=>{g.value="添加子菜单",d.value="addSon",L.value=t.id,b.value=void 0,u.value=!0},N=()=>p(this,null,function*(){const t=l(O),e=yield t==null?void 0:t.submit();if(e){R.value=!0;try{const o=s({});d.value==="add"||d.value==="addSon"?(o.value=yield J(e),o.value&&(L.value=void 0,u.value=!1,r())):d.value==="edit"&&(o.value=yield W(e),o.value&&(u.value=!1,r()))}finally{R.value=!1}}});return(t,e)=>{const o=C("hasPermi");return M(),ne(c,null,[a(l(Q),null,{default:i(()=>[a(l(G),{columns:B,showAction:"","default-expand-all":"","node-key":"id",data:l(D),loading:l(A),onRegister:l(m),onRefresh:l(r)},{toolbar:i(()=>[a(l(ae),{gutter:10},{default:i(()=>[a(l(le),{span:1.5},{default:i(()=>[x((M(),$(l(v),{type:"primary",onClick:F},{default:i(()=>[w("新增菜单")]),_:1})),[[o,["auth.menu.create"]]])]),_:1})]),_:1})]),_:1},8,["columns","data","loading","onRegister","onRefresh"])]),_:1}),a(l(Z),{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=k=>u.value=k),title:g.value},{footer:i(()=>[d.value!=="detail"?(M(),$(l(v),{key:0,type:"primary",loading:R.value,onClick:N},{default:i(()=>[w(z(l(h)("exampleDemo.save")),1)]),_:1},8,["loading"])):ie("",!0),a(l(v),{onClick:e[0]||(e[0]=k=>u.value=!1)},{default:i(()=>[w(z(l(h)("dialogDemo.close")),1)]),_:1})]),default:i(()=>[a(Y,{ref_key:"writeRef",ref:O,"current-row":b.value,"parent-id":L.value},null,8,["current-row","parent-id"])]),_:1},8,["modelValue","title"])],64)}}});export{Ae as default};
//# sourceMappingURL=Menu-OCXrJgUq.js.map
