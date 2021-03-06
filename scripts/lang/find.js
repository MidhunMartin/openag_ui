/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// A simple implementation of Array.find (which is not available in IE).
export const find = (array, predicate) => {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i];
    }
  }
}

// Find an item in array, starting from right side of array and working
// toward the left.
// Returns result or null.
export const findRight = (array, predicate) => {
  for (var i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return array[i];
    }
  }
}