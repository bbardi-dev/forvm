const placeholderData = {
  categories: [
    {
      id: "c1",
      title: "Casual",
      slug: "casual",
      subForums: ["f1"],
    },
    {
      id: "c2",
      title: "Academic",
      slug: "academic",
      subForums: ["f2", "f3"],
    },
  ],
  subForums: [
    {
      id: "f1",
      title: "Fishing",
      description: "Let's talk fishin'!",
      categoryId: "c1",
      threads: ["t1"],
    },
    {
      id: "f2",
      title: "Theoretical Physics",
      description: "Discussions on the nature of physics",
      categoryId: "c2",
      threads: [],
    },
    {
      id: "f3",
      title: "Memeology",
      description: "Discussions on the nature of the collective subconcious",
      categoryId: "c2",
      threads: ["t2", "t3"],
    },
  ],
  users: [
    {
      avatar: "https://www.meme-arsenal.com/memes/baad48b22ac23afb44f5a24915bca8f8.jpg",
      id: "u1",
      name: "Yo",
      posts: ["p1", "p2"],
    },
    {
      avatar: "https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg",
      id: "123abc",
      name: "Chadicus",
      posts: ["p4"],
    },
    {
      avatar: "https://upload.wikimedia.org/wikipedia/commons/3/34/Bobby_Fischer_1972.jpg",
      id: "123qwe",
      name: "Bobby Fischer",
      posts: ["p3"],
    },
  ],
  threads: [
    {
      id: "t1",
      title: "What up boys?",
      publishedAt: 123456,
      posts: ["p2"],
      userId: "123abc",
      subForumId: "f1",
    },
    {
      id: "t2",
      title: "Cheeks or peeks?",
      publishedAt: 123456,
      posts: ["p1"],
      userId: "123abc",
      subForumId: "f3",
    },
    {
      id: "t3",
      title: "Lao Gan Ma or Bing Chilling?",
      publishedAt: 333456,
      posts: ["p3", "p4"],
      userId: "123qwe",
      subForumId: "f3",
    },
  ],
  posts: [
    {
      id: "p1",
      text: "🤨🤨🤨",
      publishedAt: 456789,
      threadId: "t2",
      userId: "u1",
    },
    {
      id: "p2",
      text: "Among",
      publishedAt: 456789,
      threadId: "t1",
      userId: "u1",
    },
    {
      id: "p3",
      text: "🥶🥶🥶",
      publishedAt: 456789,
      threadId: "t3",
      userId: "123qwe",
    },
    {
      id: "p4",
      text: "🥵🥵🥵",
      publishedAt: 456789,
      threadId: "t3",
      userId: "123abc",
    },
  ],
};

export default placeholderData;
