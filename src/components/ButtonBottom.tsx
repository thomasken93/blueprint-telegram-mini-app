import { NavLink } from 'react-router-dom'

type ButtonProps = {
  icon: React.ReactNode
  label: string
  to: string
}

const ButtonBottom: React.FC<ButtonProps> = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-center text-white`
      }>
      <div className="flex justify-center align-center mx-auto">{icon}</div>
      <p className="mt-[2px] text-3">{label}</p>
    </NavLink>
  )
}

export default ButtonBottom
