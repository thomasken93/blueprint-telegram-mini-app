import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo 111 3.png"

export const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bg-transparent pt-3 flex items-center justify-center z-50">
      <img src={Logo}/>
    </div>
  )
}
