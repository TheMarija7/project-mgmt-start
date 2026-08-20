
import {useRef} from 'react';

export default function Input({label, type, inputRef}){

    return(
        <div className="flex flex-col items-start">
            <label className="text-lg font-bold text-gray-600 mb-2">{label}</label>
            <input 
                ref={inputRef} 
                type={type} 
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-gray-500" required 
            />
        </div>
    );
}