const css = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
].map((fontWeight) => {
  return `
@font-face {
  font-family: "Foo";
  src: url("./Foo-Regular.woff2") format("woff2");
  font-weight: ${fontWeight};
  font-style: normal;
}
@font-face {
  font-family: "Foo";
  src: url("./Foo-Regular.woff2") format("woff2");
  font-weight: ${fontWeight};
  font-style: italic;
}
`;
}).join('\n');

require('fs').writeFileSync('Foo.css', css);