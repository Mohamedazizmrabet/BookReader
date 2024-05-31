interface Books {
  id: number;
  bookName: string;
  author: string;
  numberOfPages: number;
  createdAt: string;
  updatedAt: string;
}
interface Centent {
  id: number;
  content: string;
  pageNumber: number;
  BookId: number;
  createdAt: string;
  updatedAt: string;
}
