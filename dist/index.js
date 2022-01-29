(function(){
  var m, obfidx;
  m = "A23456789aBbCcDdEeFfGgHhiJjKkLMmNnPpQRrTtUuVvWwXxYy";
  obfidx = function(a, b, c){
    a == null && (a = 1217);
    b == null && (b = 708023);
    c == null && (c = 1866593);
    return function(v){
      var L1, R1, i$, i, L2, R2, v2, r, u;
      L1 = v >>> 16 & 65535;
      R1 = v & 65535;
      for (i$ = 0; i$ < 3; ++i$) {
        i = i$;
        L2 = R1;
        R2 = L1 ^ parseInt((((a * R1 + b) % c) / c) * 32767);
        L1 = L2;
        R1 = R2;
      }
      v = v2 = (L1 << 16) + R1;
      v = Math.abs(v);
      r = "";
      do {
        u = v % (m.length - 1);
        r = m[u + 1] + r;
        v = Math.floor(v / (m.length - 1));
      } while (v);
      return (v2 < 0 ? m[0] : "") + r;
    };
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = obfidx;
  } else if (typeof window != 'undefined' && window !== null) {
    window.obfidx = obfidx;
  }
}).call(this);
