'use strict';

module.exports = {
  rules: {
    // Require or disallow a leading zero for fractional numbers less than 1.
    'number-leading-zero': 'never',

    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': 10,

    // Disallow trailing zeros within numbers.
    'number-no-trailing-zeros': true,

    // Disallow units for zero lengths.
    'number-zero-length-no-unit': true,
  }
};
