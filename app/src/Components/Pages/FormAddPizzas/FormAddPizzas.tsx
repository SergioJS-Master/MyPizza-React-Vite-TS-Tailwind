import React from 'react';
import { TEInput, TERipple } from 'tw-elements-react';

export function FormAddPizzas() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className='flex flex-col items-center'>
        <h1>MYPizza</h1>
        <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <form>
            <div className="grid grid-cols-2 gap-4">
              {/* <!--First name input--> */}
              <TEInput
                type="email"
                label="First name"
                className="mb-6"
              ></TEInput>

              {/* <!--Last name input--> */}
              <TEInput
                type="password"
                label="Last name"
                className="mb-6 bg-red-600"
              ></TEInput>
            </div>

            {/* <!--Email input--> */}
            <TEInput
              type="email"
              label="Email address"
              className="mb-6"
            ></TEInput>

            {/* <!--Submit button--> */}
            <TERipple rippleColor="light" className="w-full">
              <button
                type="button"
                className="block w-full rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase 
                leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                hover:bg-[#c1030a] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:bg-[#c1030a] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:outline-none focus:ring-0 active:bg-[#c1030a] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
              >
                Sign up
              </button>
            </TERipple>
          </form>
        </div>
      </div>
    </div>
  );
}
