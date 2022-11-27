import { Author } from './author';
import { Category } from './category';
import { FeaturedImage } from './featuredImage';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImageUrl: FeaturedImage;
  author: Author;
  categories: Category[];
}

// TODO(okubo): DDD的に実装するのであれば下記だが、getStaticPropsでstringfyしたデータでの
// 静的生成となるため、interfaceで型のみ定義
// export class Post {
//   constructor(
//     private readonly _slug: string,
//     private readonly _title: string,
//     private readonly _excerpt: string,
//     private readonly _content: string,
//     private readonly _date: string,
//     private readonly _featuredImageUrl: string,
//     private readonly _author: Author,
//     private readonly _categories: Category[]
//   ) {}
//
//   get title(): string {
//     return this._title;
//   }
//   get slug(): string {
//     return this._slug;
//   }
//   get excerpt(): string {
//     return this._excerpt;
//   }
//   get content(): string {
//     return this._content;
//   }
//   get date(): string {
//     return this._date;
//   }
//   get featuredImageUrl(): string {
//     return this._featuredImageUrl;
//   }
//   get author(): Author {
//     return this._author;
//   }
//   get categories(): Category[] {
//     return this._categories;
//   }
//
//   public toJson(): Record<string, unknown> {
//     return {
//       title: this._title,
//       slug: this._slug,
//       excerpt: this._excerpt,
//       content: this._content,
//       date: this._date,
//       featuredImageUrl: this._featuredImageUrl,
//       author: this._author,
//       categories: this._categories
//     };
//   }
// }
