var f=(p,s,t)=>new Promise((c,l)=>{var m=e=>{try{r(t.next(e))}catch(o){l(o)}},u=e=>{try{r(t.throw(e))}catch(o){l(o)}},r=e=>e.done?c(e.value):Promise.resolve(e.value).then(m,u);r((t=t.apply(p,s)).next())});import{u as x,F as I}from"./useForm-agan0gLz.js";import{i as V,q as D,a1 as E,o as S}from"./index-E_cr-WWq.js";import{u as A}from"./useValidator-b4d-vg8t.js";import{b as g}from"./element-plus-LfFKO5To.js";import{l as F,J as v,O as w,V as k,P as B,a as y,m as C,W as R,u as P}from"./vue-chunks-NBL-ZipP.js";const $=F({__name:"Email",props:{tabId:V.number},setup(p){const{required:s}=A(),t=p,c=v([{field:"email_access",label:"邮箱账号",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"email_password",label:"邮箱密码",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"email_server",label:"邮箱服务器",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"email_port",label:"服务器端口",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"active",label:"",colProps:{span:24},formItemProps:{slots:{default:()=>w(B,null,[w(D,{loading:i.value,type:"primary",onClick:h},{default:()=>[k("立即提交")]})])}}}]),l=v({email_access:[s()],email_password:[s()],email_port:[s()],email_server:[s()]}),{formRegister:m,formMethods:u}=x(),{setValues:r,getFormData:e,getElFormExpose:o}=u;let b=y({});const d=()=>f(this,null,function*(){const a=yield S({tab_id:t.tabId});if(a){yield r(a.data),b.value=a.data;const n=yield o();n==null||n.clearValidate()}}),i=y(!1),h=()=>f(this,null,function*(){const a=yield o();if(yield a==null?void 0:a.validate()){const _=yield e();if(i.value=!0,!_)return i.value=!1,g.error("未获取到数据");try{if(yield E(_))return d(),g.success("更新成功")}finally{i.value=!1}}});return d(),(a,n)=>(C(),R(P(I),{rules:l,onRegister:P(m),schema:c},null,8,["rules","onRegister","schema"]))}});export{$ as _};
//# sourceMappingURL=Email.vue_vue_type_script_setup_true_lang-kFmo7sLY.js.map