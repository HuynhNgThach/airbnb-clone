"use client";
import React from "react";
import styled from "styled-components";
interface SpinnerProps {
  color: string;
}
const Spinner: React.FC<SpinnerProps> = ({ color }) => {
  return (
    <LoadingContainer color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
};
const LoadingContainer = styled.div<SpinnerProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  div {
    transform-origin: 15px 15px;
    animation: spin 1.2s infinite linear;
    &:after {
      content: "";
      width: 2px;
      height: 6px;
      background: ${(props) => props.color};
      position: absolute;
      top: 0;
      left: 50%;
      border-radius: 20px;
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.5s;
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.4s;
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.3s;
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.2s;
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.1s;
    }
    &:nth-child(11) {
      transform: rotate(300deg);
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
  @keyframes spin {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export default Spinner;
