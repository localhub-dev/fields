import Util from '../utils.js';

/**
 * The data for a field.
 * @param {object} data
 * @param {string} [data.name='blog_field'] Name
 * @param {string} [data.id] ID
 * @param {string} [data.label] Label
 * @param {Array<object>} [data.children=[]] Children in the group
 * @param {('content'|'style')} [data.tab] The tab type the group should appear on
 * @param {boolean} [data.expanded=false] Whether the group should be expanded by default
 * @param {object} [data.default={}] Default values
 */
export default class Field {
  constructor (data = {}) {
    this.id = data.id || Util.getRandomId();
    this.name = data.name;
    this.display_width = data.display_width || null;
    this.label = data.label;
    this.required = Boolean(data.required);
    this.locked = Boolean(data.locked);
  }
}
