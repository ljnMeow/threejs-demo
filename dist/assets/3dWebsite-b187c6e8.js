import{d as _e,a as L,r as D,n as be,b as f,e as w,j as _,T as b,k as d,t as oe,m as v,F as Pe,o as h,l as Te,q as ne,v as ke,x as Se}from"./@vue-2f3294d6.js";import{V as P,G as se,T as Oe,v as ze,w as Le,g as Me,S as je,x as Ce,P as Ae,W as Re,y as Ie,h as Be,e as W,z as Ee,H as He,k as Fe,O as De,I as ie,J as re,D as We,K as le,p as qe}from"./three-97728b49.js";import"./stats.js-e9b58a7b.js";import{g as T}from"./utils-fc0332a4.js";import{g as p}from"./gsap-10963069.js";import{_ as Ge}from"./index-ef9e00ad.js";import"./vue-router-f4091d07.js";import"./axios-08622986.js";const A=j=>(ke("data-v-feca3905"),j=j(),Se(),j),Ve={key:0,class:"loading"},$e={class:"content"},Ue={class:"box"},Ne={class:"view-page"},Je={key:0,class:"title"},Ye=A(()=>d("br",null,null,-1)),Qe={class:"view-page"},Xe={key:0,class:"text"},Ze={class:"view-page"},Ke={key:0,class:"left-image",src:"https://bu.dusays.com/2023/05/22/646b1f90b338e.jpeg",alt:"image"},et={key:0,class:"header-pic"},tt=A(()=>d("img",{src:"https://p3-passport.byteimg.com/img/user-avatar/e883ad00f4c080eae18ebdb3c35aa9d8~180x180.awebp",alt:"header-pic"},null,-1)),at=A(()=>d("p",null,"Caliis Lin",-1)),ot=[tt,at],nt={key:0,class:"right-text"},st={class:"view-page"},it=A(()=>d("div",{class:"background"},null,-1)),rt={key:0,href:"https://ljn1998codeing.love",target:"_blank",class:"my-blog"},lt={key:0,href:"https://juejin.cn/user/4274499823866622",target:"_blank",class:"juejin"},ct=_e({__name:"3dWebsite",setup(j){const c=L(null),q=L(null),i=D({scrollviewHeight:0,pageHeight:0,totalPage:5,currentPage:1,isScrolling:!1,scrollPos:0,ending:!1});let m,l,R,S=45,y,r,k,M=L(new P(0,0,0));const O=new se;O.name="pointGroup",L(0);const C=new Me,G=new Oe(C);let I;const B=new ze;B.setDecoderPath("draco/"),B.preload();const V=new Le(C);V.setDRACOLoader(B);const a=D({pageOnetitle:!1,pageOneStart:!1,pageTwoText:!1,pageThreeLeftImage:!1,pageThreeHeader:!1,pageThreeRightText:!1,pageFourALeftText:!1,pageFourArightText:!1,quitButton:!1}),x=D({key:1,value:"QUIT"}),E=L(0),$=L(!0);C.onProgress=function(t,e,n){let o=Math.round(e/n*100);E.value=Math.ceil(o),o===100&&setTimeout(()=>{$.value=!1,Q()},1500)},be(()=>{ce(),ue(),de(c.value.clientWidth,c.value.clientHeight),pe(c.value.clientWidth,c.value.clientHeight),he(),U(),ge(),fe()});const ce=()=>{i.pageHeight=window.innerHeight,i.scrollviewHeight=i.pageHeight*i.totalPage},ue=()=>{m=new je;const t=[T("sky/px.jpg"),T("sky/nx.jpg"),T("sky/py.jpg"),T("sky/ny.jpg"),T("sky/pz.jpg"),T("sky/nz.jpg")];I=new Ce(C).load(t),m.background=I},de=(t,e)=>{l=new Ae(S,t/e,1,1e3),R=new P(0,-13,48),l.position.copy(R),m.add(l)},pe=(t,e)=>{y=new Re({antialias:!0}),y.setSize(t,e),y.outputEncoding=Ie,c.value.appendChild(y.domElement),y.render(m,l)},ge=()=>{const t=new Be(new W("rgb(255, 255, 255)")),e=new Ee(new W("rgb(255, 99, 71)"),2);e.position.set(-220,30,50),m.add(t,e)},fe=()=>{V.load(T("building/building.glb"),t=>{M.value=new P(14,-40.8,0),t.scene.position.copy(M.value);const e=t.scene.rotation.clone(),n=new He(e.x,e.y-131*Math.PI/180,e.z,e.order);t.scene.rotation.copy(n);const o=t.scene.children;for(let s=0;s<o.length;s++)o[s]instanceof se&&o[s].name==="AB1_OBJ_02"&&o[s].children&&o[s].children.forEach(u=>{u instanceof Fe&&u.name==="AB1_OBJ_02_1"&&(u.material.envMap=I,u.material.envMapIntensity=.5)});k=t.scene,m.add(k)})},he=()=>{r=new De(l,y.domElement),r.enabled=!1,r.enableDamping=!0,r.enableZoom=!0,r.autoRotate=!1,r.autoRotateSpeed=.1,r.enablePan=!0,r.zoomSpeed=1},U=()=>{r.update(),y.render(m,l);const t=m.children.find(e=>e.name==="pointGroup");if(t){const e=t.children.length&&t.children.find(n=>n.name==="wave");e&&(e._s+=.01,e.scale.set(e.size*e._s,e.size*e._s,e.size*e._s),e._s<=1.5?e.material.opacity=(e._s-1)*2:e._s>1.5&&e._s<=2?e.material.opacity=1-(e._s-1.5)*2:e._s=1)}a.quitButton&&ye(),requestAnimationFrame(U)},N=t=>{t?i.currentPage+1<=i.totalPage&&(i.currentPage+=1,H(i.currentPage)):i.currentPage-1>0&&(i.currentPage-=1,H(i.currentPage))},H=t=>{i.isScrolling=!0;const e=-(t-1)*i.pageHeight+"px";q.value.style.transform=`translateY(${e})`,i.currentPage=t,Y(),setTimeout(()=>{i.isScrolling=!1},1500)},J=t=>{const e=t||window.event;if(e.stopPropagation?e.stopPropagation():e.returnValue=!1,i.isScrolling)return!1;const n=t.originalEvent||t;i.scrollPos=n.deltaY||n.detail,i.scrollPos>0?N(!0):i.scrollPos<0&&N(!1)},me=()=>{i.currentPage+=1,H(i.currentPage)},Y=()=>{const t=i.ending?1:i.currentPage-1,e=M.value&&M.value.clone().add(new P(t*10,t*8.6,t*13));i.currentPage===1&&e.copy(M.value),i.currentPage<=2||i.ending?(p.to(l.position,{x:t*18,y:R.y+t*14,ease:"Power2.inOut",duration:1}),p.to(k.position,{x:e.x,y:e.y,z:e.z,ease:"Power2.inOut",duration:1}),i.ending=!1):i.currentPage===5&&(p.to(l.position,{x:-24,y:-30,ease:"Power2.inOut",duration:1}),p.to(k.position,{x:-6,y:-59,z:18,ease:"Power2.inOut",duration:1}),i.ending=!0),Q()},Q=()=>{setTimeout(()=>{switch(i.currentPage){case 1:a.pageOnetitle=!0,a.pageOneStart=!0,a.pageTwoText=!1;break;case 2:a.pageOnetitle=!1,a.pageOneStart=!1,a.pageTwoText=!0,a.pageThreeLeftImage=!1,a.pageThreeHeader=!1,a.pageThreeRightText=!1;break;case 3:a.pageTwoText=!1,a.pageThreeLeftImage=!0,a.pageThreeHeader=!0,a.pageThreeRightText=!0,a.pageFourALeftText=!1,a.pageFourArightText=!1;break;case 4:a.pageThreeLeftImage=!1,a.pageThreeHeader=!1,a.pageThreeRightText=!1,a.pageFourALeftText=!0,a.pageFourArightText=!0;break;case 5:a.pageFourALeftText=!1,a.pageFourArightText=!1;break}},1e3)},X=()=>{c.value.style.zIndex=1;const t=p.to(l.position,{x:-6,y:6,z:80,ease:"Power0.inOut",duration:2,onUpdate:()=>{S<50&&x.key===2&&(S-=1,l.fov=S,l.updateProjectionMatrix(),a.quitButton=!0)},onComplete:()=>{x.key===2&&(x.key=1,x.value="QUIT",a.quitButton=!0)}}),e=p.to(k.position,{x:0,y:-22,z:0,ease:"Power0.inOut",duration:2}),n=p.to(r.target,{x:0,y:0,z:0,ease:"Power0.inOut",duration:1}),o=new Promise(s=>{p.delayedCall(1,s)});Promise.all([t,e,n,o]).then(()=>{a.quitButton=!0,r.enabled=!0,r.maxPolarAngle=Math.PI/2-.01,r.autoRotate=!0,r.minDistance=40,r.maxDistance=86,xe()}).catch(s=>{console.log(s)})},xe=()=>{const t=[{x:-16.979381448617573,y:-19.167911412787436,z:1.4417293738365617,text:"aaaaa"},{x:4.368890112320235,y:-12.020210823358955,z:10.590562296036955,text:"bbbbb"},{x:-4.655517564465063,y:12.146541899849993,z:11.879293977258593,ware:!0,otherScene:!0,text:"ccccc"}],e=G.load(T("building/sprite.png")),n=G.load(T("wave.png"));t.forEach(o=>{const s=new ie({map:e}),u=new re(s);if(u.name="point",u.text=o.text,u.otherScene=o.otherScene,u.position.set(o.x,o.y+.2,o.z+2),u.scale.set(1.4,1.4,1),o.ware){const z=new ie({map:n,color:new W("rgb(255, 255, 255)"),transparent:!0,opacity:1,side:We,depthWrite:!1});let g=new re(z);g.name="wave",g.text=o.text,g.otherScene=o.otherScene,g.size=8*.3,g._s=Math.random()*1+1,g.position.set(o.x,o.y+.2,o.z+2),O.add(g)}O.add(u)}),m.add(O)},ve=t=>{t===1?(m.remove(O),c.value.style.zIndex=-1,a.quitButton=!1,r.maxPolarAngle=Math.PI,r.enabled=!1,r.autoRotate=!1,r.minDistance=0,r.maxDistance=1/0,p.to(l.position,{x:-24,y:-30,z:48,ease:"Power0.inOut",duration:1}),p.to(k.position,{x:-6,y:-59,z:18,ease:"Power0.inOut",duration:1}),p.to(r.target,{x:0,y:0,z:0,ease:"Power0.inOut",duration:1})):t===2&&(a.quitButton=!1,X())},Z=(t,e)=>{if(!a.quitButton)return;const n=new le,o=new P(0,0,0),s=new qe;if(!c.value)return;s.x=t.clientX/c.value.clientWidth*2-1,s.y=-(t.clientY/c.value.clientHeight)*2+1,n.setFromCamera(s,l),n.ray.at(100,o);const u=n.intersectObjects(O.children,!0);if(u.length>0){const z=u[0].object,g=new P().copy(z.position);if(g.project(l),!z.visible)return;if(e&&x.key!==2){if(!z.otherScene)return;we()}else x.key!==2&&K(z,g,!0)}else{if(e)return;K(null,null,!1)}},K=(t,e,n)=>{const o=document.getElementById("tooltip");if(!(n&&o))if(!o&&n){const s=document.createElement("div");s.innerHTML=t&&t.text||"",s.setAttribute("id","tooltip"),s.style.position="absolute",s.style.left=`${e&&(e.x+1)*c.value.clientWidth/2+10}px`,s.style.top=`${e&&(-e.y+1)*c.value.clientHeight/2+10}px`,s.style.zIndex="100",s.style.padding="4px 6px",s.style.fontSize="12px",s.style.backgroundColor="rgba(0, 0, 0, 0.7)",s.style.border="1px solid #ffffff",s.style.borderRadius="6px",c.value.appendChild(s)}else!n&&o&&c.value.removeChild(o)},ye=()=>{const t=new le;t.camera=l;const e=[];O.children.forEach(n=>{e.push(n)});for(let n=0;n<e.length;n++){const o=e[n],s=new P().setFromMatrixPosition(o.matrixWorld),u=s.clone(),g=new P().setFromMatrixPosition(l.matrixWorld).clone().sub(s).normalize();t.set(u,g);const ee=t.intersectObjects(k.children,!0);let te=!1;for(let F=0;F<ee.length;F++){const ae=ee[F].object;if(ae!==o&&ae.name!=="Plane"){te=!0;break}}te?p.to(o.material,{opacity:0,ease:"Power0.inOut",duration:.5,onComplete:()=>{o.visible=!1}}):p.to(o.material,{opacity:1,ease:"Power0.inOut",duration:.5,onComplete:()=>{o.visible=!0}})}},we=t=>{r.enabled=!1,r.enableZoom=!1,r.autoRotate=!1,r.minDistance=0,r.maxDistance=1/0,k.traverse(e=>{if(e.name==="Area002"){const n=new P;e.updateMatrixWorld(),n.setFromMatrixPosition(e.matrixWorld),r.target.set(n.x,n.y,n.z),a.quitButton=!1,p.to(l.position,{x:n.x-4,y:n.y+2,z:n.z,ease:"Power0.inOut",duration:1,onUpdate:()=>{S<50&&(S+=1,l.fov=S,l.updateProjectionMatrix())},onComplete:()=>{r.enabled=!0,a.quitButton=!0,x.key=2,x.value="OUT"}})}})};return window.addEventListener("mousemove",Z,!1),window.addEventListener("click",t=>Z(t,!0),!1),window.addEventListener("resize",()=>{l.aspect=c.value.clientWidth/c.value.clientHeight,l.updateProjectionMatrix(),y.setSize(c.value.clientWidth,c.value.clientHeight),y.setPixelRatio(window.devicePixelRatio)}),(t,e)=>(h(),f(Pe,null,[w(b,{name:"loading"},{default:_(()=>[$.value?(h(),f("div",Ve,[d("div",$e,[d("div",Ue,[d("div",{class:"process",style:Te({width:`${E.value}%`})},null,4)]),d("p",null,oe(`${E.value}%`)+" Loading......",1)])])):v("",!0)]),_:1}),d("div",{id:"canvas",ref_key:"canvas",ref:c},null,512),d("div",{class:"website-view",ref_key:"scrollview",ref:q,onMousewheel:J,"on:DOMMouseScroll":J,onScroll:Y},[d("div",Ne,[w(b,{name:"left"},{default:_(()=>[a.pageOnetitle?(h(),f("div",Je,[ne(" 𝟥𝒟 𝒲𝑒𝒷𝒮𝒾𝓉𝑒"),Ye,ne(" 𝒹𝑒𝓂𝑜 ")])):v("",!0)]),_:1}),w(b,{name:"top"},{default:_(()=>[a.pageOneStart?(h(),f("div",{key:0,class:"start",onClick:me}," ↓ ")):v("",!0)]),_:1})]),d("div",Qe,[w(b,{name:"text-fade"},{default:_(()=>[a.pageTwoText?(h(),f("div",Xe," 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐 ")):v("",!0)]),_:1})]),d("div",Ze,[w(b,{name:"left-image-fade"},{default:_(()=>[a.pageThreeLeftImage?(h(),f("img",Ke)):v("",!0)]),_:1}),w(b,{name:"header-image-fade"},{default:_(()=>[a.pageThreeHeader?(h(),f("div",et,ot)):v("",!0)]),_:1}),w(b,{name:"right-text-fade"},{default:_(()=>[a.pageThreeRightText?(h(),f("div",nt," 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 ")):v("",!0)]),_:1})]),d("div",st,[it,w(b,{name:"a-left-text-fade"},{default:_(()=>[a.pageFourALeftText?(h(),f("a",rt,"Visite my blog: https://ljn1998codeing.love")):v("",!0)]),_:1}),w(b,{name:"a-right-text-fade"},{default:_(()=>[a.pageFourArightText?(h(),f("a",lt,"Visite juejin: https://juejin.cn/user/4274499823866622")):v("",!0)]),_:1})]),d("div",{class:"view-page"},[d("button",{class:"explorar",onClick:X},"EXPLORAR")])],544),a.quitButton?(h(),f("button",{key:0,class:"quit",onClick:e[0]||(e[0]=n=>ve(x.key))},oe(x.value),1)):v("",!0)],64))}});const yt=Ge(ct,[["__scopeId","data-v-feca3905"]]);export{yt as default};