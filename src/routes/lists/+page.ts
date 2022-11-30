import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';
import type { ShoppingList } from 'src/models/ShoppingList';

export const load: PageLoad = async ({ params }) => {
	const pb = new PocketBase('http://127.0.0.1:8090');

	// fetch a paginated records list
	const resultList = await pb.collection('shoppingLists').getList(1, 50, {
		filter: 'created >= "2022-01-01 00:00:00"'
	});

	const lists = resultList.items.map((l) => {
		return {
			id: l.id,
			name: l.name || '',
			template: l.template || false,
			owner: l.owner
		} as ShoppingList;
	});

	return { lists: lists };
};
