import"./assets/styles-7d843907.js";const l="feedback-form-state";function o(e="empty"){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}function r(e,a){const s=JSON.stringify(a);localStorage.setItem(e,s)}const t=document.querySelector(".feedback-form");t.querySelector("textarea");t.addEventListener("input",e=>{const a=t.elements.email.value,s=t.elements.message.value;r(l,{email:a,message:s})});function m(){const e=o(l)||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}m();t.addEventListener("submit",e=>{e.preventDefault();const a=o(l)||{};console.log(a);const s=t.elements.email.value.trim(),n=t.elements.message.value.trim();(s===""||n==="")&&(alert("Please fill in both form elements."),e.preventDefault()),localStorage.removeItem(l),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
