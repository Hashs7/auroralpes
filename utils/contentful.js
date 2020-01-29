/* -------- Import -------- */
/* -------- External -------- */
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

/* -------- Services -------- */
import client from '../plugins/contentful';


/**
 * Get nested fields of a contentful data field
 */
const getFieldNestedData = async (fieldProp) => {
  let field = fieldProp;

  if (field.sys && !field.fields) {
    try {
      field = await client.getEntry(field.sys.id);
    } catch (e) {
      return null;
      // Fail silently, resource is in draft
    }
  }
  if (field.fields) {
    // eslint-disable-next-line no-use-before-define
    field = await getNestedReferences(field);
  }
  return field;
};

/**
 * Handle field that are array
 */
const getNestedReferencesForArray = (field) => Promise.all(field.map(async (x) => getFieldNestedData(x)));

/**
 * Handle rich text data field
 */
const getNestedReferencesForRichText = async (fieldProp) => {
  const field = fieldProp;
  field.content[0].content = await Promise.all(field.content[0].content.map(async (nodeProp) => {
    const node = nodeProp;

    // Node is a link to an entry
    if (node.nodeType && node.nodeType === 'entry-hyperlink') {
      node.data.target = await getFieldNestedData(node.data.target);
    }
    return node;
  }));

  return field;
};

/**
 * Get nested fields of a contentful data
 */
export const getNestedReferences = async (datasProp) => {
  const datas = datasProp;
  const fields = Object.keys(datas.fields);

  await Promise.all(fields.map(async (fieldName) => {
    let field = datas.fields[fieldName];

    if (Array.isArray(field)) {
      field = await getNestedReferencesForArray(field);
    } else if (field.nodeType) {
      field = await getNestedReferencesForRichText(field);
    } else {
      field = await getFieldNestedData(field);
    }

    datas.fields[fieldName] = field;
  }));
  return datas;
};


/**
 * Rich text helpers
 */

const RICH_TEXT_OPTION = {
  renderMark: {
    [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
    [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => `
        <div class="asset">
          <img class="asset__asset" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.description}">
        </div>
    `,
    [INLINES.ENTRY_HYPERLINK]: (node) => {
      const getTagForMark = (mark) => {
        switch (mark.type) {
          case MARKS.BOLD:
            return 'strong';
          case MARKS.UNDERLINE:
            return 'u';
          case MARKS.ITALIC:
            return 'em';
          default:
            return '';
        }
      };

      const { content: [text] } = node;
      const link = node.data.target.fields.slug || '';

      // Get link inner formatting tags (underline, italic ...)
      let linkText = text.value;
      text.marks.forEach((mark) => {
        const tag = getTagForMark(mark);
        linkText = `<${tag}>${linkText}</${tag}>`;
      });


      return `<a href="/${link}">${linkText}</a>`;
    },
  },
};


export const getRichTextHTML = (content) => documentToHtmlString(content, RICH_TEXT_OPTION);
