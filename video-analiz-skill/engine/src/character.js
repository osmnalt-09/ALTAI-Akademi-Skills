// Original geometric 2D puppet on a world-space billboard.
import {cameraProject} from './scene.js';
export function drawCharacter(ctx,cam,w,h,t,config={}){const pos=config.pos||[0,.55,10],p=cameraProject(pos,cam,w,h);const scale=Math.min(2.3,7/p[2]);ctx.save();ctx.translate(p[0],p[1]);ctx.scale(scale,scale);const blink=(t%3.2)>3.05;const wave=Math.sin(t*4)*.25;ctx.lineCap='round';ctx.lineJoin='round';
// Back leg and arm
ctx.strokeStyle='#13243a';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(-18,-62);ctx.lineTo(-22,-6);ctx.moveTo(18,-62);ctx.lineTo(23,-6);ctx.stroke();
ctx.fillStyle=config.coat||'#e9a66e';ctx.strokeStyle='#1b283b';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-30,-145);ctx.quadraticCurveTo(0,-159,30,-145);ctx.lineTo(37,-65);ctx.quadraticCurveTo(0,-54,-37,-65);ctx.closePath();ctx.fill();ctx.stroke();
ctx.beginPath();ctx.moveTo(-27,-137);ctx.lineTo(-52,-94);ctx.lineTo(-64,-116);ctx.moveTo(27,-137);ctx.lineTo(47+12*wave,-111);ctx.lineTo(65+16*wave,-128);ctx.stroke();
// Head: rounded square silhouette, unique to ALT, no egg shape.
ctx.fillStyle='#f6d4b6';ctx.beginPath();ctx.moveTo(-40,-212);ctx.quadraticCurveTo(-43,-235,-19,-239);ctx.lineTo(20,-239);ctx.quadraticCurveTo(44,-236,42,-211);ctx.lineTo(39,-177);ctx.quadraticCurveTo(0,-157,-38,-179);ctx.closePath();ctx.fill();ctx.stroke();
ctx.fillStyle='#24364b';ctx.beginPath();ctx.moveTo(-41,-222);ctx.quadraticCurveTo(-22,-260,11,-248);ctx.quadraticCurveTo(44,-252,44,-220);ctx.lineTo(23,-231);ctx.lineTo(-9,-229);ctx.closePath();ctx.fill();
ctx.strokeStyle='#24364b';ctx.lineWidth=3;for(const x of [-15,17]){ctx.beginPath();ctx.moveTo(x-8,-206);ctx.lineTo(x+7,-206);ctx.stroke();if(!blink){ctx.fillStyle='#24364b';ctx.beginPath();ctx.arc(x,-201,3,0,Math.PI*2);ctx.fill()}}
ctx.beginPath();ctx.arc(0,-185,9,0,Math.PI);ctx.stroke();ctx.restore();}
