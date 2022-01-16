import Util from '../../utils.js';
import Field from '../field.js';

export default class Group extends Field {
  /**
   * When fields are related to each other often it makes sense for them to be displayed
   * visually grouped. Modules and Themes support grouping multiple fields together. 
   * @param {object} data
   * @param {string} [data.name='blog_field'] Name
   * @param {string} [data.id] ID
   * @param {string} [data.label] Label
   * @param {Array<object>} [data.children=[]] Children in the group
   * @param {('content'|'style')} [data.tab] The tab type the group should appear on
   * @param {boolean} [data.expanded=false] Whether the group should be expanded by default
   * @param {object} [data.default={}] Default values
   */
  constructor (data = {
    label: 'Field group',
    required: false,
    locked: false,
    children: [],
    tab: 'content',
    expanded: false,
    default: {}
  }) {
    super(data);

    /**
     * Display width is useless for groups at the time of writing this, and HubSpot does
     * set it to null automatically, but we're documenting it here anyway.
     * @private
     * @readonly
     */
    this.display_width = null;

    this.label = data.label;
    this.name = data.name || Util.toSnakeCase(this.label) || 'field_group';
    this.children = data.children;

    /**
     * Make sure the tab value resolves to "CONTENT" or "STYLE", otherwise override
     * it to "CONTENT."
     */
    this.tab = [ 'CONTENT', 'STYLE' ].includes(data.tab?.toUpperCase()) ? data.tab.toUpperCase() : 'CONTENT';
    this.expanded = Boolean(data.expanded);

    /**
     * @readonly
     * @private
     */
    this.type = 'group';
    this.default = {};
  }
}

console.log(new Group())