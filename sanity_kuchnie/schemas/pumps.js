export default {
  name: 'pumps',
  title: 'Pumps',
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
