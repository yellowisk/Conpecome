export default function logAdmin() {

    return(
        <div className="flex flex-col bg-orange-seashell h-screen w-screen"> {/*Div que contem a telat toral*/}
            <div className="flex flex-col border-3 border-blue-900 w-full h-1/3">
            </div>
            <div className="flex flex-col items-center border-3 border-blue-900 w-full h-1/3">
                <div className="border-2 border-red-500 w-1/2 h-1/3"> {/*nome*/} 
                    <div className="flex flex-row justify-start w-fit h-2/5 text-orange-strong text border-1 font-poppins font-bold text-base ml-5">
                    Nome
                    </div>
                    
                    <div>

                    </div>
                </div>
                <div className="border-2 border-red-500 w-1/2 h-1/3"> {/*email*/}
                </div>
                <div className="border-2 border-red-500 w-1/2 h-1/3"> {/*senha*/}
                </div>
            </div>
            <div className="flex flex-col border-3 border-blue-900 w-full h-1/3">
            </div>
        </div>
    );
}
