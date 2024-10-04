import { db, Inquiry } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Inquiry).values([

		{
			name:"Name 1"
		}
	])
}
