export interface TBlog {
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  author: {
    email: string;
    image: string;
    name: string;
  };
}
