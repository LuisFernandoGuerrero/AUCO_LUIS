import Image from "next/image";

export default function Comment({ comment }) {
    return (
        <div className="border-gray-100 py-5 border-b-2 last:border-b-0 ">
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <p className="text-blue-400 text-xs font-bold flex items-center gap-2">
                    <Image src="/img/user.svg" width={20} height={20} alt="logo usuario" /> 
                    {comment.name} | 
                </p>
                <p className="text-gray-100 text-[8px] md:text-sm font-medium">{comment.email}</p>
            </div>

            <div className="mt-4 md:mt-4 md:px-7 flex gap-2 items-center md:items-start ">
                <Image src="/img/message.svg" width={20} height={20} alt="logo usuario"/>
                <p className="text-xs md:text-sm">{comment.body}</p>
            </div>
        </div>
    )
}
