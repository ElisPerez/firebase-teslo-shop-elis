import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { firestore } from '../datafirebase/config';

// export class Post {
//   constructor(readonly title: string, readonly author: string) {}

//   toString(): string {
//     return this.title + ', by ' + this.author;
//   }
// }

// const postConverter = {
//   toFirestore(post: WithFieldValue<Post>): DocumentData {
//     return {title: post.title, author: post.author};
//   },
//   fromFirestore(
//     snapshot: QueryDocumentSnapshot,
//     options: SnapshotOptions
//   ): Post {
//     const data = snapshot.data(options)!;
//     return new Post(data.title, data.author);
//   }
// };
// const name = async () => {
//   const postSnap = await firestore.app()
//     .collection('posts')
//     .withConverter(postConverter)
//     .doc().get();
//   const post = postSnap.data();
//   if (post !== undefined) {
//     post.title; // string
//     post.toString(); // Should be defined
//     post.someNonExistentProperty; // TS error
//   }
// };
