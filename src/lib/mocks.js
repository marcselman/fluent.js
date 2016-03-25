/*eslint no-shadow: [1, { "allow": ["lang"] }]*/

import PropertiesParser from './format/properties/parser';
import { Context } from './context';

export const lang = {
  code:'en-US',
  src: 'app',
};

export function createEntriesFromSource(source) {
  return PropertiesParser.parse(null, source);
}

export function MockContext(entries) {
  return {
    env: {},
    _getEntity(lang, {namespace, name}) {
      const id = `${namespace}:${name}`;
      return entries[id];
    },
    _memoizeIntlObject: Context.prototype._memoizeIntlObject,
  };
}
