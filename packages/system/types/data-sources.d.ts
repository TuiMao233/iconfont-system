interface FontSources {
  getFonts: (options?: PaginationOptions) => Promise<PaginationResult>
  updateFont: (id: string, font: FontItem) => Promise<any>
  createFont: (font: FontItem) => Promise<any>
  deleteFont: (id: string) => Promise<any>
  deleteFonts: (ids: string[]) => Promise<any>
}

interface GroupSources {
  getGroups: () => Promise<any[]>
  updateGroup: (id: string, group: GroupItem) => Promise<any>
  createGroup: (group: GroupItem) => Promise<any>
  deleteGroup: (id: string) => Promise<any>
  /** 覆盖分组, 用于更换顺序 */
  // coverGroups: (groups: GroupItem[]) => Promise<any[]>
}
