export default {
  name: 'klima',
  title: 'Klima',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
}
