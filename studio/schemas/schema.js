// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: "en", title: "English" },
  { id: "no", title: "Norwegian", isDefault: true },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

const localeString = {
  title: "Localized string",
  name: "localeString",
  type: "object",
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
};

// We import object and document schemas
import blockContent from "./blockContent";
import tag from "./tag";
import { tutorial, tutorialSection } from "./tutorial";
import author from "./author";
import simpleLink from "./objects/simpleLink";
import adventure from "./adventure";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    tutorial,
    author,
    tag,
    adventure,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    tutorialSection,
    localeString,
    simpleLink,
  ]),
});
