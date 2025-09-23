import "./index.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import ContactInfo from "./components/ContactInfo";
// import Contactform from "./components/Contactform";
// import AdminLayout from "./admin/AdminLayout";
// import AdminServices from "./admin/pages/AdminServices";
// import AdminProjects from "./admin/pages/AdminProjects";
// import AdminAbout from "./admin/pages/AdminAbout";
// import AdminContact from "./admin/pages/AdminContact";
// import AdminLogin from "./admin/pages/AdminLogin";
// import AdminUsers from "./admin/pages/AdminUsers";
// import RequireAdmin from "./admin/RequireAdmin";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				{/* <Route path="About" element={<About />} /> */}
				<Route path="Services" element={<Services />} />
				 <Route path="Projects" element={<Projects />} />
				{/* <Route path="Contact" element={<Contact />}>
					<Route path="Info" element={<ContactInfo />} />
					<Route path="form" element={<Contactform />} />
					<Route path="*" element={<Contactform />} /> 
				</Route>   */}
			</Route>

			{/* Admin routes */}
			{/* <Route path="/Admin/Login" element={<AdminLogin />} />
			<Route element={<RequireAdmin />}>
				<Route path="/Admin" element={<AdminLayout />}>
					<Route index element={<AdminServices />} />
					<Route path="Services" element={<AdminServices />} />
					<Route path="Projects" element={<AdminProjects />} />
					<Route path="About" element={<AdminAbout />} />
					<Route path="Contact" element={<AdminContact />} />
					<Route path="Users" element={<AdminUsers />} />
				</Route>
			</Route> */}
		</Routes>
	);
}

export default App;
