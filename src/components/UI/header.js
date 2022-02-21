import Menu from "./menu";
import Search from "./search";
const Header = {
   render() {
      return /* html */ `
         ${Search}
         ${Menu.render()}
      `
   },
   async after_render() {
      Menu.after_render();
      Search.after_render();
   }
  
}
export default Header;