"use client";

import React, { useState } from "react";

import { tipoColumns } from "./columns";
import { TiposModel } from "@/types";
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
  createTipos,
  deleteTipos,
  editTipos,
} from "@/service/actions/tiposService";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ColorPicker } from "antd";

const TiposModal = ({ data }: { data: TiposModel[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [tipo, setTipo] = useState({} as TiposModel);

  const { toast } = useToast();
  const router = useRouter();

  const handleEditId = (key: any) => {
    setTipo(key);
    onOpen();
  };
  const handleDeleteId = async (key: any) => {
    const result = await deleteTipos(key);

    if (result.id == undefined || result.statusCode == 400) {
      toast({
        title: "Erro!",
        description: "Não foi possivel deletar!",
        duration: 3000,
      });
    } else {
      router.refresh();
      toast({
        title: "Sucesso!",
        description: "Tipos Deletado!",
        duration: 3000,
      });
    }
  };

  const handleSave = async () => {
    let result;

    if (tipo.id) {
      result = await editTipos(tipo);
    } else {
      result = await createTipos(tipo);
    }

    if (result.id == undefined || result.statusCode == 400) {
      toast({
        title: "Erro!",
        description: "Não foi possivel salvar!",
        duration: 3000,
      });
    } else {
      router.refresh();
      toast({
        title: "Sucesso!",
        description: "Tipos Salvo!",
        duration: 3000,
      });
    }
    onOpenChange();
  };

  return (
    <main className="flex flex-col gap-3">
      <DataTable
        columns={tipoColumns}
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
        isDismissable={false}
        placement="top-center"
        onClose={() => setTipo({} as TiposModel)}
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
                {tipo.id ? "Editar Tipo" : "Novo Tipo"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Tipo"
                  placeholder="Digite o titulo do tipo"
                  variant="bordered"
                  value={tipo.tipo}
                  onChange={(e) => setTipo({ ...tipo, tipo: e.target.value })}
                />
                <ColorPicker
                  value={tipo.color}
                  defaultValue="#1677ff"
                  onChange={(color) =>
                    setTipo({ ...tipo, color: color.toHexString() })
                  }
                  showText
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="secondary" onPress={() => handleSave()}>
                  {tipo.id ? "Editar" : "Criar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default TiposModal;
