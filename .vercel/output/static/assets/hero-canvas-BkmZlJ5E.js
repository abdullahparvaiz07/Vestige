import{c as e,n as t,r as n}from"./with-selector-DB4IYXk9.js";import{_ as r,c as i,h as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m,y as h}from"./Environment-BrA4nRtd.js";var g={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},v=e(n()),y=v.forwardRef(({children:e,enabled:t=!0,speed:n=1,rotationIntensity:r=1,floatIntensity:a=1,floatingRange:s=[-.1,.1],autoInvalidate:c=!1,...l},u)=>{let d=v.useRef(null);v.useImperativeHandle(u,()=>d.current,[]);let f=v.useRef(Math.random()*1e4);return o(e=>{if(!t||n===0)return;c&&e.invalidate();let o=f.current+e.clock.elapsedTime;d.current.rotation.x=Math.cos(o/4*n)/8*r,d.current.rotation.y=Math.sin(o/4*n)/8*r,d.current.rotation.z=Math.sin(o/4*n)/20*r;let l=Math.sin(o/4*n)/10;l=i.mapLinear(l,-.1,.1,s?.[0]??-.1,s?.[1]??.1),d.current.position.y=l*a,d.current.updateMatrix()}),v.createElement(`group`,l,v.createElement(`group`,{ref:d,matrixAutoUpdate:!1},e))}),b=v.forwardRef(({scale:e=10,frames:t=1/0,opacity:n=1,width:r=1,height:i=1,blur:d=1,near:p=0,far:y=10,resolution:b=512,smooth:x=!0,color:S=`#000000`,depthWrite:C=!1,renderOrder:w,...T},E)=>{let D=v.useRef(null),O=l(e=>e.scene),k=l(e=>e.gl),A=v.useRef(null);r*=Array.isArray(e)?e[0]:e||1,i*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=v.useMemo(()=>{let e=new h(b,b),t=new h(b,b);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let n=new u(r,i).rotateX(Math.PI/2),o=new s(n),c=new m;c.depthTest=c.depthWrite=!1,c.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new f(S)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let l=new a(g),d=new a(_);return d.depthTest=l.depthTest=!1,[e,n,c,o,l,d,t]},[b,r,i,e,S]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return o(()=>{A.current&&(t===1/0||z<t)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(d),x&&R(d*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),v.useImperativeHandle(E,()=>D.current,[]),v.createElement(`group`,c({"rotation-x":Math.PI/2},T,{ref:D}),v.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},v.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:n,depthWrite:C})),v.createElement(`orthographicCamera`,{ref:A,args:[-r/2,r/2,i/2,-i/2,p,y]}))}),x=t();function S(){let e=(0,v.useRef)(null),t=(0,v.useRef)({x:0,y:0}),{pointer:n}=l();return o((r,a)=>{t.current.x=n.y*.25,t.current.y=n.x*.45,e.current&&(e.current.rotation.x=i.damp(e.current.rotation.x,t.current.x,3,a),e.current.rotation.y=i.damp(e.current.rotation.y,t.current.y,3,a))}),(0,x.jsx)(y,{speed:1.2,rotationIntensity:.15,floatIntensity:.6,children:(0,x.jsxs)(`group`,{ref:e,children:[(0,x.jsxs)(`mesh`,{position:[0,.1,0],castShadow:!0,children:[(0,x.jsx)(`latheGeometry`,{args:[[new r(.02,-1.1),new r(.55,-1.05),new r(.9,-.6),new r(1.05,0),new r(.95,.55),new r(.65,.95),new r(.55,1.05),new r(.6,1.15)],128]}),(0,x.jsx)(`meshPhysicalMaterial`,{color:`#1a1512`,roughness:.55,metalness:.05,clearcoat:.35,clearcoatRoughness:.6,sheen:.3,sheenColor:`#6b5f52`})]}),(0,x.jsxs)(`mesh`,{position:[0,1.16,0],rotation:[Math.PI/2,0,0],children:[(0,x.jsx)(`torusGeometry`,{args:[.6,.012,16,96]}),(0,x.jsx)(`meshStandardMaterial`,{color:`#c9b99a`,roughness:.3,metalness:.4})]})]})})}function C(){let e=(0,v.useRef)(null),{pointer:t,viewport:n}=l();return o((r,a)=>{e.current&&(e.current.position.x=i.damp(e.current.position.x,t.x*n.width*.6,4,a),e.current.position.y=i.damp(e.current.position.y,t.y*n.height*.4+3,4,a))}),(0,x.jsx)(`spotLight`,{ref:e,position:[0,4,4],angle:.55,penumbra:.9,intensity:35,distance:12,color:`#f5eeda`})}function w(){return(0,x.jsxs)(d,{shadows:!0,dpr:[1,1.5],camera:{position:[0,.2,4.2],fov:32},gl:{antialias:!0,alpha:!0},style:{background:`transparent`},children:[(0,x.jsx)(`color`,{attach:`background`,args:[`#0f0d0b`]}),(0,x.jsx)(`fog`,{attach:`fog`,args:[`#0f0d0b`,4,9]}),(0,x.jsx)(`ambientLight`,{intensity:.15}),(0,x.jsx)(`directionalLight`,{position:[-3,2,2],intensity:.4,color:`#f5eeda`}),(0,x.jsx)(C,{}),(0,x.jsxs)(v.Suspense,{fallback:null,children:[(0,x.jsx)(S,{}),(0,x.jsx)(b,{position:[0,-1.15,0],opacity:.5,scale:6,blur:2.4,far:2,color:`#000000`}),(0,x.jsx)(p,{preset:`warehouse`,environmentIntensity:.35})]})]})}export{w as default};