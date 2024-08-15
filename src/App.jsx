import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import { Route, RouterProvider, createRoutesFromElements,  createBrowserRouter } from "react-router-dom"
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Checkout from "./pages/Checkout";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Signup from "./pages/SignUp";
import Login from "./pages/Login";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
     <Route index element={<Home />}></Route>
     <Route path="/product" element={<Product/>}></Route>
     <Route path="/product/:id" element={<ProductDetails/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="*" element={<Error/>}></Route>
     

  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
