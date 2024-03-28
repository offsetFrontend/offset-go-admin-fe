import React, { useState } from 'react'
import DiaglogBox from '../../atoms/DiaglogBox'

const AddRegistry = ({ open, onOk, onCancel }) => {

  const [registryName, setregistryName] = useState("");
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setregistryName("");
    setId("");
    setUserName("");
  };
  return (
    <div>
      <DiaglogBox open={open} onCancel={onCancel} width={520}>
      <div className="">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-3xl font-bold mb-10">Add Another Registry</h2>
            <div className="mb-7">
              <label
                className="block text-gray-700 text-sm mb-2"
                // htmlFor="bankName"
              >
                Registry name
              </label>
              <input
                className="border-b border-current w-full px-3 focus:outline-none focus:shadow-outline"
                id="bankName"
                type="text"
                value={registryName}
                onChange={(e) => setregistryName(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm mb-6"
                htmlFor="accountNumber"
              >
                ID
              </label>
              <input
                className="border-b border-current w-full px-3 focus:outline-none focus:shadow-outline"
                id="accountNumber"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
              <div className="mb-8">
                <label
                  className="block text-gray-700 text-sm mb-7"
                  htmlFor="branch"
                >
                  Username
                </label>
                <input
                  className="border-b border-current w-[95%] px-3 focus:outline-none focus:shadow-outline"
                  id="branch"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 text-white text-[9px] py-3 px-4 w-[35%] mr-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add
              </button>
              <button
                className="bg-red-200 text-[#C90202] text-[9px] py-3 px-4 w-[35%] rounded"
                type="submit"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DiaglogBox>
      
    </div>
  )
}

export default AddRegistry
