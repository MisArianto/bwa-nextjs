import CompanyItem from './companyItem'

interface FooterItemProps {
    title: string
}

export default function Company(props: FooterItemProps) {
    const {title} = props
	return (
		<div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
            <ul className="list-unstyled">
                <CompanyItem link="/#" nameLink="About Us" />
                <CompanyItem link="/#" nameLink="Press Release" />
                <CompanyItem link="/#" nameLink="Terms of Use" />
                <CompanyItem link="/#" nameLink="Privacy & Policy" />
            </ul>
        </div>
	)
}
