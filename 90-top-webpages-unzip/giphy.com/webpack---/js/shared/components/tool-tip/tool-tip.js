import css from './tool-tip.css'

const ToolTip = ({ className, position, children }) => <div className={`${css[position]} ${className}`}>{children}</div>

export default ToolTip
