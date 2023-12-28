import{a as u,b as B}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();class m{constructor(){const t=document.querySelectorAll(".js-object");for(let o=0;o<t.length;o++)"dataset"in t[o]&&"jsname"in t[o].dataset&&(this[t[o].dataset.jsname]=t[o])}refresh(){for(var t in this)t in this&&delete this[t];const o=document.querySelectorAll(".js-object");for(let a=0;a<o.length;a++)"dataset"in o[a]&&"jsname"in o[a].dataset&&(this[o[a].dataset.jsname]=o[a])}}const y={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(o){throw o}},products:async function(t={}){try{const o={params:t};return(await u.get(this._baseURL+this._productsURL,o)).data}catch(o){throw o}},subscribe:async function(t){try{const o={email:t};return(await u.post(this._baseURL+this._subscriptionURL,o)).data}catch(o){throw o}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(o){throw o}}},p={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,o){try{const a=JSON.stringify(o);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const o=localStorage.getItem(t);return o===null?{}:JSON.parse(o)}catch(o){throw o}},_delete:function(t){try{localStorage.removeItem(t)}catch(o){throw o}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function A(s,t){const o=B.create(s,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&o.close()}o.show()}const H="/test-online/assets/icons-5dbc4c13.svg#close-icon",F="/test-online/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function E(s,t){const a=s.target.closest(t).dataset.productid,{name:e,desc:n,img:r,category:d,price:c,size:f,popularity:D}=await y.product(a);let $="Add to",I=p.loadCart();"products"in I&&I.products.findIndex(g=>g.productId===a)!==-1&&($="Remove from");const N=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${H}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${r}"
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
              Popularity: <span class="modal-product-prop-span">${D}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${$}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${F}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;A(N,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",j=>{const g=j.target.closest(".modal-product-cart");let l=p.loadCart(),k=!0;if("products"in l){const C=l.products.findIndex(O=>O.productId===a);C!==-1&&(l.products.splice(C,1),g.querySelector(".baskettext").innerHTML="Add to",k=!1)}k&&("products"in l?l.products.push({productId:a,amount:1}):l={email:"",products:[{productId:a,amount:1}]},g.querySelector(".baskettext").innerHTML="Remove from"),p.saveCart(l)})}const z="/test-online/assets/icons-5dbc4c13.svg#discount-icon",S="/test-online/assets/icons-5dbc4c13.svg#discount-cart",M="/test-online/assets/icons-5dbc4c13.svg#discount-checked";async function J(){const t=new m;t.discountList.innerHTML="";const o=await y.discount(),a=[];let e=0;for(o.length<2?e=o.length:e=2;e>0;e--){let c=Math.floor(Math.random()*o.length);a.push(o[c]),o.splice(c,1)}let n=p.loadCart();const r=[];"products"in n&&(n=n.products,n.forEach(c=>r.push(c.productId)));const d=[];a.forEach(c=>{let f=S;r.includes(c._id)&&(f=M),d.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${z}" class="discount-show"  data-productId="${c._id}"></use>
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
        `)}),t.discountList.insertAdjacentHTML("beforeend",d.join(""))}function U(s){let t=p.loadCart(),o=!0;"products"in t&&t.products.forEach(a=>{if(a.productId===s){o=!1;return}}),o&&("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},p.saveCart(t))}function K(s,t){const o=new m;o[`${t}${s}`].href.baseVal===`${S}`&&(o[`${t}${s}`].href.baseVal=`${M}`)}function V(s){s.target.classList.contains("discount-buy")?(U(s.target.dataset.productid),K(s.target.dataset.productid,"discountIcon")):s.target.classList.contains("discount-show")&&E(s,".discount-show")}const R=document.querySelector(".product-card-list"),W=y.products();function Y(s){const t=s.target.closest(".product-card-item").id;if(s.target.classList.contains("product-card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log("Buy prod",t);return}console.log("Open modal",t);return}}function G(s){const{category:t,img:o,name:a,popularity:e,price:n,size:r,_id:d,is10PercentOff:c}=s;return`
  <li class="product-card-item discount-list-item" id=${d} data-discount="${c}">

  <svg class="discount-icon" id=${d}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${a}" class="product-card-image"></div>
        <h2 class="product-card-name">${a}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${r}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${n}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#shopping-cart-icon"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `}function Q(){W.results.map(s=>R.insertAdjacentHTML("beforeend",G(s)))}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},x=document.querySelector(".footer-form"),X="Escape";function _(){window.addEventListener("keydown",T),i.closeModalBtn.addEventListener("click",v),i.backdrop.addEventListener("click",P),document.body.classList.add("show-modal")}function v(){window.removeEventListener("keydown",T),i.closeModalBtn.removeEventListener("click",v),i.backdrop.removeEventListener("click",P),document.body.classList.remove("show-modal")}function P(s){s.currentTarget===s.target&&v()}function T(s){s.code===X&&v()}async function Z(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const o={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){_(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
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
        </div>`;return}if(e.status===201){_(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
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
          `,x.reset();return}_()}).catch(e=>console.log(e.message))}let w,L,b,h;async function tt(){w=new m,w.PopularList.innerHTML="",L=await y.popular(),at()}function st(s){b=s.target.closest(".cards-item").dataset.id,h[`btn1${b}`].style.display="none",h[`check${b}`].style.display="flex",U(b)}function ot(s){if(s.target.classList.contains("js-btn")){st(s);return}if(!s.target.classList.contains("js-btn")){E(s,".cards-item");return}}function et(s){return s.map(({_id:t,img:o,name:a,category:e,size:n,popularity:r})=>` 
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
                            Size:<span class="info-span">${n}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${r}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function at(){try{const s=L;w.PopularList.insertAdjacentHTML("beforeend",et(s)),h=new m;let t=p.loadCart();const o=[];"products"in t&&(t=t.products,t.forEach(e=>o.push(e.productId)));const a=[];return L.forEach(e=>{o.includes(e._id)&&(h[`btn1${e._id}`].style.display="none",h[`check${e._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}Q();x.addEventListener("submit",Z);tt();J();const q=new m;q.discountList.addEventListener("click",V);q.PopularList.addEventListener("click",ot);R.addEventListener("click",Y);
//# sourceMappingURL=main-24efda19.js.map
