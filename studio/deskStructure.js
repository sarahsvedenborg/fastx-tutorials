import S from '@sanity/desk-tool/structure-builder'

export const getDefaultDocumentNode = () => {
    return S.document().views([
        S.view.form(),
        S.view.form().title("Second editor").id("secondEditor"),
    ])
}

export default () =>
  S.list()
    .title("Content")
    .items([
        S.documentListItem()
        .id('home')
        .schemaType('home'),
        S.divider(),
        ...S.documentTypeListItems().filter(item => item.getId() !== 'home')
    ],
)
