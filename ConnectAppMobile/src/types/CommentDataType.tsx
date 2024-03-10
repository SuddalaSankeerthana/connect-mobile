export type CommentDataType = {
  CommentId: string;
  CommentMessage: string;
  CreatedAt: Date;
  PostId: string;
  ProfileImageAddress: string;
  Replays: ReplyDataType[];
  UserId: string;
  Username: string;
};

export type ReplyDataType = {
  CommentId: string;
  CommentMessage: string;
  CreatedAt: Date;
  PostId: string;
  ProfileImageAddress: string;
  UserId: string;
  Username: string;
  ParentCommentId: string;
};
