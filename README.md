# 🍊 Satsuma - the helpful shopping list

> Are you adding the same staples to you shopping list week after week? There should be a template function for this!
>
> Are you wandering back and forth in the supermarket because the things on your list are not group by section? That shouldn't be too hard.
>
> Are frustrated with how many clicks it can take to add an item to a list or how hard it is to invite your partner to share the same list?
>
> Relax, have a satsuma and enjoy the next trip to the supermarket.
>
> 🍊

That's at least my vision for this little helper app.

## Setup

Use Node 18, e.g. with `nvm use` in the project root.

```bash
$ node -v
v18.12.1
```

Install with `npm install`.

Run with `npm run dev`.

Install [PocketBase.io](https://pocketbase.io/) and run it with `./pocketbase serve`.

## Todos

- [x] list and pick categories
- [x] sort items in categories
- [x] auto-update list on screen
- [x] update status on item
- [ ] add template to list
- [ ] add new list
- [ ] set permissions policy in database
- [ ] share list with other users
- [ ] signup flow
- [ ] add examples to category
- [ ] increase quantity if a duplicate item is added
