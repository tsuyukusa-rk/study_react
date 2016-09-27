/*
* actions
*/
// Action名
export const SEND = 'SEND';

// Action Creators
export function send(value) {
  return { type: SEND, value };
}
