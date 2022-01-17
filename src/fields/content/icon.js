import Util from '../../utils.js';
import Field from '../field.js';

export default class Icon extends Field {
  /**
   * Icon fields provide an icon picker UI to make it easier for content creators to add
   * icons to your modules. The Icon field is preloaded with FontAwesome Icons. Icon fields
   * are supported in modules. Icon fields can be used as style fields.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#icon}
   * @param {object} data The JSON data used to generate the field.
   * @param {object} [data.default={}] Icon object. // @todo Document subproperties
   * @param {('fontawesome-5.14.0'|'fontawesome-5.0.10')} [data.icon_set='fontawesome-5.14.0']
   * The FontAwesome icon set to use. Possible values are "fontawesome-5.14.0" or
   * "fontawesome-5.0.10".
   * -------------------------------------------------------------------------------------
   * @param {string} [data.help_text] Text that will appear in the editor via tooltip to
   * assist the content creator. Best used for information that is supplementary but not
   * required to use the field.
   * @param {string} [data.id] Unique id for a field. This is generated by HubSpot. When
   * building locally you do not need to specify this id.
   * @param {string} [data.inline_help_text] Help text that will be shown inline below the
   * label of the field (limit 300 chars). Best used for information required to use the field.
   * @param {string} [data.label='Icon field'] The text the content creator sees describing the
   * field. May contain spaces.
   * @param {boolean} [data.locked=false] Determines if the field is editable in the content
   * editor. If true, the field will not appear in the content editor.
   * @param {string} [data.name='icon_field'] The variable name you will use to refer to this
   * field's values, and is what the value of the field is stored against. Cannot contain
   * spaces or special characters. If no name is provided, it will default to a lower 
   * snake case value of the label.
   * @param {boolean} [data.required=false] Determines if the field can be left blank in the
   * editor. If true, content will not be allowed to publish without filling out this field.
   * @param {Array} [data.visibility] Determines the display conditions for a field.
   * @param {'half_width'|null} [data.display_width=null] Allows for side by side module
   * fields in content editors, rather than full-width fields, when set to "half_width". The
   * field will appear side-by-side with the next field in the fields.json file, as long as
   * that field is also set to "half_width".
   */
  constructor (data = {}) {
    super(data);
    this.label = data.label || 'Icon field';
    
    /**
     * @example
     * default: {
     *   name: 'accessible-icon',
     *   unicode: 'f368',
     *   type: 'regular'
     * }
     */
    this.default = data.default || {};

    /**
     * If a default type is provided, let's allow lowercase values and then automatically
     * convert them to uppercase ourself so they can be correctly processed by HubSpot.
     */
    if (this.default?.type) {
      this.default.type = this.default.type?.toUpperCase?.(); 
    }
    
    /**
     * @readonly
     * @private
     */
    this.type = 'icon';

    /**
     * Manually defined names get priority. If no name is set, try to set it to the lower
     * snake case of the label provided. If no label is set, fall back to hardcoded value.
     */
    this.name = data.name || Util.toSnakeCase(this.label) || 'icon_field';
  }
}
