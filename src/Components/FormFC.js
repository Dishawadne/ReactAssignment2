import React, { useState } from 'react'

export default function FormFC() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        pincode: "",
        phoneNo: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const submitData = (event) => {
        console.log("Form is submited", formData);

        //    var emp =  JSON.stringify(formData);
        //    console.log(emp)
        event.preventDefault();

        setFormData(
            {
                name: "",
                address: "",
                pincode: "",
                phoneNo: ""
            }
        )
    }
    return (
        <>
            <form onSubmit={submitData}>
                <div>
                    <label> Enter Name </label>
                    <input type="text" name="name" value={formData.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Enter Address </label>
                    <input type="text" name="address" value={formData.address}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Enter pincode </label>
                    <input type="text" name="pincode" value={formData.pincode}
                        onChange={handleChange} />
                </div>
                <div>
                    <label> Enter phoneNo </label>
                    <input type="text" name="phoneNo" value={formData.phoneNo}
                        onChange={handleChange} />
                </div>
                <div>
                    <button type="submit"> Register </button>
                </div>
            </form>
        </>
    )

}
