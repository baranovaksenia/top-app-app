import { Button, HTag, Paragraph, Tag } from '../components'

export default function Home(): JSX.Element {
	return (
		<>
			<HTag tag="h3">Hello</HTag>
			<Button appearance="primary" arrow="right">
				click
			</Button>
			<Button appearance="ghost">click</Button>
			<Paragraph size="small">Small</Paragraph>
			<Paragraph>Medium</Paragraph>
			<Paragraph size="large">Big</Paragraph>

			<Tag size="small" color="primary">
				tag 1
			</Tag>
			<Tag size="medium" color="red">
				tag 2
			</Tag>
			<Tag size="small" color="green">
				tag 3
			</Tag>
		</>
	)
}
