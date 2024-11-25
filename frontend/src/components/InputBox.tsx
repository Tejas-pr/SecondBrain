interface InputBoxProps {
    onChange?: () => void
    placeholder: string
}
export function InputBox ({placeholder, onChange}: InputBoxProps) {
    return <div className="p-2">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} onChange={onChange}/>
    </div>
}