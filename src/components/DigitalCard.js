import LinkButton from "./LinkButton";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";

export default function DigitalCard({name, role, about, image}) {
    return (
        <div
            className="max-w-sm w-3/12 border rounded-lg shadow bg-gray-800 border-gray-700 m-4">
            <a href="/">
                <img className="rounded-t-lg" src={image} alt=""/>
            </a>
            <div className="p-5">
                <div className="flex flex-col jsutify-center items-center">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            {name}
                        </h5>
                    </a>
                    <span className="mb-2 text-sm  tracking-tight text-gray-400">
                        {role}
                    </span>
                </div>
                <div className={"mt-2 mb-4 flex flex-row justify-center space-x-2"}>
                    <LinkButton text={"LinkedIn"} route={"https://linkedin.com"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                             viewBox="0 0 48 48">
                            <path fill="#0288D1"
                                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                            <path fill="#FFF"
                                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                    }
                    />
                    <LinkButton text={"Youtube"} route={"https://youtube.com"} icon={
                        <svg viewBox="0 0 24 24" fill="#fc5656" height="20" width="20">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                        </svg>
                    }
                    />

                </div>
                <p className="mb-3 font-normal text-gray-400">{about}</p>
            </div>
            <footer className={"flex justify-center space-x-2 py-2 bg-gray-900"}>
                <Facebook/>
                <Twitter/>
                <Instagram/>
                <Github/>
            </footer>
        </div>
    )
}