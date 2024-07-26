"use client";

import React, { useState } from "react";

import { paisColumns } from "./columns";
import { PaisModel } from "@/types";
import DataTable from "@/components/data-table";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import {
  createPais,
  deletePais,
  editPais,
} from "@/service/actions/paisService";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const PaisModal = ({ data }: { data: PaisModel[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [pais, setPais] = useState({} as PaisModel);

  const { toast } = useToast();
  const router = useRouter();

  const handleEditId = (key: any) => {
    setPais(key);
    onOpen();
  };
  const handleDeleteId = async (key: any) => {
    const result = await deletePais(key);

    if (result.id == undefined || result.paisCode == 400) {
      toast({
        title: "Erro!",
        description: "Não foi possivel deletar!",
        duration: 3000,
      });
    } else {
      router.refresh();
      toast({
        title: "Sucesso!",
        description: "Pais Deletado!",
        duration: 3000,
      });
    }
  };

  const handleSave = async () => {
    let result;

    if (pais.id) {
      result = await editPais(pais);
    } else {
      result = await createPais(pais);
    }

    if (result.id == undefined || result.paisCode == 400) {
      toast({
        title: "Erro!",
        description: "Não foi possivel salvar!",
        duration: 3000,
      });
    } else {
      router.refresh();
      toast({
        title: "Sucesso!",
        description: "Pais Salvo!",
        duration: 3000,
      });
    }
    onOpenChange();
  };

  return (
    <main className="flex flex-col gap-3">
      <DataTable
        columns={paisColumns}
        data={data}
        onEdit={handleEditId}
        onDelete={handleDeleteId}
      />
      <div className="flex justify-end">
        <Button color="secondary" onPress={onOpen}>
          Novo
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        onClose={() => setPais({} as PaisModel)}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#0b101f]/50 backdrop-opacity-40",
          base: "border-[#0b101f] bg-[#18181b] dark:bg-[#18181b] text-[#FFFFFF]",
          header: "border-b-[1px] border-[#0b101f]",
          footer: "border-t-[1px] border-[#0b101f]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {pais.id ? "Editar Pais" : "Novo Pais"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Pais"
                  placeholder="Digite o nome do pais"
                  variant="bordered"
                  value={pais.nome}
                  onChange={(e) => setPais({ ...pais, nome: e.target.value })}
                />
                <Input
                  label="Sigla"
                  placeholder="Digite a sigla do pais"
                  variant="bordered"
                  value={pais.sigla}
                  onChange={(e) => setPais({ ...pais, sigla: e.target.value })}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="secondary" onPress={() => handleSave()}>
                  {pais.id ? "Editar" : "Criar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default PaisModal;
