import {drawWorld} from './scene.js';import {drawCharacter} from './character.js';
const canvas=document.querySelector('canvas');const ctx=canvas.getContext('2d');const q=new URLSearchParams(location.search);const t=Number(q.get('t')||0);const W=Number(q.get('w')||540),H=Number(q.get('h')||960);canvas.width=W;canvas.height=H;
const cam={pos:[Math.sin(t*.28)*.65,3.15,0],yaw:Math.sin(t*.18)*.045,fov:55};
const bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#152b46');bg.addColorStop(1,'#718ca4');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);drawWorld(ctx,cam,W,H,t);drawCharacter(ctx,cam,W,H,t,{pos:[0,.55,10],coat:'#e6a169'});
// Title panel
ctx.fillStyle='#0c1727d9';ctx.fillRect(0,0,W,Math.round(H*.115));ctx.fillStyle='#f6f1e9';ctx.font=`bold ${Math.round(W*.055)}px sans-serif`;ctx.textAlign='center';ctx.fillText('ALT ANİMASYON',W/2,H*.065);ctx.font=`${Math.round(W*.028)}px sans-serif`;ctx.fillText('2D karakter • 3D dünya',W/2,H*.092);
window.__renderReady=true;
