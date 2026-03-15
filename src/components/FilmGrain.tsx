import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    // Strong film grain
    float grain = hash(vUv * 600.0 + uTime * 0.15) * 0.5 + 0.5;
    grain = pow(grain, 1.8) * 0.55;

    // Secondary fine grain layer
    float fineGrain = hash(vUv * 1400.0 + uTime * 0.08) * 0.2;

    // Vertical scratches
    float scratch = 0.0;
    for (float i = 0.0; i < 6.0; i++) {
      float fi = i + 1.0;
      float sx = hash(vec2(fi, floor(uTime * 0.004 + fi)));
      float visible = step(0.92, hash(vec2(fi * 7.7, floor(uTime * 0.006))));
      float line = smoothstep(0.0008, 0.0, abs(vUv.x - sx) - 0.0004) * visible;
      scratch += line * 0.35;
    }

    // Dust particles
    float dust = 0.0;
    for (float i = 0.0; i < 10.0; i++) {
      vec2 dp = vec2(
        hash(vec2(i * 3.3, floor(uTime * 0.002))),
        hash(vec2(i * 7.7, floor(uTime * 0.002)))
      );
      float d = length(vUv - dp);
      float visible = step(0.85, hash(vec2(i * 11.1, floor(uTime * 0.003))));
      dust += smoothstep(0.004, 0.0, d) * 0.4 * visible;
    }

    // Flicker
    float flicker = 0.9 + 0.1 * hash(vec2(floor(uTime * 0.008), 0.0));

    // Strong vignette
    vec2 vig = vUv * (1.0 - vUv);
    float vignette = 1.0 - pow(vig.x * vig.y * 14.0, 0.22);

    float overlay = (grain + fineGrain + scratch + dust) * flicker + vignette * 0.18;
    gl_FragColor = vec4(0.0, 0.0, 0.0, clamp(overlay, 0.0, 0.7));
  }
`;

const FilmGrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      canvas.width = canvas.clientWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = canvas.clientHeight * Math.min(window.devicePixelRatio, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const loop = () => {
      t++;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default FilmGrain;
