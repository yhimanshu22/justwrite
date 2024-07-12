import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from 'react-toastify';

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const endpoint = type === "signup" ? "signup" : "signin";

            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${endpoint}`, postInputs);

            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");

        } catch (error) {
            console.error("Error during signup/signin:", error);
            toast.error("Failed to sign up. Please try again later.");
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div style={{ fontFamily: 'Anton' }} className="text-5xl font-extrabold">
                        Join JustWrite
                    </div>
                    <div className="text-lg pl-4 text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}

                        <Link to={type === "signin" ? "/signup" : "/signin"}
                            className="pl-2 underline text-blue-500 hover:text-blue-600">
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>

                </div>

                <div className="pt-8">
                    {type === "signup" ?

                        <LabelledInput label="Name" placeholder="Himanshu Yadav..." onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} /> : null}
                    <LabelledInput label="Username" placeholder="himu09854@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button
                        onClick={sendRequest}
                        type="button"
                        className="w-full px-5 py-2.5 text-lg font-medium text-white bg-gray-800 rounded-lg 
                        focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-900 
                       dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-800">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                id="first_name"
                className="bg-gray-100 text-lg border border-gray-300 text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 mt-1"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
