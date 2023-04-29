export default {
  name: 'komplet',
  title: 'Komplet',
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
    {
      name: 'opis1',
      title: 'Opis1',
      type: 'string',
    },
    {
      name: 'opis2',
      title: 'opis2',
      type: 'string',
    },
    {
      name: 'opis3',
      title: 'opis3',
      type: 'string',
    },
  ],
}
