"use client";
import { useState, useEffect } from "react";

import { Modal, ModalBody, ModalHeader } from "@/components/Base/Modal";
import IconButton from "@/components/IconButton";

export default function ShareAction({ clasificado }) {
  const [open, setOpen] = useState(false);
  const [fullUrl, setFullUrl] = useState("");

  // Se ejecuta solo en cliente, después del render inicial
  useEffect(() => {
    setFullUrl(window.location.href);
  }, []);

  const title = encodeURIComponent(clasificado.title);

  const handleShare = (platform) => {
    if (!fullUrl) return; // evita errores si aún no se setea
    const shareUrl = encodeURIComponent(fullUrl);

    let url = "";
    switch (platform) {
      case "Facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case "Twitter":
        url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`;
        break;
      case "WhatsApp":
        url = `https://api.whatsapp.com/send?text=${title}%20${shareUrl}`;
        break;
      case "LinkedIn":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`;
        break;
      default:
        break;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <IconButton
        icon="LuShare2"
        textColor="text-indigo-500"
        bgColor="bg-white"
        hoverBg="hover:bg-gray-50"
        onClick={() => setOpen(true)}
      />

      <Modal size="sm" open={open} onClose={() => setOpen(false)}>

        <ModalHeader>Compartir clasificado</ModalHeader>

        <ModalBody>
          <div className="flex gap-4 justify-center">
            <IconButton
              onClick={() => handleShare("Facebook")}
              icon="Facebook"
              textColor="text-blue-600"
              bgColor="bg-white"
              hoverBg="hover:bg-gray-100"
            />
            <IconButton
              onClick={() => handleShare("Twitter")}
              icon="Twitter"
              textColor="text-gray-800"
              bgColor="bg-white"
              hoverBg="hover:bg-gray-100"
            />
            <IconButton
              onClick={() => handleShare("WhatsApp")}
              icon="Whatsapp"
              textColor="text-green-500"
              bgColor="bg-white"
              hoverBg="hover:bg-gray-100"
            />
          </div>
        </ModalBody>

      </Modal>
    </>
  );
}
