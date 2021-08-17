import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import FooterNavigation from "./FooterNavigation";
import ScrollToTop from "../ScrollToTop";

function Layout(props) {
  return (
    <div>
      <ScrollToTop />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <FooterNavigation />
    </div>
  );
}

export default Layout;
