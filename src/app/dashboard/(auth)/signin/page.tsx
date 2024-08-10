import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import React, { FC } from "react";
import { ActionResult, handleSignIn } from "./form/actions";
import { useFormState } from "react-dom";
import FormSignIn from "./form";

interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignInPageProps> = ({}) => {
  return <FormSignIn />;
};

export default SignInPage;
