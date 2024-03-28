import { useState } from "react";
import './style.css'


const Contact = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPasseword] = useState(null);
    const [phone, setPhone] = useState(null);
    const nameChange = e => {
        setName(e.target.value)
    }
    const emailChange = e => {
        setEmail(e.target.value)
    }
    const passwordChange = e => {
        setPasseword(e.target.value)
    }
    const phoneChange = e => {
        setPhone(e.target.value)
    }
    const [error, setError] = useState('')
    const [nerror, setNError] = useState('')

    const onsubmits = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('আপনার পাঁচওয়ার্ড নাম্বার টা ৬ ডিজিট করুন');
        }
        else {
            setError('')
            console.log(name, email, password, phone)
        }

        if (phone.length < 11) {
            setNError('আপনার মোবাইল নাম্বার টা ১১ ডিজিট করুন');
        }
        else {
            setNError('')
        }


    }

    return (
        <div>

            <div className=" w-[80%] md:w-[60%] lg:w-[40%] mx-auto border-2 rounded-xl p-5 md:p-10 mt-10 bg-[#c593932d]">
                <h3 className='text-3xl text-center font-bold mb-6'>Contact form</h3>
                <form onSubmit={onsubmits}>


                    <label className="input input-bordered flex items-center gap-2 mt-4">

                        <input type="text" onChange={nameChange} name="name" className="grow focus:m-0 focus:p-0 focus:outline-none focus:border-none " placeholder="Your name" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <input type="text" onChange={emailChange} name="email" className="grow focus:outline-none focus:border-none " placeholder="Email" />
                    </label>
                    <label className="input  input-bordered flex items-center gap-2 mt-4">

                        <input type="number" onChange={phoneChange} name="number" placeholder="number" className="grow focus:outline-none focus:border-none " required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">

                        <input type="password" onChange={passwordChange} name="password" placeholder="password" className="grow focus:outline-none focus:border-none " required />
                    </label>

                    {/* <label className="input input-bordered flex items-center gap-2 mt-4">
                        <input type="submit" className="grow" value="Logine" />

                    </label> */}
                    <button type="submit" className="btn btn-secondary shadows w-[95%] mx-auto flex justify-center mt-5 border">Submit Now</button>
                </form>
                <p className="mt-5 font-semibold text-xl text-red-600"> {error}</p>
                <p className="mt-5 font-semibold text-xl text-red-600"> {nerror}</p>
            </div>
        </div>
    );
};

export default Contact;