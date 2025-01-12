import * as React from "react"

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

const IconSun: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={256}
      style={{
        fill: "#31bafd",
      }}
    />
    <path
      d="M282.672 510.621c120.082-12.433 215.518-107.866 227.95-227.95L377.289 149.337l-30.523 25.897-80.422-80.418-20.687 46.052 65.898 65.898-45.08 45.08-84.571-84.571-14.627 14.627 83.554 85.59-44.063 44.063-65.9-65.898-46.052 20.687 76.233 76.233-21.709 34.711 133.332 133.333z"
      style={{
        fill: "#2b9ed8",
      }}
    />
    <circle
      cx={256}
      cy={256}
      r={92.108}
      style={{
        fill: "#f9b54c",
      }}
    />
    <path
      d="M256 163.895c-.193 0-.381.014-.574.014v184.182c.193.002.381.016.574.016 50.869 0 92.107-41.238 92.107-92.107S306.869 163.895 256 163.895z"
      style={{
        fill: "#f4a200",
      }}
    />
    <path
      d="M245.657 94.815h20.687v46.052h-20.687z"
      style={{
        fill: "#f2d453",
      }}
    />
    <path
      d="M255.431 94.815h10.917v46.052h-10.917z"
      style={{
        fill: "#f4a200",
      }}
    />
    <path
      d="M245.657 371.14h20.687v46.052h-20.687z"
      style={{
        fill: "#f2d453",
      }}
    />
    <path
      d="M255.431 371.14h10.917v46.052h-10.917zM371.14 245.657h46.052v20.687H371.14z"
      style={{
        fill: "#f4a200",
      }}
    />
    <path
      d="M94.815 245.657h46.052v20.687H94.815z"
      style={{
        fill: "#f2d453",
      }}
    />
    <path
      d="M343.359 135.274h20.687v46.052h-20.687z"
      style={{
        fill: "#f4a200",
      }}
      transform="rotate(-134.999 353.703 158.302)"
    />
    <path
      d="M147.962 330.66h20.687v46.052h-20.687z"
      style={{
        fill: "#f2d453",
      }}
      transform="rotate(-134.999 158.305 353.688)"
    />
    <path
      d="M135.277 147.952h46.052v20.687h-46.052z"
      style={{
        fill: "#f2d453",
      }}
      transform="rotate(-134.999 158.303 158.297)"
    />
    <path
      d="M330.664 343.342h46.052v20.687h-46.052z"
      style={{
        fill: "#f4a200",
      }}
      transform="rotate(-134.999 353.691 353.688)"
    />
  </svg>
)
export default IconSun
