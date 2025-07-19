import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import { useLoginMutation } from "../../services/auth.api";
import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../../Components/Toast/Toast";
import FullScreenLoader from "../../Components/Loader/Loader";
import logoImg from "../../assets/images/logo.jpg";
import Logo from "../../Components/Logo";

const SignInPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showToast, setShowToast] = useState(false);
  const [login, { data, isLoading, isSuccess, error, status, isError }] =
    useLoginMutation();
  const [isButtonDiasbled, setIsButtonDisabled] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000); // auto hide after 3s
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (data?.userId) {
      setShowToast(true);
      const timer = setTimeout(() => navigate("/home"), 4000);
      return () => clearTimeout(timer);
    }
    if (error?.data?.error) {
      setIsButtonDisabled(false);
    }
  }, [data, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsButtonDisabled(true);
    e.preventDefault();
    await login(formData);
  };

  return (
    <Container className="flex justify-center items-center h-screen">
      {isLoading && <FullScreenLoader />}
      {showToast && <Toast message="Registered successfully!" type="success" />}
      <div className="h-fit xl:w-[500px] lg:w-1/2 md:w-5/6 sm:w-full xs:w-full shadow-custom rounded-xl p-8 bg-gray-100">
        <div>
          <div className="flex justify-center mb-6">
            <Logo src={logoImg} size={150} />
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            <Button
              disabled={isButtonDiasbled}
              variant="primary"
              className={`${
                isButtonDiasbled ? "bg-grey " : "bg-green"
              } w-[100%] text-primary text-xs`}
            >
              SUBMIT
            </Button>
            <div>
              <p className="font-bold">
                New User{" "}
                <Link className="text-blue underline" to="/register">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;
