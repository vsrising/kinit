var i=(n,l,o)=>new Promise((p,r)=>{var m=e=>{try{a(o.next(e))}catch(s){r(s)}},c=e=>{try{a(o.throw(e))}catch(s){r(s)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(m,c);a((o=o.apply(n,l)).next())});import{u as b,F as _}from"./useForm-agan0gLz.js";import{u as P}from"./useValidator-b4d-vg8t.js";import{l as h,J as v,b as w,m as I,W as g,u}from"./vue-chunks-NBL-ZipP.js";const D=h({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(n,{expose:l}){const{required:o}=P(),p=n,r=v([{field:"dict_name",label:"字典名称",colProps:{span:24},component:"Input",formItemProps:{rules:[o()]}},{field:"dict_type",label:"字典类型",colProps:{span:24},component:"Input",formItemProps:{rules:[o()]}},{field:"disabled",label:"是否禁用",colProps:{span:24},component:"RadioGroup",componentProps:{style:{width:"100%"},options:[{label:"启用",value:!1},{label:"禁用",value:!0}]},value:!1,formItemProps:{rules:[o()]}},{field:"remark",label:"备注",colProps:{span:24},component:"Input"}]),{formRegister:m,formMethods:c}=b(),{setValues:a,getFormData:e,getElFormExpose:s}=c,f=()=>i(this,null,function*(){const t=yield s();if(yield t==null?void 0:t.validate())return yield e()});return w(()=>p.currentRow,t=>{t&&a(t)},{deep:!0,immediate:!0}),l({submit:f}),(t,d)=>(I(),g(u(_),{onRegister:u(m),schema:r},null,8,["onRegister","schema"]))}});export{D as _};
//# sourceMappingURL=Write.vue_vue_type_script_setup_true_lang-WAMAU3zM.js.map