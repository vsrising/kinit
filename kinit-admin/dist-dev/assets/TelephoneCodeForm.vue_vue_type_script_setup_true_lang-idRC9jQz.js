var v=(r,y,n)=>new Promise((_,u)=>{var p=s=>{try{o(n.next(s))}catch(d){u(d)}},m=s=>{try{o(n.throw(s))}catch(d){u(d)}},o=s=>s.done?_(s.value):Promise.resolve(s.value).then(p,m);o((n=n.apply(r,y)).next())});import{u as D,F as j}from"./useForm-agan0gLz.js";import{e as L,u as N,q as w,t as O,g as B,d as z}from"./index-E_cr-WWq.js";import{u as J}from"./useValidator-b4d-vg8t.js";import{l as T,aC as U,J as W,O as a,P as $,a as S,b as G,m as H,W as K,u as R,y as Q}from"./vue-chunks-NBL-ZipP.js";import{y as X,r as Y,b as Z}from"./element-plus-LfFKO5To.js";function b(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!Q(r)}const re=T({__name:"TelephoneCodeForm",emits:["to-password"],setup(r,{emit:y}){const n=y,{formRegister:_,formMethods:u}=D(),{getFormData:p,getElFormExpose:m}=u,{t:o}=z(),{required:s}=J(),{currentRoute:d,addRoute:k,push:C}=U(),f=L(),M=N(),x=W([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>a("h2",{class:"text-2xl font-bold text-center w-[100%]"},[o("login.login")])}}},{field:"telephone",label:o("login.telephone"),value:"",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:o("login.telephonePlaceholder"),maxlength:11}},{field:"password",label:o("login.SMSCode"),colProps:{span:24},formItemProps:{slots:{default:e=>a("div",{class:"w-[100%] flex"},[a(X,{modelValue:e.password,"onUpdate:modelValue":t=>e.password=t,placeholder:o("login.codePlaceholder")},{suffix:()=>{let t;return a($,null,[a(Y,{direction:"vertical"},null),i.value?a(w,{type:"primary",link:!0,onClick:A},b(t=o("login.getSMSCode"))?t:{default:()=>[t]}):a(w,{type:"primary",disabled:!i.value,link:!0},{default:()=>[g.value+o("login.SMSCodeRetry")]})])}})])}}},{field:"method",label:"登录类型",value:"1",component:"Input",hidden:!0},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,t;return a("div",{class:"w-[100%]"},[a("div",{class:"w-[100%]"},[a(w,{type:"primary",class:"w-[100%]",loading:h.value,onClick:F},b(e=o("login.login"))?e:{default:()=>[e]})]),a("div",{class:"w-[100%] mt-15px"},[a(w,{class:"w-[100%]",onClick:E},b(t=o("login.passwordLogin"))?t:{default:()=>[t]})])])}}}}]),I={telephone:[s()],method:[s()],password:[s()]},E=()=>{n("to-password")},h=S(!1),P=S("");G(()=>d.value,e=>{var t;P.value=(t=e==null?void 0:e.query)==null?void 0:t.redirect},{immediate:!0});const F=()=>v(this,null,function*(){const e=yield m();if(yield e==null?void 0:e.validate()){h.value=!0;const c=yield p();try{const l=yield M.login(c);l?l.data.is_reset_password?V():C({path:"/reset/password"}):h.value=!1}catch(l){h.value=!1}}});let i=S(!0),g=S(60);const A=()=>v(this,null,function*(){const e=yield m();if(yield e==null?void 0:e.validateField("telephone")){i.value=!1,g.value=60;const c=yield p();try{const l=yield O({telephone:c.telephone});if(l!=null&&l.data){let q=setInterval(()=>{g.value--,g.value<1&&(i.value=!0,clearInterval(q))},1e3)}else Z.error("发送失败，请联系管理员"),i.value=!0}catch(l){i.value=!0}}}),V=()=>v(this,null,function*(){const e=yield B();if(e){const t=e.data||[];yield f.generateRoutes(t).catch(()=>{}),f.getAddRouters.forEach(c=>{k(c)}),f.setIsAddRouters(!0),C({path:P.value||f.addRouters[0].path})}});return(e,t)=>(H(),K(R(j),{schema:x,rules:I,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:R(_)},null,8,["schema","onRegister"]))}});export{re as _};
//# sourceMappingURL=TelephoneCodeForm.vue_vue_type_script_setup_true_lang-idRC9jQz.js.map