var d=(c,n,a)=>new Promise((i,p)=>{var m=e=>{try{o(a.next(e))}catch(s){p(s)}},u=e=>{try{o(a.throw(e))}catch(s){p(s)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(m,u);o((a=a.apply(c,n)).next())});import{u as b,F as I}from"./useForm-agan0gLz.js";import{i as S,q as A,a1 as D,o as V}from"./index-E_cr-WWq.js";import{u as E}from"./useValidator-b4d-vg8t.js";import{b as v}from"./element-plus-LfFKO5To.js";import{l as F,J as w,O as x,V as k,P as B,a as y,m as C,W as R,u as g}from"./vue-chunks-NBL-ZipP.js";const $=F({__name:"WechatServer",props:{tabId:S.number},setup(c){const{required:n}=E(),a=c,i=w([{field:"wx_server_app_id",label:"AppID",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"wx_server_app_secret",label:"AppSecret",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"wx_server_email",label:"官方邮件",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"wx_server_phone",label:"服务热线",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"wx_server_site",label:"官方邮箱",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"active",label:"",colProps:{span:24},formItemProps:{slots:{default:()=>x(B,null,[x(A,{loading:l.value,type:"primary",onClick:h},{default:()=>[k("立即提交")]})])}}}]),p=w({wx_server_app_id:[n()],wx_server_app_secret:[n()]}),{formRegister:m,formMethods:u}=b(),{setValues:o,getFormData:e,getElFormExpose:s}=u;let P=y({});const f=()=>d(this,null,function*(){const t=yield V({tab_id:a.tabId});if(t){yield o(t.data),P.value=t.data;const r=yield s();r==null||r.clearValidate()}}),l=y(!1),h=()=>d(this,null,function*(){const t=yield s();if(yield t==null?void 0:t.validate()){const _=yield e();if(l.value=!0,!_)return l.value=!1,v.error("未获取到数据");try{if(yield D(_))return f(),v.success("更新成功")}finally{l.value=!1}}});return f(),(t,r)=>(C(),R(g(I),{rules:p,onRegister:g(m),schema:i},null,8,["rules","onRegister","schema"]))}});export{$ as _};
//# sourceMappingURL=WechatServer.vue_vue_type_script_setup_true_lang-0_kKG3N-.js.map
