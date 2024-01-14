
export default function LinkButton({route,text, icon}) {
    return (
        <a href={route}
           className="rounded bg-gray-700 text-gray-300 p-2 font-semibold flex justify-between items-center space-x-2">
            <span>{text}</span>
            {icon}
        </a>
    )
}