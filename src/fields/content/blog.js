import Util from '../../utils.js';
import Field from '../field.js';

export default class Blog extends Field {
  constructor (data = {}) {
    super(data);
    this.name = data.name || 'blog_field';
    this.label = data.label || Util.toSentenceCase(this.name);
    this.type = 'blog';
  }
}
