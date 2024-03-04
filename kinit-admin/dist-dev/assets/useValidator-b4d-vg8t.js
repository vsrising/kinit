import{d as m,M as o,N as i}from"./index-E_cr-WWq.js";const{t:n}=m(),S=()=>({required:s=>({required:!0,message:s||n("common.required")}),lengthRange:s=>{const{min:r,max:e,message:t}=s;return{min:r,max:e,message:t||n("common.lengthRange",{min:r,max:e})}},notSpace:s=>({validator:(r,e,t)=>{(e==null?void 0:e.indexOf(" "))!==-1?t(new Error(s||n("common.notSpace"))):t()}}),notSpecialCharacters:s=>({validator:(r,e,t)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e)?t(new Error(s||n("common.notSpecialCharacters"))):t()}}),isEmail:(s,r,e)=>{(o(r)||i(r))&&e(),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?e():e(new Error("请填写正确的邮箱地址"))},isTelephone:(s,r,e)=>{(o(r)||i(r))&&e(),/^1[3-9]\d{9}$/.test(r)?e():e(new Error("请填写正确的手机号"))},isAmount:(s,r,e)=>{(o(r)||i(r))&&e(),/^\d+(\.\d{1,2})?$/.test(r)?e():e(new Error("请填写正确的金额格式"))}});export{S as u};
//# sourceMappingURL=useValidator-b4d-vg8t.js.map
