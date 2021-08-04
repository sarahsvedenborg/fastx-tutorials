const supportedLanguages = [
    { id: "en", title: "English" },
    { id: "no", title: "Norwegian", isDefault: true },
  ];

export const createLocaleDocumentOld = (fieldArray) => {
    return {
    title: "Localized page",
    name: "localePage",
    type: "object",
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
      {
        title: "English translation",
        name: "translations",
        options: { collapsible: true },
      },
    ],
    // Dynamically define one field per language
     fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: "object",
      fieldset: lang.isDefault ? null : "translations",
    })), 
    //fields: supportedLanguages.map((lang) => ({name: 'tre', title: "title", type: 'string'}))
  }
  };

  export const createLocaleDocument = (fieldArray) => {
/*     return [supportedLanguages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: "object",
        fields: fieldArray,
        options: { collapsible: true },
    }))] */
    return supportedLanguages.map(lang => ( {
        name: lang.id,
        title: lang.title,
        type: 'object',
        fields: fieldArray,
        options: {collapsible: true}
    }))
       
    
  };

  export default createLocaleDocument