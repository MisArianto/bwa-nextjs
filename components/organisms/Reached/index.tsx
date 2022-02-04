import ReachedItem from '../../molecules/ReachedItem'
import Line from '../../molecules/ReachedItem/line'

export default function Reached() {
	return (
		<section className="reached pt-50 pb-50">
	        <div className="container-fluid">
	            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
	                <ReachedItem jumlah="290M+" keterangan="Players Top Up" />
	                <Line />
	                <ReachedItem jumlah="12.500" keterangan="Games Available" />
	                <Line />
	                <ReachedItem jumlah="99,9%" keterangan="Happy Players" />
	                <Line />
	                <ReachedItem jumlah="4.7" keterangan="Rating Worldwide" />
	            </div>
	        </div>
	    </section>
	)
}
