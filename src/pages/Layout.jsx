import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({children,cart, setCart}) {
  
  return (

    <div >
      <Nav cart={cart} setCart={setCart} />
      <main className=" flex min-h-[100vh]  flex-col ">{children}</main>
      <Footer />
    </div>
  );

}

export default Layout;
