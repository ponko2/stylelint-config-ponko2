'use strict';

module.exports = {
  rules: {
    // Specify the minimum number of milliseconds for time values.
    'time-min-milliseconds': 100,

    // Disallow animation and transition less than or equal to 100ms.
    'time-no-imperceptible': true,
  }
};
