import{a as u,b as A}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();class m{constructor(){const t=document.querySelectorAll(".js-object");for(let o=0;o<t.length;o++)"dataset"in t[o]&&"jsname"in t[o].dataset&&(this[t[o].dataset.jsname]=t[o])}refresh(){for(var t in this)t in this&&delete this[t];const o=document.querySelectorAll(".js-object");for(let a=0;a<o.length;a++)"dataset"in o[a]&&"jsname"in o[a].dataset&&(this[o[a].dataset.jsname]=o[a])}}const y={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(o){throw o}},products:async function(t={}){try{const o={params:t};return(await u.get(this._baseURL+this._productsURL,o)).data}catch(o){throw o}},subscribe:async function(t){try{const o={email:t};return(await u.post(this._baseURL+this._subscriptionURL,o)).data}catch(o){throw o}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(o){throw o}}},p={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,o){try{const a=JSON.stringify(o);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const o=localStorage.getItem(t);return o===null?{}:JSON.parse(o)}catch(o){throw o}},_delete:function(t){try{localStorage.removeItem(t)}catch(o){throw o}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function H(s,t){const o=A.create(s,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&o.close()}o.show()}const F="/test-online/assets/icons-5dbc4c13.svg#close-icon",z="/test-online/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function M(s,t){const a=s.target.closest(t).dataset.productid,{name:e,desc:r,img:n,category:d,price:c,size:f,popularity:N}=await y.product(a);let j="Add to",k=p.loadCart();"products"in k&&k.products.findIndex(g=>g.productId===a)!==-1&&(j="Remove from");const O=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${F}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${n}"
            alt="${e}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${e}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${d}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${f}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${N}</span>
            </p>       
          <p class="modal-product-prop-dscr">${r}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${j}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${z}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;H(O,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",C=>{const g=C.target.closest(".modal-product-cart");let l=p.loadCart(),E=!0;if("products"in l){const S=l.products.findIndex(B=>B.productId===a);S!==-1&&(l.products.splice(S,1),g.querySelector(".baskettext").innerHTML="Add to",E=!1)}E&&("products"in l?l.products.push({productId:a,amount:1}):l={email:"",products:[{productId:a,amount:1}]},g.querySelector(".baskettext").innerHTML="Remove from"),p.saveCart(l)})}const U="/test-online/assets/icons-5dbc4c13.svg#discount-icon",v="/test-online/assets/icons-5dbc4c13.svg#discount-cart",I="/test-online/assets/icons-5dbc4c13.svg#discount-checked";async function J(){const t=new m;t.discountList.innerHTML="";const o=await y.discount(),a=[];let e=0;for(o.length<2?e=o.length:e=2;e>0;e--){let c=Math.floor(Math.random()*o.length);a.push(o[c]),o.splice(c,1)}let r=p.loadCart();const n=[];"products"in r&&(r=r.products,r.forEach(c=>n.push(c.productId)));const d=[];a.forEach(c=>{let f=v;n.includes(c._id)&&(f=I),d.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${U}" class="discount-show"  data-productId="${c._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${c._id}">
              <img
                class="discount-image discount-show"
                src="${c.img}"
                width="114"
                height="114"
                alt="${c.name}"
                data-productId="${c._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${c._id}">
              <p class="discount-title discount-show"  data-productId="${c._id}">${c.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${c._id}">
                <span class="discount-price discount-show"  data-productId="${c._id}">$${c.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${c._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${c._id}">
                    <use href="${f}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",d.join(""))}function R(s){let t=p.loadCart(),o=!0;"products"in t&&t.products.forEach(a=>{if(a.productId===s){o=!1;return}}),o&&("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},p.saveCart(t))}function K(s,t){const o=new m;o[`${t}${s}`].href.baseVal===`${v}`&&(o[`${t}${s}`].href.baseVal=`${I}`)}function V(s){s.target.classList.contains("discount-buy")?(R(s.target.dataset.productid),K(s.target.dataset.productid,"discountIcon")):s.target.classList.contains("discount-show")&&M(s,".discount-show")}const x=document.querySelector(".product-card-list");function W(s){const t=s.target.closest(".product-card-item").id;if(s.target.classList.contains("product-card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log("Buy prod",t);return}console.log("Open modal",t);return}}function Y(s){const{category:t,img:o,name:a,popularity:e,price:r,size:n,_id:d,is10PercentOff:c}=s;return`
  <li class="product-card-item discount-list-item" id=${d} data-discount="${c}">

  <svg class="discount-icon" id=${d}>
   <use href="${U}"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${a}" class="product-card-image"></div>
        <h2 class="product-card-name">${a}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${n}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${r}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="${v}"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `}async function G(){(await y.products()).results.map(t=>x.insertAdjacentHTML("beforeend",Y(t)))}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},P=document.querySelector(".footer-form"),Q="Escape";function w(){window.addEventListener("keydown",q),i.closeModalBtn.addEventListener("click",_),i.backdrop.addEventListener("click",T),document.body.classList.add("show-modal")}function _(){window.removeEventListener("keydown",q),i.closeModalBtn.removeEventListener("click",_),i.backdrop.removeEventListener("click",T),document.body.classList.remove("show-modal")}function T(s){s.currentTarget===s.target&&_()}function q(s){s.code===Q&&_()}async function X(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const o={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){w(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
        <div class="modal__title--wrap">
          <p class="modal__title">
            This
            <span class="modal__accent-text">email address </span>
            has already been entered
          </p>
        </div>
        <div class="modal__description--wrap">
          <p class="modal__description">
            You have already subscribed to our new products. Watch for offers at
            the mailing address.
          </p>
        </div>`;return}if(e.status===201){w(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
        <div class="modal__title--wrap">
        <p class="modal__title">
          Thanks for subscribing for
          <span class="modal__accent-text">new</span>
          products
        </p>
      </div>
      <div class="modal__description--wrap">
        <p class="modal__description">
          We promise you organic and high-quality products that will meet your
          expectations. Please stay with us and we promise you many pleasant
          surprises.
        </p>
      </div>
          `,P.reset();return}w()}).catch(e=>console.log(e.message))}let $,L,b,h;async function Z(){$=new m,$.PopularList.innerHTML="",L=await y.popular(),et()}function tt(s){b=s.target.closest(".cards-item").dataset.id,h[`btn1${b}`].style.display="none",h[`check${b}`].style.display="flex",R(b)}function st(s){if(s.target.classList.contains("js-btn")){tt(s);return}if(!s.target.classList.contains("js-btn")){M(s,".cards-item");return}}function ot(s){return s.map(({_id:t,img:o,name:a,category:e,size:r,popularity:n})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${o}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${e}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${r}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${n}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="${I}"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function et(){try{const s=L;$.PopularList.insertAdjacentHTML("beforeend",ot(s)),h=new m;let t=p.loadCart();const o=[];"products"in t&&(t=t.products,t.forEach(e=>o.push(e.productId)));const a=[];return L.forEach(e=>{o.includes(e._id)&&(h[`btn1${e._id}`].style.display="none",h[`check${e._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}G();P.addEventListener("submit",X);Z();J();const D=new m;D.discountList.addEventListener("click",V);D.PopularList.addEventListener("click",st);x.addEventListener("click",W);
//# sourceMappingURL=main-078070d9.js.map
