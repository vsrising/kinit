var p=(C,l,c)=>new Promise((v,x)=>{var T=r=>{try{m(c.next(r))}catch(y){x(y)}},f=r=>{try{m(c.throw(r))}catch(y){x(y)}},m=r=>r.done?v(r.value):Promise.resolve(r.value).then(T,f);m((c=c.apply(C,l)).next())});import{_ as b}from"./Echart.vue_vue_type_script_setup_true_lang-VVwnoe74.js";import{d as R,r as z}from"./index-E_cr-WWq.js";import{s as _,t as L,u as B,g as n,p as d,m as G}from"./element-plus-LfFKO5To.js";import{l as U,a as u,J as w,m as F,p as I,q as o,O as e,R as t,u as s,V as g,U as S,P as J}from"./vue-chunks-NBL-ZipP.js";const{t:a}=R(),M={xAxis:{data:[a("analysis.january"),a("analysis.february"),a("analysis.march"),a("analysis.april"),a("analysis.may"),a("analysis.june"),a("analysis.july"),a("analysis.august"),a("analysis.september"),a("analysis.october"),a("analysis.november"),a("analysis.december")],boundaryGap:!0,axisTick:{show:!1}},grid:{left:20,right:20,bottom:35,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{type:"value",axisTick:{show:!1}},legend:{data:["新增客户"],bottom:-5},series:[{name:"新增客户",smooth:!1,symbol:"circle",symbolSize:8,type:"line",data:[100,120,161,134,105,160,165,114,163,185,118,123],animationDuration:2800,animationEasing:"quadraticOut",itemStyle:{color:"rgba(79,168,249)"},lineStyle:{width:1,opacity:1}}]},$={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"各楼层销售情况统计",type:"pie",radius:"60%",center:["50%","50%"],data:[{value:335,name:"青铜卡"},{value:310,name:"白银卡"},{value:234,name:"黄金卡"},{value:135,name:"钻石卡"}]}]},H={xAxis:{data:[a("analysis.january"),a("analysis.february"),a("analysis.march"),a("analysis.april"),a("analysis.may"),a("analysis.june"),a("analysis.july"),a("analysis.august"),a("analysis.september"),a("analysis.october"),a("analysis.november"),a("analysis.december")],boundaryGap:!0,axisTick:{show:!1}},grid:{left:20,right:20,bottom:35,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{type:"value",axisTick:{show:!1}},legend:{data:["转换次数","转换率"],bottom:-5},series:[{name:"转换次数",smooth:!1,symbol:"circle",symbolSize:8,type:"line",data:[100,120,161,134,105,160,165,114,163,185,118,123],animationDuration:2800,animationEasing:"quadraticOut",itemStyle:{color:"rgba(110,199,30)"},lineStyle:{width:1,opacity:1}},{name:"转换率",smooth:!1,symbol:"circle",symbolSize:8,type:"line",data:[120,82,91,154,162,140,145,250,134,56,99,123],animationDuration:2800,animationEasing:"quadraticOut",itemStyle:{color:"rgba(79,168,249)"},lineStyle:{width:1,opacity:1}}]},K={xAxis:{data:[a("analysis.january"),a("analysis.february"),a("analysis.march"),a("analysis.april"),a("analysis.may"),a("analysis.june"),a("analysis.july"),a("analysis.august"),a("analysis.september"),a("analysis.october"),a("analysis.november"),a("analysis.december")],boundaryGap:!0,axisTick:{show:!1}},grid:{left:20,right:20,bottom:35,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{type:"value",axisTick:{show:!1}},legend:{data:["支付成功客户数"],bottom:-5},series:[{name:"支付成功客户数",smooth:!1,symbol:"circle",symbolSize:8,type:"line",data:[100,120,161,134,105,160,165,114,163,185,118,123],animationDuration:2800,animationEasing:"quadraticOut",itemStyle:{color:"rgba(79,168,249)"},lineStyle:{width:1,opacity:1}}]},D=()=>z.get({url:"/vadmin/analysis/random/number"}),Q={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},W=o("div",{class:"text-[#787a7d] text-[12px]"},"新增潜客数",-1),X={class:"text-[#121315] text-[20px] mt-[10px]"},Y={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},Z=o("div",{class:"text-[#787a7d] text-[12px]"},"新增客户数",-1),aa={class:"text-[#121315] text-[20px] mt-[10px]"},ea={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},sa=o("div",{class:"text-[#787a7d] text-[12px]"},"新增会员数",-1),ta={class:"text-[#121315] text-[20px] mt-[10px]"},oa={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ia=o("div",{class:"text-[#787a7d] text-[12px]"},"支付成功客户数",-1),la={class:"text-[#121315] text-[20px] mt-[10px]"},na={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},da=o("div",{class:"text-[#000] text-[12px]"},"会员分布情况",-1),ra={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ua=o("div",{class:"text-[#000] text-[12px]"},"新增客户趋势",-1),ca={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ma=o("div",{class:"text-[#000] text-[12px]"},"客户转会员趋势",-1),pa={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ba=o("div",{class:"text-[#000] text-[12px]"},"支付成功客户趋势",-1),xa={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ya=o("div",{class:"text-[#000] text-[12px]"},"客户转会员趋势",-1),_a={class:"border-1 border-[#e4e7ed] b-solid p-[20px] rounded-[4px]"},ga=o("div",{class:"text-[#000] text-[12px]"},"支付成功客户趋势",-1),Ta=U({__name:"User",setup(C){const l=u(!1),c=w(M),v=w(K),x=w(H),T=w($),f=u(0),m=u(),r=()=>{},y=i=>new Date("2023/01/01").getTime()>i.getTime()||i.getTime()>Date.now(),N=u(0),k=u(0),A=u(0),E=u(0),V=()=>p(this,null,function*(){const i=yield D();i&&(N.value=i.data)}),j=()=>p(this,null,function*(){const i=yield D();i&&(k.value=i.data)}),P=()=>p(this,null,function*(){const i=yield D();i&&(A.value=i.data)}),q=()=>p(this,null,function*(){const i=yield D();i&&(E.value=i.data)});return p(this,null,function*(){l.value=!0,yield Promise.all([V(),j(),P(),q()]),l.value=!1}),(i,h)=>(F(),I(J,null,[o("div",null,[e(s(B),{modelValue:f.value,"onUpdate:modelValue":h[1]||(h[1]=O=>f.value=O),onChange:r},{default:t(()=>[e(s(_),{label:"0"},{default:t(()=>[g("全部")]),_:1}),e(s(_),{label:"1"},{default:t(()=>[g("今天")]),_:1}),e(s(_),{label:"2"},{default:t(()=>[g("昨天")]),_:1}),e(s(_),{label:"3"},{default:t(()=>[g("最近7天")]),_:1}),e(s(_),{label:"4"},{default:t(()=>[g("最近30天")]),_:1}),e(s(L),{class:"ml-2",modelValue:m.value,"onUpdate:modelValue":h[0]||(h[0]=O=>m.value=O),type:"daterange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间","disabled-date":y,"unlink-panels":!0,size:"default"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),e(s(G),{gutter:20,class:"pt-4"},{default:t(()=>[e(s(n),{xs:24,sm:6,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",Q,[W,o("div",X,S(N.value),1)])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:6,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",Y,[Z,o("div",aa,S(k.value),1)])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:6,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",ea,[sa,o("div",ta,S(A.value),1)])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:6,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",oa,[ia,o("div",la,S(E.value),1)])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",na,[o("div",null,[da,e(s(b),{options:T,height:230},null,8,["options"])])])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",ra,[ua,e(s(b),{options:c,height:230},null,8,["options"])])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",ca,[ma,e(s(b),{options:x,height:230},null,8,["options"])])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",pa,[ba,e(s(b),{options:v,height:230},null,8,["options"])])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",xa,[ya,e(s(b),{options:x,height:230},null,8,["options"])])]),_:1},8,["loading"])]),_:1}),e(s(n),{xs:24,sm:12,class:"mb-2"},{default:t(()=>[e(s(d),{loading:l.value,animated:"",rows:4},{default:t(()=>[o("div",_a,[ga,e(s(b),{options:v,height:230},null,8,["options"])])]),_:1},8,["loading"])]),_:1})]),_:1})],64))}});export{Ta as _};
//# sourceMappingURL=User.vue_vue_type_script_setup_true_lang-2uWQ6uqI.js.map