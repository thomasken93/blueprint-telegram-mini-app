import { IconProps } from '../interfaces/Icon.type'

export const Boosters: React.FC<IconProps> = ({ size = 24, className = '' }) => {
  const svgSize = `${size}px`

  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="23" height="23" fill="url(#pattern0_2052_1365)" />
      <defs>
        <pattern id="pattern0_2052_1365" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2052_1365" transform="scale(0.03125)" />
        </pattern>
        <image id="image0_2052_1365" width="32" height="32" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAoJJREFUWIW9lz1PFFEYhc9+AFEMgaAgRhMLCkiUws6vf2BBIhpr42+w0MLGzgYrIxUWRgsLKxKjNhJCTKRADAgEJGjkw92sCOwu7u48FntHxt3r7szAcJLN3Nx9c85z731zJyOFFNAPrALfgCthfcKG9wBZ88M8ew4qPAGMAwX+1TiQOAiAWyZwmWrdjDq80QR/B+YAxxNeAj4ADVECXDNhXyyrdzUQJcCbGsGuXkUVfsJs+c86ACWgy69vPADDZUkxSYfdiVw+r2wub/O8FAWAa9qw9iOtoacvND23qKZGa8/5BvAtYBRgO5vj/sMhpmbmASjmHNsxvPPrG2QHjkvS5PSskomEzvR0q7iB5u9klRkrVtZ2RgHQIclJZzbU1toiScouOSrlpc3JKoCjUQAcklTsPNauVDojQM3dcTV1xdV6PllZ2xzA15+ANMDvQoEHj4YZn5gsn7a1BUjtd/hZYMd1/7W5xbOXI4y+n2Bza9sGsAOc26/w08CKba0O4DjWLXCAdaB7r+HtwIzF3K/mgY6w4XHgrcU0EwAA4xGk2f8C3DAGKWDBY/jVZ3DKM77+v5xaZFfNs12S98LH5xp2LF6BAE55xjFJCyb8SJ1gJM1K8t5OJ8MAbFfU9UtaldRaB2BF0oCkgmeu6pXpB2DdPJF0LxaLfZL0WeXdqHUMs6b2rqdurQ50tYBB00DPPXMXgREzn7c03ghwwVP/2MwPhgHoBW4DyYr5PmOaswD0VdQmjUdvYIAaYH2WYCuAH1W9xnxoUdK0pDbtNmRR0rL572AETAFLjuPgOM7HsD5hdsBVi8qXlDsOpeB39K6GgZIkAU/24BNOlD/TxoDXQGNYnz8RqqkbTUauyAAAAABJRU5ErkJggg==" />
      </defs>
    </svg>

  )
}


