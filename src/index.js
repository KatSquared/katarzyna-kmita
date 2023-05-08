(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const od=document.querySelectorAll("#dropdown");od.forEach(a=>{const e=a.querySelector("#dropdown-btn"),t=a.querySelector("#dropdown-content");e.addEventListener("click",()=>{e.classList.toggle("unrolled"),t.classList.toggle("visible")})});document.addEventListener("click",a=>{a.target.closest("#dropdown-content")||od.forEach(e=>{const t=e.querySelector("#dropdown-content"),n=t.nextElementSibling;if(a.target.closest("#dropdown-btn")){n!=a.target.closest("#dropdown-btn")&&(t.classList.remove("visible"),n.classList.remove("unrolled"));return}t.classList.contains("visible")&&(t.classList.remove("visible"),n.classList.remove("unrolled"))})});const Jc=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting?e.target.classList.add("animate"):e.target.classList.remove("animate")})}),xm=document.querySelectorAll("h1"),vm=document.querySelectorAll(".fa-arrow-right-long"),ym=document.querySelectorAll(".fa-arrow-left-long");xm.forEach(a=>Jc.observe(a));vm.forEach(a=>Jc.observe(a));ym.forEach(a=>Jc.observe(a));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="150",Mm=0,Vu=1,bm=2,ad=1,Sm=2,ho=3,Li=0,Cn=1,Si=2,$i=0,_s=1,Hu=2,Wu=3,Xu=4,wm=5,cs=100,Tm=101,Em=102,qu=103,Yu=104,Am=200,Cm=201,Lm=202,Rm=203,ld=204,cd=205,Pm=206,Dm=207,Im=208,Nm=209,Om=210,Fm=0,km=1,Um=2,mc=3,zm=4,Bm=5,Gm=6,Vm=7,ud=0,Hm=1,Wm=2,Ai=0,Xm=1,qm=2,Ym=3,jm=4,Km=5,eu=300,As=301,Cs=302,gc=303,_c=304,ol=306,tr=1e3,Un=1001,qa=1002,kt=1003,xc=1004,Ia=1005,sn=1006,hd=1007,Fr=1008,$m=1008,nr=1009,Zm=1010,Jm=1011,fd=1012,Qm=1013,Sr=1014,Gi=1015,Io=1016,eg=1017,tg=1018,xs=1020,ng=1021,Tn=1023,ig=1024,rg=1025,Cr=1026,Ls=1027,sg=1028,og=1029,ag=1030,lg=1031,cg=1033,_l=33776,xl=33777,vl=33778,yl=33779,ju=35840,Ku=35841,$u=35842,Zu=35843,ug=36196,Ju=37492,Qu=37496,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,ch=37817,uh=37818,hh=37819,fh=37820,dh=37821,Ml=36492,hg=36283,ph=36284,mh=36285,gh=36286,No=2300,Rs=2301,bl=2302,_h=2400,xh=2401,vh=2402,fg=2500,dg=0,dd=1,vc=2,kr=3e3,it=3001,pg=3200,mg=3201,pd=0,gg=1,ii="srgb",Oo="srgb-linear",md="display-p3",Sl=7680,_g=519,yc=35044,yh="300 es",Mc=1035;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const vo=Math.PI/180,Fo=180/Math.PI;function ei(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[a&255]+Wt[a>>8&255]+Wt[a>>16&255]+Wt[a>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function on(a,e,t){return Math.max(e,Math.min(t,a))}function tu(a,e){return(a%e+e)%e}function xg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function vg(a,e,t){return a!==e?(t-a)/(e-a):0}function yo(a,e,t){return(1-t)*a+t*e}function yg(a,e,t,n){return yo(a,e,1-Math.exp(-t*n))}function Mg(a,e=1){return e-Math.abs(tu(a,e*2)-e)}function bg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Sg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function wg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Tg(a,e){return a+Math.random()*(e-a)}function Eg(a){return a*(.5-Math.random())}function Ag(a){a!==void 0&&(Mh=a);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cg(a){return a*vo}function Lg(a){return a*Fo}function bc(a){return(a&a-1)===0&&a!==0}function gd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function _d(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Rg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),p=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ct(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Na={DEG2RAD:vo,RAD2DEG:Fo,generateUUID:ei,clamp:on,euclideanModulo:tu,mapLinear:xg,inverseLerp:vg,lerp:yo,damp:yg,pingpong:Mg,smoothstep:bg,smootherstep:Sg,randInt:wg,randFloat:Tg,randFloatSpread:Eg,seededRandom:Ag,degToRad:Cg,radToDeg:Lg,isPowerOfTwo:bc,ceilPowerOfTwo:gd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:Rg,normalize:ct,denormalize:wi};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],M=i[1],x=i[4],v=i[7],b=i[2],E=i[5],A=i[8];return r[0]=s*d+o*M+l*b,r[3]=s*m+o*x+l*E,r[6]=s*_+o*v+l*A,r[1]=c*d+u*M+h*b,r[4]=c*m+u*x+h*E,r[7]=c*_+u*v+h*A,r[2]=f*d+p*M+g*b,r[5]=f*m+p*x+g*E,r[8]=f*_+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,p=c*r-s*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*s)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(s*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wl.makeScale(e,t)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new cn;function xd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ko(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class cr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],p=r[s+1],g=r[s+2],d=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-o;const _=l*f+c*p+u*g+h*d,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,_*M);m=Math.sin(m*E)/b,o=Math.sin(o*E)/b}const v=o*M;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+d*v,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],p=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new N,bh=new cr;function vs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function El(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Pg=new cn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dg=new cn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Vi=new N;function Ig(a){return a.convertSRGBToLinear(),Vi.set(a.r,a.g,a.b).applyMatrix3(Dg),a.setRGB(Vi.x,Vi.y,Vi.z)}function Ng(a){return Vi.set(a.r,a.g,a.b).applyMatrix3(Pg),a.setRGB(Vi.x,Vi.y,Vi.z).convertLinearToSRGB()}const Og={[Oo]:a=>a,[ii]:a=>a.convertSRGBToLinear(),[md]:Ig},Fg={[Oo]:a=>a,[ii]:a=>a.convertLinearToSRGB(),[md]:Ng},Jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Oo},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Og[e],i=Fg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Yr;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=ko("canvas")),Yr.width=e.width,Yr.height=e.height;const n=Yr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=vs(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yd{constructor(e=null){this.isSource=!0,this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Al(i[s].image)):r.push(Al(i[s]))}else r=Al(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Al(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?vd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kg=0;class Ht extends Vs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Un,i=Un,r=sn,s=Fr,o=Tn,l=nr,c=Ht.DEFAULT_ANISOTROPY,u=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=ei(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=eu;Ht.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,b=(_+1)/2,E=(u+f)/4,A=(h+d)/4,y=(g+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=y/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ur extends Vs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Md extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ug extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)dr.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(dr)}else n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox),Cl.applyMatrix4(e.matrixWorld),this.union(Cl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Zo.subVectors(this.max,$s),jr.subVectors(e.a,$s),Kr.subVectors(e.b,$s),$r.subVectors(e.c,$s),Ii.subVectors(Kr,jr),Ni.subVectors($r,Kr),pr.subVectors(jr,$r);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-pr.z,pr.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,pr.z,0,-pr.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-pr.y,pr.x,0];return!Ll(t,jr,Kr,$r,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,jr,Kr,$r,Zo))?!1:(Jo.crossVectors(Ii,Ni),t=[Jo.x,Jo.y,Jo.z],Ll(t,jr,Kr,$r,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new N,new N,new N,new N,new N,new N,new N,new N],dr=new N,Cl=new Hs,jr=new N,Kr=new N,$r=new N,Ii=new N,Ni=new N,pr=new N,$s=new N,Zo=new N,Jo=new N,mr=new N;function Ll(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){mr.fromArray(a,r);const o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zg=new Hs,Zs=new N,Rl=new N;class Ws{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Rl)),this.expandByPoint(Zs.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new N,Pl=new N,Qo=new N,Oi=new N,Dl=new N,ea=new N,Il=new N;class nu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pl.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Qo),o=Oi.dot(this.direction),l=-Oi.dot(Qo),c=Oi.lengthSq(),u=Math.abs(1-s*s);let h,f,p,g;if(u>0)if(h=s*l-o,f=s*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pl).addScaledVector(Qo,f),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){Dl.subVectors(t,e),ea.subVectors(n,e),Il.crossVectors(Dl,ea);let s=this.direction.dot(Il),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(ea.crossVectors(Oi,ea));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(Oi));if(c<0||l+c>s)return null;const u=-o*Oi.dot(Il);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),r=1/Zr.setFromMatrixColumn(e,1).length(),s=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,p=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-g,t[6]=d+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-s*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*u,t[9]=d-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,p=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=s*l,p=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,Gg)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(n,vn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(n,vn)),Fi.normalize(),ta.crossVectors(vn,Fi),i[0]=Fi.x,i[4]=ta.x,i[8]=vn.x,i[1]=Fi.y,i[5]=ta.y,i[9]=vn.y,i[2]=Fi.z,i[6]=ta.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],M=n[3],x=n[7],v=n[11],b=n[15],E=i[0],A=i[4],y=i[8],S=i[12],R=i[1],U=i[5],G=i[9],I=i[13],D=i[2],F=i[6],H=i[10],j=i[14],V=i[3],Z=i[7],L=i[11],fe=i[15];return r[0]=s*E+o*R+l*D+c*V,r[4]=s*A+o*U+l*F+c*Z,r[8]=s*y+o*G+l*H+c*L,r[12]=s*S+o*I+l*j+c*fe,r[1]=u*E+h*R+f*D+p*V,r[5]=u*A+h*U+f*F+p*Z,r[9]=u*y+h*G+f*H+p*L,r[13]=u*S+h*I+f*j+p*fe,r[2]=g*E+d*R+m*D+_*V,r[6]=g*A+d*U+m*F+_*Z,r[10]=g*y+d*G+m*H+_*L,r[14]=g*S+d*I+m*j+_*fe,r[3]=M*E+x*R+v*D+b*V,r[7]=M*A+x*U+v*F+b*Z,r[11]=M*y+x*G+v*H+b*L,r[15]=M*S+x*I+v*j+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+d*(+t*l*p-t*c*f+r*s*f-i*s*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*s*h+n*s*p+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],M=h*m*c-d*f*c+d*l*p-o*m*p-h*l*_+o*f*_,x=g*f*c-u*m*c-g*l*p+s*m*p+u*l*_-s*f*_,v=u*d*c-g*h*c+g*o*p-s*d*p-u*o*_+s*h*_,b=g*h*l-u*d*l-g*o*f+s*d*f+u*o*m-s*h*m,E=t*M+n*x+i*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(d*f*r-h*m*r-d*i*p+n*m*p+h*i*_-n*f*_)*A,e[2]=(o*m*r-d*l*r+d*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*_+t*f*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*p+t*l*p)*A,e[8]=v*A,e[9]=(g*h*r-u*d*r-g*n*p+t*d*p+u*n*_-t*h*_)*A,e[10]=(s*d*r-g*o*r+g*n*c-t*d*c-s*n*_+t*o*_)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*p-t*o*p)*A,e[12]=b*A,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-s*d*i-g*n*l+t*d*l+s*n*m-t*o*m)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,p=r*u,g=r*h,d=s*u,m=s*h,_=o*h,M=l*c,x=l*u,v=l*h,b=n.x,E=n.y,A=n.z;return i[0]=(1-(d+_))*b,i[1]=(p+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(f+_))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+x)*A,i[9]=(m-M)*A,i[10]=(1-(f+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zr.set(i[0],i[1],i[2]).length();const s=Zr.set(i[4],i[5],i[6]).length(),o=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/r,u=1/s,h=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),p=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,p=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new N,qn=new Ke,Bg=new N(0,0,0),Gg=new N(1,1,1),Fi=new N,ta=new N,vn=new N,Sh=new Ke,wh=new cr;class al{constructor(e=0,t=0,n=0,i=al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-on(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}al.DEFAULT_ORDER="XYZ";class bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vg=0;const Th=new N,Jr=new cr,mi=new Ke,na=new N,Js=new N,Hg=new N,Wg=new cr,Eh=new N(1,0,0),Ah=new N(0,1,0),Ch=new N(0,0,1),Xg={type:"added"},Lh={type:"removed"};class xt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new al,n=new cr,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new cn}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Js,na,this.up):mi.lookAt(na,Js,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Jr.setFromRotationMatrix(mi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Hg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new N,gi=new N,Nl=new N,_i=new N,Qr=new N,es=new N,Rh=new N,Ol=new N,Fl=new N,kl=new N;class Mi{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yn.subVectors(i,t),gi.subVectors(n,t),Nl.subVectors(e,t);const s=Yn.dot(Yn),o=Yn.dot(gi),l=Yn.dot(Nl),c=gi.dot(gi),u=gi.dot(Nl),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(s*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,_i),l.set(0,0),l.addScaledVector(r,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(o,_i.z),l}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),gi.subVectors(e,t),Yn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Mi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Qr.subVectors(i,n),es.subVectors(r,n),Ol.subVectors(e,n);const l=Qr.dot(Ol),c=es.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,i);const u=Qr.dot(Fl),h=es.dot(Fl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Qr,s);kl.subVectors(e,r);const p=Qr.dot(kl),g=es.dot(kl);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(es,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Rh.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Rh,o);const _=1/(m+d+f);return s=d*_,o=f*_,t.copy(n).addScaledVector(Qr,s).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qg=0;class ai extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=_s,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Ul(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jt.workingColorSpace){if(e=tu(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ul(s,r,e+1/3),this.g=Ul(s,r,e),this.b=Ul(s,r,e-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(e,t=ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Jt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Jt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Jt.fromWorkingColorSpace(Xt.copy(this),e),on(Xt.r*255,0,255)<<16^on(Xt.g*255,0,255)<<8^on(Xt.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ii){Jt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(jn),jn.h+=e,jn.s+=t,jn.l+=n,this.setHSL(jn.h,jn.s,jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(ia);const n=yo(jn.h,ia.h,t),i=yo(jn.s,ia.s,t),r=yo(jn.l,ia.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Xe;Xe.NAMES=Sd;class wr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,ra=new Ue;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wd extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Td extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ci extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yg=0;const Dn=new Ke,zl=new xt,ts=new N,yn=new Hs,Qs=new Hs,Ot=new N;class hi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?Td:wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(yn.min,Qs.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,Qs.max),yn.expandByPoint(Ot)):(yn.expandByPoint(Qs.min),yn.expandByPoint(Qs.max))}yn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Ot.add(ts)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new N,u[R]=new N;const h=new N,f=new N,p=new N,g=new Ue,d=new Ue,m=new Ue,_=new N,M=new N;function x(R,U,G){h.fromArray(i,R*3),f.fromArray(i,U*3),p.fromArray(i,G*3),g.fromArray(s,R*2),d.fromArray(s,U*2),m.fromArray(s,G*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const I=1/(d.x*m.y-m.x*d.y);!isFinite(I)||(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(I),M.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(I),c[R].add(_),c[U].add(_),c[G].add(_),u[R].add(M),u[U].add(M),u[G].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,U=v.length;R<U;++R){const G=v[R],I=G.start,D=G.count;for(let F=I,H=I+D;F<H;F+=3)x(n[F+0],n[F+1],n[F+2])}const b=new N,E=new N,A=new N,y=new N;function S(R){A.fromArray(r,R*3),y.copy(A);const U=c[R];b.copy(U),b.sub(A.multiplyScalar(A.dot(U))).normalize(),E.crossVectors(y,U);const I=E.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=I}for(let R=0,U=v.length;R<U;++R){const G=v[R],I=G.start,D=G.count;for(let F=I,H=I+D;F<H;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,s=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new Ke,ni=new nu,sa=new Ws,Dh=new N,eo=new N,to=new N,no=new N,Bl=new N,oa=new N,aa=new Ue,la=new Ue,ca=new Ue,Gl=new N,ua=new N;class zn extends xt{constructor(e=new hi,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Bl.fromBufferAttribute(h,e),s?oa.addScaledVector(Bl,u):oa.addScaledVector(Bl.sub(t),u))}t.add(oa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),ni.copy(e.ray).recast(e.near),sa.containsPoint(ni.origin)===!1&&(ni.intersectSphere(sa,Dh)===null||ni.origin.distanceToSquared(Dh)>(e.far-e.near)**2))||(Ph.copy(r).invert(),ni.copy(e.ray).applyMatrix4(Ph),n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){const b=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);s=ha(this,m,e,ni,c,u,b,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=o.getX(d),M=o.getX(d+1),x=o.getX(d+2);s=ha(this,i,e,ni,c,u,_,M,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){const b=x,E=x+1,A=x+2;s=ha(this,m,e,ni,c,u,b,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,M=d+1,x=d+2;s=ha(this,i,e,ni,c,u,_,M,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function jg(a,e,t,n,i,r,s,o){let l;if(e.side===Cn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Li,o),l===null)return null;ua.copy(o),ua.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:a}}function ha(a,e,t,n,i,r,s,o,l){a.getVertexPosition(s,eo),a.getVertexPosition(o,to),a.getVertexPosition(l,no);const c=jg(a,e,t,n,eo,to,no,Gl);if(c){i&&(aa.fromBufferAttribute(i,s),la.fromBufferAttribute(i,o),ca.fromBufferAttribute(i,l),c.uv=Mi.getUV(Gl,eo,to,no,aa,la,ca,new Ue)),r&&(aa.fromBufferAttribute(r,s),la.fromBufferAttribute(r,o),ca.fromBufferAttribute(r,l),c.uv2=Mi.getUV(Gl,eo,to,no,aa,la,ca,new Ue));const u={a:s,b:o,c:l,normal:new N,materialIndex:0};Mi.getNormal(eo,to,no,u.normal),c.face=u}return c}class Yo extends hi{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(h,2));function g(d,m,_,M,x,v,b,E,A,y,S){const R=v/A,U=b/y,G=v/2,I=b/2,D=E/2,F=A+1,H=y+1;let j=0,V=0;const Z=new N;for(let L=0;L<H;L++){const fe=L*U-I;for(let B=0;B<F;B++){const J=B*R-G;Z[d]=J*M,Z[m]=fe*x,Z[_]=D,c.push(Z.x,Z.y,Z.z),Z[d]=0,Z[m]=0,Z[_]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(B/A),h.push(1-L/y),j+=1}}for(let L=0;L<y;L++)for(let fe=0;fe<A;fe++){const B=f+fe+F*L,J=f+fe+F*(L+1),te=f+(fe+1)+F*(L+1),z=f+(fe+1)+F*L;l.push(B,J,z),l.push(J,te,z),V+=6}o.addGroup(p,V,S),p+=V,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(a){const e={};for(let t=0;t<a.length;t++){const n=Ps(a[t]);for(const i in n)e[i]=n[i]}return e}function Kg(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ed(a){return a.getRenderTarget()===null&&a.outputEncoding===it?ii:Oo}const $g={clone:Ps,merge:tn};var Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ad extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Ad{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Qg extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Yt(ns,is,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Yt(ns,is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Yt(ns,is,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new Yt(ns,is,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Yt(ns,is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Yt(ns,is,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ai,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class iu extends Ht{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e_ extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new iu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yo(5,5,5),r=new ir({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:$i});r.uniforms.tEquirect.value=t;const s=new zn(i,r),o=t.minFilter;return t.minFilter===Fr&&(t.minFilter=sn),new Qg(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Vl=new N,t_=new N,n_=new cn;class xr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vl.subVectors(n,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||n_.getNormalMatrix(e),i=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ws,fa=new N;class ru{constructor(e=new xr,t=new xr,n=new xr,i=new xr,r=new xr,s=new xr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-m).normalize(),t[1].setComponents(o+i,h+l,d+f,x+m).normalize(),t[2].setComponents(o+r,h+c,d+p,x+_).normalize(),t[3].setComponents(o-r,h-c,d-p,x-_).normalize(),t[4].setComponents(o-s,h-u,d-g,x-M).normalize(),t[5].setComponents(o+s,h+u,d+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cd(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function i_(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;a.bindBuffer(h,c),p.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class su extends hi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const M=_*f-s;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-M,0),d.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const x=M+c*_,v=M+c*(_+1),b=M+1+c*(_+1),E=M+1+c*_;p.push(x,v,E),p.push(v,b,E)}this.setIndex(p),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(d,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}var r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,s_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,a_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_="vec3 transformed = vec3( position );",h_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,d_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,S_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",P_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,m0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,x0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,j0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,K0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Z0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,J0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Q0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:r_,alphamap_pars_fragment:s_,alphatest_fragment:o_,alphatest_pars_fragment:a_,aomap_fragment:l_,aomap_pars_fragment:c_,begin_vertex:u_,beginnormal_vertex:h_,bsdfs:f_,iridescence_fragment:d_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:__,clipping_planes_vertex:x_,color_fragment:v_,color_pars_fragment:y_,color_pars_vertex:M_,color_vertex:b_,common:S_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:T_,displacementmap_pars_vertex:E_,displacementmap_vertex:A_,emissivemap_fragment:C_,emissivemap_pars_fragment:L_,encodings_fragment:R_,encodings_pars_fragment:P_,envmap_fragment:D_,envmap_common_pars_fragment:I_,envmap_pars_fragment:N_,envmap_pars_vertex:O_,envmap_physical_pars_fragment:Y_,envmap_vertex:F_,fog_vertex:k_,fog_pars_vertex:U_,fog_fragment:z_,fog_pars_fragment:B_,gradientmap_pars_fragment:G_,lightmap_fragment:V_,lightmap_pars_fragment:H_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:X_,lights_pars_begin:q_,lights_toon_fragment:j_,lights_toon_pars_fragment:K_,lights_phong_fragment:$_,lights_phong_pars_fragment:Z_,lights_physical_fragment:J_,lights_physical_pars_fragment:Q_,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:f0,morphcolor_vertex:d0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:y0,normal_vertex:M0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:E0,output_fragment:A0,packing:C0,premultiplied_alpha_fragment:L0,project_vertex:R0,dithering_fragment:P0,dithering_pars_fragment:D0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:F0,shadowmap_vertex:k0,shadowmask_pars_fragment:U0,skinbase_vertex:z0,skinning_pars_vertex:B0,skinning_vertex:G0,skinnormal_vertex:V0,specularmap_fragment:H0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:j0,uv_pars_fragment:K0,uv_pars_vertex:$0,uv_vertex:Z0,uv2_pars_fragment:J0,uv2_pars_vertex:Q0,uv2_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:rx,backgroundCube_frag:sx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distanceRGBA_vert:ux,distanceRGBA_frag:hx,equirect_vert:fx,equirect_frag:dx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:_x,meshlambert_vert:xx,meshlambert_frag:vx,meshmatcap_vert:yx,meshmatcap_frag:Mx,meshnormal_vert:bx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ex,meshphysical_frag:Ax,meshtoon_vert:Cx,meshtoon_frag:Lx,points_vert:Rx,points_frag:Px,shadow_vert:Dx,shadow_frag:Ix,sprite_vert:Nx,sprite_frag:Ox},ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},si={basic:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([ce.lights,ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};si.physical={uniforms:tn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const da={r:0,b:0,g:0};function Fx(a,e,t,n,i,r,s){const o=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=a.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),M=!0),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ol)?(u===void 0&&(u=new zn(new Yo(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Ps(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==it,(h!==x||f!==x.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zn(new su(2,2),new ir({name:"BackgroundMaterial",uniforms:Ps(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(da,Ed(a)),n.buffers.color.setClear(da.r,da.g,da.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(o,l)},render:g}}function kx(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(D,F,H,j,V){let Z=!1;if(s){const L=d(j,H,F);c!==L&&(c=L,p(c.object)),Z=_(D,j,H,V),Z&&M(D,j,H,V)}else{const L=F.wireframe===!0;(c.geometry!==j.id||c.program!==H.id||c.wireframe!==L)&&(c.geometry=j.id,c.program=H.id,c.wireframe=L,Z=!0)}V!==null&&t.update(V,34963),(Z||u)&&(u=!1,y(D,F,H,j),V!==null&&a.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?a.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,F,H){const j=H.wireframe===!0;let V=o[D.id];V===void 0&&(V={},o[D.id]=V);let Z=V[F.id];Z===void 0&&(Z={},V[F.id]=Z);let L=Z[j];return L===void 0&&(L=m(f()),Z[j]=L),L}function m(D){const F=[],H=[],j=[];for(let V=0;V<i;V++)F[V]=0,H[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:j,object:D,attributes:{},index:null}}function _(D,F,H,j){const V=c.attributes,Z=F.attributes;let L=0;const fe=H.getAttributes();for(const B in fe)if(fe[B].location>=0){const te=V[B];let z=Z[B];if(z===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),te===void 0||te.attribute!==z||z&&te.data!==z.data)return!0;L++}return c.attributesNum!==L||c.index!==j}function M(D,F,H,j){const V={},Z=F.attributes;let L=0;const fe=H.getAttributes();for(const B in fe)if(fe[B].location>=0){let te=Z[B];te===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const z={};z.attribute=te,te&&te.data&&(z.data=te.data),V[B]=z,L++}c.attributes=V,c.attributesNum=L,c.index=j}function x(){const D=c.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function v(D){b(D,0)}function b(D,F){const H=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;H[D]=1,j[D]===0&&(a.enableVertexAttribArray(D),j[D]=1),V[D]!==F&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),V[D]=F)}function E(){const D=c.newAttributes,F=c.enabledAttributes;for(let H=0,j=F.length;H<j;H++)F[H]!==D[H]&&(a.disableVertexAttribArray(H),F[H]=0)}function A(D,F,H,j,V,Z){n.isWebGL2===!0&&(H===5124||H===5125)?a.vertexAttribIPointer(D,F,H,V,Z):a.vertexAttribPointer(D,F,H,j,V,Z)}function y(D,F,H,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=j.attributes,Z=H.getAttributes(),L=F.defaultAttributeValues;for(const fe in Z){const B=Z[fe];if(B.location>=0){let J=V[fe];if(J===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const te=J.normalized,z=J.itemSize,re=t.get(J);if(re===void 0)continue;const oe=re.buffer,ae=re.type,ge=re.bytesPerElement;if(J.isInterleavedBufferAttribute){const xe=J.data,Pe=xe.stride,he=J.offset;if(xe.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)b(B.location+Re,xe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Re=0;Re<B.locationSize;Re++)v(B.location+Re);a.bindBuffer(34962,oe);for(let Re=0;Re<B.locationSize;Re++)A(B.location+Re,z/B.locationSize,ae,te,Pe*ge,(he+z/B.locationSize*Re)*ge)}else{if(J.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)b(B.location+xe,J.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<B.locationSize;xe++)v(B.location+xe);a.bindBuffer(34962,oe);for(let xe=0;xe<B.locationSize;xe++)A(B.location+xe,z/B.locationSize,ae,te,z*ge,z/B.locationSize*xe*ge)}}else if(L!==void 0){const te=L[fe];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(B.location,te);break;case 3:a.vertexAttrib3fv(B.location,te);break;case 4:a.vertexAttrib4fv(B.location,te);break;default:a.vertexAttrib1fv(B.location,te)}}}}E()}function S(){G();for(const D in o){const F=o[D];for(const H in F){const j=F[H];for(const V in j)g(j[V].object),delete j[V];delete F[H]}delete o[D]}}function R(D){if(o[D.id]===void 0)return;const F=o[D.id];for(const H in F){const j=F[H];for(const V in j)g(j[V].object),delete j[V];delete F[H]}delete o[D.id]}function U(D){for(const F in o){const H=o[F];if(H[D.id]===void 0)continue;const j=H[D.id];for(const V in j)g(j[V].object),delete j[V];delete H[D.id]}}function G(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function Ux(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function zx(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),x=f>0,v=s||e.has("OES_texture_float"),b=x&&v,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:E}}function Bx(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new xr,o=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,x=M*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,p);for(let b=0;b!==x;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,v=p;x!==d;++x,v+=4)s.copy(h[x]).applyMatrix4(M,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Gx(a){let e=new WeakMap;function t(s,o){return o===gc?s.mapping=As:o===_c&&(s.mapping=Cs),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===gc||o===_c)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new e_(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ou extends Ad{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Ih=[.125,.215,.35,.446,.526,.582],br=20,Hl=new ou,Nh=new Xe;let Wl=null;const vr=(1+Math.sqrt(5))/2,ss=1/vr,Oh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,vr,ss),new N(0,vr,-ss),new N(ss,0,vr),new N(-ss,0,vr),new N(vr,ss,0),new N(-vr,ss,0)];class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Io,format:Tn,encoding:kr,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Hx(r,e,t)}return i}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Nh),u.toneMapping=Ai,u.autoClear=!1;const p=new wr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new zn(new Yo,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Nh),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;pa(i,M*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new zn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Oh[(i-1)%Oh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*br-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):br;m>br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const _=[];let M=0;for(let A=0;A<br;++A){const y=A/d,S=Math.exp(-y*y/2);_.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-fs?i-x+fs:0),E=4*(this._cubeSize-v);pa(t,b,E,3*v,2*v),l.setRenderTarget(t),l.render(h,Hl)}}function Vx(a){const e=[],t=[],n=[];let i=a;const r=a-fs+1+Ih.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-fs?l=Ih[s-a+fs-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,M=new Float32Array(d*g*p),x=new Float32Array(m*g*p),v=new Float32Array(_*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,y=E>2?0:-1,S=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];M.set(S,d*g*E),x.set(f,m*g*E);const R=[E,E,E,E,E,E];v.set(R,_*g*E)}const b=new hi;b.setAttribute("position",new un(M,d)),b.setAttribute("uv",new un(x,m)),b.setAttribute("faceIndex",new un(v,_)),e.push(b),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(a,e,t){const n=new Ur(a,e,t);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Hx(a,e,t){const n=new Float32Array(br),i=new N(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Uh(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zh(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wx(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gc||l===_c,u=l===As||l===Cs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Fh(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Fh(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Xx(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qx(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const M=p.array;d=p.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],E=M[x+1],A=M[x+2];f.push(b,E,E,A,A,b)}}else{const M=g.array;d=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,E=x+1,A=x+2;f.push(b,E,E,A,A,b)}}const m=new(xd(f)?Td:wd)(f,1);m.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yx(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){a.drawElements(r,p,o,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=a,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,o,f*l,g),t.update(p,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function jx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kx(a,e){return a[0]-e[0]}function $x(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Zx(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==d){let F=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),b===!0&&(S=3);let R=u.attributes.position.count*S,U=1;R>e.maxTextureSize&&(U=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const G=new Float32Array(R*U*4*d),I=new Md(G,R,U,d);I.type=Gi,I.needsUpdate=!0;const D=S*4;for(let H=0;H<d;H++){const j=E[H],V=A[H],Z=y[H],L=R*U*4*H;for(let fe=0;fe<j.count;fe++){const B=fe*D;x===!0&&(s.fromBufferAttribute(j,fe),G[L+B+0]=s.x,G[L+B+1]=s.y,G[L+B+2]=s.z,G[L+B+3]=0),v===!0&&(s.fromBufferAttribute(V,fe),G[L+B+4]=s.x,G[L+B+5]=s.y,G[L+B+6]=s.z,G[L+B+7]=0),b===!0&&(s.fromBufferAttribute(Z,fe),G[L+B+8]=s.x,G[L+B+9]=s.y,G[L+B+10]=s.z,G[L+B+11]=Z.itemSize===4?s.w:1)}}m={count:d,texture:I,size:new Ue(R,U)},r.set(u,m),u.addEventListener("dispose",F)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(a,"morphTargetBaseInfluence",M),h.getUniforms().setValue(a,"morphTargetInfluences",f),h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let v=0;v<g;v++)d[v]=[v,0];n[u.id]=d}for(let v=0;v<g;v++){const b=d[v];b[0]=v,b[1]=f[v]}d.sort($x);for(let v=0;v<8;v++)v<g&&d[v][1]?(o[v][0]=d[v][0],o[v][1]=d[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Kx);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const b=o[v],E=b[0],A=b[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+v)!==m[E]&&u.setAttribute("morphTarget"+v,m[E]),_&&u.getAttribute("morphNormal"+v)!==_[E]&&u.setAttribute("morphNormal"+v,_[E]),i[v]=A,M+=A):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Jx(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Ld=new Ht,Rd=new Md,Pd=new Ug,Dd=new iu,Bh=[],Gh=[],Vh=new Float32Array(16),Hh=new Float32Array(9),Wh=new Float32Array(4);function Xs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Bh[i];if(r===void 0&&(r=new Float32Array(i),Bh[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function It(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ll(a,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Qx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function nv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function iv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Wh.set(n),a.uniformMatrix2fv(this.addr,!1,Wh),Nt(t,n)}}function rv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Hh.set(n),a.uniformMatrix3fv(this.addr,!1,Hh),Nt(t,n)}}function sv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Vh.set(n),a.uniformMatrix4fv(this.addr,!1,Vh),Nt(t,n)}}function ov(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function lv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function cv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function uv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function hv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function fv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function pv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ld,i)}function mv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pd,i)}function gv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dd,i)}function _v(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rd,i)}function xv(a){switch(a){case 5126:return Qx;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return hv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}function vv(a,e){a.uniform1fv(this.addr,e)}function yv(a,e){const t=Xs(e,this.size,2);a.uniform2fv(this.addr,t)}function Mv(a,e){const t=Xs(e,this.size,3);a.uniform3fv(this.addr,t)}function bv(a,e){const t=Xs(e,this.size,4);a.uniform4fv(this.addr,t)}function Sv(a,e){const t=Xs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function wv(a,e){const t=Xs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Tv(a,e){const t=Xs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Ev(a,e){a.uniform1iv(this.addr,e)}function Av(a,e){a.uniform2iv(this.addr,e)}function Cv(a,e){a.uniform3iv(this.addr,e)}function Lv(a,e){a.uniform4iv(this.addr,e)}function Rv(a,e){a.uniform1uiv(this.addr,e)}function Pv(a,e){a.uniform2uiv(this.addr,e)}function Dv(a,e){a.uniform3uiv(this.addr,e)}function Iv(a,e){a.uniform4uiv(this.addr,e)}function Nv(a,e,t){const n=this.cache,i=e.length,r=ll(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Ld,r[s])}function Ov(a,e,t){const n=this.cache,i=e.length,r=ll(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Pd,r[s])}function Fv(a,e,t){const n=this.cache,i=e.length,r=ll(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Dd,r[s])}function kv(a,e,t){const n=this.cache,i=e.length,r=ll(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Rd,r[s])}function Uv(a){switch(a){case 5126:return vv;case 35664:return yv;case 35665:return Mv;case 35666:return bv;case 35674:return Sv;case 35675:return wv;case 35676:return Tv;case 5124:case 35670:return Ev;case 35667:case 35671:return Av;case 35668:case 35672:return Cv;case 35669:case 35673:return Lv;case 5125:return Rv;case 36294:return Pv;case 36295:return Dv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return kv}}class zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=xv(t.type)}}class Bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Uv(t.type)}}class Gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Xh(a,e){a.seq.push(e),a.map[e.id]=e}function Vv(a,e,t){const n=a.name,i=n.length;for(Xl.lastIndex=0;;){const r=Xl.exec(n),s=Xl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Xh(t,c===void 0?new zv(o,a,e):new Bv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Gv(o),Xh(t,h)),t=h}}}class Oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Vv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function qh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Hv=0;function Wv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Xv(a){switch(a){case kr:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Yh(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Wv(a.getShaderSource(e),s)}else return i}function qv(a,e){const t=Xv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yv(a,e){let t;switch(e){case Xm:t="Linear";break;case qm:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case jm:t="ACESFilmic";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jv(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function Kv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $v(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function fo(a){return a!==""}function jh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(a){return a.replace(Zv,Jv)}function Jv(a,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sc(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(a){return a.replace(Qv,ey)}function ey(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ty(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ho&&(e="SHADOWMAP_TYPE_VSM"),e}function ny(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iy(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Wm:e="ENVMAP_BLENDING_ADD";break}return e}function sy(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oy(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=ty(t),c=ny(t),u=iy(t),h=ry(t),f=sy(t),p=t.isWebGL2?"":jv(t),g=Kv(r),d=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(fo).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(fo).join(`
`),_.length>0&&(_+=`
`)):(m=[Zh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),_=[p,Zh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ai?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,qv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),s=Sc(s),s=jh(s,t),s=Kh(s,t),o=Sc(o),o=jh(o,t),o=Kh(o,t),s=$h(s),o=$h(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+m+s,v=M+_+o,b=qh(i,35633,x),E=qh(i,35632,v);if(i.attachShader(d,b),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const S=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(E).trim();let G=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){G=!1;const D=Yh(i,b,"vertex"),F=Yh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+S+`
`+D+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||U==="")&&(I=!1);I&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:U,prefix:_}})}i.deleteShader(b),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Oa(i,d)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=$v(i,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=E,this}let ay=0;class ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cy(e),t.set(e,n)),n}}class cy{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}}function uy(a,e,t,n,i,r,s){const o=new bd,l=new ly,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,S,R,U,G){const I=U.fog,D=G.geometry,F=y.isMeshStandardMaterial?U.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),j=!!H&&H.mapping===ol?H.image.height:null,V=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,L=Z!==void 0?Z.length:0;let fe=0;D.morphAttributes.position!==void 0&&(fe=1),D.morphAttributes.normal!==void 0&&(fe=2),D.morphAttributes.color!==void 0&&(fe=3);let B,J,te,z;if(V){const Pe=si[V];B=Pe.vertexShader,J=Pe.fragmentShader}else B=y.vertexShader,J=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),z=l.getFragmentShaderID(y);const re=a.getRenderTarget(),oe=y.alphaTest>0,ae=y.clearcoat>0,ge=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:B,fragmentShader:J,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:f,outputEncoding:re===null?a.outputEncoding:re.isXRRenderTarget===!0?re.texture.encoding:kr,map:!!y.map,matcap:!!y.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===gg,tangentSpaceNormalMap:y.normalMapType===pd,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===it,clearcoat:ae,clearcoatMap:ae&&!!y.clearcoatMap,clearcoatRoughnessMap:ae&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!y.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!y.iridescenceMap,iridescenceThicknessMap:ge&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===_s,alphaMap:!!y.alphaMap,alphaTest:oe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Ai,useLegacyLights:a.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Si,flipSided:y.side===Cn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(_(S,y),M(S,y),S.push(a.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),y.push(o.mask)}function x(y){const S=g[y.type];let R;if(S){const U=si[S];R=$g.clone(U.uniforms)}else R=y.uniforms;return R}function v(y,S){let R;for(let U=0,G=c.length;U<G;U++){const I=c[U];if(I.cacheKey===S){R=I,++R.usedTimes;break}}return R===void 0&&(R=new oy(a,S,y,r),c.push(R)),R}function b(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function hy(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Jh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Qh(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,p,g,d,m){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function o(h,f,p,g,d,m){const _=s(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=s(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||fy),n.length>1&&n.sort(f||Jh),i.length>1&&i.sort(f||Jh)}function u(){for(let h=e,f=a.length;h<f;h++){const p=a[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function dy(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Qh,a.set(n,[s])):i>=r.length?(s=new Qh,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function py(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Xe};break;case"SpotLight":t={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return a[e.id]=t,t}}}function my(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let gy=0;function _y(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function xy(a,e){const t=new py,n=my(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new Ke,o=new Ke;function l(u,h){let f=0,p=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,m=0,_=0,M=0,x=0,v=0,b=0,E=0,A=0,y=0;u.sort(_y);const S=h===!0?Math.PI:1;for(let U=0,G=u.length;U<G;U++){const I=u[U],D=I.color,F=I.intensity,H=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=D.r*F*S,p+=D.g*F*S,g+=D.b*F*S;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],F);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const Z=I.shadow,L=n.get(I);L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,v++}i.directional[d]=V,d++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(F*S),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const Z=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&y++),i.spotLightMatrix[_]=Z.matrix,I.castShadow){const L=n.get(I);L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=j,E++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=V,M++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*S),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Z=I.shadow,L=n.get(I);L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=V,m++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(F*S),V.groundColor.copy(I.groundColor).multiplyScalar(F*S),i.hemi[x]=V,x++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==b||R.numSpotShadows!==E||R.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-y,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=y,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=b,R.numSpotShadows=E,R.numSpotMaps=A,i.version=gy++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const v=u[M];if(v.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(v.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function ef(a,e){const t=new xy(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function vy(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new ef(a,e),t.set(r,[l])):s>=o.length?(l=new ef(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yy extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class My extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const by=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wy(a,e,t){let n=new ru;const i=new Ue,r=new Ue,s=new ft,o=new yy({depthPacking:mg}),l=new My,c={},u=t.maxTextureSize,h={[Li]:Cn,[Cn]:Li,[Si]:Si},f=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:by,fragmentShader:Sy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new zn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad,this.render=function(v,b,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const A=a.getRenderTarget(),y=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),R=a.state;R.setBlending($i),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let U=0,G=v.length;U<G;U++){const I=v[U],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const F=D.getFrameExtents();if(i.multiply(F),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,D.mapSize.y=r.y)),D.map===null){const j=this.type!==ho?{minFilter:kt,magFilter:kt}:{};D.map=new Ur(i.x,i.y,j),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const H=D.getViewportCount();for(let j=0;j<H;j++){const V=D.getViewport(j);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),R.viewport(s),D.updateMatrices(I,j),n=D.getFrustum(),x(b,E,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===ho&&_(D,E),D.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,y,S)};function _(v,b){const E=e.update(d);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ur(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(b,null,E,f,d,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(b,null,E,p,d,null)}function M(v,b,E,A,y,S){let R=null;const U=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0)R=U;else if(R=E.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=R.uuid,I=b.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let F=D[I];F===void 0&&(F=R.clone(),D[I]=F),R=F}return R.visible=b.visible,R.wireframe=b.wireframe,S===ho?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=A,R.farDistance=y),R}function x(v,b,E,A,y){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===ho)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const U=e.update(v),G=v.material;if(Array.isArray(G)){const I=U.groups;for(let D=0,F=I.length;D<F;D++){const H=I[D],j=G[H.materialIndex];if(j&&j.visible){const V=M(v,j,A,E.near,E.far,y);a.renderBufferDirect(E,null,U,V,v,H)}}}else if(G.visible){const I=M(v,G,A,E.near,E.far,y);a.renderBufferDirect(E,null,U,I,v,null)}}const R=v.children;for(let U=0,G=R.length;U<G;U++)x(R[U],b,E,A,y)}}function Ty(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const Y=new ft;let Q=null;const le=new ft(0,0,0,0);return{setMask:function(me){Q!==me&&!P&&(a.colorMask(me,me,me,me),Q=me)},setLocked:function(me){P=me},setClear:function(me,nt,ot,Mt,Fe){Fe===!0&&(me*=Mt,nt*=Mt,ot*=Mt),Y.set(me,nt,ot,Mt),le.equals(Y)===!1&&(a.clearColor(me,nt,ot,Mt),le.copy(Y))},reset:function(){P=!1,Q=null,le.set(-1,0,0,0)}}}function r(){let P=!1,Y=null,Q=null,le=null;return{setTest:function(me){me?oe(2929):ae(2929)},setMask:function(me){Y!==me&&!P&&(a.depthMask(me),Y=me)},setFunc:function(me){if(Q!==me){switch(me){case Fm:a.depthFunc(512);break;case km:a.depthFunc(519);break;case Um:a.depthFunc(513);break;case mc:a.depthFunc(515);break;case zm:a.depthFunc(514);break;case Bm:a.depthFunc(518);break;case Gm:a.depthFunc(516);break;case Vm:a.depthFunc(517);break;default:a.depthFunc(515)}Q=me}},setLocked:function(me){P=me},setClear:function(me){le!==me&&(a.clearDepth(me),le=me)},reset:function(){P=!1,Y=null,Q=null,le=null}}}function s(){let P=!1,Y=null,Q=null,le=null,me=null,nt=null,ot=null,Mt=null,Fe=null;return{setTest:function(ue){P||(ue?oe(2960):ae(2960))},setMask:function(ue){Y!==ue&&!P&&(a.stencilMask(ue),Y=ue)},setFunc:function(ue,ne,ye){(Q!==ue||le!==ne||me!==ye)&&(a.stencilFunc(ue,ne,ye),Q=ue,le=ne,me=ye)},setOp:function(ue,ne,ye){(nt!==ue||ot!==ne||Mt!==ye)&&(a.stencilOp(ue,ne,ye),nt=ue,ot=ne,Mt=ye)},setLocked:function(ue){P=ue},setClear:function(ue){Fe!==ue&&(a.clearStencil(ue),Fe=ue)},reset:function(){P=!1,Y=null,Q=null,le=null,me=null,nt=null,ot=null,Mt=null,Fe=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,v=null,b=null,E=null,A=null,y=null,S=!1,R=null,U=null,G=null,I=null,D=null;const F=a.getParameter(35661);let H=!1,j=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=j>=2);let Z=null,L={};const fe=a.getParameter(3088),B=a.getParameter(2978),J=new ft().fromArray(fe),te=new ft().fromArray(B);function z(P,Y,Q){const le=new Uint8Array(4),me=a.createTexture();a.bindTexture(P,me),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let nt=0;nt<Q;nt++)a.texImage2D(Y+nt,0,6408,1,1,0,6408,5121,le);return me}const re={};re[3553]=z(3553,3553,1),re[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(2929),l.setFunc(mc),Oe(!1),W(Vu),oe(2884),Ze($i);function oe(P){f[P]!==!0&&(a.enable(P),f[P]=!0)}function ae(P){f[P]!==!1&&(a.disable(P),f[P]=!1)}function ge(P,Y){return p[P]!==Y?(a.bindFramebuffer(P,Y),p[P]=Y,n&&(P===36009&&(p[36160]=Y),P===36160&&(p[36009]=Y)),!0):!1}function xe(P,Y){let Q=d,le=!1;if(P)if(Q=g.get(Y),Q===void 0&&(Q=[],g.set(Y,Q)),P.isWebGLMultipleRenderTargets){const me=P.texture;if(Q.length!==me.length||Q[0]!==36064){for(let nt=0,ot=me.length;nt<ot;nt++)Q[nt]=36064+nt;Q.length=me.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?a.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Pe(P){return m!==P?(a.useProgram(P),m=P,!0):!1}const he={[cs]:32774,[Tm]:32778,[Em]:32779};if(n)he[qu]=32775,he[Yu]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(he[qu]=P.MIN_EXT,he[Yu]=P.MAX_EXT)}const Re={[Am]:0,[Cm]:1,[Lm]:768,[ld]:770,[Om]:776,[Im]:774,[Pm]:772,[Rm]:769,[cd]:771,[Nm]:775,[Dm]:773};function Ze(P,Y,Q,le,me,nt,ot,Mt){if(P===$i){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(oe(3042),_=!0),P!==wm){if(P!==M||Mt!==S){if((x!==cs||E!==cs)&&(a.blendEquation(32774),x=cs,E=cs),Mt)switch(P){case _s:a.blendFuncSeparate(1,771,1,771);break;case Hu:a.blendFunc(1,1);break;case Wu:a.blendFuncSeparate(0,769,0,1);break;case Xu:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case _s:a.blendFuncSeparate(770,771,1,771);break;case Hu:a.blendFunc(770,1);break;case Wu:a.blendFuncSeparate(0,769,0,1);break;case Xu:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,b=null,A=null,y=null,M=P,S=Mt}return}me=me||Y,nt=nt||Q,ot=ot||le,(Y!==x||me!==E)&&(a.blendEquationSeparate(he[Y],he[me]),x=Y,E=me),(Q!==v||le!==b||nt!==A||ot!==y)&&(a.blendFuncSeparate(Re[Q],Re[le],Re[nt],Re[ot]),v=Q,b=le,A=nt,y=ot),M=P,S=!1}function at(P,Y){P.side===Si?ae(2884):oe(2884);let Q=P.side===Cn;Y&&(Q=!Q),Oe(Q),P.blending===_s&&P.transparent===!1?Ze($i):Ze(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const le=P.stencilWrite;c.setTest(le),le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(32926):ae(32926)}function Oe(P){R!==P&&(P?a.frontFace(2304):a.frontFace(2305),R=P)}function W(P){P!==Mm?(oe(2884),P!==U&&(P===Vu?a.cullFace(1029):P===bm?a.cullFace(1028):a.cullFace(1032))):ae(2884),U=P}function Be(P){P!==G&&(H&&a.lineWidth(P),G=P)}function Ne(P,Y,Q){P?(oe(32823),(I!==Y||D!==Q)&&(a.polygonOffset(Y,Q),I=Y,D=Q)):ae(32823)}function Lt(P){P?oe(3089):ae(3089)}function wt(P){P===void 0&&(P=33984+F-1),Z!==P&&(a.activeTexture(P),Z=P)}function C(P,Y,Q){Q===void 0&&(Z===null?Q=33984+F-1:Q=Z);let le=L[Q];le===void 0&&(le={type:void 0,texture:void 0},L[Q]=le),(le.type!==P||le.texture!==Y)&&(Z!==Q&&(a.activeTexture(Q),Z=Q),a.bindTexture(P,Y||re[P]),le.type=P,le.texture=Y)}function w(){const P=L[Z];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(P){J.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function be(P){te.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Ve(P,Y){let Q=h.get(Y);Q===void 0&&(Q=new WeakMap,h.set(Y,Q));let le=Q.get(P);le===void 0&&(le=a.getUniformBlockIndex(Y,P.name),Q.set(P,le))}function Ee(P,Y){const le=h.get(Y).get(P);u.get(Y)!==le&&(a.uniformBlockBinding(Y,le,P.__bindingPointIndex),u.set(Y,le))}function st(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},Z=null,L={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,v=null,b=null,E=null,A=null,y=null,S=!1,R=null,U=null,G=null,I=null,D=null,J.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:oe,disable:ae,bindFramebuffer:ge,drawBuffers:xe,useProgram:Pe,setBlending:Ze,setMaterial:at,setFlipSided:Oe,setCullFace:W,setLineWidth:Be,setPolygonOffset:Ne,setScissorTest:Lt,activeTexture:wt,bindTexture:C,unbindTexture:w,compressedTexImage2D:$,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Ae,updateUBOMapping:Ve,uniformBlockBinding:Ee,texStorage2D:K,texStorage3D:we,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:_e,compressedTexSubImage3D:de,scissor:Te,viewport:be,reset:st}}function Ey(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,w){return _?new OffscreenCanvas(C,w):ko("canvas")}function x(C,w,$,ie){let ee=1;if((C.width>ie||C.height>ie)&&(ee=ie/Math.max(C.width,C.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=w?_d:Math.floor,_e=se(ee*C.width),de=se(ee*C.height);d===void 0&&(d=M(_e,de));const K=$?M(_e,de):d;return K.width=_e,K.height=de,K.getContext("2d").drawImage(C,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+de+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return bc(C.width)&&bc(C.height)}function b(C){return o?!1:C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==kt&&C.minFilter!==sn}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==kt&&C.minFilter!==sn}function A(C){a.generateMipmap(C)}function y(C,w,$,ie,ee=!1){if(o===!1)return w;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;return w===6403&&($===5126&&(se=33326),$===5131&&(se=33325),$===5121&&(se=33321)),w===33319&&($===5126&&(se=33328),$===5131&&(se=33327),$===5121&&(se=33323)),w===6408&&($===5126&&(se=34836),$===5131&&(se=34842),$===5121&&(se=ie===it&&ee===!1?35907:32856),$===32819&&(se=32854),$===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function S(C,w,$){return E(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===kt||C===xc||C===Ia?9728:9729}function U(C){const w=C.target;w.removeEventListener("dispose",U),I(w),w.isVideoTexture&&g.delete(w)}function G(C){const w=C.target;w.removeEventListener("dispose",G),F(w)}function I(C){const w=n.get(C);if(w.__webglInit===void 0)return;const $=C.source,ie=m.get($);if(ie){const ee=ie[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(C),Object.keys(ie).length===0&&m.delete($)}n.remove(C)}function D(C){const w=n.get(C);a.deleteTexture(w.__webglTexture);const $=C.source,ie=m.get($);delete ie[w.__cacheKey],s.memory.textures--}function F(C){const w=C.texture,$=n.get(C),ie=n.get(w);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer($.__webglFramebuffer[ee]),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&a.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ee=0;ee<$.__webglColorRenderbuffer.length;ee++)$.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer($.__webglColorRenderbuffer[ee]);$.__webglDepthRenderbuffer&&a.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,se=w.length;ee<se;ee++){const _e=n.get(w[ee]);_e.__webglTexture&&(a.deleteTexture(_e.__webglTexture),s.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(C)}let H=0;function j(){H=0}function V(){const C=H;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),H+=1,C}function Z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function L(C,w){const $=n.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae($,C,w);return}}t.bindTexture(3553,$.__webglTexture,33984+w)}function fe(C,w){const $=n.get(C);if(C.version>0&&$.__version!==C.version){ae($,C,w);return}t.bindTexture(35866,$.__webglTexture,33984+w)}function B(C,w){const $=n.get(C);if(C.version>0&&$.__version!==C.version){ae($,C,w);return}t.bindTexture(32879,$.__webglTexture,33984+w)}function J(C,w){const $=n.get(C);if(C.version>0&&$.__version!==C.version){ge($,C,w);return}t.bindTexture(34067,$.__webglTexture,33984+w)}const te={[tr]:10497,[Un]:33071,[qa]:33648},z={[kt]:9728,[xc]:9984,[Ia]:9986,[sn]:9729,[hd]:9985,[Fr]:9987};function re(C,w,$){if($?(a.texParameteri(C,10242,te[w.wrapS]),a.texParameteri(C,10243,te[w.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,te[w.wrapR]),a.texParameteri(C,10240,z[w.magFilter]),a.texParameteri(C,10241,z[w.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(w.wrapS!==Un||w.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,R(w.magFilter)),a.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==kt&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===kt||w.minFilter!==Ia&&w.minFilter!==Fr||w.type===Gi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Io&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function oe(C,w){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",U));const ie=w.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const se=Z(w);if(se!==C.__cacheKey){ee[se]===void 0&&(ee[se]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ee[se].usedTimes++;const _e=ee[C.__cacheKey];_e!==void 0&&(ee[C.__cacheKey].usedTimes--,_e.usedTimes===0&&D(w)),C.__cacheKey=se,C.__webglTexture=ee[se].texture}return $}function ae(C,w,$){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const ee=oe(C,w),se=w.source;t.bindTexture(ie,C.__webglTexture,33984+$);const _e=n.get(se);if(se.version!==_e.__version||ee===!0){t.activeTexture(33984+$),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const de=b(w)&&v(w.image)===!1;let K=x(w.image,de,!1,u);K=wt(w,K);const we=v(K)||o,ve=r.convert(w.format,w.encoding);let Ae=r.convert(w.type),Te=y(w.internalFormat,ve,Ae,w.encoding,w.isVideoTexture);re(ie,w,we);let be;const Ve=w.mipmaps,Ee=o&&w.isVideoTexture!==!0,st=_e.__version===void 0||ee===!0,P=S(w,K,we);if(w.isDepthTexture)Te=6402,o?w.type===Gi?Te=36012:w.type===Sr?Te=33190:w.type===xs?Te=35056:Te=33189:w.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Cr&&Te===6402&&w.type!==fd&&w.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Sr,Ae=r.convert(w.type)),w.format===Ls&&Te===6402&&(Te=34041,w.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=xs,Ae=r.convert(w.type))),st&&(Ee?t.texStorage2D(3553,1,Te,K.width,K.height):t.texImage2D(3553,0,Te,K.width,K.height,0,ve,Ae,null));else if(w.isDataTexture)if(Ve.length>0&&we){Ee&&st&&t.texStorage2D(3553,P,Te,Ve[0].width,Ve[0].height);for(let Y=0,Q=Ve.length;Y<Q;Y++)be=Ve[Y],Ee?t.texSubImage2D(3553,Y,0,0,be.width,be.height,ve,Ae,be.data):t.texImage2D(3553,Y,Te,be.width,be.height,0,ve,Ae,be.data);w.generateMipmaps=!1}else Ee?(st&&t.texStorage2D(3553,P,Te,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,ve,Ae,K.data)):t.texImage2D(3553,0,Te,K.width,K.height,0,ve,Ae,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ee&&st&&t.texStorage3D(35866,P,Te,Ve[0].width,Ve[0].height,K.depth);for(let Y=0,Q=Ve.length;Y<Q;Y++)be=Ve[Y],w.format!==Tn?ve!==null?Ee?t.compressedTexSubImage3D(35866,Y,0,0,0,be.width,be.height,K.depth,ve,be.data,0,0):t.compressedTexImage3D(35866,Y,Te,be.width,be.height,K.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage3D(35866,Y,0,0,0,be.width,be.height,K.depth,ve,Ae,be.data):t.texImage3D(35866,Y,Te,be.width,be.height,K.depth,0,ve,Ae,be.data)}else{Ee&&st&&t.texStorage2D(3553,P,Te,Ve[0].width,Ve[0].height);for(let Y=0,Q=Ve.length;Y<Q;Y++)be=Ve[Y],w.format!==Tn?ve!==null?Ee?t.compressedTexSubImage2D(3553,Y,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(3553,Y,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(3553,Y,0,0,be.width,be.height,ve,Ae,be.data):t.texImage2D(3553,Y,Te,be.width,be.height,0,ve,Ae,be.data)}else if(w.isDataArrayTexture)Ee?(st&&t.texStorage3D(35866,P,Te,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,ve,Ae,K.data)):t.texImage3D(35866,0,Te,K.width,K.height,K.depth,0,ve,Ae,K.data);else if(w.isData3DTexture)Ee?(st&&t.texStorage3D(32879,P,Te,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,ve,Ae,K.data)):t.texImage3D(32879,0,Te,K.width,K.height,K.depth,0,ve,Ae,K.data);else if(w.isFramebufferTexture){if(st)if(Ee)t.texStorage2D(3553,P,Te,K.width,K.height);else{let Y=K.width,Q=K.height;for(let le=0;le<P;le++)t.texImage2D(3553,le,Te,Y,Q,0,ve,Ae,null),Y>>=1,Q>>=1}}else if(Ve.length>0&&we){Ee&&st&&t.texStorage2D(3553,P,Te,Ve[0].width,Ve[0].height);for(let Y=0,Q=Ve.length;Y<Q;Y++)be=Ve[Y],Ee?t.texSubImage2D(3553,Y,0,0,ve,Ae,be):t.texImage2D(3553,Y,Te,ve,Ae,be);w.generateMipmaps=!1}else Ee?(st&&t.texStorage2D(3553,P,Te,K.width,K.height),t.texSubImage2D(3553,0,0,0,ve,Ae,K)):t.texImage2D(3553,0,Te,ve,Ae,K);E(w,we)&&A(ie),_e.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,$){if(w.image.length!==6)return;const ie=oe(C,w),ee=w.source;t.bindTexture(34067,C.__webglTexture,33984+$);const se=n.get(ee);if(ee.version!==se.__version||ie===!0){t.activeTexture(33984+$),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const _e=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,K=[];for(let Y=0;Y<6;Y++)!_e&&!de?K[Y]=x(w.image[Y],!1,!0,c):K[Y]=de?w.image[Y].image:w.image[Y],K[Y]=wt(w,K[Y]);const we=K[0],ve=v(we)||o,Ae=r.convert(w.format,w.encoding),Te=r.convert(w.type),be=y(w.internalFormat,Ae,Te,w.encoding),Ve=o&&w.isVideoTexture!==!0,Ee=se.__version===void 0||ie===!0;let st=S(w,we,ve);re(34067,w,ve);let P;if(_e){Ve&&Ee&&t.texStorage2D(34067,st,be,we.width,we.height);for(let Y=0;Y<6;Y++){P=K[Y].mipmaps;for(let Q=0;Q<P.length;Q++){const le=P[Q];w.format!==Tn?Ae!==null?Ve?t.compressedTexSubImage2D(34069+Y,Q,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(34069+Y,Q,be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+Y,Q,0,0,le.width,le.height,Ae,Te,le.data):t.texImage2D(34069+Y,Q,be,le.width,le.height,0,Ae,Te,le.data)}}}else{P=w.mipmaps,Ve&&Ee&&(P.length>0&&st++,t.texStorage2D(34067,st,be,K[0].width,K[0].height));for(let Y=0;Y<6;Y++)if(de){Ve?t.texSubImage2D(34069+Y,0,0,0,K[Y].width,K[Y].height,Ae,Te,K[Y].data):t.texImage2D(34069+Y,0,be,K[Y].width,K[Y].height,0,Ae,Te,K[Y].data);for(let Q=0;Q<P.length;Q++){const me=P[Q].image[Y].image;Ve?t.texSubImage2D(34069+Y,Q+1,0,0,me.width,me.height,Ae,Te,me.data):t.texImage2D(34069+Y,Q+1,be,me.width,me.height,0,Ae,Te,me.data)}}else{Ve?t.texSubImage2D(34069+Y,0,0,0,Ae,Te,K[Y]):t.texImage2D(34069+Y,0,be,Ae,Te,K[Y]);for(let Q=0;Q<P.length;Q++){const le=P[Q];Ve?t.texSubImage2D(34069+Y,Q+1,0,0,Ae,Te,le.image[Y]):t.texImage2D(34069+Y,Q+1,be,Ae,Te,le.image[Y])}}}E(w,ve)&&A(34067),se.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function xe(C,w,$,ie,ee){const se=r.convert($.format,$.encoding),_e=r.convert($.type),de=y($.internalFormat,se,_e,$.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,de,w.width,w.height,w.depth,0,se,_e,null):t.texImage2D(ee,0,de,w.width,w.height,0,se,_e,null)),t.bindFramebuffer(36160,C),Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,ie,ee,n.get($).__webglTexture,0,Be(w)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,ie,ee,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(C,w,$){if(a.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if($||Ne(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gi?ie=36012:ee.type===Sr&&(ie=33190));const se=Be(w);Ne(w)?f.renderbufferStorageMultisampleEXT(36161,se,ie,w.width,w.height):a.renderbufferStorageMultisample(36161,se,ie,w.width,w.height)}else a.renderbufferStorage(36161,ie,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ie=Be(w);$&&Ne(w)===!1?a.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):Ne(w)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<ie.length;ee++){const se=ie[ee],_e=r.convert(se.format,se.encoding),de=r.convert(se.type),K=y(se.internalFormat,_e,de,se.encoding),we=Be(w);$&&Ne(w)===!1?a.renderbufferStorageMultisample(36161,we,K,w.width,w.height):Ne(w)?f.renderbufferStorageMultisampleEXT(36161,we,K,w.width,w.height):a.renderbufferStorage(36161,K,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function he(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,ee=Be(w);if(w.depthTexture.format===Cr)Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ee):a.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===Ls)Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ee):a.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Re(C){const w=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");he(w.__webglFramebuffer,C)}else if($){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=a.createRenderbuffer(),Pe(w.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),Pe(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ze(C,w,$){const ie=n.get(C);w!==void 0&&xe(ie.__webglFramebuffer,C,C.texture,36064,3553),$!==void 0&&Re(C)}function at(C){const w=C.texture,$=n.get(C),ie=n.get(w);C.addEventListener("dispose",G),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=w.version,s.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,_e=v(C)||o;if(ee){$.__webglFramebuffer=[];for(let de=0;de<6;de++)$.__webglFramebuffer[de]=a.createFramebuffer()}else{if($.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const de=C.texture;for(let K=0,we=de.length;K<we;K++){const ve=n.get(de[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ne(C)===!1){const de=se?w:[w];$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let K=0;K<de.length;K++){const we=de[K];$.__webglColorRenderbuffer[K]=a.createRenderbuffer(),a.bindRenderbuffer(36161,$.__webglColorRenderbuffer[K]);const ve=r.convert(we.format,we.encoding),Ae=r.convert(we.type),Te=y(we.internalFormat,ve,Ae,we.encoding,C.isXRRenderTarget===!0),be=Be(C);a.renderbufferStorageMultisample(36161,be,Te,C.width,C.height),a.framebufferRenderbuffer(36160,36064+K,36161,$.__webglColorRenderbuffer[K])}a.bindRenderbuffer(36161,null),C.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Pe($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,ie.__webglTexture),re(34067,w,_e);for(let de=0;de<6;de++)xe($.__webglFramebuffer[de],C,w,36064,34069+de);E(w,_e)&&A(34067),t.unbindTexture()}else if(se){const de=C.texture;for(let K=0,we=de.length;K<we;K++){const ve=de[K],Ae=n.get(ve);t.bindTexture(3553,Ae.__webglTexture),re(3553,ve,_e),xe($.__webglFramebuffer,C,ve,36064+K,3553),E(ve,_e)&&A(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),re(de,w,_e),xe($.__webglFramebuffer,C,w,36064,de),E(w,_e)&&A(de),t.unbindTexture()}C.depthBuffer&&Re(C)}function Oe(C){const w=v(C)||o,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,ee=$.length;ie<ee;ie++){const se=$[ie];if(E(se,w)){const _e=C.isWebGLCubeRenderTarget?34067:3553,de=n.get(se).__webglTexture;t.bindTexture(_e,de),A(_e),t.unbindTexture()}}}function W(C){if(o&&C.samples>0&&Ne(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,ie=C.height;let ee=16384;const se=[],_e=C.stencilBuffer?33306:36096,de=n.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let we=0;we<w.length;we++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let we=0;we<w.length;we++){se.push(36064+we),C.depthBuffer&&se.push(_e);const ve=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),K&&a.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[we]),ve===!0&&(a.invalidateFramebuffer(36008,[_e]),a.invalidateFramebuffer(36009,[_e])),K){const Ae=n.get(w[we]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Ae,0)}a.blitFramebuffer(0,0,$,ie,0,0,$,ie,ee,9728),p&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let we=0;we<w.length;we++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,de.__webglColorRenderbuffer[we]);const ve=n.get(w[we]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,ve,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function Be(C){return Math.min(h,C.samples)}function Ne(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(C){const w=s.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function wt(C,w){const $=C.encoding,ie=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Mc||$!==kr&&($===it?o===!1?e.has("EXT_sRGB")===!0&&ie===Tn?(C.format=Mc,C.minFilter=sn,C.generateMipmaps=!1):w=vd.sRGBToLinear(w):(ie!==Tn||ee!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),w}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=L,this.setTexture2DArray=fe,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=Ze,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ne}function Ay(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===nr)return 5121;if(r===eg)return 32819;if(r===tg)return 32820;if(r===Zm)return 5120;if(r===Jm)return 5122;if(r===fd)return 5123;if(r===Qm)return 5124;if(r===Sr)return 5125;if(r===Gi)return 5126;if(r===Io)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ng)return 6406;if(r===Tn)return 6408;if(r===ig)return 6409;if(r===rg)return 6410;if(r===Cr)return 6402;if(r===Ls)return 34041;if(r===Mc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===sg)return 6403;if(r===og)return 36244;if(r===ag)return 33319;if(r===lg)return 33320;if(r===cg)return 36249;if(r===_l||r===xl||r===vl||r===yl)if(s===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===_l)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===_l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ju||r===Ku||r===$u||r===Zu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ju)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$u)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ug)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ju||r===Qu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ju)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh||r===hh||r===fh||r===dh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===eh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===th)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ih)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ah)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ch)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ml)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===hg||r===ph||r===mh||r===gh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ml)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ph)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Cy extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ry extends Ht{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Cr,u!==Cr&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cr&&(n=Sr),n===void 0&&u===Ls&&(n=xs),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class Py extends Vs{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const M=[],x=[],v=new Set,b=new Map,E=new Yt;E.layers.enable(1),E.viewport=new ft;const A=new Yt;A.layers.enable(2),A.viewport=new ft;const y=[E,A],S=new Cy;S.layers.enable(1),S.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=M[B];return J===void 0&&(J=new ql,M[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=M[B];return J===void 0&&(J=new ql,M[B]=J),J.getGripSpace()},this.getHand=function(B){let J=M[B];return J===void 0&&(J=new ql,M[B]=J),J.getHandSpace()};function G(B){const J=x.indexOf(B.inputSource);if(J===-1)return;const te=M[J];te!==void 0&&te.dispatchEvent({type:B.type,data:B.inputSource})}function I(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",D);for(let B=0;B<M.length;B++){const J=x[B];J!==null&&(x[B]=null,M[B].disconnect(J))}R=null,U=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,_=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",I),i.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),_=new Ur(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:nr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let J=null,te=null,z=null;d.depth&&(z=d.stencil?35056:33190,J=d.stencil?Ls:Cr,te=d.stencil?xs:Sr);const re={colorFormat:32856,depthFormat:z,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(re),i.updateRenderState({layers:[f]}),_=new Ur(f.textureWidth,f.textureHeight,{format:Tn,type:nr,depthTexture:new Ry(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const oe=e.properties.get(_);oe.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(B){for(let J=0;J<B.removed.length;J++){const te=B.removed[J],z=x.indexOf(te);z>=0&&(x[z]=null,M[z].disconnect(te))}for(let J=0;J<B.added.length;J++){const te=B.added[J];let z=x.indexOf(te);if(z===-1){for(let oe=0;oe<M.length;oe++)if(oe>=x.length){x.push(te),z=oe;break}else if(x[oe]===null){x[oe]=te,z=oe;break}if(z===-1)break}const re=M[z];re&&re.connect(te)}}const F=new N,H=new N;function j(B,J,te){F.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(te.matrixWorld);const z=F.distanceTo(H),re=J.projectionMatrix.elements,oe=te.projectionMatrix.elements,ae=re[14]/(re[10]-1),ge=re[14]/(re[10]+1),xe=(re[9]+1)/re[5],Pe=(re[9]-1)/re[5],he=(re[8]-1)/re[0],Re=(oe[8]+1)/oe[0],Ze=ae*he,at=ae*Re,Oe=z/(-he+Re),W=Oe*-he;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(W),B.translateZ(Oe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Be=ae+Oe,Ne=ge+Oe,Lt=Ze-W,wt=at+(z-W),C=xe*ge/Ne*Be,w=Pe*ge/Ne*Be;B.projectionMatrix.makePerspective(Lt,wt,C,w,Be,Ne)}function V(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;S.near=A.near=E.near=B.near,S.far=A.far=E.far=B.far,(R!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,U=S.far);const J=B.parent,te=S.cameras;V(S,J);for(let re=0;re<te.length;re++)V(te[re],J);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),B.matrix.copy(S.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const z=B.children;for(let re=0,oe=z.length;re<oe;re++)z[re].updateMatrixWorld(!0);te.length===2?j(S,E,A):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.getPlanes=function(){return v};let Z=null;function L(B,J){if(u=J.getViewerPose(c||s),g=J,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let z=!1;te.length!==S.cameras.length&&(S.cameras.length=0,z=!0);for(let re=0;re<te.length;re++){const oe=te[re];let ae=null;if(p!==null)ae=p.getViewport(oe);else{const xe=h.getViewSubImage(f,oe);ae=xe.viewport,re===0&&(e.setRenderTargetTextures(_,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(_))}let ge=y[re];ge===void 0&&(ge=new Yt,ge.layers.enable(re),ge.viewport=new ft,y[re]=ge),ge.matrix.fromArray(oe.transform.matrix),ge.projectionMatrix.fromArray(oe.projectionMatrix),ge.viewport.set(ae.x,ae.y,ae.width,ae.height),re===0&&S.matrix.copy(ge.matrix),z===!0&&S.cameras.push(ge)}}for(let te=0;te<M.length;te++){const z=x[te],re=M[te];z!==null&&re!==void 0&&re.update(z,J,c||s)}if(Z&&Z(B,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let te=null;for(const z of v)J.detectedPlanes.has(z)||(te===null&&(te=[]),te.push(z));if(te!==null)for(const z of te)v.delete(z),b.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of J.detectedPlanes)if(!v.has(z))v.add(z),b.set(z,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const re=b.get(z);z.lastChangedTime>re&&(b.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const fe=new Cd;fe.setAnimationLoop(L),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}}function Dy(a,e){function t(d,m){m.color.getRGB(d.fogColor.value,Ed(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&s(d,m)):m.isPointsMaterial?o(d,m,_,M):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Cn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Cn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const v=a.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function s(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=M*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Cn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Iy(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(M,b);const E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const v=a.createBuffer(),b=M.__size,E=M.usage;return a.bindBuffer(35345,v),a.bufferData(35345,b,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,b=M.__cache;a.bindBuffer(35345,x);for(let E=0,A=v.length;E<A;E++){const y=v[E];if(p(y,E,b)===!0){const S=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let G=0;G<R.length;G++){const I=R[G],D=d(I);typeof I=="number"?(y.__data[0]=I,a.bufferSubData(35345,S+U,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=I.elements[0],y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=I.elements[0],y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=I.elements[0]):(I.toArray(y.__data,U),U+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,S,y.__data)}}a.bindBuffer(35345,null)}function p(M,x,v){const b=M.value;if(v[x]===void 0){if(typeof b=="number")v[x]=b;else{const E=Array.isArray(b)?b:[b],A=[];for(let y=0;y<E.length;y++)A.push(E[y].clone());v[x]=A}return!0}else if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const E=Array.isArray(v[x])?v[x]:[v[x]],A=Array.isArray(b)?b:[b];for(let y=0;y<E.length;y++){const S=E[y];if(S.equals(A[y])===!1)return S.copy(A[y]),!0}}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;let E=0;for(let A=0,y=x.length;A<y;A++){const S=x[A],R={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let G=0,I=U.length;G<I;G++){const D=U[G],F=d(D);R.boundary+=F.boundary,R.storage+=F.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,A>0){E=v%b;const G=b-E;E!==0&&G-R.boundary<0&&(v+=b-E,S.__offset=v)}v+=R.storage}return E=v%b,E>0&&(v+=b-E),M.__size=v,M.__cache={},this}function d(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const M in i)a.deleteBuffer(i[M]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Ny(){const a=ko("canvas");return a.style.display="block",a}function lu(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Ny(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kr,this.useLegacyLights=!0,this.toneMapping=Ai,this.toneMappingExposure=1;const d=this;let m=!1,_=0,M=0,x=null,v=-1,b=null;const E=new ft,A=new ft;let y=null,S=e.width,R=e.height,U=1,G=null,I=null;const D=new ft(0,0,S,R),F=new ft(0,0,S,R);let H=!1;const j=new ru;let V=!1,Z=!1,L=null;const fe=new Ke,B=new N,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return x===null?U:1}let z=t;function re(T,O){for(let X=0;X<T.length;X++){const k=T[X],q=e.getContext(k,O);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",be,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),z=re(O,T),z===null)throw re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,ae,ge,xe,Pe,he,Re,Ze,at,Oe,W,Be,Ne,Lt,wt,C,w,$,ie,ee,se,_e,de,K;function we(){oe=new Xx(z),ae=new zx(z,oe,a),oe.init(ae),_e=new Ay(z,oe,ae),ge=new Ty(z,oe,ae),xe=new jx,Pe=new hy,he=new Ey(z,oe,ge,Pe,ae,_e,xe),Re=new Gx(d),Ze=new Wx(d),at=new i_(z,ae),de=new kx(z,oe,at,ae),Oe=new qx(z,at,xe,de),W=new Jx(z,Oe,at,xe),ie=new Zx(z,ae,he),C=new Bx(Pe),Be=new uy(d,Re,Ze,oe,ae,de,C),Ne=new Dy(d,Pe),Lt=new dy,wt=new vy(oe,ae),$=new Fx(d,Re,Ze,ge,W,u,s),w=new wy(d,W,ae),K=new Iy(z,xe,ae,ge),ee=new Ux(z,oe,xe,ae),se=new Yx(z,oe,xe,ae),xe.programs=Be.programs,d.capabilities=ae,d.extensions=oe,d.properties=Pe,d.renderLists=Lt,d.shadowMap=w,d.state=ge,d.info=xe}we();const ve=new Py(d,z);this.xr=ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(S,R,!1))},this.getSize=function(T){return T.set(S,R)},this.setSize=function(T,O,X=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,R=O,e.width=Math.floor(T*U),e.height=Math.floor(O*U),X===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(S*U,R*U).floor()},this.setDrawingBufferSize=function(T,O,X){S=T,R=O,U=X,e.width=Math.floor(T*X),e.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,O,X,k){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,O,X,k),ge.viewport(E.copy(D).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,O,X,k){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,O,X,k),ge.scissor(A.copy(F).multiplyScalar(U).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){ge.setScissorTest(H=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(T=!0,O=!0,X=!0){let k=0;T&&(k|=16384),O&&(k|=256),X&&(k|=1024),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",be,!1),Lt.dispose(),wt.dispose(),Pe.dispose(),Re.dispose(),Ze.dispose(),W.dispose(),de.dispose(),K.dispose(),Be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Q),ve.removeEventListener("sessionend",le),L&&(L.dispose(),L=null),me.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=xe.autoReset,O=w.enabled,X=w.autoUpdate,k=w.needsUpdate,q=w.type;we(),xe.autoReset=T,w.enabled=O,w.autoUpdate=X,w.needsUpdate=k,w.type=q}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){const O=T.target;O.removeEventListener("dispose",Ve),Ee(O)}function Ee(T){st(T),Pe.remove(T)}function st(T){const O=Pe.get(T).programs;O!==void 0&&(O.forEach(function(X){Be.releaseProgram(X)}),T.isShaderMaterial&&Be.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,k,q,pe){O===null&&(O=J);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Me=Ie(T,O,X,k,q);ge.setMaterial(k,Ce);let Se=X.index,De=1;k.wireframe===!0&&(Se=Oe.getWireframeAttribute(X),De=2);const Ge=X.drawRange,ze=X.attributes.position;let He=Ge.start*De,$e=(Ge.start+Ge.count)*De;pe!==null&&(He=Math.max(He,pe.start*De),$e=Math.min($e,(pe.start+pe.count)*De)),Se!==null?(He=Math.max(He,0),$e=Math.min($e,Se.count)):ze!=null&&(He=Math.max(He,0),$e=Math.min($e,ze.count));const Rt=$e-He;if(Rt<0||Rt===1/0)return;de.setup(q,k,Me,X,Se);let Xn,mt=ee;if(Se!==null&&(Xn=at.get(Se),mt=se,mt.setIndex(Xn)),q.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*te()),mt.setMode(1)):mt.setMode(4);else if(q.isLine){let We=k.linewidth;We===void 0&&(We=1),ge.setLineWidth(We*te()),q.isLineSegments?mt.setMode(1):q.isLineLoop?mt.setMode(2):mt.setMode(3)}else q.isPoints?mt.setMode(0):q.isSprite&&mt.setMode(4);if(q.isInstancedMesh)mt.renderInstances(He,Rt,q.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,hn=Math.min(X.instanceCount,We);mt.renderInstances(He,Rt,hn)}else mt.render(He,Rt)},this.compile=function(T,O){function X(k,q,pe){k.transparent===!0&&k.side===Si&&k.forceSinglePass===!1?(k.side=Cn,k.needsUpdate=!0,ne(k,q,pe),k.side=Li,k.needsUpdate=!0,ne(k,q,pe),k.side=Si):ne(k,q,pe)}f=wt.get(T),f.init(),g.push(f),T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(d.useLegacyLights),T.traverse(function(k){const q=k.material;if(q)if(Array.isArray(q))for(let pe=0;pe<q.length;pe++){const Ce=q[pe];X(Ce,T,k)}else X(q,T,k)}),g.pop(),f=null};let P=null;function Y(T){P&&P(T)}function Q(){me.stop()}function le(){me.start()}const me=new Cd;me.setAnimationLoop(Y),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){P=T,ve.setAnimationLoop(T),T===null?me.stop():me.start()},ve.addEventListener("sessionstart",Q),ve.addEventListener("sessionend",le),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,O,x),f=wt.get(T,g.length),f.init(),g.push(f),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(fe),Z=this.localClippingEnabled,V=C.init(this.clippingPlanes,Z),h=Lt.get(T,p.length),h.init(),p.push(h),nt(T,O,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(G,I),V===!0&&C.beginShadows();const X=f.state.shadowsArray;if(w.render(X,T,O),V===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,T),f.setupLights(d.useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let q=0,pe=k.length;q<pe;q++){const Ce=k[q];ot(h,T,Ce,Ce.viewport)}}else ot(h,T,O);x!==null&&(he.updateMultisampleRenderTarget(x),he.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(d,T,O),de.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function nt(T,O,X,k){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){k&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ce=W.update(T),Me=T.material;Me.visible&&h.push(T,Ce,Me,X,B.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==xe.render.frame&&(T.skeleton.update(),T.skeleton.frame=xe.render.frame),!T.frustumCulled||j.intersectsObject(T))){k&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ce=W.update(T),Me=T.material;if(Array.isArray(Me)){const Se=Ce.groups;for(let De=0,Ge=Se.length;De<Ge;De++){const ze=Se[De],He=Me[ze.materialIndex];He&&He.visible&&h.push(T,Ce,He,X,B.z,ze)}}else Me.visible&&h.push(T,Ce,Me,X,B.z,null)}}const pe=T.children;for(let Ce=0,Me=pe.length;Ce<Me;Ce++)nt(pe[Ce],O,X,k)}function ot(T,O,X,k){const q=T.opaque,pe=T.transmissive,Ce=T.transparent;f.setupLightsView(X),V===!0&&C.setGlobalState(d.clippingPlanes,X),pe.length>0&&Mt(q,O,X),k&&ge.viewport(E.copy(k)),q.length>0&&Fe(q,O,X),pe.length>0&&Fe(pe,O,X),Ce.length>0&&Fe(Ce,O,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Mt(T,O,X){const k=ae.isWebGL2;L===null&&(L=new Ur(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Io:nr,minFilter:Fr,samples:k&&r===!0?4:0}));const q=d.getRenderTarget();d.setRenderTarget(L),d.clear();const pe=d.toneMapping;d.toneMapping=Ai,Fe(T,O,X),d.toneMapping=pe,he.updateMultisampleRenderTarget(L),he.updateRenderTargetMipmap(L),d.setRenderTarget(q)}function Fe(T,O,X){const k=O.isScene===!0?O.overrideMaterial:null;for(let q=0,pe=T.length;q<pe;q++){const Ce=T[q],Me=Ce.object,Se=Ce.geometry,De=k===null?Ce.material:k,Ge=Ce.group;Me.layers.test(X.layers)&&ue(Me,O,X,Se,De,Ge)}}function ue(T,O,X,k,q,pe){T.onBeforeRender(d,O,X,k,q,pe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(d,O,X,k,T,pe),q.transparent===!0&&q.side===Si&&q.forceSinglePass===!1?(q.side=Cn,q.needsUpdate=!0,d.renderBufferDirect(X,O,k,q,T,pe),q.side=Li,q.needsUpdate=!0,d.renderBufferDirect(X,O,k,q,T,pe),q.side=Si):d.renderBufferDirect(X,O,k,q,T,pe),T.onAfterRender(d,O,X,k,q,pe)}function ne(T,O,X){O.isScene!==!0&&(O=J);const k=Pe.get(T),q=f.state.lights,pe=f.state.shadowsArray,Ce=q.state.version,Me=Be.getParameters(T,q.state,pe,O,X),Se=Be.getProgramCacheKey(Me);let De=k.programs;k.environment=T.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(T.isMeshStandardMaterial?Ze:Re).get(T.envMap||k.environment),De===void 0&&(T.addEventListener("dispose",Ve),De=new Map,k.programs=De);let Ge=De.get(Se);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Ce)return ye(T,Me),Ge}else Me.uniforms=Be.getUniforms(T),T.onBuild(X,Me,d),T.onBeforeCompile(Me,d),Ge=Be.acquireProgram(Me,Se),De.set(Se,Ge),k.uniforms=Me.uniforms;const ze=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=C.uniform),ye(T,Me),k.needsLights=Tt(T),k.lightsStateVersion=Ce,k.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix);const He=Ge.getUniforms(),$e=Oa.seqWithValue(He.seq,ze);return k.currentProgram=Ge,k.uniformsList=$e,Ge}function ye(T,O){const X=Pe.get(T);X.outputEncoding=O.outputEncoding,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ie(T,O,X,k,q){O.isScene!==!0&&(O=J),he.resetTextureUnits();const pe=O.fog,Ce=k.isMeshStandardMaterial?O.environment:null,Me=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:kr,Se=(k.isMeshStandardMaterial?Ze:Re).get(k.envMap||Ce),De=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!k.normalMap&&!!X.attributes.tangent,ze=!!X.morphAttributes.position,He=!!X.morphAttributes.normal,$e=!!X.morphAttributes.color,Rt=k.toneMapped?d.toneMapping:Ai,Xn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=Xn!==void 0?Xn.length:0,We=Pe.get(k),hn=f.state.lights;if(V===!0&&(Z===!0||T!==b)){const xn=T===b&&k.id===v;C.setState(k,T,xn)}let dt=!1;k.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hn.state.version||We.outputEncoding!==Me||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||We.envMap!==Se||k.fog===!0&&We.fog!==pe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==C.numPlanes||We.numIntersection!==C.numIntersection)||We.vertexAlphas!==De||We.vertexTangents!==Ge||We.morphTargets!==ze||We.morphNormals!==He||We.morphColors!==$e||We.toneMapping!==Rt||ae.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(dt=!0):(dt=!0,We.__version=k.version);let hr=We.currentProgram;dt===!0&&(hr=ne(k,O,q));let Bu=!1,Ks=!1,pl=!1;const Zt=hr.getUniforms(),fr=We.uniforms;if(ge.useProgram(hr.program)&&(Bu=!0,Ks=!0,pl=!0),k.id!==v&&(v=k.id,Ks=!0),Bu||b!==T){if(Zt.setValue(z,"projectionMatrix",T.projectionMatrix),ae.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Ks=!0,pl=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const xn=Zt.map.cameraPosition;xn!==void 0&&xn.setValue(z,B.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||q.isSkinnedMesh)&&Zt.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Zt.setOptional(z,q,"bindMatrix"),Zt.setOptional(z,q,"bindMatrixInverse");const xn=q.skeleton;xn&&(ae.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Zt.setValue(z,"boneTexture",xn.boneTexture,he),Zt.setValue(z,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ml=X.morphAttributes;if((ml.position!==void 0||ml.normal!==void 0||ml.color!==void 0&&ae.isWebGL2===!0)&&ie.update(q,X,hr),(Ks||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Zt.setValue(z,"receiveShadow",q.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(fr.envMap.value=Se,fr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Ks&&(Zt.setValue(z,"toneMappingExposure",d.toneMappingExposure),We.needsLights&&ke(fr,pl),pe&&k.fog===!0&&Ne.refreshFogUniforms(fr,pe),Ne.refreshMaterialUniforms(fr,k,U,R,L),Oa.upload(z,We.uniformsList,fr,he)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Oa.upload(z,We.uniformsList,fr,he),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Zt.setValue(z,"center",q.center),Zt.setValue(z,"modelViewMatrix",q.modelViewMatrix),Zt.setValue(z,"normalMatrix",q.normalMatrix),Zt.setValue(z,"modelMatrix",q.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const xn=k.uniformsGroups;for(let gl=0,_m=xn.length;gl<_m;gl++)if(ae.isWebGL2){const Gu=xn[gl];K.update(Gu,hr),K.bind(Gu,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function ke(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Tt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,O,X){Pe.get(T.texture).__webglTexture=O,Pe.get(T.depthTexture).__webglTexture=X;const k=Pe.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const X=Pe.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){x=T,_=O,M=X;let k=!0,q=null,pe=!1,Ce=!1;if(T){const Se=Pe.get(T);Se.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),k=!1):Se.__webglFramebuffer===void 0?he.setupRenderTarget(T):Se.__hasExternalTextures&&he.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);const Ge=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ge[O],pe=!0):ae.isWebGL2&&T.samples>0&&he.useMultisampledRTT(T)===!1?q=Pe.get(T).__webglMultisampledFramebuffer:q=Ge,E.copy(T.viewport),A.copy(T.scissor),y=T.scissorTest}else E.copy(D).multiplyScalar(U).floor(),A.copy(F).multiplyScalar(U).floor(),y=H;if(ge.bindFramebuffer(36160,q)&&ae.drawBuffers&&k&&ge.drawBuffers(T,q),ge.viewport(E),ge.scissor(A),ge.setScissorTest(y),pe){const Se=Pe.get(T.texture);z.framebufferTexture2D(36160,36064,34069+O,Se.__webglTexture,X)}else if(Ce){const Se=Pe.get(T.texture),De=O||0;z.framebufferTextureLayer(36160,36064,Se.__webglTexture,X||0,De)}v=-1},this.readRenderTargetPixels=function(T,O,X,k,q,pe,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce]),Me){ge.bindFramebuffer(36160,Me);try{const Se=T.texture,De=Se.format,Ge=Se.type;if(De!==Tn&&_e.convert(De)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ge===Io&&(oe.has("EXT_color_buffer_half_float")||ae.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ge!==nr&&_e.convert(Ge)!==z.getParameter(35738)&&!(Ge===Gi&&(ae.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-k&&X>=0&&X<=T.height-q&&z.readPixels(O,X,k,q,_e.convert(De),_e.convert(Ge),pe)}finally{const Se=x!==null?Pe.get(x).__webglFramebuffer:null;ge.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(T,O,X=0){const k=Math.pow(2,-X),q=Math.floor(O.image.width*k),pe=Math.floor(O.image.height*k);he.setTexture2D(O,0),z.copyTexSubImage2D(3553,X,0,0,T.x,T.y,q,pe),ge.unbindTexture()},this.copyTextureToTexture=function(T,O,X,k=0){const q=O.image.width,pe=O.image.height,Ce=_e.convert(X.format),Me=_e.convert(X.type);he.setTexture2D(X,0),z.pixelStorei(37440,X.flipY),z.pixelStorei(37441,X.premultiplyAlpha),z.pixelStorei(3317,X.unpackAlignment),O.isDataTexture?z.texSubImage2D(3553,k,T.x,T.y,q,pe,Ce,Me,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(3553,k,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):z.texSubImage2D(3553,k,T.x,T.y,Ce,Me,O.image),k===0&&X.generateMipmaps&&z.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X,k,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,Se=_e.convert(k.format),De=_e.convert(k.type);let Ge;if(k.isData3DTexture)he.setTexture3D(k,0),Ge=32879;else if(k.isDataArrayTexture)he.setTexture2DArray(k,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,k.flipY),z.pixelStorei(37441,k.premultiplyAlpha),z.pixelStorei(3317,k.unpackAlignment);const ze=z.getParameter(3314),He=z.getParameter(32878),$e=z.getParameter(3316),Rt=z.getParameter(3315),Xn=z.getParameter(32877),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;z.pixelStorei(3314,mt.width),z.pixelStorei(32878,mt.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Ge,q,O.x,O.y,O.z,pe,Ce,Me,Se,De,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,q,O.x,O.y,O.z,pe,Ce,Me,Se,mt.data)):z.texSubImage3D(Ge,q,O.x,O.y,O.z,pe,Ce,Me,Se,De,mt),z.pixelStorei(3314,ze),z.pixelStorei(32878,He),z.pixelStorei(3316,$e),z.pixelStorei(3315,Rt),z.pixelStorei(32877,Xn),q===0&&k.generateMipmaps&&z.generateMipmap(Ge),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?he.setTextureCube(T,0):T.isData3DTexture?he.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?he.setTexture2DArray(T,0):he.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(lu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class Oy extends lu{}Oy.prototype.isWebGL1Renderer=!0;class Id extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Fy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new N;class cu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tf=new N,nf=new ft,rf=new ft,ky=new N,sf=new Ke;class Uy extends zn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;nf.fromBufferAttribute(i.attributes.skinIndex,e),rf.fromBufferAttribute(i.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=rf.getComponent(r);if(s!==0){const o=nf.getComponent(r);sf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ky.copy(tf).applyMatrix4(sf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nd extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Od extends Ht{constructor(e=null,t=1,n=1,i,r,s,o,l,c=kt,u=kt,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new Ke,zy=new Ke;class uu{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:zy;of.multiplyMatrices(o,t[r]),of.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=gd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Od(t,e,e,Tn,Gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Nd),this.bones.push(s),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class af extends un{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lf=new Ke,cf=new Ke,ma=[],By=new Ke,io=new zn;class Gy extends zn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new af(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,By)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,lf),cf.multiplyMatrices(n,lf),io.matrixWorld=cf,io.raycast(e,ma);for(let s=0,o=ma.length;s<o;s++){const l=ma[s];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new af(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Fd extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uf=new N,hf=new N,ff=new Ke,Yl=new nu,ga=new Ws;class hu extends xt{constructor(e=new hi,t=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)uf.fromBufferAttribute(t,i-1),hf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uf.distanceTo(hf);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;ff.copy(i).invert(),Yl.copy(e.ray).applyMatrix4(ff);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,h=new N,f=new N,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),M=Math.min(g.count,s.start+s.count);for(let x=_,v=M-1;x<v;x+=p){const b=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,E),Yl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),M=Math.min(m.count,s.start+s.count);for(let x=_,v=M-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Yl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const df=new N,pf=new N;class Vy extends hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)df.fromBufferAttribute(t,i),pf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+df.distanceTo(pf);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hy extends hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kd extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mf=new Ke,wc=new nu,_a=new Ws,xa=new N;class Wy extends xt{constructor(e=new hi,t=new kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;mf.copy(i).invert(),wc.copy(e.ray).applyMatrix4(mf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=f,d=p;g<d;g++){const m=c.getX(g);xa.fromBufferAttribute(h,m),gf(xa,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=f,d=p;g<d;g++)xa.fromBufferAttribute(h,g),gf(xa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gf(a,e,t,n,i,r,s){const o=wc.distanceSqToPoint(a);if(o<t){const l=new N;wc.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class fu extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wr extends fu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ki(a,e,t){return Ud(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function va(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Ud(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Xy(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function zd(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class jo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qy extends jo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=e,o=2*t-n;break;case vh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:s=e,l=2*n-t;break;case vh:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-f*m+2*f*d-f*g,M=(1+f)*m+(-1.5-2*f)*d+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,v=p*m-p*d;for(let b=0;b!==o;++b)r[b]=_*s[u+b]+M*s[c+b]+x*s[l+b]+v*s[h+b];return r}}class Yy extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class jy extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ki(n,r,s),this.values=ki(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Ud(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ki(this.times),t=ki(this.values),n=this.getValueSize(),i=this.getInterpolation()===bl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const d=t[h+g];if(d!==t[f+g]||d!==t[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=ki(e,0,s),this.values=ki(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ki(this.times,0),t=ki(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Rs;class qs extends fi{}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=No;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends fi{}Bd.prototype.ValueTypeName="color";class Uo extends fi{}Uo.prototype.ValueTypeName="number";class Ky extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)cr.slerpFlat(r,0,s,c-o,s,c,l);return r}}class zr extends fi{InterpolantFactoryMethodLinear(e){return new Ky(this.times,this.values,this.getValueSize(),e)}}zr.prototype.ValueTypeName="quaternion";zr.prototype.DefaultInterpolation=Rs;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends fi{}Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=No;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends fi{}zo.prototype.ValueTypeName="vector";class $y{constructor(e,t=-1,n,i=fg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Jy(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(fi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Xy(l);l=_f(l,1,u),c=_f(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Uo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,d){if(p.length!==0){const m=[],_=[];zd(p,m,_,g),m.length!==0&&d.push(new h(f,m,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let d=0;d<f[g].morphTargets.length;d++)p[f[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new Uo(".morphTargetInfluence["+d+"]",m,_))}l=p.length*s}else{const p=".bones["+t[h].name+"]";n(zo,p+".position",f,"pos",i),n(zr,p+".quaternion",f,"rot",i),n(zo,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zy(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Uo;case"vector":case"vector2":case"vector3":case"vector4":return zo;case"color":return Bd;case"quaternion":return zr;case"bool":case"boolean":return qs;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Jy(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zy(a.type);if(a.times===void 0){const t=[],n=[];zd(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ds={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Qy{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const eM=new Qy;class js{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const xi={};class tM extends Error{constructor(e,t){super(e),this.response=t}}class Gd extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:i});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{d+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let E=0,A=u.length;E<A;E++){const y=u[E];y.onProgress&&y.onProgress(b)}_.enqueue(v),M()}})}}});return new Response(m)}else throw new tM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ds.add(e,c);const u=xi[e];delete xi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vd extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ds.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=ko("img");function l(){u(),Ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class nM extends js{constructor(e){super(e)}load(e,t,n,i){const r=new iu,s=new Vd(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Hd extends js{constructor(e){super(e)}load(e,t,n,i){const r=new Ht,s=new Vd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class cl extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jl=new Ke,xf=new N,vf=new N;class du{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iM extends du{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rM extends cl{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new iM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yf=new Ke,ro=new N,Kl=new N;class sM extends du{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),Kl.copy(n.position),Kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kl),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}}class pu extends cl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oM extends du{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lM extends cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cM extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ds.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ds.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const mu="\\[\\]\\.:\\/",uM=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",hM="[^"+mu.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",gu),dM=/(WCOD+)?/.source.replace("WCOD",hM),pM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),mM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),gM=new RegExp("^"+fM+dM+pM+mM+"$"),_M=["material","materials","bones","map"];class xM{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(e){const t=gM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=xM;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);class vM extends ir{constructor(e,t,n){const i={irradianceProbe:{value:e},radianceProbe:{value:t},iridescenceLookUp:{value:n},color:{value:new Xe(1,1,1)},boost:{value:1}};super({uniforms:i,vertexShader:`
          varying vec3 vWorldPosition;
          varying vec3 vWorldNormal;
          
          void main() {
              vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
              // normalMatrix is view space... we need world space which is okay here since we're using uniform scaling only
              vec4 viewPos = modelViewMatrix * vec4(position,1.0);
              vWorldNormal = mat3(modelMatrix) * normalize(normal);
              gl_Position = projectionMatrix * viewPos;
          }`,fragmentShader:`
          varying vec3 vWorldPosition;
          varying vec3 vWorldNormal;
          
          uniform vec3 color;
          uniform float boost;
          uniform samplerCube radianceProbe;
          uniform samplerCube irradianceProbe;
          uniform sampler2D iridescenceLookUp;
          
          void main() {
          
              vec3 viewWorldDir = normalize(vWorldPosition - cameraPosition);
          
              vec3 normal = normalize(vWorldNormal); //getNormal(normalSample.xy);
              vec3 viewNormal = mat3(viewMatrix) * normal;
          
              vec3 albedo = color;
              vec3 diffuseLight = vec3(0.0);
              vec3 specularLight = vec3(0.0);
          
              vec3 reflectedView = reflect(viewWorldDir, normal);
              float NdotV = max(-dot(viewWorldDir, normal), 0.0);
              float fresnelFactor = pow(1.0 - NdotV, 5.0);
          
              // * .99 to remove the glossy bit
              vec3 airy = texture2D(iridescenceLookUp, vec2(NdotV * .99, 0.0)).xyz;
              airy *= airy;
          
              vec4 reflectionSample = textureCube(radianceProbe, reflectedView);
          
              specularLight = reflectionSample.xyz * reflectionSample.xyz * airy * boost;
          
              vec4 diffuseSample = textureCube(irradianceProbe, normal);
              diffuseLight = diffuseSample.xyz * diffuseSample.xyz;
          
              vec3 final = albedo * diffuseLight + specularLight;
          
              gl_FragColor = vec4(sqrt(final), 1.0);
          }`}),this.extensions.derivatives=!0}get radianceProbe(){return this.uniforms.radianceProbe.value}set radianceProbe(e){this.uniforms.radianceProbe.value=e}get irradianceProbe(){return this.uniforms.irradianceProbe.value}set irradianceProbe(e){this.uniforms.irradianceProbe.value=e}get iridescenceLookUp(){return this.uniforms.iridescenceLookUp.value}set iridescenceLookUp(e){this.uniforms.iridescenceLookUp.value=e}get color(){return this.uniforms.color.value}set color(e){this.uniforms.color.value=e}get boost(){return this.uniforms.boost.value}set boost(e){this.uniforms.boost.value=e}}class yM extends Od{constructor(e=380,t=2,n=3,i=64){const r=new Uint8Array(i*4);super(r,i,1,Tn,nr,eu,tr,tr,sn,$m),this._filmThickness=e,this._refractiveIndexFilm=t,this._refractiveIndexBase=n,this._size=i,this._data=r,this._updateData(),this.generateMipmaps=!0,this.needsUpdate=!0}get filmThickness(){return this._filmThickness}set filmThickness(e){this._filmThickness=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}get refractiveIndexFilm(){return this._refractiveIndexFilm}set refractiveIndexFilm(e){this._refractiveIndexFilm=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}get refractiveIndexBase(){return this._refractiveIndexBase}set refractiveIndexBase(e){this._refractiveIndexBase=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}updateSettings(e,t,n){this._filmThickness=e||380,this._refractiveIndexFilm=t||2,this._refractiveIndexBase=n||3,this._updateData()}_fresnelRefl(e,t,n,i,r,s){var o=1-n*n,l=e/t;if(l*l*o>1){r.x=1,r.y=1;var c=l*l;s.x=2*Math.atan(-c*Math.sqrt(o-1/c)/n),s.y=2*Math.atan(-Math.sqrt(o-1/c)/n)}else{var u=(t*n-e*i)/(t*n+e*i),h=(e*n-t*i)/(e*n+t*i);s.x=u<0?Math.PI:0,s.y=h<0?Math.PI:0,r.x=u*u,r.y=h*h}}_updateData(){var e=this._filmThickness,t=this._refractiveIndexFilm,n=this._refractiveIndexBase,i=this._size;function r(Oe){var W=(Oe-442)*(Oe<442?.0624:.0374),Be=(Oe-599.8)*(Oe<599.8?.0264:.0323),Ne=(Oe-501.1)*(Oe<501.1?.049:.0382);return .362*Math.exp(-.5*W*W)+1.056*Math.exp(-.5*Be*Be)-.065*Math.exp(-.5*Ne*Ne)}function s(Oe){var W=(Oe-568.8)*(Oe<568.8?.0213:.0247),Be=(Oe-530.9)*(Oe<530.9?.0613:.0322);return .821*Math.exp(-.5*W*W)+.286*Math.exp(-.5*Be*Be)}function o(Oe){var W=(Oe-437)*(Oe<437?.0845:.0278),Be=(Oe-459)*(Oe<459?.0385:.0725);return 1.217*Math.exp(-.5*W*W)+.681*Math.exp(-.5*Be*Be)}for(var l=this._data,c=new Ue,u=new Ue,h=new Ue,f=new Ue,p=new Ue,g=new Ue,d=new Ue,m=new Ue,_=new Ue,M=new Ue,x=new Ue,v=new Ue,b=1/(t*t),E=t*t/(n*n),A=64,y=780-380,S=0;S<i;++S){var R=S/i,U=Math.sqrt(1-b*(1-R*R)),G=Math.sqrt(1-E*(1-U*U)),I=2*t*e*U,D=2*Math.PI*I;this._fresnelRefl(1,t,R,U,f,c),p.x=1-f.x,p.y=1-f.y,u.x=Math.PI-c.x,u.y=Math.PI-c.y,this._fresnelRefl(t,n,U,G,g,h),d.x=Math.sqrt(g.x*f.x),d.y=Math.sqrt(g.y*f.y),m.x=Math.sqrt(p.x*p.x),m.y=Math.sqrt(p.y*p.y),_.x=p.x*p.x*g.x/(1-g.x*f.x),_.y=p.y*p.y*g.y/(1-g.y*f.y),M.x=d.x*d.x,M.y=d.y*d.y,x.x=f.x+_.x,x.y=f.y+_.y,v.x=_.x-m.x,v.y=_.y-m.y;for(var F=0,H=0,j=0,V=0,Z=0,L=0,fe=0;fe<A;++fe){var B=380+fe/(A-1)*y,J=D/B,te=Math.cos(J+h.x+u.x),z=Math.cos(J+h.y+u.y),re=x.x+2*(d.x*te-M.x)/(1-2*d.x*te+M.x)*v.x,oe=x.y+2*(d.y*z-M.y)/(1-2*d.y*z+M.y)*v.y,ae=.5*(re+oe),ge=r(B),xe=s(B),Pe=o(B);V+=ge,Z+=xe,L+=Pe,F+=ge*ae,H+=xe*ae,j+=Pe*ae}F/=V,H/=Z,j/=L;var he=3.2406*F-1.5372*H-.4986*j,Re=-.9689*F+1.8758*H+.0415*j,Ze=.0557*F-.204*H+1.057*j;he=Na.clamp(he,0,1),Re=Na.clamp(Re,0,1),Ze=Na.clamp(Ze,0,1),he=Math.sqrt(he),Re=Math.sqrt(Re),Ze=Math.sqrt(Ze);var at=S<<2;l[at]=Math.floor(he*255),l[at+1]=Math.floor(Re*255),l[at+2]=Math.floor(Ze*255),l[at+3]=255}this.needsUpdate=!0}}function Mf(a,e){if(e===dg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===vc||e===dd){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===vc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class MM extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new EM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new kM(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Tc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wd){try{s[tt.KHR_BINARY_GLTF]=new UM(e)}catch(h){i&&i(h);return}r=JSON.parse(s[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ZM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:s[h]=new wM;break;case tt.KHR_DRACO_MESH_COMPRESSION:s[h]=new zM(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:s[h]=new BM;break;case tt.KHR_MESH_QUANTIZATION:s[h]=new GM;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function bM(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SM{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new aM(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pu(u),c.distance=h;break;case"spot":c=new rM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class wM{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return wr}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(i)}}class TM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,it)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Xe(o[0],o[1],o[2]),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class DM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Xe(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,it)),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class NM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FM{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class kM{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const d=new Ke,m=new N,_=new cr,M=new N(1,1,1),x=new Gy(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,d.compose(m,_,M));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);xt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Wd="glTF",so=12,bf={JSON:1313821514,BIN:5130562};class UM{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-so,r=new DataView(e,so);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===bf.JSON){const c=new Uint8Array(e,so+s,o);this.content=n.decode(c)}else if(l===bf.BIN){const c=so+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=Ec[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=Ec[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],p=ys[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}h(f)},o,c)})})}}class BM{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GM{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Xd extends jo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,d=g-c,m=-2*p+3*f,_=p-f,M=1-m,x=_-f+h;for(let v=0;v!==o;v++){const b=s[d+v+o],E=s[d+v+l]*u,A=s[g+v+o],y=s[g+v]*u;r[v]=M*b+x*E+m*A+_*y}return r}}const VM=new cr;class HM extends Xd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return VM.fromArray(r).normalize().toArray(r),r}}const On={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:kt,9729:sn,9984:xc,9985:hd,9986:Ia,9987:Fr},wf={33071:Un,33648:qa,10497:tr},$l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WM={CUBICSPLINE:void 0,LINEAR:Rs,STEP:No},Zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new fu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),a.DefaultMaterial}function oo(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qM(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function YM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jM(a){const e=a.extensions&&a.extensions[tt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Tf(e.attributes):t=a.indices+":"+Tf(a.attributes)+":"+a.mode,t}function Tf(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ac(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $M=new Ke;class ZM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Hd(this.options.manager):this.textureLoader=new cM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};oo(r,o,i),Bi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Tc.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=$l[i.type],o=ys[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new un(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=$l[i.type],c=ys[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let d,m;if(p&&p!==h){const _=Math.floor(f/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(M);x||(d=new c(o,_*p,i.count*p/u),x=new Fy(d,p/u),t.cache.add(M,x)),m=new cu(x,l,f%p/u,g)}else o===null?d=new c(i.count*l):d=new c(o,f,i.count*l),m=new un(d,l,g);if(i.sparse!==void 0){const _=$l.SCALAR,M=ys[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new M(s[1],x,i.sparse.count*_),E=new c(s[2],v,i.sparse.count*l);o!==null&&(m=new un(m.array.slice(),m.itemSize,m.normalized));for(let A=0,y=b.length;A<y;A++){const S=b[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"";const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=Sf[f.magFilter]||sn,u.minFilter=Sf[f.minFilter]||Fr,u.wrapS=wf[f.wrapS]||tr,u.wrapT=wf[f.wrapT]||tr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Ht(d);m.needsUpdate=!0,f(m)}),t.load(Tc.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||KM(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new kd,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fd,ai.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return fu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=i[tt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,it)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Si);const u=r.alphaMode||Zl.OPAQUE;if(u===Zl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Zl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==wr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==wr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==wr&&(o.emissive=new Xe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==wr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,it)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),Bi(h,r),t.associations.set(h,{materials:e}),r.extensions&&oo(i,h,r),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ef(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=jM(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ef(new hi,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?XM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=s[p];let _;const M=c[p];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new Uy(d,M):new zn(d,M),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?_.geometry=Mf(_.geometry,dd):m.mode===On.TRIANGLE_FAN&&(_.geometry=Mf(_.geometry,vc));else if(m.mode===On.LINES)_=new Vy(d,M);else if(m.mode===On.LINE_STRIP)_=new hu(d,M);else if(m.mode===On.LINE_LOOP)_=new Hy(d,M);else if(m.mode===On.POINTS)_=new Wy(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&YM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Bi(_,r),m.extensions&&oo(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new Hi;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Na.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ou(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,d=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",d)),s.push(this.getDependency("accessor",m)),o.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],d=[];for(let _=0,M=u.length;_<M;_++){const x=u[_],v=h[_],b=f[_],E=p[_],A=g[_];if(x===void 0)continue;x.updateMatrix();let y;switch(Ui[A.path]){case Ui.weights:y=Uo;break;case Ui.rotation:y=zr;break;case Ui.position:case Ui.scale:default:y=zo;break}const S=x.name?x.name:x.uuid,R=E.interpolation!==void 0?WM[E.interpolation]:Rs,U=[];Ui[A.path]===Ui.weights?x.traverse(function(I){I.morphTargetInfluences&&U.push(I.name?I.name:I.uuid)}):U.push(S);let G=b.array;if(b.normalized){const I=Ac(G.constructor),D=new Float32Array(G.length);for(let F=0,H=G.length;F<H;F++)D[F]=G[F]*I;G=D}for(let I=0,D=U.length;I<D;I++){const F=new y(U[I]+"."+Ui[A.path],v.array,G,R);E.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(j){const V=this instanceof zr?HM:Xd;return new V(this.times,this.values,this.getValueSize()/3,j)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(F)}}const m=n.name?n.name:"animation_"+e;return new $y(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){!p.isSkinnedMesh||p.bind(f,$M)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Nd:c.length>1?u=new Hi:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),Bi(u,r),r.extensions&&oo(n,u,r),r.matrix!==void 0){const h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Hi;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&oo(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof ai||f instanceof Ht)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(r),r})}}function JM(a,e,t){const n=e.attributes,i=new Hs;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=Ac(ys[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const d=Ac(ys[f.componentType]);l.multiplyScalar(d)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Ws;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Ef(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Ec[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return Bi(a,e),JM(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qM(a,e.targets,t):a})}function vi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function qd(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},_u,Kt,At,Bn=1e8,ut=1/Bn,Cc=Math.PI*2,QM=Cc/4,eb=0,Yd=Math.sqrt,tb=Math.cos,nb=Math.sin,Ut=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},xu=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},mn=function(e){return e!==!1},jd=function(){return typeof window<"u"},ya=function(e){return yt(e)||Ut(e)},Kd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,Lc=/(?:-?\.?\d|\.)+/gi,$d=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zd=/[+-]=-?[.\d]+/,Jd=/[^,'"\[\]\s]+/gi,ib=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Fn,Rc,vu,Rn={},Ya={},Qd,ep=function(e){return(Ya=Br(e,Rn))&&Pn},yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ja=function(e,t){return!t&&console.warn(e)},tp=function(e,t){return e&&(Rn[e]=t)&&Ya&&(Ya[e]=t)||Rn},Bo=function(){return 0},rb={suppressEvents:!0,isStart:!0,kill:!1},Fa={suppressEvents:!0,kill:!1},sb={suppressEvents:!0},Mu={},Zi=[],Pc={},np,Sn={},Ql={},Af=30,ka=[],bu="",Su=function(e){var t=e[0],n,i;if(ui(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ka.length;i--&&!ka[i].targetTest(t););n=ka[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wp(e[i],n)))||e.splice(i,1);return e},Lr=function(e){return e._gsap||Su(Gn(e))[0]._gsap},ip=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():xu(n)&&e.getAttribute&&e.getAttribute(t)||n},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ob=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=Zi.length,t=Zi.slice(0),n,i;for(Pc={},Zi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rp=function(e,t,n,i){Zi.length&&!Kt&&Ka(),e.render(t,n,i||Kt&&t<0&&(e._initted||e._startAt)),Zi.length&&!Kt&&Ka()},sp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jd).length<2?t:Ut(e)?e.trim():e},op=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ab=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Br=function(e,t){for(var n in t)e[n]=t[n];return e},Cf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},$a=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Mo=function(e){var t=e.parent||gt,n=e.keyframes?ab($t(e.keyframes)):Wn;if(mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},lb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ap=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},ul=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dc=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(Fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ub=function a(e){return!e||e._ts&&a(e.parent)},Lf=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Za=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hl=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hl(e),n._dirty||Rr(n,e)),e},lp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Za(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),Rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},oi=function(e,t,n,i){return t.parent&&rr(t),t._start=Gt((Ri(n)?n:n||e!==gt?In(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ap(e,t,"_first","_last",e._sort?"_start":0),Ic(t)||(e._recent=t),i||lp(e,t),e._ts<0&&fl(e,e._tTime),e},cp=function(e,t){return(Rn.ScrollTrigger||yu("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},up=function(e,t,n,i,r){if(Tu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&np!==En.frame)return Zi.push(e),e._lazy=[r,i],1},hb=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fb=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&hb(e)&&!(!e._initted&&Ic(e))||(e._ts<0||e._dp._ts<0)&&!Ic(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ko(0,e._tDur,t),u=Ns(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ns(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Kt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&up(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Dc(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&rr(e,1),!n&&!Kt&&(Vn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},db=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Os=function(e,t,n,i){var r=e._repeat,s=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Gt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&fl(e,e._tTime=e._tDur*o),e.parent&&hl(e),n||Rr(e.parent,e),e},Rf=function(e){return e instanceof pn?Rr(e):Os(e,e._dur)},pb={_start:0,endTime:Bo,totalDuration:Bo},In=function a(e,t,n){var i=e.labels,r=e._recent||pb,s=e.duration()>=Bn?r.endTime(!1):e._dur,o,l,c;return Ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},bo=function(e,t,n){var i=Ri(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;s.immediateRender=mn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Pt(t[0],s,t[r+1])},ur=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!Ut(e)||!(t=ib.exec(e))?"":t[1]},mb=function(e,t,n){return ur(n,function(i){return Ko(e,t,i)})},Nc=[].slice,hp=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==Fn},gb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ut(i)&&!t||hp(i,1)?(r=n).push.apply(r,Gn(i)):n.push(i)})||n},Gn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Ut(e)&&!n&&(Rc||!Fs())?Nc.call((t||vu).querySelectorAll(e),0):$t(e)?gb(e,n):hp(e)?Nc.call(e,0):e?[e]:[]},Oc=function(e){return e=Gn(e)[0]||ja("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?ja("Invalid scope")||vu.createElement("div"):e)}},fp=function(e){return e.sort(function(){return .5-Math.random()})},dp=function(e){if(yt(e))return e;var t=ui(e)?e:{each:e},n=Pr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Ut(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=s[d],_,M,x,v,b,E,A,y,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Bn])[1],!S){for(A=-Bn;A<(A=g[S++].getBoundingClientRect().left)&&S<d;);S--}for(m=s[d]=[],_=l?Math.min(S,d)*u-.5:i%S,M=S===Bn?0:l?d*h/S-.5:i/S|0,A=0,y=Bn,E=0;E<d;E++)x=E%S-_,v=M-(E/S|0),m[E]=b=c?Math.abs(c==="y"?v:x):Yd(x*x+v*v),b>A&&(A=b),b<y&&(y=b);i==="random"&&fp(m),m.max=A-y,m.min=y,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(S>d?d-1:c?c==="y"?d/S:S:Math.max(S,d/S))||0)*(i==="edges"?-1:1),m.b=d<0?r-d:r,m.u=jt(t.amount||t.each)||0,n=n&&d<0?Mp(n):n}return d=(m[f]-m.min)/m.max||0,Gt(m.b+(n?n(d):d)*m.v)+m.u}},Fc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:jt(n))}},pp=function(e,t){var n=$t(e),i,r;return!n&&ui(e)&&(i=n=e.radius||Bn,e.values?(e=Gn(e.values),(r=!Ri(e[0]))&&(i*=i)):e=Fc(e.increment)),ur(t,n?yt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Bn,u=0,h=e.length,f,p;h--;)r?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Ri(s)?u:u+jt(s)}:Fc(e))},mp=function(e,t,n,i){return ur($t(e)?!t:n===!0?!!(n=0):!i,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},xb=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},vb=function(e,t,n){return _p(e,t,0,1,n)},gp=function(e,t,n){return ur(n,function(i){return e[~~t(i)]})},yb=function a(e,t,n){var i=t-e;return $t(e)?gp(e,a(0,e.length),t):ur(n,function(r){return(i+(r-e)%i)%i+e})},Mb=function a(e,t,n){var i=t-e,r=i*2;return $t(e)?gp(e,a(0,e.length-1),t):ur(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Go=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Jd:Lc),n+=e.substr(t,i-t)+mp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},_p=function(e,t,n,i,r){var s=t-e,o=i-n;return ur(r,function(l){return n+((l-e)/s*o||0)})},bb=function a(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var s=Ut(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Br($t(e)?[]:{},e));if(!u){for(l in t)wu.call(o,e,l,"get",t[l]);r=function(g){return Cu(g,o)||(s?e.p:e)}}}return ur(n,r)},Pf=function(e,t,n){var i=e.labels,r=Bn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Vn=function(e,t,n){var i=e.vars,r=i[t],s=At,o=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zi.length&&Ka(),o&&(At=o),u=l?r.apply(c,l):r.call(c),At=s,u},po=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Vn(e,"onInterrupt"),e},ps,Sb=function(e){e=!e.name&&e.default||e;var t=e.name,n=yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Bo,render:Cu,add:wu,kill:zb,modifier:Ub,rawVars:0},s={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(Fs(),e!==i){if(Sn[t])return;Wn(i,Wn($a(e,r),s)),Br(i.prototype,Br(r,$a(e,s))),Sn[i.prop=t]=i,e.targetTest&&(ka.push(i),Mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tp(t,i),e.register&&e.register(Pn,i,_n)},lt=255,mo={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},ec=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},xp=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&lt,e&lt]:0:mo.black,r,s,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),mo[e])i=mo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,r,s),i[1]=ec(l,r,s),i[2]=ec(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match($d),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lc)||mo.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/lt,s=i[1]/lt,o=i[2]/lt,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(s-o)/p+(s<o?6:0):h===s?(o-r)/p+2:(r-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},vp=function(e){var t=[],n=[],i=-1;return e.split(Ji).forEach(function(r){var s=r.match(ds)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Df=function(e,t,n){var i="",r=(e+i).match(Ji),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=xp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=vp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ji,"1").split(ds),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ji),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Ji=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in mo)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),wb=/hsl[a]?\(/,yp=function(e){var t=e.join(" "),n;if(Ji.lastIndex=0,Ji.test(t))return n=wb.test(t),e[1]=Df(e[1],n),e[0]=Df(e[0],n,vp(e[1])),!0},Vo,En=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,p,g=function d(m){var _=a()-i,M=m===!0,x,v,b,E;if(_>e&&(n+=_-t),i+=_,b=i-n,x=b-s,(x>0||M)&&(E=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,s+=x+(x>=r?4:r-x),v=1),M||(l=c(d)),v)for(p=0;p<o.length;p++)o[p](b,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qd&&(!Rc&&jd()&&(Fn=Rc=window,vu=Fn.document||{},Rn.gsap=Pn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(Pn.version),ep(Ya||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),u=Fn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Vo=1,g(2))},sleep:function(){(u?Fn.cancelAnimationFrame:clearTimeout)(l),Vo=0,c=Bo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,M){var x=_?function(v,b,E,A){m(v,b,E,A),h.remove(x)}:m;return h.remove(m),o[M?"unshift":"push"](x),Fs(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h}(),Fs=function(){return!Vo&&En.wake()},Qe={},Tb=/^[\d.\-M][\d.\-,\s]/,Eb=/["']/g,Ab=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Eb,"").trim():+c,i=l.substr(o+1).trim();return t},Cb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Lb=function(e){var t=(e+"").split("("),n=Qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ab(t[1])]:Cb(e).split(",").map(sp)):Qe._CE&&Tb.test(e)?Qe._CE("",e):n},Mp=function(e){return function(t){return 1-e(1-t)}},bp=function a(e,t){for(var n=e._first,i;n;)n instanceof pn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Pr=function(e,t){return e&&(yt(e)?e:Qe[e]||Lb(e))||t},Xr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return gn(e,function(o){Qe[o]=Rn[o]=r,Qe[s=o.toLowerCase()]=n;for(var l in r)Qe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[o+"."+l]=r[l]}),r},Sp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Cc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*nb((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Sp(o);return r=Cc/r,l.config=function(c,u){return a(e,c,u)},l},nc=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Sp(n);return i.config=function(r){return a(e,r)},i};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Xr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;Xr("Elastic",tc("in"),tc("out"),tc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Xr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Xr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Xr("Circ",function(a){return-(Yd(1-a*a)-1)});Xr("Sine",function(a){return a===1?1:-tb(a*QM)+1});Xr("Back",nc("in"),nc("out"),nc());Qe.SteppedEase=Qe.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-ut;return function(o){return((i*Ko(0,s,o)|0)+r)*n}}};Is.ease=Qe["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return bu+=a+","+a+"Params,"});var wp=function(e,t){this.id=eb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ip,this.set=t?t.getSetter:Au},ks=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Os(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Vo||En.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(fl(this,n),!r._dp||r.parent||lp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ns(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(Ko(-this._delay,this._tDur,i),!0),hl(this),cb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Za(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sb);var i=Kt;return Kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(In(this,n),mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ut)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=yt(n)?n:op,o=function(){var c=i.then;i.then=null,yt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){po(this)},a}();Wn(ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var pn=function(a){qd(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=mn(n.sortChildren),gt&&oi(n.parent||gt,vi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cp(vi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return bo(0,arguments,this),this},t.from=function(i,r,s){return bo(1,arguments,this),this},t.fromTo=function(i,r,s,o){return bo(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Mo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pt(i,r,In(this,s),1),this},t.call=function(i,r,s){return oi(this,Pt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Pt(i,s,In(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,Mo(s).immediateRender=mn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,Mo(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,_,M,x,v,b,E,A;if(this!==gt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,x=this._ts,_=!x,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=Gt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),b=Ns(this._tTime,m),!o&&this._tTime&&b!==d&&(b=d),E&&d&1&&(f=c-f,A=1),d!==b&&!this._lock){var y=E&&b&1,S=y===(E&&d&1);if(d<b&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(A?0:Gt(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;bp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=db(this,Gt(o),Gt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&(Vn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,s),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-ut);break}}p=g}else{p=this._last;for(var R=i<0?i:f;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,r,s||Kt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=R?-ut:ut);break}}p=g}}if(M&&!r&&(this.pause(),M.render(f>=o?0:-ut)._zTime=f>=o?1:-1,this._ts))return this._start=v,hl(this),this.render(i,r,s);this._onUpdate&&!r&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ri(r)||(r=In(this,r,i)),!(i instanceof ks)){if($t(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Ut(i))return this.addLabel(i,r);if(yt(i))i=Pt.delayedCall(0,i);else return this}return this!==i?oi(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Bn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Ut(i)?this.removeLabel(i):yt(i)?this.killTweensOf(i):(ul(this,i),i===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=In(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Pt.delayedCall(0,r||Bo,s);return o.data="isPause",this._hasPause=1,oi(this,o,In(this,i))},t.removePause=function(i){var r=this._first;for(i=In(this,i);r;)r._start===i&&r.data==="isPause"&&rr(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Wi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Gn(i),l=this._first,c=Ri(r),u;l;)l instanceof Pt?ob(l._targets,o)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=In(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Pt.to(s,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||ut,onStart:function(){if(s.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&Os(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Wn({startAt:{time:In(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Pf(this,In(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Pf(this,In(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Rr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Bn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,oi(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Os(s,s===gt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(gt._ts&&(rp(gt,Za(i,gt)),np=En.frame),En.frame>=Af){Af+=Ln.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&Ln.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e}(ks);Wn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Rb=function(e,t,n,i,r,s,o){var l=new _n(this._pt,e,t,0,1,Rp,null,r),c=0,u=0,h,f,p,g,d,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Go(i)),s&&(M=[n,i],s(M,e,t),n=M[0],i=M[1]),f=n.match(Jl)||[];h=Jl.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zd.test(i)||_)&&(l.e=0),this._pt=l,l},wu=function(e,t,n,i,r,s,o,l,c,u){yt(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:yt(h)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=yt(h)?c?Ob:Cp:Eu,g;if(Ut(i)&&(~i.indexOf("random(")&&(i=Go(i)),i.charAt(1)==="="&&(g=Ms(f,i)+(jt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||kc)return!isNaN(f*i)&&i!==""?(g=new _n(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?kb:Lp,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&yu(t,i),Rb.call(this,e,t,f,i,p,l||Ln.stringFilter,c))},Pb=function(e,t,n,i,r){if(yt(e)&&(e=So(e,r,t,n,i)),!ui(e)||e.style&&e.nodeType||$t(e)||Kd(e))return Ut(e)?So(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=So(e[o],r,t,n,i);return s},Tp=function(e,t,n,i,r,s){var o,l,c,u;if(Sn[e]&&(o=new Sn[e]).init(r,o.rawVars?t[e]:Pb(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new _n(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ps))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Wi,kc,Tu=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,M=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:M,b=e._overwrite==="auto"&&!_u,E=e.timeline,A,y,S,R,U,G,I,D,F,H,j,V,Z;if(E&&(!g||!r)&&(r="none"),e._ease=Pr(r,Is.ease),e._yEase=p?Mp(Pr(p===!0?r:p,Is.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(D=M[0]?Lr(M[0]).harness:0,V=D&&i[D.prop],A=$a(i,Mu),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&m?Fa:rb),_._lazy=0),s){if(rr(e._startAt=Pt.set(M,Wn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&mn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!o&&!d)&&e._startAt.revert(Fa),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(o=!1),S=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&mn(l),immediateRender:o,stagger:0,parent:x},A),V&&(S[D.prop]=V),rr(e._startAt=Pt.set(M,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(Fa):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&mn(l)||l&&!m,y=0;y<M.length;y++){if(U=M[y],I=U._gsap||Su(M)[y]._gsap,e._ptLookup[y]=H={},Pc[I.id]&&Zi.length&&Ka(),j=v===M?y:v.indexOf(U),D&&(F=new D).init(U,V||A,e,j,v)!==!1&&(e._pt=R=new _n(e._pt,U,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(L){H[L]=R}),F.priority&&(G=1)),!D||V)for(S in A)Sn[S]&&(F=Tp(S,A,e,j,U,v))?F.priority&&(G=1):H[S]=R=wu.call(e,U,S,"get",A[S],j,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(U,e._op[y]),b&&e._pt&&(Wi=e,gt.killTweensOf(U,H,e.globalTime(t)),Z=!e.parent,Wi=0),e._pt&&l&&(Pc[I.id]=1)}G&&Pp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,g&&t<=0&&E.render(Bn,!0,!0)},Db=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return kc=1,e.vars[t]="+=0",Tu(e,o),kc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=St(n)+jt(u.e)),u.b&&(u.b=c.s+jt(u.b))},Ib=function(e,t){var n=e[0]?Lr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Br({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Nb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if($t(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},So=function(e,t,n,i,r){return yt(e)?e.call(t,n,i,r):Ut(e)&&~e.indexOf("random(")?Go(e):e},Ep=bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ap={};gn(Ep+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ap[a]=1});var Pt=function(a){qd(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:Mo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||gt,x=($t(n)||Kd(n)?Ri(n[0]):"length"in i)?[n]:Gn(n),v,b,E,A,y,S,R,U;if(o._targets=x.length?Su(x):ja("GSAP target "+n+" not found. https://greensock.com",!Ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||ya(c)||ya(u)){if(i=o.vars,v=o.timeline=new pn({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=vi(o),v._start=0,f||ya(c)||ya(u)){if(A=x.length,R=f&&dp(f),ui(f))for(y in f)~Ep.indexOf(y)&&(U||(U={}),U[y]=f[y]);for(b=0;b<A;b++)E=$a(i,Ap),E.stagger=0,_&&(E.yoyoEase=_),U&&Br(E,U),S=x[b],E.duration=+So(c,vi(o),b,S,x),E.delay=(+So(u,vi(o),b,S,x)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(S,E,R?R(b,S,x):0),v._ease=Qe.none;v.duration()?c=u=0:o.timeline=0}else if(g){Mo(Wn(v.vars.defaults,{ease:"none"})),v._ease=Pr(g.ease||i.ease||"none");var G=0,I,D,F;if($t(g))g.forEach(function(H){return v.to(x,H,">")}),v.duration();else{E={};for(y in g)y==="ease"||y==="easeEach"||Nb(y,g[y],E,g.easeEach);for(y in E)for(I=E[y].sort(function(H,j){return H.t-j.t}),G=0,b=0;b<I.length;b++)D=I[b],F={ease:D.e,duration:(D.t-(b?I[b-1].t:0))/100*c},F[y]=D.v,v.to(x,F,G),G+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!_u&&(Wi=vi(o),gt.killTweensOf(x),Wi=0),oi(M,vi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Gt(M._time)&&mn(h)&&ub(vi(o))&&M.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-u)||0)),m&&cp(vi(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ut&&!u?l:i<ut?0:i,f,p,g,d,m,_,M,x,v;if(!c)fb(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,s);if(f=Gt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),m=Ns(this._tTime,d),f===o&&!s&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&bp(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Gt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(up(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!r&&(Vn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!f&&_?-ut:x._dur*x._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Dc(this,i,r,s),Vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!r&&!(u&&!o)&&(h||o||_)&&(Vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Vo||En.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tu(this,l),c=this._ease(l/this._dur),Db(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(fl(this,0),this.parent||ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?po(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Wi&&Wi.vars.overwrite!==!0)._first||po(this),this.parent&&s!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Gn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!r||r==="all")&&lb(o,l))return r==="all"&&(this._pt=0),po(this);for(h=this._op=this._op||[],r!=="all"&&(Ut(r)&&(d={},gn(r,function(M){return d[M]=1}),r=d),r=Ib(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],r==="all"?(h[_]=r,g=f,p={}):(p=h[_]=h[_]||{},g=r);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&ul(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&po(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return bo(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return bo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return gt.killTweensOf(i,r,s)},e}(ks);Wn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(a){Pt[a]=function(){var e=new pn,t=Nc.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Eu=function(e,t,n){return e[t]=n},Cp=function(e,t,n){return e[t](n)},Ob=function(e,t,n,i){return e[t](i.fp,n)},Fb=function(e,t,n){return e.setAttribute(t,n)},Au=function(e,t){return yt(e[t])?Cp:xu(e[t])&&e.setAttribute?Fb:Eu},Lp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ub=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},zb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ul(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Bb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pp=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},_n=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||Lp,this.d=l||this,this.set=c||Eu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Bb,this.m=n,this.mt=r,this.tween=i},a}();gn(bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Mu[a]=1});Rn.TweenMax=Rn.TweenLite=Pt;Rn.TimelineLite=Rn.TimelineMax=pn;gt=new pn({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=yp;var Us=[],Ua={},Gb=[],If=0,ic=function(e){return(Ua[e]||Gb).map(function(t){return t()})},Uc=function(){var e=Date.now(),t=[];e-If>2&&(ic("matchMediaInit"),Us.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=Fn.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),If=e,ic("matchMedia"))},Dp=function(){function a(t,n){this.selector=n&&Oc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){yt(n)&&(r=i,i=n,n=yt);var s=this,o=function(){var c=At,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=Oc(r)),At=s,h=i.apply(s,arguments),yt(h)&&s._r.push(h),At=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===yt?o(s):n?s[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ks)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Us.indexOf(this);~o&&Us.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a}(),Vb=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){ui(n)||(n={matches:n});var s=new Dp(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Fn.matchMedia(n[c]),l&&(Us.indexOf(s)<0&&Us.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uc):l.addEventListener("change",Uc)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sb(i)})},timeline:function(e){return new pn(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ut(e)&&(e=Gn(e)[0]);var r=Lr(e||{}).get,s=n?op:sp;return n==="native"&&(n=""),e&&(t?s((Sn[t]&&Sn[t].get||r)(e,t,n,i)):function(o,l,c){return s((Sn[o]&&Sn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var i=e.map(function(u){return Pn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Sn[t],o=Lr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;ps._pt=0,h.init(e,n?u+n:u,ps,0,[e]),h.render(1,h),ps._pt&&Cu(1,ps)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Pn.to(e,Br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,Is.ease)),Cf(Is,e||{})},config:function(e){return Cf(Ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Sn[o]&&!Rn[o]&&ja(t+" effect requires "+o+" plugin.")}),Ql[t]=function(o,l,c){return n(Gn(o),Wn(l||{},r),c)},s&&(pn.prototype[t]=function(o,l,c){return this.add(Ql[t](o,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):Qe},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new pn(e),i,r;for(n.smoothChildTiming=mn(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,i=gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=r;return oi(gt,n,0),n},context:function(e,t){return e?new Dp(e,t):At},matchMedia:function(e){return new Vb(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Uc()},addEventListener:function(e,t){var n=Ua[e]||(Ua[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ua[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:yb,wrapYoyo:Mb,distribute:dp,random:mp,snap:pp,normalize:vb,getUnit:jt,clamp:mb,splitColor:xp,toArray:Gn,selector:Oc,mapRange:_p,pipe:_b,unitize:xb,interpolate:bb,shuffle:fp},install:ep,effects:Ql,ticker:En,updateRoot:pn.updateRoot,plugins:Sn,globalTimeline:gt,core:{PropTween:_n,globals:tp,Tween:Pt,Timeline:pn,Animation:ks,getCache:Lr,_removeLinkedListItem:ul,reverting:function(){return Kt},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return _u=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ja[a]=Pt[a]});En.add(pn.updateRoot);ps=Ja.to({},{duration:0});var Hb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wb=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Hb(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},rc=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Ut(r)&&(l={},gn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Wb(o,r)}}}},Pn=Ja.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rc("roundProps",Fc),rc("modifiers"),rc("snap",pp))||Ja;Pt.version=pn.version=Pn.version="3.11.4";Qd=1;jd()&&Fs();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nf,Xi,bs,Lu,Tr,Of,Ru,Xb=function(){return typeof window<"u"},Pi={},yr=180/Math.PI,Ss=Math.PI/180,os=Math.atan2,Ff=1e8,Pu=/([A-Z])/g,qb=/(left|right|width|margin|padding|x)/i,Yb=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$b=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ip=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Np=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zb=function(e,t,n){return e.style[t]=n},Jb=function(e,t,n){return e.style.setProperty(t,n)},Qb=function(e,t,n){return e._gsap[t]=n},eS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tS=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},nS=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},_t="transform",ti=_t+"Origin",iS=function(e,t){var n=this,i=this.target,r=i.style;if(e in Pi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=yi(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:yi(i,e)),this.props.indexOf(_t)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ti,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},Op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(Pu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ru(),r&&!r.isStart&&!n[_t]&&(Op(n),i.uncache=1)}},Fp=function(e,t){var n={target:e,props:[],revert:rS,save:iS};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},kp,Bc=function(e,t){var n=Xi.createElementNS?Xi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xi.createElement(e);return n.style?n:Xi.createElement(e)},li=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,zs(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),zs=function(e,t,n){var i=t||Tr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(kf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?kf[s]:"")+e},Gc=function(){Xb()&&window.document&&(Nf=window,Xi=Nf.document,bs=Xi.documentElement,Tr=Bc("div")||{style:{}},Bc("div"),_t=zs(_t),ti=_t+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!zs("perspective"),Ru=Pn.core.reverting,Lu=1)},sc=function a(e){var t=Bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(bs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),bs.removeChild(t),this.style.cssText=r,s},Uf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Up=function(e){var t;try{t=e.getBBox()}catch{t=sc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===sc||(t=sc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Uf(e,["x","cx","x1"])||0,y:+Uf(e,["y","cy","y1"])||0,width:0,height:0}:t},zp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Up(e))},Ho=function(e,t){if(t){var n=e.style;t in Pi&&t!==ti&&(t=_t),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Pu,"-$1").toLowerCase())):n.removeAttribute(t)}},qi=function(e,t,n,i,r,s){var o=new _n(e._pt,t,n,0,1,s?Np:Ip);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},zf={deg:1,rad:1,turn:1},sS={grid:1,flex:1},sr=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Tr.style,l=qb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,_;return i===s||!r||zf[i]||zf[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&zp(e),(p||s==="%")&&(Pi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],St(p?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?s:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Xi||!d.appendChild)&&(d=Xi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===En.time&&!m.uncache?St(r/m.width*h):((p||s==="%")&&!sS[li(d,"display")]&&(o.position=li(e,"position")),d===e&&(o.position="static"),d.appendChild(Tr),g=Tr[u],d.removeChild(Tr),o.position="absolute",l&&p&&(m=Lr(d),m.time=En.time,m.width=d[u]),St(f?g*r/h:g&&r?h/g*r:0))))},yi=function(e,t,n,i){var r;return Lu||Gc(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(r=Xo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:el(li(e,ti))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Qa[t]&&Qa[t](e,t,n)||li(e,t)||ip(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?sr(e,t,r,n)+n:r},oS=function(e,t,n,i){if(!n||n==="none"){var r=zs(t,e,1),s=r&&li(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new _n(this._pt,e.style,t,0,1,Rp),l=0,c=0,u,h,f,p,g,d,m,_,M,x,v,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=li(e,t)||i,e.style[t]=n),u=[n,i],yp(u),n=u[0],i=u[1],f=n.match(ds)||[],b=i.match(ds)||[],b.length){for(;h=ds.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,v=d.substr((p+"").length),m.charAt(1)==="="&&(m=Ms(p,m)+v),_=parseFloat(m),x=m.substr((_+"").length),l=ds.lastIndex-x.length,x||(x=x||Ln.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(p=sr(e,t,d,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Np:Ip;return Zd.test(i)&&(o.e=0),this._pt=o,o},Bf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bf[n]||n,t[1]=Bf[i]||i,t.join(" ")},lS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Pi[o]&&(l=1,o=o==="transformOrigin"?ti:_t),Ho(n,o);l&&(Ho(n,_t),s&&(s.svg&&n.removeAttribute("transform"),Xo(n,1),s.uncache=1,Op(i)))}},Qa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new _n(e._pt,t,n,0,0,lS);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Wo=[1,0,0,1,0,0],Bp={},Gp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gf=function(e){var t=li(e,_t);return Gp(t)?Wo:t.substr(7).match($d).map(St)},Du=function(e,t){var n=e._gsap||Lr(e),i=e.style,r=Gf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wo:r):(r===Wo&&!e.offsetParent&&e!==bs&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,bs.appendChild(e)),r=Gf(e),l?i.display=l:Ho(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):bs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vc=function(e,t,n,i,r,s){var o=e._gsap,l=r||Du(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],M=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,E,A,y,S;n?l!==Wo&&(A=p*m-g*d)&&(y=v*(m/A)+b*(-d/A)+(d*M-m*_)/A,S=v*(-g/A)+b*(p/A)-(p*M-g*_)/A,v=y,b=S):(E=Up(e),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),b=E.y+(~(x[1]||x[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&o.smooth?(_=v-c,M=b-u,o.xOffset=h+(_*p+M*d)-_,o.yOffset=f+(_*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ti]="0px 0px",s&&(qi(s,o,"xOrigin",c,v),qi(s,o,"yOrigin",u,b),qi(s,o,"xOffset",h,o.xOffset),qi(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Xo=function(e,t){var n=e._gsap||new wp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=li(e,ti)||"0",u,h,f,p,g,d,m,_,M,x,v,b,E,A,y,S,R,U,G,I,D,F,H,j,V,Z,L,fe,B,J,te,z;return u=h=f=d=m=_=M=x=v=0,p=g=1,n.svg=!!(e.getCTM&&zp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),i.scale=i.rotate=i.translate="none"),A=Du(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Vc(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,E=n.yOrigin||0,A!==Wo&&(U=A[0],G=A[1],I=A[2],D=A[3],u=F=A[4],h=H=A[5],A.length===6?(p=Math.sqrt(U*U+G*G),g=Math.sqrt(D*D+I*I),d=U||G?os(G,U)*yr:0,M=I||D?os(I,D)*yr+d:0,M&&(g*=Math.abs(Math.cos(M*Ss))),n.svg&&(u-=b-(b*U+E*I),h-=E-(b*G+E*D))):(z=A[6],J=A[7],L=A[8],fe=A[9],B=A[10],te=A[11],u=A[12],h=A[13],f=A[14],y=os(z,B),m=y*yr,y&&(S=Math.cos(-y),R=Math.sin(-y),j=F*S+L*R,V=H*S+fe*R,Z=z*S+B*R,L=F*-R+L*S,fe=H*-R+fe*S,B=z*-R+B*S,te=J*-R+te*S,F=j,H=V,z=Z),y=os(-I,B),_=y*yr,y&&(S=Math.cos(-y),R=Math.sin(-y),j=U*S-L*R,V=G*S-fe*R,Z=I*S-B*R,te=D*R+te*S,U=j,G=V,I=Z),y=os(G,U),d=y*yr,y&&(S=Math.cos(y),R=Math.sin(y),j=U*S+G*R,V=F*S+H*R,G=G*S-U*R,H=H*S-F*R,U=j,F=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=St(Math.sqrt(U*U+G*G+I*I)),g=St(Math.sqrt(H*H+z*z)),y=os(F,H),M=Math.abs(y)>2e-4?y*yr:0,v=te?1/(te<0?-te:te):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gp(li(e,_t)),j&&e.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(p*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=St(p),n.scaleY=St(g),n.rotation=St(d)+o,n.rotationX=St(m)+o,n.rotationY=St(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ti]=el(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?uS:kp?Vp:cS,n.uncache=0,n},el=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=jt(t);return St(parseFloat(t)+parseFloat(sr(e,"x",n+"px",i)))+i},cS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vp(e,t)},gr="0deg",ao="0px",_r=") ",Vp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,v="",b=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==gr||u!==gr)){var E=parseFloat(u)*Ss,A=Math.sin(E),y=Math.cos(E),S;E=parseFloat(h)*Ss,S=Math.cos(E),s=oc(M,s,A*S*-x),o=oc(M,o,-Math.sin(E)*-x),l=oc(M,l,y*S*-x+x)}m!==ao&&(v+="perspective("+m+_r),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||s!==ao||o!==ao||l!==ao)&&(v+=l!==ao||b?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+_r),c!==gr&&(v+="rotate("+c+_r),u!==gr&&(v+="rotateY("+u+_r),h!==gr&&(v+="rotateX("+h+_r),(f!==gr||p!==gr)&&(v+="skew("+f+", "+p+_r),(g!==1||d!==1)&&(v+="scale("+g+", "+d+_r),M.style[_t]=v||"translate(0, 0)"},uS=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(s),v=parseFloat(o),b,E,A,y,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ss,c*=Ss,b=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=Ss,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,y*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,E*=S)),b=St(b),E=St(E),A=St(A),y=St(y)):(b=h,y=f,E=A=0),(x&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=sr(p,"x",s,"px"),v=sr(p,"y",o,"px")),(g||d||m||_)&&(x=St(x+g-(g*b+d*A)+m),v=St(v+d-(g*E+d*y)+_)),(i||r)&&(S=p.getBBox(),x=St(x+i/100*S.width),v=St(v+r/100*S.height)),S="matrix("+b+","+E+","+A+","+y+","+x+","+v+")",p.setAttribute("transform",S),M&&(p.style[_t]=S)},hS=function(e,t,n,i,r){var s=360,o=Ut(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?yr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Ff)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Ff)%s-~~(c/s)*s)),e._pt=f=new _n(e._pt,t,n,i,c,jb),f.e=u,f.u="deg",e._props.push(n),f},Vf=function(e,t){for(var n in t)e[n]=t[n];return e},fS=function(e,t,n){var i=Vf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[_t]=t,o=Xo(n,1),Ho(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],s[_t]=t,o=Xo(n,1),s[_t]=c);for(l in Pi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=jt(c),g=jt(u),h=p!==g?sr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new _n(e._pt,o,l,h,f-h,zc),e._pt.u=g||0,e._props.push(l));Vf(o,i)};gn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});Qa[e>1?"border"+a:a]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=s.map(function(g){return yi(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},s.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,p,h)}});var Hp={name:"css",register:Gc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,M,x,v,b,E,A,y;Lu||Gc(),this.styles=this.styles||Fp(e),y=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Sn[d]&&Tp(d,t,n,i,e,r)))){if(p=typeof u,g=Qa[d],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Go(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ji.lastIndex=0,Ji.test(c)||(m=jt(c),_=jt(u)),_?m!==_&&(c=sr(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,d),s.push(d),y.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Ut(c)&&~c.indexOf("random(")&&(c=Go(c)),jt(c+"")||(c+=Ln.units[d]||jt(yi(e,d))||""),(c+"").charAt(1)==="="&&(c=yi(e,d))):c=yi(e,d),f=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in Ti&&(d==="autoAlpha"&&(f===1&&yi(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),qi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ti[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Pi,x){if(this.styles.save(d),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Xo(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new _n(this._pt,o,_t,0,1,b.renderTransform,b,0,-1),v.dep=1),d==="scale")this._pt=new _n(this._pt,b,"scaleY",b.scaleY,(M?Ms(b.scaleY,M+h):h)-b.scaleY||0,zc),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(ti,0,o[ti]),u=aS(u),b.svg?Vc(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&qi(this,b,"zOrigin",b.zOrigin,_),qi(this,o,d,el(c),el(u)));continue}else if(d==="svgOrigin"){Vc(e,u,1,E,0,this);continue}else if(d in Bp){hS(this,b,d,f,M?Ms(f,M+u):u);continue}else if(d==="smoothOrigin"){qi(this,b,"smooth",b.smooth,u);continue}else if(d==="force3D"){b[d]=u;continue}else if(d==="transform"){fS(this,u,e);continue}}else d in o||(d=zs(d)||d);if(x||(h||h===0)&&(f||f===0)&&!Yb.test(u)&&d in o)m=(c+"").substr((f+"").length),h||(h=0),_=jt(u)||(d in Ln.units?Ln.units[d]:m),m!==_&&(f=sr(e,d,c,_)),this._pt=new _n(this._pt,x?b:o,d,f,(M?Ms(f,M+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?$b:zc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Kb);else if(d in o)oS.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else if(d!=="parseTransform"){yu(d,u);continue}x||(d in o?y.push(d,0,o[d]):y.push(d,1,c||e[d])),s.push(d)}}A&&Pp(this)},render:function(e,t){if(t.tween._time||!Ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:yi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==ti&&(e._gsap.x||yi(e,"x"))?n&&Of===n?t==="scale"?eS:Qb:(Of=n||{})&&(t==="scale"?tS:nS):e.style&&!xu(e.style[t])?Zb:~t.indexOf("-")?Jb:Au(e,t)},core:{_removeProperty:Ho,_getMatrix:Du}};Pn.utils.checkPrefix=zs;Pn.core.getStyleSaver=Fp;(function(a,e,t,n){var i=gn(a+","+e+","+t,function(r){Pi[r]=1});gn(e,function(r){Ln.units[r]="deg",Bp[r]=1}),Ti[i[13]]=a+","+e,gn(n,function(r){var s=r.split(":");Ti[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Ln.units[a]="px"});Pn.registerPlugin(Hp);var tl=Pn.registerPlugin(Hp)||Pn;tl.core.Tween;function Hf(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function dS(a,e,t){return e&&Hf(a.prototype,e),t&&Hf(a,t),a}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt,Hc,An,Yi,ji,ws,Wp,Mr,wo,Xp,Ei,Kn,qp,Yp=function(){return Vt||typeof window<"u"&&(Vt=window.gsap)&&Vt.registerPlugin&&Vt},jp=1,ms=[],je=[],ci=[],To=Date.now,Wc=function(e,t){return t},pS=function(){var e=wo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,ci),je=n,ci=i,Wc=function(s,o){return t[s](o)}},Qi=function(e,t){return~ci.indexOf(e)&&ci[ci.indexOf(e)+1][t]},Eo=function(e){return!!~Xp.indexOf(e)},fn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ma="scrollLeft",ba="scrollTop",Xc=function(){return Ei&&Ei.isPressed||je.cache++},nl=function(e,t){var n=function i(r){if(r||r===0){jp&&(An.history.scrollRestoration="manual");var s=Ei&&Ei.isPressed;r=i.v=Math.round(r)||(Ei&&Ei.iOS?1:0),e(r),i.cacheID=je.cache,s&&Wc("ss",r)}else(t||je.cache!==i.cacheID||Wc("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},an={s:Ma,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nl(function(a){return arguments.length?An.scrollTo(a,Dt.sc()):An.pageXOffset||Yi[Ma]||ji[Ma]||ws[Ma]||0})},Dt={s:ba,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:an,sc:nl(function(a){return arguments.length?An.scrollTo(an.sc(),a):An.pageYOffset||Yi[ba]||ji[ba]||ws[ba]||0})},dn=function(e){return Vt.utils.toArray(e)[0]||(typeof e=="string"&&Vt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},or=function(e,t){var n=t.s,i=t.sc;Eo(e)&&(e=Yi.scrollingElement||ji);var r=je.indexOf(e),s=i===Dt.sc?1:2;!~r&&(r=je.push(e)-1),je[r+s]||e.addEventListener("scroll",Xc);var o=je[r+s],l=o||(je[r+s]=nl(Qi(e,n),!0)||(Eo(e)?i:nl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Vt.getProperty(e,"scrollBehavior")==="smooth"),l},qc=function(e,t,n){var i=e,r=e,s=To(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=To();d||m-s>l?(r=i,i=g,o=s,s=m):n?i+=g:i=r+(g-r)/(m-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},f=function(g){var d=o,m=r,_=To();return(g||g===0)&&g!==i&&u(g),s===o||_-o>c?0:(i+(n?m:-m))/((n?_:s)-d)*1e3};return{update:u,reset:h,getVelocity:f}},lo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Kp=function(){wo=Vt.core.globals().ScrollTrigger,wo&&wo.core&&pS()},$p=function(e){return Vt=e||Yp(),Vt&&typeof document<"u"&&document.body&&(An=window,Yi=document,ji=Yi.documentElement,ws=Yi.body,Xp=[An,Yi,ji,ws],Vt.utils.clamp,qp=Vt.core.context||function(){},Mr="onpointerenter"in ws?"pointer":"mouse",Wp=Ct.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kn=Ct.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jp=0},500),Kp(),Hc=1),Hc};an.op=Dt;je.cache=0;var Ct=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){Hc||$p(Vt)||console.warn("Please gsap.registerPlugin(Observer)"),wo||Kp();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,M=n.onDrag,x=n.onPress,v=n.onRelease,b=n.onRight,E=n.onLeft,A=n.onUp,y=n.onDown,S=n.onChangeX,R=n.onChangeY,U=n.onChange,G=n.onToggleX,I=n.onToggleY,D=n.onHover,F=n.onHoverEnd,H=n.onMove,j=n.ignoreCheck,V=n.isNormalizer,Z=n.onGestureStart,L=n.onGestureEnd,fe=n.onWheel,B=n.onEnable,J=n.onDisable,te=n.onClick,z=n.scrollSpeed,re=n.capture,oe=n.allowClicks,ae=n.lockAxis,ge=n.onLockAxis;this.target=o=dn(o)||ji,this.vars=n,p&&(p=Vt.utils.toArray(p)),i=i||1e-9,r=r||0,g=g||1,z=z||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(ws).lineHeight)||22);var xe,Pe,he,Re,Ze,at,Oe,W=this,Be=0,Ne=0,Lt=or(o,an),wt=or(o,Dt),C=Lt(),w=wt(),$=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Kn[0]==="pointerdown",ie=Eo(o),ee=o.ownerDocument||Yi,se=[0,0,0],_e=[0,0,0],de=0,K=function(){return de=To()},we=function(ue,ne){return(W.event=ue)&&p&&~p.indexOf(ue.target)||ne&&$&&ue.pointerType!=="touch"||j&&j(ue,ne)},ve=function(){W._vx.reset(),W._vy.reset(),Pe.pause(),h&&h(W)},Ae=function(){var ue=W.deltaX=Wf(se),ne=W.deltaY=Wf(_e),ye=Math.abs(ue)>=i,Ie=Math.abs(ne)>=i;U&&(ye||Ie)&&U(W,ue,ne,se,_e),ye&&(b&&W.deltaX>0&&b(W),E&&W.deltaX<0&&E(W),S&&S(W),G&&W.deltaX<0!=Be<0&&G(W),Be=W.deltaX,se[0]=se[1]=se[2]=0),Ie&&(y&&W.deltaY>0&&y(W),A&&W.deltaY<0&&A(W),R&&R(W),I&&W.deltaY<0!=Ne<0&&I(W),Ne=W.deltaY,_e[0]=_e[1]=_e[2]=0),(Re||he)&&(H&&H(W),he&&(M(W),he=!1),Re=!1),at&&!(at=!1)&&ge&&ge(W),Ze&&(fe(W),Ze=!1),xe=0},Te=function(ue,ne,ye){se[ye]+=ue,_e[ye]+=ne,W._vx.update(ue),W._vy.update(ne),c?xe||(xe=requestAnimationFrame(Ae)):Ae()},be=function(ue,ne){ae&&!Oe&&(W.axis=Oe=Math.abs(ue)>Math.abs(ne)?"x":"y",at=!0),Oe!=="y"&&(se[2]+=ue,W._vx.update(ue,!0)),Oe!=="x"&&(_e[2]+=ne,W._vy.update(ne,!0)),c?xe||(xe=requestAnimationFrame(Ae)):Ae()},Ve=function(ue){if(!we(ue,1)){ue=lo(ue,u);var ne=ue.clientX,ye=ue.clientY,Ie=ne-W.x,ke=ye-W.y,Tt=W.isDragging;W.x=ne,W.y=ye,(Tt||Math.abs(W.startX-ne)>=r||Math.abs(W.startY-ye)>=r)&&(M&&(he=!0),Tt||(W.isDragging=!0),be(Ie,ke),Tt||m&&m(W))}},Ee=W.onPress=function(Fe){we(Fe,1)||(W.axis=Oe=null,Pe.pause(),W.isPressed=!0,Fe=lo(Fe),Be=Ne=0,W.startX=W.x=Fe.clientX,W.startY=W.y=Fe.clientY,W._vx.reset(),W._vy.reset(),fn(V?o:ee,Kn[1],Ve,u,!0),W.deltaX=W.deltaY=0,x&&x(W))},st=function(ue){if(!we(ue,1)){en(V?o:ee,Kn[1],Ve,!0);var ne=!isNaN(W.y-W.startY),ye=W.isDragging&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ie=lo(ue);!ye&&ne&&(W._vx.reset(),W._vy.reset(),u&&oe&&Vt.delayedCall(.08,function(){if(To()-de>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(ee.createEvent){var ke=ee.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,An,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(ke)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&!V&&Pe.restart(!0),_&&ye&&_(W),v&&v(W,ye)}},P=function(ue){return ue.touches&&ue.touches.length>1&&(W.isGesturing=!0)&&Z(ue,W.isDragging)},Y=function(){return(W.isGesturing=!1)||L(W)},Q=function(ue){if(!we(ue)){var ne=Lt(),ye=wt();Te((ne-C)*z,(ye-w)*z,1),C=ne,w=ye,h&&Pe.restart(!0)}},le=function(ue){if(!we(ue)){ue=lo(ue,u),fe&&(Ze=!0);var ne=(ue.deltaMode===1?l:ue.deltaMode===2?An.innerHeight:1)*g;Te(ue.deltaX*ne,ue.deltaY*ne,0),h&&!V&&Pe.restart(!0)}},me=function(ue){if(!we(ue)){var ne=ue.clientX,ye=ue.clientY,Ie=ne-W.x,ke=ye-W.y;W.x=ne,W.y=ye,Re=!0,(Ie||ke)&&be(Ie,ke)}},nt=function(ue){W.event=ue,D(W)},ot=function(ue){W.event=ue,F(W)},Mt=function(ue){return we(ue)||lo(ue,u)&&te(W)};Pe=W._dc=Vt.delayedCall(f||.25,ve).pause(),W.deltaX=W.deltaY=0,W._vx=qc(0,50,!0),W._vy=qc(0,50,!0),W.scrollX=Lt,W.scrollY=wt,W.isDragging=W.isGesturing=W.isPressed=!1,qp(this),W.enable=function(Fe){return W.isEnabled||(fn(ie?ee:o,"scroll",Xc),s.indexOf("scroll")>=0&&fn(ie?ee:o,"scroll",Q,u,re),s.indexOf("wheel")>=0&&fn(o,"wheel",le,u,re),(s.indexOf("touch")>=0&&Wp||s.indexOf("pointer")>=0)&&(fn(o,Kn[0],Ee,u,re),fn(ee,Kn[2],st),fn(ee,Kn[3],st),oe&&fn(o,"click",K,!1,!0),te&&fn(o,"click",Mt),Z&&fn(ee,"gesturestart",P),L&&fn(ee,"gestureend",Y),D&&fn(o,Mr+"enter",nt),F&&fn(o,Mr+"leave",ot),H&&fn(o,Mr+"move",me)),W.isEnabled=!0,Fe&&Fe.type&&Ee(Fe),B&&B(W)),W},W.disable=function(){W.isEnabled&&(ms.filter(function(Fe){return Fe!==W&&Eo(Fe.target)}).length||en(ie?ee:o,"scroll",Xc),W.isPressed&&(W._vx.reset(),W._vy.reset(),en(V?o:ee,Kn[1],Ve,!0)),en(ie?ee:o,"scroll",Q,re),en(o,"wheel",le,re),en(o,Kn[0],Ee,re),en(ee,Kn[2],st),en(ee,Kn[3],st),en(o,"click",K,!0),en(o,"click",Mt),en(ee,"gesturestart",P),en(ee,"gestureend",Y),en(o,Mr+"enter",nt),en(o,Mr+"leave",ot),en(o,Mr+"move",me),W.isEnabled=W.isPressed=W.isDragging=!1,J&&J(W))},W.kill=W.revert=function(){W.disable();var Fe=ms.indexOf(W);Fe>=0&&ms.splice(Fe,1),Ei===W&&(Ei=0)},ms.push(W),V&&Eo(o)&&(Ei=W),W.enable(d)},dS(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();Ct.version="3.11.4";Ct.create=function(a){return new Ct(a)};Ct.register=$p;Ct.getAll=function(){return ms.slice()};Ct.getById=function(a){return ms.filter(function(e){return e.vars.id===a})[0]};Yp()&&Vt.registerPlugin(Ct);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,us,Je,pt,Jn,vt,Zp,il,rl,gs,za,Sa,qt,dl,Yc,nn,Xf,qf,hs,Jp,ac,Qp,Mn,em,tm,nm,zi,jc,Iu,lc,wa=1,rn=Date.now,cc=rn(),Hn=0,Ta=0,Yf=function(){return dl=1},jf=function(){return dl=0},ri=function(e){return e},go=function(e){return Math.round(e*1e5)/1e5||0},im=function(){return typeof window<"u"},rm=function(){return Le||im()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Gr=function(e){return!!~Zp.indexOf(e)},sm=function(e){return Qi(e,"getBoundingClientRect")||(Gr(e)?function(){return Xa.width=Je.innerWidth,Xa.height=Je.innerHeight,Xa}:function(){return bi(e)})},mS=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=Qi(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Je["inner"+r]:e["client"+r])||0}},gS=function(e,t){return!t||~ci.indexOf(e)?sm(e):function(){return Xa}},Ki=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=Qi(e,n))?s()-sm(e)()[r]:Gr(e)?(Jn[n]||vt[n])-(Je["inner"+i]||Jn["client"+i]||vt["client"+i]):e[n]-e["offset"+i]},Ea=function(e,t){for(var n=0;n<hs.length;n+=3)(!t||~t.indexOf(hs[n+1]))&&e(hs[n],hs[n+1],hs[n+2])},$n=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},_o=function(e){return typeof e=="number"},Ba=function(e){return typeof e=="object"},co=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},uc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},as=Math.abs,om="left",am="top",Nu="right",Ou="bottom",Dr="width",Ir="height",Ao="Right",Co="Left",Lo="Top",Ro="Bottom",bt="padding",kn="margin",Bs="Width",Fu="Height",zt="px",Qn=function(e){return Je.getComputedStyle(e)},_S=function(e){var t=Qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bi=function(e,t){var n=t&&Qn(e)[Yc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Kc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},lm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},xS=function(e){return function(t){return Le.utils.snap(lm(e),t)}},ku=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},vS=function(e){return function(t,n){return ku(lm(e))(t,n.direction)}},Aa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Bt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ft=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ca=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},$f={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},La={toggleActions:"play",anticipatePin:0},sl={top:0,left:0,center:.5,bottom:1,right:1},Ga=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in sl?sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ra=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,p=r.fontWeight,g=pt.createElement("div"),d=Gr(n)||Qi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?vt:n,M=e.indexOf("start")!==-1,x=M?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(v+=(i===Dt?Nu:Ou)+":"+(s+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Va(g,0,i,M),g},Va=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+Bs]=1,r["border"+o+Bs]=0,r[n.p]=t+"px",Le.set(e,r)},Ye=[],$c={},qo,Zf=function(){return rn()-Hn>34&&(qo||(qo=requestAnimationFrame(ar)))},ls=function(){(!Mn||!Mn.isPressed||Mn.startX>vt.clientWidth)&&(je.cache++,Mn?qo||(qo=requestAnimationFrame(ar)):ar(),Hn||Hr("scrollStart"),Hn=rn())},hc=function(){nm=Je.innerWidth,tm=Je.innerHeight},xo=function(){je.cache++,!qt&&!Qp&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!em||nm!==Je.innerWidth||Math.abs(Je.innerHeight-tm)>Je.innerHeight*.25)&&il.restart(!0)},Vr={},yS=[],cm=function a(){return Ft(et,"scrollEnd",a)||Er(!0)},Hr=function(e){return Vr[e]&&Vr[e].map(function(t){return t()})||yS},bn=[],um=function(e){for(var t=0;t<bn.length;t+=5)(!e||bn[t+4]&&bn[t+4].query===e)&&(bn[t].style.cssText=bn[t+1],bn[t].getBBox&&bn[t].setAttribute("transform",bn[t+2]||""),bn[t+3].uncache=1)},Uu=function(e,t){var n;for(nn=0;nn<Ye.length;nn++)n=Ye[nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&um(t),t||Hr("revert")},hm=function(e,t){je.cache++,(t||!Zn)&&je.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(Je.history.scrollRestoration=Iu=e)},Zn,Nr=0,Jf,MS=function(){if(Jf!==Nr){var e=Jf=Nr;requestAnimationFrame(function(){return e===Nr&&Er(!0)})}},Er=function(e,t){if(Hn&&!e){Bt(et,"scrollEnd",cm);return}Zn=et.isRefreshing=!0,je.forEach(function(i){return ln(i)&&i.cacheID++&&(i.rec=i())});var n=Hr("refreshInit");Jp&&et.sort(),t||Uu(),je.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Ye.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.revert(!1,1)}}),Ye.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Ki(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),hm(Iu,1),il.pause(),Nr++,ar(2),Ye.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=et.isRefreshing=!1,Hr("refresh")},Qf=0,Ha=1,Po,ar=function(e){if(!Zn||e===2){et.isUpdating=!0,Po&&Po.update(0);var t=Ye.length,n=rn(),i=n-cc>=50,r=t&&Ye[0].scroll();if(Ha=Qf>r?-1:1,Qf=r,i&&(Hn&&!dl&&n-Hn>200&&(Hn=0,Hr("scrollEnd")),za=cc,cc=n),Ha<0){for(nn=t;nn-- >0;)Ye[nn]&&Ye[nn].update(0,i);Ha=1}else for(nn=0;nn<t;nn++)Ye[nn]&&Ye[nn].update(0,i);et.isUpdating=!1}qo=0},Zc=[om,am,Ou,Nu,kn+Ro,kn+Ao,kn+Lo,kn+Co,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wa=Zc.concat([Dr,Ir,"boxSizing","max"+Bs,"max"+Fu,"position",kn,bt,bt+Lo,bt+Ao,bt+Ro,bt+Co]),bS=function(e,t,n){Ts(n);var i=e._gsap;if(i.spacerIsNative)Ts(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},fc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Zc.length,s=t.style,o=e.style,l;r--;)l=Zc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Ou]=o[Nu]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Dr]=Kc(e,an)+zt,s[Ir]=Kc(e,Dt)+zt,s[bt]=o[kn]=o[am]=o[om]="0",Ts(i),o[Dr]=o["max"+Bs]=n[Dr],o[Ir]=o["max"+Fu]=n[Ir],o[bt]=n[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},SS=/([A-Z])/g,Ts=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(SS,"-$1").toLowerCase())}},Pa=function(e){for(var t=Wa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Wa[r],n[Wa[r]]);return i.t=e,i},wS=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},Xa={left:0,top:0},ed=function(e,t,n,i,r,s,o,l,c,u,h,f,p){ln(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ga("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),_o(e))o&&Va(o,n,i,!0);else{ln(t)&&(t=t(l));var M=(e||"0").split(" "),x,v,b,E;_=dn(t)||vt,x=bi(_)||{},(!x||!x.left&&!x.top)&&Qn(_).display==="none"&&(E=_.style.display,_.style.display="block",x=bi(_),E?_.style.display=E:_.style.removeProperty("display")),v=Ga(M[0],x[i.d]),b=Ga(M[1]||"0",n),e=x[i.p]-c[i.p]-u+v+r-b,o&&Va(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(s){var A=e+n,y=s._isStart;d="scroll"+i.d2,Va(s,A,i,y&&A>20||!y&&(h?Math.max(vt[d],Jn[d]):s.parentNode[d])<=A+1),h&&(c=bi(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+zt))}return p&&_&&(d=bi(_),p.seek(f),m=bi(_),p._caScrollDist=d[i.p]-m[i.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},TS=/(webkit|moz|length|cssText|inset)/i,td=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===vt){e._stOrig=r.cssText,o=Qn(e);for(s in o)!+s&&!TS.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},nd=function(e,t){var n=or(e,t),i="_scroll"+t.p2,r,s,o=function l(c,u,h,f,p){var g=l.tween,d=u.onComplete,m={};return h=h||n(),p=f&&p||0,f=f||c-h,g&&g.kill(),r=Math.round(h),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Math.round(n()),_!==r&&_!==s&&Math.abs(_-r)>3&&Math.abs(_-s)>3?(g.kill(),l.tween=0):_=h+f*g.ratio+p*g.ratio*g.ratio,s=r,r=Math.round(_)},u.onUpdate=function(){je.cache++,ar()},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Le.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Bt(e,"wheel",n.wheelHandler),o},et=function(){function a(t,n){us||a.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ta){this.update=this.refresh=this.kill=ri;return}n=Kf($n(n)||_o(n)||n.nodeType?{trigger:n}:n,La);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,p=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,x=r.once,v=r.snap,b=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,y=r.fastScrollEnd,S=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?an:Dt,U=!h&&h!==0,G=dn(n.scroller||Je),I=Le.core.getCache(G),D=Gr(G),F=("pinType"in n?n.pinType:Qi(G,"pinType")||D&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=U&&n.toggleActions.split(" "),V="markers"in n?n.markers:La.markers,Z=D?0:parseFloat(Qn(G)["border"+R.p2+Bs])||0,L=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(L)},B=mS(G,D,R),J=gS(G,D),te=0,z=0,re=or(G,R),oe,ae,ge,xe,Pe,he,Re,Ze,at,Oe,W,Be,Ne,Lt,wt,C,w,$,ie,ee,se,_e,de,K,we,ve,Ae,Te,be,Ve,Ee,st,P,Y,Q,le,me,nt,ot;if(jc(L),L._dir=R,m*=45,L.scroller=G,L.scroll=A?A.time.bind(A):re,xe=re(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Jp=1,n.refreshPriority===-9999&&(Po=L)),I.tweenScroll=I.tweenScroll||{top:nd(G,Dt),left:nd(G,an)},L.tweenTo=oe=I.tweenScroll[R.p],L.scrubDuration=function(ne){st=_o(ne)&&ne,st?Ee?Ee.duration(ne):Ee=Le.to(i,{ease:"expo",totalProgress:"+=0.001",duration:st,paused:!0,onComplete:function(){return _&&_(L)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),be=0,l||(l=i.vars.id)),Ye.push(L),v&&((!Ba(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in vt.style&&Le.set(D?[vt,Jn]:G,{scrollBehavior:"auto"}),je.forEach(function(ne){return ln(ne)&&ne.target===(D?pt.scrollingElement||Jn:G)&&(ne.smooth=!1)}),ge=ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?xS(i):v.snapTo==="labelsDirectional"?vS(i):v.directional!==!1?function(ne,ye){return ku(v.snapTo)(ne,rn()-z<500?0:ye.direction)}:Le.utils.snap(v.snapTo),P=v.duration||{min:.1,max:2},P=Ba(P)?gs(P.min,P.max):gs(P,P),Y=Le.delayedCall(v.delay||st/2||.1,function(){var ne=re(),ye=rn()-z<500,Ie=oe.tween;if((ye||Math.abs(L.getVelocity())<10)&&!Ie&&!dl&&te!==ne){var ke=(ne-he)/Ne,Tt=i&&!U?i.totalProgress():ke,T=ye?0:(Tt-Ve)/(rn()-za)*1e3||0,O=Le.utils.clamp(-ke,1-ke,as(T/2)*T/.185),X=ke+(v.inertia===!1?0:O),k=gs(0,1,ge(X,L)),q=Math.round(he+k*Ne),pe=v,Ce=pe.onStart,Me=pe.onInterrupt,Se=pe.onComplete;if(ne<=Re&&ne>=he&&q!==ne){if(Ie&&!Ie._initted&&Ie.data<=as(q-ne))return;v.inertia===!1&&(O=k-ke),oe(q,{duration:P(as(Math.max(as(X-Tt),as(k-Tt))*.185/T/.05||0)),ease:v.ease||"power3",data:as(q-ne),onInterrupt:function(){return Y.restart(!0)&&Me&&Me(L)},onComplete:function(){L.update(),te=re(),be=Ve=i&&!U?i.totalProgress():L.progress,M&&M(L),Se&&Se(L)}},ne,O*Ne,q-ne-O*Ne),Ce&&Ce(L,oe.tween)}}else L.isActive&&te!==ne&&Y.restart(!0)}).pause()),l&&($c[l]=L),f=L.trigger=dn(f||p),ot=f&&f._gsap&&f._gsap.stRevert,ot&&(ot=ot(L)),p=p===!0?f:dn(p),$n(o)&&(o={targets:f,className:o}),p&&(g===!1||g===kn||(g=!g&&p.parentNode&&p.parentNode.style&&Qn(p.parentNode).display==="flex"?!1:bt),L.pin=p,ae=Le.core.getCache(p),ae.spacer?Lt=ae.pinState:(E&&(E=dn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ae.spacerIsNative=!!E,E&&(ae.spacerState=Pa(E))),ae.spacer=w=E||pt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),ae.pinState=Lt=Pa(p)),n.force3D!==!1&&Le.set(p,{force3D:!0}),L.spacer=w=ae.spacer,Te=Qn(p),de=Te[g+R.os2],ie=Le.getProperty(p),ee=Le.quickSetter(p,R.a,zt),fc(p,w,Te),C=Pa(p)),V){Be=Ba(V)?Kf(V,$f):$f,Oe=Ra("scroller-start",l,G,R,Be,0),W=Ra("scroller-end",l,G,R,Be,0,Oe),$=Oe["offset"+R.op.d2];var Mt=dn(Qi(G,"content")||G);Ze=this.markerStart=Ra("start",l,Mt,R,Be,$,0,A),at=this.markerEnd=Ra("end",l,Mt,R,Be,$,0,A),A&&(nt=Le.quickSetter([Ze,at],R.a,zt)),!F&&!(ci.length&&Qi(G,"fixedMarkers")===!0)&&(_S(D?vt:G),Le.set([Oe,W],{force3D:!0}),we=Le.quickSetter(Oe,R.a,zt),Ae=Le.quickSetter(W,R.a,zt))}if(A){var Fe=A.vars.onUpdate,ue=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),Fe&&Fe.apply(ue||[])})}L.previous=function(){return Ye[Ye.indexOf(L)-1]},L.next=function(){return Ye[Ye.indexOf(L)+1]},L.revert=function(ne,ye){if(!ye)return L.kill(!0);var Ie=ne!==!1||!L.enabled,ke=qt;Ie!==L.isReverted&&(Ie&&(le=Math.max(re(),L.scroll.rec||0),Q=L.progress,me=i&&i.progress()),Ze&&[Ze,at,Oe,W].forEach(function(Tt){return Tt.style.display=Ie?"none":"block"}),Ie&&(qt=1,L.update(Ie)),p&&(!b||!L.isActive)&&(Ie?bS(p,w,Lt):fc(p,w,Qn(p),K)),Ie||L.update(Ie),qt=ke,L.isReverted=Ie)},L.refresh=function(ne,ye){if(!((qt||!L.enabled)&&!ye)){if(p&&ne&&Hn){Bt(a,"scrollEnd",cm);return}!Zn&&fe&&fe(L),qt=1,z=rn(),oe.tween&&(oe.tween.kill(),oe.tween=0),Ee&&Ee.pause(),d&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Ie=B(),ke=J(),Tt=A?A.duration():Ki(G,R),T=0,O=0,X=n.end,k=n.endTrigger||f,q=n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),pe=L.pinnedContainer=n.pinnedContainer&&dn(n.pinnedContainer),Ce=f&&Math.max(0,Ye.indexOf(L))||0,Me=Ce,Se,De,Ge,ze,He,$e,Rt,Xn,mt,We,hn;Me--;)$e=Ye[Me],$e.end||$e.refresh(0,1)||(qt=1),Rt=$e.pin,Rt&&(Rt===f||Rt===p)&&!$e.isReverted&&(We||(We=[]),We.unshift($e),$e.revert(!0,!0)),$e!==Ye[Me]&&(Ce--,Me--);for(ln(q)&&(q=q(L)),he=ed(q,f,Ie,R,re(),Ze,Oe,L,ke,Z,F,Tt,A)||(p?-.001:0),ln(X)&&(X=X(L)),$n(X)&&!X.indexOf("+=")&&(~X.indexOf(" ")?X=($n(q)?q.split(" ")[0]:"")+X:(T=Ga(X.substr(2),Ie),X=$n(q)?q:he+T,k=f)),Re=Math.max(he,ed(X||(k?"100% 0":Tt),k,Ie,R,re()+T,at,W,L,ke,Z,F,Tt,A))||-.001,Ne=Re-he||(he-=.01)&&.001,T=0,Me=Ce;Me--;)$e=Ye[Me],Rt=$e.pin,Rt&&$e.start-$e._pinPush<=he&&!A&&$e.end>0&&(Se=$e.end-$e.start,(Rt===f&&$e.start-$e._pinPush<he||Rt===pe)&&!_o(q)&&(T+=Se*(1-$e.progress)),Rt===p&&(O+=Se));if(he+=T,Re+=T,L._pinPush=O,Ze&&T&&(Se={},Se[R.a]="+="+T,pe&&(Se[R.p]="-="+re()),Le.set([Ze,at],Se)),p)Se=Qn(p),ze=R===Dt,Ge=re(),se=parseFloat(ie(R.a))+O,!Tt&&Re>1&&(hn=(D?pt.scrollingElement||Jn:G).style,hn={style:hn,value:hn["overflow"+R.a.toUpperCase()]},hn["overflow"+R.a.toUpperCase()]="scroll"),fc(p,w,Se),C=Pa(p),De=bi(p,!0),Xn=F&&or(G,ze?an:Dt)(),g&&(K=[g+R.os2,Ne+O+zt],K.t=w,Me=g===bt?Kc(p,R)+Ne+O:0,Me&&K.push(R.d,Me+zt),Ts(K),pe&&Ye.forEach(function(dt){dt.pin===pe&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),F&&re(le)),F&&(He={top:De.top+(ze?Ge-he:Xn)+zt,left:De.left+(ze?Xn:Ge-he)+zt,boxSizing:"border-box",position:"fixed"},He[Dr]=He["max"+Bs]=Math.ceil(De.width)+zt,He[Ir]=He["max"+Fu]=Math.ceil(De.height)+zt,He[kn]=He[kn+Lo]=He[kn+Ao]=He[kn+Ro]=He[kn+Co]="0",He[bt]=Se[bt],He[bt+Lo]=Se[bt+Lo],He[bt+Ao]=Se[bt+Ao],He[bt+Ro]=Se[bt+Ro],He[bt+Co]=Se[bt+Co],wt=wS(Lt,He,b),Zn&&re(0)),i?(mt=i._initted,ac(1),i.render(i.duration(),!0,!0),_e=ie(R.a)-se+Ne+O,ve=Math.abs(Ne-_e)>1,F&&ve&&wt.splice(wt.length-2,2),i.render(0,!0,!0),mt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ac(0)):_e=Ne,hn&&(hn.value?hn.style["overflow"+R.a.toUpperCase()]=hn.value:hn.style.removeProperty("overflow-"+R.a));else if(f&&re()&&!A)for(De=f.parentNode;De&&De!==vt;)De._pinOffset&&(he-=De._pinOffset,Re-=De._pinOffset),De=De.parentNode;We&&We.forEach(function(dt){return dt.revert(!1,!0)}),L.start=he,L.end=Re,xe=Pe=Zn?le:re(),!A&&!Zn&&(xe<le&&re(le),L.scroll.rec=0),L.revert(!1,!0),Y&&(te=-1,L.isActive&&re(he+Ne*Q),Y.restart(!0)),qt=0,i&&U&&(i._initted||me)&&i.progress()!==me&&i.progress(me,!0).render(i.time(),!0,!0),(Q!==L.progress||A)&&(i&&!U&&i.totalProgress(Q,!0),L.progress=(xe-he)/Ne===Q?0:Q),p&&g&&(w._pinOffset=Math.round(L.progress*_e)),u&&!Zn&&u(L)}},L.getVelocity=function(){return(re()-Pe)/(rn()-za)*1e3||0},L.endAnimation=function(){co(L.callbackAnimation),i&&(Ee?Ee.progress(1):i.paused()?U||co(i,L.direction<0,1):co(i,i.reversed()))},L.labelToScroll=function(ne){return i&&i.labels&&(he||L.refresh()||he)+i.labels[ne]/i.duration()*Ne||0},L.getTrailing=function(ne){var ye=Ye.indexOf(L),Ie=L.direction>0?Ye.slice(0,ye).reverse():Ye.slice(ye+1);return($n(ne)?Ie.filter(function(ke){return ke.vars.preventOverlaps===ne}):Ie).filter(function(ke){return L.direction>0?ke.end<=he:ke.start>=Re})},L.update=function(ne,ye,Ie){if(!(A&&!Ie&&!ne)){var ke=Zn?le:L.scroll(),Tt=ne?0:(ke-he)/Ne,T=Tt<0?0:Tt>1?1:Tt||0,O=L.progress,X,k,q,pe,Ce,Me,Se,De;if(ye&&(Pe=xe,xe=A?re():ke,v&&(Ve=be,be=i&&!U?i.totalProgress():T)),m&&!T&&p&&!qt&&!wa&&Hn&&he<ke+(ke-Pe)/(rn()-za)*m&&(T=1e-4),T!==O&&L.enabled){if(X=L.isActive=!!T&&T<1,k=!!O&&O<1,Me=X!==k,Ce=Me||!!T!=!!O,L.direction=T>O?1:-1,L.progress=T,Ce&&!qt&&(q=T&&!O?0:T===1?1:O===1?2:3,U&&(pe=!Me&&j[q+1]!=="none"&&j[q+1]||j[q],De=i&&(pe==="complete"||pe==="reset"||pe in i))),S&&(Me||De)&&(De||h||!i)&&(ln(S)?S(L):L.getTrailing(S).forEach(function($e){return $e.endAnimation()})),U||(Ee&&!qt&&!wa?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",T,i._tTime/i._tDur):(Ee.vars.totalProgress=T,Ee.invalidate().restart())):i&&i.totalProgress(T,!!qt)),p){if(ne&&g&&(w.style[g+R.os2]=de),!F)ee(go(se+_e*T));else if(Ce){if(Se=!ne&&T>O&&Re+1>ke&&ke+1>=Ki(G,R),b)if(!ne&&(X||Se)){var Ge=bi(p,!0),ze=ke-he;td(p,vt,Ge.top+(R===Dt?ze:0)+zt,Ge.left+(R===Dt?0:ze)+zt)}else td(p,w);Ts(X||Se?wt:C),ve&&T<1&&X||ee(se+(T===1&&!Se?_e:0))}}v&&!oe.tween&&!qt&&!wa&&Y.restart(!0),o&&(Me||x&&T&&(T<1||!lc))&&rl(o.targets).forEach(function($e){return $e.classList[X||x?"add":"remove"](o.className)}),s&&!U&&!ne&&s(L),Ce&&!qt?(U&&(De&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),s&&s(L)),(Me||!lc)&&(c&&Me&&uc(L,c),H[q]&&uc(L,H[q]),x&&(T===1?L.kill(!1,1):H[q]=0),Me||(q=T===1?1:3,H[q]&&uc(L,H[q]))),y&&!X&&Math.abs(L.getVelocity())>(_o(y)?y:2500)&&(co(L.callbackAnimation),Ee?Ee.progress(1):co(i,pe==="reverse"?1:!T,1))):U&&s&&!qt&&s(L)}if(Ae){var He=A?ke/A.duration()*(A._caScrollDist||0):ke;we(He+(Oe._isFlipped?1:0)),Ae(He)}nt&&nt(-ke/A.duration()*(A._caScrollDist||0))}},L.enable=function(ne,ye){L.enabled||(L.enabled=!0,Bt(G,"resize",xo),Bt(D?pt:G,"scroll",ls),fe&&Bt(a,"refreshInit",fe),ne!==!1&&(L.progress=Q=0,xe=Pe=te=re()),ye!==!1&&L.refresh())},L.getTween=function(ne){return ne&&oe?oe.tween:Ee},L.setPositions=function(ne,ye){p&&(se+=ne-he,_e+=ye-ne-Ne,g===bt&&L.adjustPinSpacing(ye-ne-Ne)),L.start=he=ne,L.end=Re=ye,Ne=ye-ne,L.update()},L.adjustPinSpacing=function(ne){if(K){var ye=K.indexOf(R.d)+1;K[ye]=parseFloat(K[ye])+ne+zt,K[1]=parseFloat(K[1])+ne+zt,Ts(K)}},L.disable=function(ne,ye){if(L.enabled&&(ne!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,ye||Ee&&Ee.pause(),le=0,ae&&(ae.uncache=1),fe&&Ft(a,"refreshInit",fe),Y&&(Y.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!D)){for(var Ie=Ye.length;Ie--;)if(Ye[Ie].scroller===G&&Ye[Ie]!==L)return;Ft(G,"resize",xo),Ft(G,"scroll",ls)}},L.kill=function(ne,ye){L.disable(ne,ye),Ee&&!ye&&Ee.kill(),l&&delete $c[l];var Ie=Ye.indexOf(L);Ie>=0&&Ye.splice(Ie,1),Ie===nn&&Ha>0&&nn--,Ie=0,Ye.forEach(function(ke){return ke.scroller===L.scroller&&(Ie=1)}),Ie||Zn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ne&&i.revert({kill:!1}),ye||i.kill()),Ze&&[Ze,at,Oe,W].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Po===L&&(Po=0),p&&(ae&&(ae.uncache=1),Ie=0,Ye.forEach(function(ke){return ke.pin===p&&Ie++}),Ie||(ae.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),ot&&ot(L),!i||!i.add||Ne?L.refresh():Le.delayedCall(.01,function(){return he||Re||L.refresh()})&&(Ne=.01)&&(he=Re=0),p&&MS()},a.register=function(n){return us||(Le=n||rm(),im()&&window.document&&a.enable(),us=Ta),us},a.defaults=function(n){if(n)for(var i in n)La[i]=n[i];return La},a.disable=function(n,i){Ta=0,Ye.forEach(function(s){return s[i?"kill":"disable"](n)}),Ft(Je,"wheel",ls),Ft(pt,"scroll",ls),clearInterval(Sa),Ft(pt,"touchcancel",ri),Ft(vt,"touchstart",ri),Aa(Ft,pt,"pointerdown,touchstart,mousedown",Yf),Aa(Ft,pt,"pointerup,touchend,mouseup",jf),il.kill(),Ea(Ft);for(var r=0;r<je.length;r+=3)Ca(Ft,je[r],je[r+1]),Ca(Ft,je[r],je[r+2])},a.enable=function(){if(Je=window,pt=document,Jn=pt.documentElement,vt=pt.body,Le&&(rl=Le.utils.toArray,gs=Le.utils.clamp,jc=Le.core.context||ri,ac=Le.core.suppressOverwrites||ri,Iu=Je.history.scrollRestoration||"auto",Le.core.globals("ScrollTrigger",a),vt)){Ta=1,Ct.register(Le),a.isTouch=Ct.isTouch,zi=Ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bt(Je,"wheel",ls),Zp=[Je,pt,Jn,vt],Le.matchMedia?(a.matchMedia=function(l){var c=Le.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Le.addEventListener("matchMediaInit",function(){return Uu()}),Le.addEventListener("matchMediaRevert",function(){return um()}),Le.addEventListener("matchMedia",function(){Er(0,1),Hr("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return hc(),hc})):console.warn("Requires GSAP 3.11.0 or later"),hc(),Bt(pt,"scroll",ls);var n=vt.style,i=n.borderTopStyle,r=Le.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=bi(vt),Dt.m=Math.round(s.top+Dt.sc())||0,an.m=Math.round(s.left+an.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Sa=setInterval(Zf,250),Le.delayedCall(.5,function(){return wa=0}),Bt(pt,"touchcancel",ri),Bt(vt,"touchstart",ri),Aa(Bt,pt,"pointerdown,touchstart,mousedown",Yf),Aa(Bt,pt,"pointerup,touchend,mouseup",jf),Yc=Le.utils.checkPrefix("transform"),Wa.push(Yc),us=rn(),il=Le.delayedCall(.2,Er).pause(),hs=[pt,"visibilitychange",function(){var l=Je.innerWidth,c=Je.innerHeight;pt.hidden?(Xf=l,qf=c):(Xf!==l||qf!==c)&&xo()},pt,"DOMContentLoaded",Er,Je,"load",Er,Je,"resize",xo],Ea(Bt),Ye.forEach(function(l){return l.enable(0,1)}),o=0;o<je.length;o+=3)Ca(Ft,je[o],je[o+1]),Ca(Ft,je[o],je[o+2])}},a.config=function(n){"limitCallbacks"in n&&(lc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sa)||(Sa=i)&&setInterval(Zf,i),"ignoreMobileResize"in n&&(em=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ea(Ft)||Ea(Bt,n.autoRefreshEvents||"none"),Qp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=dn(n),s=je.indexOf(r),o=Gr(r);~s&&je.splice(s,o?6:2),i&&(o?ci.unshift(Je,i,vt,i,Jn,i):ci.unshift(r,i))},a.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=($n(n)?dn(n):n).getBoundingClientRect(),o=s[r?Dr:Ir]*i||0;return r?s.right-o>0&&s.left+o<Je.innerWidth:s.bottom-o>0&&s.top+o<Je.innerHeight},a.positionInViewport=function(n,i,r){$n(n)&&(n=dn(n));var s=n.getBoundingClientRect(),o=s[r?Dr:Ir],l=i==null?o/2:i in sl?sl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/Je.innerWidth:(s.top+l)/Je.innerHeight},a.killAll=function(n){if(Ye.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(r){return r()})}},a}();et.version="3.11.4";et.saveStyles=function(a){return a?rl(a).forEach(function(e){if(e&&e.style){var t=bn.indexOf(e);t>=0&&bn.splice(t,5),bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),jc())}}):bn};et.revert=function(a,e){return Uu(!a,e)};et.create=function(a,e){return new et(a,e)};et.refresh=function(a){return a?xo():(us||et.register())&&Er(!0)};et.update=function(a){return++je.cache&&ar(a===!0?2:0)};et.clearScrollMemory=hm;et.maxScroll=function(a,e){return Ki(a,e?an:Dt)};et.getScrollFunc=function(a,e){return or(dn(a),e?an:Dt)};et.getById=function(a){return $c[a]};et.getAll=function(){return Ye.filter(function(a){return a.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!Hn};et.snapDirectional=ku;et.addEventListener=function(a,e){var t=Vr[a]||(Vr[a]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(a,e){var t=Vr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],p=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&ln(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return ln(r)&&(r=r(),Bt(et,"refresh",function(){return r=e.batchMax()})),rl(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(et.create(c))}),t};var id=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},dc=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ct.isTouch?" pinch-zoom":""):"none",e===Jn&&a(vt,t)},Da={auto:1,scroll:1},ES=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Le.core.getCache(r),o=rn(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Da[(l=Qn(r)).overflowY]||Da[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!Gr(r)&&(Da[(l=Qn(r)).overflowY]||Da[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},fm=function(e,t,n,i){return Ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ES,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Bt(pt,Ct.eventTypes[0],sd,!1,!0)},onDisable:function(){return Ft(pt,Ct.eventTypes[0],sd,!0)}})},AS=/(input|label|select|textarea)/i,rd,sd=function(e){var t=AS.test(e.target.tagName);(t||rd)&&(e._gsapAllow=!0,rd=t)},CS=function(e){Ba(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,o,l=dn(e.target)||Jn,c=Le.core.globals().ScrollSmoother,u=c&&c.get(),h=zi&&(e.content&&dn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=or(l,Dt),p=or(l,an),g=1,d=(Ct.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,m=0,_=ln(i)?function(){return i(s)}:function(){return i||2.8},M,x,v=fm(l,e.type,!0,r),b=function(){return x=!1},E=ri,A=ri,y=function(){o=Ki(l,Dt),A=gs(zi?1:0,o),n&&(E=gs(0,Ki(l,an))),M=Nr},S=function(){h._gsap.y=go(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=function(){if(x){requestAnimationFrame(b);var j=go(s.deltaY/2),V=A(f.v-j);if(h&&V!==f.v+f.offset){f.offset=V-f.v;var Z=go((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Z+", 0, 1)",h._gsap.y=Z+"px",f.cacheID=je.cache,ar()}return!0}f.offset&&S(),x=!0},U,G,I,D,F=function(){y(),U.isActive()&&U.vars.scrollY>o&&(f()>o?U.progress(1)&&f(o):U.resetTo("scrollY",o))};return h&&Le.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return zi&&H.type==="touchmove"&&R()||g>1.05&&H.type!=="touchstart"||s.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){var H=g;g=go((Je.visualViewport&&Je.visualViewport.scale||1)/d),U.pause(),H!==g&&dc(l,g>1.01?!0:n?!1:"x"),G=p(),I=f(),y(),M=Nr},e.onRelease=e.onGestureStart=function(H,j){if(f.offset&&S(),!j)D.restart(!0);else{je.cache++;var V=_(),Z,L;n&&(Z=p(),L=Z+V*.05*-H.velocityX/.227,V*=id(p,Z,L,Ki(l,an)),U.vars.scrollX=E(L)),Z=f(),L=Z+V*.05*-H.velocityY/.227,V*=id(f,Z,L,Ki(l,Dt)),U.vars.scrollY=A(L),U.invalidate().duration(V).play(.01),(zi&&U.vars.scrollY>=o||Z>=o-1)&&Le.to({},{onUpdate:F,duration:V})}},e.onWheel=function(){U._ts&&U.pause(),rn()-m>1e3&&(M=0,m=rn())},e.onChange=function(H,j,V,Z,L){if(Nr!==M&&y(),j&&n&&p(E(Z[2]===j?G+(H.startX-H.x):p()+j-Z[1])),V){f.offset&&S();var fe=L[2]===V,B=fe?I+H.startY-H.y:f()+V-L[1],J=A(B);fe&&B!==J&&(I+=J-B),f(J)}(V||j)&&ar()},e.onEnable=function(){dc(l,n?!1:"x"),et.addEventListener("refresh",F),Bt(Je,"resize",F),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),v.enable()},e.onDisable=function(){dc(l,!0),Ft(Je,"resize",F),et.removeEventListener("refresh",F),v.kill()},e.lockAxis=e.lockAxis!==!1,s=new Ct(e),s.iOS=zi,zi&&!f()&&f(1),zi&&Le.ticker.add(ri),D=s._dc,U=Le.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:D.vars.onComplete}),s};et.sort=function(a){return Ye.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};et.observe=function(a){return new Ct(a)};et.normalizeScroll=function(a){if(typeof a>"u")return Mn;if(a===!0&&Mn)return Mn.enable();if(a===!1)return Mn&&Mn.kill();var e=a instanceof Ct?a:CS(a);return Mn&&Mn.target===e.target&&Mn.kill(),Gr(e.target)&&(Mn=e),e};et.core={_getVelocityProp:qc,_inputObserver:fm,_scrollers:je,_proxies:ci,bridge:{ss:function(){Hn||Hr("scrollStart"),Hn=rn()},ref:function(){return qt}}};rm()&&Le.registerPlugin(et);tl.registerPlugin(et);const LS=document.getElementById("background"),ht=new Id;ht.position.set(-35,0,-10);ht.rotateY(1);ht.background=null;const zu=new Yt(75,window.innerWidth/window.innerHeight,.01,1001),Di=new Id;Di.background=null;const lr=new Yt(75,window.innerWidth/window.innerHeight,.01,1001),Ar=new Hi;Ar.position.set(0,0,-5);Di.add(Ar);Ar.add(lr);Di.add(ht);const RS=new Hd,qr=new lu({canvas:LS,antialias:!0,powerPreference:"high-performance",alpha:!0});qr.setPixelRatio(window.devicePixelRatio);qr.setSize(window.innerWidth,window.innerHeight);zu.position.setZ(30);zu.position.setY(-7);lr.position.setZ(30);lr.position.setY(-7);const Es=new MM;qr.render(Di,lr);qr.autoClear=!1;qr.render(ht,zu);function PS(){lr.aspect=window.innerWidth/window.innerHeight,lr.updateProjectionMatrix(),qr.setSize(window.innerWidth,window.innerHeight);let a=Di.getObjectByName("flower");if(a&&window.innerWidth<=1700&&Di.remove(a),er.length>=4)for(const e of er)window.innerWidth<=1200&&ht.remove(e),window.innerWidth<=1500&&window.innerWidth>1200&&(e.position.x=15,e.position.z=0),window.innerWidth<=1700&&window.innerWidth>1500&&(e.position.x=8,e.position.z=-7),window.innerWidth>1700&&(e.position.x=7,e.position.z=-10)}window.addEventListener("resize",PS,!1);const dm=new pu(16711935,1),pm=new pu(13434828,1);dm.position.set(5,10,0);pm.position.set(-15,5,20);const DS=new lM(16777215,1);ht.add(dm,pm,DS);const IS=mm("src/img/skybox/radiance"),NS=mm("src/img/skybox/irradiance");function mm(a){const e=[a+"/posX.jpg",a+"/negX.jpg",a+"/posY.jpg",a+"/negY.jpg",a+"/posZ.jpg",a+"/negZ.jpg"];return new nM().load(e)}let $o=new yM;const Do=new vM(NS,IS,$o);$o.filmThickness=576;$o.refractiveIndexFilm=1.52;$o.refractiveIndexBase=15;$o.boost=5;window.innerWidth>1700&&Es.load("src/models/daisy_flower.glb",a=>{const e=a.scene;e.name="flower",e.position.set(-10,-32,0),e.scale.set(2,2,2),e.rotation.set(.3,270,-.2),Di.add(e);const t=e.getObjectByName("Object_9").material;t.color={r:1,g:0,b:1},t.map=void 0,t.emissive={r:.8,g:1,b:.85},t.emissiveMap=RS.load("src/img/texture4.jpg"),t.emissiveIntensity=1,t.metalness=1,t.roughness=.25,t.reflectivity=1,t.transmission=1,t.iridescence=1,t.attenuationColor={r:1,g:0,b:1},t.sheen=1,t.sheenRoughness=1},void 0,function(a){console.error(a)});Es.load("src/models/splash.glb",a=>{const e=a.scene;e.name="liquid",e.position.set(10,-17,-10),e.scale.set(10,20,40),e.rotation.set(0,-.1,-.5),ht.add(e),ht.traverse(function(t){t.material&&(t.material=Do)})},void 0,function(a){console.error(a)});const er=[],Or=50;window.innerWidth>1200&&(Es.load("src/models/smile_icon.glb",a=>{const e=a.scene;e.position.set(20,-9,44),e.rotateY(1.5),e.scale.set(70,70,70),window.innerWidth>900&&ht.add(e);let t=e.clone();t.name="smile",t.position.set(4,-10,-10),t.scale.set(72,72,72),window.innerWidth<=1500&&window.innerWidth>1200&&(t.position.x=15,t.position.y=-4,t.position.z=0),window.innerWidth<=1700&&window.innerWidth>1500&&(t.position.x=8,t.position.y=-5,t.position.z=-7),t.rotateY(1.5),t.position.y-=Or*6,ht.add(t),ht.traverse(function(n){n.material&&(n.material=Do)}),er.push(t)},void 0,function(a){console.error(a)}),Es.load("src/models/education.glb",a=>{const e=a.scene;e.name="education",e.position.set(4,-13,-10),window.innerWidth<=1500&&window.innerWidth>1200&&(e.position.x=15,e.position.y=-10,e.position.z=0),window.innerWidth<=1700&&window.innerWidth>1500&&(e.position.x=8,e.position.y=-12,e.position.z=-7),e.position.y-=Or,e.scale.set(8.5,11,8.5),e.rotateX(.3),ht.add(e),ht.traverse(function(t){t.material&&(t.material=Do)}),er.push(e)},void 0,function(a){console.error(a)}),Es.load("src/models/laptop.glb",a=>{const e=a.scene;e.name="laptop",e.position.set(4,-15,-10),window.innerWidth<=1500&&window.innerWidth>1200&&(e.position.x=17,e.position.y=-15,e.position.z=0),window.innerWidth<=1700&&window.innerWidth>1500&&(e.position.x=10,e.position.y=-13,e.position.z=-7),e.position.y-=Or*2,e.scale.set(.18,.18,.18),e.rotateX(.3),e.rotateY(.2),ht.add(e),ht.traverse(function(t){t.material&&(t.material=Do)}),er.push(e)},void 0,function(a){console.error(a)}));Es.load("src/models/cog.glb",a=>{const e=a.scene;e.name="cog",e.position.set(4,-10,-10),window.innerWidth<=1500&&window.innerWidth>1200&&(e.position.x=15,e.position.y=-6,e.position.z=0),window.innerWidth<=1700&&window.innerWidth>1500&&(e.position.x=8,e.position.y=-8,e.position.z=-7),e.position.y-=Or*3,e.scale.set(6.5,7,6.5),e.rotateX(1.5),ht.add(e),ht.traverse(function(t){t.material&&(t.material=Do)}),er.push(e)},void 0,function(a){console.error(a)});const Gs={};Gs.x=0;Gs.y=0;window.addEventListener("mousemove",a=>{Gs.x=a.clientX/window.innerWidth-.5,Gs.y=a.clientY/window.innerHeight-.5});let Nn=window.scrollY,uo=0,wn;window.addEventListener("scroll",()=>{Nn=window.scrollY;let a;const e=Math.round(Nn/window.innerHeight);if(e!=uo){a=uo;let t;if(uo=e,er.length>=4&&window.innerWidth>1200){switch(uo){case 1:wn=ht.getObjectByName("education");break;case 2:wn=ht.getObjectByName("laptop");break;case 3:wn=ht.getObjectByName("cog");break;case 6:wn=ht.getObjectByName("smile");break}switch(a){case 1:t=ht.getObjectByName("education");break;case 2:t=ht.getObjectByName("laptop");break;case 3:t=ht.getObjectByName("cog");break;case 6:t=ht.getObjectByName("smile");break}wn&&tl.to(wn.position,{duration:.5,ease:"power2.inOut",y:"+=10"}),t&&tl.to(t.position,{duration:1.5,ease:"power2.inOut",y:"-=10"})}}});let pc=0;const OS=.004;function gm(){requestAnimationFrame(gm),wn&&er.length>=4&&window.innerWidth>1200&&(pc+=OS,(wn.name==="laptop"||wn.name==="smile")&&(wn.rotation.y=Math.sin(pc*15)*.07),(wn.name==="education"||wn.name==="cog")&&(wn.rotation.y=+pc*1.5));const a=ht.getObjectByName("liquid");a&&(a.position.y=-Nn/window.innerHeight*Or*.95-17,a.position.x=.002*Nn+10,a.rotation.x=5e-5*Nn,a.rotation.y=-85e-6*Nn);const e=Di.getObjectByName("flower");if(e&&(e.position.x=1e-4*Nn-10,e.position.y=-Nn/window.innerHeight*Or*1.004-28,e.position.z=-5e-4*Nn,e.rotation.x=5e-5*Nn+.3,e.rotation.y=-5e-5*Nn-.1+270),window.innerWidth>900){const t=Gs.x,n=-Gs.y;Ar.position.x+=t-Ar.position.x,Ar.position.y+=n-Ar.position.y}lr.position.y=-Nn/window.innerHeight*Or-7.3,qr.render(Di,lr)}gm();
