import React, { useState } from "react";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import { useRegisterMutation } from "../../services/auth.api";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import SelectInput from "../../Components/Input/SelectInput";
import { statesWithDistricts } from "../../constant/stateData";
import Logo from "../../Components/Logo";
import logoImg from "../../assets/images/logo.jpg";

const fields = [
  { label: "First name", name: "firstname", type: "text" },
  { label: "Last name", name: "lastname", type: "text" },
  { label: "Mobile", name: "mobile", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "cnfPassword", type: "password" },
];

const Register = () => {
  const states = [
    { label: "Bihar", value: "bihar" },
    { label: "Uttar Pradesh", value: "up" },
    { label: "New Delhi", value: "new delhi" },
  ];
  const districts: any = [];
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    cnfPassword: "",
    state: "",
    district: "",
  });
  const [register, { data, isLoading, error }] = useRegisterMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { district: "" } : {}), // Reset district if state changes
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      mobile,
      email,
      password,
      cnfPassword,
      state,
      district,
    } = formData;
    await register({
      firstname,
      lastname,
      mobile,
      email,
      password,
      state,
      district,
      confirmPassword: cnfPassword,
    });
  };
  const selectedStateObj = statesWithDistricts.find(
    (s) => s.state === formData.state
  );
  return (
    <Container className="md:w-[100%] flex justify-center items-center h-screen">
      <div className="h-fit xl:w-4/5 lg:w-full md:w-[100%] sm:w-full xs:w-full shadow-custom rounded-xl p-8 bg-gray-100">
        <div>
          <div className="flex justify-center mb-6">
            <Logo src={logoImg} size={150} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
              {fields.map(({ label, name, type }) => (
                <Input
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                />
              ))}
              <SelectInput
                name="state"
                label="Work Location (State)"
                value={formData.state}
                onChange={handleChange}
                options={statesWithDistricts.map((s) => ({
                  label: s.state,
                  value: s.state,
                }))}
              />
              {formData.state && (
                <SelectInput
                  name="district"
                  label="Work Location (District)"
                  value={formData.district}
                  onChange={handleChange}
                  options={(selectedStateObj?.districts || []).map(
                    (district) => ({
                      label: district,
                      value: district,
                    })
                  )}
                />
              )}
            </div>
            <div>
              <Button
                variant="primary"
                className="bg-green w-[100%] text-primary text-xs mt-5"
              >
                SUBMIT
              </Button>
              <div className="mt-3">
                <p className="font-bold">
                  If you have account please{" "}
                  <Link className="text-blue underline" to="/signin">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
