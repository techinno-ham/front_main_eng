import React, { useEffect, useRef } from 'react';

const WidgetAnimation = () => {
  const canvasRef = useRef(null);
  // const max = 80;
  // const countInitial = 150;
  const max = 100;
  const countInitial = 300;
  const p = [];
  let count = countInitial;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 400;
    ctx.fillRect(0, 0, 300, 300);

    let r = 0;
    for (let a = 0; a < max; a++) {
      p.push([Math.cos(r), Math.sin(r), 0]);
      r += (Math.PI * 2) / max;
    }
    for (let a = 0; a < max; a++) p.push([0, p[a][0], p[a][1]]);
    for (let a = 0; a < max; a++) p.push([p[a][1], 0, p[a][0]]);

    const rus = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      let tim = count / 5;

      //Number of rays
      for (let e = 0; e < 2; e++) {
        tim *= 1.7;
        let s = 1 - e / 3;
        let a = tim / 59;
        const yp = Math.cos(a);
        const yp2 = Math.sin(a);
        //Ray animation timing
        //a = tim / 23;
        a= tim / 60
        const xp = Math.cos(a);
        const xp2 = Math.sin(a);
        const p2 = [];
        for (let a = 0; a < p.length; a++) {
          let x = p[a][0];
          let y = p[a][1];
          let z = p[a][2];
          const y1 = y * yp + z * yp2;
          let z1 = y * yp2 - z * yp;
          const x1 = x * xp + z1 * xp2;
          z = x * xp2 - z1 * xp;
          z1 = Math.pow(2, z * s);
          x = x1 * z1;
          y = y1 * z1;
          p2.push([x, y, z]);
        }

        s *= 120;
        for (let d = 0; d < 3; d++) {
          for (let a = 0; a < max; a++) {
            const b = p2[d * max + a];
            const c = p2[((a + 1) % max) + d * max];
            ctx.beginPath();
            //ctx.strokeStyle = `hsla(${((a / max) * 360) | 0},70%,60%,0.15)`;
            ctx.strokeStyle = `rgba(100,162,255,0.30)`
            ctx.lineWidth = Math.pow(6, b[2]);
            ctx.lineTo(b[0] * s + 200, b[1] * s + 200);
            ctx.lineTo(c[0] * s + 200, c[1] * s + 200);
            ctx.stroke();
          }
        }
      }
      count++;
      requestAnimationFrame(rus);
    };

    rus();
  }, []);

  return <canvas ref={canvasRef} style={{
    width:"60px",
height:"60px",
borderRadius: "40px",
overflow:"hidden",
  }}></canvas>;
};

export default WidgetAnimation;



//     , startAnimation = e=>{
//       let t, a, s, l, o, n;
//       if (eh.current || (null == e ? void 0 : e.profile_avatar) !== null)
//           return;
//       let rus = ()=>{
//           let e, r, i, c, d, h, m, u, p, x, g, f, w, v, b, j, y;
//           for (a.globalCompositeOperation = "source-over",
//           a.fillStyle = "rgba(0,0,0,0.03)",
//           a.fillRect(0, 0, t.width, t.height),
//           a.globalCompositeOperation = "lighter",
//           m = l / 5,
//           d = 0; d < 2; d++) {
//               for (m *= 1.7,
//               h = 1 - d / 3,
//               x = Math.cos(e = m / 59),
//               f = Math.sin(e),
//               p = Math.cos(e = m / 30),
//               g = Math.sin(e),
//               u = [],
//               e = 0; e < o.length; e++)
//                   w = o[e][0],
//                   j = (v = o[e][1]) * x + (b = o[e][2]) * f,
//                   w = (w * p + (y = v * f - b * x) * g) * (y = Math.pow(2, (b = w * g - y * p) * h)),
//                   v = j * y,
//                   u.push([w, v, b]);
//               for (h *= 120,
//               c = 0; c < 3; c++)
//                   for (e = 0; e < s; e++)
//                       r = u[c * s + e],
//                       i = u[(e + 1) % s + c * s],
//                       a.beginPath(),
//                       a.strokeStyle = "rgba(100,162,255,0.30)",
//                       a.lineWidth = Math.pow(6, r[2]),
//                       a.lineTo(r[0] * h + 200, r[1] * h + 200),
//                       a.lineTo(i[0] * h + 200, i[1] * h + 200),
//                       a.stroke()
//           }
//           l++,
//           n = requestAnimationFrame(rus)
//       }
//       ;
//       a = (t = document.getElementById("galiOrb")).getContext("2d"),
//       t.width = t.height = 400,
//       a.clearRect(0, 0, 300, 300),
//       s = 100,
//       l = 300,
//       o = [];
//       let r = 0;
//       for (let e = 0; e < s; e++)
//           o.push([Math.cos(r), Math.sin(r), 0]),
//           r += 2 * Math.PI / s;
//       for (let e = 0; e < s; e++)
//           o.push([0, o[e][0], o[e][1]]);
//       for (let e = 0; e < s; e++)
//           o.push([o[e][1], 0, o[e][0]]);
//       return rus(),
//       eh.current = !0,
//       ()=>{
//           cancelAnimationFrame(n),
//           eh.current = !1
//       }
//   }
//   ;
//   (0,
//   l.useEffect)(()=>{
//       let e = startAnimation(j);
//       return e
//   }
//   , [j]),