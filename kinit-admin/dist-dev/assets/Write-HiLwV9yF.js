var p=(b,m,s)=>new Promise((f,l)=>{var d=a=>{try{r(s.next(a))}catch(i){l(i)}},v=a=>{try{r(s.throw(a))}catch(i){l(i)}},r=a=>a.done?f(a.value):Promise.resolve(a.value).then(d,v);r((s=s.apply(b,m)).next())});import{u as C,F as k}from"./useForm-agan0gLz.js";import{u as A}from"./useValidator-b4d-vg8t.js";import{l as F,aC as x,J as D,O as w,V as R,P as B,a as y,m as V,W as E,R as q,u as _}from"./vue-chunks-NBL-ZipP.js";import{_ as N}from"./ContentWrap.vue_vue_type_script_setup_true_lang-M_zuHec9.js";import{a as O,b as S,p as M,c as T}from"./issue-HUI4WBt7.js";import{q as W}from"./index-E_cr-WWq.js";import{b as t}from"./element-plus-LfFKO5To.js";import"./style.css_vue_type_style_index_0_src_true_lang-vVOIijJh.js";import"./wang-editor-izIlk5n1.js";const Y=F({name:"HelpIssueForm",__name:"Write",setup(b,{expose:m}){const{required:s}=A(),{push:f,currentRoute:l}=x(),d={customAlert:(e,o)=>{switch(o){case"success":t.success(e);break;case"info":t.info(e);break;case"warning":t.warning(e);break;case"error":t.error(e);break;default:t.info(e);break}},autoFocus:!1,scroll:!0,readOnly:!1,uploadImgShowBase64:!0,placeholder:"请输入内容..."},v=D([{field:"title",label:"标题名称",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"}},formItemProps:{rules:[s()]}},{field:"content",label:"内容",colProps:{span:24},component:"Editor",componentProps:{style:{width:"100%"},editorConfig:d,editorId:"issueContent"},formItemProps:{rules:[s()]}},{field:"category_id",label:"问题类别",colProps:{span:24},component:"Select",componentProps:{style:{width:"100%"}},formItemProps:{rules:[s()]},optionApi:()=>p(this,null,function*(){return(yield O()).data})},{field:"",label:"",colProps:{span:24},formItemProps:{slots:{default:()=>w(B,null,[w(W,{loading:c.value,type:"primary",onClick:I},{default:()=>[R("立即保存")]})])}}}]),{formRegister:r,formMethods:a}=C(),{getFormData:i,getElFormExpose:P,setValues:h}=a,u=y(""),c=y(!1);p(this,null,function*(){const e=l.value.query.id;if(e){u.value="edit";const o=yield T(Number(e));o?h(o.data):f("/404")}else u.value="add"});const I=()=>p(this,null,function*(){const e=yield P();if(yield e==null?void 0:e.validate()){c.value=!0;const g=yield i();if(!g)return c.value=!1,t.error("未获取到数据");const n=y();try{u.value==="add"?(n.value=yield S(g),n.value&&(e==null||e.resetFields(),t.success("新增成功"))):u.value==="edit"&&(n.value=yield M(g),n.value&&(h(n.value.data),t.success("更新成功")))}finally{c.value=!1}}});return m({submit:I}),(e,o)=>(V(),E(_(N),null,{default:q(()=>[w(_(k),{onRegister:_(r),schema:v,labelPosition:"top"},null,8,["onRegister","schema"])]),_:1}))}});export{Y as default};
//# sourceMappingURL=Write-HiLwV9yF.js.map