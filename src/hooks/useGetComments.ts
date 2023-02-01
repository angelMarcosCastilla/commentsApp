import { useEffect, useState } from "react";
import { getComments } from "../services/comments";
import { Comment } from "../types/comments";

interface returnHooks {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  loading: boolean;
  error: Error | null;
}

export default function useGetComments(): returnHooks {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

	useEffect(() => {

		getComments()
			.then(res=> {
				setComments(res);
        setLoading(false);
			})
			.catch(setError);
	}, []);

  return {
    comments,
    setComments,
    loading,
    error
  }
}
