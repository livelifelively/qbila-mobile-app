import React from "react";

export const PostDetailsContext = React.createContext<{}>({});

interface PostDetailsProviderProps {}

export const PostDetailsProvider: React.FC<PostDetailsProviderProps> = ({ children }) => {
  return (
    <PostDetailsContext.Provider value={{}}>
      {children}
    </PostDetailsContext.Provider>
  );
};
