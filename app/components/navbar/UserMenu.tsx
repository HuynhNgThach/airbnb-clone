"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer select-none">
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition select-none"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar imgUrl={currentUser?.image}></Avatar>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm border-[1px]">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My favorites"
                ></MenuItem>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My trips"
                ></MenuItem>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My reservations"
                ></MenuItem>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My properties"
                ></MenuItem>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="Airbnb my home"
                ></MenuItem>
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toggleOpen();
                  }}
                  label="Logout"
                ></MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    loginModal.onOpen();
                    toggleOpen();
                  }}
                  label="Login"
                ></MenuItem>
                <MenuItem
                  onClick={() => {
                    registerModal.onOpen();
                    toggleOpen();
                  }}
                  label="Sign up"
                ></MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
