import { useRouter } from "next/router";

const BlogId = () => {
	const router = useRouter();
	const { blogid } = router.query;
	return (
		<div>
			<h2>Blog dinamic route : {blogid}</h2>
		</div>
	);
};

export default BlogId;
