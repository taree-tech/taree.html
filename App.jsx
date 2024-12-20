
import Navbar from "./components/Navbar";
import AboutFooter from "./components/AboutFooter";
import Footer from "./components/footer"
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import { 
      createBrowserRouter ,
      RouterProvider,
      BrowserRouter,
      Route,
      Link,
} from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import CategoryPage from "./pages/Category/CategoryPage";


function App(){
      const router = createBrowserRouter([
            {
                  path:"/",
                  element: <>
                  <Navbar />
                  <HomePage />
                  <AboutFooter />
                  <Footer />
                  </>
            },
            {
                  path:"/aboutus",
                  element:<>
                  <Navbar />
                  <AboutUs />
                  <AboutFooter />
                  <Footer />
                  </>
            },
            {
                  path:"/services",
                  element:<>
                  <Navbar />
                  <ServicesPage />
                  <AboutFooter />
                  <Footer />
                  </>
            },
            {
                  path:"/category",
                  element:<>
                  <Navbar />
                  <CategoryPage />
                  <AboutFooter />
                  <Footer />
                  </>
            }
      ]);

      return(
            <div>
                  <RouterProvider router={router}>

                  </RouterProvider>
            </div>
      )
}
export default App;


