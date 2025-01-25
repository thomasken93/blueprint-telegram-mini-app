import { IconProps } from '../interfaces/Icon.type'

export const Earn: React.FC<IconProps> = ({ size = 24, className = '' }) => {
  const svgSize = `${size}px`
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.79997 7.21997C4.79997 7.21997 16.9912 7.21997 19.2 7.21997C20.6756 7.21997 21.6 8.65997 21.6 9.61997V19.8837C21.6 21.1081 20.6081 22.1 19.3837 22.1H4.61622C3.39185 22.1 2.39997 21.1081 2.39997 19.8837V9.54685C2.39997 8.32435 3.5756 7.21997 4.79997 7.21997Z" stroke="#F4FDFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.23998 5.77996V4.17496C6.23998 2.57746 6.58498 2.11621 8.56873 2.63933C10.0256 3.02371 18.5531 5.38808 18.5531 5.38808C21.18 6.37621 21.5812 7.21996 21.5812 9.13808L21.6 10.3175" stroke="#F4FDFF" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M5.5181 15.86C6.18185 15.86 6.71997 15.3237 6.71997 14.66C6.71997 13.9981 6.18185 13.46 5.5181 13.46C4.8581 13.46 4.31997 13.9981 4.31997 14.66C4.31997 15.3237 4.8581 15.86 5.5181 15.86Z" fill="#F4FDFF" />
    </svg>
  )
}
