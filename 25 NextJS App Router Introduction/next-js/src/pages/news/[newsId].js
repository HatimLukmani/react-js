import { useRouter } from "next/router";
export default function Details() {
  let router = useRouter();
  let id = router.query.newsId;
  return <p>Hey this is details page for ID={id}</p>;
}
