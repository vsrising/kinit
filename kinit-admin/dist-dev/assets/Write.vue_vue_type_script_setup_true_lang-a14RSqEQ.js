var m=(r,n,o)=>new Promise((p,l)=>{var c=e=>{try{a(o.next(e))}catch(s){l(s)}},i=e=>{try{a(o.throw(e))}catch(s){l(s)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(c,i);a((o=o.apply(r,n)).next())});import{u as v,F as w}from"./useForm-agan0gLz.js";import{u as P}from"./useValidator-b4d-vg8t.js";import{l as _,J as u,b as y,m as x,W as R,u as d}from"./vue-chunks-NBL-ZipP.js";const B=_({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(r,{expose:n}){const{required:o}=P(),p=r,l=u([{field:"name",label:"角色名称",colProps:{span:12},component:"Input"},{field:"role_key",label:"权限字符",colProps:{span:12},component:"Input"},{field:"disabled",label:"角色状态",colProps:{span:12},component:"RadioGroup",componentProps:{style:{width:"100%"},options:[{label:"正常",value:!1},{label:"禁用",value:!0}]},value:!1},{field:"is_admin",label:"最高权限",colProps:{span:12},component:"RadioGroup",componentProps:{style:{width:"100%"},options:[{label:"使用",value:!0},{label:"不使用",value:!1}]},value:!1},{field:"order",label:"显示排序",colProps:{span:12},component:"InputNumber",componentProps:{style:{width:"100%"}}},{field:"desc",label:"角色描述",colProps:{span:24},component:"Input",componentProps:{rows:4,type:"textarea",style:{width:"600px"}}}]),c=u({name:[o()],role_key:[o()],order:[o()]}),{formRegister:i,formMethods:a}=v(),{setValues:e,getFormData:s,getElFormExpose:f}=a,b=()=>m(this,null,function*(){const t=yield f();if(yield t==null?void 0:t.validate())return yield s()});return y(()=>p.currentRow,t=>{t&&e(t)},{deep:!0,immediate:!0}),n({submit:b}),(t,h)=>(x(),R(d(w),{rules:c,onRegister:d(i),schema:l},null,8,["rules","onRegister","schema"]))}});export{B as _};
//# sourceMappingURL=Write.vue_vue_type_script_setup_true_lang-a14RSqEQ.js.map