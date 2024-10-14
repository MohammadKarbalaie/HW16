export interface IPost {
    maidenName: string;
    lastName: string;
    firstName: string;
    id: number;
    title: string;
    body: string;
    tags: Array<string>;
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }


