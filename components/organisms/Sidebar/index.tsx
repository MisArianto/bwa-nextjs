import Footer from './footer'
import Profile from './profile'
import MenuItem from './menuItem'

interface SidebarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function Sidebar(props: SidebarProps) {
    const {activeMenu} = props

	return (
		<section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                	<MenuItem title="Overview" icon="menu-overview" active={activeMenu === 'overview'} href="/member" />
                	<MenuItem title="Transactions" icon="menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
                	<MenuItem title="Messages" icon="menu-message" href="/member" />
                	<MenuItem title="Card" icon="menu-card" href="/member" />
                	<MenuItem title="Rewards" icon="menu-reward" href="/member" />
                	<MenuItem title="Settings" icon="menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
                	<MenuItem title="Log Out" icon="menu-logout" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
	)
}
