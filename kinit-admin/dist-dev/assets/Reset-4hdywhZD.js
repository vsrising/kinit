var _=(a,d,o)=>new Promise((m,l)=>{var p=s=>{try{t(o.next(s))}catch(c){l(c)}},f=s=>{try{t(o.throw(s))}catch(c){l(c)}},t=s=>s.done?m(s.value):Promise.resolve(s.value).then(p,f);t((o=o.apply(a,d)).next())});import{u as V,F as A}from"./useForm-agan0gLz.js";import{u as E}from"./useValidator-b4d-vg8t.js";import{u as F,a as q,e as M,p as N,g as U,_ as D}from"./index-E_cr-WWq.js";import{l as J,aC as O,e as T,J as W,a as w,b as X,ah as $,m as v,p as j,q as i,O as R,u as h,R as z,V as G,W as H,X as K,aI as L,aJ as Q}from"./vue-chunks-NBL-ZipP.js";import{_ as Y}from"./Footer.vue_vue_type_script_setup_true_lang-sYEj7PAz.js";import{b as Z}from"./element-plus-LfFKO5To.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";const ee=a=>(L("data-v-3fcad5c7"),a=a(),Q(),a),se={class:"main-container"},te={class:"form-container"},ae=ee(()=>i("div",null,[i("h2",{class:"text-2xl font-bold text-center w-[100%]"},"第一次登录系统，需先重置密码")],-1)),oe={class:"w-[100%]"},re={class:"footer-container"},ce=J({__name:"Reset",setup(a){const{required:d}=E(),{addRoute:o,push:m,currentRoute:l}=O(),p=F(),f=q(),t=M(),s=T(()=>f.getFooter),c=W([{field:"password",label:"新密码",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"请输入新密码"}},{field:"password_two",label:"再次输入新密码",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"请再次输入新密码"}}]),b={password:[d(),{min:8,max:16,message:"长度需为8-16个字符,请重新输入。",trigger:"blur"}],password_two:[d(),{min:8,max:16,message:"长度需为8-16个字符,请重新输入。",trigger:"blur"}]},{formRegister:x,formMethods:S}=V(),{setValues:k,getFormData:y,getElFormExpose:B}=S;k(p.getUser);const u=w(!1),g=w("");X(()=>l.value,e=>{var r;g.value=(r=e==null?void 0:e.query)==null?void 0:r.redirect},{immediate:!0});const I=()=>_(this,null,function*(){if(p.getUser.id===1)return Z.warning("编辑账号为演示账号，无权限操作！");const e=yield B();if(yield e==null?void 0:e.validate()){u.value=!0;const n=yield y();try{(yield N(n))?P():u.value=!1}catch(C){u.value=!1}}}),P=()=>_(this,null,function*(){const e=yield U();if(e){const r=e.data||[];yield t.generateRoutes(r).catch(()=>{}),t.getAddRouters.forEach(n=>{o(n)}),t.setIsAddRouters(!0),m({path:g.value||t.addRouters[0].path})}});return(e,r)=>{const n=$("BaseButton");return v(),j("div",se,[i("div",te,[ae,R(h(A),{onRegister:h(x),schema:c,rules:b,"hide-required-asterisk":"",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid"},null,8,["onRegister","schema"]),i("div",oe,[R(n,{loading:u.value,type:"primary",class:"w-[100%]",onClick:I},{default:z(()=>[G(" 重置密码 ")]),_:1},8,["loading"])])]),i("div",re,[s.value?(v(),H(h(Y),{key:0})):K("",!0)])])}}}),he=D(ce,[["__scopeId","data-v-3fcad5c7"]]);export{he as default};
//# sourceMappingURL=Reset-4hdywhZD.js.map