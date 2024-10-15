export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: Array<string> | string;
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }


