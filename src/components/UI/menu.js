import { listMenu } from "../../data/index";

const Menu = () => {
    const menuMapping = listMenu
        .map((item) =>  {
            return /* html */ `
               <a href="${item.src}" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">${item.name}</a>
        `;
        })
        .join("");
    return /* html */ `
         <div class="mt-2">${menuMapping} </div>
    `;
};

export default Menu();