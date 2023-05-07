import { useQuery } from "react-query"

export const userData = (userId) => {
  const userData = useQuery(['users', userId], () => {
    return fetch(`/api/users/${userId}`).then(res => res.json())
  });

  return userData;
}