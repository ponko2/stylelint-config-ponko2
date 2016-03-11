import config    from '../';
import stylelint from 'stylelint';
import test      from 'ava';

const validCss = (
`/**
 * Multi-line comment
 */

@import url(x.css);
@import url(y.css);

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, .8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-1 {
  margin: 10px;
}

.selector-a,
.selector-b {
  @extend .foo;
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (min-orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: Avenir, "Open Sans", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto;
  }
}


/* Flush single line comment */
@media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: "→";
    background-image: url(x.svg);
  }
}

.block {
  &__element {
    &--modifier {
      margin: 10px;
    }
  }
}

`);

const invalidCss = (
`.selector a {
  top: 0.2em;
}
`);

test('no warnings with valid css', t => {
  const result = stylelint.lint({
    code: validCss,
    config,
    syntax: 'scss'
  }).then(data => {
    const {errored, results} = data;
    const {warnings} = results[0];
    t.notOk(errored, 'no errored');
    t.is(warnings.length, 0, 'flags no warnings');
  });

  return result;
});

test('a warning with invalid css', t => {
  const result = stylelint.lint({
    code: invalidCss,
    config,
    syntax: 'scss'
  }).then(data => {
    const {errored, results} = data;
    const {warnings} = results[0];
    t.ok(errored, 'errored');
    t.is(warnings.length, 1, 'flags one warning');
    t.is(warnings[0].text, 'Unexpected leading zero (number-leading-zero)', 'correct warning text');
  });

  return result;
});
