
export default function Icon({size, color, path}) {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            {path}
        </svg>
    )
}