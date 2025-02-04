console.log("************** DELIVERABLE 04 *********************");

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.find((book) => book.title === titleToSearch)?.isRead ?? false;
};

interface Book {
    title: string,
    isRead: boolean
};

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false