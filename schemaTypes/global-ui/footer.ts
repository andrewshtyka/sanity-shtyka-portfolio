import { defineField } from "sanity";
import { Divider } from "../../components/Divider";

export default function footer() {
    return [
      defineField({
        components: {
          field: Divider,
        },
        name: 'footer',
        type: 'object',
        title: 'Footer',
        fields: [
          {
            name: 'item1',
            type: 'string',
            title: 'Item 1',
          },
          {
            name: 'item2',
            type: 'string',
            title: 'Item 2',
          },
          {
            name: 'item3',
            type: 'string',
            title: 'Item 3',
          },
          defineField({
            name: 'item4',
            type: 'object',
            title: 'Item 4',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'content',
                type: 'string',
                title: 'Content',
              },
            ],
          }),
          {
            name: 'item5',
            type: 'string',
            title: 'Item 5',
          },
          {
            name: 'item6',
            type: 'string',
            title: 'Item 6',
          },
        ],
      }),
    ]
}
