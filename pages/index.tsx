import { Button, HTag, Paragraph } from '../components'

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
		</>
	)
}
