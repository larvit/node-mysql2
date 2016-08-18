var Iconv = require('iconv-lite');
// Charset to encoding type mapping


exports.bufferToString = function (buffer, characterSetCode) {

  // use UTF8, when charset code is known UTF8 code OR its not set
  if (!characterSetCode) {
    return buffer.toString('utf8');
  }

  return Iconv.decode(buffer, 'utf8');
};
