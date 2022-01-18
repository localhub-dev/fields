import Field from './fields/field.js';

// @todo Handle JSDoc documentation of subproperties for all fields that have object properties.
// @todo Change JSDoc stuff we changed from uppercase to lowercase, back to uppercase, but still
// make those values case-insensitive (convert to uppercase in code like we have been)

/**
 * Content field imports
 */
import Blog from './fields/content/blog.js';
import Boolean from './fields/content/boolean.js';
import Choice from './fields/content/choice.js';
import Color from './fields/content/color.js';
import CRMObject from './fields/content/crmobject.js';
import CTA from './fields/content/cta.js';
import Date from './fields/content/date.js';
import DateTime from './fields/content/datetime.js';
import Email from './fields/content/email.js';
import Embed from './fields/content/embed.js';
import File from './fields/content/file.js';
import FollowUpEmail from './fields/content/followupemail.js';
import Font from './fields/content/font.js';
import Form from './fields/content/form.js';
import Group from './fields/content/group.js';
import HubDBRow from './fields/content/hubdbrow.js';
import HubDBTable from './fields/content/hubdbtable.js';
import Icon from './fields/content/icon.js';
import Image from './fields/content/image.js';
import Link from './fields/content/link.js';
import Logo from './fields/content/logo.js';
import Meeting from './fields/content/meeting.js';
import Menu from './fields/content/menu.js';
import Number from './fields/content/number.js';
import Page from './fields/content/page.js';
import Payment from './fields/content/payment.js';
import RichText from './fields/content/richtext.js';
import SimpleMenu from './fields/content/simplemenu.js';
import Tag from './fields/content/tag.js';
import Text from './fields/content/text.js';
import URL from './fields/content/url.js';
import Video from './fields/content/video.js';

/**
 * Style field imports
 */
import Alignment from './fields/style/alignment.js';
import BackgroundImage from './fields/style/backgroundimage.js';
import Border from './fields/style/border.js';
import Gradient from './fields/style/gradient.js';
import Spacing from './fields/style/spacing.js';
import TextAlignment from './fields/style/textalignment.js';

export {
  Field,
  Group,

  /**
   * Content fields
   */
  Blog,
  Boolean,
  Choice,
  Color,
  CRMObject,
  CTA,
  Date,
  DateTime,
  Email,
  Embed,
  File,
  FollowUpEmail,
  Font,
  Form,
  HubDBRow,
  HubDBTable,
  Icon,
  Image,
  Link,
  Logo,
  Meeting,
  Menu,
  Number,
  Page,
  Payment,
  RichText,
  SimpleMenu,
  Tag,
  Text,
  URL,
  Video,

  /**
   * Style fields
   */
  Alignment,
  BackgroundImage,
  Border,
  Gradient,
  Spacing,
  TextAlignment
};


/**
 * We're exporting default here as well as named exports above in order to give developers
 * a little more freedom with their code style. Importing named exports is generally
 * the preferred style, but we don't want to force developers into one way or the other.
 */
export default {
  Field,
  Group,

  /**
   * Content fields
   */
  Blog,
  Boolean,
  Choice,
  Color,
  CRMObject,
  CTA,
  Date,
  DateTime,
  Email,
  Embed,
  File,
  FollowUpEmail,
  Font,
  Form,
  HubDBRow,
  HubDBTable,
  Icon,
  Image,
  Link,
  Logo,
  Meeting,
  Menu,
  Number,
  Page,
  Payment,
  RichText,
  SimpleMenu,
  Tag,
  Text,
  URL,
  Video,

  /**
   * Style fields
   */
  Alignment,
  BackgroundImage,
  Border,
  Gradient,
  Spacing,
  TextAlignment
};

/**
 * Testing intellisense
 */
// new Field();
// new Group();
// new Blog();
// new Boolean();
// new Choice();
// new Color();
// new CRMObject();
// new CTA();
// new Date();
// new DateTime();
// new Email();
// new Embed();
// new File();
// new FollowUpEmail();
// new Font();
// new Form();
// new HubDBRow();
// new HubDBTable();
// new Icon();
// new Image();
// new Link();
// new Logo();
// new Meeting();
// new Menu();
// new Number();
// new Page();
// new Payment();
// new RichText();
// new SimpleMenu();
// new Tag();
// new Text();
// new URL();
// new Video();
// new Alignment();
// new BackgroundImage();
// new Border();
// new Gradient();
// new Spacing();
// new TextAlignment();

//test