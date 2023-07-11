"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Variant = "LOGIN" | "REGISTER";
export const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/User");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // confirmPassword: "",         //this field is optional only for register
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged In Successfully");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => {
          signIn("credentials", data);
          toast.success("Registered Successfully");
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Something went wrong");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged In Successfully");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="sm:mx-auto w-full sm:w-[30vw] sm:max-w-md">
        {/* Social Auth Buttons */}
        <div className="mt-6 mb-6 flex gap-8 justify-around">
          <AuthSocialButton
            delay={0.5}
            title="GitHub"
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />
          <AuthSocialButton
            delay={0.75}
            title="Google"
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>
        <motion.form
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <Input
              id="name"
              errors={errors}
              label="Enter your Name"
              type="text"
              placeholder="John Doe"
              required={true}
              register={register}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            errors={errors}
            label="Enter your Emaiil"
            required={true}
            type="email"
            placeholder="jhon@gmail.com"
            register={register}
            disabled={isLoading}
          />
          {variant === "REGISTER" && (
            <p className="text-sm font-medium text-purple-600 text-end cursor-pointer">
              Forgot Password ?
            </p>
          )}
          <Input
            id="password"
            errors={errors}
            label="Enter your Password"
            type="password"
            required={true}
            placeholder="ajlihj@123"
            register={register}
            disabled={isLoading}
          />
          {/* {variant === "REGISTER" && (    //this field is optional only for register
            <Input
              id="confirmPassword"
              errors={errors}
              label="Confirm your Password"
              type="password"
              required={true}
              placeholder="ajlihj@123"
              register={register}
              disabled={isLoading}
            />
          )} */}
          <Button height={"20"} fullWidth type="submit" disabled={isLoading}>
            {variant === "LOGIN" ? "Auth" : "Sign Up"}
          </Button>
        </motion.form>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an Account" : "Login Now"}
          </div>
        </div>
      </div>
    </>
  );
};
