import { Button, HTag } from '../components'

export default function Home(): JSX.Element {
	return (
		<>
			<HTag tag="h3">Hello</HTag>
			<Button appearance="primary">click</Button>
			<Button appearance="ghost">click</Button>
		</>
	)
}
