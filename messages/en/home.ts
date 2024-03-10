export default {
  tab: {
    tags: {
      title: 'Tags',
      searchInput: {
        placeholder: 'Search tags',
      },
      buttons: {
        create: 'Create tag',
      },
      table: {
        columns: {
          tag: 'Tag',
          amount: 'Amount of videos',
        },
        body: {
          checkbox: 'select tag',
          amount: '{amount} video(s)',
        },
        actions: {
          title: 'Actions',
          edit: 'Edit',
          delete: 'Delete',
        },
        footer: {
          text: 'Showing {itemsPerPage} of {total} items',
          rows: 'Rows per page',
          select: 'Select',
          pagination: 'Page {current} of {total}',
        },
      },
    },

    settings: {
      title: 'Settings',
    },
  },
}
