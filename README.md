# socket-name-parser
 
## Methods:

### parseSocketName(name)

Returns corrected socket name or null if name can't be parsed. E.g. S01 => s1, S110 => null

### parsePinName(name)

Returns corrected pin name or null if name can't be parsed. E.g. s01A => S1A, s12F => null

### parseSocketNamesList(names)

* names - a single socket name or names array.

Returns list of corrected names or null if any of names can't be parsed. E.g. S01 => s1, ["s05","S12"] => ["s5","s12"], ["s110",4] => null

