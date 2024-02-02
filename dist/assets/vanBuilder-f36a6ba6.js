import"./modulepreload-polyfill-3cfb730f.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="158",Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ju=0,Ec=1,$u=2,Hh=1,Gh=2,An=3,Pn=0,Gt=1,an=2,qn=0,ss=1,bc=2,Tc=3,wc=4,ju=5,fi=100,Qu=101,ed=102,Ac=103,Rc=104,td=200,nd=201,id=202,sd=203,xa=204,va=205,rd=206,od=207,ad=208,cd=209,ld=210,hd=211,ud=212,dd=213,fd=214,pd=0,md=1,gd=2,Qr=3,_d=4,yd=5,xd=6,vd=7,ho=0,Md=1,Sd=2,Yn=0,Ed=1,bd=2,Td=3,wd=4,Ad=5,Cc="attached",Rd="detached",Oa=300,xi=301,vi=302,eo=303,to=304,js=306,Mi=1e3,Kt=1001,Vs=1002,vt=1003,no=1004,Fs=1005,zt=1006,Fa=1007,Jn=1008,Kn=1009,Cd=1010,Ld=1011,Ba=1012,Vh=1013,Wn=1014,Cn=1015,Ws=1016,Wh=1017,Xh=1018,gi=1020,Pd=1021,en=1023,Id=1024,Dd=1025,_i=1026,cs=1027,Nd=1028,qh=1029,Ud=1030,Yh=1031,Kh=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,Lc=35840,Pc=35841,Ic=35842,Dc=35843,Od=36196,Nc=37492,Uc=37496,Oc=37808,Fc=37809,Bc=37810,zc=37811,kc=37812,Hc=37813,Gc=37814,Vc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Kc=37820,Zc=37821,Lo=36492,Jc=36494,$c=36495,Fd=36283,jc=36284,Qc=36285,el=36286,Xs=2300,ls=2301,Po=2302,tl=2400,nl=2401,il=2402,Bd=2500,zd=0,Zh=1,Ma=2,Jh=3e3,yi=3001,kd=3200,Hd=3201,wi=0,Gd=1,tn="",lt="srgb",St="srgb-linear",za="display-p3",uo="display-p3-linear",io="linear",ot="srgb",so="rec709",ro="p3",Ii=7680,sl=519,Vd=512,Wd=513,Xd=514,qd=515,Yd=516,Kd=517,Zd=518,Jd=519,Sa=35044,rl="300 es",Ea=1035,Ln=2e3,oo=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const rs=Math.PI/180,hs=180/Math.PI;function nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function ka(s,e){return(s%e+e)%e}function $d(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jd(s,e,t){return s!==e?(t-s)/(e-s):0}function Bs(s,e,t){return(1-t)*s+t*e}function Qd(s,e,t,n){return Bs(s,e,1-Math.exp(-t*n))}function ef(s,e=1){return e-Math.abs(ka(s,e*2)-e)}function tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rf(s,e){return s+Math.random()*(e-s)}function of(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(ol=s);let e=ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(s){return s*rs}function lf(s){return s*hs}function ba(s){return(s&s-1)===0&&s!==0}function $h(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ao(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jh={DEG2RAD:rs,RAD2DEG:hs,generateUUID:nn,clamp:yt,euclideanModulo:ka,mapLinear:$d,inverseLerp:jd,lerp:Bs,damp:Qd,pingpong:ef,smoothstep:tf,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:cf,radToDeg:lf,isPowerOfTwo:ba,ceilPowerOfTwo:$h,floorPowerOfTwo:ao,setQuaternionFromProperEuler:hf,normalize:nt,denormalize:pn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],x=i[1],_=i[4],v=i[7],E=i[2],R=i[5],w=i[8];return r[0]=o*y+a*x+c*E,r[3]=o*m+a*_+c*R,r[6]=o*p+a*v+c*w,r[1]=l*y+h*x+u*E,r[4]=l*m+h*_+u*R,r[7]=l*p+h*v+u*w,r[2]=d*y+f*x+g*E,r[5]=d*m+f*_+g*R,r[8]=d*p+f*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=d*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Xe;function Qh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const uf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function es(s,e){return new uf[s](e)}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function df(){const s=qs("canvas");return s.style.display="block",s}const al={};function zs(s){s in al||(al[s]=!0,console.warn(s))}const cl=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[St]:{transfer:io,primaries:so,toReference:s=>s,fromReference:s=>s},[lt]:{transfer:ot,primaries:so,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[uo]:{transfer:io,primaries:ro,toReference:s=>s.applyMatrix3(ll),fromReference:s=>s.applyMatrix3(cl)},[za]:{transfer:ot,primaries:ro,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ll),fromReference:s=>s.applyMatrix3(cl).convertLinearToSRGB()}},ff=new Set([St,uo]),je={enabled:!0,_workingColorSpace:St,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ff.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=rr[e].toReference,i=rr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return rr[s].primaries},getTransfer:function(s){return s===tn?io:rr[s].transfer}};function os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Di;class eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=qs("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class ts{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(No(i[o].image)):r.push(No(i[o]))}else r=No(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function No(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class Rt extends Ai{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Kt,i=Kt,r=zt,o=Jn,a=en,c=Kn,l=Rt.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=nn(),this.name="",this.source=new ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yi?lt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?yi:Jh}set encoding(e){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?lt:tn}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Oa;Rt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,v=(f+1)/2,E=(p+1)/2,R=(h+d)/4,w=(u+y)/4,I=(g+m)/4;return _>v&&_>E?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=R/n,r=w/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=I/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yi?lt:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ts(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _f extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),R=Math.atan2(E,p*x);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const v=a*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+y*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new b,hl=new _t;class gn{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),ar.subVectors(this.max,Ms),Ni.subVectors(e.a,Ms),Ui.subVectors(e.b,Ms),Oi.subVectors(e.c,Ms),Nn.subVectors(Ui,Ni),Un.subVectors(Oi,Ui),ti.subVectors(Ni,Oi);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!Oo(t,Ni,Ui,Oi,ar)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ni,Ui,Oi,ar))?!1:(cr.crossVectors(Nn,Un),t=[cr.x,cr.y,cr.z],Oo(t,Ni,Ui,Oi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new b,new b,new b,new b,new b,new b,new b,new b],sn=new b,or=new gn,Ni=new b,Ui=new b,Oi=new b,Nn=new b,Un=new b,ti=new b,Ms=new b,ar=new b,cr=new b,ni=new b;function Oo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ni.fromArray(s,r);const a=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yf=new gn,Ss=new b,Fo=new b;class ln{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Fo)),this.expandByPoint(Ss.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new b,Bo=new b,lr=new b,On=new b,zo=new b,hr=new b,ko=new b;class gs{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=On.dot(this.direction),c=-On.dot(lr),l=On.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bo).addScaledVector(lr,d),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){zo.subVectors(t,e),hr.subVectors(n,e),ko.crossVectors(zo,hr);let o=this.direction.dot(ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const c=a*this.direction.dot(hr.crossVectors(On,hr));if(c<0)return null;const l=a*this.direction.dot(zo.cross(On));if(l<0||c+l>o)return null;const h=-a*On.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,vf)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Fn.crossVectors(n,Xt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Fn.crossVectors(n,Xt)),Fn.normalize(),ur.crossVectors(Xt,Fn),i[0]=Fn.x,i[4]=ur.x,i[8]=Xt.x,i[1]=Fn.y,i[5]=ur.y,i[9]=Xt.y,i[2]=Fn.z,i[6]=ur.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],E=n[15],R=i[0],w=i[4],I=i[8],M=i[12],A=i[1],B=i[5],K=i[9],Q=i[13],D=i[2],F=i[6],q=i[10],V=i[14],ne=i[3],W=i[7],j=i[11],U=i[15];return r[0]=o*R+a*A+c*D+l*ne,r[4]=o*w+a*B+c*F+l*W,r[8]=o*I+a*K+c*q+l*j,r[12]=o*M+a*Q+c*V+l*U,r[1]=h*R+u*A+d*D+f*ne,r[5]=h*w+u*B+d*F+f*W,r[9]=h*I+u*K+d*q+f*j,r[13]=h*M+u*Q+d*V+f*U,r[2]=g*R+y*A+m*D+p*ne,r[6]=g*w+y*B+m*F+p*W,r[10]=g*I+y*K+m*q+p*j,r[14]=g*M+y*Q+m*V+p*U,r[3]=x*R+_*A+v*D+E*ne,r[7]=x*w+_*B+v*F+E*W,r[11]=x*I+_*K+v*q+E*j,r[15]=x*M+_*Q+v*V+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+y*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=u*m*l-y*d*l+y*c*f-a*m*f-u*c*p+a*d*p,_=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*y*l-g*u*l+g*a*f-o*y*f-h*a*p+o*u*p,E=g*u*c-h*y*c-g*a*d+o*y*d+h*a*m-o*u*m,R=t*x+n*_+i*v+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=x*w,e[1]=(y*d*r-u*m*r-y*i*f+n*m*f+u*i*p-n*d*p)*w,e[2]=(a*m*r-y*c*r+y*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=_*w,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=v*w,e[9]=(g*u*r-h*y*r-g*n*f+t*y*f+h*n*p-t*u*p)*w,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(h*y*i-g*u*i+g*n*d-t*y*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*y*i-g*n*c+t*y*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,x=c*l,_=c*h,v=c*u,E=n.x,R=n.y,w=n.z;return i[0]=(1-(y+p))*E,i[1]=(f+v)*E,i[2]=(g-_)*E,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+x)*R,i[7]=0,i[8]=(g+_)*w,i[9]=(m-x)*w,i[10]=(1-(d+y))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const l=1/r,h=1/o,u=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ln){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Ln)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ln){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,y;if(a===Ln)g=(o+r)*u,y=-2*u;else if(a===oo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new b,rn=new ke,xf=new b(0,0,0),vf=new b(1,1,1),Fn=new b,ur=new b,Xt=new b,ul=new ke,dl=new _t;class Qs{constructor(e=0,t=0,n=0,i=Qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qs.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mf=0;const fl=new b,Bi=new _t,En=new ke,dr=new b,Es=new b,Sf=new b,Ef=new _t,pl=new b(1,0,0),ml=new b(0,1,0),gl=new b(0,0,1),bf={type:"added"},Tf={type:"removed"};class Qe extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new b,t=new Qs,n=new _t,i=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Xe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Es,dr,this.up):En.lookAt(dr,Es,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(En),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new b(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new b,bn=new b,Ho=new b,Tn=new b,zi=new b,ki=new b,_l=new b,Go=new b,Vo=new b,Wo=new b;let fr=!1;class Yt{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),bn.subVectors(n,t),Ho.subVectors(e,t);const o=on.dot(on),a=on.dot(bn),c=on.dot(Ho),l=bn.dot(bn),h=bn.dot(Ho),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,i,r,o,a,c){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Tn),c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),bn.subVectors(e,t),on.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),ki.subVectors(r,n),Go.subVectors(e,n);const c=zi.dot(Go),l=ki.dot(Go);if(c<=0&&l<=0)return t.copy(n);Vo.subVectors(e,i);const h=zi.dot(Vo),u=ki.dot(Vo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(zi,o);Wo.subVectors(e,r);const f=zi.dot(Wo),g=ki.dot(Wo);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _l.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(_l,a);const p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(zi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=ka(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xo(o,r,e+1/3),this.g=Xo(o,r,e),this.b=Xo(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(yt(Pt.r*255,0,255))*65536+Math.round(yt(Pt.g*255,0,255))*256+Math.round(yt(Pt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,r=Pt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=lt){je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(pr);const n=Bs(Bn.h,pr.h,t),i=Bs(Bn.s,pr.s,t),r=Bs(Bn.l,pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Se;Se.NAMES=nu;let wf=0;class Ct extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=ss,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mn extends Ct{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new b,mr=new J;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRange={offset:0,count:-1},this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class iu extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class su extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Af=0;const $t=new ke,qo=new Qe,Hi=new b,qt=new gn,bs=new gn,wt=new b;class tt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?su:iu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(qt.min,bs.min),qt.expandByPoint(wt),wt.addVectors(qt.max,bs.max),qt.expandByPoint(wt)):(qt.expandByPoint(bs.min),qt.expandByPoint(bs.max))}qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)wt.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(e,l),wt.add(Hi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new b,h[A]=new b;const u=new b,d=new b,f=new b,g=new J,y=new J,m=new J,p=new b,x=new b;function _(A,B,K){u.fromArray(i,A*3),d.fromArray(i,B*3),f.fromArray(i,K*3),g.fromArray(o,A*2),y.fromArray(o,B*2),m.fromArray(o,K*2),d.sub(u),f.sub(u),y.sub(g),m.sub(g);const Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(Q),x.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(Q),l[A].add(p),l[B].add(p),l[K].add(p),h[A].add(x),h[B].add(x),h[K].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let A=0,B=v.length;A<B;++A){const K=v[A],Q=K.start,D=K.count;for(let F=Q,q=Q+D;F<q;F+=3)_(n[F+0],n[F+1],n[F+2])}const E=new b,R=new b,w=new b,I=new b;function M(A){w.fromArray(r,A*3),I.copy(w);const B=l[A];E.copy(B),E.sub(w.multiplyScalar(w.dot(B))).normalize(),R.crossVectors(I,B);const Q=R.dot(h[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=Q}for(let A=0,B=v.length;A<B;++A){const K=v[A],Q=K.start,D=K.count;for(let F=Q,q=Q+D;F<q;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ke,ii=new gs,gr=new ln,xl=new b,Gi=new b,Vi=new b,Wi=new b,Yo=new b,_r=new b,yr=new J,xr=new J,vr=new J,vl=new b,Ml=new b,Sl=new b,Mr=new b,Sr=new b;class ge extends Qe{constructor(e=new tt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Yo.fromBufferAttribute(u,e),o?_r.addScaledVector(Yo,h):_r.addScaledVector(Yo.sub(t),h))}t.add(_r)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(gr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(gr,xl)===null||ii.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(yl.copy(r).invert(),ii.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=_;v<E;v+=3){const R=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);i=Er(this,p,e,n,l,h,u,R,w,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=Er(this,o,e,n,l,h,u,x,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=_;v<E;v+=3){const R=v,w=v+1,I=v+2;i=Er(this,p,e,n,l,h,u,R,w,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=m,_=m+1,v=m+2;i=Er(this,o,e,n,l,h,u,x,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Rf(s,e,t,n,i,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Pn,a),c===null)return null;Sr.copy(a),Sr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Sr);return l<t.near||l>t.far?null:{distance:l,point:Sr.clone(),object:s}}function Er(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Gi),s.getVertexPosition(c,Vi),s.getVertexPosition(l,Wi);const h=Rf(s,e,t,n,Gi,Vi,Wi,Mr);if(h){i&&(yr.fromBufferAttribute(i,a),xr.fromBufferAttribute(i,c),vr.fromBufferAttribute(i,l),h.uv=Yt.getInterpolation(Mr,Gi,Vi,Wi,yr,xr,vr,new J)),r&&(yr.fromBufferAttribute(r,a),xr.fromBufferAttribute(r,c),vr.fromBufferAttribute(r,l),h.uv1=Yt.getInterpolation(Mr,Gi,Vi,Wi,yr,xr,vr,new J),h.uv2=h.uv1),o&&(vl.fromBufferAttribute(o,a),Ml.fromBufferAttribute(o,c),Sl.fromBufferAttribute(o,l),h.normal=Yt.getInterpolation(Mr,Gi,Vi,Wi,vl,Ml,Sl,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new b,materialIndex:0};Yt.getNormal(Gi,Vi,Wi,u.normal),h.face=u}return h}class ft extends tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function g(y,m,p,x,_,v,E,R,w,I,M){const A=v/w,B=E/I,K=v/2,Q=E/2,D=R/2,F=w+1,q=I+1;let V=0,ne=0;const W=new b;for(let j=0;j<q;j++){const U=j*B-Q;for(let X=0;X<F;X++){const fe=X*A-K;W[y]=fe*x,W[m]=U*_,W[p]=D,l.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(X/w),u.push(1-j/I),V+=1}}for(let j=0;j<I;j++)for(let U=0;U<w;U++){const X=d+U+F*j,fe=d+U+F*(j+1),me=d+(U+1)+F*(j+1),ve=d+(U+1)+F*j;c.push(X,fe,ve),c.push(fe,me,ve),ne+=6}a.addGroup(f,ne,M),f+=ne,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const n=us(s[t]);for(const i in n)e[i]=n[i]}return e}function Cf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ru(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}const Lf={clone:us,merge:Bt};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ct{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ou extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends ou{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class Df extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(Xi,qi,e,t);i.layers=this.layers,this.add(i);const r=new Dt(Xi,qi,e,t);r.layers=this.layers,this.add(r);const o=new Dt(Xi,qi,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Xi,qi,e,t);a.layers=this.layers,this.add(a);const c=new Dt(Xi,qi,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Xi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ga extends Rt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nf extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?lt:tn),this.texture=new Ga(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ft(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:qn});r.uniforms.tEquirect.value=t;const o=new ge(i,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=zt),new Df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ko=new b,Uf=new b,Of=new Xe;class Hn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ko.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),i=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new ln,br=new b;class Va{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],y=i[10],m=i[11],p=i[12],x=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+x).normalize(),n[3].setComponents(c-o,d-h,m-g,v-x).normalize(),n[4].setComponents(c-a,d-u,m-y,v-_).normalize(),t===Ln)n[5].setComponents(c+a,d+u,m+y,v+_).normalize();else if(t===oo)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(br.x=i.normal.x>0?e.max.x:e.min.x,br.y=i.normal.y>0?e.max.y:e.min.y,br.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ff(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,l),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class er extends tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let _=0;_<l;_++){const v=_*u-r;g.push(v,-x,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const _=x+l*p,v=x+l*(p+1),E=x+1+l*(p+1),R=x+1+l*p;f.push(_,v,R),f.push(v,E,R)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define MATCAP
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
}`,eg=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,sg=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
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
}`,og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Gf,alphatest_pars_fragment:Vf,aomap_fragment:Wf,aomap_pars_fragment:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:Kf,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:op,defaultnormal_vertex:ap,displacementmap_pars_vertex:cp,displacementmap_vertex:lp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:yp,fog_vertex:xp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:Ep,lightmap_fragment:bp,lightmap_pars_fragment:Tp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Dp,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Op,lights_fragment_maps:Fp,lights_fragment_end:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Gp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Kp,morphcolor_vertex:Zp,morphnormal_vertex:Jp,morphtarget_pars_vertex:$p,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:ym,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:Em,skinnormal_vertex:bm,specularmap_fragment:Tm,specularmap_pars_fragment:wm,tonemapping_fragment:Am,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Lm,uv_pars_fragment:Pm,uv_pars_vertex:Im,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Um,background_frag:Om,backgroundCube_vert:Fm,backgroundCube_frag:Bm,cube_vert:zm,cube_frag:km,depth_vert:Hm,depth_frag:Gm,distanceRGBA_vert:Vm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:Km,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:cg,points_vert:lg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},de={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},dn={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};dn.physical={uniforms:Bt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Tr={r:0,b:0,g:0};function mg(s,e,t,n,i,r,o){const a=new Se(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,c):_&&_.isColor&&(y(_,1),x=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===js)?(h===void 0&&(h=new ge(new ft(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:us(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=je.getTransfer(_.colorSpace)!==ot,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ge(new er(2,2),new In({name:"BackgroundMaterial",uniforms:us(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Tr,ru(s)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function gg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(D,F,q,V,ne){let W=!1;if(o){const j=y(V,q,F);l!==j&&(l=j,f(l.object)),W=p(D,V,q,ne),W&&x(D,V,q,ne)}else{const j=F.wireframe===!0;(l.geometry!==V.id||l.program!==q.id||l.wireframe!==j)&&(l.geometry=V.id,l.program=q.id,l.wireframe=j,W=!0)}ne!==null&&t.update(ne,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(D,F,q,V),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function y(D,F,q){const V=q.wireframe===!0;let ne=a[D.id];ne===void 0&&(ne={},a[D.id]=ne);let W=ne[F.id];W===void 0&&(W={},ne[F.id]=W);let j=W[V];return j===void 0&&(j=m(d()),W[V]=j),j}function m(D){const F=[],q=[],V=[];for(let ne=0;ne<i;ne++)F[ne]=0,q[ne]=0,V[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:V,object:D,attributes:{},index:null}}function p(D,F,q,V){const ne=l.attributes,W=F.attributes;let j=0;const U=q.getAttributes();for(const X in U)if(U[X].location>=0){const me=ne[X];let ve=W[X];if(ve===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;j++}return l.attributesNum!==j||l.index!==V}function x(D,F,q,V){const ne={},W=F.attributes;let j=0;const U=q.getAttributes();for(const X in U)if(U[X].location>=0){let me=W[X];me===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(me=D.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),ne[X]=ve,j++}l.attributes=ne,l.attributesNum=j,l.index=V}function _(){const D=l.newAttributes;for(let F=0,q=D.length;F<q;F++)D[F]=0}function v(D){E(D,0)}function E(D,F){const q=l.newAttributes,V=l.enabledAttributes,ne=l.attributeDivisors;q[D]=1,V[D]===0&&(s.enableVertexAttribArray(D),V[D]=1),ne[D]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),ne[D]=F)}function R(){const D=l.newAttributes,F=l.enabledAttributes;for(let q=0,V=F.length;q<V;q++)F[q]!==D[q]&&(s.disableVertexAttribArray(q),F[q]=0)}function w(D,F,q,V,ne,W,j){j===!0?s.vertexAttribIPointer(D,F,q,ne,W):s.vertexAttribPointer(D,F,q,V,ne,W)}function I(D,F,q,V){if(n.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ne=V.attributes,W=q.getAttributes(),j=F.defaultAttributeValues;for(const U in W){const X=W[U];if(X.location>=0){let fe=ne[U];if(fe===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),fe!==void 0){const me=fe.normalized,ve=fe.itemSize,Pe=t.get(fe);if(Pe===void 0)continue;const Oe=Pe.buffer,Le=Pe.type,Fe=Pe.bytesPerElement,Je=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||fe.gpuType===Vh);if(fe.isInterleavedBufferAttribute){const Ie=fe.data,L=Ie.stride,he=fe.offset;if(Ie.isInstancedInterleavedBuffer){for(let Z=0;Z<X.locationSize;Z++)E(X.location+Z,Ie.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Z=0;Z<X.locationSize;Z++)v(X.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Z=0;Z<X.locationSize;Z++)w(X.location+Z,ve/X.locationSize,Le,me,L*Fe,(he+ve/X.locationSize*Z)*Fe,Je)}else{if(fe.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)E(X.location+Ie,fe.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)v(X.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Ie=0;Ie<X.locationSize;Ie++)w(X.location+Ie,ve/X.locationSize,Le,me,ve*Fe,ve/X.locationSize*Ie*Fe,Je)}}else if(j!==void 0){const me=j[U];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(X.location,me);break;case 3:s.vertexAttrib3fv(X.location,me);break;case 4:s.vertexAttrib4fv(X.location,me);break;default:s.vertexAttrib1fv(X.location,me)}}}}R()}function M(){K();for(const D in a){const F=a[D];for(const q in F){const V=F[q];for(const ne in V)g(V[ne].object),delete V[ne];delete F[q]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const q in F){const V=F[q];for(const ne in V)g(V[ne].object),delete V[ne];delete F[q]}delete a[D.id]}function B(D){for(const F in a){const q=a[F];if(q[D.id]===void 0)continue;const V=q[D.id];for(const ne in V)g(V[ne].object),delete V[ne];delete q[D.id]}}function K(){Q(),h=!0,l!==c&&(l=c,f(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:v,disableUnusedAttributes:R}}function _g(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function yg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,v=o||e.has("OES_texture_float"),E=_&&v,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:R}}function xg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Hn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,_=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==y;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function vg(s){let e=new WeakMap;function t(o,a){return a===eo?o.mapping=xi:a===to&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===eo||a===to)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nf(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fo extends ou{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,El=[.125,.215,.35,.446,.526,.582],pi=20,Zo=new fo,bl=new Se;let Jo=null,$o=0,jo=0;const ui=(1+Math.sqrt(5))/2,Yi=1/ui,Tl=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,ui,Yi),new b(0,ui,-Yi),new b(Yi,0,ui),new b(-Yi,0,ui),new b(ui,Yi,0),new b(-ui,Yi,0)];class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,$o,jo),e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ws,format:en,colorSpace:St,depthBuffer:!1},i=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=Sg(r,e,t)}return i}_compileMaterial(e){const t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bl),h.toneMapping=Yn,h.autoClear=!1;const f=new mn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new ge(new ft,f);let y=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(bl),y=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;wr(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Tl[(i-1)%Tl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ge(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let x=0;for(let w=0;w<pi;++w){const I=w/y,M=Math.exp(-I*I/2);p.push(M),w===0?x+=M:w<m&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const v=this._sizeLods[i],E=3*v*(i>_-ns?i-_+ns:0),R=4*(this._cubeSize-v);wr(t,E,R,3*v,2*v),c.setRenderTarget(t),c.render(u,Zo)}}function Mg(s){const e=[],t=[],n=[];let i=s;const r=s-ns+1+El.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ns?c=El[o-s+ns-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,I=R>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];x.set(M,y*g*R),_.set(d,m*g*R);const A=[R,R,R,R,R,R];v.set(A,p*g*R)}const E=new tt;E.setAttribute("position",new xt(x,y)),E.setAttribute("uv",new xt(_,m)),E.setAttribute("faceIndex",new xt(v,p)),e.push(E),i>ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(s,e,t){const n=new Si(s,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sg(s,e,t){const n=new Float32Array(pi),i=new b(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Rl(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Cl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function Eg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===eo||c===to,h=c===xi||c===vi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new wl(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new wl(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tg(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let y=0;if(f!==null){const x=f.array;y=f.version;for(let _=0,v=x.length;_<v;_+=3){const E=x[_+0],R=x[_+1],w=x[_+2];d.push(E,R,R,w,w,E)}}else if(g!==void 0){const x=g.array;y=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){const E=_+0,R=_+1,w=_+2;d.push(E,R,R,w,w,E)}}else return;const m=new(Qh(d)?su:iu)(d,1);m.version=y;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wg(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,g){if(g===0)return;let y,m;if(i)y=s,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](r,f,a,d*c,g),t.update(f,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Ag(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rg(s,e){return s[0]-e[0]}function Cg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Lg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let D=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let I=0;x===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let M=h.attributes.position.count*I,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const B=new Float32Array(M*A*4*g),K=new tu(B,M,A,g);K.type=Cn,K.needsUpdate=!0;const Q=I*4;for(let F=0;F<g;F++){const q=E[F],V=R[F],ne=w[F],W=M*A*4*F;for(let j=0;j<q.count;j++){const U=j*Q;x===!0&&(o.fromBufferAttribute(q,j),B[W+U+0]=o.x,B[W+U+1]=o.y,B[W+U+2]=o.z,B[W+U+3]=0),_===!0&&(o.fromBufferAttribute(V,j),B[W+U+4]=o.x,B[W+U+5]=o.y,B[W+U+6]=o.z,B[W+U+7]=0),v===!0&&(o.fromBufferAttribute(ne,j),B[W+U+8]=o.x,B[W+U+9]=o.y,B[W+U+10]=o.z,B[W+U+11]=ne.itemSize===4?o.w:1)}}y={count:g,texture:K,size:new J(M,A)},r.set(h,y),h.addEventListener("dispose",D)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const v=g[_];v[0]=_,v[1]=d[_]}g.sort(Cg);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Rg);const y=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const v=a[_],E=v[0],R=v[1];E!==Number.MAX_SAFE_INTEGER&&R?(y&&h.getAttribute("morphTarget"+_)!==y[E]&&h.setAttribute("morphTarget"+_,y[E]),m&&h.getAttribute("morphNormal"+_)!==m[E]&&h.setAttribute("morphNormal"+_,m[E]),i[_]=R,p+=R):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Pg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const cu=new Rt,lu=new tu,hu=new _f,uu=new Ga,Ll=[],Pl=[],Il=new Float32Array(16),Dl=new Float32Array(9),Nl=new Float32Array(4);function _s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ll[i];if(r===void 0&&(r=new Float32Array(i),Ll[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function po(s,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function Og(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Nl.set(n),s.uniformMatrix2fv(this.addr,!1,Nl),bt(t,n)}}function Fg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Dl.set(n),s.uniformMatrix3fv(this.addr,!1,Dl),bt(t,n)}}function Bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Il.set(n),s.uniformMatrix4fv(this.addr,!1,Il),bt(t,n)}}function zg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function Yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cu,i)}function Kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hu,i)}function Zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uu,i)}function Jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lu,i)}function $g(s){switch(s){case 5126:return Ig;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Og;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(s,e){s.uniform1fv(this.addr,e)}function Qg(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function e_(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function t_(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function n_(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function i_(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function s_(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function r_(s,e){s.uniform1iv(this.addr,e)}function o_(s,e){s.uniform2iv(this.addr,e)}function a_(s,e){s.uniform3iv(this.addr,e)}function c_(s,e){s.uniform4iv(this.addr,e)}function l_(s,e){s.uniform1uiv(this.addr,e)}function h_(s,e){s.uniform2uiv(this.addr,e)}function u_(s,e){s.uniform3uiv(this.addr,e)}function d_(s,e){s.uniform4uiv(this.addr,e)}function f_(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||cu,r[o])}function p_(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hu,r[o])}function m_(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uu,r[o])}function g_(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lu,r[o])}function __(s){switch(s){case 5126:return jg;case 35664:return Qg;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class y_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$g(t.type)}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=__(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Ul(s,e){s.seq.push(e),s.map[e.id]=e}function M_(s,e,t){const n=s.name,i=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ul(t,l===void 0?new y_(a,s,e):new x_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new v_(a),Ul(t,u)),t=u}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);M_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ol(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const S_=37297;let E_=0;function b_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function T_(s){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s);let n;switch(e===t?n="":e===ro&&t===so?n="LinearDisplayP3ToLinearSRGB":e===so&&t===ro&&(n="LinearSRGBToLinearDisplayP3"),s){case St:case uo:return[n,"LinearTransferOETF"];case lt:case za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+b_(s.getShaderSource(e),o)}else return i}function w_(s,e){const t=T_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function A_(s,e){let t;switch(e){case Ed:t="Linear";break;case bd:t="Reinhard";break;case Td:t="OptimizedCineon";break;case wd:t="ACESFilmic";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function C_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function Bl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(P_,D_)}const I_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D_(s,e){let t=Ve[e];if(t===void 0){const n=I_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(s){return s.replace(N_,U_)}function U_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function F_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case vi:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function k_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=O_(t),l=F_(t),h=B_(t),u=z_(t),d=k_(t),f=t.isWebGL2?"":R_(t),g=C_(r),y=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[f,Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Ta(o),o=Bl(o,t),o=zl(o,t),a=Ta(a),a=Bl(a,t),a=zl(a,t),o=kl(o),a=kl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,v=x+p+a,E=Ol(i,i.VERTEX_SHADER,_),R=Ol(i,i.FRAGMENT_SHADER,v);i.attachShader(y,E),i.attachShader(y,R),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function w(B){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(y).trim(),Q=i.getShaderInfoLog(E).trim(),D=i.getShaderInfoLog(R).trim();let F=!0,q=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,E,R);else{const V=Fl(i,E,"vertex"),ne=Fl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+V+`
`+ne)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Q===""||D==="")&&(q=!1);q&&(B.diagnostics={runnable:F,programLog:K,vertexShader:{log:Q,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(E),i.deleteShader(R),I=new Jr(i,y),M=L_(i,y)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(y,S_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=R,this}let G_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W_(e),t.set(e,n)),n}}class W_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function X_(s,e,t,n,i,r,o){const a=new Ha,c=new V_,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,A,B,K,Q){const D=K.fog,F=Q.geometry,q=M.isMeshStandardMaterial?K.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),ne=V&&V.mapping===js?V.image.height:null,W=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,U=j!==void 0?j.length:0;let X=0;F.morphAttributes.position!==void 0&&(X=1),F.morphAttributes.normal!==void 0&&(X=2),F.morphAttributes.color!==void 0&&(X=3);let fe,me,ve,Pe;if(W){const pt=dn[W];fe=pt.vertexShader,me=pt.fragmentShader}else fe=M.vertexShader,me=M.fragmentShader,c.update(M),ve=c.getVertexShaderID(M),Pe=c.getFragmentShaderID(M);const Oe=s.getRenderTarget(),Le=Q.isInstancedMesh===!0,Fe=!!M.map,Je=!!M.matcap,Ie=!!V,L=!!M.aoMap,he=!!M.lightMap,Z=!!M.bumpMap,se=!!M.normalMap,ee=!!M.displacementMap,we=!!M.emissiveMap,_e=!!M.metalnessMap,Me=!!M.roughnessMap,De=M.anisotropy>0,qe=M.clearcoat>0,at=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,z=De&&!!M.anisotropyMap,re=qe&&!!M.clearcoatMap,te=qe&&!!M.clearcoatNormalMap,oe=qe&&!!M.clearcoatRoughnessMap,Ee=at&&!!M.iridescenceMap,ce=at&&!!M.iridescenceThicknessMap,pe=C&&!!M.sheenColorMap,P=C&&!!M.sheenRoughnessMap,le=!!M.specularMap,$=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Te=S&&!!M.transmissionMap,Ce=S&&!!M.thicknessMap,be=!!M.gradientMap,xe=!!M.alphaMap,Ye=M.alphaTest>0,N=!!M.alphaHash,ue=!!M.extensions,ie=!!F.attributes.uv1,Y=!!F.attributes.uv2,ae=!!F.attributes.uv3;let Re=Yn;return M.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Re=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:me,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:Pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?s.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:St,map:Fe,matcap:Je,envMap:Ie,envMapMode:Ie&&V.mapping,envMapCubeUVHeight:ne,aoMap:L,lightMap:he,bumpMap:Z,normalMap:se,displacementMap:d&&ee,emissiveMap:we,normalMapObjectSpace:se&&M.normalMapType===Gd,normalMapTangentSpace:se&&M.normalMapType===wi,metalnessMap:_e,roughnessMap:Me,anisotropy:De,anisotropyMap:z,clearcoat:qe,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,iridescence:at,iridescenceMap:Ee,iridescenceThicknessMap:ce,sheen:C,sheenColorMap:pe,sheenRoughnessMap:P,specularMap:le,specularColorMap:$,specularIntensityMap:Ne,transmission:S,transmissionMap:Te,thicknessMap:Ce,gradientMap:be,opaque:M.transparent===!1&&M.blending===ss,alphaMap:xe,alphaTest:Ye,alphaHash:N,combine:M.combine,mapUv:Fe&&y(M.map.channel),aoMapUv:L&&y(M.aoMap.channel),lightMapUv:he&&y(M.lightMap.channel),bumpMapUv:Z&&y(M.bumpMap.channel),normalMapUv:se&&y(M.normalMap.channel),displacementMapUv:ee&&y(M.displacementMap.channel),emissiveMapUv:we&&y(M.emissiveMap.channel),metalnessMapUv:_e&&y(M.metalnessMap.channel),roughnessMapUv:Me&&y(M.roughnessMap.channel),anisotropyMapUv:z&&y(M.anisotropyMap.channel),clearcoatMapUv:re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:P&&y(M.sheenRoughnessMap.channel),specularMapUv:le&&y(M.specularMap.channel),specularColorMapUv:$&&y(M.specularColorMap.channel),specularIntensityMapUv:Ne&&y(M.specularIntensityMap.channel),transmissionMapUv:Te&&y(M.transmissionMap.channel),thicknessMapUv:Ce&&y(M.thicknessMap.channel),alphaMapUv:xe&&y(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(se||De),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:Y,vertexUv3s:ae,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(Fe||xe),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)A.push(B),A.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(A,M),_(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function _(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const A=g[M.type];let B;if(A){const K=dn[A];B=Lf.clone(K.uniforms)}else B=M.uniforms;return B}function E(M,A){let B;for(let K=0,Q=l.length;K<Q;K++){const D=l[K];if(D.cacheKey===A){B=D,++B.usedTimes;break}}return B===void 0&&(B=new H_(s,A,M,r),l.push(B)),B}function R(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:I}}function q_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,y,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){const p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,y,m){const p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Y_),n.length>1&&n.sort(d||Gl),i.length>1&&i.sort(d||Gl)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function K_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Vl,s.set(n,[o])):i>=r.length?(o=new Vl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Z_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Se};break;case"SpotLight":t={position:new b,direction:new b,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function J_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $_=0;function j_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Q_(s,e){const t=new Z_,n=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new b);const r=new b,o=new ke,a=new ke;function c(h,u){let d=0,f=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let y=0,m=0,p=0,x=0,_=0,v=0,E=0,R=0,w=0,I=0,M=0;h.sort(j_);const A=u===!0?Math.PI:1;for(let K=0,Q=h.length;K<Q;K++){const D=h[K],F=D.color,q=D.intensity,V=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*q*A,f+=F.g*q*A,g+=F.b*q*A;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],q);M++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const j=D.shadow,U=n.get(D);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[y]=U,i.directionalShadowMap[y]=ne,i.directionalShadowMatrix[y]=D.shadow.matrix,v++}i.directional[y]=W,y++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(q*A),W.distance=V,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[p]=W;const j=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,j.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=j.matrix,D.castShadow){const U=n.get(D);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[p]=U,i.spotShadowMap[p]=ne,R++}p++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(F).multiplyScalar(q),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=W,x++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*A),W.distance=D.distance,W.decay=D.decay,D.castShadow){const j=D.shadow,U=n.get(D);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=D.shadow.matrix,E++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(q*A),W.groundColor.copy(D.groundColor).multiplyScalar(q*A),i.hemi[_]=W,_++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==y||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==v||B.numPointShadows!==E||B.numSpotShadows!==R||B.numSpotMaps!==w||B.numLightProbes!==M)&&(i.directional.length=y,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=R+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=M,B.directionalLength=y,B.pointLength=m,B.spotLength=p,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=v,B.numPointShadows=E,B.numSpotShadows=R,B.numSpotMaps=w,B.numLightProbes=M,i.version=$_++)}function l(h,u){let d=0,f=0,g=0,y=0,m=0;const p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const v=h[x];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Wl(s,e){const t=new Q_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function e0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Wl(s,e),t.set(r,[c])):o>=a.length?(c=new Wl(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class du extends Ct{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fu extends Ct{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(s,e,t){let n=new Va;const i=new J,r=new J,o=new it,a=new du({depthPacking:Hd}),c=new fu,l={},h=t.maxTextureSize,u={[Pn]:Gt,[Gt]:Pn,[an]:an},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new tt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(E,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),B=s.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=p!==An&&this.type===An,Q=p===An&&this.type!==An;for(let D=0,F=E.length;D<F;D++){const q=E[D],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();if(i.multiply(ne),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||K===!0||Q===!0){const j=this.type!==An?{minFilter:vt,magFilter:vt}:{};V.map!==null&&V.map.dispose(),V.map=new Si(i.x,i.y,j),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const W=V.getViewportCount();for(let j=0;j<W;j++){const U=V.getViewport(j);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),B.viewport(o),V.updateMatrices(q,j),n=V.getFrustum(),v(R,w,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===An&&x(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,M,A)};function x(E,R){const w=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,w,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,w,f,y,null)}function _(E,R,w,I){let M=null;const A=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=w.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=M.uuid,K=R.uuid;let Q=l[B];Q===void 0&&(Q={},l[B]=Q);let D=Q[K];D===void 0&&(D=M.clone(),Q[K]=D),M=D}if(M.visible=R.visible,M.wireframe=R.wireframe,I===An?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=w}return M}function v(E,R,w,I,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===An)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const K=e.update(E),Q=E.material;if(Array.isArray(Q)){const D=K.groups;for(let F=0,q=D.length;F<q;F++){const V=D[F],ne=Q[V.materialIndex];if(ne&&ne.visible){const W=_(E,ne,I,M);s.renderBufferDirect(w,null,K,W,E,V)}}}else if(Q.visible){const D=_(E,Q,I,M);s.renderBufferDirect(w,null,K,D,E,null)}}const B=E.children;for(let K=0,Q=B.length;K<Q;K++)v(B[K],R,w,I,M)}}function s0(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const ue=new it;let ie=null;const Y=new it(0,0,0,0);return{setMask:function(ae){ie!==ae&&!N&&(s.colorMask(ae,ae,ae,ae),ie=ae)},setLocked:function(ae){N=ae},setClear:function(ae,Re,Ke,pt,Jt){Jt===!0&&(ae*=pt,Re*=pt,Ke*=pt),ue.set(ae,Re,Ke,pt),Y.equals(ue)===!1&&(s.clearColor(ae,Re,Ke,pt),Y.copy(ue))},reset:function(){N=!1,ie=null,Y.set(-1,0,0,0)}}}function r(){let N=!1,ue=null,ie=null,Y=null;return{setTest:function(ae){ae?Fe(s.DEPTH_TEST):Je(s.DEPTH_TEST)},setMask:function(ae){ue!==ae&&!N&&(s.depthMask(ae),ue=ae)},setFunc:function(ae){if(ie!==ae){switch(ae){case pd:s.depthFunc(s.NEVER);break;case md:s.depthFunc(s.ALWAYS);break;case gd:s.depthFunc(s.LESS);break;case Qr:s.depthFunc(s.LEQUAL);break;case _d:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case xd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=ae}},setLocked:function(ae){N=ae},setClear:function(ae){Y!==ae&&(s.clearDepth(ae),Y=ae)},reset:function(){N=!1,ue=null,ie=null,Y=null}}}function o(){let N=!1,ue=null,ie=null,Y=null,ae=null,Re=null,Ke=null,pt=null,Jt=null;return{setTest:function(rt){N||(rt?Fe(s.STENCIL_TEST):Je(s.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!N&&(s.stencilMask(rt),ue=rt)},setFunc:function(rt,Ut,hn){(ie!==rt||Y!==Ut||ae!==hn)&&(s.stencilFunc(rt,Ut,hn),ie=rt,Y=Ut,ae=hn)},setOp:function(rt,Ut,hn){(Re!==rt||Ke!==Ut||pt!==hn)&&(s.stencilOp(rt,Ut,hn),Re=rt,Ke=Ut,pt=hn)},setLocked:function(rt){N=rt},setClear:function(rt){Jt!==rt&&(s.clearStencil(rt),Jt=rt)},reset:function(){N=!1,ue=null,ie=null,Y=null,ae=null,Re=null,Ke=null,pt=null,Jt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,v=null,E=null,R=null,w=null,I=null,M=new Se(0,0,0),A=0,B=!1,K=null,Q=null,D=null,F=null,q=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,W=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=W>=2);let U=null,X={};const fe=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),ve=new it().fromArray(fe),Pe=new it().fromArray(me);function Oe(N,ue,ie,Y){const ae=new Uint8Array(4),Re=s.createTexture();s.bindTexture(N,Re),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ie;Ke++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(ue,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(ue+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return Re}const Le={};Le[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Fe(s.DEPTH_TEST),c.setFunc(Qr),_e(!1),Me(Ec),Fe(s.CULL_FACE),ee(qn);function Fe(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Je(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function Ie(N,ue){return f[N]!==ue?(s.bindFramebuffer(N,ue),f[N]=ue,n&&(N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ue),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ue)),!0):!1}function L(N,ue){let ie=y,Y=!1;if(N)if(ie=g.get(ue),ie===void 0&&(ie=[],g.set(ue,ie)),N.isWebGLMultipleRenderTargets){const ae=N.texture;if(ie.length!==ae.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,Ke=ae.length;Re<Ke;Re++)ie[Re]=s.COLOR_ATTACHMENT0+Re;ie.length=ae.length,Y=!0}}else ie[0]!==s.COLOR_ATTACHMENT0&&(ie[0]=s.COLOR_ATTACHMENT0,Y=!0);else ie[0]!==s.BACK&&(ie[0]=s.BACK,Y=!0);Y&&(t.isWebGL2?s.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function he(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const Z={[fi]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Ac]=s.MIN,Z[Rc]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Z[Ac]=N.MIN_EXT,Z[Rc]=N.MAX_EXT)}const se={[td]:s.ZERO,[nd]:s.ONE,[id]:s.SRC_COLOR,[xa]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[ad]:s.DST_COLOR,[rd]:s.DST_ALPHA,[sd]:s.ONE_MINUS_SRC_COLOR,[va]:s.ONE_MINUS_SRC_ALPHA,[cd]:s.ONE_MINUS_DST_COLOR,[od]:s.ONE_MINUS_DST_ALPHA,[hd]:s.CONSTANT_COLOR,[ud]:s.ONE_MINUS_CONSTANT_COLOR,[dd]:s.CONSTANT_ALPHA,[fd]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(N,ue,ie,Y,ae,Re,Ke,pt,Jt,rt){if(N===qn){p===!0&&(Je(s.BLEND),p=!1);return}if(p===!1&&(Fe(s.BLEND),p=!0),N!==ju){if(N!==x||rt!==B){if((_!==fi||R!==fi)&&(s.blendEquation(s.FUNC_ADD),_=fi,R=fi),rt)switch(N){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bc:s.blendFunc(s.ONE,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,E=null,w=null,I=null,M.set(0,0,0),A=0,x=N,B=rt}return}ae=ae||ue,Re=Re||ie,Ke=Ke||Y,(ue!==_||ae!==R)&&(s.blendEquationSeparate(Z[ue],Z[ae]),_=ue,R=ae),(ie!==v||Y!==E||Re!==w||Ke!==I)&&(s.blendFuncSeparate(se[ie],se[Y],se[Re],se[Ke]),v=ie,E=Y,w=Re,I=Ke),(pt.equals(M)===!1||Jt!==A)&&(s.blendColor(pt.r,pt.g,pt.b,Jt),M.copy(pt),A=Jt),x=N,B=!1}function we(N,ue){N.side===an?Je(s.CULL_FACE):Fe(s.CULL_FACE);let ie=N.side===Gt;ue&&(ie=!ie),_e(ie),N.blending===ss&&N.transparent===!1?ee(qn):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const Y=N.stencilWrite;l.setTest(Y),Y&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Fe(s.SAMPLE_ALPHA_TO_COVERAGE):Je(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(N){K!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),K=N)}function Me(N){N!==Ju?(Fe(s.CULL_FACE),N!==Q&&(N===Ec?s.cullFace(s.BACK):N===$u?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Je(s.CULL_FACE),Q=N}function De(N){N!==D&&(ne&&s.lineWidth(N),D=N)}function qe(N,ue,ie){N?(Fe(s.POLYGON_OFFSET_FILL),(F!==ue||q!==ie)&&(s.polygonOffset(ue,ie),F=ue,q=ie)):Je(s.POLYGON_OFFSET_FILL)}function at(N){N?Fe(s.SCISSOR_TEST):Je(s.SCISSOR_TEST)}function C(N){N===void 0&&(N=s.TEXTURE0+V-1),U!==N&&(s.activeTexture(N),U=N)}function S(N,ue,ie){ie===void 0&&(U===null?ie=s.TEXTURE0+V-1:ie=U);let Y=X[ie];Y===void 0&&(Y={type:void 0,texture:void 0},X[ie]=Y),(Y.type!==N||Y.texture!==ue)&&(U!==ie&&(s.activeTexture(ie),U=ie),s.bindTexture(N,ue||Le[N]),Y.type=N,Y.texture=ue)}function z(){const N=X[U];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){ve.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function Ce(N){Pe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function be(N,ue){let ie=u.get(ue);ie===void 0&&(ie=new WeakMap,u.set(ue,ie));let Y=ie.get(N);Y===void 0&&(Y=s.getUniformBlockIndex(ue,N.name),ie.set(N,Y))}function xe(N,ue){const Y=u.get(ue).get(N);h.get(ue)!==Y&&(s.uniformBlockBinding(ue,Y,N.__bindingPointIndex),h.set(ue,Y))}function Ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},U=null,X={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,v=null,E=null,R=null,w=null,I=null,M=new Se(0,0,0),A=0,B=!1,K=null,Q=null,D=null,F=null,q=null,ve.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Fe,disable:Je,bindFramebuffer:Ie,drawBuffers:L,useProgram:he,setBlending:ee,setMaterial:we,setFlipSided:_e,setCullFace:Me,setLineWidth:De,setPolygonOffset:qe,setScissorTest:at,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:re,compressedTexImage3D:te,texImage2D:$,texImage3D:Ne,updateUBOMapping:be,uniformBlockBinding:xe,texStorage2D:P,texStorage3D:le,texSubImage2D:oe,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Te,viewport:Ce,reset:Ye}}function r0(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):qs("canvas")}function _(C,S,z,re){let te=1;if((C.width>re||C.height>re)&&(te=re/Math.max(C.width,C.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=S?ao:Math.floor,Ee=oe(te*C.width),ce=oe(te*C.height);y===void 0&&(y=x(Ee,ce));const pe=z?x(Ee,ce):y;return pe.width=Ee,pe.height=ce,pe.getContext("2d").drawImage(C,0,0,Ee,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+ce+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return ba(C.width)&&ba(C.height)}function E(C){return a?!1:C.wrapS!==Kt||C.wrapT!==Kt||C.minFilter!==vt&&C.minFilter!==zt}function R(C,S){return C.generateMipmaps&&S&&C.minFilter!==vt&&C.minFilter!==zt}function w(C){s.generateMipmap(C)}function I(C,S,z,re,te=!1){if(a===!1)return S;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=S;if(S===s.RED&&(z===s.FLOAT&&(oe=s.R32F),z===s.HALF_FLOAT&&(oe=s.R16F),z===s.UNSIGNED_BYTE&&(oe=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(oe=s.R8UI),z===s.UNSIGNED_SHORT&&(oe=s.R16UI),z===s.UNSIGNED_INT&&(oe=s.R32UI),z===s.BYTE&&(oe=s.R8I),z===s.SHORT&&(oe=s.R16I),z===s.INT&&(oe=s.R32I)),S===s.RG&&(z===s.FLOAT&&(oe=s.RG32F),z===s.HALF_FLOAT&&(oe=s.RG16F),z===s.UNSIGNED_BYTE&&(oe=s.RG8)),S===s.RGBA){const Ee=te?io:je.getTransfer(re);z===s.FLOAT&&(oe=s.RGBA32F),z===s.HALF_FLOAT&&(oe=s.RGBA16F),z===s.UNSIGNED_BYTE&&(oe=Ee===ot?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(C,S,z){return R(C,z)===!0||C.isFramebufferTexture&&C.minFilter!==vt&&C.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===vt||C===no||C===Fs?s.NEAREST:s.LINEAR}function B(C){const S=C.target;S.removeEventListener("dispose",B),Q(S),S.isVideoTexture&&g.delete(S)}function K(C){const S=C.target;S.removeEventListener("dispose",K),F(S)}function Q(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,re=m.get(z);if(re){const te=re[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(C),Object.keys(re).length===0&&m.delete(z)}n.remove(C)}function D(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const z=C.source,re=m.get(z);delete re[S.__cacheKey],o.memory.textures--}function F(C){const S=C.texture,z=n.get(C),re=n.get(S);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let oe=0;oe<z.__webglFramebuffer[te].length;oe++)s.deleteFramebuffer(z.__webglFramebuffer[te][oe]);else s.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)s.deleteFramebuffer(z.__webglFramebuffer[te]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,oe=S.length;te<oe;te++){const Ee=n.get(S[te]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(C)}let q=0;function V(){q=0}function ne(){const C=q;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),q+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function j(C,S){const z=n.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(z,C,S);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function U(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Fe(z,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function X(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Fe(z,C,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function fe(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Je(z,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const me={[Mi]:s.REPEAT,[Kt]:s.CLAMP_TO_EDGE,[Vs]:s.MIRRORED_REPEAT},ve={[vt]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[Fa]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},Pe={[Vd]:s.NEVER,[Jd]:s.ALWAYS,[Wd]:s.LESS,[qd]:s.LEQUAL,[Xd]:s.EQUAL,[Zd]:s.GEQUAL,[Yd]:s.GREATER,[Kd]:s.NOTEQUAL};function Oe(C,S,z){if(z?(s.texParameteri(C,s.TEXTURE_WRAP_S,me[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,me[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,me[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ve[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ve[S.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Kt||S.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,A(S.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==vt&&S.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===vt||S.minFilter!==Fs&&S.minFilter!==Jn||S.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Le(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",B));const re=S.source;let te=m.get(re);te===void 0&&(te={},m.set(re,te));const oe=W(S);if(oe!==C.__cacheKey){te[oe]===void 0&&(te[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[oe].usedTimes++;const Ee=te[C.__cacheKey];Ee!==void 0&&(te[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(S)),C.__cacheKey=oe,C.__webglTexture=te[oe].texture}return z}function Fe(C,S,z){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const te=Le(C,S),oe=S.source;t.bindTexture(re,C.__webglTexture,s.TEXTURE0+z);const Ee=n.get(oe);if(oe.version!==Ee.__version||te===!0){t.activeTexture(s.TEXTURE0+z);const ce=je.getPrimaries(je.workingColorSpace),pe=S.colorSpace===tn?null:je.getPrimaries(S.colorSpace),P=S.colorSpace===tn||ce===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const le=E(S)&&v(S.image)===!1;let $=_(S.image,le,!1,h);$=at(S,$);const Ne=v($)||a,Te=r.convert(S.format,S.colorSpace);let Ce=r.convert(S.type),be=I(S.internalFormat,Te,Ce,S.colorSpace,S.isVideoTexture);Oe(re,S,Ne);let xe;const Ye=S.mipmaps,N=a&&S.isVideoTexture!==!0,ue=Ee.__version===void 0||te===!0,ie=M(S,$,Ne);if(S.isDepthTexture)be=s.DEPTH_COMPONENT,a?S.type===Cn?be=s.DEPTH_COMPONENT32F:S.type===Wn?be=s.DEPTH_COMPONENT24:S.type===gi?be=s.DEPTH24_STENCIL8:be=s.DEPTH_COMPONENT16:S.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===_i&&be===s.DEPTH_COMPONENT&&S.type!==Ba&&S.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wn,Ce=r.convert(S.type)),S.format===cs&&be===s.DEPTH_COMPONENT&&(be=s.DEPTH_STENCIL,S.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=gi,Ce=r.convert(S.type))),ue&&(N?t.texStorage2D(s.TEXTURE_2D,1,be,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,be,$.width,$.height,0,Te,Ce,null));else if(S.isDataTexture)if(Ye.length>0&&Ne){N&&ue&&t.texStorage2D(s.TEXTURE_2D,ie,be,Ye[0].width,Ye[0].height);for(let Y=0,ae=Ye.length;Y<ae;Y++)xe=Ye[Y],N?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,xe.width,xe.height,Te,Ce,xe.data):t.texImage2D(s.TEXTURE_2D,Y,be,xe.width,xe.height,0,Te,Ce,xe.data);S.generateMipmaps=!1}else N?(ue&&t.texStorage2D(s.TEXTURE_2D,ie,be,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Te,Ce,$.data)):t.texImage2D(s.TEXTURE_2D,0,be,$.width,$.height,0,Te,Ce,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,be,Ye[0].width,Ye[0].height,$.depth);for(let Y=0,ae=Ye.length;Y<ae;Y++)xe=Ye[Y],S.format!==en?Te!==null?N?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,$.depth,Te,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,be,xe.width,xe.height,$.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,$.depth,Te,Ce,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,be,xe.width,xe.height,$.depth,0,Te,Ce,xe.data)}else{N&&ue&&t.texStorage2D(s.TEXTURE_2D,ie,be,Ye[0].width,Ye[0].height);for(let Y=0,ae=Ye.length;Y<ae;Y++)xe=Ye[Y],S.format!==en?Te!==null?N?t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,xe.width,xe.height,Te,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,xe.width,xe.height,Te,Ce,xe.data):t.texImage2D(s.TEXTURE_2D,Y,be,xe.width,xe.height,0,Te,Ce,xe.data)}else if(S.isDataArrayTexture)N?(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,be,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Te,Ce,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,$.width,$.height,$.depth,0,Te,Ce,$.data);else if(S.isData3DTexture)N?(ue&&t.texStorage3D(s.TEXTURE_3D,ie,be,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Te,Ce,$.data)):t.texImage3D(s.TEXTURE_3D,0,be,$.width,$.height,$.depth,0,Te,Ce,$.data);else if(S.isFramebufferTexture){if(ue)if(N)t.texStorage2D(s.TEXTURE_2D,ie,be,$.width,$.height);else{let Y=$.width,ae=$.height;for(let Re=0;Re<ie;Re++)t.texImage2D(s.TEXTURE_2D,Re,be,Y,ae,0,Te,Ce,null),Y>>=1,ae>>=1}}else if(Ye.length>0&&Ne){N&&ue&&t.texStorage2D(s.TEXTURE_2D,ie,be,Ye[0].width,Ye[0].height);for(let Y=0,ae=Ye.length;Y<ae;Y++)xe=Ye[Y],N?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Te,Ce,xe):t.texImage2D(s.TEXTURE_2D,Y,be,Te,Ce,xe);S.generateMipmaps=!1}else N?(ue&&t.texStorage2D(s.TEXTURE_2D,ie,be,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Ce,$)):t.texImage2D(s.TEXTURE_2D,0,be,Te,Ce,$);R(S,Ne)&&w(re),Ee.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Je(C,S,z){if(S.image.length!==6)return;const re=Le(C,S),te=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const oe=n.get(te);if(te.version!==oe.__version||re===!0){t.activeTexture(s.TEXTURE0+z);const Ee=je.getPrimaries(je.workingColorSpace),ce=S.colorSpace===tn?null:je.getPrimaries(S.colorSpace),pe=S.colorSpace===tn||Ee===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const P=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,$=[];for(let Y=0;Y<6;Y++)!P&&!le?$[Y]=_(S.image[Y],!1,!0,l):$[Y]=le?S.image[Y].image:S.image[Y],$[Y]=at(S,$[Y]);const Ne=$[0],Te=v(Ne)||a,Ce=r.convert(S.format,S.colorSpace),be=r.convert(S.type),xe=I(S.internalFormat,Ce,be,S.colorSpace),Ye=a&&S.isVideoTexture!==!0,N=oe.__version===void 0||re===!0;let ue=M(S,Ne,Te);Oe(s.TEXTURE_CUBE_MAP,S,Te);let ie;if(P){Ye&&N&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,xe,Ne.width,Ne.height);for(let Y=0;Y<6;Y++){ie=$[Y].mipmaps;for(let ae=0;ae<ie.length;ae++){const Re=ie[ae];S.format!==en?Ce!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,xe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Re.width,Re.height,Ce,be,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,xe,Re.width,Re.height,0,Ce,be,Re.data)}}}else{ie=S.mipmaps,Ye&&N&&(ie.length>0&&ue++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,xe,$[0].width,$[0].height));for(let Y=0;Y<6;Y++)if(le){Ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,$[Y].width,$[Y].height,Ce,be,$[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xe,$[Y].width,$[Y].height,0,Ce,be,$[Y].data);for(let ae=0;ae<ie.length;ae++){const Ke=ie[ae].image[Y].image;Ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Ke.width,Ke.height,Ce,be,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,xe,Ke.width,Ke.height,0,Ce,be,Ke.data)}}else{Ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,be,$[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xe,Ce,be,$[Y]);for(let ae=0;ae<ie.length;ae++){const Re=ie[ae];Ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Ce,be,Re.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,xe,Ce,be,Re.image[Y])}}}R(S,Te)&&w(s.TEXTURE_CUBE_MAP),oe.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ie(C,S,z,re,te,oe){const Ee=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),pe=I(z.internalFormat,Ee,ce,z.colorSpace);if(!n.get(S).__hasExternalTextures){const le=Math.max(1,S.width>>oe),$=Math.max(1,S.height>>oe);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,pe,le,$,S.depth,0,Ee,ce,null):t.texImage2D(te,oe,pe,le,$,0,Ee,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,te,n.get(z).__webglTexture,0,Me(S)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,te,n.get(z).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function L(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||De(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Cn?re=s.DEPTH_COMPONENT32F:te.type===Wn&&(re=s.DEPTH_COMPONENT24));const oe=Me(S);De(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,re,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,re,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const re=Me(S);z&&De(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):De(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<re.length;te++){const oe=re[te],Ee=r.convert(oe.format,oe.colorSpace),ce=r.convert(oe.type),pe=I(oe.internalFormat,Ee,ce,oe.colorSpace),P=Me(S);z&&De(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,P,pe,S.width,S.height):De(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,te=Me(S);if(S.depthTexture.format===_i)De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(S.depthTexture.format===cs)De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Z(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=s.createRenderbuffer(),L(S.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),L(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,S,z){const re=n.get(C);S!==void 0&&Ie(re.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Z(C)}function ee(C){const S=C.texture,z=n.get(C),re=n.get(S);C.addEventListener("dispose",K),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Ee=v(C)||a;if(te){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let pe=0;pe<S.mipmaps.length;pe++)z.__webglFramebuffer[ce][pe]=s.createFramebuffer()}else z.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)z.__webglFramebuffer[ce]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(oe)if(i.drawBuffers){const ce=C.texture;for(let pe=0,P=ce.length;pe<P;pe++){const le=n.get(ce[pe]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&De(C)===!1){const ce=oe?S:[S];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const P=ce[pe];z.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const le=r.convert(P.format,P.colorSpace),$=r.convert(P.type),Ne=I(P.internalFormat,le,$,P.colorSpace,C.isXRRenderTarget===!0),Te=Me(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ne,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),L(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S,Ee);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Ie(z.__webglFramebuffer[ce][pe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else Ie(z.__webglFramebuffer[ce],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);R(S,Ee)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ce=C.texture;for(let pe=0,P=ce.length;pe<P;pe++){const le=ce[pe],$=n.get(le);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),Oe(s.TEXTURE_2D,le,Ee),Ie(z.__webglFramebuffer,C,le,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),R(le,Ee)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,re.__webglTexture),Oe(ce,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Ie(z.__webglFramebuffer[pe],C,S,s.COLOR_ATTACHMENT0,ce,pe);else Ie(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ce,0);R(S,Ee)&&w(ce),t.unbindTexture()}C.depthBuffer&&Z(C)}function we(C){const S=v(C)||a,z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,te=z.length;re<te;re++){const oe=z[re];if(R(oe,S)){const Ee=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(oe).__webglTexture;t.bindTexture(Ee,ce),w(Ee),t.unbindTexture()}}}function _e(C){if(a&&C.samples>0&&De(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],z=C.width,re=C.height;let te=s.COLOR_BUFFER_BIT;const oe=[],Ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let P=0;P<S.length;P++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let P=0;P<S.length;P++){oe.push(s.COLOR_ATTACHMENT0+P),C.depthBuffer&&oe.push(Ee);const le=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(le===!1&&(C.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[P]),le===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),pe){const $=n.get(S[P]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,z,re,0,0,z,re,te,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let P=0;P<S.length;P++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.RENDERBUFFER,ce.__webglColorRenderbuffer[P]);const le=n.get(S[P]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Me(C){return Math.min(u,C.samples)}function De(C){const S=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(C){const S=o.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function at(C,S){const z=C.colorSpace,re=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ea||z!==St&&z!==tn&&(je.getTransfer(z)===ot?a===!1?e.has("EXT_sRGB")===!0&&re===en?(C.format=Ea,C.minFilter=zt,C.generateMipmaps=!1):S=eu.sRGBToLinear(S):(re!==en||te!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=ne,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=fe,this.rebindTextures=se,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=De}function o0(s,e,t){const n=t.isWebGL2;function i(r,o=tn){let a;const c=je.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===Wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cd)return s.BYTE;if(r===Ld)return s.SHORT;if(r===Ba)return s.UNSIGNED_SHORT;if(r===Vh)return s.INT;if(r===Wn)return s.UNSIGNED_INT;if(r===Cn)return s.FLOAT;if(r===Ws)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Pd)return s.ALPHA;if(r===en)return s.RGBA;if(r===Id)return s.LUMINANCE;if(r===Dd)return s.LUMINANCE_ALPHA;if(r===_i)return s.DEPTH_COMPONENT;if(r===cs)return s.DEPTH_STENCIL;if(r===Ea)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nd)return s.RED;if(r===qh)return s.RED_INTEGER;if(r===Ud)return s.RG;if(r===Yh)return s.RG_INTEGER;if(r===Kh)return s.RGBA_INTEGER;if(r===wo||r===Ao||r===Ro||r===Co)if(c===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lc||r===Pc||r===Ic||r===Dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Lc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nc||r===Uc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Nc)return c===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Uc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oc||r===Fc||r===Bc||r===zc||r===kc||r===Hc||r===Gc||r===Vc||r===Wc||r===Xc||r===qc||r===Yc||r===Kc||r===Zc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Oc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zc)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===Jc||r===$c)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Lo)return c===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$c)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fd||r===jc||r===Qc||r===el)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Lo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class a0 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class l0 extends Rt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:_i,h!==_i&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=Wn),n===void 0&&h===cs&&(n=gi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class h0 extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const y=t.getContextAttributes();let m=null,p=null;const x=[],_=[],v=new Dt;v.layers.enable(1),v.viewport=new it;const E=new Dt;E.layers.enable(2),E.viewport=new it;const R=[v,E],w=new a0;w.layers.enable(1),w.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=x[U];return X===void 0&&(X=new ea,x[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=x[U];return X===void 0&&(X=new ea,x[U]=X),X.getGripSpace()},this.getHand=function(U){let X=x[U];return X===void 0&&(X=new ea,x[U]=X),X.getHandSpace()};function A(U){const X=_.indexOf(U.inputSource);if(X===-1)return;const fe=x[X];fe!==void 0&&(fe.update(U.inputSource,U.frame,l||o),fe.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",K);for(let U=0;U<x.length;U++){const X=_[U];X!==null&&(_[U]=null,x[U].disconnect(X))}I=null,M=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",B),i.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),p=new Si(f.framebufferWidth,f.framebufferHeight,{format:en,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let X=null,fe=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=y.stencil?cs:_i,fe=y.stencil?gi:Wn);const ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),p=new Si(d.textureWidth,d.textureHeight,{format:en,type:Kn,depthTexture:new l0(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Pe=e.properties.get(p);Pe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function K(U){for(let X=0;X<U.removed.length;X++){const fe=U.removed[X],me=_.indexOf(fe);me>=0&&(_[me]=null,x[me].disconnect(fe))}for(let X=0;X<U.added.length;X++){const fe=U.added[X];let me=_.indexOf(fe);if(me===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=_.length){_.push(fe),me=Pe;break}else if(_[Pe]===null){_[Pe]=fe,me=Pe;break}if(me===-1)break}const ve=x[me];ve&&ve.connect(fe)}}const Q=new b,D=new b;function F(U,X,fe){Q.setFromMatrixPosition(X.matrixWorld),D.setFromMatrixPosition(fe.matrixWorld);const me=Q.distanceTo(D),ve=X.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,Oe=ve[14]/(ve[10]-1),Le=ve[14]/(ve[10]+1),Fe=(ve[9]+1)/ve[5],Je=(ve[9]-1)/ve[5],Ie=(ve[8]-1)/ve[0],L=(Pe[8]+1)/Pe[0],he=Oe*Ie,Z=Oe*L,se=me/(-Ie+L),ee=se*-Ie;X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ee),U.translateZ(se),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const we=Oe+se,_e=Le+se,Me=he-ee,De=Z+(me-ee),qe=Fe*Le/_e*we,at=Je*Le/_e*we;U.projectionMatrix.makePerspective(Me,De,qe,at,we,_e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function q(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;w.near=E.near=v.near=U.near,w.far=E.far=v.far=U.far,(I!==w.near||M!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,M=w.far);const X=U.parent,fe=w.cameras;q(w,X);for(let me=0;me<fe.length;me++)q(fe[me],X);fe.length===2?F(w,v,E):w.projectionMatrix.copy(v.projectionMatrix),V(U,w,X)};function V(U,X,fe){fe===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(fe.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=hs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let ne=null;function W(U,X){if(h=X.getViewerPose(l||o),g=X,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let me=!1;fe.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let ve=0;ve<fe.length;ve++){const Pe=fe[ve];let Oe=null;if(f!==null)Oe=f.getViewport(Pe);else{const Fe=u.getViewSubImage(d,Pe);Oe=Fe.viewport,ve===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let Le=R[ve];Le===void 0&&(Le=new Dt,Le.layers.enable(ve),Le.viewport=new it,R[ve]=Le),Le.matrix.fromArray(Pe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Pe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ve===0&&(w.matrix.copy(Le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(Le)}}for(let fe=0;fe<x.length;fe++){const me=_[fe],ve=x[fe];me!==null&&ve!==void 0&&ve.update(me,X,l||o)}ne&&ne(U,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const j=new au;j.setAnimationLoop(W),this.setAnimationLoop=function(U){ne=U},this.dispose=function(){}}}function u0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ru(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(x,E);const R=e.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function h(x){const _=u();x.__bindingPointIndex=_;const v=s.createBuffer(),E=x.__size,R=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],v=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,w=v.length;R<w;R++){const I=v[R];if(f(I,R,E)===!0){const M=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let K=0;K<A.length;K++){const Q=A[K],D=y(Q);typeof Q=="number"?(I.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,M+B,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=Q.elements[0],I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=Q.elements[0],I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=Q.elements[0]):(Q.toArray(I.__data,B),B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,v){const E=x.value;if(v[_]===void 0){if(typeof E=="number")v[_]=E;else{const R=Array.isArray(E)?E:[E],w=[];for(let I=0;I<R.length;I++)w.push(R[I].clone());v[_]=w}return!0}else if(typeof E=="number"){if(v[_]!==E)return v[_]=E,!0}else{const R=Array.isArray(v[_])?v[_]:[v[_]],w=Array.isArray(E)?E:[E];for(let I=0;I<R.length;I++){const M=R[I];if(M.equals(w[I])===!1)return M.copy(w[I]),!0}}return!1}function g(x){const _=x.uniforms;let v=0;const E=16;let R=0;for(let w=0,I=_.length;w<I;w++){const M=_[w],A={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let K=0,Q=B.length;K<Q;K++){const D=B[K],F=y(D);A.boundary+=F.boundary,A.storage+=F.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,w>0){R=v%E;const K=E-R;R!==0&&K-A.boundary<0&&(v+=E-R,M.__offset=v)}v+=A.storage}return R=v%E,R>0&&(v+=E-R),x.__size=v,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class pu{constructor(e={}){const{canvas:t=df(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const _=this;let v=!1,E=0,R=0,w=null,I=-1,M=null;const A=new it,B=new it;let K=null;const Q=new Se(0);let D=0,F=t.width,q=t.height,V=1,ne=null,W=null;const j=new it(0,0,F,q),U=new it(0,0,F,q);let X=!1;const fe=new Va;let me=!1,ve=!1,Pe=null;const Oe=new ke,Le=new J,Fe=new b,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?V:1}let L=n;function he(T,O){for(let k=0;k<T.length;k++){const H=T[k],G=t.getContext(H,O);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),L=he(O,T),L===null)throw he(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Z,se,ee,we,_e,Me,De,qe,at,C,S,z,re,te,oe,Ee,ce,pe,P,le,$,Ne,Te,Ce;function be(){Z=new bg(L),se=new yg(L,Z,e),Z.init(se),Ne=new o0(L,Z,se),ee=new s0(L,Z,se),we=new Ag(L),_e=new q_,Me=new r0(L,Z,ee,_e,se,Ne,we),De=new vg(_),qe=new Eg(_),at=new Ff(L,se),Te=new gg(L,Z,at,se),C=new Tg(L,at,we,Te),S=new Pg(L,C,at,we),P=new Lg(L,se,Me),Ee=new xg(_e),z=new X_(_,De,qe,Z,se,Te,Ee),re=new u0(_,_e),te=new K_,oe=new e0(Z,se),pe=new mg(_,De,qe,ee,S,d,c),ce=new i0(_,S,se),Ce=new d0(L,we,se,ee),le=new _g(L,Z,we,se),$=new wg(L,Z,we,se),we.programs=z.programs,_.capabilities=se,_.extensions=Z,_.properties=_e,_.renderLists=te,_.shadowMap=ce,_.state=ee,_.info=we}be();const xe=new h0(_,L);this.xr=xe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(F,q,!1))},this.getSize=function(T){return T.set(F,q)},this.setSize=function(T,O,k=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,q=O,t.width=Math.floor(T*V),t.height=Math.floor(O*V),k===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*V,q*V).floor()},this.setDrawingBufferSize=function(T,O,k){F=T,q=O,V=k,t.width=Math.floor(T*k),t.height=Math.floor(O*k),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,O,k,H){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,O,k,H),ee.viewport(A.copy(j).multiplyScalar(V).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,O,k,H){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,O,k,H),ee.scissor(B.copy(U).multiplyScalar(V).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ee.setScissorTest(X=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(T=!0,O=!0,k=!0){let H=0;if(T){let G=!1;if(w!==null){const ye=w.texture.format;G=ye===Kh||ye===Yh||ye===qh}if(G){const ye=w.texture.type,Ae=ye===Kn||ye===Wn||ye===Ba||ye===gi||ye===Wh||ye===Xh,Ue=pe.getClearColor(),Be=pe.getClearAlpha(),We=Ue.r,He=Ue.g,Ge=Ue.b;Ae?(f[0]=We,f[1]=He,f[2]=Ge,f[3]=Be,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=We,g[1]=He,g[2]=Ge,g[3]=Be,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),te.dispose(),oe.dispose(),_e.dispose(),De.dispose(),qe.dispose(),S.dispose(),Te.dispose(),Ce.dispose(),z.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Jt),xe.removeEventListener("sessionend",rt),Pe&&(Pe.dispose(),Pe=null),Ut.stop()};function Ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=we.autoReset,O=ce.enabled,k=ce.autoUpdate,H=ce.needsUpdate,G=ce.type;be(),we.autoReset=T,ce.enabled=O,ce.autoUpdate=k,ce.needsUpdate=H,ce.type=G}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const O=T.target;O.removeEventListener("dispose",ie),Y(O)}function Y(T){ae(T),_e.remove(T)}function ae(T){const O=_e.get(T).programs;O!==void 0&&(O.forEach(function(k){z.releaseProgram(k)}),T.isShaderMaterial&&z.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,k,H,G,ye){O===null&&(O=Je);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Ue=qu(T,O,k,H,G);ee.setMaterial(H,Ae);let Be=k.index,We=1;if(H.wireframe===!0){if(Be=C.getWireframeAttribute(k),Be===void 0)return;We=2}const He=k.drawRange,Ge=k.attributes.position;let dt=He.start*We,Vt=(He.start+He.count)*We;ye!==null&&(dt=Math.max(dt,ye.start*We),Vt=Math.min(Vt,(ye.start+ye.count)*We)),Be!==null?(dt=Math.max(dt,0),Vt=Math.min(Vt,Be.count)):Ge!=null&&(dt=Math.max(dt,0),Vt=Math.min(Vt,Ge.count));const Tt=Vt-dt;if(Tt<0||Tt===1/0)return;Te.setup(G,H,Ue,k,Be);let vn,ut=le;if(Be!==null&&(vn=at.get(Be),ut=$,ut.setIndex(vn)),G.isMesh)H.wireframe===!0?(ee.setLineWidth(H.wireframeLinewidth*Ie()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(G.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),ee.setLineWidth(Ze*Ie()),G.isLineSegments?ut.setMode(L.LINES):G.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else G.isPoints?ut.setMode(L.POINTS):G.isSprite&&ut.setMode(L.TRIANGLES);if(G.isInstancedMesh)ut.renderInstances(dt,Tt,G.count);else if(k.isInstancedBufferGeometry){const Ze=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,So=Math.min(k.instanceCount,Ze);ut.renderInstances(dt,Tt,So)}else ut.render(dt,Tt)};function Re(T,O,k){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,sr(T,O,k),T.side=Pn,T.needsUpdate=!0,sr(T,O,k),T.side=an):sr(T,O,k)}this.compile=function(T,O,k=null){k===null&&(k=T),m=oe.get(k),m.init(),x.push(m),k.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==k&&T.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(_._useLegacyLights);const H=new Set;return T.traverse(function(G){const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Ue=ye[Ae];Re(Ue,k,G),H.add(Ue)}else Re(ye,k,G),H.add(ye)}),x.pop(),m=null,H},this.compileAsync=function(T,O,k=null){const H=this.compile(T,O,k);return new Promise(G=>{function ye(){if(H.forEach(function(Ae){_e.get(Ae).currentProgram.isReady()&&H.delete(Ae)}),H.size===0){G(T);return}setTimeout(ye,10)}Z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ke=null;function pt(T){Ke&&Ke(T)}function Jt(){Ut.stop()}function rt(){Ut.start()}const Ut=new au;Ut.setAnimationLoop(pt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(T){Ke=T,xe.setAnimationLoop(T),T===null?Ut.stop():Ut.start()},xe.addEventListener("sessionstart",Jt),xe.addEventListener("sessionend",rt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,w),m=oe.get(T,x.length),m.init(),x.push(m),Oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),fe.setFromProjectionMatrix(Oe),ve=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,ve),y=te.get(T,p.length),y.init(),p.push(y),hn(T,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(ne,W),this.info.render.frame++,me===!0&&Ee.beginShadows();const k=m.state.shadowsArray;if(ce.render(k,T,O),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(y,T),m.setupLights(_._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let G=0,ye=H.length;G<ye;G++){const Ae=H[G];_c(y,T,Ae,Ae.viewport)}}else _c(y,T,O);w!==null&&(Me.updateMultisampleRenderTarget(w),Me.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,O),Te.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function hn(T,O,k,H){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||fe.intersectsSprite(T)){H&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);const Ae=S.update(T),Ue=T.material;Ue.visible&&y.push(T,Ae,Ue,k,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||fe.intersectsObject(T))){const Ae=S.update(T),Ue=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Fe.copy(Ae.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ue)){const Be=Ae.groups;for(let We=0,He=Be.length;We<He;We++){const Ge=Be[We],dt=Ue[Ge.materialIndex];dt&&dt.visible&&y.push(T,Ae,dt,k,Fe.z,Ge)}}else Ue.visible&&y.push(T,Ae,Ue,k,Fe.z,null)}}const ye=T.children;for(let Ae=0,Ue=ye.length;Ae<Ue;Ae++)hn(ye[Ae],O,k,H)}function _c(T,O,k,H){const G=T.opaque,ye=T.transmissive,Ae=T.transparent;m.setupLightsView(k),me===!0&&Ee.setGlobalState(_.clippingPlanes,k),ye.length>0&&Xu(G,ye,O,k),H&&ee.viewport(A.copy(H)),G.length>0&&ir(G,O,k),ye.length>0&&ir(ye,O,k),Ae.length>0&&ir(Ae,O,k),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Xu(T,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ye=se.isWebGL2;Pe===null&&(Pe=new Si(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ws:Kn,minFilter:Jn,samples:ye?4:0})),_.getDrawingBufferSize(Le),ye?Pe.setSize(Le.x,Le.y):Pe.setSize(ao(Le.x),ao(Le.y));const Ae=_.getRenderTarget();_.setRenderTarget(Pe),_.getClearColor(Q),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ue=_.toneMapping;_.toneMapping=Yn,ir(T,k,H),Me.updateMultisampleRenderTarget(Pe),Me.updateRenderTargetMipmap(Pe);let Be=!1;for(let We=0,He=O.length;We<He;We++){const Ge=O[We],dt=Ge.object,Vt=Ge.geometry,Tt=Ge.material,vn=Ge.group;if(Tt.side===an&&dt.layers.test(H.layers)){const ut=Tt.side;Tt.side=Gt,Tt.needsUpdate=!0,yc(dt,k,H,Vt,Tt,vn),Tt.side=ut,Tt.needsUpdate=!0,Be=!0}}Be===!0&&(Me.updateMultisampleRenderTarget(Pe),Me.updateRenderTargetMipmap(Pe)),_.setRenderTarget(Ae),_.setClearColor(Q,D),_.toneMapping=Ue}function ir(T,O,k){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ye=T.length;G<ye;G++){const Ae=T[G],Ue=Ae.object,Be=Ae.geometry,We=H===null?Ae.material:H,He=Ae.group;Ue.layers.test(k.layers)&&yc(Ue,O,k,Be,We,He)}}function yc(T,O,k,H,G,ye){T.onBeforeRender(_,O,k,H,G,ye),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(_,O,k,H,T,ye),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,_.renderBufferDirect(k,O,H,G,T,ye),G.side=Pn,G.needsUpdate=!0,_.renderBufferDirect(k,O,H,G,T,ye),G.side=an):_.renderBufferDirect(k,O,H,G,T,ye),T.onAfterRender(_,O,k,H,G,ye)}function sr(T,O,k){O.isScene!==!0&&(O=Je);const H=_e.get(T),G=m.state.lights,ye=m.state.shadowsArray,Ae=G.state.version,Ue=z.getParameters(T,G.state,ye,O,k),Be=z.getProgramCacheKey(Ue);let We=H.programs;H.environment=T.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(T.isMeshStandardMaterial?qe:De).get(T.envMap||H.environment),We===void 0&&(T.addEventListener("dispose",ie),We=new Map,H.programs=We);let He=We.get(Be);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Ae)return vc(T,Ue),He}else Ue.uniforms=z.getUniforms(T),T.onBuild(k,Ue,_),T.onBeforeCompile(Ue,_),He=z.acquireProgram(Ue,Be),We.set(Be,He),H.uniforms=Ue.uniforms;const Ge=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),vc(T,Ue),H.needsLights=Ku(T),H.lightsStateVersion=Ae,H.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function xc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function vc(T,O){const k=_e.get(T);k.outputColorSpace=O.outputColorSpace,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function qu(T,O,k,H,G){O.isScene!==!0&&(O=Je),Me.resetTextureUnits();const ye=O.fog,Ae=H.isMeshStandardMaterial?O.environment:null,Ue=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:St,Be=(H.isMeshStandardMaterial?qe:De).get(H.envMap||Ae),We=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,Vt=!!k.morphAttributes.color;let Tt=Yn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Tt=_.toneMapping);const vn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=vn!==void 0?vn.length:0,Ze=_e.get(H),So=m.state.lights;if(me===!0&&(ve===!0||T!==M)){const Wt=T===M&&H.id===I;Ee.setState(H,T,Wt)}let mt=!1;H.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==So.state.version||Ze.outputColorSpace!==Ue||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||Ze.envMap!==Be||H.fog===!0&&Ze.fog!==ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==We||Ze.vertexTangents!==He||Ze.morphTargets!==Ge||Ze.morphNormals!==dt||Ze.morphColors!==Vt||Ze.toneMapping!==Tt||se.isWebGL2===!0&&Ze.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ze.__version=H.version);let Qn=Ze.currentProgram;mt===!0&&(Qn=sr(H,O,G));let Mc=!1,vs=!1,Eo=!1;const Ot=Qn.getUniforms(),ei=Ze.uniforms;if(ee.useProgram(Qn.program)&&(Mc=!0,vs=!0,Eo=!0),H.id!==I&&(I=H.id,vs=!0),Mc||M!==T){Ot.setValue(L,"projectionMatrix",T.projectionMatrix),Ot.setValue(L,"viewMatrix",T.matrixWorldInverse);const Wt=Ot.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,Fe.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,vs=!0,Eo=!0)}if(G.isSkinnedMesh){Ot.setOptional(L,G,"bindMatrix"),Ot.setOptional(L,G,"bindMatrixInverse");const Wt=G.skeleton;Wt&&(se.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ot.setValue(L,"boneTexture",Wt.boneTexture,Me),Ot.setValue(L,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bo=k.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&se.isWebGL2===!0)&&P.update(G,k,Qn),(vs||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,Ot.setValue(L,"receiveShadow",G.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ei.envMap.value=Be,ei.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),vs&&(Ot.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&Yu(ei,Eo),ye&&H.fog===!0&&re.refreshFogUniforms(ei,ye),re.refreshMaterialUniforms(ei,H,V,q,Pe),Jr.upload(L,xc(Ze),ei,Me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Jr.upload(L,xc(Ze),ei,Me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(L,"center",G.center),Ot.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(L,"normalMatrix",G.normalMatrix),Ot.setValue(L,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let To=0,Zu=Wt.length;To<Zu;To++)if(se.isWebGL2){const Sc=Wt[To];Ce.update(Sc,Qn),Ce.bind(Sc,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Yu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ku(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,k){_e.get(T.texture).__webglTexture=O,_e.get(T.depthTexture).__webglTexture=k;const H=_e.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const k=_e.get(T);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,k=0){w=T,E=O,R=k;let H=!0,G=null,ye=!1,Ae=!1;if(T){const Be=_e.get(T);Be.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Be.__webglFramebuffer===void 0?Me.setupRenderTarget(T):Be.__hasExternalTextures&&Me.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const He=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[O])?G=He[O][k]:G=He[O],ye=!0):se.isWebGL2&&T.samples>0&&Me.useMultisampledRTT(T)===!1?G=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[k]:G=He,A.copy(T.viewport),B.copy(T.scissor),K=T.scissorTest}else A.copy(j).multiplyScalar(V).floor(),B.copy(U).multiplyScalar(V).floor(),K=X;if(ee.bindFramebuffer(L.FRAMEBUFFER,G)&&se.drawBuffers&&H&&ee.drawBuffers(T,G),ee.viewport(A),ee.scissor(B),ee.setScissorTest(K),ye){const Be=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Be.__webglTexture,k)}else if(Ae){const Be=_e.get(T.texture),We=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,k||0,We)}I=-1},this.readRenderTargetPixels=function(T,O,k,H,G,ye,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){ee.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Be=T.texture,We=Be.format,He=Be.type;if(We!==en&&Ne.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===Ws&&(Z.has("EXT_color_buffer_half_float")||se.isWebGL2&&Z.has("EXT_color_buffer_float"));if(He!==Kn&&Ne.convert(He)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Cn&&(se.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-H&&k>=0&&k<=T.height-G&&L.readPixels(O,k,H,G,Ne.convert(We),Ne.convert(He),ye)}finally{const Be=w!==null?_e.get(w).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,O,k=0){const H=Math.pow(2,-k),G=Math.floor(O.image.width*H),ye=Math.floor(O.image.height*H);Me.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,T.x,T.y,G,ye),ee.unbindTexture()},this.copyTextureToTexture=function(T,O,k,H=0){const G=O.image.width,ye=O.image.height,Ae=Ne.convert(k.format),Ue=Ne.convert(k.type);Me.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,T.x,T.y,G,ye,Ae,Ue,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,T.x,T.y,Ae,Ue,O.image),H===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(T,O,k,H,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Be=Ne.convert(H.format),We=Ne.convert(H.type);let He;if(H.isData3DTexture)Me.setTexture3D(H,0),He=L.TEXTURE_3D;else if(H.isDataArrayTexture)Me.setTexture2DArray(H,0),He=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Ge=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),vn=L.getParameter(L.UNPACK_SKIP_IMAGES),ut=k.isCompressedTexture?k.mipmaps[0]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(He,G,O.x,O.y,O.z,ye,Ae,Ue,Be,We,ut.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(He,G,O.x,O.y,O.z,ye,Ae,Ue,Be,ut.data)):L.texSubImage3D(He,G,O.x,O.y,O.z,ye,Ae,Ue,Be,We,ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vn),G===0&&H.generateMipmaps&&L.generateMipmap(He),ee.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Me.setTextureCube(T,0):T.isData3DTexture?Me.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Me.setTexture2DArray(T,0):Me.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){E=0,R=0,w=null,ee.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===za?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===uo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?yi:Jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?lt:St}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class f0 extends pu{}f0.prototype.isWebGL1Renderer=!0;class Xa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new Xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new qa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mu extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ya{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new b;class Ei{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ei(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gu extends Ct{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Ts=new b,Zi=new b,Ji=new b,$i=new J,ws=new J,_u=new ke,Ar=new b,As=new b,Rr=new b,Xl=new J,ta=new J,ql=new J;class p0 extends Qe{constructor(e=new gu){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ya(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Ei(n,3,0,!1)),Ki.setAttribute("uv",new Ei(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),_u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Cr(Ar.set(-.5,-.5,0),Ji,o,Zi,i,r),Cr(As.set(.5,-.5,0),Ji,o,Zi,i,r),Cr(Rr.set(.5,.5,0),Ji,o,Zi,i,r),Xl.set(0,0),ta.set(1,0),ql.set(1,1);let a=e.ray.intersectTriangle(Ar,As,Rr,!1,Ts);if(a===null&&(Cr(As.set(-.5,.5,0),Ji,o,Zi,i,r),ta.set(0,1),a=e.ray.intersectTriangle(Ar,Rr,As,!1,Ts),a===null))return;const c=e.ray.origin.distanceTo(Ts);c<e.near||c>e.far||t.push({distance:c,point:Ts.clone(),uv:Yt.getInterpolation(Ts,Ar,As,Rr,Xl,ta,ql,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cr(s,e,t,n,i,r){$i.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ws.x=r*$i.x-i*$i.y,ws.y=i*$i.x+r*$i.y):ws.copy($i),s.copy(e),s.x+=ws.x,s.y+=ws.y,s.applyMatrix4(_u)}const Lr=new b,Yl=new b;class m0 extends Qe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Lr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Lr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Lr.setFromMatrixPosition(e.matrixWorld),Yl.setFromMatrixPosition(this.matrixWorld);const n=Lr.distanceTo(Yl)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Kl=new b,Zl=new it,Jl=new it,g0=new b,$l=new ke,Pr=new b,na=new ln,jl=new ke,ia=new gs;class yu extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingSphere.expandByPoint(Pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1&&(jl.copy(i).invert(),ia.copy(e.ray).applyMatrix4(jl),!(this.boundingBox!==null&&ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zl.fromBufferAttribute(i.attributes.skinIndex,e),Jl.fromBufferAttribute(i.attributes.skinWeight,e),Kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Jl.getComponent(r);if(o!==0){const a=Zl.getComponent(r);$l.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(g0.copy(Kl).applyMatrix4($l),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ka extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $r extends Rt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=vt,h=vt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new ke,_0=new ke;class mo{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:_0;Ql.multiplyMatrices(a,t[r]),Ql.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=$h(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $r(t,e,e,en,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ka),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ds extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new ke,eh=new ke,Ir=[],th=new gn,y0=new ke,Rs=new ge,Cs=new ln;class xu extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,y0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),th.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Cs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),eh.multiplyMatrices(n,ji),Rs.matrixWorld=eh,Rs.raycast(e,Ir);for(let o=0,a=Ir.length;o<a;o++){const c=Ir[o];c.instanceId=r,c.object=this,t.push(c)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Ct{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nh=new b,ih=new b,sh=new ke,sa=new gs,Dr=new ln;class Qt extends Qe{constructor(e=new tt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)nh.fromBufferAttribute(t,i-1),ih.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nh.distanceTo(ih);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;sh.copy(i).invert(),sa.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new b,h=new b,u=new b,d=new b,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,v=x-1;_<v;_+=f){const E=g.getX(_),R=g.getX(_+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,R),sa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,v=x-1;_<v;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),sa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const rh=new b,oh=new b;class vu extends Qt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(oh);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mu extends Qt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Za extends Ct{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ah=new ke,wa=new gs,Nr=new ln,Ur=new b;class Su extends Qe{constructor(e=new tt,t=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;ah.copy(i).invert(),wa.copy(e.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){const m=l.getX(g);Ur.fromBufferAttribute(u,m),ch(Ur,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)Ur.fromBufferAttribute(u,g),ch(Ur,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ch(s,e,t,n,i,r,o){const a=wa.distanceSqToPoint(s);if(a<t){const c=new b;wa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new J:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],r=[],o=[],a=new b,c=new ke;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(yt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ja extends _n{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new J,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class x0 extends Ja{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Or=new b,ra=new $a,oa=new $a,aa=new $a;class v0 extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Or.subVectors(i[0],i[1]).add(i[0]),l=Or);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Or.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ra.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),oa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),aa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),oa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),aa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ra.calc(c),oa.calc(c),aa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function M0(s,e){const t=1-s;return t*t*e}function S0(s,e){return 2*(1-s)*s*e}function E0(s,e){return s*s*e}function ks(s,e,t,n){return M0(s,e)+S0(s,t)+E0(s,n)}function b0(s,e){const t=1-s;return t*t*t*e}function T0(s,e){const t=1-s;return 3*t*t*s*e}function w0(s,e){return 3*(1-s)*s*s*e}function A0(s,e){return s*s*s*e}function Hs(s,e,t,n,i){return b0(s,e)+T0(s,t)+w0(s,n)+A0(s,i)}class Eu extends _n{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R0 extends _n{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y),Hs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bu extends _n{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends _n{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends _n{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ks(e,i.x,r.x,o.x),ks(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wu extends _n{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ks(e,i.x,r.x,o.x),ks(e,i.y,r.y,o.y),ks(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Au extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lh(a,c.x,l.x,h.x,u.x),lh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var co=Object.freeze({__proto__:null,ArcCurve:x0,CatmullRomCurve3:v0,CubicBezierCurve:Eu,CubicBezierCurve3:R0,EllipseCurve:Ja,LineCurve:bu,LineCurve3:C0,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:wu,SplineCurve:Au});class L0 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new co[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new co[i.type]().fromJSON(i))}return this}}class Aa extends L0{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new bu(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Tu(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Eu(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Au(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ja(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class go extends tt{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=yt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new b,d=new J,f=new b,g=new b,y=new b;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=t;x++){const _=n+x*h*i,v=Math.sin(_),E=Math.cos(_);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*v,u.y=e[R].y,u.z=e[R].x*E,o.push(u.x,u.y,u.z),d.x=x/t,d.y=R/(e.length-1),a.push(d.x,d.y);const w=c[3*R+0]*v,I=c[3*R+1],M=c[3*R+0]*E;l.push(w,I,M)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const v=_+x*e.length,E=v,R=v+e.length,w=v+e.length+1,I=v+1;r.push(E,R,I),r.push(w,I,R)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.points,e.segments,e.phiStart,e.phiLength)}}class ja extends go{constructor(e=1,t=1,n=4,i=8){const r=new Aa;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ja(e.radius,e.length,e.capSegments,e.radialSegments)}}class Qa extends tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new b,h=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const y=[],m=n/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function x(){const v=new b,E=new b;let R=0;const w=(t-e)/n;for(let I=0;I<=r;I++){const M=[],A=I/r,B=A*(t-e)+e;for(let K=0;K<=i;K++){const Q=K/i,D=Q*c+a,F=Math.sin(D),q=Math.cos(D);E.x=B*F,E.y=-A*n+m,E.z=B*q,u.push(E.x,E.y,E.z),v.set(F,w,q).normalize(),d.push(v.x,v.y,v.z),f.push(Q,1-A),M.push(g++)}y.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const A=y[M][I],B=y[M+1][I],K=y[M+1][I+1],Q=y[M][I+1];h.push(A,B,Q),h.push(B,K,Q),R+=6}l.addGroup(p,R,0),p+=R}function _(v){const E=g,R=new J,w=new b;let I=0;const M=v===!0?e:t,A=v===!0?1:-1;for(let K=1;K<=i;K++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;const B=g;for(let K=0;K<=i;K++){const D=K/i*c+a,F=Math.cos(D),q=Math.sin(D);w.x=M*q,w.y=m*A,w.z=M*F,u.push(w.x,w.y,w.z),d.push(0,A,0),R.x=F*.5+.5,R.y=q*.5*A+.5,f.push(R.x,R.y),g++}for(let K=0;K<i;K++){const Q=E+K,D=B+K;v===!0?h.push(D,D+1,Q):h.push(D+1,D,Q),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ec extends At{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ri extends tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new b,v=new b,E=new b;for(let R=0;R<t.length;R+=3)f(t[R+0],_),f(t[R+1],v),f(t[R+2],E),c(_,v,E,x)}function c(x,_,v,E){const R=E+1,w=[];for(let I=0;I<=R;I++){w[I]=[];const M=x.clone().lerp(v,I/R),A=_.clone().lerp(v,I/R),B=R-I;for(let K=0;K<=B;K++)K===0&&I===R?w[I][K]=M:w[I][K]=M.clone().lerp(A,K/B)}for(let I=0;I<R;I++)for(let M=0;M<2*(R-I)-1;M++){const A=Math.floor(M/2);M%2===0?(d(w[I][A+1]),d(w[I+1][A]),d(w[I][A])):(d(w[I][A+1]),d(w[I+1][A+1]),d(w[I+1][A]))}}function l(x){const _=new b;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const x=new b;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const v=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const _=o[x+0],v=o[x+2],E=o[x+4],R=Math.max(_,v,E),w=Math.min(_,v,E);R>.9&&w<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){const v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){const x=new b,_=new b,v=new b,E=new b,R=new J,w=new J,I=new J;for(let M=0,A=0;M<r.length;M+=9,A+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),R.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),I.set(o[A+4],o[A+5]),E.copy(x).add(_).add(v).divideScalar(3);const B=m(E);y(R,A+0,x,B),y(w,A+2,_,B),y(I,A+4,v,B)}}function y(x,_,v,E){E<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.vertices,e.indices,e.radius,e.details)}}class tc extends Ri{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tc(e.radius,e.detail)}}const Fr=new b,Br=new b,ca=new b,zr=new Yt;class P0 extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(rs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:y,b:m,c:p}=zr;if(y.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),zr.getNormal(ca),u[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,v=u[x],E=u[_],R=zr[h[x]],w=zr[h[_]],I=`${v}_${E}`,M=`${E}_${v}`;M in d&&d[M]?(ca.dot(d[M].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(w.x,w.y,w.z)),d[M]=null):I in d||(d[I]={index0:l[x],index1:l[_],normal:ca.clone()})}}for(const g in d)if(d[g]){const{index0:y,index1:m}=d[g];Fr.fromBufferAttribute(a,y),Br.fromBufferAttribute(a,m),f.push(Fr.x,Fr.y,Fr.z),f.push(Br.x,Br.y,Br.z)}this.setAttribute("position",new ze(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class nc extends Aa{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Aa().fromJSON(i))}return this}}const I0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ru(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=F0(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ys(r,o,t,a,c,f,0),o}};function Ru(s,e,t,n,i){let r,o;if(i===K0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=hh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=hh(r,s[r],s[r+1],o);return o&&_o(o,o.next)&&(Zs(o),o=o.next),o}function bi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_o(t,t.next)||ht(t.prev,t,t.next)===0)){if(Zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(s,e,t,n,i,r,o){if(!s)return;!o&&r&&G0(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?N0(s,n,i,r):D0(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Zs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=U0(bi(s),e,t),Ys(s,e,t,n,i,r,2)):o===2&&O0(s,e,t,n,i,r):Ys(bi(s),e,t,n,i,r,1);break}}}function D0(s){const e=s.prev,t=s,n=s.next;if(ht(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(i,a,r,c,o,l,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ht(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ra(f,g,e,t,n),x=Ra(y,m,e,t,n);let _=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&is(a,h,c,u,l,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&is(a,h,c,u,l,d,v.x,v.y)&&ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&is(a,h,c,u,l,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&is(a,h,c,u,l,d,v.x,v.y)&&ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function U0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!_o(i,r)&&Cu(i,n,n.next,r)&&Ks(i,r)&&Ks(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zs(n),Zs(n.next),n=s=r),n=n.next}while(n!==s);return bi(n)}function O0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&X0(o,a)){let c=Lu(o,a);o=bi(o,o.next),c=bi(c,c.next),Ys(o,e,t,n,i,r,0),Ys(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function F0(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Ru(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(W0(l));for(i.sort(B0),r=0;r<i.length;r++)t=z0(i[r],t);return t}function B0(s,e){return s.x-e.x}function z0(s,e){const t=k0(s,e);if(!t)return e;const n=Lu(t,s);return bi(n,n.next),bi(t,t.next)}function k0(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&is(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ks(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&H0(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function H0(s,e){return ht(s.prev,s,e.prev)<0&&ht(e.next,s,s.next)<0}function G0(s,e,t,n){let i=s;do i.z===0&&(i.z=Ra(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ra(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function W0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function is(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function X0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!q0(s,e)&&(Ks(s,e)&&Ks(e,s)&&Y0(s,e)&&(ht(s.prev,s,e.prev)||ht(s,e.prev,e))||_o(s,e)&&ht(s.prev,s,s.next)>0&&ht(e.prev,e,e.next)>0)}function ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _o(s,e){return s.x===e.x&&s.y===e.y}function Cu(s,e,t,n){const i=Hr(ht(s,e,t)),r=Hr(ht(s,e,n)),o=Hr(ht(t,n,s)),a=Hr(ht(t,n,e));return!!(i!==r&&o!==a||i===0&&kr(s,t,e)||r===0&&kr(s,n,e)||o===0&&kr(t,s,n)||a===0&&kr(t,e,n))}function kr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Hr(s){return s>0?1:s<0?-1:0}function q0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Cu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ks(s,e){return ht(s.prev,s,s.next)<0?ht(s,e,s.next)>=0&&ht(s,s.prev,e)>=0:ht(s,e,s.prev)<0||ht(s,s.next,e)<0}function Y0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Lu(s,e){const t=new Ca(s.i,s.x,s.y),n=new Ca(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hh(s,e,t,n){const i=new Ca(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ca(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Zn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];uh(e),dh(n,e);let o=e.length;t.forEach(uh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,dh(n,t[c]);const a=I0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function uh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ic extends tt{constructor(e=new nc([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Z0;let _,v=!1,E,R,w,I;p&&(_=p.getSpacedPoints(h),v=!0,d=!1,E=p.computeFrenetFrames(h,!1),R=new b,w=new b,I=new b),d||(m=0,f=0,g=0,y=0);const M=a.extractPoints(l);let A=M.shape;const B=M.holes;if(!Zn.isClockWise(A)){A=A.reverse();for(let L=0,he=B.length;L<he;L++){const Z=B[L];Zn.isClockWise(Z)&&(B[L]=Z.reverse())}}const Q=Zn.triangulateShape(A,B),D=A;for(let L=0,he=B.length;L<he;L++){const Z=B[L];A=A.concat(Z)}function F(L,he,Z){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(he,Z)}const q=A.length,V=Q.length;function ne(L,he,Z){let se,ee,we;const _e=L.x-he.x,Me=L.y-he.y,De=Z.x-L.x,qe=Z.y-L.y,at=_e*_e+Me*Me,C=_e*qe-Me*De;if(Math.abs(C)>Number.EPSILON){const S=Math.sqrt(at),z=Math.sqrt(De*De+qe*qe),re=he.x-Me/S,te=he.y+_e/S,oe=Z.x-qe/z,Ee=Z.y+De/z,ce=((oe-re)*qe-(Ee-te)*De)/(_e*qe-Me*De);se=re+_e*ce-L.x,ee=te+Me*ce-L.y;const pe=se*se+ee*ee;if(pe<=2)return new J(se,ee);we=Math.sqrt(pe/2)}else{let S=!1;_e>Number.EPSILON?De>Number.EPSILON&&(S=!0):_e<-Number.EPSILON?De<-Number.EPSILON&&(S=!0):Math.sign(Me)===Math.sign(qe)&&(S=!0),S?(se=-Me,ee=_e,we=Math.sqrt(at)):(se=_e,ee=Me,we=Math.sqrt(at/2))}return new J(se/we,ee/we)}const W=[];for(let L=0,he=D.length,Z=he-1,se=L+1;L<he;L++,Z++,se++)Z===he&&(Z=0),se===he&&(se=0),W[L]=ne(D[L],D[Z],D[se]);const j=[];let U,X=W.concat();for(let L=0,he=B.length;L<he;L++){const Z=B[L];U=[];for(let se=0,ee=Z.length,we=ee-1,_e=se+1;se<ee;se++,we++,_e++)we===ee&&(we=0),_e===ee&&(_e=0),U[se]=ne(Z[se],Z[we],Z[_e]);j.push(U),X=X.concat(U)}for(let L=0;L<m;L++){const he=L/m,Z=f*Math.cos(he*Math.PI/2),se=g*Math.sin(he*Math.PI/2)+y;for(let ee=0,we=D.length;ee<we;ee++){const _e=F(D[ee],W[ee],se);Oe(_e.x,_e.y,-Z)}for(let ee=0,we=B.length;ee<we;ee++){const _e=B[ee];U=j[ee];for(let Me=0,De=_e.length;Me<De;Me++){const qe=F(_e[Me],U[Me],se);Oe(qe.x,qe.y,-Z)}}}const fe=g+y;for(let L=0;L<q;L++){const he=d?F(A[L],X[L],fe):A[L];v?(w.copy(E.normals[0]).multiplyScalar(he.x),R.copy(E.binormals[0]).multiplyScalar(he.y),I.copy(_[0]).add(w).add(R),Oe(I.x,I.y,I.z)):Oe(he.x,he.y,0)}for(let L=1;L<=h;L++)for(let he=0;he<q;he++){const Z=d?F(A[he],X[he],fe):A[he];v?(w.copy(E.normals[L]).multiplyScalar(Z.x),R.copy(E.binormals[L]).multiplyScalar(Z.y),I.copy(_[L]).add(w).add(R),Oe(I.x,I.y,I.z)):Oe(Z.x,Z.y,u/h*L)}for(let L=m-1;L>=0;L--){const he=L/m,Z=f*Math.cos(he*Math.PI/2),se=g*Math.sin(he*Math.PI/2)+y;for(let ee=0,we=D.length;ee<we;ee++){const _e=F(D[ee],W[ee],se);Oe(_e.x,_e.y,u+Z)}for(let ee=0,we=B.length;ee<we;ee++){const _e=B[ee];U=j[ee];for(let Me=0,De=_e.length;Me<De;Me++){const qe=F(_e[Me],U[Me],se);v?Oe(qe.x,qe.y+_[h-1].y,_[h-1].x+Z):Oe(qe.x,qe.y,u+Z)}}}me(),ve();function me(){const L=i.length/3;if(d){let he=0,Z=q*he;for(let se=0;se<V;se++){const ee=Q[se];Le(ee[2]+Z,ee[1]+Z,ee[0]+Z)}he=h+m*2,Z=q*he;for(let se=0;se<V;se++){const ee=Q[se];Le(ee[0]+Z,ee[1]+Z,ee[2]+Z)}}else{for(let he=0;he<V;he++){const Z=Q[he];Le(Z[2],Z[1],Z[0])}for(let he=0;he<V;he++){const Z=Q[he];Le(Z[0]+q*h,Z[1]+q*h,Z[2]+q*h)}}n.addGroup(L,i.length/3-L,0)}function ve(){const L=i.length/3;let he=0;Pe(D,he),he+=D.length;for(let Z=0,se=B.length;Z<se;Z++){const ee=B[Z];Pe(ee,he),he+=ee.length}n.addGroup(L,i.length/3-L,1)}function Pe(L,he){let Z=L.length;for(;--Z>=0;){const se=Z;let ee=Z-1;ee<0&&(ee=L.length-1);for(let we=0,_e=h+m*2;we<_e;we++){const Me=q*we,De=q*(we+1),qe=he+se+Me,at=he+ee+Me,C=he+ee+De,S=he+se+De;Fe(qe,at,C,S)}}}function Oe(L,he,Z){c.push(L),c.push(he),c.push(Z)}function Le(L,he,Z){Je(L),Je(he),Je(Z);const se=i.length/3,ee=x.generateTopUV(n,i,se-3,se-2,se-1);Ie(ee[0]),Ie(ee[1]),Ie(ee[2])}function Fe(L,he,Z,se){Je(L),Je(he),Je(se),Je(he),Je(Z),Je(se);const ee=i.length/3,we=x.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Ie(we[0]),Ie(we[1]),Ie(we[3]),Ie(we[1]),Ie(we[2]),Ie(we[3])}function Je(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Ie(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new co[i.type]().fromJSON(i)),new ic(n,e.options)}}const Z0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new J(r,o),new J(a,c),new J(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-u),new J(d,1-g),new J(y,1-p)]:[new J(a,1-c),new J(h,1-u),new J(f,1-g),new J(m,1-p)]}};function J0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sc extends Ri{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sc(e.radius,e.detail)}}class mi extends Ri{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mi(e.radius,e.detail)}}class rc extends tt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new J;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<i;y++){const m=y*(n+1);for(let p=0;p<n;p++){const x=p+m,_=x,v=x+n+1,E=x+n+2,R=x+1;a.push(_,v,R),a.push(v,E,R)}}this.setIndex(a),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oc extends tt{constructor(e=new nc([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Zn.isClockWise(x)===!0&&(g[m]=x.reverse())}const y=Zn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){const x=y[m],_=x[0]+u,v=x[1]+u,E=x[2]+u;n.push(_,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new oc(n,e.curveSegments)}}function $0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class yo extends tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const R=E/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+v,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=h[p][x+1],v=h[p][x],E=h[p+1][x],R=h[p+1][x+1];(p!==0||o>0)&&f.push(_,v,R),(p!==n-1||c<Math.PI)&&f.push(v,E,R)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ac extends Ri{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class Vn extends tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const y=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const y=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(y,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class cc extends tt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new b,d=new b,f=new b,g=new b,y=new b,m=new b,p=new b;for(let _=0;_<=n;++_){const v=_/n*r*Math.PI*2;x(v,r,o,e,f),x(v+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),y.crossVectors(m,p),p.crossVectors(y,m),y.normalize(),p.normalize();for(let E=0;E<=i;++E){const R=E/i*Math.PI*2,w=-t*Math.cos(R),I=t*Math.sin(R);u.x=f.x+(w*p.x+I*y.x),u.y=f.y+(w*p.y+I*y.y),u.z=f.z+(w*p.z+I*y.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(_/n),h.push(E/i)}}for(let _=1;_<=n;_++)for(let v=1;v<=i;v++){const E=(i+1)*(_-1)+(v-1),R=(i+1)*_+(v-1),w=(i+1)*_+v,I=(i+1)*(_-1)+v;a.push(E,R,I),a.push(R,w,I)}this.setIndex(a),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2));function x(_,v,E,R,w){const I=Math.cos(_),M=Math.sin(_),A=E/v*_,B=Math.cos(A);w.x=R*(2+B)*.5*I,w.y=R*(2+B)*M*.5,w.z=R*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class lc extends tt{constructor(e=new wu(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,c=new b,l=new J;let h=new b;const u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),x(),p()}function m(_){h=e.getPointAt(_/t,h);const v=o.normals[_],E=o.binormals[_];for(let R=0;R<=i;R++){const w=R/i*Math.PI*2,I=Math.sin(w),M=-Math.cos(w);c.x=M*v.x+I*E.x,c.y=M*v.y+I*E.y,c.z=M*v.z+I*E.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=i;v++){const E=(i+1)*(_-1)+(v-1),R=(i+1)*_+(v-1),w=(i+1)*_+v,I=(i+1)*(_-1)+v;g.push(E,R,I),g.push(R,w,I)}}function x(){for(let _=0;_<=t;_++)for(let v=0;v<=i;v++)l.x=_/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new lc(new co[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class j0 extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new b,r=new b;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let g=d,y=d+f;g<y;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),x=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,x),fh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),fh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ph=Object.freeze({__proto__:null,BoxGeometry:ft,CapsuleGeometry:ja,CircleGeometry:Qa,ConeGeometry:ec,CylinderGeometry:At,DodecahedronGeometry:tc,EdgesGeometry:P0,ExtrudeGeometry:ic,IcosahedronGeometry:sc,LatheGeometry:go,OctahedronGeometry:mi,PlaneGeometry:er,PolyhedronGeometry:Ri,RingGeometry:rc,ShapeGeometry:oc,SphereGeometry:yo,TetrahedronGeometry:ac,TorusGeometry:Vn,TorusKnotGeometry:cc,TubeGeometry:lc,WireframeGeometry:j0});class Q0 extends Ct{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ey extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xo extends Ct{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ty extends Ct{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends Ct{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class iy extends Ct{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class sy extends Ct{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ry extends Ct{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends tr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Gr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ay(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Pu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ly extends nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:r=e,a=2*t-n;break;case il:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:o=e,c=2*n-t;break;case il:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+x*o[l+E]+_*o[c+E]+v*o[u+E];return r}}class hy extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class uy extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&ay(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ls;class ys extends yn{}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Xs;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Iu extends yn{}Iu.prototype.ValueTypeName="color";class fs extends yn{}fs.prototype.ValueTypeName="number";class dy extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)_t.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ti extends yn{InterpolantFactoryMethodLinear(e){return new dy(this.times,this.values,this.getValueSize(),e)}}Ti.prototype.ValueTypeName="quaternion";Ti.prototype.DefaultInterpolation=ls;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends yn{}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Xs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends yn{}ps.prototype.ValueTypeName="vector";class Du{constructor(e,t=-1,n,i=Bd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(py(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=cy(c);c=mh(c,1,h),l=mh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new fs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,y){if(f.length!==0){const m=[],p=[];Pu(f,m,p,g),m.length!==0&&y.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const _=d[g];m.push(_.time),p.push(_.morphTarget===y?1:0)}i.push(new fs(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(ps,f+".position",d,"pos",i),n(Ti,f+".quaternion",d,"rot",i),n(ps,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return Iu;case"quaternion":return Ti;case"bool":case"boolean":return ys;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function py(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fy(s.type);if(s.times===void 0){const t=[],n=[];Pu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ms={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Nu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const my=new Nu;class xn{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xn.DEFAULT_MATERIAL_NAME="__DEFAULT";const wn={};class gy extends Error{constructor(e,t){super(e),this.response=t}}class $n extends xn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:i});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=wn[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{y+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let R=0,w=h.length;R<w;R++){const I=h[R];I.onProgress&&I.onProgress(E)}p.enqueue(v),x()}})}}});return new Response(m)}else throw new gy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ms.add(e,l);const h=wn[e];delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class La extends xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qs("img");function c(){h(),ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class _y extends xn{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,o=new La(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ci extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class yy extends Ci{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const la=new ke,gh=new b,_h=new b;class hc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xy extends hc{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Uu extends Ci{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yh=new ke,Ls=new b,ha=new b;class vy extends hc{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),ha.copy(n.position),ha.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh)}}class Ou extends Ci{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class My extends hc{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends Ci{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new My}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fu extends Ci{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sy extends Ci{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ey{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class by extends Ci{constructor(e=new Ey,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class dc extends xn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new $n(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=dc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Se().setHex(o.value);break;case"v2":i.uniforms[r].value=new J().fromArray(o.value);break;case"v3":i.uniforms[r].value=new b().fromArray(o.value);break;case"v4":i.uniforms[r].value=new it().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Xe().fromArray(o.value);break;case"m4":i.uniforms[r].value=new ke().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new J().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Q0,SpriteMaterial:gu,RawShaderMaterial:ey,ShaderMaterial:In,PointsMaterial:Za,MeshPhysicalMaterial:Dn,MeshStandardMaterial:xo,MeshPhongMaterial:ty,MeshToonMaterial:ny,MeshNormalMaterial:iy,MeshLambertMaterial:sy,MeshDepthMaterial:du,MeshDistanceMaterial:fu,MeshBasicMaterial:mn,MeshMatcapMaterial:ry,LineDashedMaterial:oy,LineBasicMaterial:tr,Material:Ct};return new t[e]}}class Js{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ty extends tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wy extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new $n(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],p=r(f,m.buffer),x=es(m.type,p),_=new Ya(x,m.stride);return _.uuid=m.uuid,t[g]=_,_}function r(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}const o=e.isInstancedBufferGeometry?new Ty:new tt,a=e.data.index;if(a!==void 0){const f=es(a.type,a.array);o.setIndex(new xt(f,1))}const c=e.data.attributes;for(const f in c){const g=c[f];let y;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);y=new Ei(m,g.itemSize,g.offset,g.normalized)}else{const m=es(g.type,g.array),p=g.isInstancedBufferAttribute?ds:xt;y=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(y.name=g.name),g.usage!==void 0&&y.setUsage(g.usage),g.updateRange!==void 0&&(y.updateRange.offset=g.updateRange.offset,y.updateRange.count=g.updateRange.count),o.setAttribute(f,y)}const l=e.data.morphAttributes;if(l)for(const f in l){const g=l[f],y=[];for(let m=0,p=g.length;m<p;m++){const x=g[m];let _;if(x.isInterleavedBufferAttribute){const v=i(e.data,x.data);_=new Ei(v,x.itemSize,x.offset,x.normalized)}else{const v=es(x.type,x.array);_=new xt(v,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),y.push(_)}o.morphAttributes[f]=y}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){const y=u[f];o.addGroup(y.start,y.count,y.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new b;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new ln(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Ay extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Js.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new $n(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Js.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new $n(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,a,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new nc().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new mo().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new wy;for(let r=0,o=e.length;r<o;r++){let a;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in ph?a=ph[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new dc;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Du.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:es(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Nu(t);r=new La(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let g=0,y=d.length;g<y;g++){const m=d[g],p=a(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new $r(p.data,p.width,p.height)))}i[u.uuid]=new ts(f)}else{const f=a(u.url);i[u.uuid]=new ts(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:es(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new La(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],g=await r(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new $r(g.data,g.width,g.height)))}n[c.uuid]=new ts(h)}else{const h=await r(c.url);n[c.uuid]=new ts(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let h;Array.isArray(l)?(h=new Ga,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new $r:h=new Rt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Ry)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],xh),h.wrapT=n(a.wrap[1],xh)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,vh)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,vh)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let g=0,y=d.length;g<y;g++){const m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":o=new mu,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Se(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new qa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Xa(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new Dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new fo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Fu(e.color,e.intensity);break;case"DirectionalLight":o=new uc(e.color,e.intensity);break;case"PointLight":o=new Ou(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Sy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Uu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new yy(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new by().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=c(e.material),o=new yu(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=c(e.material),o=new ge(h,u);break;case"InstancedMesh":h=a(e.geometry),u=c(e.material);const d=e.count,f=e.instanceMatrix,g=e.instanceColor;o=new xu(h,u,d),o.instanceMatrix=new ds(new Float32Array(f.array),16),g!==void 0&&(o.instanceColor=new ds(new Float32Array(g.array),g.itemSize));break;case"LOD":o=new m0;break;case"Line":o=new Qt(a(e.geometry),c(e.material));break;case"LineLoop":o=new Mu(a(e.geometry),c(e.material));break;case"LineSegments":o=new vu(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Su(a(e.geometry),c(e.material));break;case"Sprite":o=new p0(c(e.material));break;case"Group":o=new Xn;break;case"Bone":o=new Ka;break;default:o=new Qe}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const g=d[f];o.animations.push(r[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const g=d[f],y=o.getObjectByProperty("uuid",g.object);y!==void 0&&o.addLevel(y,g.distance,g.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const Ry={UVMapping:Oa,CubeReflectionMapping:xi,CubeRefractionMapping:vi,EquirectangularReflectionMapping:eo,EquirectangularRefractionMapping:to,CubeUVReflectionMapping:js},xh={RepeatWrapping:Mi,ClampToEdgeWrapping:Kt,MirroredRepeatWrapping:Vs},vh={NearestFilter:vt,NearestMipmapNearestFilter:no,NearestMipmapLinearFilter:Fs,LinearFilter:zt,LinearMipmapNearestFilter:Fa,LinearMipmapLinearFilter:Jn};class Cy extends xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){ms.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const fc="\\[\\]\\.:\\/",Ly=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Py="[^"+fc.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",pc),Dy=/(WCOD+)?/.source.replace("WCOD",Py),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Oy=new RegExp("^"+Iy+Dy+Ny+Uy+"$"),Fy=["material","materials","bones","map"];class By{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){const t=Oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=By;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bu{constructor(e,t,n=0,i=1/0){this.ray=new gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(Mh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pa(e[i],this,n,t);return n.sort(Mh),n}}function Mh(s,e){return s.distance-e.distance}function Pa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Pa(i[r],e,t,!0)}}class Sh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const Eh={type:"change"},ua={type:"start"},bh={type:"end"},Vr=new gs,Th=new Hn,zy=Math.cos(70*jh.DEG2RAD);class ky extends Ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",S),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eh),n.update(),r=i.NONE},this.update=function(){const P=new b,le=new _t().setFromUnitVectors(e.up,new b(0,1,0)),$=le.clone().invert(),Ne=new b,Te=new _t,Ce=new b,be=2*Math.PI;return function(Ye=null){const N=n.object.position;P.copy(N).sub(n.target),P.applyQuaternion(le),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&B(M(Ye)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ue=n.minAzimuthAngle,ie=n.maxAzimuthAngle;isFinite(ue)&&isFinite(ie)&&(ue<-Math.PI?ue+=be:ue>Math.PI&&(ue-=be),ie<-Math.PI?ie+=be:ie>Math.PI&&(ie-=be),ue<=ie?a.theta=Math.max(ue,Math.min(ie,a.theta)):a.theta=a.theta>(ue+ie)/2?Math.max(ue,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*l),P.setFromSpherical(a),P.applyQuaternion($),N.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Y=!1;if(n.zoomToCursor&&R){let ae=null;if(n.object.isPerspectiveCamera){const Re=P.length();ae=W(Re*l);const Ke=Re-ae;n.object.position.addScaledVector(v,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Re=new b(E.x,E.y,0);Re.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Y=!0;const Ke=new b(E.x,E.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(Re),n.object.updateMatrixWorld(),ae=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(Vr.origin.copy(n.object.position),Vr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vr.direction))<zy?e.lookAt(n.target):(Th.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vr.intersectPlane(Th,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Y=!0);return l=1,R=!1,Y||Ne.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(Eh),Ne.copy(n.object.position),Te.copy(n.object.quaternion),Ce.copy(n.target),Y=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",_e),n.domElement.removeEventListener("pointercancel",De),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",De),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Sh,c=new Sh;let l=1;const h=new b,u=new J,d=new J,f=new J,g=new J,y=new J,m=new J,p=new J,x=new J,_=new J,v=new b,E=new J;let R=!1;const w=[],I={};function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function B(P){c.theta-=P}function K(P){c.phi-=P}const Q=function(){const P=new b;return function($,Ne){P.setFromMatrixColumn(Ne,0),P.multiplyScalar(-$),h.add(P)}}(),D=function(){const P=new b;return function($,Ne){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ne,1):(P.setFromMatrixColumn(Ne,0),P.crossVectors(n.object.up,P)),P.multiplyScalar($),h.add(P)}}(),F=function(){const P=new b;return function($,Ne){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;P.copy(Ce).sub(n.target);let be=P.length();be*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*$*be/Te.clientHeight,n.object.matrix),D(2*Ne*be/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q($*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),D(Ne*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(P){if(!n.zoomToCursor)return;R=!0;const le=n.domElement.getBoundingClientRect(),$=P.clientX-le.left,Ne=P.clientY-le.top,Te=le.width,Ce=le.height;E.x=$/Te*2-1,E.y=-(Ne/Ce)*2+1,v.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function j(P){u.set(P.clientX,P.clientY)}function U(P){ne(P),p.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function fe(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*f.x/le.clientHeight),K(2*Math.PI*f.y/le.clientHeight),u.copy(d),n.update()}function me(P){x.set(P.clientX,P.clientY),_.subVectors(x,p),_.y>0?q(A()):_.y<0&&V(A()),p.copy(x),n.update()}function ve(P){y.set(P.clientX,P.clientY),m.subVectors(y,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(y),n.update()}function Pe(P){ne(P),P.deltaY<0?V(A()):P.deltaY>0&&q(A()),n.update()}function Oe(P){let le=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),n.update())}function Le(){if(w.length===1)u.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);u.set(P,le)}}function Fe(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);g.set(P,le)}}function Je(){const P=w[0].pageX-w[1].pageX,le=w[0].pageY-w[1].pageY,$=Math.sqrt(P*P+le*le);p.set(0,$)}function Ie(){n.enableZoom&&Je(),n.enablePan&&Fe()}function L(){n.enableZoom&&Je(),n.enableRotate&&Le()}function he(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const $=pe(P),Ne=.5*(P.pageX+$.x),Te=.5*(P.pageY+$.y);d.set(Ne,Te)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*f.x/le.clientHeight),K(2*Math.PI*f.y/le.clientHeight),u.copy(d)}function Z(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const le=pe(P),$=.5*(P.pageX+le.x),Ne=.5*(P.pageY+le.y);y.set($,Ne)}m.subVectors(y,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(y)}function se(P){const le=pe(P),$=P.pageX-le.x,Ne=P.pageY-le.y,Te=Math.sqrt($*$+Ne*Ne);x.set(0,Te),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),q(_.y),p.copy(x)}function ee(P){n.enableZoom&&se(P),n.enablePan&&Z(P)}function we(P){n.enableZoom&&se(P),n.enableRotate&&he(P)}function _e(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",De)),oe(P),P.pointerType==="touch"?z(P):qe(P))}function Me(P){n.enabled!==!1&&(P.pointerType==="touch"?re(P):at(P))}function De(P){Ee(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",De)),n.dispatchEvent(bh),r=i.NONE}function qe(P){let le;switch(P.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Li.DOLLY:if(n.enableZoom===!1)return;U(P),r=i.DOLLY;break;case Li.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),r=i.PAN}else{if(n.enableRotate===!1)return;j(P),r=i.ROTATE}break;case Li.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),r=i.ROTATE}else{if(n.enablePan===!1)return;X(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function at(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;fe(P);break;case i.DOLLY:if(n.enableZoom===!1)return;me(P);break;case i.PAN:if(n.enablePan===!1)return;ve(P);break}}function C(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(ua),Pe(P),n.dispatchEvent(bh))}function S(P){n.enabled===!1||n.enablePan===!1||Oe(P)}function z(P){switch(ce(P),w.length){case 1:switch(n.touches.ONE){case Pi.ROTATE:if(n.enableRotate===!1)return;Le(),r=i.TOUCH_ROTATE;break;case Pi.PAN:if(n.enablePan===!1)return;Fe(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),r=i.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function re(P){switch(ce(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Z(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(P),n.update();break;default:r=i.NONE}}function te(P){n.enabled!==!1&&P.preventDefault()}function oe(P){w.push(P)}function Ee(P){delete I[P.pointerId];for(let le=0;le<w.length;le++)if(w[le].pointerId==P.pointerId){w.splice(le,1);return}}function ce(P){let le=I[P.pointerId];le===void 0&&(le=new J,I[P.pointerId]=le),le.set(P.pageX,P.pageY)}function pe(P){const le=P.pointerId===w[0].pointerId?w[1]:w[0];return I[le.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",_e),n.domElement.addEventListener("pointercancel",De),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}const ri=new Bu,It=new b,zn=new b,ct=new _t,wh={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},da={type:"change"},Ah={type:"mouseDown"},Rh={type:"mouseUp",mode:null},Ch={type:"objectChange"};class Hy extends Qe{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Yy;this._gizmo=n,this.add(n);const i=new Ky;this._plane=i,this.add(i);const r=this;function o(x,_){let v=_;Object.defineProperty(r,x,{get:function(){return v!==void 0?v:_},set:function(E){v!==E&&(v=E,i[x]=E,n[x]=E,r.dispatchEvent({type:x+"-changed",value:E}),r.dispatchEvent(da))}}),r[x]=_,i[x]=_,n[x]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new b,c=new b,l=new _t,h=new _t,u=new b,d=new _t,f=new b,g=new b,y=new b,m=0,p=new b;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",h),o("cameraPosition",u),o("cameraQuaternion",d),o("pointStart",f),o("pointEnd",g),o("rotationAxis",y),o("rotationAngle",m),o("eye",p),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new _t,this._parentQuaternionInv=new _t,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new _t,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new _t,this._scaleStart=new b,this._getPointer=Gy.bind(this),this._onPointerDown=Wy.bind(this),this._onPointerHover=Vy.bind(this),this._onPointerMove=Xy.bind(this),this._onPointerUp=qy.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;ri.setFromCamera(e,this.camera);const t=fa(this._gizmo.picker[this.mode],ri);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){ri.setFromCamera(e,this.camera);const t=fa(this._plane,ri,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ah.mode=this.mode,this.dispatchEvent(Ah)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;ri.setFromCamera(e,this.camera);const o=fa(this._plane,ri,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(ct.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(It.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(It.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),zn.set(a,a,a)}else It.copy(this.pointStart),zn.copy(this.pointEnd),It.applyQuaternion(this._worldQuaternionInv),zn.applyQuaternion(this._worldQuaternionInv),zn.divide(It),t.search("X")===-1&&(zn.x=1),t.search("Y")===-1&&(zn.y=1),t.search("Z")===-1&&(zn.z=1);i.scale.copy(this._scaleStart).multiply(zn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(It.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(It.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(wh[t]),It.copy(wh[t]),r==="local"&&It.applyQuaternion(this.worldQuaternion),It.cross(this.eye),It.length()===0?c=!0:this.rotationAngle=this._offset.dot(It.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(da),this.dispatchEvent(Ch)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Rh.mode=this.mode,this.dispatchEvent(Rh)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(da),this.dispatchEvent(Ch),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ri}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Gy(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function Vy(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function Wy(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function Xy(s){this.enabled&&this.pointerMove(this._getPointer(s))}function qy(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function fa(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Wr=new Qs,st=new b(0,1,0),Lh=new b(0,0,0),Ph=new ke,Xr=new _t,jr=new _t,un=new b,Ih=new ke,Us=new b(1,0,0),di=new b(0,1,0),Os=new b(0,0,1),qr=new b,Ps=new b,Is=new b;class Yy extends Qe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new mn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new tr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const u=e.clone();u.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const y=new At(0,.04,.1,12);y.translate(0,.05,0);const m=new ft(.08,.08,.08);m.translate(0,.04,0);const p=new tt;p.setAttribute("position",new ze([0,0,0,1,0,0],3));const x=new At(.0075,.0075,.5,3);x.translate(0,.25,0);function _(F,q){const V=new Vn(F,.0075,3,64,q*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function v(){const F=new tt;return F.setAttribute("position",new ze([0,0,0,1,1,1],3)),F}const E={X:[[new ge(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new ge(x,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ge(y,o),[0,.5,0]],[new ge(y,o),[0,-.5,0],[Math.PI,0,0]],[new ge(x,o)]],Z:[[new ge(y,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ge(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new ge(new mi(.1,0),u.clone()),[0,0,0]]],XY:[[new ge(new ft(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new ge(new ft(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new ft(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},R={X:[[new ge(new At(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new At(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new At(.2,0,.6,4),n),[0,.3,0]],[new ge(new At(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new At(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new At(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ge(new mi(.2,0),n)]],XY:[[new ge(new ft(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new ft(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new ft(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new ge(new mi(.01,2),i),null,null,null,"helper"]],END:[[new ge(new mi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Qt(v(),i),null,null,null,"helper"]],X:[[new Qt(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qt(p,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qt(p,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new ge(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ge(_(.5,.5),r)]],Y:[[new ge(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ge(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ge(_(.75,1),d),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Qt(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new ge(new yo(.25,10,8),n)]],X:[[new ge(new Vn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ge(new Vn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ge(new Vn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ge(new Vn(.75,.1,2,24),n)]]},B={X:[[new ge(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(x,r),[0,0,0],[0,0,-Math.PI/2]],[new ge(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ge(m,o),[0,.5,0]],[new ge(x,o)],[new ge(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ge(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(x,a),[0,0,0],[Math.PI/2,0,0]],[new ge(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ge(new ft(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ge(new ft(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new ft(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new ft(.1,.1,.1),u.clone())]]},K={X:[[new ge(new At(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new At(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new At(.2,0,.6,4),n),[0,.3,0]],[new ge(new At(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new At(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new At(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ge(new ft(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new ft(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new ft(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new ft(.2,.2,.2),n),[0,0,0]]]},Q={X:[[new Qt(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qt(p,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qt(p,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(F){const q=new Qe;for(const V in F)for(let ne=F[V].length;ne--;){const W=F[V][ne][0].clone(),j=F[V][ne][1],U=F[V][ne][2],X=F[V][ne][3],fe=F[V][ne][4];W.name=V,W.tag=fe,j&&W.position.set(j[0],j[1],j[2]),U&&W.rotation.set(U[0],U[1],U[2]),X&&W.scale.set(X[0],X[1],X[2]),W.updateMatrix();const me=W.geometry.clone();me.applyMatrix4(W.matrix),W.geometry=me,W.renderOrder=1/0,W.position.set(0,0,0),W.rotation.set(0,0,0),W.scale.set(1,1,1),q.add(W)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(E)),this.add(this.gizmo.rotate=D(I)),this.add(this.gizmo.scale=D(B)),this.add(this.picker.translate=D(R)),this.add(this.picker.rotate=D(A)),this.add(this.picker.scale=D(K)),this.add(this.helper.translate=D(w)),this.add(this.helper.rotate=D(M)),this.add(this.helper.scale=D(Q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:jr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const o=i[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ct.setFromEuler(Wr.set(0,0,0)),o.quaternion.copy(n).multiply(ct),Math.abs(st.copy(Us).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ct.setFromEuler(Wr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(ct),Math.abs(st.copy(di).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ct.setFromEuler(Wr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(ct),Math.abs(st.copy(Os).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ct.setFromEuler(Wr.set(0,Math.PI/2,0)),st.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Ph.lookAt(Lh,st,di)),o.quaternion.multiply(ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),It.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),It.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(It),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(st.copy(Us).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(st.copy(di).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(st.copy(Os).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(st.copy(Os).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(st.copy(Us).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(st.copy(di).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Xr.copy(n),st.copy(this.eye).applyQuaternion(ct.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Ph.lookAt(this.eye,Lh,di)),o.name==="X"&&(ct.setFromAxisAngle(Us,Math.atan2(-st.y,st.z)),ct.multiplyQuaternions(Xr,ct),o.quaternion.copy(ct)),o.name==="Y"&&(ct.setFromAxisAngle(di,Math.atan2(st.x,st.z)),ct.multiplyQuaternions(Xr,ct),o.quaternion.copy(ct)),o.name==="Z"&&(ct.setFromAxisAngle(Os,Math.atan2(st.y,st.x)),ct.multiplyQuaternions(Xr,ct),o.quaternion.copy(ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class Ky extends ge{constructor(){super(new er(1e5,1e5,2,2),new mn({visible:!1,wireframe:!0,side:an,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),qr.copy(Us).applyQuaternion(t==="local"?this.worldQuaternion:jr),Ps.copy(di).applyQuaternion(t==="local"?this.worldQuaternion:jr),Is.copy(Os).applyQuaternion(t==="local"?this.worldQuaternion:jr),st.copy(Ps),this.mode){case"translate":case"scale":switch(this.axis){case"X":st.copy(this.eye).cross(qr),un.copy(qr).cross(st);break;case"Y":st.copy(this.eye).cross(Ps),un.copy(Ps).cross(st);break;case"Z":st.copy(this.eye).cross(Is),un.copy(Is).cross(st);break;case"XY":un.copy(Is);break;case"YZ":un.copy(qr);break;case"XZ":st.copy(Is),un.copy(Ps);break;case"XYZ":case"E":un.set(0,0,0);break}break;case"rotate":default:un.set(0,0,0)}un.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ih.lookAt(It.set(0,0,0),un,st),this.quaternion.setFromRotationMatrix(Ih)),super.updateMatrixWorld(e)}}function Dh(s,e){if(e===zd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ma||e===Zh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ma)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Zy extends xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ex(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new dx(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Js.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new $n(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zu){try{o[$e.KHR_BINARY_GLTF]=new fx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new jy;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new px(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new mx;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new gx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Jy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $y{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],St);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new uc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ou(h),l.distance=u;break;case"spot":l=new Uu(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class jy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],St),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(i)}}class Qy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(a,a)}return Promise.all(r)}}class tx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],St)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],St),Promise.all(r)}}class rx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],St),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,lt)),Promise.all(r)}}class ax{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lx{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hx{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ux{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class dx{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==jt.TRIANGLES&&l.mode!==jt.TRIANGLE_STRIP&&l.mode!==jt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const y=new ke,m=new b,p=new _t,x=new b(1,1,1),_=new xu(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,y.compose(m,p,x));for(const v in c)if(v==="_COLOR_0"){const E=c[v];_.instanceColor=new ds(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Qe.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const zu="glTF",Ds=12,Nh={JSON:1313821514,BIN:5130562};class fx{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,r=new DataView(e,Ds);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nh.JSON){const l=new Uint8Array(e,Ds+o,a);this.content=n.decode(l)}else if(c===Nh.BIN){const l=Ds+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ia[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ia[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=as[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],y=c[f];y!==void 0&&(g.normalized=y)}u(d)},a,l)})})}}class mx{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gx{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class ku extends nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,x=1-m,_=p-d+u;for(let v=0;v!==a;v++){const E=o[y+v+a],R=o[y+v+c]*h,w=o[g+v+a],I=o[g+v]*h;r[v]=x*E+_*R+m*w+p*I}return r}}const _x=new _t;class yx extends ku{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return _x.fromArray(r).normalize().toArray(r),r}}const jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:vt,9729:zt,9984:no,9985:Fa,9986:Fs,9987:Jn},Oh={33071:Kt,33648:Vs,10497:Mi},pa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ia={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xx={CUBICSPLINE:void 0,LINEAR:ls,STEP:Xs},ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),s.DefaultMaterial}function oi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Sx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ex(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ga(t.attributes):e=s.indices+":"+ga(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ga(s.targets[n]);return e}function ga(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Da(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Tx=new ke;class wx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new _y(this.options.manager):this.textureLoader=new Cy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $n(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return oi(r,a,i),Gn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Js.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=pa[i.type],a=as[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new xt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=pa[i.type],l=as[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(x);_||(y=new l(a,p*f,i.count*f/h),_=new Ya(y,f/h),t.cache.add(x,_)),m=new Ei(_,c,d%f/h,g)}else a===null?y=new l(i.count*c):y=new l(a,d,i.count*c),m=new xt(y,c,g);if(i.sparse!==void 0){const p=pa.SCALAR,x=as[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new x(o[1],_,i.sparse.count*p),R=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,I=E.length;w<I;w++){const M=E[w];if(m.setX(M,R[w*c]),c>=2&&m.setY(M,R[w*c+1]),c>=3&&m.setZ(M,R[w*c+2]),c>=4&&m.setW(M,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uh[d.magFilter]||zt,h.minFilter=Uh[d.minFilter]||Jn,h.wrapS=Oh[d.wrapS]||Mi,h.wrapT=Oh[d.wrapT]||Mi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Rt(y);m.needsUpdate=!0,d(m)}),t.load(Js.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||bx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Za,Ct.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tr,Ct.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],St),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const h=r.alphaMode||ma.OPAQUE;if(h===ma.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ma.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==mn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mn){const u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],St)}return r.emissiveTexture!==void 0&&o!==mn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,lt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&oi(i,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Fh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Ex(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Fh(new tt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?vx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const y=h[f],m=o[f];let p;const x=l[f];if(m.mode===jt.TRIANGLES||m.mode===jt.TRIANGLE_STRIP||m.mode===jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yu(y,x):new ge(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===jt.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,Zh):m.mode===jt.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,Ma));else if(m.mode===jt.LINES)p=new vu(y,x);else if(m.mode===jt.LINE_STRIP)p=new Qt(y,x);else if(m.mode===jt.LINE_LOOP)p=new Mu(y,x);else if(m.mode===jt.POINTS)p=new Su(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Sx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&oi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&oi(i,u[0],r),u[0];const d=new Xn;r.extensions&&oi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(jh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new mo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let x=0,_=d.length;x<_;x++){const v=d[x],E=f[x],R=g[x],w=y[x],I=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,E,R,w,I);if(M)for(let A=0;A<M.length;A++)p.push(M[A])}return new Du(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Tx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Ka:l.length>1?h=new Xn:l.length===1?h=l[0]:h=new Qe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gn(h,r),r.extensions&&oi(n,h,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Xn;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&oi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Ct||d instanceof Rt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];kn[r.path]===kn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(kn[r.path]){case kn.weights:l=fs;break;case kn.rotation:l=Ti;break;case kn.position:case kn.scale:l=ps;break;default:switch(n.itemSize){case 1:l=fs;break;case 2:case 3:default:l=ps;break}break}const h=i.interpolation!==void 0?xx[i.interpolation]:ls,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+kn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Da(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ti?yx:ku;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ax(s,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=Da(as[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new b,c=new b;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=Da(as[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Fh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ia[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Gn(s,e),Ax(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mx(s,e.targets,t):s})}const _a=new WeakMap;class Rx extends xn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new $n(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,lt).catch(n)}decodeDracoFile(e,t,n,i,r=St){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(_a.has(e)){const c=_a.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),_a.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new tt;e.index&&t.setIndex(new xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new xt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==lt)return;const n=new Se;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new $n(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Cx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Cx(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(y=>y.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const y={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let x,_;if(l.useUniqueIDs)_=h[m],x=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[m]]),_===-1)continue;x=a.GetAttribute(d,_)}const v=i(o,a,d,m,p,x);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),y.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(y.index=n(o,a,d)),o.destroy(d),y}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,y=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(y);a.GetAttributeDataArrayForAllPoints(c,u,m,y,p);const x=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const vo=document.querySelector("canvas.webgl");let Zt=new mu;const Lx=new Fu(16777215);Zt.add(Lx);const Hu=new uc(16777215,2.5);Hu.position.set(2,2,2);Zt.add(Hu);const fn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{fn.width=window.innerWidth,fn.height=window.innerHeight,Mt.aspect=fn.width/fn.height,Mt.updateProjectionMatrix(),cn.setSize(fn.width,fn.height),cn.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Mt=new Dt(45,fn.width/fn.height,.1,100);Zt.add(Mt);const cn=new pu({canvas:vo,preserveDrawingBuffer:!0});cn.shadowMap.enabled=!0;cn.shadowMap.type=Gh;cn.setSize(fn.width,fn.height);cn.setPixelRatio(Math.min(window.devicePixelRatio,2));cn.setClearColor(16777215,1);cn.outputColorSpace=St;const jn=new ky(Mt,vo);jn.target.set(0,1,0);jn.enableDamping=!0;jn.minDistance=8;jn.maxDistance=20;jn.minPolarAngle=0;jn.maxPolarAngle=1.3;const Nt=new Hy(Mt,cn.domElement);Nt.setSize(.8,.8,.8);Zt.add(Nt);const Gu=new Rx;Gu.setDecoderPath("/draco/");const Mo=new Zy;Mo.setDRACOLoader(Gu);let lo,mc,Vu=JSON.parse(localStorage.getItem("carType"));Vu==="Ford Transit"&&(mc="Ford Transit",Mo.load("/models/l2h2.glb",s=>{lo=s.scene,Zt.position.set(0,-.3,0),Zt.add(lo)}));Vu==="Mercedes Benz"&&Mo.load("/models/l3h3.glb",s=>{mc="Mercedes Benz",lo=s.scene,Zt.position.set(0,0,0),Zt.add(lo)});function kt(){return{x:-.5,y:.9,z:0}}const Px="/models/cabinet.glb";let Ix=document.querySelector(".cabinet");Ix.addEventListener("click",()=>{Ht(Px,kt())});const Dx="/models/cabinetWithBasin.glb";let Nx=document.querySelector(".cabinet-with-basin");Nx.addEventListener("click",()=>{Ht(Dx,kt())});const Ux="/models/drawers.glb";let Ox=document.querySelector(".drawers");Ox.addEventListener("click",()=>{Ht(Ux,kt())});const Fx="/models/glassDoorCabinet.glb";let Bx=document.querySelector(".glassDoorCabinet");Bx.addEventListener("click",()=>{Ht(Fx,kt())});const zx="/models/smallerUpperCabinet.glb";let kx=document.querySelector(".smallerUpperCabinet");kx.addEventListener("click",()=>{Ht(zx,kt())});const Hx="/models/hangedToilet.glb";let Gx=document.querySelector(".hangedToilet");Gx.addEventListener("click",()=>{Ht(Hx,kt())});const Vx="/models/shower.glb";let Wx=document.querySelector(".shower");Wx.addEventListener("click",()=>{Ht(Vx,kt())});const Xx="/models/toilet.glb";let qx=document.querySelector(".toilet");qx.addEventListener("click",()=>{Ht(Xx,kt())});const Yx="/models/bed.glb";let Kx=document.querySelector(".bed");Kx.addEventListener("click",()=>{Ht(Yx,kt())});const Zx="/models/mattress.glb";let Jx=document.querySelector(".mattress");Jx.addEventListener("click",()=>{Ht(Zx,kt())});const $x="/models/chestFreezer.glb";let jx=document.querySelector(".chestFreezer");jx.addEventListener("click",()=>{Ht($x,kt())});const Qx="/models/fridge.glb";let ev=document.querySelector(".fridge");ev.addEventListener("click",()=>{Ht(Qx,kt())});const tv="/models/cooker.glb";let nv=document.querySelector(".cooker");nv.addEventListener("click",()=>{Ht(tv,kt())});const iv="/models/cube.glb";let sv=document.querySelector(".cube");sv.addEventListener("click",()=>{Ht(iv,kt())});const rv="/models/sphere.glb";let ov=document.querySelector(".sphere");ov.addEventListener("click",()=>{Ht(rv,kt())});let Rn=[];const Ht=(s,e)=>{Mo.load(s,t=>{let n=t.scene;n.position.copy(e),Nt.attach(n),Rn.push({model:n}),Zt.add(n)})};let ai=document.querySelector(".kitchen-appliances"),ci=document.querySelector(".bathroom-appliances"),li=document.querySelector(".furniture"),hi=document.querySelector(".kitchen-items"),Qi=document.querySelector(".shapes"),av=document.querySelectorAll(".menu-buttons");for(const s of av)s.addEventListener("click",cv);function cv(s){s.target.id==="kitchen-menu-btn"&&(ai.style.display=="block"?ai.style.display="none":(ai.style.display="block",ci.style.display="none",li.style.display="none",hi.style.display="none")),s.target.id==="bathroom-menu-btn"&&(ci.style.display=="block"?ci.style.display="none":(ci.style.display="block",ai.style.display="none",li.style.display="none",hi.style.display="none",Qi.style.display="none")),s.target.id==="furniture-menu-btn"&&(li.style.display=="block"?li.style.display="none":(li.style.display="block",ai.style.display="none",ci.style.display="none",hi.style.display="none",Qi.style.display="none")),s.target.id==="kitchen-items-menu-btn"&&(hi.style.display=="block"?hi.style.display="none":(hi.style.display="block",ai.style.display="none",ci.style.display="none",li.style.display="none",Qi.style.display="none")),s.target.id==="shape-menu-btn"&&(Qi.style.display=="block"?Qi.style.display="none":(Qi.style.display="block",ai.style.display="none",ci.style.display="none",li.style.display="none",hi.style.display="none"))}let Gs=new J,Yr=new J;function lv(s){Gs.x=s.clientX/window.innerWidth*2-1,Gs.y=-(s.clientY/window.innerHeight)*2+1}function hv(s){Yr.x=s.clientX/window.innerWidth*2-1,Yr.y=-(s.clientY/window.innerHeight)*2+1,Gs.x===Yr.x&&Gs.y===Yr.y&&xv(Gs)}vo.addEventListener("mousedown",lv);vo.addEventListener("mouseup",hv);function uv(s){switch(s.keyCode){case 87:Nt.setMode("translate");break;case 69:Nt.setMode("rotate");break;case 82:Nt.setMode("scale");break}}window.addEventListener("keydown",uv,!0);let dv=document.querySelectorAll(".interaction-icon-button");function fv(s){s.target.id==="move-btn"&&(Nt.mode="translate"),s.target.id==="rotate-btn"&&(Nt.mode="rotate"),s.target.id==="scale-btn"&&(Nt.mode="scale")}for(const s of dv)s.addEventListener("click",fv);let pv=document.getElementById("info-length"),mv=document.getElementById("info-height"),gv=document.getElementById("info-width"),gc=document.querySelector(".info-sidebar");function Bh(s){console.log(s),s==="cabinet_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/cabinet.png",document.querySelector(".info-sidebar").style.display="block"),s==="cabinetWithBasin_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/cabinetWithBasin.png"),s==="drawers_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/drawers.png"),s==="glassDoorCabinet"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/glassdoorCabinet.png"),s==="smallerUpperCabinet_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/upperCabinet2.png"),s==="toilet_hang_round_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/toilet_hang_round.png"),s==="shower004"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/shower.png"),s==="water"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/lucapresidente/water.png"),(s==="bed_2_1"||s==="bed_2_3"||s==="bed_1")&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/bed.png"),s==="Cube002"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/scopia/air-mattress.png"),s==="chest-freezer_1"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/scopia/chest-freezer.png"),(s==="fridge_2"||s==="fridge_1")&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/fridge.png"),s==="cooker001"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/cooker.png"),s==="Cube"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/box.png"),s==="Sphere"&&(document.getElementById("model-image").src="https://www.sweethome3d.com/models/contributions/sphere.png"),gc.style.display="block"}let _v=document.getElementById("close-btn");_v.addEventListener("click",()=>{gc.style.display="none"});let $s;function Kr(s){s?Na.classList.remove("disabled"):Na.classList.add("disabled"),$s=s}let Na=document.getElementById("delete-btn");function yv(){$s&&($s.parent.removeFromParent(Zt),Nt.detach(),gc.style.display="none")}Na.addEventListener("click",yv);let zh,Zr;function kh(){$s&&(zh=new gn().setFromObject($s),Zr=zh.getSize(new b),pv.textContent="Length in meters: "+Math.round((Zr.x+Number.EPSILON)*100)/100,mv.textContent="Height in meters: "+Math.round((Zr.y+Number.EPSILON)*100)/100,gv.textContent="Width in meters: "+Math.round((Zr.z+Number.EPSILON)*100)/100)}let ya=new Bu;function xv(s){let e=[],t;if(ya.setFromCamera(s,Mt),Rn.length===1)for(const n of Rn){let i=ya.intersectObject(n.model);if(i.length){let r=i[0].object.parent;Nt.attach(r),Bh(i[0].object.name),Kr(i[0].object),kh()}else Nt.detach(),Kr(void 0)}if(Rn.length>1){for(let i=0;i<Rn.length;i++)e.push(Rn[i].model);let n=ya.intersectObjects(e);n.length?(t=n[0].object.parent,Nt.attach(t),Bh(t.children[0].name),Kr(t.children[0]),kh()):(Nt.detach(),Kr(void 0))}}function vv(){}Nt.addEventListener("change",vv);Nt.addEventListener("dragging-changed",s=>{jn.enabled=!s.value});function Mv(){localStorage.setItem("camera.position.x",Mt.position.x),localStorage.setItem("camera.position.y",Mt.position.y),localStorage.setItem("camera.position.z",Mt.position.z),localStorage.setItem("camera.rotation.x",Mt.rotation.x),localStorage.setItem("camera.rotation.y",Mt.rotation.y),localStorage.setItem("camera.rotation.z",Mt.rotation.z)}function Sv(){Mt.position.x=parseFloat(localStorage.getItem("camera.position.x")),Mt.position.y=parseFloat(localStorage.getItem("camera.position.y")),Mt.position.z=parseFloat(localStorage.getItem("camera.position.z")),Mt.rotation.x=parseFloat(localStorage.getItem("camera.rotation.x")),Mt.rotation.y=parseFloat(localStorage.getItem("camera.rotation.y")),Mt.rotation.z=parseFloat(localStorage.getItem("camera.rotation.z"))}function Ev(){Mv(),localStorage.setItem("localModels",JSON.stringify(Rn));let s=Zt.toJSON();localStorage.savedScene=JSON.stringify(s)}function bv(){let s=new Ay,e=JSON.parse(localStorage.getItem("localModels"));for(const n of e)s.parse(n.model,function(i){Rn.push({model:i}),Zt.add(i)});let t=JSON.parse(localStorage.savedScene);s.parse(t,function(n){}),Sv()}let Tv=document.getElementById("save-btn");Tv.addEventListener("click",Ev);window.addEventListener("load",bv);function wv(){localStorage.clear(),localStorage.setItem("carType",JSON.stringify(mc)),location.reload()}let Av=document.getElementById("reset-btn");Av.addEventListener("click",wv);function Rv(){let s;try{let e="image/jpeg",t="image/octet-stream";s=cn.domElement.toDataURL(e),Cv(s.replace(e,t),"my-van.jpg")}catch{return}}let Cv=function(s,e){let t=document.createElement("a");typeof t.download=="string"?(document.body.appendChild(t),t.download=e,t.href=s,t.click(),document.body.removeChild(t)):location.replace(uri)},Lv=document.getElementById("export-btn");Lv.addEventListener("click",Rv);const Wu=()=>{for(const s of Rn)s.model.updateMatrix();jn.update(),cn.render(Zt,Mt),window.requestAnimationFrame(Wu)};Wu();
//# sourceMappingURL=vanBuilder-f36a6ba6.js.map
