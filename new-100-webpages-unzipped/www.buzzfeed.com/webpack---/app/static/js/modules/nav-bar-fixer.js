import {
    Application
} from 't3js';
import HeaderContainer from '@buzzfeed/buzzblocks/components/header-container';


class NavBarFixer extends HeaderContainer {}

export default NavBarFixer;

Application.addModule('nav-bar-fixer', ctx => new NavBarFixer(ctx));