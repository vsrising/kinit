var c=(n,l,s)=>new Promise((i,e)=>{var t=a=>{try{r(s.next(a))}catch(o){e(o)}},d=a=>{try{r(s.throw(a))}catch(o){e(o)}},r=a=>a.done?i(a.value):Promise.resolve(a.value).then(t,d);r((s=s.apply(n,l)).next())});import{D as m}from"./Descriptions-Gy4zuAOG.js";import{s as f}from"./dict-JIKqt6Z4.js";import{u as _}from"./dict-5fAUqSge.js";/* empty css              */import{l as u,a as b,J as x,O as p,P as w,m as g,W as h,u as y}from"./vue-chunks-NBL-ZipP.js";const B=u({__name:"Detail",props:{currentRow:{type:Object,default:()=>null}},setup(n){const l=b([]);c(this,null,function*(){const t=yield _().getDictObj(["vadmin_system_task_exec_strategy"]);l.value=t.vadmin_system_task_exec_strategy});const i=x([{field:"job_id",label:"任务编号",width:"240px",span:24},{field:"name",label:"任务名称",span:24},{field:"group",label:"任务分组",span:24},{field:"job_class",label:"调用目标",span:24},{field:"exec_strategy",label:"执行策略",span:24,slots:{default:e=>{const t=e;return p(w,null,[p("div",null,[f(l.value,t.exec_strategy)])])}}},{field:"expression",label:"表达式",span:24},{field:"start_time",label:"开始执行时间",width:"200px",span:24},{field:"end_time",label:"执行完成时间",width:"200px",span:24},{field:"process_time",label:"耗时(秒)",width:"110px",span:24},{field:"retval",label:"任务返回值",span:24,slots:{default:e=>JSON.parse(e.retval)}},{field:"exception",label:"异常信息",span:24},{field:"traceback",label:"堆栈跟踪",width:"100px",span:24}]);return(e,t)=>(g(),h(y(m),{schema:i,data:n.currentRow||{}},null,8,["schema","data"]))}});export{B as _};
//# sourceMappingURL=Detail.vue_vue_type_script_setup_true_lang-4H061Dhr.js.map