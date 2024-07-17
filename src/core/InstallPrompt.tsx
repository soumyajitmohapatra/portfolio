// src/components/InstallPrompt.tsx
import React from "react";
import { usePWAInstallPrompt } from "../common/hooks/usePWAInstallPrompt";
import { Button } from "../common/components/Button";

export const InstallPrompt: React.FC = () => {
  const { showInstallPrompt, handleInstallClick, handleCancelClick } =
    usePWAInstallPrompt();

  if (!showInstallPrompt) return <></>;

  return (
    <div className="install-prompt">
      <p>Install this app for a better experience!</p>
      <div>
        <Button
          style={{
            backgroundColor: "var(--eerie-black-1)",
          }}
          onClick={handleCancelClick}
        >
          Later
        </Button>
        <Button onClick={handleInstallClick}>Install</Button>
      </div>
    </div>
  );
};
