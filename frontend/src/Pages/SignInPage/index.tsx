import React, { useState } from "react";
import Container from "../../Components/Container";
import Button from "../../Components/Button";

const SignInPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
    // Add login API call here
  };
  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="h-fit xl:w-[500px] lg:w-1/2 md:w-5/6 sm:w-full xs:w-full shadow-custom rounded-xl p-8 bg-gray-100">
        <div>
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <Button variant="primary" className="bg-green">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;
