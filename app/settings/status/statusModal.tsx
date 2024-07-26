"use client";

import React, { useState } from "react";

import { statusColumns } from "./columns";
import { StatusModel } from "@/types";
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
  createStatus,
  deleteStatus,
  editStatus,
} from "@/service/actions/statusService";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const StatusModal = ({ data }: { data: StatusModel[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [status, setStatus] = useState({} as StatusModel);

  const { toast } = useToast();
  const router = useRouter();

  const handleEditId = (key: any) => {
    setStatus(key);
    onOpen();
  };
  const handleDeleteId = async (key: any) => {
    const result = await deleteStatus(key);

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
        description: "Status Deletado!",
        duration: 3000,
      });
    }
  };

  const handleSave = async () => {
    let result;

    if (status.id) {
      result = await editStatus(status);
    } else {
      result = await createStatus(status);
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
        description: "Status Salvo!",
        duration: 3000,
      });
    }
    onOpenChange();
  };

  return (
    <main className="flex flex-col gap-3">
      <DataTable
        columns={statusColumns}
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
        onClose={() => setStatus({} as StatusModel)}
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
                {status.id ? "Editar Status" : "Novo Status"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Status"
                  placeholder="Digite o titulo do status"
                  variant="bordered"
                  value={status.status}
                  onChange={(e) =>
                    setStatus({ ...status, status: e.target.value })
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="secondary" onPress={() => handleSave()}>
                  {status.id ? "Editar" : "Criar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default StatusModal;
