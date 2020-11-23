function glyph(char, h = 700) {
  const id = char.charCodeAt(0).toString(16);
  return `
{
glyphname = ${char};
lastChange = "2020-11-23 19:29:53 +0000";
layers = (
{
layerId = "50596FD5-15C1-4009-8F9B-9D88456470BA";
paths = (
{
closed = 1;
nodes = (
"0 0 LINE",
"600 0 LINE",
"600 ${h} LINE",
"0 ${h} LINE"
);
}
);
width = 600;
}
);
unicode = 00${id};
}
`;
}

const glyphs = [
  ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  ['abcdefghijklmnopqrstuvwxyz0123456789 -+,;./!{}[]:~`"\'?%&*(_=)^$#@', 500]
].map(([set, size = 700]) => {
  return set.split('')
    .map((it) => glyph(it, size))
    .join(',');
});

require('fs').writeFileSync('glyphs.txt', glyphs);
