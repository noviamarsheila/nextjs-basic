import { useRouter } from "next/router";

const CommentId = () => {
	const router = useRouter();
	const { blogid, commentid } = router.query;
	return (
		<div>
			<h2>
				Blog dinamic route : {blogid} - {commentid}
			</h2>
		</div>
	);
};

export default CommentId;
