import{a as n}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let r=0;r<s.length;r++)"dataset"in s[r]&&"jsname"in s[r].dataset&&(this[s[r].dataset.jsname]=s[r])}}const g={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await n.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await n.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await n.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await n.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await n.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await n.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await n.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const r=JSON.stringify(s);localStorage.setItem(t,r)}catch(r){throw r}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},f="/test-online/assets/icons-5dbc4c13.svg#discount-icon";console.log("icon: ",f);const p="./img/icons.svg#discount-cart",_="./img/icons.svg#discount-checked";async function m(){const t=new u;t.discountList.innerHTML="";const s=await g.discount(),r=[];let i=0;for(s.length<2?i=s.length:i=2;i>0;i--){let o=Math.floor(Math.random()*s.length);r.push(s[o]),s.splice(o,1)}let c=d.loadCart();const a=[];"products"in c&&(c=c.products,c.forEach(o=>a.push(o.productId)));const l=[];r.forEach(o=>{let h=p;a.includes(o._id)&&(h=_),l.push(`
        <li class="discount-list-item discount-show" data-productId="${o._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${o._id}">
              <use href="${f}" class="discount-show"  data-productId="${o._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${o._id}">
              <img
                class="discount-image discount-show"
                src="${o.img}"
                width="114"
                height="114"
                alt="${o.name}"
                data-productId="${o._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${o._id}">
              <p class="discount-title discount-show"  data-productId="${o._id}">${o.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${o._id}">
                <span class="discount-price discount-show"  data-productId="${o._id}">$${o.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${o._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${o._id}">
                    <use href="${h}" class="js-object discount-buy" data-jsname="discountIcon${o._id}" data-productId="${o._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",l.join(""))}function I(e){let t=d.loadCart(),s=!0;"products"in t&&t.products.forEach(r=>{if(r.productId===e){s=!1;return}}),s&&("products"in t?t.products.push({productId:e,amount:1}):t={email:"",products:[{productId:e,amount:1}]},d.saveCart(t))}function b(e,t){const s=new u;s[`${t}${e}`].href.baseVal===p&&(s[`${t}${e}`].href.baseVal=_)}function w(e){e.target.classList.contains("discount-buy")?(I(e.target.dataset.productid),b(e.target.dataset.productid,"discountIcon")):e.target.classList.contains("discount-show")}m();const y=new u;y.discountList.addEventListener("click",w);
//# sourceMappingURL=main-5ab86032.js.map
