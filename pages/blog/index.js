import { useRouter } from "next/router";

const index = () => {
	const router = useRouter();
	const { page, limit } = router.query;

	return (
		<div>
			<h1>
				This is blog page : {page} limit : {limit}
			</h1>
		</div>
	);
};

export default index;
