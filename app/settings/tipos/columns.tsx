import { ColumnDef } from "@tanstack/react-table"
import { TiposModel } from "../../../types"
import type { TableProps } from 'antd';
 
export const tipoColumns: TableProps<TiposModel>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
  },
]