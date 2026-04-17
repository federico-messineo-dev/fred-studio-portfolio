import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RubiksCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = mountRef.current;
    if (!wrap) return;

    const W = () => wrap.clientWidth;
    const H = () => wrap.clientHeight;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(38, W() / H(), 0.1, 100);
    cam.position.set(4.8, 3.8, 7);
    cam.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W(), H());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    wrap.appendChild(renderer.domElement);

    const cg = new THREE.Group();
    cg.rotation.x = 0.3;
    cg.rotation.y = 0.7;
    scene.add(cg);

    const GAP = 1.06;
    const cubies: { m: THREE.Group; lx: number; ly: number; lz: number }[] = [];
    let isAnim = false;
    let hist: { a: string; l: number; d: number }[] = [];

    function build() {
      cubies.forEach(c => cg.remove(c.m));
      cubies.length = 0;
      hist.length = 0;

      for (let x = -1; x <= 1; x++)
        for (let y = -1; y <= 1; y++)
          for (let z = -1; z <= 1; z++) {
            const group = new THREE.Group();
            group.position.set(x * GAP, y * GAP, z * GAP);

            const edges = new THREE.EdgesGeometry(
              new THREE.BoxGeometry(0.88, 0.88, 0.88)
            );
            const line = new THREE.LineSegments(
              edges,
              new THREE.LineBasicMaterial({
                color: 0x00ff88,
                transparent: true,
                opacity: 0.85,
              })
            );
            group.add(line);

            const inner = new THREE.Mesh(
              new THREE.BoxGeometry(0.82, 0.82, 0.82),
              new THREE.MeshBasicMaterial({
                color: 0x001a0d,
                transparent: true,
                opacity: 0.45,
              })
            );
            group.add(inner);
            cg.add(group);
            cubies.push({ m: group, lx: x, ly: y, lz: z });
          }
    }
    build();

    function updLog(axis: string, layer: number, dir: number) {
      const key = ('l' + axis) as 'lx' | 'ly' | 'lz';
      cubies
        .filter(c => c[key] === layer)
        .forEach(c => {
          const { lx, ly, lz } = c;
          if (axis === 'y') {
            [c.lx, c.lz] = dir > 0 ? [lz, -lx] : [-lz, lx];
          } else if (axis === 'x') {
            [c.ly, c.lz] = dir > 0 ? [-lz, ly] : [lz, -ly];
          } else {
            [c.lx, c.ly] = dir > 0 ? [-ly, lx] : [ly, -lx];
          }
        });
    }

    function rotLayer(
      axis: string,
      layer: number,
      dir: number,
      ms = 200
    ): Promise<void> {
      return new Promise(res => {
        isAnim = true;
        const key = ('l' + axis) as 'lx' | 'ly' | 'lz';
        const grp = cubies.filter(c => c[key] === layer);
        const piv = new THREE.Group();
        cg.add(piv);
        grp.forEach(c => piv.attach(c.m));
        const target = (dir * Math.PI) / 2;
        const t0 = performance.now();

        (function step(now: number) {
          const p = Math.min((now - t0) / ms, 1);
          const e =
            p < 0.5 ? 4 * p * p * p : 1 - Math.pow(2 - 2 * p, 3) / 2;
          (piv.rotation as any)[axis] = target * e;
          if (p < 1) return requestAnimationFrame(step);
          (piv.rotation as any)[axis] = target;
          grp.forEach(c => {
            cg.attach(c.m);
            c.m.position.x = Math.round(c.m.position.x / GAP) * GAP;
            c.m.position.y = Math.round(c.m.position.y / GAP) * GAP;
            c.m.position.z = Math.round(c.m.position.z / GAP) * GAP;
          });
          cg.remove(piv);
          updLog(axis, layer, dir);
          isAnim = false;
          res();
        })(t0);
      });
    }

    const MOVES = ['x', 'y', 'z'].flatMap(a =>
      [-1, 0, 1].flatMap(l => [-1, 1].map(d => ({ a, l, d })))
    );

    async function scramble() {
      if (isAnim) return;
      hist = [];
      const moves = Array.from({ length: 20 }, () =>
        MOVES[Math.floor(Math.random() * MOVES.length)]
      );
      for (const m of moves) {
        hist.push({ a: m.a, l: m.l, d: -m.d });
        await rotLayer(m.a, m.l, m.d, 80);
      }
    }

    const scrambleTimer = setTimeout(scramble, 3000);

    // Drag / touch
    let drag = false;
    let prev = { x: 0, y: 0 };
    let autoRot = true;

    const startD = (x: number, y: number) => {
      drag = true;
      prev = { x, y };
      autoRot = false;
    };

    const moveD = (x: number, y: number) => {
      if (!drag) return;
      cg.rotation.y += (x - prev.x) * 0.009;
      cg.rotation.x += (y - prev.y) * 0.009;
      prev = { x, y };
    };

    const endD = () => {
      drag = false;
      autoRot = true;
    };

    const onMouseDown = (e: MouseEvent) => startD(e.clientX, e.clientY);
    const onMouseMove = (e: MouseEvent) => moveD(e.clientX, e.clientY);
    const onMouseUp = () => endD();

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const isTablet = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const diagonal = Math.sqrt(width * width + height * height);
  return diagonal >= 768; // Tablets typically have larger screens
};

const onTouchStart = (e: TouchEvent) => {
  // On tablets, prevent default but don't stop propagation to avoid canvas removal
  if (isTablet()) {
    e.preventDefault();
    return;
  }
  // On phones, prevent default and stop propagation
  if (isTouchDevice() && !isTablet()) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return;
  }
  startD(e.touches[0].clientX, e.touches[0].clientY);
};
const onTouchMove = (e: TouchEvent) => {
  // On tablets, prevent default and stop propagation to avoid canvas removal
  if (isTablet()) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return;
  }
  // On phones, prevent default and stop propagation
  if (isTouchDevice() && !isTablet()) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return;
  }
  if (!drag) return;
  moveD(e.touches[0].clientX, e.touches[0].clientY);
};
const onTouchEnd = (e: TouchEvent) => {
  // On tablets, prevent default but don't stop propagation
  if (isTablet()) {
    e.preventDefault();
    return;
  }
  // On phones, prevent default and stop propagation
  if (isTouchDevice() && !isTablet()) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return;
  }
  endD();
};

    const cnv = renderer.domElement;
    cnv.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
cnv.addEventListener('touchstart', onTouchStart, { passive: true });
window.addEventListener('touchmove', onTouchMove, { passive: true });
window.addEventListener('touchend', onTouchEnd);

    const ro = new ResizeObserver(() => {
      renderer.setSize(W(), H());
      cam.aspect = W() / H();
      cam.updateProjectionMatrix();
    });
    ro.observe(wrap);

    let rafId: number;
    (function loop() {
      rafId = requestAnimationFrame(loop);
      if (autoRot && !isAnim) {
        cg.rotation.y += 0.004;
        cg.rotation.x =
          0.3 + Math.sin(performance.now() * 0.0004) * 0.08;
      }
      renderer.render(scene, cam);
    })();

    return () => {
      clearTimeout(scrambleTimer);
      cancelAnimationFrame(rafId);
      ro.disconnect();
      cnv.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cnv.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (wrap.contains(cnv)) wrap.removeChild(cnv);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default RubiksCube;