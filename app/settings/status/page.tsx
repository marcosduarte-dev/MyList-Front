import React from "react";
import { ContentLayout } from "@/components/sidebar/content-layout";
import StatusModal from "./statusModal";
import { StatusModel } from "@/types";
import { getStatus } from "@/service/actions/statusService";

async function getData(): Promise<StatusModel[]> {
  return await getStatus();
}

const StatusProvider = async () => {
  const data = await getData();

  return (
    <ContentLayout title="Status">
      <StatusModal data={data} />
    </ContentLayout>
  );
};

export default StatusProvider;
