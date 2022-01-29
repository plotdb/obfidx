m = "A23456789aBbCcDdEeFfGgHhiJjKkLMmNnPpQRrTtUuVvWwXxYy"
obfidx = (a = 1217,b = 708023,c = 1866593) -> (v) ->
  L1 = ( v .>>>. 16 ) .&. 65535
  R1 = v .&. 65535
  for i from 0 til 3
    L2 = R1
    R2 = L1 .^. parseInt((((a * R1 + b) % c) / c) * 32767)
    L1 = L2
    R1 = R2
  v = v2 = ((L1 .<<. 16) + R1)
  v = Math.abs(v)
  r = ""
  do
    u = v % (m.length - 1)
    r = m[u + 1] + r
    v = Math.floor(v / (m.length - 1))
  while v
  return (if v2 < 0 => m.0 else "") + r

if module? => module.exports = obfidx
else if window? => window.obfidx = obfidx
