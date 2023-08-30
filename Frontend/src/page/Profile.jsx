// import AiFillPlusSquare from "react-icons/ai"
export default function Profile() {
    return(
        <>
            <div className="flex">
                <h1 className="font-bold text-2xl">Sistem Pengingat Tugas</h1>
                
                <button className="object-right bg-white-100 hover:bg-white-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                        <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
                    </svg>
                </button>
            </div>

        </>
    )
}