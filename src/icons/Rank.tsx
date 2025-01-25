import { IconProps } from '../interfaces/Icon.type'

export const Rank: React.FC<IconProps> = ({
  size = 24,
  className = '',
}) => {
  const svgSize = `${size}px`

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.91998 15.46L9.93288 9.44714C10.3234 9.05661 10.9566 9.05661 11.3471 9.44714L14.7329 12.8329C15.1234 13.2234 15.7566 13.2234 16.1471 12.8329L21.2 7.78003" stroke="#F4FDFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 2.5V21.18C2 21.7323 2.44772 22.18 3 22.18H21.68" stroke="#F4FDFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
    </svg>

  )
}
