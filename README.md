# obfidx

Obfuscator for 32 bit integer.

Based on a sample script from [Pseudo encrypt - Postgresql wiki](https://wiki.postgresql.org/wiki/Pseudo_encrypt), by Daniel Vérité and Jaka Jancar.

This function guarantees following property, within given range:

 - output is uniquely associated to its integer input 
 - looks random
 - zero collision

Additionally, 

 - it returns a signed integer (postgres doesn't have unsigned integers anyway).
 - it's a self-inverse, that is: pseudo_encrypt(pseudo_encrypt(X)) = X
 - the output may be customized by changing this function of r1

## Usage

include/require obfidx js and:

    obfidx = obfidx a, b, c
    obfuscated-number = obfidx original-number

where `a`, `b` and `c` are some casual numbers used in following function:

    f = ((a * R1 + b ) % c ) / c

which guarantee a output value of `f(v)` in 0 ~ 1, and for any `x` = `y`, `f(x)` = `f(y)`.


## License

MIT
