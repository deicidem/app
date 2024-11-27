import { Pagination } from "antd";
import { ContentCard } from "./_components/ContentCard";

export default function Home() {
	return (
		<>
			<div>
				<div className="flex flex-col gap-4">
					<ContentCard />
					<ContentCard />
					<ContentCard />
					<ContentCard />
				</div>
				<div className="mt-4">
					<Pagination defaultCurrent={1} total={50} />
				</div>
			</div>
		</>
	);
}
