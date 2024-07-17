import { useState, useEffect } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export const usePWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);

  useEffect(() => {
    const cancelUntil = localStorage.getItem("cancelUntil");
    if (cancelUntil && new Date(cancelUntil) > new Date()) {
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setShowInstallPrompt(false); // Only hide the prompt after user interaction
    }
  };

  const handleCancelClick = () => {
    const cancelUntil = new Date();
    cancelUntil.setDate(cancelUntil.getDate() + 2);
    localStorage.setItem("cancelUntil", cancelUntil.toISOString());
    setShowInstallPrompt(false);
  };

  return { showInstallPrompt, handleInstallClick, handleCancelClick };
};
