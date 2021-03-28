export default function () {
  return [{
      title: 'Articles',
      // to: {
      //   name: 'articles',
      // },
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
      items: [
        {
          title: 'List Article',
          to: {
            name: 'articles',
          },
          htmlBefore: '<i class="material-icons">edit</i>',
          htmlAfter: '',
        }, {
          title: 'Add Article',
          to: {
            name: 'add-article',
          },
          htmlBefore: '<i class="material-icons">note_add</i>',
          htmlAfter: '',
        },
      ]
    }, {
      title: 'Author',
      htmlBefore: '<i class="material-icons">note_add</i>',
      htmlAfter: '',
      items: [
        {
          title: 'List Author',
          to: {
            name: 'authors',
          },
          htmlBefore: '<i class="material-icons">note_add</i>',
          htmlAfter: '',
        },
        {
          title: 'Add Author',
          to: {
            name: 'add-author',
          },
          htmlBefore: '<i class="material-icons">note_add</i>',
          htmlAfter: '',
        },
      ]
    }, {
      title: 'Mountain',
      htmlBefore: '<i class="material-icons">note_add</i>',
      htmlAfter: '',
      items: [
        {
          title: 'List Mountain',
          to: {
            name: 'mountains',
          },
          htmlBefore: '<i class="material-icons">note_add</i>',
          htmlAfter: '',
        }
      ]
    },
    {
      title: 'Blog Dashboard',
      to: {
        name: 'blog-overview',
      },
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    },
    {
      title: 'Blog Posts',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: {
        name: 'blog-posts',
      },
    }, {
      title: 'Add New Post',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: {
        name: 'add-new-post',
      },
    }, {
      title: 'Forms & Components',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: {
        name: 'components-overview',
      },
    }, {
      title: 'Tables',
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: {
        name: 'tables',
      },
    }, {
      title: 'User Profile',
      htmlBefore: '<i class="material-icons">person</i>',
      to: {
        name: 'user-profile-lite',
      },
    }, {
      title: 'Errors',
      htmlBefore: '<i class="material-icons">error</i>',
      to: {
        name: 'errors',
      },
    }
  ];
}