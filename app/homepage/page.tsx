import { ContentLayout } from "@/components/sidebar/content-layout";
import React from "react";
import MediasData from "./mediasData";

import { getStatus } from "@/service/actions/statusService";
import { StatusModel } from "@/types";

async function getDataStatus(): Promise<StatusModel[]> {
  return await getStatus();
}

const Homepage = async () => {
  const status = await getDataStatus();

  return (
    <ContentLayout title="Home">
      <MediasData status={status} />
    </ContentLayout>
  );
};

export default Homepage;
