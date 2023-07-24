import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 42px;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f1f4f4;
  -webkit-transition: border 500ms ease;
  transition: border 500ms ease;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;

  &:focus,
  &:active {
    outline: none;
    border: 1px solid rgb(212, 25, 25);
  }
`;

const CameraInput = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsCameraOpen(true);
    } catch (error) {
      console.error('Failed to open camera:', error);
    }
  };

  const handleBlur = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }

    setIsCameraOpen(false);
  };

  return (
    <InputContainer tabIndex={0} onFocus={handleCameraClick} onBlur={handleBlur}>
      <input type="text" placeholder="Digite aqui..." />
      {isCameraOpen && <video ref={videoRef} autoPlay />}
    </InputContainer>
  );
};

export default CameraInput;