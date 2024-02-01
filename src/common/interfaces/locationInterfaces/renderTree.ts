import { TreeItemProps } from '@mui/lab/TreeItem'

export interface RenderTree {
  id: string
  name: string
  detail?: string
  children?: any
  sensor?: any
  info?: any
  imagePath?: string
  label?: string
}

export type StyledTreeItemProps = TreeItemProps & {
  nodeId: string
  labelText: string
  labelIcon?: string
  labelInfo?: string
  isMain?: boolean
  isFavorite?: boolean
}

export type StyledFavoriteTreeItemProps = TreeItemProps & {
  placeId?: string
  labelText: string
  labelInfo?: string
  isMain?: boolean
  isFavorite?: boolean
}
