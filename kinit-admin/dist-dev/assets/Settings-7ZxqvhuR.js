var f=(d,l,s)=>new Promise((u,r)=>{var i=n=>{try{_(s.next(n))}catch(o){r(o)}},a=n=>{try{_(s.throw(n))}catch(o){r(o)}},_=n=>n.done?u(n.value):Promise.resolve(n.value).then(i,a);_((s=s.apply(d,l)).next())});import{_ as w}from"./Basic.vue_vue_type_style_index_0_lang-HsawsU2H.js";import{_ as g}from"./Privacy.vue_vue_type_script_setup_true_lang-C7LhWC1_.js";import{_ as v}from"./Agreement.vue_vue_type_script_setup_true_lang-XRaPyUfw.js";import{_ as $}from"./WechatServer.vue_vue_type_script_setup_true_lang-0_kKG3N-.js";import{_ as S}from"./Email.vue_vue_type_script_setup_true_lang-kFmo7sLY.js";import{_ as V}from"./SMS.vue_vue_type_script_setup_true_lang--XJrtie6.js";import{_ as x}from"./ContentWrap.vue_vue_type_script_setup_true_lang-M_zuHec9.js";import{a0 as B}from"./index-E_cr-WWq.js";import{k as C,l as E}from"./element-plus-LfFKO5To.js";import{l as L,a as c,m as e,W as t,R as m,u as b,P as p,X as y,p as k,a7 as N,O as T}from"./vue-chunks-NBL-ZipP.js";import"./useForm-agan0gLz.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";import"./useValidator-b4d-vg8t.js";const I=L({name:"SystemSettings",__name:"Settings",setup(d){const l=c("web_basic"),s=c([]);return f(this,null,function*(){const r=yield B(["web","aliyun"]);r&&(s.value=r.data)}),(r,i)=>(e(),t(b(x),null,{default:m(()=>[T(b(C),{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=a=>l.value=a)},{default:m(()=>[(e(!0),k(p,null,N(s.value,a=>(e(),k(p,{key:a.id},[a.hidden?y("",!0):(e(),t(b(E),{key:0,name:a.tab_name,label:a.tab_label},{default:m(()=>[a.tab_name==="web_basic"?(e(),t(w,{key:0,"tab-id":a.id},null,8,["tab-id"])):a.tab_name==="web_privacy"?(e(),t(g,{key:1,"tab-id":a.id},null,8,["tab-id"])):a.tab_name==="web_agreement"?(e(),t(v,{key:2,"tab-id":a.id},null,8,["tab-id"])):a.tab_name==="wx_server"?(e(),t($,{key:3,"tab-id":a.id},null,8,["tab-id"])):a.tab_name==="web_email"?(e(),t(S,{key:4,"tab-id":a.id},null,8,["tab-id"])):a.tab_name==="aliyun_sms"?(e(),t(V,{key:5,"tab-id":a.id},null,8,["tab-id"])):y("",!0)]),_:2},1032,["name","label"]))],64))),128))]),_:1},8,["modelValue"])]),_:1}))}});export{I as default};
//# sourceMappingURL=Settings-7ZxqvhuR.js.map