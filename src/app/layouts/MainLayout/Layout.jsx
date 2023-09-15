import Footer from './Footer';
import NavBar from './NavBar';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;