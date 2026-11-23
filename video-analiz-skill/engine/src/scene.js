// ALT Hybrid: independent perspective projection of a true 3D coordinate scene.
export function cameraProject(p,cam,w,h){const yaw=cam.yaw||0;let x=p[0]-cam.pos[0],y=p[1]-cam.pos[1],z=p[2]-cam.pos[2];let a=x*Math.cos(yaw)-z*Math.sin(yaw),b=x*Math.sin(yaw)+z*Math.cos(yaw);let depth=Math.max(.15,b);let f=(h*.5)/Math.tan((cam.fov||55)*Math.PI/360);return [w/2+a*f/depth,h/2-y*f/depth,depth]}
export function drawWorld(ctx,cam,w,h,t){const P=p=>cameraProject(p,cam,w,h);const polys=[];const quad=(v,c)=>polys.push({v:v.map(P),c,depth:v.reduce((s,p)=>s+P(p)[2],0)/v.length});
// Floor tiles and side walls are actual 3D quads, depth-sorted.
for(let z=2;z<20;z+=2)for(let x=-10;x<10;x+=2)quad([[x,0,z],[x+2,0,z],[x+2,0,z+2],[x,0,z+2]],((x+z)%4===0)?'#303b51':'#354259');
quad([[-8,0,16],[8,0,16],[8,8,16],[-8,8,16]],'#40536d');quad([[-8,0,2],[-8,0,16],[-8,8,16],[-8,8,2]],'#28344b');quad([[8,0,2],[8,0,16],[8,8,16],[8,8,2]],'#2b3b51');
// Raised stage, real volume
quad([[-2,0,9],[2,0,9],[2,.55,9],[-2,.55,9]],'#a86b49');quad([[-2,.55,9],[2,.55,9],[2,.55,12],[-2,.55,12]],'#d99c6b');quad([[2,0,9],[2,0,12],[2,.55,12],[2,.55,9]],'#825640');
polys.sort((a,b)=>b.depth-a.depth);for(const q of polys){ctx.beginPath();q.v.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=q.c;ctx.fill();ctx.strokeStyle='#202b3b';ctx.lineWidth=1.2;ctx.stroke()}
// Shadow anchored on the stage surface
const sp=P([0,.56,10]);ctx.save();ctx.translate(sp[0],sp[1]);ctx.scale(1,.24);ctx.beginPath();ctx.ellipse(0,0,Math.min(170,140/sp[2]*10),55,0,0,Math.PI*2);ctx.fillStyle='#0b16278a';ctx.fill();ctx.restore();
// Emissive window panel
const a=P([-2,3,15.95]),b=P([2,6.4,15.95]);ctx.fillStyle='#85c8d9';ctx.fillRect(a[0],b[1],b[0]-a[0],a[1]-b[1]);ctx.strokeStyle='#e8d7b4';ctx.lineWidth=5;ctx.strokeRect(a[0],b[1],b[0]-a[0],a[1]-b[1]);}
