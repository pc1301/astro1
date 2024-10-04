import { defineDb, defineTable, column, NOW } from 'astro:db';

const Inquiry = defineTable({
  columns:{
    id:column.number({primaryKey: true}),
    name: column.text(),
    created: column.date({default: NOW})
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Inquiry}
});
