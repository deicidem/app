import { Card } from "antd";

export function ContentCard() {
	const CardExtra = <a href="#">Подробнее</a>;

	return (
		<Card title="Новый пост" extra={CardExtra}>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eveniet nemo
				sapiente magnam dolor vero repellat facere labore possimus soluta quas quod, rem hic
				enim ducimus qui modi ut cupiditate.
			</p>
		</Card>
	);
}
