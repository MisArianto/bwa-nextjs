import Link from 'next/link'

interface CompanyItemProps {
	link: string,
	nameLink: string
}
export default function CompanyItem(props: CompanyItemProps) {
	const {link, nameLink} = props
	return (
		<>
			<li className="mb-6">
	            <Link href={`${link}`}><a className="text-lg color-palette-1 text-decoration-none">{nameLink}</a></Link>
	        </li>
        </>
	)
}
