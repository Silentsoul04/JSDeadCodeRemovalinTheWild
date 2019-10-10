import css from './menu-footer.css'

const MenuFooter = () => ( <
    div className = {
        css.container
    } >
    <
    div className = {
        css.copyright
    } > & copy; {
        new Date().getFullYear()
    }
    GIPHY, Inc. < /div> <
    p className = {
        css.tosLinks
    } >
    <
    a href = "/terms"
    target = "_blank" >
    Terms of Service <
    /a> <
    a href = "/community-guidelines"
    target = "_blank" >
    Community Guidelines <
    /a> <
    a href = "/privacy"
    target = "_blank" >
    Privacy Policy <
    /a> <
    a href = "/dmca"
    target = "_blank" >
    Copyright <
    /a> <
    /p> <
    /div>
)

export default MenuFooter