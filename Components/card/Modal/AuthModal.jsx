"use client";

import React, { useState } from "react";
import Modal from "@/Utils/Modal";
import SignUpForm from "./SignupForm";
import Login from "./Login";

const AuthModal = ({ isOpen, isClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [mobile, setMobile] = useState("login");

  return (
    <Modal isOpen={isOpen} onClose={() => isClose(false)}>
      <div className="w-full ">
        {activeTab === "login" && (
          <Login
            setActiveTab={setActiveTab}
            setMobile={setMobile}
            isClose={isClose}
          />
        )}

        {activeTab === "signup" && <SignUpForm mobile={mobile} />}
      </div>
    </Modal>
  );
};

export default AuthModal;
