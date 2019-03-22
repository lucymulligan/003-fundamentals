const Library = require("../app/library");

test("Check that a library can be instantiated with some books", () => {
  const library = new Library([
      { name: 'Don\'t Make Me Think', isbn: 123, author: 'Steve Krug', available: true},
      { name: 'Site Reliability Engineering', isbn: 456, author: 'Niall Richard Murphy', available: true},
      { name: 'Fantastic Mr Fox', isbn: 789, author: 'Roald Dahl', available: true}
  ]);
  expect(library.books).toEqual([
    { name: 'Don\'t Make Me Think', isbn: 123, author: 'Steve Krug', available: true},
    { name: 'Site Reliability Engineering', isbn: 456, author: 'Niall Richard Murphy', available: true},
    { name: 'Fantastic Mr Fox', isbn: 789, author: 'Roald Dahl', available: true} 
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([]);
    library.add('Growth Mindset', 992, 'Carol Dweck');

  expect(library.books).toEqual([
    {name: 'Growth Mindset', ISBN: 992, author: 'Carol Dweck', available: true}
  ])}
);

test("Check that a book can be withdrawn from the library", () => {
    const library = new Library ([])
    library.add('Fantastic Mr Fox', 789, 'Roald Dahl');
    library.withdraw(789), 

  expect(library.books).toEqual([])
  }
);
