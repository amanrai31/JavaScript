# CONTENT => Bitwise, RegExp, Error, scope, Strict, this, JSON, debugging

## Bitwise

&	AND                     =>Sets each bit to 1 if both bits are 1
|	OR                      =>Sets each bit to 1 if one of two bits is 1
^	XOR	                    =>Sets each bit to 1 if only one of two bits is 1
~	NOT	                    =>Inverts all the bits
<<	Zero fill left shift	=> Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	    => Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	=> Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

**NOTE :** JS stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers. Before a bitwise operation is performed, JS converts numbers to 32 bits signed integers. 