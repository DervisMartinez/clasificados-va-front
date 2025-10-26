"use client";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Base/Modal";
import Button from "@/components/Button";
import { useEffect } from "react";

export default function FallbackDialog({ clasificado, setClasificado, open, setOpen }) {

  const close = () => {
    setOpen(false);
    setClasificado(null);

  };

  useEffect(() => {

    if (!clasificado) return;

  }, [clasificado]);


  return (
    <Modal size="xl" open={open} onClose={close}>
      <ModalHeader>Apelar</ModalHeader>

      <ModalBody>
        {clasificado?.appeal ? (
          <p>
            Ya enviaste una apelación para este anuncio. Te avisaremos en cuanto tengamos una respuesta.
          </p>
        ) : clasificado?.state !== "rejected" && (
          <p>
            Este clasificado aún no ha sido rechazado, por lo que no necesita apelación en este momento.
          </p>
        )}

      </ModalBody>

      <ModalFooter>
        <div className="flex justify-end gap-2">
          <Button
            bgColor="bg-gray-100"
            hoverBg="hover:bg-gray-200"
            textColor="text-gray-700"
            borderColor="border-white"
            onClick={close}
            label="Cerrar"
          />
        </div>
      </ModalFooter>
    </Modal>
  );
}