import { AuthComponent } from "@/components/AuthComponent";
import React, { useState } from "react";
import { ButtonUI } from "@/components/UI/ButtonUI";
import { InputUI } from "@/components/forms/InputUI";
import { InputType } from "@/types/Input";
import Link from "next/link";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e: InputType) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e: InputType) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <AuthComponent title="Create an account" submitHandler={submitHandler}>
      <InputUI
        type="email"
        value={email}
        changeHandler={emailHandler}
        srText="email"
        name="email"
        title="Email address"
        placeholder="e.g. alex@email.com"
      >
        <path
          fill="#737373"
          d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
        />
      </InputUI>
      <InputUI
        type="password"
        value={password}
        changeHandler={passwordHandler}
        srText="password"
        name="password"
        title="Create password"
        placeholder="At least 8 characters"
      >
        <path
          fill="#737373"
          d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
        />
      </InputUI>
      <InputUI
        type="password"
        value={password}
        changeHandler={passwordHandler}
        srText="password"
        name="confirm-password"
        title="Confirm password"
        placeholder="At least 8 characters"
      >
        <path
          fill="#737373"
          d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
        />
      </InputUI>
      <span className="font-normal text-start text-dark-gray text-sm">Password must contain at least 8 characters</span>
      <ButtonUI value="Create new account" type="submit" />
      <span className="text-center font-normal text-sm text-dark-gray">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-purple">
          Login
        </Link>{" "}
      </span>
    </AuthComponent>
  );
}
