var n=(p,l,t)=>new Promise((i,a)=>{var m=o=>{try{s(t.next(o))}catch(r){a(r)}},c=o=>{try{s(t.throw(o))}catch(r){a(r)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(m,c);s((t=t.apply(p,l)).next())});import{u as P,F as y}from"./useForm-agan0gLz.js";import{u as h}from"./useValidator-b4d-vg8t.js";import{u as w}from"./dict-5fAUqSge.js";import{e as _}from"./task-P-hTJlj1.js";import{l as Y,J as b,b as D,m as v,W as x,u}from"./vue-chunks-NBL-ZipP.js";const R=Y({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(p,{expose:l}){const{required:t}=h(),i=p,a=b([{field:"name",label:"任务名称",component:"Input",colProps:{span:12},componentProps:{style:{width:"100%"}},formItemProps:{rules:[t()]}},{field:"group",label:"任务分组",colProps:{span:12},component:"Select",componentProps:{style:{width:"100%"},allowCreate:!0,filterable:!0,defaultFirstOption:!0,placeholder:"请选择任务分组，支持直接输入添加"},optionApi:()=>n(this,null,function*(){return(yield _()).data})},{field:"job_class",label:"调用目标",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:'调用示例：test.main.Test("kinit", 1314, True)；参数仅支持字符串，整数，浮点数，布尔类型。'},formItemProps:{rules:[t()]}},{field:"exec_strategy",label:"执行策略",colProps:{span:24},component:"RadioGroup",componentProps:{style:{width:"100%"}},value:"interval",formItemProps:{rules:[t()]},optionApi:()=>n(this,null,function*(){return(yield w().getDictObj(["vadmin_system_task_exec_strategy"])).vadmin_system_task_exec_strategy})},{field:"expression",label:"表达式",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"interval 表达式，五位，分别为：秒 分 时 天 周，例如：10 * * * * 表示每隔 10 秒执行一次任务。"},ifshow:e=>e.exec_strategy==="interval",formItemProps:{rules:[t()]}},{field:"expression",label:"表达式",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"cron 表达式，六位或七位，分别表示秒、分钟、小时、天、月、星期几、年(可选)"},ifshow:e=>e.exec_strategy==="cron",formItemProps:{rules:[t()]}},{field:"expression",label:"执行时间",component:"DatePicker",colProps:{span:24},componentProps:{style:{width:"100%"},type:"datetime",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},ifshow:e=>e.exec_strategy==="date",formItemProps:{rules:[t()]}},{field:"start_date",label:"开始时间",colProps:{span:12},component:"DatePicker",componentProps:{style:{width:"100%"},type:"datetime",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},ifshow:e=>e.exec_strategy!=="date"},{field:"end_date",label:"结束时间",colProps:{span:12},component:"DatePicker",componentProps:{style:{width:"100%"},type:"datetime",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},ifshow:e=>e.exec_strategy!=="date"},{field:"is_active",label:"任务状态",colProps:{span:8},component:"RadioGroup",componentProps:{style:{width:"100%"},options:[{label:"正常",value:!0},{label:"停用",value:!1}]},value:!0},{field:"",label:"",colProps:{span:16},component:"Text",value:"创建或更新任务完成后，如果任务状态与设置的不符，请尝试刷新数据或查看调度日志，任务状态可能会有延迟(几秒)。"},{field:"remark",label:"备注说明",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},maxlength:"1000",showWordLimit:!0,type:"textarea",rows:"3"}}]),{formRegister:m,formMethods:c}=P(),{setValues:s,getFormData:o,getElFormExpose:r}=c,f=()=>n(this,null,function*(){const e=yield r();if(yield e==null?void 0:e.validate())return yield o()});return D(()=>i.currentRow,e=>{e&&s(e)},{deep:!0,immediate:!0}),l({submit:f}),(e,d)=>(v(),x(u(y),{onRegister:u(m),schema:a},null,8,["onRegister","schema"]))}});export{R as _};
//# sourceMappingURL=Write.vue_vue_type_script_setup_true_lang-4Eg9JnHS.js.map